/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { TrashIcon, XIcon } from '@heroicons/react/outline'

import { Product } from '@prisma/client'
import { Link, useLoaderData, useTransition } from 'remix'
import { ValidatedForm } from 'remix-validated-form'
import { clientValidator } from '~/routes/manage-products'
import { Input } from '../Input'
import { CategorySelect } from '../CategorySelect'
import { Fieldset } from '../Fieldset'

interface AddEditProductForm {
  openSlideOver: boolean
  setOpenSlideOver: React.Dispatch<React.SetStateAction<boolean>>
  selectedProduct: Product | null
  setOpenUploadImageModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddEditProductForm({
  openSlideOver,
  setOpenSlideOver,
  selectedProduct,
  setOpenUploadImageModal,
}: AddEditProductForm) {
  const loaderData = useLoaderData()
  const transition = useTransition()

  return (
    <>
      <Transition.Root show={openSlideOver} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-40 overflow-hidden'
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
                  <ValidatedForm
                    encType='multipart/form-data'
                    method='post'
                    className='flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl'
                    validator={clientValidator}
                  >
                    <div className='h-0 flex-1 overflow-y-auto'>
                      <div className='border-b py-6 px-4 sm:px-6'>
                        <div className='flex items-center justify-between'>
                          <Dialog.Title className='text-lg font-medium text-black'>
                            {`${selectedProduct ? 'Edit' : 'Add'} Product`}
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
                            <Input
                              name='name'
                              label='Name'
                              type='text'
                              value={selectedProduct?.name || ''}
                              autoComplete='name'
                              className={`${
                                loaderData?.error?.message && 'border-red-500'
                              }`}
                            />
                            <CategorySelect
                              name='category'
                              label='Category'
                              value={selectedProduct?.category || ''}
                              className={`${
                                loaderData?.error?.message && 'border-red-500'
                              }`}
                            />
                            {/* price, stock, weight, description, brand, */}
                            <Input
                              name='price'
                              label='Price'
                              type='text'
                              value={selectedProduct?.price?.toString() || '0'}
                              className={`${
                                loaderData?.error?.message && 'border-red-500'
                              }`}
                            />
                            <Input
                              name='stock'
                              label='Stock'
                              type='text'
                              value={selectedProduct?.stock?.toString() || '0'}
                              className={`${
                                loaderData?.error?.message && 'border-red-500'
                              }`}
                            />
                            <Input
                              name='weight'
                              label='Weight per Qty'
                              type='text'
                              value={selectedProduct?.weight?.toString() || '0'}
                              className={`${
                                loaderData?.error?.message && 'border-red-500'
                              }`}
                            />

                            <Fieldset
                              name='description'
                              label='Description'
                              value={selectedProduct?.description || ''}
                              className={`${
                                loaderData?.error?.message && 'border-red-500'
                              }`}
                            />

                            <Input
                              name='brand'
                              label='Brand'
                              type='text'
                              value={selectedProduct?.brand || ''}
                              className={`${
                                loaderData?.error?.message && 'border-red-500'
                              }`}
                            />

                            {/* <ProductImageDropzone
                              imageUrl={selectedProduct?.imageUrl || ''}
                              name={selectedProduct?.name || ''}
                            /> */}
                            <label className='block text-sm font-medium text-gray-900'>
                              Product image
                            </label>

                            {selectedProduct?.imageUrl ? (
                              <>
                                <div key={selectedProduct?.name}>
                                  <img
                                    src={selectedProduct?.imageUrl}
                                    alt={selectedProduct?.name}
                                    className='my-2 h-full w-full object-cover object-center sm:rounded-lg'
                                  />
                                </div>
                                <Link
                                  to={`/manage-products/${selectedProduct.id}/upload-image`}
                                  className='inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto'
                                >
                                  Upload new image
                                </Link>
                              </>
                            ) : (
                              <>
                                <div className=' inline-flex justify-center rounded-md border border-transparent bg-gray-400 px-4 py-2 text-sm font-medium text-white shadow-sm  focus:outline-none  sm:w-auto'>
                                  Upload*
                                </div>
                                <p className='text-sm text-gray-400'>
                                  *Product image can only be uploaded when
                                  editing the product
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex flex-shrink-0 content-center justify-between px-4 py-4'>
                      {selectedProduct ? (
                        <button
                          // onClick={() => setConfirmingDeletion(true)}
                          className='rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                        >
                          <TrashIcon className='h-6 w-6' aria-hidden='true' />
                        </button>
                      ) : (
                        <div></div>
                      )}
                      <div className='flex content-center'>
                        <button
                          type='button'
                          className='rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                          onClick={() => setOpenSlideOver(false)}
                        >
                          Cancel
                        </button>
                        <button
                          disabled={transition.state === 'submitting'}
                          type='submit'
                          className={`${
                            transition.submission && 'cursor-progress'
                          } ml-4 inline-flex  justify-center rounded-md border border-transparent bg-red-600 py-2.5 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2`}
                        >
                          {transition.submission ? (
                            <div className='flex w-12 items-stretch justify-center'>
                              <svg
                                className='w-5 animate-spin text-white'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                              >
                                <circle
                                  className='opacity-25'
                                  cx='12'
                                  cy='12'
                                  r='10'
                                  stroke='currentColor'
                                  strokeWidth='4'
                                ></circle>
                                <path
                                  className='opacity-75'
                                  fill='currentColor'
                                  d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                                ></path>
                              </svg>
                            </div>
                          ) : (
                            'Submit'
                          )}
                        </button>
                      </div>
                    </div>
                  </ValidatedForm>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
