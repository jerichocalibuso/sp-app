import { Order, OrderItem, Product, Role } from '@prisma/client'
import { LoaderFunction, redirect } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { useNavigate } from 'react-router'
import { authenticator } from '~/services/auth.server'
import { db } from '~/utils/db.server'

interface OrderItemData extends OrderItem {
  product: Product
}

interface OrderData extends Order {
  orderItems: OrderItemData[]
}
interface LoaderData {
  orders: OrderData[]
}
export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request)

  if (!user?.role) {
    return redirect('/signin')
  }

  if (user?.role !== Role.CUSTOMER) {
    return redirect('/unauthorized')
  }

  const orders = await db.order.findMany({
    where: {
      userId: user?.id,
      paidAt: {
        not: null,
      },
    },
    include: {
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  })

  if (!orders) return null

  const productIds: string[] = []

  return { orders }
}

export default function Example() {
  const { orders } = useLoaderData<LoaderData>()
  const navigate = useNavigate()

  return (
    <>
      <div className='bg-white px-4 py-5 pt-24 sm:flex sm:items-center sm:px-6'>
        <div className='sm:flex-auto'>
          <h3 className='text-3xl font-extrabold leading-6 text-gray-900'>
            Order history
          </h3>
          <p className='mt-3 text-sm text-gray-500'>
            View your previous orders.
          </p>
        </div>
      </div>
      <div className='flex flex-col px-4'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Order ID
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Status
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Products
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Amount
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Paid at
                    </th>

                    <th scope='col' className='relative px-6 py-3'>
                      <span className='sr-only'>View details</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {orders?.map((order) => {
                    return (
                      <tr
                        className='hover:cursor-pointer hover:bg-red-50'
                        key={order.id}
                        onClick={() => {
                          navigate(`/order-history/${order.id}`)
                        }}
                      >
                        <td className='whitespace-nowrap px-6 py-4'>
                          <div className=''>
                            <div className='text-sm font-medium text-gray-900'>
                              {order.id}
                            </div>
                          </div>
                        </td>
                        <td className='wrap px-6 py-4'>
                          <div className='text-sm text-gray-900'>
                            {order.status}
                          </div>
                        </td>
                        <td className='wrap px-6 py-4'>
                          <div className='text-sm text-gray-900'>
                            {order.orderItems.map((orderItem) => {
                              const quantity = orderItem.quantity
                              const product = orderItem.product
                              return (
                                <div key={product.id}>
                                  {quantity}x {product.name}
                                </div>
                              )
                            })}
                          </div>
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          <div className='text-sm text-gray-900'>
                            {order.amount}
                          </div>
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          <div className='text-sm text-gray-900'>
                            {new Date(order?.paidAt || '').toLocaleDateString()}
                          </div>
                        </td>

                        <td className='whitespace-nowrap px-6 py-4 text-right text-sm font-medium'>
                          <a
                            href='#'
                            className='text-red-500 hover:text-red-600'
                          >
                            View details
                          </a>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
