import React from 'react'
import { Story } from '@storybook/react/types-6-0'

import { Radio, RadioGroup } from '.'

export default {
  title: 'Radio'
}

const Template = () => {
  const [active, setActive] = React.useState('B')
  return (
    <div>
      <div>active: {active}</div>
      <RadioGroup value={active} onChange={(e) => setActive(e.target.value)}>
        {['A', 'B', 'C', 'D', 'E'].map((i) => (
          <label key={i} className="flex items-center space-x-4">
            <Radio value={i} />
            <span>{i}</span>
          </label>
        ))}
      </RadioGroup>
      <button className="mt-5" onClick={() => setActive('E')}>
        select E
      </button>
    </div>
  )
}

export const hook = Template.bind({})
