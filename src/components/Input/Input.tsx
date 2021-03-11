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
      className="p-2 w-full h-full bg-white border hover:border-blue-400 focus:border-blue-400 border-blueGray-500 rounded-md outline-none transition-all focus:ring-2"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
}
