import { Combobox } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Status, User } from '@prisma/client'
import { useState } from 'react'
import { useField } from 'remix-validated-form'

type SelectProps = {
  name: string
  label: string
  className?: string
  riderId: string | null
  riders: User[] | []
  error: string
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export const RiderAutocomplete = ({
  error,
  label,
  riders,
  riderId,
}: SelectProps) => {
  const [selectedRider, setSelectedRider] = useState<User | null>(
    riders?.find((rider) => rider.id === riderId) || null
  )
  const [input, setInput] = useState('')
  const filteredRider =
    input === ''
      ? riders
      : riders?.filter((rider) => {
          return (
            rider?.name?.toLowerCase().includes(input.toLowerCase()) || null
          )
        })

  return (
    <div>
      <input type='hidden' name='riderId' value={selectedRider?.id || ''} />
      <Combobox as='div' value={selectedRider} onChange={setSelectedRider}>
        <Combobox.Label className='block text-sm font-medium text-gray-700'>
          {label}
        </Combobox.Label>
        <div className='relative mt-1'>
          <Combobox.Input
            placeholder='Start typing to search for riders'
            className={`${
              error ? 'border-red-500' : 'border-gray-300'
            } w-full rounded-md border border-gray-300 bg-white p-3 pr-10 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm`}
            onChange={(event) => setInput(event.target.value)}
            displayValue={(rider: User) => rider?.name || ''}
          />
          <Combobox.Button className='absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none'>
            <SelectorIcon
              className='h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </Combobox.Button>

          {filteredRider.length > 0 && (
            <Combobox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {filteredRider.map((rider) => (
                <Combobox.Option
                  key={rider.id}
                  value={rider}
                  className={({ active }) =>
                    classNames(
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                      active ? 'bg-red-600 text-white' : 'text-gray-900'
                    )
                  }
                >
                  {({ active, selected }) => (
                    <>
                      <span
                        className={classNames(
                          'block truncate',
                          selected && 'font-semibold'
                        )}
                      >
                        {rider.name}
                      </span>

                      {selected && (
                        <span
                          className={classNames(
                            'absolute inset-y-0 right-0 flex items-center pr-4',
                            active ? 'text-white' : 'text-red-600'
                          )}
                        >
                          <CheckIcon className='h-5 w-5' aria-hidden='true' />
                        </span>
                      )}
                    </>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          )}
        </div>
      </Combobox>
      {error && <span className='text-sm text-red-500'>{error}</span>}
    </div>
  )
}
