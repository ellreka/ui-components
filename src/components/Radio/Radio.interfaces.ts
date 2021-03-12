import React from 'react'

export interface RadioProps {
  id?: string
  name?: string
  value: string
}

export interface RadioGroupProps {
  children: React.ReactElement | React.ReactElement[]
  /**
   * 別の値が選択されたときのコールバック関数
   */
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: string
}
