---
to: src/<%= Name %>/<%= Name %>.stories.tsx
---

import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import '../style.css'

import { <%= Name %> } from './<%= Name %>'

export default {
  title: '<%= Name %>'
}

const Template: Story<React.ComponentProps<typeof <%= Name %>>> = () => {
  return <<%= Name %> />
}

export const Default = Template.bind({})
