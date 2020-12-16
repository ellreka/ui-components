import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import '../style.css'

import { Tooltip } from './Tooltip'

export default {
  title: 'Tooltip'
}

const Template: Story<React.ComponentProps<typeof Tooltip>> = () => {
  return <Tooltip />
}

export const Default = Template.bind({})
