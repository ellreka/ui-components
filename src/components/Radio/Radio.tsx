import clsx from 'clsx'
import React from 'react'
import { useRadio, RadioProps, RadioGroupProps, RadioContext } from '.'

export function Radio({ value }: RadioProps): React.ReactElement {
  const { activeValue, onChange } = useRadio()
  const checked = value === activeValue
  return (
    <label
      className={clsx('relative w-4 h-4 inline-block cursor-pointer')}
      role="radio">
      <input
        type="radio"
        className="appearance-none opacity-0 absolute"
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <div
        className={clsx(
          'absolute top-0 left-0 w-full h-full rounded-full border-2',
          checked
            ? 'border-blue-400'
            : 'border-gray-300 hover:border-blue-400 focus:border-blue-400 transition-all'
        )}>
        {checked && (
          <div className="bg-blue-400 rounded-full w-2 h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        )}
      </div>
    </label>
  )
}

export function RadioGroup({
  children,
  defaultValue,
  value,
  onChange
}: RadioGroupProps): React.ReactElement {
  const [active, setActive] = React.useState(value ?? defaultValue ?? '')
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setActive(event.target.value)
    onChange(event)
  }

  React.useEffect(() => {
    setActive(value)
  }, [value])

  return (
    <RadioContext.Provider
      value={{ activeValue: active, onChange: handleChange }}>
      <fieldset role="radiogroup">{children}</fieldset>
    </RadioContext.Provider>
  )
}
