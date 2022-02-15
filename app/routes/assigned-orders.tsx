/* This example requires Tailwind CSS v2.0+ */
import {
  CalendarIcon,
  LocationMarkerIcon,
  UsersIcon,
} from '@heroicons/react/solid'

const positions = [
  {
    id: 1,
    title: 'Order 123-456',
    type: 'Packaging',
    location: 'Phase 1 Block 2 Lot 3, Parklane Country Homes',
    department: 'Evan Monreal',
    closeDate: '2022-01-07',
    closeDateFull: 'January 7, 2022',
  },
  {
    id: 2,
    title: 'Order 123-457',
    type: 'For Delivery',
    location: 'House #12, Sapphire Street, Camella Lessandra',
    department: 'Samantha Lugtu',
    closeDate: '2022-01-07',
    closeDateFull: 'January 7, 2022',
  },
  {
    id: 3,
    title: 'Order 123-459',
    type: 'Completed',
    location: 'Block 76 Lot 5, Lumina Homes',
    department: 'Joshua Lopez',
    closeDate: '2022-01-14',
    closeDateFull: 'January 14, 2022',
  },
  {
    id: 3,
    title: 'Order 123-005',
    type: 'Completed',
    location: 'Block 76 Lot 5, Lumina Homes',
    department: 'Joshua Lopez',
    closeDate: '2022-01-14',
    closeDateFull: 'January 14, 2022',
  },
  {
    id: 3,
    title: 'Order 123-004',
    type: 'Completed',
    location: 'Block 76 Lot 5, Lumina Homes',
    department: 'Joshua Lopez',
    closeDate: '2022-01-14',
    closeDateFull: 'January 14, 2022',
  },
  {
    id: 3,
    title: 'Order 123-003',
    type: 'Completed',
    location: 'Block 76 Lot 5, Lumina Homes',
    department: 'Joshua Lopez',
    closeDate: '2022-01-14',
    closeDateFull: 'January 14, 2022',
  },
  {
    id: 3,
    title: 'Order 123-002',
    type: 'Completed',
    location: 'Block 76 Lot 5, Lumina Homes',
    department: 'Joshua Lopez',
    closeDate: '2022-01-14',
    closeDateFull: 'January 14, 2022',
  },
]

export default function Example() {
  return (
    <>
      <div className='border-b border-gray-200 bg-white px-4 py-5 pt-24 sm:px-6'>
        <h3 className='text-3xl font-extrabold leading-6 text-gray-900'>
          Assgined Orders
        </h3>
        <p className='mt-3 text-sm text-gray-500'>
          List of all assgined orders to you.
        </p>
      </div>
      <div className='overflow-hidden bg-white shadow sm:rounded-md'>
        <ul role='list' className='divide-y divide-gray-200'>
          {positions.map((position) => (
            <li key={position.id}>
              <a href='#' className='block hover:bg-gray-50'>
                <div className='px-4 py-4 sm:px-6'>
                  <div className='flex items-center justify-between'>
                    <p className='truncate text-xl font-medium text-red-500 hover:text-red-600'>
                      {position.title}
                    </p>
                    <div className='ml-2 flex flex-shrink-0'>
                      <p
                        className={`inline-flex rounded-full ${
                          position.type === 'Packaging' && 'bg-red-100'
                        } ${
                          position.type === 'For Delivery' && 'bg-yellow-100'
                        } ${position.type === 'Completed' && 'bg-green-100'} 
                        
                        px-2 text-xs font-semibold leading-5 
                        
                        ${position.type === 'Packaging' && 'text-red-900'}
                        
                        ${position.type === 'For Delivery' && 'text-yellow-900'}
                        
                        ${position.type === 'Completed' && 'text-green-900'}
                        
                        `}
                      >
                        {position.type}
                      </p>
                    </div>
                  </div>
                  <div className='mt-2 sm:flex sm:justify-between'>
                    <div className='sm:flex'>
                      <p className='flex items-center text-sm text-gray-500'>
                        <UsersIcon
                          className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
                          aria-hidden='true'
                        />
                        {position.department}
                      </p>
                      <p className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-3'>
                        <LocationMarkerIcon
                          className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
                          aria-hidden='true'
                        />
                        {position.location}
                      </p>
                    </div>
                    <div className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0'>
                      <CalendarIcon
                        className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
                        aria-hidden='true'
                      />
                      <p>
                        {position.type === 'Completed'
                          ? 'Delivered on'
                          : 'Placed on'}{' '}
                        <time dateTime={position.closeDate}>
                          {position.closeDateFull}
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
