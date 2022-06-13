import { Address, Order, OrderItem, Product, Role } from '@prisma/client'
import { ActionFunction, LoaderFunction, redirect } from '@remix-run/node'
import { useLoaderData, Link, Form } from '@remix-run/react'
import { Fieldset } from '~/components/Fieldset'
import { authenticator } from '~/services/auth.server'

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
  }

  return redirect('')
}

export default function OrderDetailsPage() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <div className='max-w-xl'>
          <h1 className='mt-2 text-2xl font-extrabold tracking-tight sm:text-4xl'>
            Your feedback has been submitted!
          </h1>
        </div>
      </div>
    </div>
  )
}
