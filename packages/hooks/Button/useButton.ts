import React from 'react'
import { useButtonProps, useButtonReturn } from './useButton.interfaces'

export function useButton({}: useButtonProps): useButtonReturn {
  const [focus, setFocus] = React.useState(false)

  const onFocus = () => setFocus(true)

  const onBlur = () => setFocus(false)

  return {
    focus,
    onFocus,
    onBlur
  }
}
