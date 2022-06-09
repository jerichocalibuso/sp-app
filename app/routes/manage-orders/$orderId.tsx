import { useLoaderData, Link, useActionData } from '@remix-run/react'
import { LoaderFunction, ActionFunction, redirect } from '@remix-run/node'
import {
  Address,
  Order,
  OrderItem,
  Product,
  Role,
  Status,
  User,
} from '@prisma/client'
import { db } from '~/utils/db.server'
import { z } from 'zod'
import { zfd } from 'zod-form-data'
import { withZod } from '@remix-validated-form/with-zod'
import {
  FieldErrors,
  ValidatedForm,
  validationError,
} from 'remix-validated-form'
import { Input } from '~/components/Input'
import { authenticator } from '~/services/auth.server'
import { StatusSelect } from '~/components/StatusSelect'
import Autocomplete from '~/components/Autocomplete'
import { RiderAutocomplete } from '~/components/RiderAutocomplete'
import { useState } from 'react'
import DeleteOrderModal from '~/components/DeleteOrderModal'

const baseSchema = z.object({
  amount: zfd.text(z.string()),
  status: zfd.text(z.string()),
})

export const orderValidator = withZod(baseSchema)

interface OrderItemData extends OrderItem {
  product: Product
}

interface OrderData extends Order {
  Address: Address
  orderItems: OrderItemData[]
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/signin',
  })
  const { role } = user
  if (role !== Role.ADMIN) {
    return redirect('/unauthorized')
  }

  const { orderId } = params
  const formData = await request.formData()

  if (formData.get('_method') === 'delete') {
    const orderId = formData.get('orderId') as string

    await db.order.delete({
      where: { id: orderId },
    })
    return redirect('/manage-orders')
  }

  const riderId = formData.get('riderId') as string
  const amount = formData.get('amount') as string
  const status = formData.get('status') as string
  if (!riderId) {
    return {
      error: 'Rider is required',
    }
  }

  const order = await db.order.findFirst({
    where: {
      id: orderId,
    },
  })
  await db.order.update({
    where: {
      id: orderId,
    },
    data: {
      riderId: riderId || order?.riderId,
      amount: parseInt(amount) || order?.amount,
      status: (status as Status) || order?.status,
    },
  })

  return null
}

