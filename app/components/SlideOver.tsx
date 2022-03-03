/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

import { Role, User } from '@prisma/client'
import { Form } from 'remix'

interface SlideOverProps {
  openSlideOver: boolean
  setOpenSlideOver: React.Dispatch<React.SetStateAction<boolean>>
  selectedUser: User | null
}

export default function SlideOver({
  openSlideOver,
  setOpenSlideOver,
  selectedUser,
}: SlideOverProps) {
  return (
    <Transition.Root show={openSlideOver} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-50 overflow-hidden'
        onClose={setOpenSlideOver}
      >
        <div className='absolute inset-0 overflow-hidden'>
          <Dialog.Overlay className='absolute inset-0' />
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>
          <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16'>
            <Transition.Child
              as={Fragment}
              enter='transform transition ease-in-out duration-300 sm:duration-300'
              enterFrom='translate-x-full'
              enterTo='translate-x-0'
              leave='transform transition ease-in-out duration-300 sm:duration-300'
              leaveFrom='translate-x-0'
              leaveTo='translate-x-full'
            >
              <div className='pointer-events-auto w-screen max-w-md'>
                <form className='flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl'>
                  <div className='h-0 flex-1 overflow-y-auto'>
                    <div className='border-b py-6 px-4 sm:px-6'>
                      <div className='flex items-center justify-between'>
                        <Form method='post'><button type='submit'>Submit</button></Form>
                        <Dialog.Title className='text-lg font-medium text-black'>
                          {' '}
                          Edit User{' '}
                        </Dialog.Title>
                        <div className='ml-3 flex h-7 items-center'>
                          <button
                            type='button'
                            className='rounded-md  text-gray-900 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-white'
                            onClick={() => setOpenSlideOver(false)}
                          >
                            <span className='sr-only'>Close panel</span>
                            <XIcon className='h-6 w-6' aria-hidden='true' />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-1 flex-col justify-between'>
                      <div className='px-4 sm:px-6'>
                        <div className='space-y-6 pt-6 pb-5'>
                          <div>
                            <label
                              htmlFor='name'
                              className='block text-sm font-medium text-gray-900'
                            >
                              {' '}
                              Name{' '}
                            </label>
                            <div className='mt-1'>
                              <input
                                type='text'
                                name='name'
                                id='name'
                                value={selectedUser?.name || ''}
                                className='block w-full rounded-md  border border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                              />
                            </div>
                          </div>
                         
                          <div>
                            <label htmlFor='role' className='block text-sm font-medium text-gray-900'>
                              Role
                            </label>
                            <select
                              id='role'
                              name='role'
                              value={selectedUser?.role || ''}
                              className='mt-1 relative block w-full rounded-md border border-gray-300 bg-transparent p-3 shadow-sm focus:z-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                            >
                              {Object.values(Role).map((role) => (<option value={role}>{role}</option>))}
                            </select>
                          </div>
                          <div>
                            <label
                              htmlFor='username'
                              className='block text-sm font-medium text-gray-900'
                            >
                              {' '}
                              Username{' '}
                            </label>
                            <div className='mt-1'>
                              <span
                                className='block w-full rounded-md  border bg-gray-50 text-gray-500 border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                >{selectedUser?.username || 'N/A'}</span>
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor='provider'
                              className='block text-sm font-medium text-gray-900'
                            >
                              {' '}
                              Provider{' '}
                            </label>
                            <div className='mt-1'>
                              <span
                                className='block w-full rounded-md  border bg-gray-50 text-gray-500 border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                >{selectedUser?.provider || 'N/A'}</span>
                            </div>
                          </div>
                          <div>
                            <label
                              htmlFor='email'
                              className='block text-sm font-medium text-gray-900'
                            >
                              {' '}
                              Email{' '}
                            </label>
                            <div className='mt-1'>
                              <span
                                className='block w-full rounded-md  border bg-gray-50 text-gray-500 border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                              >{selectedUser?.email || 'N/A'}</span>
                            </div>
                          </div>

                          {/* <div>
                            <label
                              htmlFor='description'
                              className='block text-sm font-medium text-gray-900'
                            >
                              {' '}
                              Description{' '}
                            </label>
                            <div className='mt-1'>
                              <textarea
                                id='description'
                                name='description'
                                rows={4}
                                className='block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                                defaultValue={''}
                              />
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-shrink-0 justify-end px-4 py-4'>
                    <button
                      type='button'
                      className='rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      onClick={() => setOpenSlideOver(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
