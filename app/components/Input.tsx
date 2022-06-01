import React, { forwardRef } from 'react'
import { useField, useFormContext } from 'remix-validated-form'

type InputProps = {
  name: string
  label: string
  type?: string
  autoComplete?: string
  value?: string
  hideErrors?: boolean
  'data-testid'?: string
  form?: string
  className?: string
  placeholder?: string
}

export const Input = forwardRef(
  (
    {
      name,
      label,
      type = 'text',
      value,
      autoComplete,
      hideErrors: noErrors,
      'data-testid': dataTestId,
      form,
      className,
      placeholder,
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const { getInputProps, error } = useField(name, {
      formId: form,
    })

    return (
      <div>
        <label
          htmlFor={name}
          className='block text-sm font-medium text-gray-700'
        >
          {label}
        </label>
        <div className='mt-1'>
          <input
            value={value}
            data-testid={dataTestId}
            className={`block w-full appearance-none rounded-md border ${
              error ? 'border-red-500' : 'border-gray-300'
            } p-3 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm ${className}`}
            {...getInputProps({
              form,
              type,
              ref,
              id: name,
              autoComplete,
              placeholder,
            })}
          />
        </div>
        {error && !noErrors && <p className='text-sm text-red-500'>{error}</p>}
      </div>
    )
  }
)
