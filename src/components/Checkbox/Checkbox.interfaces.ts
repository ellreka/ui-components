import React from 'react'

export interface CheckboxProps {
  checked: boolean
  disabled?: boolean
  id?: string
  name?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value?: string
}

// export interface CheckboxGroupProps {
//   children: React.ReactElement | React.ReactElement[]
//   onChange: (list: string[]) => void
//   value: string[]
// }
