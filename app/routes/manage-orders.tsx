/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    name: 'Lorem Ipsum',
    id: '123-456',
    title: 'Beef Cubes',
    department: 'Optimization',
    role: '01-12-2022',
    email: 'lorem.ipsum@example.com',
    number: '0912-123-1234',
    address: 'House #123, Sample Subdivision',
  },
  {
    name: 'Lorem Ipsum',
    id: '123-456',
    title: 'Beef Cubes',
    department: 'Optimization',
    role: '01-12-2022',
    email: 'lorem.ipsum@example.com',
    number: '0912-123-1234',
    address: 'House #123, Sample Subdivision',
  },
  {
    name: 'Lorem Ipsum',
    id: '123-456',
    title: 'Beef Cubes',
    department: 'Optimization',
    role: '01-12-2022',
    email: 'lorem.ipsum@example.com',
    number: '0912-123-1234',
    address: 'House #123, Sample Subdivision',
  },
  {
    name: 'Lorem Ipsum',
    id: '123-456',
    title: 'Beef Cubes',
    department: 'Optimization',
    role: '01-12-2022',
    email: 'lorem.ipsum@example.com',
    number: '0912-123-1234',
    address: 'House #123, Sample Subdivision',
  },
  {
    name: 'Lorem Ipsum',
    id: '123-456',
    title: 'Beef Cubes',
    department: 'Optimization',
    role: '01-12-2022',
    email: 'lorem.ipsum@example.com',
    number: '0912-123-1234',
    address: 'House #123, Sample Subdivision',
  },
  {
    name: 'Lorem Ipsum',
    id: '123-456',
    title: 'Beef Cubes',
    department: 'Optimization',
    role: '01-12-2022',
    email: 'lorem.ipsum@example.com',
    number: '0912-123-1234',
    address: 'House #123, Sample Subdivision',
  },
  // More people...
]

export default function Example() {
  return (
    <>
      <div className=' bg-white px-4 py-5 pt-24 sm:px-6'>
        <h3 className='text-3xl font-extrabold leading-6 text-gray-900'>
          Manage Orders
        </h3>
        <p className='mt-3 text-sm text-gray-500'>
          View, edit, or delete orders.
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
                      Order Id
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
                      Address
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Order Items
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Status
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Date
                    </th>
                    <th scope='col' className='relative px-6 py-3'>
                      <span className='sr-only'>Action</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className='whitespace-nowrap px-6 py-4'>
                        <div className='flex '>
                          <div className='text-sm font-medium text-gray-900'>
                            {person.id}
                          </div>
                        </div>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        <div className='flex items-center'>
                          <div className=''>
                            <div className='text-sm font-medium text-gray-900'>
                              {person.name}
                            </div>
                            <div className='text-sm text-gray-500'>
                              {person.email}
                            </div>
                            <div className='text-sm text-gray-500'>
                              {person.number}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        <div className='flex '>
                          <div className='text-sm font-medium text-gray-900'>
                            {person.address}
                          </div>
                        </div>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        <div className='text-sm text-gray-900'>
                          1x {person.title}
                        </div>
                        <div className='text-sm text-gray-900'>
                          2x {person.title}
                        </div>
                        <div className='text-sm text-gray-900'>
                          3x {person.title}
                        </div>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        <span className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
                          Completed
                        </span>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'>
                        {person.role}
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 text-right text-sm font-medium'>
                        <a href='#' className='text-red-500 hover:text-red-600'>
                          Edit
                        </a>
                      </td>
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
