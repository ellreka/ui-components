---
to: src/<%= Name %>/<%= Name %>.tsx
---

import React from 'react'
import { <%= Name %>Props } from './<%= Name %>.interfaces'
import { use<%= Name %> } from './use<%= Name %>'

export function <%= Name %>({}: <%= Name %>Props): React.ReactElement {
  return (
    <div>
      <%= Name %>
    </div>
  )
}
