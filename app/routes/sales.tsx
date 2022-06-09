import { ArrowSmUpIcon } from '@heroicons/react/outline'
import { ArrowSmDownIcon } from '@heroicons/react/solid'
import { OrderData } from './manage-orders'
import { LoaderFunction } from '@remix-run/node'
import { db } from '~/utils/db.server'
import { Status } from '@prisma/client'
import { useLoaderData, useSearchParams, Link } from '@remix-run/react'
import { useNavigate } from 'react-router'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type LoaderData = {
  orders: OrderData[]
  ordersCount: number
  currentMonthGross: number
  previousMonthGross: number
  currentMonthCount: number
  previousMonthCount: number
  currentCompletionRate: number
  previousCompletionRate: number
}
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const page = parseInt(url?.searchParams?.get('page') || '0')
  const orders = await db.order.findMany({
    skip: page * 10,
    take: 10,
    where: {
      paidAt: {
        not: null,
      },
      status: Status.COMPLETED,
    },
    include: {
      Address: true,
      orderItems: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      updatedAt: 'desc',
    },
  })

  const ordersCount = await db.order.count({
    where: {
      paidAt: {
        not: null,
      },
      status: Status.COMPLETED,
    },
  })

  const nonCompletedCurrentOrders = await db.order.findMany({
    where: {
      createdAt: {
        lte: new Date('2022-06-30'),
        gte: new Date('2022-06-01'),
      },
      status: {
        not: Status.COMPLETED,
      },
    },
  })

  const completedCurrentOrders = await db.order.findMany({
    where: {
      createdAt: {
        lte: new Date('2022-06-30'),
        gte: new Date('2022-06-01'),
      },
      status: Status.COMPLETED,
    },
  })

  const nonCompletedPreviousOrders = await db.order.findMany({
    where: {
      createdAt: {
        lte: new Date('2022-05-30'),
        gte: new Date('2022-05-01'),
      },
      status: {
        not: Status.COMPLETED,
      },
    },
  })

  const completedPreviousOrders = await db.order.findMany({
    where: {
      createdAt: {
        lte: new Date('2022-05-30'),
        gte: new Date('2022-05-01'),
      },
      status: Status.COMPLETED,
    },
  })
  const currentMonthOrders = await db.order.findMany({
    where: {
      paidAt: {
        lte: new Date('2022-06-30'),
        gte: new Date('2022-06-01'),
      },
      status: Status.COMPLETED,
    },
  })

  const previousMonthOrders = await db.order.findMany({
    where: {
      paidAt: {
        lte: new Date('2022-05-30'),
        gte: new Date('2022-05-01'),
      },
      status: Status.COMPLETED,
    },
  })

  const currentMonthGross = currentMonthOrders.reduce(
    (sum, order) => sum + order.amount,
    0
  )

  const previousMonthGross = previousMonthOrders.reduce(
    (sum, order) => sum + order.amount,
    0
  )
  const currentMonthCount = currentMonthOrders.length
  const previousMonthCount = previousMonthOrders.length
  console.log(
    `nonCompletedCurrentOrders.length: ${JSON.stringify(
      nonCompletedCurrentOrders.length,
      null,
      2
    )}`
  )
  const currentCompletionRate = (
    (completedCurrentOrders.length /
      (nonCompletedCurrentOrders.length + completedCurrentOrders.length)) *
    100
  ).toFixed(2)
  const previousCompletionRate = (
    (completedPreviousOrders.length /
      (nonCompletedPreviousOrders.length + completedPreviousOrders.length)) *
    100
  ).toFixed(2)
  return {
    orders,
    ordersCount,
    currentMonthGross,
    previousMonthGross,
    currentMonthCount,
    previousMonthCount,
    currentCompletionRate,
    previousCompletionRate,
  }
}

