export interface useButtonProps {
  text: string
}

export interface useButtonReturn {
  focus: boolean
  onFocus: (event: React.FocusEvent) => void
  onBlur: (event: React.FocusEvent) => void
  // onClick: (event: React.MouseEvent) => void
}
