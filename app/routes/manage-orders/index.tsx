import {
  Address,
  Order,
  OrderItem,
  Product,
  Status,
  User,
} from '@prisma/client'
import { LoaderFunction } from '@remix-run/node'
import { db } from '~/utils/db.server'
import { useNavigate } from 'react-router'
import { Outlet, useLoaderData } from '@remix-run/react'

interface OrderItemData extends OrderItem {
  product: Product
}

interface OrderData extends Order {
  orderItems: OrderItemData[]
  User: User | null
  Address: Address | null
}
interface LoaderData {
  orders: OrderData[]
}

export const loader: LoaderFunction = async ({ params }) => {
  const orders = await db.order.findMany({
    where: {
      status: {
        not: Status.IN_CART,
      },
    },
    include: {
      Product: true,
      User: true,
      Address: true,
      orderItems: {
        include: {
          product: true,
        },
      },
    },
  })

  return { orders }
}

export default function ManageOrdersPage() {
  const { orders } = useLoaderData<LoaderData>()
  const navigate = useNavigate()

  return (
    <>
      <div className=' bg-white px-4 py-5 pt-24 sm:px-6'>
        <h3 className='text-3xl font-extrabold leading-6 text-gray-900'>
          Manage Orders
        </h3>
        <p className='mt-3 text-sm text-gray-500'>
          View, edit, or delete orders.
        </p>
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
                      Order Id
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Customer
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Address
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Order Items
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
                      Date
                    </th>
                    <th scope='col' className='relative px-6 py-3'>
                      <span className='sr-only'>Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {orders.map((order) => {
                    return (
                      <tr
                        className='hover:cursor-pointer hover:bg-red-50'
                        key={order.id}
                        onClick={() => {
                          navigate(`/manage-orders/${order.id}`)
                        }}
                      >
                        <td className='whitespace-nowrap px-6 py-4'>
                          <div className='flex '>
                            <div className='text-sm font-medium text-gray-900'>
                              {order.id}
                            </div>
                          </div>
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          <div className='flex items-center'>
                            <div className=''>
                              <div className='text-sm font-medium text-gray-900'>
                                {order?.User?.name || 'GUEST'}
                              </div>
                              <div className='text-sm text-gray-500'>
                                {order?.User?.email || ''}
                              </div>
                              <div className='text-sm text-gray-500'>
                                {order?.User?.username || ''}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          <div className='flex items-center '>
                            <div className=''>
                              <div className='text-sm font-medium text-gray-900'>
                                {order?.Address?.address || 'No address'}
                              </div>
                              <div className='text-sm text-gray-500'>
                                {order?.Address?.city || ''}
                              </div>
                              <div className='text-sm text-gray-500'>
                                {order?.Address?.province || ''}
                              </div>
                              <div className='text-sm text-gray-500'>
                                {order?.Address?.contactPerson || ''}
                              </div>
                              <div className='text-sm text-gray-500'>
                                {order?.Address?.phoneNumber || ''}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          {order?.orderItems?.map((orderItem) => {
                            return (
                              <div
                                key={orderItem.id}
                                className='text-sm font-medium text-gray-900'
                              >
                                {orderItem.quantity || ''}x{' '}
                                {orderItem.product.name}
                              </div>
                            )
                          })}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                          {order.status.replace(/_/g, ' ')}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                          {new Date(order?.paidAt || '').toLocaleDateString()}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 text-right text-sm font-medium'>
                          <a
                            href='#'
                            className='text-red-500 hover:text-red-600'
                          >
                            Edit
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
