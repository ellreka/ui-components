import React from 'react'

import { UseCarouselProps, UseCarouselReturn } from '.'

export const CarouselContext = React.createContext<UseCarouselReturn | null>(
  null
)

export function useCarouselContext(): UseCarouselReturn {
  const context = React.useContext(CarouselContext)
  if (context === null) throw new Error()
  return context
}

export function useCarousel({
  auto = false,
  interval = 1000,
  length,
  loop = false,
  show = 0,
  swipe = true
}: UseCarouselProps): UseCarouselReturn {
  const [active, setActive] = React.useState(0)
  const [offset, setOffset] = React.useState(0)
  const [diffX, setDiffX] = React.useState(0)
  const [animating, setAnimating] = React.useState(false)
  const [moving, setMoving] = React.useState(false)

  const containerStyle = (): React.CSSProperties => {
    const translateX = loop ? show + length + offset : show + offset
    return {
      transform: `translateX(calc(-${translateX * 100}% + ${-diffX}px))`,
      transition: `${animating ? '' : 'none'}`,
      transitionDuration: `${animating ? '1s' : ''}`,
      display: 'flex'
    }
  }

  const itemStyle: React.CSSProperties = {
    width: '100%',
    whiteSpace: 'pre-wrap',
    flexShrink: 0
  }

  const onPrev = (): void => {
    if (animating) return
    if (!loop && active === 0) return
    setActive((old) => (old - 1 + length) % length)
    setOffset((old) => old - 1)
    setAnimating(true)
  }

  const onNext = (): void => {
    if (animating) return
    if (!loop && active === length - 1) return
    setActive((old) => (old + 1) % length)
    setOffset((old) => old + 1)
    setAnimating(true)
  }

  const onTransitionEnd = (): void => {
    setAnimating(false)
  }

  const eventOptions = {
    passive: true
  }

  const onMouseDown = (event: React.MouseEvent): void => {
    setMoving(true)
    const startX = event.clientX
    const onMouseMove = (event: MouseEvent): void => {
      const currentX = event.clientX
      setDiffX(startX - currentX)
    }
    const onMouseUp = (): void => {
      setMoving(false)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
    window.addEventListener('mousemove', onMouseMove, eventOptions)
    window.addEventListener('mouseup', onMouseUp, eventOptions)
  }

  const onTouchStart = (event: React.TouchEvent): void => {
    setMoving(true)
    const startX = event.touches[0].clientX
    const onTouchMove = (event: TouchEvent): void => {
      const currentX = event.touches[0].clientX
      setDiffX(startX - currentX)
    }
    const onTouchEnd = (): void => {
      setMoving(false)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
    window.addEventListener('touchmove', onTouchMove, eventOptions)
    window.addEventListener('touchend', onTouchEnd, eventOptions)
  }

  const containerProps = (): UseCarouselReturn['containerProps'] => {
    const defaultProps = {
      style: containerStyle(),
      onTransitionEnd
    }
    return swipe
      ? Object.assign(defaultProps, { onTouchStart, onMouseDown })
      : defaultProps
  }

  React.useEffect(() => {
    if (animating) return
    if (!loop) return
    if (Math.abs(offset) === length) {
      setActive(0)
      setOffset(0)
    }
  }, [animating])

  React.useEffect(() => {
    if (!auto) return
    if (animating) return
    const timer = setTimeout(() => {
      onNext()
    }, interval)
    return () => {
      clearTimeout(timer)
    }
  }, [offset, animating])

  React.useEffect(() => {
    if (diffX > 50) {
      onNext()
    }
    if (diffX < -50) {
      onPrev()
    }
  }, [diffX])

  React.useEffect(() => {
    const body = document.querySelector('body')
    Object.assign(body?.style, { userSelect: moving ? 'none' : 'auto' })
    if (!moving) {
      setDiffX(0)
    }
  }, [moving])

  return {
    active,
    offset,
    containerProps: containerProps(),
    itemProps: {
      style: itemStyle
    },
    onNext,
    onPrev,
    configs: {
      loop,
      interval,
      auto,
      length,
      show,
      swipe
    }
  }
}
