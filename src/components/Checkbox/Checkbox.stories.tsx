import { Story } from '@storybook/react/types-6-0'
import React from 'react'

import { Checkbox } from '.'

export default {
  title: 'Checkbox'
}

const Template: Story<React.ComponentProps<typeof Checkbox>> = (args) => {
  return <Checkbox {...args} />
}

export const Default = Template.bind({})

export const hook: Story<React.ComponentProps<typeof Checkbox>> = (args) => {
  const [checked, setChecked] = React.useState(false)
  return (
    <Checkbox
      value="A"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  )
}

Default.args = {
  checked: true,
  onChange: () => {},
  id: '',
  name: ''
}
