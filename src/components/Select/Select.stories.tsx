import { Story } from '@storybook/react/types-6-0'
import React from 'react'

import { Select } from '.'

export default {
  title: 'Select'
}

export const basic: Story<React.ComponentProps<typeof Select>> = (args) => {
  return <Select {...args} />
}

basic.args = {
  options: ['Youtube', 'niconico', 'Twitch', 'Twicas', 'その他'],
  value: null,
  open: true,
  onChange: () => {}
}

export const hook: Story<React.ComponentProps<typeof Select>> = (args) => {
  const [value, setValue] = React.useState<string | null>(null)
  return (
    <Select
      value={value}
      onChange={(v) => setValue(v)}
      options={['Youtube', 'niconico', 'Twitch', 'Twicas', 'その他']}
    />
  )
}
