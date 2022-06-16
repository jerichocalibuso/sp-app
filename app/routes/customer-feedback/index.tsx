import { Feedback, Status, User } from '@prisma/client'
import { LoaderFunction } from '@remix-run/node'
import { db } from '~/utils/db.server'
import { useNavigate } from 'react-router'
import { useLoaderData, useSearchParams, Link } from '@remix-run/react'

interface FeedbackData extends Feedback {
  User: User
}

interface LoaderData {
  feedbacks: FeedbackData[]
  feedbacksCount: number
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const page = parseInt(url?.searchParams?.get('page') || '0')
  const feedbacks = await db.feedback.findMany({
    skip: page * 10,
    take: 10,
    include: {
      User: true,
    },
  })
  const feedbacksCount = await db.feedback.count()

  return { feedbacks, feedbacksCount }
}

export default function ManageFeedbacksPage() {
  const { feedbacks, feedbacksCount } = useLoaderData<LoaderData>()
  const [searchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page') || '0')
  const navigate = useNavigate()

  return (
    <>
      <div className=' bg-white px-4 py-5 pt-24 sm:px-6'>
        <h3 className='text-3xl font-extrabold leading-6 text-gray-900'>
          Manage Feedbacks
        </h3>
        <p className='mt-3 text-sm text-gray-500'>
          View, edit, or delete feedbacks.
        </p>
      </div>
      <div className='flex flex-col px-4'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <div className='overflow-hidden border-b border-gray-200 shadow sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Feedback Id
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Customer
                    </th>

                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Created at
                    </th>

                    <th scope='col' className='relative px-6 py-3'>
                      <span className='sr-only'>Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {feedbacks.map((feedback) => {
                    return (
                      <tr
                        className='hover:cursor-pointer hover:bg-red-50'
                        key={feedback.id}
                        onClick={() => {
                          navigate(`/customer-feedback/${feedback.id}`)
                        }}
                      >
                        <td className='whitespace-nowrap px-6 py-4'>
                          <div className='flex '>
                            <div className='text-sm font-medium text-gray-900'>
                              {feedback.id}
                            </div>
                          </div>
                        </td>
                        <td className='whitespace-nowrap px-6 py-4'>
                          <div className='flex items-center'>
                            <div className=''>
                              <div className='text-sm font-medium text-gray-900'>
                                {feedback?.User?.name || 'GUEST'}
                              </div>
                              <div className='text-sm text-gray-500'>
                                {feedback?.User?.email || ''}
                              </div>
                              <div className='text-sm text-gray-500'>
                                {feedback?.User?.username || ''}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className='whitespace-nowrap px-6 py-4 font-medium text-gray-900'>
                          {new Date(
                            feedback?.createdAt || ''
                          ).toLocaleDateString()}
                        </td>
                        <td className='whitespace-nowrap px-6 py-4 text-right text-sm font-medium'>
                          <a
                            href='#'
                            className='text-red-500 hover:text-red-600'
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              <nav
                className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'
                aria-label='Pagination'
              >
                <div className='hidden sm:block'>
                  <p className='text-sm text-gray-700'>
                    Showing{' '}
                    <span className='font-medium'>{(page + 1) * 10 - 9}</span>{' '}
                    to{' '}
                    <span className='font-medium'>
                      {(page + 1) * 10 > feedbacksCount
                        ? feedbacksCount
                        : (page + 1) * 10}
                    </span>{' '}
                    of <span className='font-medium'>{feedbacksCount}</span>{' '}
                    results
                  </p>
                </div>
                <div className='flex flex-1 justify-between sm:justify-end'>
                  <Link
                    to={`?page=${page - 1}`}
                    className={
                      page < 1
                        ? `hidden`
                        : `relative inline-flex  items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`
                    }
                  >
                    Previous
                  </Link>

                  <Link
                    to={`?page=${page + 1}`}
                    className={
                      page + 1 >= feedbacksCount / 10
                        ? 'hidden'
                        : `relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50`
                    }
                  >
                    Next
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
