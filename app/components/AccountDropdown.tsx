import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Role, User } from '@prisma/client'
import { Fragment } from 'react'
import { Form, Link } from 'remix'
import classNames from '~/utils/classNames'

interface MenuItem {
  label: string
  route: string
}

const adminMenuItems: MenuItem[] = [
  {
    label: 'Manage Users',
    route: '/manage-users',
  },
  {
    label: 'Manage Products',
    route: '/manage-products',
  },
  {
    label: 'Manage Orders',
    route: '/manage-orders',
  },
  {
    label: 'Sales',
    route: '/sales',
  },
]

const customerMenuItems: MenuItem[] = [
  {
    label: 'Order History',
    route: '/order-history',
  },
]
const getMenuItems = (role: Role) => {
  if (role === Role.ADMIN) {
    return adminMenuItems.map((item) => (
      <Menu.Item key={item.route}>
        {({ active }) => (
          <Link
            to={item.route}
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block px-4 py-2 text-sm'
            )}
          >
            {item.label}
          </Link>
        )}
      </Menu.Item>
    ))
  } else if (role === Role.RIDER) {
  } else if (role === Role.CUSTOMER) {
    return customerMenuItems.map((item) => (
      <Menu.Item key={item.route}>
        {({ active }) => (
          <Link
            to={item.route}
            className={classNames(
              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
              'block px-4 py-2 text-sm'
            )}
          >
            {item.label}
          </Link>
        )}
      </Menu.Item>
    ))
  }
}

export default function AccountDropdown({ user }: { user: User }) {
  const { role, name, username, email } = user
  return (
    <Menu as='div' className='hidden text-left lg:relative lg:inline-block'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center rounded-md  text-sm font-medium text-gray-700 hover:text-red-500'>
          My Account
          <ChevronDownIcon
            className='-mr-1 ml-2 mt-0.5 h-4 w-4'
            aria-hidden='true'
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='px-4 py-3'>
            <p className='text-sm'>Signed in as</p>
            <p className='mt-0.5 truncate text-sm font-medium text-gray-900'>
              {name || username || email}
            </p>
          </div>
          <div className='py-1'>{getMenuItems(role)}</div>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to='/signout'
                  type='submit'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block w-full px-4 py-2 text-left text-sm'
                  )}
                >
                  Sign out
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
