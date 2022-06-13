import { Address, Order, OrderItem, Product, Role } from '@prisma/client'
import { ActionFunction, LoaderFunction, redirect } from '@remix-run/node'
import { useLoaderData, Link, Form } from '@remix-run/react'
import { Fieldset } from '~/components/Fieldset'
import { authenticator } from '~/services/auth.server'
import { db } from '~/utils/db.server'

export const loader: LoaderFunction = async ({ params, request }) => {
  const user = await authenticator.isAuthenticated(request)

  if (!user?.role) {
    return redirect('/signin')
  }

  if (user?.role !== Role.CUSTOMER) {
    return redirect('/unauthorized')
  }

  return null
}

export const action: ActionFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request)

  if (!user?.role) {
    return redirect('/signin')
  }

  if (user?.role !== Role.CUSTOMER) {
    return redirect('/unauthorized')
  }

  const formData = await request.formData()
  const feedback = formData.get('feedback') as string

  if (feedback) {
    await db.feedback.create({
      data: {
        feedback,
        userId: user?.id || '',
      },
    })
    return redirect('/submit-feedback/success')
  }

  return null
}

export default function OrderDetailsPage() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <div className='max-w-xl'>
          <h1 className='mt-2 text-2xl font-extrabold tracking-tight sm:text-4xl'>
            Submit a feedback
          </h1>
          <Form method='post' className='mt-10'>
            <label
              htmlFor={'feedback'}
              className='block text-sm font-medium text-gray-700'
            >
              {'Feedback form'}
            </label>
            <div className='mt-1'>
              <textarea
                className={`border'border-gray-300' block h-32 w-full appearance-none rounded-md p-3 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm`}
                placeholder='Please describe your feedback...'
                name='feedback'
                required
              />
            </div>
            <div className='flex justify-end py-4'>
              <button
                type='submit'
                className='inline-flex w-auto justify-end rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto sm:text-sm'
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}
