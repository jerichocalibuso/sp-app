import { useTransition, useLoaderData } from '@remix-run/react'
import { authenticator } from '~/services/auth.server'
import { withZod } from '@remix-validated-form/with-zod'
import { ValidatedForm, validationError } from 'remix-validated-form'
import { z } from 'zod'
import { zfd } from 'zod-form-data'
import { Input } from '~/components/Input'
import { destroySession, getSession } from '~/services/session.server'
import { ActionFunction, json, LoaderFunction } from '@remix-run/node'
import { SocialsButton } from './signin'
import { SocialsProvider } from 'remix-auth-socials'

export const validator = withZod(
  z.object({
    name: zfd.text(
      z
        .string({
          required_error: 'Name is required',
        })
        .regex(/^[a-zA-Z ]*$/, 'Name should only include alphabet characters')
    ),
    username: zfd.text(
      z
        .string({
          required_error: 'Username is required',
        })
        .min(6, 'Username should at least have 6 characters')
        .max(32, 'Username is too long')
        .regex(
          /^[a-zA-Z0-9_]*$/,
          'Username should only include alphanumeric characters and underscore'
        )
    ),
    password: zfd.text(
      z
        .string({
          required_error: 'Password is required',
        })
        .min(8, 'Password should at least have 8 characters')
        .max(32, 'Password is too long')
        .regex(
          /^[a-zA-Z0-9_@^$!#?]*$/,
          'Password should only include alphanumeric characters and symbols (_@^$!#?)'
        )
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

  const formData = await request.formData()
  const result = await validator.validate(formData)
  if (result.error) return validationError(result.error)

  return await authenticator.authenticate('user-pass-signup', requestClone, {
    successRedirect: '/',
    failureRedirect: '/signup',
  })
}

// Finally, we can export a loader function where we check if the user is
// authenticated with `authenticator.isAuthenticated` and redirect to the
// dashboard if it is or return null if it's not
export let loader: LoaderFunction = async ({ request }) => {
  // If the user is already authenticated redirect to /dashboard directly
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

export default function Example() {
  const transition = useTransition()
  const loaderData = useLoaderData()

  return (
    <>
      <div className='flex min-h-full pt-16'>
        <div className='flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              <h2 className='mt-6 text-3xl font-extrabold text-gray-900'>
                Create your account
              </h2>
            </div>

            <div className='mt-6'>
              <div>
                <div>
                  <p className='text-sm font-medium text-gray-700'>
                    Sign up with
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
                    name='name'
                    label='Full Name'
                    type='name'
                    placeholder='Juan Dela Cruz'
                    autoComplete='name'
                    className={`${
                      loaderData?.error?.message && 'border-red-500'
                    }`}
                  />
                  <Input
                    name='username'
                    label='Username'
                    type='username'
                    autoComplete='username'
                    placeholder='juandelacruz123'
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

                  <div>
                    <p className='text-sm font-medium text-red-600'>
                      {loaderData?.error?.message}
                    </p>
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
                        'Sign up'
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
            src='/images/sign-up.jpg'
            alt='fresh chicken pork meat and beef'
          />
        </div>
      </div>
    </>
  )
}
