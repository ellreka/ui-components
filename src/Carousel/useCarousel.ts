import React from 'react'

interface Props {}

interface UseCarousel {
  active: number
  onNext: () => void
}

export function useCarousel({}: Props): UseCarousel {
  const [active, setActive] = React.useState(0)

  const onNext = () => {
    setActive((old) => old + 1)
  }

  return {
    active,
    onNext
  }
}