export default function Example() {
  const {
    orders,
    ordersCount,
    currentMonthGross,
    previousMonthGross,
    currentMonthCount,
    previousMonthCount,
    currentCompletionRate,
    previousCompletionRate,
  } = useLoaderData<LoaderData>()

  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page') || '0')

  const cards = [
    {
      name: 'Total Gross Sales',
      stat: currentMonthGross,
      previousStat: previousMonthGross,
      change: ((currentMonthGross / previousMonthGross) * 100).toFixed(2),
      changeType:
        (currentMonthGross / previousMonthGross) * 100 > 0
          ? 'increase'
          : 'decrease',
    },
    {
      name: 'Average Completed Order Count',
      stat: currentMonthCount,
      previousStat: previousMonthCount,
      change: ((currentMonthCount / previousMonthCount) * 100).toFixed(2),
      changeType:
        (currentMonthCount / previousMonthCount) * 100 > 0
          ? 'increase'
          : 'decrease',
    },
    {
      name: 'Average Order Completion Rate',
      stat: `${currentCompletionRate}%`,
      previousStat: `${previousCompletionRate}%`,
      change: (currentCompletionRate - previousCompletionRate).toFixed(2),
      changeType:
        currentCompletionRate - previousCompletionRate > 0
          ? 'increase'
          : 'decrease',
    },
  ]

  const graphData = [
    {
      name: 'Jan',
      sales: 5000,
    },
    {
      name: 'Feb',
      sales: 6000,
    },
    {
      name: 'Mar',
      sales: 4000,
    },
    {
      name: 'Apr',
      sales: 3000,
    },
    {
      name: 'May',
      sales: previousMonthGross,
    },
    {
      name: 'Jun',
      sales: currentMonthGross,
    },
  ]
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className=' bg-white px-4 py-5 pt-24 sm:px-6'>
        <h3 className='text-3xl font-extrabold leading-6 text-gray-900'>
          Sales Dashboard
        </h3>
        <p className='mt-3 text-sm text-gray-500'>
          Analyze sales from completed orders.
        </p>
      </div>
      <div className='min-h-full'>
        <main className='flex-1 pb-8'>
          <div className=''>
            <div className='px-4 sm:px-6 lg:px-8'>
              <h2 className='text-xl font-bold leading-6 text-gray-900'>
                Overview
              </h2>
              <div className='mt-4 flex justify-between'>
                <div className='h-64 w-full'>
                  <ResponsiveContainer width='100%' height='100%'>
                    <LineChart
                      data={graphData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray='3 3' />
                      <XAxis dataKey='name' />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type='monotone'
                        dataKey='sales'
                        stroke='#ef4444'
                        activeDot={{ r: 8 }}
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <h2 className='my-8 text-xl font-bold leading-6 text-gray-900 '>
                Current month statistics
              </h2>
              <div className='mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-y-0 md:divide-x'>
                {/* Card */}
                {cards.map((card) => (
                  <div key={card.name} className=' px-4 py-5 sm:p-6'>
                    <dt className='text-base font-normal text-gray-900'>
                      {card.name}
                    </dt>
                    <dd className='mt-1 flex items-baseline justify-between md:block lg:flex'>
                      <div className='flex items-baseline text-2xl font-semibold text-gray-900'>
                        {card.stat}
                        <span className='ml-2 text-sm font-medium text-gray-500'>
                          from {card.previousStat}
                        </span>
                      </div>

                      <div
                        className={classNames(
                          card.changeType === 'increase'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800',
                          'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
                        )}
                      >
                        {card.changeType === 'increase' ? (
                          <ArrowSmUpIcon
                            className='-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500'
                            aria-hidden='true'
                          />
                        ) : (
                          <ArrowSmDownIcon
                            className='-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500'
                            aria-hidden='true'
                          />
                        )}
                        <span className='sr-only'>
                          {card.changeType === 'increase'
                            ? 'Increased'
                            : 'Decreased'}{' '}
                          by
                        </span>
                        {card.change}%
                      </div>
                    </dd>
                  </div>
                ))}
              </div>
            </div>

            <h2 className='my-8 px-4 text-xl font-bold leading-6 text-gray-900 sm:px-6 lg:px-8'>
              Completed orders
            </h2>

            {/* Activity table (small breakpoint and up) */}
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
                                {new Date(
                                  order?.paidAt || ''
                                ).toLocaleDateString()}
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
                    <nav
                      className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'
                      aria-label='Pagination'
                    >
                      <div className='hidden sm:block'>
                        <p className='text-sm text-gray-700'>
                          Showing{' '}
                          <span className='font-medium'>
                            {(page + 1) * 10 - 9}
                          </span>{' '}
                          to{' '}
                          <span className='font-medium'>
                            {(page + 1) * 10 > ordersCount
                              ? ordersCount
                              : (page + 1) * 10}
                          </span>{' '}
                          of <span className='font-medium'>{ordersCount}</span>{' '}
                          results
                        </p>
                      </div>
                      <div className='flex flex-1 justify-between sm:justify-end'>
                        <Link
                          to={`?page=${page - 1}`}
                          className={
                            page < 1
                              ? `hidden`
                              : `relative inline-flex  items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`
                          }
                        >
                          Previous
                        </Link>
                        <Link
                          to={`?page=${page + 1}`}
                          className={
                            page + 1 > ordersCount / 10
                              ? 'hidden'
                              : `relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`
                          }
                        >
                          Next
                        </Link>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
