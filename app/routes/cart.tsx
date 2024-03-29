/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { CheckCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { OrderItem, Role, Status } from '@prisma/client'
import {
  ActionFunction,
  Link,
  LoaderFunction,
  redirect,
  useLoaderData,
} from 'remix'
import { validationError } from 'remix-validated-form'
import invariant from 'tiny-invariant'
import { Quantity } from '~/components/Quantity'
import { authenticator } from '~/services/auth.server'
import { commitSession, getSession } from '~/services/guest.server'
import { db } from '~/utils/db.server'
import { Product } from './products'

export const action: ActionFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request)
  if (user?.role === Role.RIDER || user?.role === Role.ADMIN) {
    return redirect('/unauthorized')
  }

  const formData = await request.formData()
  const productId = formData.get('productId') as string
  const _method = formData.get('_method') as string
  const product = await db.product.findFirst({
    where: {
      id: productId,
    },
  })

  if (!product) {
    return null
  }

  if (user?.role === Role.CUSTOMER) {
    const currentOrder = await db.order.findFirst({
      where: {
        userId: user?.id,
        status: 'IN_CART',
      },
      include: {
        orderItems: true,
      },
    })
    if (currentOrder) {
      const existingProduct = currentOrder.orderItems.find(
        (p) => p.productId === product.id
      )
      if (_method === 'ADD') {
        if (existingProduct) {
          await db.orderItem.update({
            where: {
              id: existingProduct.id,
            },
            data: {
              quantity: {
                increment: 1,
              },
            },
          })
        } else {
          await db.orderItem.create({
            data: {
              productId: product.id,
              quantity: 1,
              orderId: currentOrder.id,
            },
          })
        }
        const updatedOrder = await db.order.update({
          where: { id: currentOrder.id },
          data: {
            amount: { increment: product.price },
          },
          include: { orderItems: true },
        })

        return { order: updatedOrder }
      } else {
        const updatedOrderItem = await db.orderItem.update({
          where: {
            id: existingProduct?.id,
          },
          data: {
            quantity: { decrement: 1 },
          },
        })

        if (updatedOrderItem?.quantity === 0) {
          await db.orderItem.delete({
            where: {
              id: existingProduct?.id,
            },
          })
        }

        const updatedOrder = await db.order.update({
          where: { id: currentOrder.id },
          data: {
            amount: { decrement: product.price },
          },
          include: { orderItems: true },
        })

        if (updatedOrder.orderItems.length === 0) {
          await db.order.delete({
            where: {
              id: currentOrder?.id,
            },
          })
        } else {
          return updatedOrder
        }
      }
    }
  } else {
    const session = await getSession(request)
    const orderItems = session.get('orderItems') || []
    const existingProduct = orderItems.find(
      (orderItem: OrderItem) => orderItem.productId === product.id
    )
    const existingProductIndex = orderItems.findIndex(
      (orderItem: OrderItem) => orderItem.productId === product.id
    )

    if (existingProduct) {
      orderItems[existingProductIndex] = {
        ...existingProduct,
        quantity:
          _method === 'ADD'
            ? existingProduct.quantity + 1
            : existingProduct.quantity - 1,
      }

      if (orderItems[existingProductIndex].quantity === 0) {
        orderItems.splice(existingProductIndex, 1)
      }
    }
    session.set('orderItems', orderItems)
    return redirect('/cart', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    })
  }
  return null
}
export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request)
  if (user?.role === Role.RIDER || user?.role === Role.ADMIN) {
    redirect('/unauthorized')
  }

  if (user?.id) {
    const currentOrder = await db.order.findFirst({
      where: {
        userId: user.id,
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

    return { currentOrder }
  } else {
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
      orderItem.product = products.find((p) => p.id === orderItem.productId)
      amount = amount + orderItem.product.price * orderItem.quantity
    })

    return { currentOrder: { orderItems: orderItems, amount } }
  }
}

