import React from 'react'

export interface InputProps {
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onChange: React.ChangeEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  value: string
}
