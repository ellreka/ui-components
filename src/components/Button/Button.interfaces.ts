export interface ButtonProps {
  children: string
  /**
   * 色を指定します
   */
  color: 'default' | 'primary' | 'secondary'
  /**
   * ボタンをクリック不可にします
   */
  disabled?: boolean
  /**
   * クリック時の関数
   */
  onClick: (event: React.MouseEvent) => void
}
