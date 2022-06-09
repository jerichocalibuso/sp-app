import { Category, Product, Role } from '@prisma/client'
import { withZod } from '@remix-validated-form/with-zod'
import { useEffect, useState } from 'react'
import {
  ActionFunction,
  json,
  Link,
  LoaderFunction,
  redirect,
  useLoaderData,
  useSearchParams,
} from 'remix'
import { validationError } from 'remix-validated-form'
import invariant from 'tiny-invariant'
import { z } from 'zod'
import { zfd } from 'zod-form-data'
import AddEditProductForm from '~/components/AddEditProductForm'
import { authenticator } from '~/services/auth.server'
import { db } from '~/utils/db.server'
import { deleteImage, uploadImage } from '~/utils/utils.server'

const baseSchema = z.object({
  name: zfd.text(z.string().nonempty('Name is required')),
  category: zfd.text(z.string().nonempty('Name is required')),
  price: zfd.numeric(
    z
      .number()
      .int('Price must be an integer.')
      .positive('Price must be greater than 0.')
  ),
  stock: zfd.numeric(
    z
      .number()
      .int('Stock must be an integer.')
      .positive('Stock must be greater than 0.')
  ),
  weight: zfd.numeric(
    z
      .number()
      .int('Weight must be an integer.')
      .positive('Weight must be greater than 0.')
  ),
  description: zfd.text(
    z.string().max(280, { message: 'Must be 280 or fewer characters long.' })
  ),

  brand: zfd.text(z.string()),
})

export const productValidator = withZod(baseSchema)

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  if (formData.get('_method') === 'delete') {
    const productId = formData.get('productId') as string
    invariant(productId, 'productId is not found.')
    const product = await db.product.findFirst({
      where: { id: productId },
      select: {
        imageUrl: true,
      },
    })

    await deleteImage(product?.imageUrl || '')
    await db.product.delete({
      where: { id: productId },
    })
    return redirect('/manage-products')
  }

  const result = await productValidator.validate(formData)

  if (result.error) {
    // validationError comes from `remix-validated-form`
    return validationError(result.error)
  }

  const { name, category, price, stock, weight, description, brand } =
    result.data

  const productId = formData.get('productId') as string
  if (productId) {
    const product = await db.product.findFirst({
      where: { id: productId },
      select: {
        name: true,
      },
    })
    const productName = formData.get('name') as string

    if (product?.name !== productName) {
      const existingProduct = await db.product.findFirst({
        where: {
          name: productName,
        },
      })

      if (existingProduct) {
        return validationError({
          fieldErrors: {
            name: 'Product name already exists',
          },
        })
      }
    }

    try {
      await db.product.update({
        where: { id: productId },
        data: {
          name,
          category: category as Category,
          price,
          stock,
          weight,
          description,
          brand,
        },
      })
    } catch (error) {
      throw new Response('Unable to create the product', { status: 500 })
    }
  } else {
    const productName = formData.get('name') as string

    const existingProduct = await db.product.findFirst({
      where: {
        name: productName,
      },
    })

    if (existingProduct) {
      return validationError({
        fieldErrors: {
          name: 'Product name already exists',
        },
      })
    }

    try {
      await db.product.create({
        data: {
          name,
          category: category as Category,
          imageUrl:
            'https://res.cloudinary.com/jerichocalibuso/image/upload/v1650783918/sp-app/empty_image_a9urnc.jpg',
          price,
          stock,
          weight,
          description,
          brand,
        },
      })
    } catch (error) {
      throw new Response('Unable to create the product', { status: 500 })
    }
  }

  return redirect('/manage-products')
}

export let loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: '/signin',
  })

  const { role, id } = user
  if (role !== Role.ADMIN) {
    return redirect('/unauthorized')
  }

  const url = new URL(request.url)
  const page = parseInt(url?.searchParams?.get('page') || '0')

  const productsCount = await db.product.count()
  const products = await db.product.findMany({
    take: 10,
    skip: page * 10,
    orderBy: { updatedAt: 'desc' },
  })

  return json({ products, productsCount })
}

export default function ManageProductsRoute() {
  const [openSlideOver, setOpenSlideOver] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const { products, productsCount } = useLoaderData()

  const [searchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page') || '0')

  useEffect(() => {
    if (!openSlideOver) {
      setSelectedProduct(null)
    }
  }, [openSlideOver])
  return (
    <>
      <AddEditProductForm
        {...{
          openSlideOver,
          setOpenSlideOver,
          selectedProduct,
        }}
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
                      Category
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
                  {products.map((product: Product) => (
                    <tr
                      className='hover:cursor-pointer hover:bg-red-50'
                      key={product.id}
                      onClick={() => {
                        setSelectedProduct(product)
                        setOpenSlideOver(true)
                      }}
                    >
                      <td className='whitespace-nowrap px-6 py-4'>
                        <div className='flex items-center'>
                          <div className='h-10 w-10 flex-shrink-0'>
                            {product.imageUrl ? (
                              <img
                                className='h-10 w-10 rounded-md'
                                src={product.imageUrl}
                                alt={product.name}
                                loading='lazy'
                              />
                            ) : (
                              <div className='h-10 w-10 rounded-md bg-gray-500' />
                            )}
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
                          {product.category}
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
                      {(page + 1) * 10 > productsCount
                        ? productsCount
                        : (page + 1) * 10}
                    </span>{' '}
                    of <span className='font-medium'>{productsCount}</span>{' '}
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
                      page + 1 > productsCount / 10
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
