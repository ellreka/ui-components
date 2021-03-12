import clsx from 'clsx'
import React from 'react'

import { RadioContext, RadioGroupProps, RadioProps, useRadio } from '.'

export function Radio({ id, name, value }: RadioProps): React.ReactElement {
  const { activeValue, onChange } = useRadio()
  const checked = value === activeValue
  return (
    <label
      className="relative inline-block w-4 h-4 cursor-pointer"
      role="radio">
      <input
        type="radio"
        id={id}
        name={name}
        className="absolute opacity-0 appearance-none"
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <div
        className={clsx(
          'absolute left-0 top-0 w-full h-full border-2 rounded-full',
          checked
            ? 'border-blue-400'
            : 'border-gray-300 hover:border-blue-400 transition-all'
        )}>
        {checked && (
          <div className="absolute left-1/2 top-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        )}
      </div>
    </label>
  )
}

export function RadioGroup({
  children,
  onChange,
  value
}: RadioGroupProps): React.ReactElement {
  const [active, setActive] = React.useState(value)
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setActive(event.target.value)
    onChange(event)
  }

  React.useEffect(() => {
    if (value === undefined) return
    setActive(value)
  }, [value])

  return (
    <RadioContext.Provider
      value={{ activeValue: active, onChange: handleChange }}>
      <fieldset role="radiogroup">{children}</fieldset>
    </RadioContext.Provider>
  )
}
