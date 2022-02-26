import { Link } from 'remix'

export default function Unauthorized() {
  return (
    <>
      <div className='mt-16 flex min-h-full flex-col bg-white pt-16 pb-12'>
        <main className='mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-shrink-0 justify-center'>
            <Link to='/' className='inline-flex'>
              <span className='sr-only'>Camille Meat Shop</span>
              <img
                className='h-12 w-auto'
                src='/images/logo.png'
                alt='Camille Meat Shop Logo'
              />
            </Link>
          </div>
          <div className='py-16'>
            <div className='text-center'>
              <p className='text-sm font-semibold uppercase tracking-wide text-red-600'>
                Unauthorized
              </p>
              <h1 className='mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl'>
                Lost?
              </h1>
              <p className='mt-2 text-base text-gray-500'>
                You're not supposed to be in this page
              </p>
              <div className='mt-6'>
                <Link
                  to='/'
                  className='text-base font-medium text-red-600 hover:text-red-500'
                >
                  Go back home<span aria-hidden='true'> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <footer className='mx-auto w-full max-w-7xl flex-shrink-0 px-4 sm:px-6 lg:px-8'>
          <nav className='flex justify-center space-x-4'>
            <a
              href='#'
              className='text-sm font-medium text-gray-500 hover:text-gray-600'
            >
              Contact Support
            </a>
            <span
              className='inline-block border-l border-gray-300'
              aria-hidden='true'
            />
            <a
              href='#'
              className='text-sm font-medium text-gray-500 hover:text-gray-600'
            >
              Status
            </a>
            <span
              className='inline-block border-l border-gray-300'
              aria-hidden='true'
            />
            <a
              href='#'
              className='text-sm font-medium text-gray-500 hover:text-gray-600'
            >
              Twitter
            </a>
          </nav>
        </footer>
      </div>
    </>
  )
}
