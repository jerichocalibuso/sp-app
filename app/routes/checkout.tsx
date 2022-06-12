import { Fragment, useEffect, useState } from 'react'
import { Listbox, RadioGroup, Transition } from '@headlessui/react'
import {
  CheckCircleIcon,
  CheckIcon,
  CreditCardIcon,
  SelectorIcon,
} from '@heroicons/react/solid'
import { CashIcon } from '@heroicons/react/outline'
import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
  useActionData,
  useLoaderData,
} from 'remix'
import { authenticator } from '~/services/auth.server'
import { Address, Order, OrderItem, Role, Status } from '@prisma/client'
import { db } from '~/utils/db.server'
import { Product } from './products'
import { z } from 'zod'
import { zfd } from 'zod-form-data'
import { withZod } from '@remix-validated-form/with-zod'
import { ValidatedForm, validationError } from 'remix-validated-form'
import { Input } from '~/components/Input'
import {
  payCard,
  createGCashSource,
  createGrabPaySource,
  payMaya,
} from '~/services/paymongo.server'
import { destroySession, getSession } from '~/services/guest.server'
import { v4 as uuidv4 } from 'uuid'

const baseSchema = z.object({
  contactPerson: zfd.text(z.string().nonempty()),
  phoneNumber: zfd.text(z.string().nonempty()),
  address: zfd.text(z.string().nonempty()),
  city: zfd.text(z.string().nonempty()),
  cardNumber: zfd.text(z.string().optional()),
})

export const addressValidator = withZod(baseSchema)

const paymentMethods = [
  { id: 'cod', title: 'Cash on delivery' },
  { id: 'card', title: 'Credit or debit card' },
  { id: 'gcash', title: 'GCash', imageSrc: '/images/gcash-logo.png' },
  { id: 'paymaya', title: 'PayMaya', imageSrc: '/images/paymaya-logo.png' },
  { id: 'grabpay', title: 'GrabPay', imageSrc: '/images/grabpay-logo.png' },
]

enum PaymentMethod {
  CARD = 'card',
  COD = 'cod',
  GCASH = 'gcash',
  GRABPAY = 'grabpay',
  PAYMAYA = 'paymaya',
}

