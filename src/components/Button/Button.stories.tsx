import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'

import { Button } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

const Template: Story<React.ComponentProps<typeof Button>> = (args) => {
  return (
    <>
      <Button {...args} />
      <Button {...args} disabled />
    </>
  )
}

Template.args = {
  disabled: false,
  onClick: () => console.log('onClick')
}

export const Primary = Template.bind({})
Primary.args = {
  ...Template.args,
  color: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Template.args,
  color: 'secondary'
}
