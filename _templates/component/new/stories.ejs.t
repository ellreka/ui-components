---
to: src/components/<%= Name %>/<%= Name %>.stories.tsx
---

import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import { <%= Name %> } from '.'

export default {
  title: '<%= Name %>'
}

export const basic: Story<React.ComponentProps<typeof <%= Name %>>> = (args) => {
  return <<%= Name %> {...args} />
}

basic.args = {

}
