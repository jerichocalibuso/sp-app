import { Address, Order, OrderItem, Product, Role } from '@prisma/client'
import { LoaderFunction, redirect } from '@remix-run/node'
import { useLoaderData, Link } from '@remix-run/react'
import { authenticator } from '~/services/auth.server'

import { db } from '~/utils/db.server'

export const loader: LoaderFunction = async ({ params, request }) => {
  const { orderId } = params
  const user = await authenticator.isAuthenticated(request)

  if (!user?.role) {
    return redirect('/signin')
  }

  if (user?.role !== Role.CUSTOMER) {
    return redirect('/unauthorized')
  }

  const order = await db.order.findFirst({
    where: {
      id: orderId,
      userId: user?.id,
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

  if (!order) redirect('/cart')

  return { order }
}

interface OrderItemData extends OrderItem {
  product: Product
}

interface OrderData extends Order {
  orderItems: OrderItemData[]
  Address: Address
}
interface LoaderData {
  order: OrderData
}

export default function OrderDetailsPage() {
  const { order } = useLoaderData<LoaderData>()
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <div className='max-w-xl'>
          <h1 className='mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl'>
            Order details
          </h1>
          <p className='mt-2 text-base text-gray-500'>
            {new Date(order?.paidAt || '')?.toLocaleDateString('en-us', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }) || ''}
          </p>

          <dl className='mt-12 text-sm font-medium'>
            <dt className='text-gray-900'>Order ID</dt>
            <dd className='mt-2 text-red-500'>{order?.id || ''}</dd>
          </dl>
          <dl className='mt-6 text-sm font-medium'>
            <dt className='text-gray-900'>Order status</dt>
            <dd className='mt-2 text-red-500'>
              {order?.status?.replace(/_/g, ' ') || ''}
            </dd>
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
