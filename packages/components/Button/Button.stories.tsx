import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import '../style.css'

import { Button } from './Button'

export default {
  title: 'Button'
}

const Template: Story<React.ComponentProps<typeof Button>> = () => {
  return <Button />
}

export const Default = Template.bind({})