export default function CartPage() {
  const { currentOrder } = useLoaderData()
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 pt-24 pb-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          Shopping Cart
        </h1>
        <div className='mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16'>
          <section aria-labelledby='cart-heading' className='lg:col-span-7'>
            <h2 id='cart-heading' className='sr-only'>
              Items in your shopping cart
            </h2>

            <ul
              role='list'
              className='divide-y divide-gray-200 border-t border-b border-gray-200'
            >
              {currentOrder?.orderItems?.map((orderItem: any) => {
                const product = orderItem.product
                return (
                  <li
                    key={product.id}
                    className='flex pt-6 pb-3 sm:pt-10 sm:pb-5'
                  >
                    <div className='flex-shrink-0'>
                      <img
                        src={product.imageUrl}
                        className='h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48'
                      />
                    </div>

                    <div className='justify-betweensm:ml-6 ml-4 flex flex-1 flex-col'>
                      <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
                        <div>
                          <div className='flex justify-between'>
                            <h3 className='text-lg sm:text-xl'>
                              <a
                                href={`products/${product.id}`}
                                className='font-medium text-gray-900 hover:text-red-500'
                              >
                                {product.name}
                              </a>
                            </h3>
                          </div>

                          <p className='mt-1 text-base font-medium text-red-500 sm:text-lg'>
                            ₱{product.price}
                          </p>
                          <div className='mt-4'>
                            <Quantity
                              quantity={orderItem.quantity}
                              productId={product.id?.toString()}
                            />
                          </div>
                        </div>

                        <div className='mt-4 sm:mt-0 sm:pr-9'>
                          <div className='absolute top-0 right-0'>
                            <button
                              type='button'
                              className='-m-2 inline-flex p-2 pt-2.5 text-gray-400 hover:text-red-500'
                            >
                              <span className='sr-only'>Remove</span>
                              {/* <TrashIcon
                                className='h-5 w-5'
                                aria-hidden='true'
                              /> */}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
            {!currentOrder?.orderItems && (
              <h2 className='mt-2 text-xl font-semibold'>Your cart is empty</h2>
            )}
          </section>

          {/* Order summary */}
          <section
            aria-labelledby='summary-heading'
            className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'
          >
            <h2
              id='summary-heading'
              className='text-lg font-medium text-gray-900'
            >
              Order summary
            </h2>

            <dl className='mt-6 space-y-4'>
              <div className='flex items-center justify-between'>
                <dt className='text-sm text-gray-600'>Subtotal</dt>
                <dd className='text-sm font-medium text-gray-900'>
                  ₱{currentOrder?.amount ? currentOrder?.amount : 0}
                </dd>
              </div>
              <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
                <dt className='flex items-center text-sm text-gray-600'>
                  <span>Delivery fee</span>
                  <a
                    href='#'
                    className='ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500'
                  >
                    {currentOrder?.amount ? (
                      <>
                        <span className='sr-only'>Delivery fee</span>
                        <QuestionMarkCircleIcon
                          className='h-5 w-5'
                          aria-hidden='true'
                        />
                      </>
                    ) : null}
                  </a>
                </dt>
                <dd className='text-right text-sm font-medium text-gray-900 '>
                  {currentOrder?.amount ? (
                    <>
                      <p className='line-through'>₱50</p>
                    </>
                  ) : (
                    <>
                      <p>₱0</p>
                    </>
                  )}
                </dd>
              </div>
              {currentOrder?.amount && (
                <div className='flex justify-end space-x-2'>
                  <p className='text-right text-sm font-medium text-gray-900'>
                    Free delivery promo applied
                  </p>
                  <CheckCircleIcon className='w-5 text-green-500' />
                </div>
              )}

              <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
                <dt className='text-base font-medium text-gray-900'>
                  Total amount
                </dt>
                <dd className='text-base font-medium text-red-500'>
                  ₱{currentOrder?.amount ? currentOrder?.amount : 0}
                </dd>
              </div>
            </dl>

            <div className='mt-6'>
              {currentOrder?.orderItems?.length ? (
                <Link to='/checkout'>
                  <button className='w-full rounded-md border border-transparent bg-red-500 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50'>
                    Checkout
                  </button>
                </Link>
              ) : (
                <button
                  disabled
                  className='w-full rounded-md border border-transparent bg-red-200 py-3 px-4 text-base font-medium text-white shadow-sm hover:cursor-not-allowed hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-100 focus:ring-offset-2 focus:ring-offset-gray-50'
                >
                  Checkout
                </button>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
