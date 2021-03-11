import clsx from 'clsx'
import React from 'react'

import { useButton } from '.'
import { ButtonProps } from './Button.interfaces'

export function Button({
  children,
  color = 'default',
  disabled = false,
  onClick
}: ButtonProps): React.ReactElement {
  const { onBlur, onFocus } = useButton({
    text: children
  })
  const buttonClassNames = clsx(
    {
      'bg-primary border-primary border border-solid text-white hover:bg-white hover:text-black focus:bg-white focus:text-black disabled:opacity-50':
        color === 'primary'
    },
    {
      'bg-secondary border-secondary text-black hover:bg-pink-300 focus:bg-pink-300 focus:ring-2 focus:ring-green-500 disabled:opacity-50':
        color === 'secondary'
    },
    'px-3 py-1 w-full text-center rounded-2xl shadow-xl',
    'transition duration-300 ease-in-out',
    'focus:outline-none disabled:pointer-events-none'
  )
  return (
    <button
      className={buttonClassNames}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      disabled={disabled}
      aria-label="aaaaa"
      title="bbbbb"
      role="button">
      button
    </button>
  )
}
