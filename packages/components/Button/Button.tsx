import React from 'react'
import { ButtonProps } from './Button.interfaces'
import { useButton } from '../../hooks/Button'
import clsx from 'clsx'

export function Button({}: ButtonProps): React.ReactElement {
  const { focus, onFocus, onBlur } = useButton({})
  return (
    <button
      className={clsx('bg-pink-100 rounded-lg')}
      onClick={() => console.log('click')}
      onFocus={onFocus}
      onBlur={onBlur}>
      button
    </button>
  )
}
