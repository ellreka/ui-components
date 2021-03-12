import React from 'react'

import { InputProps } from '.'

export function Input({
  onBlur,
  onChange,
  onFocus,
  value
}: InputProps): React.ReactElement {
  return (
    <input
      type="text"
      className="px-2 w-full h-9 bg-gray-50 border hover:border-blue-400 focus:border-blue-400 border-blueGray-500 rounded-md outline-none shadow-md transition-all focus:ring-2"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}
