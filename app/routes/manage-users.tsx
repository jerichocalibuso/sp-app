/* This example requires Tailwind CSS v2.0+ */

import { Role, User } from '@prisma/client'
import { useState } from 'react'
import { ActionFunction, json, LoaderFunction, redirect, useLoaderData } from 'remix'
import SlideOver from '~/components/SlideOver'
import { authenticator } from '~/services/auth.server'
import { db } from '~/utils/db.server'
import { products } from './products'

export let loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/signin',
  })

  const { role } = user
  if (role !== Role.ADMIN) {
    return redirect('/unauthorized')
  }

  const users = await db.user.findMany({
    take: 10,
    select: {
      id: true,
      name: true,
      role: true,
      username: true,
      provider: true,
      email: true,
    },
    orderBy: { updatedAt: 'desc' },
  })

  return json({ users })
}


export default function Example() {
  const [openSlideOver, setOpenSlideOver] = useState(true)
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  const { users } = useLoaderData()
  return (
    <>
      <SlideOver
        openSlideOver={openSlideOver}
        setOpenSlideOver={setOpenSlideOver}
        selectedUser={selectedUser}
      />
      <div className=' bg-white px-4 py-5 pt-24 sm:px-6'>
        <h3 className='text-3xl font-extrabold leading-6 text-gray-900'>
          Manage Users
        </h3>
        <p className='mt-3 text-sm text-gray-500'>
          View, edit, or delete users.
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
                      Name
                    </th>

                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Username
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      OAuth Provider
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Email
                    </th>
                    {/* <th scope='col' className='relative px-6 py-3'>
                      <span className='sr-only'>Action</span>
                    </th> */}
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {users.map((user: User) => (
                    <tr
                      onClick={() => {
                        setOpenSlideOver(true)
                        setSelectedUser(user)
                      }}
                      key={user.id}
                      className='hover:cursor-pointer hover:bg-red-50'
                    >
                      <td className='wrap px-6 py-4'>
                        <div className='text-sm text-gray-900'>{user.name}</div>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        <div className='text-sm text-gray-900'>{user.role}</div>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        <div className='text-sm text-gray-900'>
                          {user.username}
                        </div>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        <div className='text-sm text-gray-900'>
                          {user.provider}
                        </div>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        <div className='text-sm text-gray-900'>
                          {user.email}
                        </div>
                      </td>

                      {/* <td className='whitespace-nowrap px-6 py-4'>
                        <div className='text-sm text-gray-900'>999</div>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-900'>
                        {user.brand}
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
