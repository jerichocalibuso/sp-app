import { useEffect, useState } from 'react'
import { FileError, useDropzone } from 'react-dropzone'
import invariant from 'tiny-invariant'

interface CustomFile extends File {
  preview?: string
  path?: string
}

export function ProductImageDropzone() {
  const [files, setFiles] = useState<CustomFile[]>([])
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: 'image/jpeg,image/png',
      maxFiles: 1,
      maxSize: 10000000,
      onDropAccepted: (acceptedFiles) => {
        console.log(`acceptedFiles: ${JSON.stringify(acceptedFiles, null, 2)}`)

        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        )
      },
    })

  console.log(`acceptedFiles: ${JSON.stringify(acceptedFiles, null, 2)}`)
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

  return (
    <section className='container'>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div>
          <label className='block text-sm font-medium text-gray-700'>
            Product image
          </label>
          <div className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
            <div className='space-y-1 text-center'>
              <svg
                className='mx-auto h-12 w-12 text-gray-400'
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
                  className='focus-within:outpne-none relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'
                >
                  <span>Upload a file</span>
                  <input
                    id='file-upload'
                    name='file-upload'
                    type='file'
                    className='sr-only'
                  />
                </label>
                <p className='pl-1'>or drag and drop</p>
              </div>
              <p className='text-xs text-gray-500'>PNG, JPG, GIF up to 10MB</p>
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
    </section>
  )
}
