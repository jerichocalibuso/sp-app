/* This example requires Tailwind CSS v2.0+ */

import { Product } from '@prisma/client'
import { useState } from 'react'
import AddEditProductForm from '~/components/AddEditProductForm'
import { products } from './products'

export default function Example() {
  const [openSlideOver, setOpenSlideOver] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  console.log(`selectedProduct: ${selectedProduct}`)

  return (
    <>
      <AddEditProductForm
        {...{ openSlideOver, setOpenSlideOver, selectedProduct }}
      />
      <div className='bg-white px-4 py-5 pt-24 sm:flex sm:items-center sm:px-6'>
        <div className='sm:flex-auto'>
          <h3 className='text-3xl font-extrabold leading-6 text-gray-900'>
            Manage Products
          </h3>
          <p className='mt-3 text-sm text-gray-500'>
            View, add, edit, or delete products.
          </p>
        </div>
        <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
          <button
            type='button'
            className='inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto'
            onClick={() => setOpenSlideOver(true)}
          >
            Add product
          </button>
        </div>
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
                      Product
                    </th>

                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Description
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Weight
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Stock
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
                    >
                      Brand
                    </th>

                    <th scope='col' className='relative px-6 py-3'>
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {products.map((product) => (
                    <tr
                      className='hover:cursor-pointer hover:bg-red-50'
                      key={product.id}
                      onClick={() => setOpenSlideOver(true)}
                    >
                      <td className='whitespace-nowrap px-6 py-4'>
                        <div className='flex items-center'>
                          <div className='h-10 w-10 flex-shrink-0'>
                            <img
                              className='h-10 w-10 rounded-md'
                              src={product.imageSrc}
                              alt=''
                            />
                          </div>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>
                              {product.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='wrap px-6 py-4'>
                        <div className='text-sm text-gray-900'>
                          {product.description}
                        </div>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        <div className='text-sm text-gray-900'>
                          {product.price}
                        </div>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4'>
                        <div className='text-sm text-gray-900'>
                          {product.weight}
                        </div>
                      </td>

                      <td className='whitespace-nowrap px-6 py-4'>
                        <div className='text-sm text-gray-900'>999</div>
                      </td>
                      <td className='whitespace-nowrap px-6 py-4 text-sm text-gray-900'>
                        {product.brand}
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
