import React, { forwardRef, useState } from 'react'
import { useField } from 'remix-validated-form'

type FieldsetProps = {
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

export const Fieldset = forwardRef(
  ({
    name,
    label,
    value,
    autoComplete,
    hideErrors: noErrors,
    'data-testid': dataTestId,
    form,
    className,
    placeholder,
  }: FieldsetProps) => {
    const { getInputProps, error } = useField(name, {
      formId: form,
    })

    const [inputValue, setInputValue] = useState(value || '')
    return (
      <div>
        <label
          htmlFor={name}
          className='block text-sm font-medium text-gray-700'
        >
          {label}
        </label>
        <div className='mt-1'>
          <textarea
            {...getInputProps({
              form,
              id: name,
              autoComplete,
              placeholder,
            })}
            className={`block w-full appearance-none rounded-md border ${
              error ? 'border-red-500' : 'border-gray-300'
            } p-3 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm ${className}`}
            data-testid={dataTestId}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
          />
          <p className='text-xs text-gray-500'>{inputValue.length}/280</p>
        </div>
        {error && !noErrors && <p className='text-sm text-red-500'>{error}</p>}
      </div>
    )
  }
)
