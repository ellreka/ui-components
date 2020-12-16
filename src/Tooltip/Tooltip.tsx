import React from 'react'
import { TooltipProps } from './Tooltip.interfaces'

export function Tooltip({
  arrow,
  position,
  children
}: TooltipProps): React.ReactElement {
  return (
    <div className="relative">
      <div>
      {children}
      </div>
      <span className="absolute" />
    </div>
  )
}
