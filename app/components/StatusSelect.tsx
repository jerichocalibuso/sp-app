import { Status } from '@prisma/client'
import { useField } from 'remix-validated-form'

type SelectProps = {
  name: string
  label: string
  value: Status | string
  className?: string
}

export const StatusSelect = ({
  name,
  label,
  value,
  className,
}: SelectProps) => {
  const { error, getInputProps } = useField(name)

  return (
    <div>
      <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
        {label}
      </label>
      <select
        {...getInputProps({ id: name })}
        defaultValue={value}
        className={`mt-1 block w-full appearance-none rounded-md border ${
          error ? 'border-red-500' : 'border-gray-300'
        } p-3 placeholder-gray-400 shadow-sm focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm ${className}`}
      >
        {Object.values(Status).map((status) => (
          <option key={status} value={status}>
            {status.replace(/_/g, ' ')}
          </option>
        ))}
      </select>
      {error && <span className='text-sm text-red-500'>{error}</span>}
    </div>
  )
}