interface OrderItemData extends OrderItem {
  product: Product
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const action: ActionFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request)

  if (user?.role === Role.ADMIN || user?.role === Role.RIDER) {
    return redirect('/unauthorized')
  }

  const formData = await request.formData()
  const newAddress = formData.get('newAddress')
  const orderId = formData.get('orderId')?.toString() || ''
  const paymentMethod = formData.get('paymentMethod[id]')?.toString() || ''

  if (!user?.id) {
    const session = await getSession(request)
    const orderItems = session.get('orderItems') || []
    let amount = 0
    const productIds = [
      ...new Set(orderItems.map((o: any) => o?.productId || '')),
    ] as string[]

    const products = await db.product.findMany({
      where: { id: { in: productIds || [] } },
    })

    orderItems.forEach((orderItem: any) => {
      orderItem.product = products.find(
        (p: any) => p.id === orderItem.productId
      )
      amount = amount + orderItem.product.price * orderItem.quantity
    })

    const order = await db.order.create({
      data: {
        amount,
        status: Status.PACKAGING,
      },
    })

    const orderId = order.id
    const orderItemInputs = orderItems.map((orderItem: any) => ({
      orderId,
      productId: orderItem.productId,
      quantity: orderItem.quantity,
    }))

    await db.orderItem.createMany({
      data: orderItemInputs,
    })

    const nickname = formData.get('addressNickname')?.toString() || 'Home'
    if (!nickname)
      return validationError({
        fieldErrors: {
          nickname: 'Required',
        },
      })
    const phoneNumber = formData.get('phoneNumber')?.toString() || ''
    const city = formData.get('city')?.toString() || ''
    const address = formData.get('address')?.toString() || ''
    const contactPerson = formData.get('contactPerson')?.toString() || ''

    const orderAddress = await db.address.create({
      data: {
        nickname,
        phoneNumber,
        city,
        address,
        contactPerson,
        userId: user?.id || null,
      },
    })

    if (paymentMethod === PaymentMethod.CARD) {
      const cardNumber = formData.get('cardNumber')?.toString() || ''
      const nameOnCard = formData.get('nameOnCard')?.toString() || ''
      const expiration = formData.get('expiration')?.toString() || ''
      const cvc = formData.get('cvc')?.toString() || ''

      if (!cardNumber || !nameOnCard || !expiration || !cvc) {
        return validationError({
          fieldErrors: {
            cardNumber: !cardNumber ? 'Required' : '',
            nameOnCard: !nameOnCard ? 'Required' : '',
            expiration: !expiration ? 'Required' : '',
            cvc: !cvc ? 'Required' : '',
          },
        })
      }

      const res = await payCard({
        cardNumber,
        nameOnCard,
        expiration,
        cvc,
        amount: order?.amount || 100,
      })

      if (res.errors) {
        return json({
          paymentErrors: res.errors,
        })
      }

      await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          status: Status.PACKAGING,
          paymentOption: 'CARD',
          addressId: orderAddress?.id,
          paymentReference: res.paymentReference,
          paidAt: new Date(),
        },
      })

      await db.product.updateMany({
        where: {
          id: {
            in: orderItemInputs?.map((o: any) => o.productId) || [],
          },
        },
        data: {
          stock: { decrement: 1 },
        },
      })
      return redirect(`order-success/${orderId}`, {
        headers: {
          'Set-Cookie': await destroySession(session),
        },
      })
    } else if (paymentMethod === PaymentMethod.GCASH) {
      const res = await createGCashSource({
        orderId,
        amount: order?.amount || 100,
      })
      if (res.errors) {
        return json({
          paymentErrors: res.errors,
        })
      }

      const { sourceId, checkoutUrl } = res
      await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          paymentOption: 'GCASH',
          addressId: orderAddress?.id,
          sourceId: sourceId,
        },
      })

      return redirect(checkoutUrl)
    } else if (paymentMethod === PaymentMethod.GRABPAY) {
      const res = await createGrabPaySource({
        orderId,
        amount: order?.amount || 0,
      })
      if (res.errors) {
        return json({
          paymentErrors: res.errors,
        })
      }

      const { sourceId, checkoutUrl } = res
      await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          paymentOption: 'GRABPAY',
          addressId: orderAddress?.id,
          sourceId: sourceId,
        },
      })

      return redirect(checkoutUrl)
    } else if (paymentMethod === PaymentMethod.PAYMAYA) {
      const res = await payMaya({
        orderId,
        amount: order?.amount || 0,
      })

      if (res.errors) {
        return json({
          paymentErrors: res.errors,
        })
      }

      const { paymentIntentId, checkoutUrl } = res
      await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          paymentOption: 'PAYMAYA',
          addressId: orderAddress?.id,
          paymentIntentId: paymentIntentId,
        },
      })
      return redirect(checkoutUrl)
    } else {
      //COD
      await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          status: Status.PACKAGING,
          paymentOption: 'COD',
          addressId: orderAddress?.id,
          paidAt: new Date(),
        },
      })

      await db.product.updateMany({
        where: {
          id: {
            in: orderItemInputs?.map((o: any) => o.productId) || [],
          },
        },
        data: {
          stock: { decrement: 1 },
        },
      })
      const session = await getSession(request)

      return redirect(`order-success/${orderId}`, {
        headers: {
          'Set-Cookie': await destroySession(session),
        },
      })
    }
  } else {
    const order = await db.order.findFirst({
      where: {
        id: orderId,
        status: 'IN_CART',
      },
      include: {
        orderItems: true,
      },
    })

    let orderAddress: Address | null = null
    if (newAddress) {
      const nickname = formData.get('addressNickname')?.toString() || 'Home'
      if (!nickname)
        return validationError({
          fieldErrors: {
            nickname: 'Required',
          },
        })
      const phoneNumber = formData.get('phoneNumber')?.toString() || ''
      const city = formData.get('city')?.toString() || ''
      const address = formData.get('address')?.toString() || ''
      const contactPerson = formData.get('contactPerson')?.toString() || ''

      orderAddress = await db.address.create({
        data: {
          nickname,
          phoneNumber,
          city,
          address,
          contactPerson,
          userId: user?.id || null,
        },
      })
    } else {
      const addressId = formData.get('selectedAddressId')?.toString()
      if (addressId) {
        orderAddress = await db.address.findFirst({
          where: {
            id: addressId,
          },
        })
      }
    }

    if (paymentMethod === PaymentMethod.CARD) {
      const cardNumber = formData.get('cardNumber')?.toString() || ''
      const nameOnCard = formData.get('nameOnCard')?.toString() || ''
      const expiration = formData.get('expiration')?.toString() || ''
      const cvc = formData.get('cvc')?.toString() || ''

      if (!cardNumber || !nameOnCard || !expiration || !cvc) {
        return validationError({
          fieldErrors: {
            cardNumber: !cardNumber ? 'Required' : '',
            nameOnCard: !nameOnCard ? 'Required' : '',
            expiration: !expiration ? 'Required' : '',
            cvc: !cvc ? 'Required' : '',
          },
        })
      }

      const res = await payCard({
        cardNumber,
        nameOnCard,
        expiration,
        cvc,
        amount: order?.amount || 100,
      })

      if (res.errors) {
        return json({
          paymentErrors: res.errors,
        })
      }

      await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          status: Status.PACKAGING,
          paymentOption: 'CARD',
          addressId: orderAddress?.id,
          paymentReference: res.paymentReference,
          paidAt: new Date(),
        },
      })

      await db.product.updateMany({
        where: {
          id: {
            in: order?.orderItems?.map((o) => o.productId) || [],
          },
        },
        data: {
          stock: { decrement: 1 },
        },
      })

      return redirect(`order-success/${orderId}`)
    } else if (paymentMethod === PaymentMethod.GCASH) {
      const res = await createGCashSource({
        orderId,
        amount: order?.amount || 100,
      })
      if (res.errors) {
        return json({
          paymentErrors: res.errors,
        })
      }

      const { sourceId, checkoutUrl } = res
      await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          paymentOption: 'GCASH',
          addressId: orderAddress?.id,
          sourceId: sourceId,
        },
      })

      return redirect(checkoutUrl)
    } else if (paymentMethod === PaymentMethod.GRABPAY) {
      const res = await createGrabPaySource({
        orderId,
        amount: order?.amount || 0,
      })
      if (res.errors) {
        return json({
          paymentErrors: res.errors,
        })
      }

      const { sourceId, checkoutUrl } = res
      await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          paymentOption: 'GRABPAY',
          addressId: orderAddress?.id,
          sourceId: sourceId,
        },
      })

      return redirect(checkoutUrl)
    } else if (paymentMethod === PaymentMethod.PAYMAYA) {
      const res = await payMaya({
        orderId,
        amount: order?.amount || 0,
      })

      if (res.errors) {
        return json({
          paymentErrors: res.errors,
        })
      }

      const { paymentIntentId, checkoutUrl } = res
      await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          paymentOption: 'PAYMAYA',
          addressId: orderAddress?.id,
          paymentIntentId: paymentIntentId,
        },
      })
      return redirect(checkoutUrl)
    } else {
      //COD
      await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          status: Status.PACKAGING,
          paymentOption: 'COD',
          addressId: orderAddress?.id,
          paidAt: new Date(),
        },
      })

      await db.product.updateMany({
        where: {
          id: {
            in: order?.orderItems?.map((o) => o.productId) || [],
          },
        },
        data: {
          stock: { decrement: 1 },
        },
      })
      return redirect(`order-success/${orderId}`)
    }
  }
}

