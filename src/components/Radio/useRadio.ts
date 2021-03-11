import React from 'react'

import { UseRadioReturn } from '.'

export const RadioContext = React.createContext<UseRadioReturn | null>(null)

export function useRadio(): UseRadioReturn {
  const context = React.useContext(RadioContext)
  if (context === null) {
    throw new Error('context is null.')
  }
  return context
}
