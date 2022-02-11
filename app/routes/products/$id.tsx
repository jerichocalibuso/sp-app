/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from 'react'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { MinusIcon, StarIcon } from '@heroicons/react/solid'
import {
  HeartIcon,
  MinusSmIcon,
  PlusIcon,
  PlusSmIcon,
} from '@heroicons/react/outline'
import { useParams } from 'remix'
import { products } from '.'
import invariant from 'tiny-invariant'
import { useLocation } from 'react-router'
import { Quantity } from '~/components/Quantity'

export type Breadcrumb = {
  label: string
  route?: string
}

const product = {
  name: 'Zip Tote Basket',
  price: '$140',
  rating: 4,
  breadcrumbs: [
    { id: 1, name: 'Women', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ],
  colors: [
    {
      name: 'Washed Black',
      bgColor: 'bg-gray-700',
      selectedColor: 'ring-gray-700',
    },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    {
      name: 'Washed Gray',
      bgColor: 'bg-gray-500',
      selectedColor: 'ring-gray-500',
    },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: 'Storage Information',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    {
      name: 'Delivery Information',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    {
      name: 'Promos',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ],
    },
    // More sections...
  ],
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  const { id } = useParams()
  const prod = products.find((p) => p.id === Number(id))
  invariant(prod, 'error')
  const location = useLocation()
  console.log(`location: ${JSON.stringify(location, null, 2)}`)
  const breads: Breadcrumb[] = [
    { label: 'All Products', route: '/products' },
    { label: prod.category, route: `/${prod.category.toLowerCase()}` },
  ]

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <nav
          aria-label='Breadcrumb'
          className='mx-auto mt-8 mb-8 max-w-7xl lg:mt-0'
        >
          <ol role='list' className='flex items-center'>
            {breads.map((breadcrumb) => (
              <li key={breadcrumb.label}>
                <div className='flex items-center'>
                  <a
                    href={breadcrumb.route}
                    className=' text-sm font-medium text-gray-900 hover:text-red-600'
                  >
                    {breadcrumb.label}
                  </a>
                  <svg
                    aria-hidden='true'
                    width='24'
                    height='24'
                    fill='none'
                    className='mx-2 flex-none text-gray-300'
                  >
                    <path
                      d='M10.75 8.75l3.5 3.25-3.5 3.25'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                  </svg>
                </div>
              </li>
            ))}
            <li className='text-sm'>
              <a
                href='#'
                aria-current='page'
                className='font-medium text-red-400 hover:text-red-600'
              >
                {prod.name}
              </a>
            </li>
          </ol>
        </nav>
        <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
          {/* Image gallery */}
          {/* <Tab.Group as='div' className='flex flex-col-reverse'> */}
          {/* Image selector */}
          {/* <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
              <Tab.List className='grid grid-cols-4 gap-6'>
                {product.images.map((image) => (
                  <Tab
                    key={image.id}
                    className='relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4'
                  >
                    {({ selected }) => (
                      <>
                        <span className='sr-only'>{image.name}</span>
                        <span className='absolute inset-0 overflow-hidden rounded-md'>
                          <img
                            src={image.src}
                            alt=''
                            className='h-full w-full object-cover object-center'
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? 'ring-indigo-500' : 'ring-transparent',
                            'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                          )}
                          aria-hidden='true'
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div> */}

          {/* <Tab.Panels className='aspect-w-1 aspect-h-1 w-full'></Tab.Panels>
          </Tab.Group> */}

          <div className='flex flex-col-reverse'>
            <img
              src={prod.imageSrc}
              alt={prod.imageAlt}
              className='h-full w-full object-cover object-center sm:rounded-lg'
            />
          </div>

          {/* Product info */}
          <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
            <h1 className='text-4xl font-extrabold tracking-tight text-gray-900'>
              {prod.name}
            </h1>

            <div className='mt-3'>
              <h2 className='sr-only'>Product information</h2>
              <p className='text-3xl font-semibold text-red-500'>
                ₱{prod.price}{' '}
              </p>
            </div>

            <div className='mt-6'>
              <h3 className='sr-only'>Description</h3>

              <p className='mb-2 text-base font-medium text-gray-900'>
                {prod.weight ? `${prod.weight} per quantity` : null}
              </p>
              <p className='space-y-6 text-base text-gray-700'>
                {prod.description}
              </p>
            </div>

            <form className='mt-6'>
              {/* Quantity */}
              <div>
                <h3 className='text-md mb-2 font-medium text-gray-900'>
                  Quantity
                </h3>

                <Quantity />
              </div>

              <div className='sm:flex-col1 mt-10 flex'>
                <button
                  type='submit'
                  className='flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-red-500 py-3 px-8 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full'
                >
                  Add to cart
                </button>
              </div>
            </form>

            <section aria-labelledby='details-heading' className='mt-12'>
              <h2 id='details-heading' className='sr-only'>
                Additional details
              </h2>

              <div className='divide-y divide-gray-200 border-t'>
                {product.details.map((detail) => (
                  <Disclosure as='div' key={detail.name}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className='group relative flex w-full items-center justify-between py-6 text-left'>
                            <span
                              className={classNames(
                                open
                                  ? 'text-red-500 group-hover:text-red-600'
                                  : 'text-gray-900',
                                'text-sm font-medium'
                              )}
                            >
                              {detail.name}
                            </span>
                            <span className='ml-6 flex items-center'>
                              {open ? (
                                <MinusSmIcon
                                  className='block h-6 w-6 text-red-500 group-hover:text-red-600'
                                  aria-hidden='true'
                                />
                              ) : (
                                <PlusSmIcon
                                  className='block h-6 w-6 text-gray-400 group-hover:text-gray-500'
                                  aria-hidden='true'
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel
                          as='div'
                          className='prose prose-sm pb-6'
                        >
                          <ul role='list'>
                            {detail.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
