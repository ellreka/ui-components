import React from 'react'
import { ButtonProps } from './Button.interfaces'
import { useButton } from '../../hooks/Button'
import clsx from 'clsx'

export function Button({
  color = 'default',
  disabled = false,
  onClick,
  children
}: ButtonProps): React.ReactElement {
  const { onFocus, onBlur } = useButton({
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
    'w-full py-1 px-3 text-center rounded-2xl shadow-xl',
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