export const loader: LoaderFunction = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request)

  if (user?.role === Role.ADMIN || user?.role === Role.RIDER) {
    return redirect('/unauthorized')
  }

  if (!user?.id) {
    const session = await getSession(request)
    const orderItems = session.get('orderItems') || []
    let amount = 0

    const productIds = [
      ...new Set(orderItems.map((o: any) => o?.productId || '')),
    ] as string[]

    const products = await db.product.findMany({
      where: { id: { in: productIds || [] } },
    })
    orderItems.forEach(async (orderItem: any) => {
      orderItem.product = products.find(
        (p: any) => p.id === orderItem.productId
      )
      amount = amount + orderItem.product.price * orderItem.quantity
    })

    const url = new URL(request.url)
    const paymentFailed = url.searchParams.get('paymentFailed')

    return json({
      currentOrder: { orderItems: orderItems, amount },
      paymentError: paymentFailed ? true : false,
    })
  } else {
    const currentOrder = await db.order.findFirst({
      where: {
        userId: user?.id,
        status: 'IN_CART',
      },
      include: {
        orderItems: {
          include: {
            product: true,
          },
        },
      },
    })

    if (!currentOrder) redirect('/')

    const savedAddresses = await db.address.findMany({
      where: {
        userId: user?.id || '',
      },
    })

    const url = new URL(request.url)
    const paymentFailed = url.searchParams.get('paymentFailed')

    const data = { currentOrder, savedAddresses, paymentError: false }
    if (paymentFailed) data.paymentError = true

    return data
  }
}

