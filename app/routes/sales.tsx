/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          cyan: colors.cyan,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  ArrowSmUpIcon,
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  MenuAlt1Icon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline'
import {
  ArrowSmDownIcon,
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
  SearchIcon,
} from '@heroicons/react/solid'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'History', href: '#', icon: ClockIcon, current: false },
  { name: 'Balances', href: '#', icon: ScaleIcon, current: false },
  { name: 'Cards', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Recipients', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Reports', href: '#', icon: DocumentReportIcon, current: false },
]
const secondaryNavigation = [
  { name: 'Settings', href: '#', icon: CogIcon },
  { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const cards = [
  {
    name: 'Total Gross Sales',
    stat: '71,897',
    previousStat: '70,946',
    change: '12%',
    changeType: 'increase',
  },
  {
    name: 'Average Order Amount',
    stat: '1123',
    previousStat: '774',
    change: '145%',
    changeType: 'increase',
  },
  {
    name: 'Average Order Completion Rate',
    stat: '90%',
    previousStat: '95%',
    change: '5%',
    changeType: 'decrease',
  },
]
const transactions = [
  {
    id: 1,
    name: '123-456',
    href: '#',
    amount: '₱1,000',
    status: 'Completed',
    date: 'January 11, 2022',
    datetime: '2022-01-11',
  },
  {
    id: 1,
    name: '123-456',
    href: '#',
    amount: '₱1,000',
    status: 'Completed',
    date: 'January 11, 2022',
    datetime: '2022-01-11',
  },
  {
    id: 1,
    name: '123-456',
    href: '#',
    amount: '₱1,000',
    status: 'Completed',
    date: 'January 11, 2022',
    datetime: '2022-01-11',
  },
  {
    id: 1,
    name: '123-456',
    href: '#',
    amount: '₱1,000',
    status: 'Completed',
    date: 'January 11, 2022',
    datetime: '2022-01-11',
  },
  {
    id: 1,
    name: '123-456',
    href: '#',
    amount: '₱1,000',
    status: 'Completed',
    date: 'January 11, 2022',
    datetime: '2022-01-11',
  },
  {
    id: 1,
    name: '123-456',
    href: '#',
    amount: '₱1,000',
    status: 'Completed',
    date: 'January 11, 2022',
    datetime: '2022-01-11',
  },
  {
    id: 1,
    name: '123-456',
    href: '#',
    amount: '₱1,000',
    status: 'Completed',
    date: 'January 11, 2022',
    datetime: '2022-01-11',
  },
  // More transactions...
]
const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800',
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

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
                <div className='h-52 w-full'>{/* <Graph /> */}</div>
              </div>
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
                        {card.change}
                      </div>
                    </dd>
                  </div>
                ))}
              </div>
            </div>

            <h2 className='mt-8 px-4 text-xl font-bold leading-6 text-gray-900 sm:px-6 lg:px-8'>
              Completed orders
            </h2>

            {/* Activity list (smallest breakpoint only) */}
            <div className='shadow sm:hidden'>
              <ul
                role='list'
                className='mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden'
              >
                {transactions.map((transaction) => (
                  <li key={transaction.id}>
                    <a
                      href={transaction.href}
                      className='block bg-white px-4 py-4 hover:bg-gray-50'
                    >
                      <span className='flex items-center space-x-4'>
                        <span className='flex flex-1 space-x-2 truncate'>
                          <span className='flex flex-col truncate text-sm text-gray-500'>
                            <span className='truncate'>{transaction.name}</span>
                            <span>
                              <span className='font-medium text-gray-900'>
                                {transaction.amount}
                              </span>{' '}
                            </span>
                            <time dateTime={transaction.datetime}>
                              {transaction.date}
                            </time>
                          </span>
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <nav
                className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3'
                aria-label='Pagination'
              >
                <div className='flex flex-1 justify-between'>
                  <a
                    href='#'
                    className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500'
                  >
                    Previous
                  </a>
                  <a
                    href='#'
                    className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500'
                  >
                    Next
                  </a>
                </div>
              </nav>
            </div>

            {/* Activity table (small breakpoint and up) */}
            <div className='hidden sm:block'>
              <div className='px-4 sm:px-6 lg:px-8'>
                <div className='mt-2 flex flex-col'>
                  <div className='min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg'>
                    <table className='min-w-full divide-y divide-gray-200'>
                      <thead>
                        <tr>
                          <th className='bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'>
                            Order Id
                          </th>
                          <th className='bg-gray-50 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500'>
                            Amount
                          </th>
                          <th className='hidden bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 md:block'>
                            Status
                          </th>
                          <th className='bg-gray-50 px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500'>
                            Date
                          </th>
                        </tr>
                      </thead>
                      <tbody className='divide-y divide-gray-200 bg-white'>
                        {transactions.map((transaction) => (
                          <tr key={transaction.id} className='bg-white'>
                            <td className='w-full max-w-0 whitespace-nowrap px-6 py-4 text-sm text-gray-900'>
                              <div className='flex'>
                                <a
                                  href={transaction.href}
                                  className='group inline-flex space-x-2 truncate text-sm'
                                >
                                  <CashIcon
                                    className='h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                                    aria-hidden='true'
                                  />
                                  <p className='truncate text-gray-500 group-hover:text-gray-900'>
                                    {transaction.name}
                                  </p>
                                </a>
                              </div>
                            </td>
                            <td className='whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500'>
                              <span className='font-medium text-gray-900'>
                                {transaction.amount}{' '}
                              </span>
                            </td>
                            <td className='hidden whitespace-nowrap px-6 py-4 text-sm text-gray-500 md:block'>
                              <span
                                className={classNames(
                                  'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize'
                                )}
                              >
                                {transaction.status}
                              </span>
                            </td>
                            <td className='whitespace-nowrap px-6 py-4 text-right text-sm text-gray-500'>
                              <time dateTime={transaction.datetime}>
                                {transaction.date}
                              </time>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {/* Pagination */}
                    <nav
                      className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'
                      aria-label='Pagination'
                    >
                      <div className='hidden sm:block'>
                        <p className='text-sm text-gray-700'>
                          Showing <span className='font-medium'>1</span> to{' '}
                          <span className='font-medium'>10</span> of{' '}
                          <span className='font-medium'>20</span> results
                        </p>
                      </div>
                      <div className='flex flex-1 justify-between sm:justify-end'>
                        <a
                          href='#'
                          className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
                        >
                          Previous
                        </a>
                        <a
                          href='#'
                          className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
                        >
                          Next
                        </a>
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
