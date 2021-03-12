import React from 'react'

import { CheckboxProps } from '.'

export function Checkbox({
  checked,
  id,
  name,
  onChange,
  value
}: CheckboxProps): React.ReactElement {
  return (
    <label className="relative inline-block w-5 h-5 border focus-within:border-blue-400 hover:border-blue-400 border-gray-300 rounded-sm outline-none cursor-pointer transition-all focus-within:ring-2">
      <input
        type="checkbox"
        className="absolute opacity-0 appearance-none"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      {checked && (
        <svg
          className="absolute left-1/2 top-1/2 w-5 h-5 text-blue-400 transform -translate-x-1/2 -translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </label>
  )
}