type LoaderData = {
  order: OrderData
  error: FieldErrors | null
  riders: User[] | []
}
export const loader: LoaderFunction = async ({ params, request }) => {
  const { orderId } = params
  const user = await authenticator.isAuthenticated(request)

  if (!user?.role) {
    return redirect('/signin')
  }

  if (user?.role !== Role.ADMIN) {
    return redirect('/unauthorized')
  }

  const order = await db.order.findFirst({
    where: {
      id: orderId,
    },
    include: {
      Address: true,
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  })

  const riders = await db.user.findMany({
    where: {
      role: Role.RIDER,
    },
  })

  if (!order) redirect('/manage-orders')

  return { order, riders }
}

export default function Example() {
  const loaderData = useLoaderData<LoaderData>()
  const { order, riders } = loaderData
  const actionData = useActionData()
  const [confirmingDeletion, setConfirmingDeletion] = useState(false)

  return (
    <div className='bg-white'>
      <DeleteOrderModal
        {...{ confirmingDeletion, setConfirmingDeletion }}
        orderId={order?.id || ''}
      />
      <div className='mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <div className='max-w-xl'>
          <h1 className='mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl'>
            Edit order
          </h1>
          <dl className='mt-6 mb-4 text-sm font-medium'>
            <h2 className='text-lg text-gray-900'>Editable details</h2>
          </dl>
          <ValidatedForm
            method='post'
            validator={orderValidator}
            className='space-y-4'
          >
            <RiderAutocomplete
              riderId={order.riderId}
              riders={riders}
              name='riderId'
              label='Rider name'
              error={actionData?.error || ''}
              className={`w-full ${
                loaderData?.error?.message && 'border-red-500'
              }`}
            />
            <Input
              name='amount'
              label='Amount'
              type='text'
              defaultValue={order.amount?.toString()}
              className={`w-full ${
                loaderData?.error?.message && 'border-red-500'
              }`}
            />
            <StatusSelect
              name='status'
              label='Status'
              value={order.status}
              className={`${loaderData?.error?.message && 'border-red-500'}`}
            />
            <div className='flex justify-end'>
              <button
                onClick={() => setConfirmingDeletion(true)}
                className='mr-2 inline-flex w-full justify-end rounded-md border border-transparent border-red-600 px-4 py-2 text-base font-medium text-red-500 shadow-sm hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto sm:text-sm  '
              >
                Delete
              </button>
              <button
                type='submit'
                className='inline-flex w-full justify-end rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto sm:text-sm'
              >
                Submit
              </button>
            </div>
          </ValidatedForm>
          <dl className='mt-6 text-sm font-medium'>
            <h2 className='text-lg text-gray-900'>Other details</h2>
          </dl>
          <dl className='mt-6 text-sm font-medium'>
            <dt className='text-gray-900'>Order ID</dt>
            <dd className='mt-2 text-red-500'>{order?.id || ''}</dd>
          </dl>
          <dl className='mt-6 text-sm font-medium'>
            <dt className='text-gray-900'>Paid at</dt>
            <dd className='mt-2 text-red-500'>
              {new Date(order?.paidAt || '')?.toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }) || ''}
            </dd>
          </dl>
          <dl className='mt-6 text-sm font-medium'>
            <dt className='text-gray-900'>Order status</dt>
            <dd className='mt-2 text-red-500'>{order?.status || ''}</dd>
          </dl>
        </div>

        <div className='mt-10 border-t border-gray-200'>
          <h2 className='sr-only'>Your order</h2>

          <h3 className='sr-only'>Items</h3>
          {order.orderItems.map((orderItem) => {
            const quantity = orderItem.quantity
            const product = orderItem.product
            return (
              <div
                key={product.id}
                className='flex space-x-6 border-b border-gray-200 py-10'
              >
                <Link to={`/products/${product?.id}`}>
                  <div className='h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40'>
                    <img loading='lazy' src={product?.imageUrl || ''} />
                  </div>
                </Link>

                <div className='flex flex-auto flex-col'>
                  <div>
                    <h4 className='font-medium text-gray-900 hover:text-red-500'>
                      <Link to={`/products/${product?.id}`}>
                        {product.name}
                      </Link>
                    </h4>
                    <p className='mt-2 text-sm text-gray-600'>
                      {product.description}
                    </p>
                  </div>
                  <div className='mt-6 flex flex-1 items-end'>
                    <dl className='flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6'>
                      <div className='flex'>
                        <dt className='font-medium text-gray-900'>Quantity</dt>
                        <dd className='ml-2 text-gray-700'>{quantity}</dd>
                      </div>
                      <div className='flex pl-4 sm:pl-6'>
                        <dt className='font-medium text-gray-900'>Price</dt>
                        <dd className='ml-2 text-gray-700'>₱{product.price}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            )
          })}

          <div className=''>
            <h3 className='sr-only'>Your information</h3>

            <h4 className='sr-only'>Addresses</h4>
            <dl className='grid grid-cols-2 gap-x-6 py-10 text-sm'>
              <div>
                <dt className='font-medium text-gray-900'>
                  Delivery information
                </dt>
                <dd className='mt-2 text-gray-700'>
                  <address className='not-italic'>
                    <span className='block'>{order.Address.address}</span>
                    <span className='block'>{order.Address.city}, Cavite</span>
                    <span className='block'>{order.Address.contactPerson}</span>
                    <span className='block'>{order.Address.phoneNumber}</span>
                  </address>
                </dd>
              </div>
              <div>
                <dt className='font-medium text-gray-900'>Payment method</dt>
                <dd className='mt-2 text-gray-700'>
                  <div className='not-italic'>
                    <span className='block'>{order.paymentOption}</span>
                  </div>
                </dd>
              </div>
            </dl>

            <h3 className='sr-only'>Summary</h3>

            <dl className='space-y-6 border-t border-gray-200 pt-10 text-sm'>
              <div className='flex justify-between'>
                <dt className='font-medium text-gray-900'>Subtotal</dt>
                <dd className='text-gray-700'>₱{order.amount}</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='flex font-medium text-gray-900'>
                  Discount
                  <span className='ml-2 rounded-full bg-red-500 py-0.5 px-2 text-xs text-white'>
                    Free Delivery
                  </span>
                </dt>
                <dd className='text-gray-700'>-₱50</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='font-medium text-gray-900'>Delivery</dt>
                <dd className='text-gray-700'>$0</dd>
              </div>
              <div className='flex justify-between'>
                <dt className='font-medium text-gray-900'>Total</dt>
                <dd className='text-gray-900'>₱{order.amount}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
