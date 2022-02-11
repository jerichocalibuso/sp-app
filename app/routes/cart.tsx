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
import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from '@heroicons/react/solid'
import { Link } from 'remix'
import { Quantity } from '~/components/Quantity'
import { Brand, Category, Product } from './products'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Sienna',
    inStock: true,
    size: 'Large',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    inStock: false,
    leadTime: '3–4 weeks',
    size: 'Large',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  {
    id: 3,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35.00',
    color: 'White',
    inStock: true,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
    imageAlt: 'Insulated bottle with white base and black snap lid.',
  },
]

const prod: Product[] = [
  {
    id: 18,
    imageSrc: '/images/BF-premium-chicken.jpeg',
    imageAlt: 'BF-premium-chicken',
    name: 'Premium Chicken',
    weight: '',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 250,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 41,
    imageSrc: '/images/Camille-beef-cubes-500g.jpeg',
    imageAlt: 'Camille-beef-cubes-500g',
    name: 'Beef Cubes',
    weight: '500g',
    brand: Brand.CAMILLE,
    category: Category.BEEF,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
  {
    id: 47,
    imageSrc: '/images/Camille-ground-pork.jpeg',
    imageAlt: 'Camille-ground-pork',
    name: 'Ground Pork',
    weight: '500g',
    brand: Brand.CAMILLE,
    category: Category.PORK,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cumque nihil atque quae inventore. Aliquam cupiditate repudiandae suscipit corporis natus.',
  },
]

export default function Example() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 pt-24 pb-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h1 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
          Shopping Cart
        </h1>
        <form className='mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16'>
          <section aria-labelledby='cart-heading' className='lg:col-span-7'>
            <h2 id='cart-heading' className='sr-only'>
              Items in your shopping cart
            </h2>

            <ul
              role='list'
              className='divide-y divide-gray-200 border-t border-b border-gray-200'
            >
              {prod.map((product, productIdx) => (
                <li
                  key={product.id}
                  className='flex pt-6 pb-3 sm:pt-10 sm:pb-5'
                >
                  <div className='flex-shrink-0'>
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className='h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48'
                    />
                  </div>

                  <div className='justify-betweensm:ml-6 ml-4 flex flex-1 flex-col'>
                    <div className='relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0'>
                      <div>
                        <div className='flex justify-between'>
                          <h3 className='text-lg sm:text-xl'>
                            <a
                              href={`products/${product.id}`}
                              className='font-medium text-gray-900 hover:text-red-500'
                            >
                              {product.name}
                            </a>
                          </h3>
                        </div>

                        <p className='mt-1 text-base font-medium text-red-500 sm:text-lg'>
                          ₱{product.price}
                        </p>
                        <div className='mt-4'>
                          <Quantity />
                        </div>
                      </div>

                      <div className='mt-4 sm:mt-0 sm:pr-9'>
                        <div className='absolute top-0 right-0'>
                          <button
                            type='button'
                            className='-m-2 inline-flex p-2 pt-2.5 text-gray-400 hover:text-red-500'
                          >
                            <span className='sr-only'>Remove</span>
                            <XIcon className='h-5 w-5' aria-hidden='true' />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby='summary-heading'
            className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'
          >
            <h2
              id='summary-heading'
              className='text-lg font-medium text-gray-900'
            >
              Order summary
            </h2>

            <dl className='mt-6 space-y-4'>
              <div className='flex items-center justify-between'>
                <dt className='text-sm text-gray-600'>Subtotal</dt>
                <dd className='text-sm font-medium text-gray-900'>₱1000</dd>
              </div>
              <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
                <dt className='flex items-center text-sm text-gray-600'>
                  <span>Delivery fee</span>
                  <a
                    href='#'
                    className='ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500'
                  >
                    <span className='sr-only'>Delivery fee</span>
                    <QuestionMarkCircleIcon
                      className='h-5 w-5'
                      aria-hidden='true'
                    />
                  </a>
                </dt>
                <dd className='text-right text-sm font-medium text-gray-900 '>
                  <p className='line-through'>₱500</p>
                </dd>
              </div>
              <p className='text-right text-sm font-medium text-gray-900'>
                Free delivery promo applied
              </p>

              <div className='flex items-center justify-between border-t border-gray-200 pt-4'>
                <dt className='text-base font-medium text-gray-900'>
                  Total amount
                </dt>
                <dd className='text-base font-medium text-gray-900'>₱1000</dd>
              </div>
            </dl>

            <div className='mt-6'>
              <Link to='/checkout'>
                <button className='w-full rounded-md border border-transparent bg-red-500 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-50'>
                  Checkout
                </button>
              </Link>
            </div>
          </section>
        </form>
      </div>
    </div>
  )
}
