import { Form, Link, useLoaderData, useTransition } from '@remix-run/react'
import { ActionFunction, json, LoaderFunction } from '@remix-run/server-runtime'
import { authenticator } from '~/services/auth.server'

import { SocialsProvider } from 'remix-auth-socials'
import {
  commitSession,
  destroySession,
  getSession,
} from '~/services/session.server'
import { withZod } from '@remix-validated-form/with-zod'
import { ValidatedForm, validationError } from 'remix-validated-form'
import { z } from 'zod'
import { zfd } from 'zod-form-data'
import { Input } from '~/components/Input'

interface SocialsButtonProps {
  provider: SocialsProvider
  label: string
}

export const validator = withZod(
  z.object({
    username: zfd.text(
      z.string({
        required_error: 'Username is required',
      })
    ),
    password: zfd.text(
      z.string({
        required_error: 'Password is required',
      })
    ),
  })
)

// // Second, we need to export an action function, here we will use the
// // `authenticator.authenticate method`
export let action: ActionFunction = async ({ request }) => {
  // we call the method with the name of the strategy we want to use and the
  // request object, optionally we pass an object with the URLs we want the user
  // to be redirected to after a success or a failure

  const requestClone = request.clone() // if not cloned, authenticator cannot use the request

  // form validation
  const formData = await request.formData()
  const result = await validator.validate(formData)
  if (result.error) {
    return validationError(result.error)
  }

  return await authenticator.authenticate('user-pass-signin', requestClone, {
    successRedirect: '/',
    failureRedirect: '/signin',
  })
}

// Finally, we can export a loader function where we check if the user is
// authenticated with `authenticator.isAuthenticated` and redirect to the
// dashboard if it is or return null if it's not
export let loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, { successRedirect: '/' })
  let session = await getSession(request)
  let error = session.get('auth:error') as string | null

  return json(
    { error },
    {
      headers: {
        'Set-Cookie': await destroySession(session),
      },
    }
  )
}

const FacebookIcon = () => (
  <svg
    className='h-5 w-5'
    aria-hidden='true'
    fill='currentColor'
    viewBox='0 0 20 20'
  >
    <path
      fillRule='evenodd'
      d='M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z'
      clipRule='evenodd'
    />
  </svg>
)

const GoogleIcon = () => (
  <svg
    className='h-5 w-5'
    aria-hidden='true'
    fill='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      xmlns='http://www.w3.org/2000/svg'
      d='M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z'
    />{' '}
  </svg>
)

const SocialsButton: React.FC<SocialsButtonProps> = ({ provider, label }) => (
  <Form action={`/auth/${provider}`} method='post'>
    <button className='inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50'>
      <span className='sr-only'>{label}</span>
      {provider === SocialsProvider.FACEBOOK ? (
        <FacebookIcon />
      ) : (
        <GoogleIcon />
      )}
    </button>
  </Form>
)

export default function Example() {
  const loaderData = useLoaderData()
  const transition = useTransition()

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className='flex min-h-full pt-16'>
        <div className='flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
                Sign in to your account
              </h2>
              <p className='mt-2 text-sm text-gray-600'>
                Or{' '}
                <Link
                  to='/signup'
                  className='font-medium text-red-600 hover:text-red-500'
                >
                  sign up for an account
                </Link>
              </p>
            </div>

            <div className='mt-8'>
              <div>
                <div>
                  <p className='text-sm font-medium text-gray-700'>
                    Sign in with
                  </p>

                  <div className='mt-1 grid grid-cols-2 gap-3'>
                    <div>
                      <SocialsButton
                        provider={SocialsProvider.FACEBOOK}
                        label='Login with Facebook'
                      />
                    </div>

                    <div>
                      <SocialsButton
                        provider={SocialsProvider.GOOGLE}
                        label='Login with Google'
                      />
                    </div>
                  </div>
                </div>

                <div className='relative mt-6'>
                  <div
                    className='absolute inset-0 flex items-center'
                    aria-hidden='true'
                  >
                    <div className='w-full border-t border-gray-300' />
                  </div>
                  <div className='relative flex justify-center text-sm'>
                    <span className='bg-white px-2 text-gray-500'>
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>

              <div className='mt-6'>
                <ValidatedForm
                  validator={validator}
                  method='post'
                  className='space-y-6'
                >
                  <Input
                    name='username'
                    label='Username'
                    type='username'
                    autoComplete='username'
                    className={`${
                      loaderData?.error?.message && 'border-red-500'
                    }`}
                  />
                  <Input
                    name='password'
                    label='Password'
                    type='password'
                    autoComplete='current-password'
                    className={`${
                      loaderData?.error?.message && 'border-red-500'
                    }`}
                  />

                  <div className='flex items-center justify-between space-x-8'>
                    <div>
                      {loaderData?.error?.message ? (
                        <p className='text-sm font-medium text-red-600'>
                          {loaderData?.error?.message}
                        </p>
                      ) : null}
                    </div>

                    <div className='text-sm'>
                      <a
                        href='#'
                        className='font-medium text-red-600 hover:text-red-500'
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      disabled={transition.state === 'submitting'}
                      type='submit'
                      className={`${
                        transition.submission && 'cursor-progress'
                      } flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2`}
                    >
                      {transition.submission ? (
                        <svg
                          className='-ml-1 mr-3 h-5 w-5 animate-spin text-white'
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
                      ) : (
                        'Sign in'
                      )}
                    </button>
                  </div>
                </ValidatedForm>
              </div>
            </div>
          </div>
        </div>
        <div className='relative hidden w-0 flex-1 lg:block'>
          <img
            className='absolute inset-0 h-full w-full object-cover'
            src='/images/hero-fresh-meat2.jpg'
            alt='fresh chicken pork meat and beef'
          />
        </div>
      </div>
    </>
  )
}
