export interface SelectProps {
  onChange: (selectedValue: string) => void
  /**
   * セレクトボックスの開閉状態が変更されたときのコールバック関数
   */
  onOpen?: () => void
  /**
   * セレクトボックスの開閉状態
   */
  open?: boolean
  options: string[]
  value: string | null
}
