import clsx from 'clsx'
import React from 'react'

import { SelectProps, useSelect } from '.'

export function Select({
  onChange,
  onOpen,
  open = false,
  options,
  value
}: SelectProps): React.ReactElement {
  const [isOpen, setIsOpen] = React.useState(open)

  React.useEffect(() => {
    setIsOpen(open)
    onOpen?.()
  }, [open])

  const onClick = (): void => {
    setIsOpen(!isOpen)
  }
  const onBlur = (e: React.FocusEvent): void => {
    e.preventDefault()
    setIsOpen(false)
  }
  const onSelect = (e: React.MouseEvent, selectedValue: string): void => {
    onChange(selectedValue)
    setIsOpen(false)
  }
  return (
    <div className="relative">
      <div
        role="listbox"
        tabIndex={0}
        onClick={onClick}
        onBlur={onBlur}
        className={clsx(
          'group relative px-2 w-full h-9 bg-gray-50 border hover:border-blue-400 focus:border-blue-400 outline-none cursor-pointer',
          isOpen
            ? 'rounded-tl-md rounded-tr-md border-blue-400'
            : 'shadow-md rounded-md border-blueGray-500'
        )}>
        <div className="flex items-center w-full h-full text-gray-800">
          {value}
        </div>
        <svg
          className={clsx(
            'absolute right-2 top-1/2 w-5 h-5 group-hover:text-blue-400 group-focus:text-blue-400 transform -translate-y-1/2 transition-all',
            isOpen ? 'rotate-180 text-blue-400' : 'rotate-0 text-blueGray-500'
          )}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute bottom-0 left-0 w-full text-gray-800 bg-gray-50 border-b border-l border-r border-blue-400 rounded-bl-md rounded-br-md shadow-md overflow-scroll transform translate-y-full">
          {options.map((option) => {
            return (
              <div
                role="option"
                key={option}
                className={clsx(
                  'flex items-center px-2 w-full h-9 cursor-pointer transition-all',
                  option === value
                    ? 'bg-blue-400 bg-opacity-40 font-semibold'
                    : 'hover:bg-coolGray-300'
                )}
                onMouseDown={(e) => onSelect(e, option)}>
                {option}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
