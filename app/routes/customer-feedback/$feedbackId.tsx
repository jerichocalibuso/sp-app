import { useLoaderData } from '@remix-run/react'
import { LoaderFunction, redirect } from '@remix-run/node'
import { Feedback, Role, User } from '@prisma/client'
import { db } from '~/utils/db.server'

import { authenticator } from '~/services/auth.server'

interface FeedbackData extends Feedback {
  User: User
}

type LoaderData = {
  feedback: FeedbackData
}
export const loader: LoaderFunction = async ({ params, request }) => {
  const { feedbackId } = params
  const user = await authenticator.isAuthenticated(request)

  if (!user?.role) {
    return redirect('/signin')
  }

  if (user?.role !== Role.ADMIN) {
    return redirect('/unauthorized')
  }

  const feedback = await db.feedback.findFirst({
    where: {
      id: feedbackId,
    },
    include: {
      User: true,
    },
  })

  if (!feedback) redirect('/customer-feedback')

  return { feedback }
}

export default function Example() {
  const { feedback } = useLoaderData<LoaderData>()

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>
        <div className='max-w-20'>
          <h1 className='mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl'>
            View feedback
          </h1>

          <dl className='mt-6 text-sm font-medium'>
            <dt className='text-gray-900'>Feedback ID</dt>
            <dd className='mt-2 text-red-500'>{feedback?.id || ''}</dd>
          </dl>
          <dl className='mt-6 text-sm font-medium'>
            <dt className='text-gray-900'>Created at</dt>
            <dd className='mt-2 text-red-500'>
              {new Date(feedback?.createdAt || '')?.toLocaleDateString(
                'en-us',
                {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }
              ) || ''}
            </dd>
          </dl>
          <dl className='mt-6 text-sm font-medium'>
            <dt className='font-medium text-gray-900'>User information</dt>
            <dd className='mt-2 text-gray-700'>
              <div className='not-italic'>
                <span className='block'>{feedback.User.name}</span>
                <span className='block'>{feedback.User.username}</span>
                <span className='block'>{feedback.User.email}</span>
              </div>
            </dd>
          </dl>
          <dl className='mt-6 text-sm font-medium'>
            <dt className='font-medium text-gray-900'>Feedback</dt>
            <dd className='mt-2 text-gray-700'>
              <div className='not-italic'>
                <span className='block'>{feedback.feedback}</span>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  )
}
