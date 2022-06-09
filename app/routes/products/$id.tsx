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
import { MinusSmIcon, PlusIcon, PlusSmIcon } from '@heroicons/react/outline'
import {
  ActionFunction,
  Form,
  LoaderFunction,
  redirect,
  useLoaderData,
  useParams,
} from 'remix'
import invariant from 'tiny-invariant'
import { Quantity } from '~/components/Quantity'
import { db } from '~/utils/db.server'
import { validationError } from 'remix-validated-form'
import { authenticator } from '~/services/auth.server'
import { Role, Status } from '@prisma/client'

export type Breadcrumb = {
  label: string
  route?: string
}

export const action: ActionFunction = async ({ request, params }) => {
  const user = await authenticator.isAuthenticated(request)
  if (user?.role === Role.RIDER || user?.role === Role.ADMIN) {
    return redirect('/unauthorized')
  }

  if (!user?.role) {
    return redirect('/signin')
  }

  const { id: productId } = params
  const product = await db.product.findFirst({
    where: {
      id: productId,
    },
  })

  if (!product) {
    return null
  }
  console.log(`product: ${JSON.stringify(product, null, 2)}`)
  if (user?.role === Role.CUSTOMER) {
    const currentOrder = await db.order.findFirst({
      where: {
        userId: user?.id,
        status: 'IN_CART',
      },
      include: {
        orderItems: true,
      },
    })

    if (currentOrder) {
      const existingProduct = currentOrder.orderItems.find(
        (p) => p.productId === product.id
      )
      if (existingProduct) {
        await db.orderItem.update({
          where: {
            id: existingProduct.id,
          },
          data: {
            quantity: {
              increment: 1,
            },
          },
        })
      } else {
        await db.orderItem.create({
          data: {
            productId: product.id,
            quantity: 1,
            orderId: currentOrder.id,
          },
        })
      }
      const updatedOrder = await db.order.update({
        where: { id: currentOrder.id },
        data: {
          amount: { increment: product.price },
        },
        include: { orderItems: true },
      })

      return { order: updatedOrder }
    } else {
      const order = await db.order.create({
        data: {
          amount: product.price,
          status: Status.IN_CART,
          userId: user?.id,
        },
      })

      await db.orderItem.create({
        data: {
          orderId: order.id,
          productId: product.id,
          quantity: 1,
        },
      })

      const updatedOrder = await db.order.findFirst({
        where: { id: order.id },
        include: { orderItems: true },
      })

      return { order: updatedOrder }
    }
  }
}

export const loader: LoaderFunction = async ({ params }) => {
  const { id: productId } = params
  const product = await db.product.findFirst({
    where: {
      id: productId,
    },
  })
  return product
}

export default function Example() {
  const product = useLoaderData()
  const breads: Breadcrumb[] = [
    { label: 'All Products', route: '/products' },
    {
      label: `${product.category[0]}${product.category.toLowerCase().slice(1)}`,
      route: `/${product.category.toLowerCase()}`,
    },
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
                {product.name}
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
              src={product.imageUrl}
              className='h-full w-full object-cover object-center sm:rounded-lg'
            />
          </div>

          {/* Product info */}
          <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
            <h1 className='text-4xl font-extrabold tracking-tight text-gray-900'>
              {product.name}
            </h1>

            <div className='mt-3'>
              <h2 className='sr-only'>Product information</h2>
              <p className='text-3xl font-semibold text-red-500'>
                ₱{product.price}{' '}
              </p>
            </div>

            <div className='mt-6'>
              <h3 className='sr-only'>Description</h3>

              <p className='mb-2 text-base font-medium text-gray-900'>
                {product.weight ? `${product.weight} per quantity` : null}
              </p>
              <p className='space-y-6 text-base text-gray-700'>
                {product.description}
              </p>
            </div>

            <Form method='post' className='mt-6'>
              <div className='sm:flex-col1 mt-10 flex'>
                <button
                  type='submit'
                  className='flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-red-500 py-3 px-8 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full'
                >
                  Add to cart
                </button>
              </div>
            </Form>

            <section aria-labelledby='details-heading' className='mt-12'>
              <h2 id='details-heading' className='sr-only'>
                Additional details
              </h2>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
