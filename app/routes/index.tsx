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
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from '@heroicons/react/outline'
import { Brand, Category, Product } from './products'
import { Link } from 'remix'

const navigation = {
  categories: [
    {
      name: 'Pork',
      featured: [
        { name: 'Sleep', href: '#' },
        { name: 'Swimwear', href: '#' },
        { name: 'Underwear', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      brands: [
        { name: 'Full Nelson', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Significant Other', href: '#' },
      ],
    },
    {
      name: 'Chicken',
      featured: [
        { name: 'Casual', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Outdoor', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Artwork Tees', href: '#' },
        { name: 'Pants', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Basic Tees', href: '#' },
      ],
      brands: [
        { name: 'Significant Other', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Full Nelson', href: '#' },
      ],
    },
  ],
  pages: [{ name: 'Beef', href: '#' }],
}

const trendingProducts: Product[] = [
  {
    id: 2,
    imageSrc: '/images/BF-chicken-breast-fillets-860g.jpeg',
    imageAlt: 'BF-chicken-breast-fillets-860g',
    name: 'Chicken Breasts Fillets',
    weight: '860g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nemo illum dignissimos fugit obcaecati vel beatae? Numquam similique vitae inventore!',
  },
  {
    id: 3,
    imageSrc: '/images/BF-chicken-breasts-860g.jpeg',
    imageAlt: 'BF-chicken-breasts-860g',
    name: 'Chicken Breasts',
    weight: '860g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 180,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nemo illum dignissimos fugit obcaecati vel beatae? Numquam similique vitae inventore!',
  },
  {
    id: 4,
    imageSrc: '/images/BF-chicken-leg-quarters-860g.jpeg',
    imageAlt: 'BF-chicken-leg-quarters-860g',
    name: 'Chicken Leg Quarters',
    weight: '860g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 180,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nemo illum dignissimos fugit obcaecati vel beatae? Numquam similique vitae inventore!',
  },
  {
    id: 5,
    imageSrc: '/images/BF-chicken-nuggets-200g.jpeg',
    imageAlt: 'BF-chicken-nuggets-200g',
    name: 'Chicken Nuggets',
    weight: '200g',
    brand: Brand.BOUNTY_FRESH,
    category: Category.CHICKEN,
    price: 100,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nemo illum dignissimos fugit obcaecati vel beatae? Numquam similique vitae inventore!',
  },
]
const categories = [
  {
    name: 'Chicken',
    imageSrc: '/images/category-chicken2.jpg',
    imageAlt: 'category-chicken',
    href: '/chicken',
  },
  {
    name: 'Pork',
    imageSrc: '/images/category-pork2.jpg',
    imageAlt: 'category-pork',
    href: '/pork',
  },
  {
    name: 'Beef',
    imageSrc: '/images/category-beef2.jpg',
    imageAlt: 'category-beef',
    href: '/beef',
  },
]
const testimonials = [
  {
    id: 1,
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis autem, impedit dignissimos quidem cumque libero ea quam porro tempore.',
    attribution: 'Sherrilyn Reyes, Camella Lessandra',
  },
  {
    id: 2,
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis autem, impedit dignissimos quidem cumque libero ea quam porro tempore.',
    attribution: 'Jason Orqueza, Parklane Country Homes',
  },
  {
    id: 3,
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis autem, impedit dignissimos quidem cumque libero ea quam porro tempore.',
    attribution: 'Evan Angelo Monreal, Lumina Homes',
  },
]

export default function IndexPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='bg-white'>
      <main>
        {/* Hero */}
        <div className='flex flex-col border-b border-gray-200 lg:border-0'>
          <div className='relative'>
            <div
              aria-hidden='true'
              className='absolute hidden h-full w-1/2 bg-gray-50 lg:block'
            />
            <div className='relative bg-gray-50 lg:bg-transparent'>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8'>
                <div className='mx-auto max-w-2xl py-24 md:pt-40 lg:max-w-none lg:py-64'>
                  <div className='lg:pr-16'>
                    <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'>
                      Affordable meat at your fingertips
                    </h1>
                    <p className='mt-4 text-xl text-gray-600'>
                      Choose from our wide selection of freshly prepared meats
                      straight to your door.
                    </p>
                    <div className='mt-6'>
                      <Link
                        to='/products'
                        className='inline-block rounded-md border border-transparent bg-red-600 py-3 px-8 font-medium text-white hover:bg-red-700 '
                      >
                        Start shopping
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex h-48 w-full justify-center sm:h-80 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2'>
              <img
                src={'images/hero-fresh-meat.jpg'}
                alt='hero-fresh-meat'
                className='h-full w-full object-cover object-center'
              />
            </div>
          </div>
        </div>

        {/* Bestsellers */}
        <section aria-labelledby='trending-heading' className='bg-white'>
          <div className='py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:py-32 lg:px-8'>
            <div className='flex items-center justify-between px-4 sm:px-6 lg:px-0'>
              <h2
                id='trending-heading'
                className='text-3xl font-extrabold tracking-tight text-gray-900'
              >
                Bestsellers
              </h2>
              <Link
                to='/products'
                className='hidden text-sm font-semibold text-red-600 hover:text-red-500 sm:block'
              >
                See all products<span aria-hidden='true'> &rarr;</span>
              </Link>
            </div>

            <div className='relative mt-8'>
              <div className='relative w-full overflow-x-auto'>
                <ul
                  role='list'
                  className='mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0'
                >
                  {trendingProducts.map((product) => (
                    <li
                      key={product.id}
                      className='inline-flex w-64 flex-col text-center lg:w-auto '
                    >
                      <div className='group relative'>
                        <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200'>
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className='h-full w-full object-cover object-center group-hover:opacity-75'
                          />
                        </div>
                        <div className='mt-6'>
                          <h3 className='mt-1 font-semibold text-gray-900 hover:text-red-600'>
                            <Link to={`/products/${product.id}`}>
                              <span className='absolute inset-0 ' />
                              {product.name}
                            </Link>
                          </h3>
                          <p className='mt-1 text-red-500 hover:text-red-400'>
                            ₱{product.price}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='mt-12 px-4 sm:hidden'>
              <Link
                to='#'
                className='text-sm font-semibold text-red-600 hover:text-red-500'
              >
                See all products<span aria-hidden='true'> &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section aria-labelledby='categories-heading' className='bg-gray-50'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32'>
              <h2
                id='categories-heading'
                className='text-3xl font-extrabold text-gray-900'
              >
                Categories
              </h2>

              <div className='mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0'>
                {categories.map((category) => (
                  <div key={category.name} className='group relative'>
                    <div className='sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1 lg:aspect-h-1 relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:h-64'>
                      <img
                        src={category.imageSrc}
                        alt={category.imageAlt}
                        className='h-full w-full object-cover object-center'
                      />
                    </div>
                    <h3 className='mt-6 text-lg font-semibold text-gray-900 hover:text-red-600'>
                      <Link to={category.href}>
                        <span className='absolute inset-0' />
                        {category.name}
                      </Link>
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sale and testimonials */}
        <div className='relative overflow-hidden'>
          {/* Decorative background image and gradient */}
          <div aria-hidden='true' className='absolute inset-0'>
            <div className='absolute inset-0 mx-auto max-w-full overflow-hidden'>
              <img
                src='images/sale-delivery.jpeg'
                alt=''
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='absolute inset-0 bg-white bg-opacity-60' />
            <div className='absolute inset-0 bg-gradient-to-t from-white via-white' />
          </div>

          {/* Sale */}
          <section
            aria-labelledby='sale-heading'
            className='relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 text-center sm:px-6 lg:px-32'
          >
            <div className='mx-auto max-w-2xl lg:max-w-none'>
              <h2
                id='sale-heading'
                className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'
              >
                Free delivery for orders worth{' '}
                <span className='text-red-600'>₱500</span> and above*
              </h2>
              <p className='mx-auto mt-4 max-w-xl text-xl text-gray-600'>
                *within the 3.3 km radius of Parklane Country Homes
              </p>
              <Link
                to='/products'
                className='hover:pointer mt-6 inline-block w-full rounded-md border border-transparent bg-red-600 py-3 px-8 font-medium text-white hover:bg-red-700 sm:w-auto'
              >
                Start shopping
              </Link>
            </div>
          </section>

          {/* Testimonials */}
          <section
            aria-labelledby='testimonial-heading'
            className='relative mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:py-32 lg:px-8'
          >
            <div className='mx-auto max-w-2xl lg:max-w-none'>
              <h2
                id='testimonial-heading'
                className='mt-2 text-3xl font-extrabold tracking-tight text-gray-900'
              >
                What are people saying?
              </h2>

              <div className='mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0'>
                {testimonials.map((testimonial) => (
                  <blockquote key={testimonial.id} className='sm:flex lg:block'>
                    <svg
                      width={24}
                      height={18}
                      viewBox='0 0 24 18'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                      className='flex-shrink-0 text-red-600'
                    >
                      <path
                        d='M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z'
                        fill='currentColor'
                      />
                    </svg>
                    <div className='mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0'>
                      <p className='text-lg text-gray-600'>
                        {testimonial.quote}
                      </p>
                      <cite className='mt-4 block font-semibold not-italic text-gray-900'>
                        {testimonial.attribution}
                      </cite>
                    </div>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
