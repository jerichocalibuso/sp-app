import {
  ActionFunction,
  Form,
  LoaderFunction,
  redirect,
  unstable_parseMultipartFormData,
  UploadHandler,
  useLoaderData,
  useTransition,
} from 'remix'
import { deleteImage, uploadImage } from '~/utils/utils.server'

import { useState } from 'react'
import { FileError, useDropzone } from 'react-dropzone'
import { db } from '~/utils/db.server'
import invariant from 'tiny-invariant'
import { Link } from '@remix-run/react'

interface CustomFile extends File {
  preview?: string
  path?: string
}

export const action: ActionFunction = async ({ request, params }) => {
  const uploadHandler: UploadHandler = async ({ name, stream }) => {
    if (name !== 'image') {
      stream.resume()
      return
    }
    const uploadedImage: any = await uploadImage(stream)
    return uploadedImage.secure_url
  }

  const formData = await unstable_parseMultipartFormData(request, uploadHandler)

  const imageUrl = formData.get('image') as string
  const id = params?.productId || ''

  invariant(id, 'Product id error')
  invariant(imageUrl, 'Image upload error')

  const product = await db.product.findFirst({
    where: { id },
    select: {
      imageUrl: true,
    },
  })

  if (product?.imageUrl) {
    await deleteImage(imageUrl)
  }

  await db.product.update({
    where: { id },
    data: {
      imageUrl,
    },
  })

  return redirect('/manage-products')
}

export const loader: LoaderFunction = async ({ params }) => {
  const data = db.product.findFirst({
    where: {
      id: params.productId,
    },
  })
  return data
}

export default function UploadImageRoute() {
  const transition = useTransition()
  const product = useLoaderData()
  const [files, setFiles] = useState<CustomFile[]>([])
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: 'image/jpeg,image/png',
      maxFiles: 1,
      maxSize: 10000000,
      onDropAccepted: (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        )
      },
    })

  const acceptedFileItems = acceptedFiles.map((file: CustomFile) => {
    return files.map((file) => (
      <div key={file.name}>
        <img
          src={file.preview}
          alt={file.name}
          className='my-2 h-64 w-64 object-cover object-center sm:rounded-lg'
        />
        <p>
          {file.path} ({(file.size / 1000000)?.toFixed(2)} MB)
        </p>
      </div>
    ))
  })

  const showErrors = (errors: FileError[]) => {
    return errors.map((error) => {
      if (error.code === 'file-too-large') {
        return <p>- File size is larger than 10MB.</p>
      } else if (error.code === 'file-invapd-type') {
        return <p>- Vapd file types are .jpeg, .jpg, .png files.</p>
      } else if (error.code === 'too-many-files') {
        return <p>- You can only upload a single file.</p>
      }
    })
  }

  const fileRejectionItems = fileRejections.map(
    ({ file, errors }: { file: CustomFile; errors: FileError[] }) => (
      <p key={file.path}>
        {`${file.path} (${(file.size / 1000000)?.toFixed(2)} MB)`}
        <p>{...showErrors(errors)}</p>
      </p>
    )
  )
  return (
    <div className='flex items-center justify-center py-32'>
      <Form id='imageUpload' encType='multipart/form-data' method='post'>
        <input type='hidden' name='productId' value={product?.id} />

        <div {...getRootProps({ className: 'dropzone' })}>
          <input
            id='image-input'
            type='file'
            name='image'
            {...getInputProps({
              required: true,
            })}
          />

          <div>
            <label className='block text-sm font-medium text-gray-900'>
              New product image
            </label>
            {/* <div
              className={`mt-1 flex justify-center rounded-md border-2 border-dashed ${
                error ? 'border-red-500' : 'border-gray-400'
              } px-6 pt-5 pb-6`}
            > */}
            <div
              className={`mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-400 px-6 pt-5 pb-6`}
            >
              <div className='space-y-1 text-center'>
                <svg
                  className={`mx-auto h-12 w-12 text-gray-400`}
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 48 48'
                  aria-hidden='true'
                >
                  <path
                    d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <div className='flex text-sm text-gray-600'>
                  <label
                    htmlFor='file-upload'
                    className='focus-within:outpne-none relative cursor-pointer rounded-md bg-white font-medium text-red-600 focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 hover:text-red-500'
                  >
                    <span>Click to select an image</span>
                  </label>
                </div>
                <p className='text-xs text-gray-500'>
                  PNG, JPG, JPEG up to 10MB
                </p>
              </div>
            </div>
          </div>

          {acceptedFileItems}
          {fileRejections.length > 0 ? (
            <div className='mt-4'>
              <p className='text-sm text-red-500'>File input errors:</p>
              <ul className='text-sm text-red-500'>{...fileRejectionItems}</ul>
            </div>
          ) : null}
        </div>
        <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
          <button
            type='submit'
            className='inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
          >
            {transition.submission ? (
              <div className='flex w-12 items-stretch justify-center'>
                <svg
                  className='w-5 animate-spin text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              </div>
            ) : (
              'Submit'
            )}
          </button>
          <Link
            to='/manage-products'
            className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm'
          >
            Cancel
          </Link>
        </div>
      </Form>
    </div>
  )
}
