import { Story } from '@storybook/react/types-6-0'
import React from 'react'

import { Input } from '.'

export default {
  title: 'Input'
}

const Template: Story<React.ComponentProps<typeof Input>> = (args) => {
  return <Input {...args} />
}

export const Default = Template.bind({})
export const hook: Story<React.ComponentProps<typeof Input>> = (args) => {
  const [value, setValue] = React.useState('')
  return <Input value={value} onChange={(e) => setValue(e.target.value)} />
}

Default.args = {
  value: '',
  onChange: () => {}
}
