import React from 'react'

export interface RadioProps {
  value: string
}

export interface RadioGroupProps {
  children: React.ReactElement | React.ReactElement[]
  /**
   * デフォルトで選択された状態にするvalue
   */
  defaultValue?: string
  /**
   * 別の値が選択されたときのコールバック関数
   */
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value?: string
}
