import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid'
import { Form } from 'remix'

interface Props {
  quantity: number
  productId: string
}
export function Quantity({ quantity, productId }: Props) {
  return (
    <div className='relative inline-flex rounded-md shadow-sm'>
      <Form method='post' id='minus'>
        <input type='hidden' name='_method' value='MINUS' />
        <input type='hidden' name='productId' value={productId} />
        <button
          type='submit'
          className='relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
        >
          <span className='sr-only'>Minus</span>
          <MinusSmIcon className='h-5 w-5' aria-hidden='true' />
        </button>
      </Form>

      <label htmlFor='quantity' className='sr-only'>
        Quantity
      </label>
      <input
        disabled
        name='quantity'
        id='quantity'
        className='flex w-16 border border-gray-300  px-2  text-center shadow-sm disabled:bg-white  sm:text-sm'
        value={quantity}
      />

      <Form method='post' id='add'>
        <input type='hidden' name='_method' value='ADD' />
        <input type='hidden' name='productId' value={productId} />
        <button
          type='submit'
          className='relative -ml-px inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500'
        >
          <span className='sr-only'>Add</span>
          <PlusSmIcon className='h-5 w-5' aria-hidden='true' />
        </button>
      </Form>
    </div>
  )
}
