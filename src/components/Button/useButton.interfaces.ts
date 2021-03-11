export interface useButtonProps {
  text: string
}

export interface useButtonReturn {
  focus: boolean
  onBlur: (event: React.FocusEvent) => void
  onFocus: (event: React.FocusEvent) => void
  // onClick: (event: React.MouseEvent) => void
}
