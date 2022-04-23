import { useEffect, useState } from 'react'
import { FileError, useDropzone } from 'react-dropzone'
import { useLoaderData } from 'remix'
import { useField } from 'remix-validated-form'
import invariant from 'tiny-invariant'
import { Input } from '../Input'

interface CustomFile extends File {
  preview?: string
  path?: string
}

export function ProductImageDropzone({
  name,
  imageUrl,
}: {
  name?: string
  imageUrl?: string
}) {
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
          className='my-2 h-full w-full object-cover object-center sm:rounded-lg'
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

  const { error } = useField('image')

  return (
    <section className='container'>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input id='image-input' type='file' name='image' {...getInputProps()} />

        <div>
          <label className='block text-sm font-medium text-gray-900'>
            Product image
          </label>
          <div
            className={`mt-1 flex justify-center rounded-md border-2 border-dashed ${
              error ? 'border-red-500' : 'border-gray-400'
            } px-6 pt-5 pb-6`}
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
                  <span>Upload a file</span>
                </label>
                <p className='pl-1'>or drag and drop</p>
              </div>
              <p className='text-xs text-gray-500'>PNG, JPG, JPEG up to 10MB</p>
            </div>
          </div>
        </div>
        {error && (
          <p className='text-sm text-red-500'>{'Product image is invalid.'}</p>
        )}

        {imageUrl && name ? (
          <div key={name}>
            <img
              src={imageUrl}
              alt={name}
              className='my-2 h-full w-full object-cover object-center sm:rounded-lg'
            />
          </div>
        ) : (
          acceptedFileItems
        )}
        {fileRejections.length > 0 ? (
          <div className='mt-4'>
            <p className='text-sm text-red-500'>File input errors:</p>
            <ul className='text-sm text-red-500'>{...fileRejectionItems}</ul>
          </div>
        ) : null}
      </div>
    </section>
  )
}
