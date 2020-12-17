import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button } from './Button'

export default {
  title: 'components/Button',
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