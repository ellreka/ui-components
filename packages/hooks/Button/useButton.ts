import React from 'react'
import { useButtonProps, useButtonReturn } from './useButton.interfaces'

export function useButton({ text }: useButtonProps): useButtonReturn {
  const [focus, setFocus] = React.useState(false)

  const onFocus = () => setFocus(true)

  const onBlur = () => setFocus(false)

  const buttonProps = {
    'aria-label': text,
    title: text
  }

  return {
    focus,
    onFocus,
    onBlur
  }
}
