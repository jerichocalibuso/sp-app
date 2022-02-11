import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'

export function Quantity() {
  return (
    <div className='relative inline-flex rounded-md shadow-sm'>
      <button
        type='button'
        className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
      >
        <span className='sr-only'>Previous</span>
        <MinusSmIcon className='h-5 w-5' aria-hidden='true' />
      </button>
      <label htmlFor='quantity' className='sr-only'>
        Quantity
      </label>
      <input
        name='quantity'
        id='quantity'
        className='flex w-16 border border-gray-300 px-2 text-center shadow-sm  sm:text-sm'
        placeholder='1'
      />

      <button
        type='button'
        className='relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
      >
        <span className='sr-only'>Next</span>
        <PlusSmIcon className='h-5 w-5' aria-hidden='true' />
      </button>
    </div>
  )
}
