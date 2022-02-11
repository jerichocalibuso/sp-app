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
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import {
  CheckCircleIcon,
  CreditCardIcon,
  TrashIcon,
} from '@heroicons/react/solid'
import { CashIcon } from '@heroicons/react/outline'
import { prod } from './cart'
import { Quantity } from '~/components/Quantity'

const paymentMethods = [
  { id: 'gcash', title: 'GCash', imageSrc: '/images/gcash-logo.png' },
  { id: 'card', title: 'Credit or debit card' },
  { id: 'grabpay', title: 'GrabPay', imageSrc: '/images/grabpay-logo.png' },
  { id: 'paymaya', title: 'PayMaya', imageSrc: '/images/paymaya-logo.png' },
  { id: 'cod', title: 'Cash on delivery' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    paymentMethods[0]
  )
  const products = prod

  return (
    <div className='bg-gray-50'>
      <div className='mx-auto max-w-2xl px-4 pt-24 pb-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          Checkout
        </h1>
        <h2 className='sr-only'>Checkout</h2>

        <form className='lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16'>
          <div>
            <div>
              <h2 className='text-xl font-medium text-gray-900'>
                Contact information
              </h2>

              <div className='mt-4'>
                <label
                  htmlFor='phone-number'
                  className='block text-sm font-medium text-gray-700'
                >
                  Phone number
                </label>
                <div className='mt-1'>
                  <input
                    type='tel'
                    id='phone-number'
                    name='phone-number'
                    autoComplete='tel'
                    // classNamp-3 e='focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none'
                    className='block w-full rounded-md border-gray-300 py-3 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  />
                </div>
              </div>
            </div>

            <div className='mt-5 border-t border-gray-200 pt-5'>
              <h2 className='text-lg font-medium text-gray-900'>
                Delivery information
              </h2>

              <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
                <div>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    First name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='first-name'
                      name='first-name'
                      autoComplete='given-name'
                      className='block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Last name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='last-name'
                      name='last-name'
                      autoComplete='family-name'
                      className='block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='sm:col-span-2'>
                  <label
                    htmlFor='address'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Address
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='address'
                      id='address'
                      autoComplete='street-address'
                      className='block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium text-gray-700'
                  >
                    City / Municipality
                  </label>
                  <div className='relative mt-1'>
                    <select
                      name='city'
                      id='city'
                      autoComplete='address-level2'
                      className='leading block w-full appearance-none rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                    />
                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                      <svg
                        className='h-4 w-4 fill-current'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='region'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Province
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='region'
                      id='region'
                      value='Cavite'
                      disabled
                      autoComplete='address-level1'
                      className='block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:border disabled:text-gray-500  sm:text-sm'
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-5 border-t border-gray-200 pt-5'>
              <RadioGroup
                value={selectedPaymentMethod}
                onChange={setSelectedPaymentMethod}
              >
                <RadioGroup.Label className='text-lg font-medium text-gray-900'>
                  Payment method
                </RadioGroup.Label>

                <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
                  {paymentMethods.map((paymentMethod) => (
                    <RadioGroup.Option
                      key={paymentMethod.id}
                      value={paymentMethod}
                      className={({ checked, active }) =>
                        classNames(
                          checked ? 'border-transparent' : 'border-gray-300',
                          active ? 'ring-2 ring-green-500' : '',
                          'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
                        )
                      }
                    >
                      {({ checked, active }) => (
                        <>
                          <div className='flex flex-1'>
                            <div className='flex items-center'>
                              {paymentMethod.id === 'card' && (
                                <CreditCardIcon className=' mr-2 w-10 text-green-500' />
                              )}
                              {paymentMethod.id === 'cod' && (
                                <CashIcon className=' mr-2 w-8 text-green-500' />
                              )}
                              <RadioGroup.Label
                                as='span'
                                className='flex text-base font-medium text-gray-900'
                              >
                                {paymentMethod?.imageSrc ? (
                                  <img
                                    src={paymentMethod.imageSrc}
                                    alt={paymentMethod.id}
                                    className='w-24'
                                  />
                                ) : (
                                  paymentMethod.title
                                )}
                              </RadioGroup.Label>
                              {/* <RadioGroup.Description
                                as='span'
                                className='mt-1 flex items-center text-sm text-gray-500'
                              >
                                {paymentMethod.turnaround}
                              </RadioGroup.Description> */}
                              {/* <RadioGroup.Description
                                as='span'
                                className='mt-6 text-sm font-medium text-gray-900'
                              >
                                {paymentMethod.price}
                              </RadioGroup.Description> */}
                            </div>
                          </div>
                          {checked ? (
                            <CheckCircleIcon
                              className='h-5 w-5 text-green-500'
                              aria-hidden='true'
                            />
                          ) : null}
                          <div
                            className={classNames(
                              active ? 'border' : 'border-2',
                              checked
                                ? 'border-green-500'
                                : 'border-transparent',
                              'pointer-events-none absolute -inset-px rounded-lg'
                            )}
                            aria-hidden='true'
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Payment */}
          </div>

          {/* Order summary */}
          <div className='mt-5 lg:mt-0'>
            <h2 className='text-xl font-medium text-gray-900'>Order summary</h2>

            <div className='mt-6 rounded-lg border border-gray-200 bg-white shadow-sm'>
              <h3 className='sr-only'>Items in your cart</h3>
              <ul role='list' className='divide-y divide-gray-200'>
                {products.map((product) => (
                  <li key={product.id} className='flex py-6 px-4 sm:px-6'>
                    <div className='flex-shrink-0'>
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className='w-40 rounded-md'
                      />
                    </div>

                    <div className='ml-6 flex flex-1 flex-col pt-4'>
                      <div className='flex'>
                        <div className='min-w-0 flex-1'>
                          <h4 className='text-lg'>
                            <a
                              href={`/products/${product.id}`}
                              className='font-medium text-gray-700 hover:text-red-800'
                            >
                              {product.name}
                            </a>
                          </h4>
                          <p className='text-md mt-1 text-red-500'>
                            ₱{product.price}
                          </p>
                          <div className='mt-2 '>
                            <Quantity />
                          </div>
                        </div>

                        <div className='ml-4 flow-root flex-shrink-0'>
                          <button
                            type='button'
                            className='-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-red-500'
                          >
                            <span className='sr-only'>Remove</span>
                            <TrashIcon className='h-5 w-5' aria-hidden='true' />
                          </button>
                        </div>
                      </div>

                      <div className='flex flex-1 items-end justify-between pt-2'></div>
                    </div>
                  </li>
                ))}
              </ul>
              <dl className='space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6'>
                <div className='flex items-center justify-between'>
                  <dt className='text-sm'>Subtotal</dt>
                  <dd className='text-sm font-medium text-gray-900'>₱1000</dd>
                </div>
                <div className='flex items-center justify-between'>
                  <dt className='text-sm'>Delivery fee</dt>
                  <dd className='text-sm font-medium text-gray-900  line-through'>
                    ₱50
                  </dd>
                </div>
                <p className='text-right text-sm font-medium text-gray-900'>
                  Free delivery promo applied
                </p>

                <div className='flex items-center justify-between border-t border-gray-200 pt-6'>
                  <dt className='text-base font-medium'>Total amount</dt>
                  <dd className='text-base font-medium text-red-500'>₱1000</dd>
                </div>
              </dl>

              <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
                <button
                  type='submit'
                  className='w-full rounded-md border border-transparent bg-red-500 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50'
                >
                  Confirm order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