export default function Example() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    paymentMethods?.length && paymentMethods[0]
  )

  const { currentOrder, savedAddresses } = useLoaderData()

  const orderItems = currentOrder?.orderItems || []

  const [selected, setSelected] = useState<Address | null>(
    savedAddresses?.length ? savedAddresses[0] : null
  )
  const [newAddress, setNewAddress] = useState(!savedAddresses?.length)

  const loaderData = useLoaderData()
  const actionData = useActionData()

  return (
    <div className='bg-gray-50'>
      <ValidatedForm
        validator={addressValidator}
        method='post'
        className='mx-auto max-w-2xl px-4 pt-24 pb-24 sm:px-6 lg:max-w-7xl lg:px-8'
      >
        <input
          type='hidden'
          value={newAddress ? 'true' : ''}
          name='newAddress'
        />

        <input type='hidden' value={currentOrder?.id || ''} name='orderId' />
        <h1 className='mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          Checkout
        </h1>
        <h2 className='sr-only'>Checkout</h2>

        <div className='lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16'>
          <div>
            <div>
              {currentOrder?.userId ? (
                <div>
                  {savedAddresses?.length ? (
                    <div className=' lg:max-w-[36rem] '>
                      <input
                        type='hidden'
                        value={selected?.id || ''}
                        name='selectedAddressId'
                      />
                      <Listbox
                        disabled={newAddress}
                        value={selected}
                        onChange={setSelected}
                      >
                        {({ open }) => (
                          <>
                            <Listbox.Label className='block text-xl font-medium text-gray-900'>
                              Saved addresses
                            </Listbox.Label>
                            <div className='relative mt-4 mb-4'>
                              <Listbox.Button className=' relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 disabled:cursor-not-allowed disabled:text-gray-400 sm:text-sm'>
                                <span className='block truncate py-1'>
                                  {newAddress && savedAddresses?.length > 0
                                    ? 'Saving the following information as a new address...'
                                    : selected?.nickname || 'Select an address'}
                                </span>
                                <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                                  <SelectorIcon
                                    className='h-5 w-5 text-gray-400'
                                    aria-hidden='true'
                                  />
                                </span>
                              </Listbox.Button>

                              <Transition
                                show={open}
                                as={Fragment}
                                leave='transition ease-in duration-100'
                                leaveFrom='opacity-100'
                                leaveTo='opacity-0'
                              >
                                <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                                  {savedAddresses?.length > 0 &&
                                    savedAddresses.map((address: Address) => (
                                      <Listbox.Option
                                        key={address.id}
                                        className={({ active }) =>
                                          classNames(
                                            active
                                              ? 'bg-red-500 text-white'
                                              : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                          )
                                        }
                                        value={address}
                                      >
                                        {({ selected, active }) => (
                                          <>
                                            <span
                                              className={classNames(
                                                selected
                                                  ? 'font-semibold'
                                                  : 'font-normal',
                                                'block truncate'
                                              )}
                                            >
                                              {address.nickname}
                                            </span>

                                            {selected ? (
                                              <span
                                                className={classNames(
                                                  active
                                                    ? 'text-white'
                                                    : 'text-red-600',
                                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                                )}
                                              >
                                                <CheckIcon
                                                  className='h-5 w-5'
                                                  aria-hidden='true'
                                                />
                                              </span>
                                            ) : null}
                                          </>
                                        )}
                                      </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>

                      {currentOrder?.userId ? (
                        <div className='my-4 flex items-center'>
                          <input
                            checked={newAddress}
                            onChange={() => setNewAddress(!newAddress)}
                            type='checkbox'
                            name='newAddress'
                            id='new-address'
                            className='h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500'
                          />
                          <label
                            htmlFor='new-address'
                            className='ml-2 text-sm text-gray-900'
                          >
                            Save the following address as a new address
                          </label>
                        </div>
                      ) : null}
                      {newAddress ? (
                        <div className='my-4'>
                          <Input
                            name='addressNickname'
                            label='Address nickname'
                            type='text'
                            className={`${
                              loaderData?.error?.message && 'border-red-500'
                            }`}
                          />
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <>
                      <div className='my-4 flex items-center'>
                        <input
                          checked={newAddress}
                          onChange={() => setNewAddress(!newAddress)}
                          type='checkbox'
                          name='newAddress'
                          id='new-address'
                          className='h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500'
                        />
                        <label
                          htmlFor='new-address'
                          className='ml-2 text-sm text-gray-900'
                        >
                          Save the following address as a new address
                        </label>
                      </div>
                      {newAddress ? (
                        <div className='my-4'>
                          <Input
                            name='addressNickname'
                            label='Address nickname'
                            type='text'
                            className={`${
                              loaderData?.error?.message && 'border-red-500'
                            }`}
                          />
                        </div>
                      ) : null}
                    </>
                  )}
                </div>
              ) : null}

              <div className='mt-5 border-t border-gray-200 pt-5'>
                <h2 className='text-xl font-medium text-gray-900'>
                  Contact information
                </h2>
                <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
                  <div>
                    <Input
                      name='contactPerson'
                      label='Contact person'
                      type='text'
                      value={selected?.contactPerson || undefined}
                      className={`${
                        loaderData?.error?.message && 'border-red-500'
                      }`}
                    />
                  </div>

                  <div>
                    <Input
                      name='phoneNumber'
                      label='Phone number'
                      type='text'
                      value={selected?.phoneNumber || undefined}
                      className={`${
                        loaderData?.error?.message && 'border-red-500'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-5 border-t border-gray-200 pt-5'>
              <h2 className='text-lg font-medium text-gray-900'>
                Delivery information
              </h2>

              <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
                <div className='sm:col-span-2'>
                  <Input
                    name='address'
                    label='Address'
                    type='text'
                    value={selected?.address || undefined}
                    className={`${
                      loaderData?.error?.message && 'border-red-500'
                    }`}
                  />
                </div>

                <div>
                  <Input
                    name='city'
                    label='City / Municipality'
                    type='text'
                    value={selected?.city || undefined}
                    className={`${
                      loaderData?.error?.message && 'border-red-500'
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor='province'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Province
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='province'
                      id='province'
                      value='Cavite'
                      disabled
                      autoComplete='address-level1'
                      className='block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-red-500 focus:ring-red-500 disabled:border disabled:text-gray-500  sm:text-sm'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-5 border-t border-gray-200 pt-5'>
              <RadioGroup
                name='paymentMethod'
                value={selectedPaymentMethod}
                onChange={setSelectedPaymentMethod}
              >
                <RadioGroup.Label className='text-lg font-medium text-gray-900'>
                  Payment method
                </RadioGroup.Label>

                <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
                  {paymentMethods.map((paymentMethod) => (
                    <RadioGroup.Option
                      key={paymentMethod.id}
                      value={paymentMethod}
                      className={({ checked, active }) =>
                        classNames(
                          checked ? 'border-transparent' : 'border-gray-300',
                          active ? 'ring-2 ring-green-500' : '',
                          'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                        )
                      }
                    >
                      {({ checked, active }) => (
                        <>
                          <div className='flex-4 flex max-h-8 items-center justify-between'>
                            <div className='flex items-center '>
                              {paymentMethod.id === 'card' && (
                                <CreditCardIcon className=' mr-2 w-10 text-green-500' />
                              )}
                              {paymentMethod.id === 'cod' && (
                                <CashIcon className=' mr-2 w-8 text-green-500' />
                              )}
                              <RadioGroup.Label
                                as='span'
                                className='flex text-base font-medium text-gray-900'
                              >
                                {paymentMethod?.imageSrc ? (
                                  <img
                                    src={paymentMethod.imageSrc}
                                    alt={paymentMethod.id}
                                    className='w-24'
                                  />
                                ) : (
                                  paymentMethod.title
                                )}
                              </RadioGroup.Label>
                              {/* <RadioGroup.Description
                                as='span'
                                className='mt-1 flex items-center text-sm text-gray-500'
                              >
                                {paymentMethod.turnaround}
                              </RadioGroup.Description> */}
                              {/* <RadioGroup.Description
                                as='span'
                                className='mt-6 text-sm font-medium text-gray-900'
                              >
                                {paymentMethod.price}
                              </RadioGroup.Description> */}
                            </div>
                            {checked ? (
                              <div>
                                <CheckCircleIcon
                                  className=' ml-3 h-5 w-5 text-green-500'
                                  aria-hidden='true'
                                />
                              </div>
                            ) : null}
                          </div>

                          <div
                            className={classNames(
                              active ? 'border' : 'border-2',
                              checked
                                ? 'border-green-500'
                                : 'border-transparent',
                              'pointer-events-none absolute -inset-px rounded-lg'
                            )}
                            aria-hidden='true'
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
              {selectedPaymentMethod &&
              selectedPaymentMethod.id === PaymentMethod.CARD ? (
                <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
                  <div className='sm:col-span-2'>
                    <Input
                      name='cardNumber'
                      label='Credit / debit card number'
                      defaultValue='4343434343434345'
                      type='text'
                      className={`${
                        loaderData?.error?.message && 'border-red-500'
                      }`}
                    />
                  </div>

                  <div className='sm:col-span-2'>
                    <Input
                      name='nameOnCard'
                      label='Name on card'
                      defaultValue='Cardholder Name'
                      type='text'
                      className={`${
                        loaderData?.error?.message && 'border-red-500'
                      }`}
                    />
                  </div>

                  <div>
                    <Input
                      name='expiration'
                      label='Expiration date (MM/YY)'
                      type='text'
                      defaultValue='09/22'
                      className={`${
                        loaderData?.error?.message && 'border-red-500'
                      }`}
                    />
                  </div>

                  <div>
                    <Input
                      name='cvc'
                      label='CVC'
                      type='text'
                      defaultValue='123'
                      className={`${
                        loaderData?.error?.message && 'border-red-500'
                      }`}
                    />
                  </div>
                </div>
              ) : null}
            </div>

            {/* Payment */}
          </div>

          {/* Order summary */}
          <div className='mt-5 lg:mt-0'>
            <h2 className='text-xl font-medium text-gray-900'>Order summary</h2>

            <div className='mt-6 rounded-lg border border-gray-200 bg-white shadow-sm'>
              <h3 className='sr-only'>Items in your cart</h3>
              <ul role='list' className='divide-y divide-gray-200'>
                {orderItems?.map((orderItem: OrderItemData) => {
                  const product = orderItem.product
                  return (
                    <li key={product.id} className='flex py-6 px-4 sm:px-6'>
                      <div className='flex-shrink-0'>
                        <img
                          src={product.imageUrl}
                          className='w-40 rounded-md'
                        />
                      </div>

                      <div className='ml-6 flex flex-1 flex-col pt-4'>
                        <div className='flex'>
                          <div className='min-w-0 flex-1'>
                            <h4 className='text-lg'>
                              <a
                                href={`/products/${product.id}`}
                                className='font-medium text-gray-700 hover:text-red-800'
                              >
                                {product.name}
                              </a>
                            </h4>
                            <p className='text-md mt-1 text-red-500'>
                              ₱{product.price}
                            </p>
                            <div className='mt-2 '>
                              <p>Quantity: {orderItem.quantity}</p>
                            </div>
                          </div>

                          {/* <div className='ml-4 flow-root flex-shrink-0'>
                            <button
                              type='button'
                              className='-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-red-500'
                            >
                              <span className='sr-only'>Remove</span>
                              <TrashIcon
                                className='h-5 w-5'
                                aria-hidden='true'
                              />
                            </button>
                          </div> */}
                        </div>

                        <div className='flex flex-1 items-end justify-between pt-2'></div>
                      </div>
                    </li>
                  )
                })}
              </ul>
              <dl className='space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6'>
                <div className='flex items-center justify-between'>
                  <dt className='text-sm'>Subtotal</dt>
                  <dd className='text-sm font-medium text-gray-900'>
                    ₱{currentOrder?.amount ? currentOrder?.amount : 0}
                  </dd>
                </div>
                <div className='flex items-center justify-between'>
                  <dt className='text-sm'>Delivery fee</dt>
                  <dd className='text-right text-sm font-medium text-gray-900'>
                    {currentOrder?.amount ? (
                      <>
                        <p className='line-through'>₱50</p>
                      </>
                    ) : (
                      <>
                        <p>₱0</p>
                      </>
                    )}
                    {currentOrder?.amount && (
                      <div className='mt-2 flex justify-end space-x-2'>
                        <p className='text-right text-sm font-medium text-gray-900'>
                          Free delivery promo applied
                        </p>
                        <CheckCircleIcon className='w-5 text-green-500' />
                      </div>
                    )}
                  </dd>
                </div>

                <div className='flex items-center justify-between border-t border-gray-200 pt-6'>
                  <dt className='text-base font-medium'>Total amount</dt>
                  <dd className='text-base font-medium text-red-500'>
                    {' '}
                    ₱{currentOrder?.amount ? currentOrder?.amount : 0}
                  </dd>
                </div>
              </dl>

              <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
                <div>
                  {loaderData?.paymentError ? (
                    <>
                      <p className='mb-4 font-semibold text-red-600'>
                        Payment Errors
                      </p>
                      <p className='mb-4 font-medium text-red-600'>
                        Payment failed. Please try again.
                      </p>
                    </>
                  ) : null}
                  {actionData?.paymentErrors ? (
                    <>
                      <p className='mb-4 font-semibold text-red-600'>
                        Payment Errors
                      </p>
                      {actionData.paymentErrors.map((e: string) => (
                        <p key={e} className='mb-4 font-medium text-red-600'>
                          {e}
                        </p>
                      ))}
                    </>
                  ) : null}
                </div>
                <button
                  type='submit'
                  className='w-full rounded-md border border-transparent bg-red-500 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50'
                >
                  Confirm order
                </button>
              </div>
            </div>
          </div>
        </div>
      </ValidatedForm>
    </div>
  )
}
