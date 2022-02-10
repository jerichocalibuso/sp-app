import { Link } from 'remix'

const footerNavigation = {
  products: [
    { name: 'All Products', href: '#' },
    { name: 'Chicken', href: '#' },
    { name: 'Pork', href: '#' },
    { name: 'Beef', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Return Policy', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Delivery Policy', href: '#' },
  ],
  bottomLinks: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}
export default function Footer() {
  return (
    <footer aria-labelledby='footer-heading' className='bg-white'>
      <h2 id='footer-heading' className='sr-only'>
        Footer
      </h2>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='border-t border-gray-200'>
          <div className='pt-16 pb-20'>
            <div className='md:flex md:justify-center'>
              <img
                src='/images/logo.png'
                alt='Camille Meat Shop Logo'
                className='h-8 w-auto'
              />
            </div>
            <div className='md:flex md:justify-center'>
              <h2 className='text-md mt-2 font-bold text-gray-900'>
                Camille Meat Shop
              </h2>
            </div>

            <div className='mx-auto mt-16 max-w-5xl xl:grid xl:grid-cols-2 xl:gap-8'>
              <div className='grid grid-cols-2 gap-8 xl:col-span-2'>
                <div className='space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0'>
                  <div>
                    <h3 className='text-sm font-medium text-gray-900'>
                      Products
                    </h3>
                    <ul role='list' className='mt-6 space-y-6'>
                      {footerNavigation.products.map((item) => (
                        <li key={item.name} className='text-sm'>
                          <Link
                            to={item.href}
                            className='text-gray-500 hover:text-gray-600'
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-sm font-medium text-gray-900'>
                      Customer Service
                    </h3>
                    <ul role='list' className='mt-6 space-y-6'>
                      {footerNavigation.customerService.map((item) => (
                        <li key={item.name} className='text-sm'>
                          <Link
                            to={item.href}
                            className='text-gray-500 hover:text-gray-600'
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className='space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0'>
                  <div>
                    <h3 className='text-sm font-medium text-gray-900'>
                      Company
                    </h3>
                    <ul role='list' className='mt-6 space-y-6'>
                      {footerNavigation.company.map((item) => (
                        <li key={item.name} className='text-sm'>
                          <Link
                            to={item.href}
                            className='text-gray-500 hover:text-gray-600'
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-sm font-medium text-gray-900'>Legal</h3>
                    <ul role='list' className='mt-6 space-y-6'>
                      {footerNavigation.legal.map((item) => (
                        <li key={item.name} className='text-sm'>
                          <Link
                            to={item.href}
                            className='text-gray-500 hover:text-gray-600'
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='py-10 md:flex md:items-center md:justify-between'>
          <div className='text-center md:text-left'>
            <p className='text-sm text-gray-500'>
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className='mt-4 flex items-center justify-center md:mt-0'>
            <div className='flex space-x-8'>
              {footerNavigation.bottomLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className='text-sm text-gray-500 hover:text-gray-600'
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
