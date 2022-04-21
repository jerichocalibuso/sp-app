import { Fragment, useState } from 'react'
import { Dialog, Menu, Popover, Tab, Transition } from '@headlessui/react'
import {
  ChevronDownIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  XIcon,
} from '@heroicons/react/outline'
import { Link } from 'remix'
import { User } from '@prisma/client'
import { ArrowRightIcon } from '@heroicons/react/solid'
import AccountDropdown from './AccountDropdown'

const navigation = {
  pages: [
    { name: 'All Products', href: '/products' },
    { name: 'Chicken', href: '/chicken' },
    { name: 'Pork', href: '/pork' },
    { name: 'Beef', href: '/beef' },
  ],
}

type NavbarProps = {
  user: User | null
}

export default function Example({ user }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-50 flex lg:hidden'
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
              <div className='flex px-4 pt-5 pb-2.5'>
                <button
                  type='button'
                  className='-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-red-500'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as='div' className='mt-2'>
                <div className='border-b border-gray-200'></div>
                <Tab.Panels as={Fragment}></Tab.Panels>
              </Tab.Group>

              <div className='space-y-6 border-t border-gray-200 py-6 px-4'>
                {navigation.pages.map((page) => (
                  <div key={page.name} className='flow-root'>
                    <Link
                      to={page.href}
                      className='-m-2 block p-2 font-medium text-gray-900'
                    >
                      {page.name}
                    </Link>
                  </div>
                ))}
              </div>

              <div className='space-y-6 border-t border-gray-200 py-6 px-4'>
                <div className='flow-root'>
                  <Link
                    to='#'
                    className='-m-2 block p-2 font-medium text-gray-900'
                  >
                    Sign in
                  </Link>
                </div>
                <div className='flow-root'>
                  <Link
                    to='#'
                    className='-m-2 block p-2 font-medium text-gray-900'
                  >
                    Sign Up
                  </Link>
                </div>
              </div>

              <div className='space-y-6 border-t border-gray-200 py-6 px-4'></div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className='relative'>
        <nav aria-label='Top'>
          {/* Secondary navigation */}
          <div className='fixed top-0 left-0 right-0 z-40 border-b border-gray-200 bg-white'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className=''>
                <div className='flex h-16 items-center justify-between'>
                  {/* Logo (lg+) */}
                  <div className='hidden lg:flex lg:items-center'>
                    <Link to='/'>
                      <span className='sr-only'>Camille Meat Shop</span>
                      <img
                        className='h-8 w-auto'
                        src='/images/logo.png'
                        alt='Camille Meat Shop Logo'
                      />
                    </Link>
                  </div>

                  <div className='hidden h-full lg:flex'>
                    {/* Mega menus */}
                    <Popover.Group className='ml-8'>
                      <div className='flex h-full justify-center space-x-8'>
                        {navigation.pages.map((page) => (
                          <Link
                            key={page.name}
                            to={page.href}
                            className='flex items-center text-sm font-medium text-gray-700 hover:text-red-600'
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className='flex flex-1 items-center  lg:hidden'>
                    <button
                      type='button'
                      className='-ml-2 rounded-md bg-white p-2 text-gray-700 hover:text-red-500'
                      onClick={() => {
                        setMobileMenuOpen(true)
                      }}
                    >
                      <span className='sr-only'>Open menu</span>
                      <MenuIcon className='h-6 w-6' aria-hidden='true' />
                    </button>

                    {/* Search */}
                    <Link
                      to='#'
                      className='ml-2 p-2 text-gray-700 hover:text-red-600'
                    >
                      <span className='sr-only'>Search</span>
                      <SearchIcon className='h-6 w-6' aria-hidden='true' />
                    </Link>
                  </div>

                  {/* Logo (lg-) */}
                  <Link to='/' className='lg:hidden'>
                    <span className='sr-only'>Camille Meat Shop</span>
                    <img src='/images/logo.png' alt='' className='h-8 w-auto' />
                  </Link>

                  <div className='flex flex-1 items-center justify-end'>
                    <div className='flex items-center lg:ml-8'>
                      <div className='flex space-x-8'></div>

                      <div className='flex space-x-6'>
                        <Link
                          to='#'
                          className=' text-gray-700 hover:text-red-600'
                        >
                          <span className='sr-only'>Search</span>
                          <SearchIcon className='h-6 w-6' aria-hidden='true' />
                        </Link>
                        <Link to='/cart' className='group  flex items-center'>
                          <ShoppingCartIcon
                            className='h-6 w-6 flex-shrink-0 text-gray-700 group-hover:text-red-600'
                            aria-hidden='true'
                          />
                          <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-red-600'>
                            0
                          </span>
                          <span className='sr-only'>
                            items in cart, view bag
                          </span>
                        </Link>
                      </div>

                      <div className='hidden lg:flex'>
                        <span
                          className='mx-4 h-6 w-px bg-gray-200 lg:mx-6'
                          aria-hidden='true'
                        />

                        {/* My Account or Sign in */}
                        {user ? (
                          <AccountDropdown user={user} />
                        ) : (
                          <Link
                            to='/signin'
                            className='group -m-2 p-2 text-gray-700 hover:text-red-600'
                          >
                            <div className='hidden content-center space-x-2 lg:flex'>
                              <span className='sr-only'>Sign in</span>
                              Sign in <ArrowRightIcon className='w-3' />
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
