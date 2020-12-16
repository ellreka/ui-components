---
to: src/<%= Name %>/<%= Name %>.tsx
---

import React from 'react'
import { <%= Name %>Props } from './<%= Name %>.interfaces'

export function <%= Name %>({}: <%= Name %>Props): React.ReactElement {
  return (
    <div>
      <%= Name %>
    </div>
  )
}
