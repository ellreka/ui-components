import React from 'react'

export interface RadioProps {
  value: string
}

export interface RadioGroupProps {
  /**
   * デフォルトで選択された状態にするvalue
   */
  defaultValue?: string
  value?: string
  /**
   * 別の値が選択されたときのコールバック関数
   */
  onChange: React.ChangeEventHandler<HTMLInputElement>
  children: React.ReactElement | React.ReactElement[]
}

