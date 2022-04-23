import { Category, Product, Role } from '@prisma/client'
import { withZod } from '@remix-validated-form/with-zod'
import { useState } from 'react'
import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
  unstable_parseMultipartFormData,
  UploadHandler,
  useLoaderData,
} from 'remix'
import { validationError } from 'remix-validated-form'
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

export const clientValidator = withZod(
  baseSchema.and(
    z.object({
      image: zfd.file(),
    })
  )
)

const serverValidator = withZod(
  baseSchema.and(
    z.object({
      image: z.string(),
    })
  )
)

export const action: ActionFunction = async ({ request }) => {
  const uploadHandler: UploadHandler = async ({ name, stream }) => {
    if (name !== 'image') {
      stream.resume()
      return
    }
    const uploadedImage: any = await uploadImage(stream)
    return uploadedImage.secure_url
  }

  const formData = await unstable_parseMultipartFormData(request, uploadHandler)

  const imageLink = formData.get('image')

  if (!imageLink) {
    return validationError({
      fieldErrors: {
        image: 'Unable to upload the image, please try again.',
      },
    })
  }

  const productName = formData.get('name') as string

  const existingProduct = await db.product.findFirst({
    where: {
      name: productName,
    },
  })

  if (existingProduct) {
    const url = imageLink as string
    const publicId = url.split('/').pop()?.split('.')?.shift() as string
    await deleteImage(publicId)
    return validationError({
      fieldErrors: {
        name: 'Product name already exists',
      },
    })
  }

  const result = await serverValidator.validate(formData)
  if (result.error) {
    // validationError comes from `remix-validated-form`
    return validationError(result.error)
  }

  const {
    name,
    category,
    image: imageUrl,
    price,
    stock,
    weight,
    description,
    brand,
  } = result.data

  if (formData.get('_method') === 'delete') {
    const userId = formData.get('userId') as string
    invariant(userId, 'userId is not found.')
    const user = await db.user.delete({
      where: { id: userId },
    })
    return redirect('/manage-users')
  }

  try {
    await db.product.create({
      data: {
        name,
        category: category as Category,
        imageUrl,
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

  const products = await db.product.findMany({
    take: 10,
    orderBy: { updatedAt: 'desc' },
  })

  return json({ products })
}

export default function Example() {
  const [openSlideOver, setOpenSlideOver] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const { products } = useLoaderData()
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
