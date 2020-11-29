import React from 'react'

interface Props {
  /**
   * ループさせるか
   */
  loop?: boolean
  /**
   * 何秒ごとにスライドさせるか
   */
  interval?: number
  duration?: string
  /**
   * 自動でスライドさせるか
   */
  auto?: boolean
  /**
   * スライドの合計
   */
  length: number
  /**
   * アクティブなスライドの前後に必要なスライドの数
   */
  show?: number
}

interface ContainerProps {
  style: React.CSSProperties
  /**
   * スライドの移動が完了したら実行される関数
   */
  onTransitionEnd: () => void
  onTouchStart: (event: React.TouchEvent) => void
  onMouseDown: (event: React.MouseEvent) => void
}

interface ItemProps {
  style: React.CSSProperties
}

interface UseCarousel {
  /**
   * 表示中のスライド
   */
  active: number
  /**
   * 表示中のスライドの位置
   */
  offset: number
  /**
   * コンテナー要素のprops
   */
  containerProps: ContainerProps
  /**
   * スライドのprops
   */
  itemProps: ItemProps
  /**
   * 次のスライドへ移動する関数
   */
  onNext: () => void
  /**
   * 前のスライドへ移動する関数
   */
  onPrev: () => void
}

export function useCarousel({
  loop = false,
  interval = 1000,
  auto = false,
  length,
  show = 0,
  duration = '1s'
}: Props): UseCarousel {
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
      transitionDuration: `${animating ? duration : '0'}`,
      display: 'flex'
    }
  }

  const itemStyle: React.CSSProperties = {
    width: '100%',
    whiteSpace: 'pre-wrap',
    flexShrink: 0
  }

  const onPrev = () => {
    if (animating) return
    if (!loop && active === 0) return
    setActive((old) => (old - 1 + length) % length)
    setOffset((old) => old - 1)
    setAnimating(true)
  }

  const onNext = () => {
    if (animating) return
    if (!loop && active === length - 1) return
    setActive((old) => (old + 1) % length)
    setOffset((old) => old + 1)
    setAnimating(true)
  }

  const onTransitionEnd = () => {
    setAnimating(false)
  }

  const eventOptions = {
    passive: true
  }

  const onMouseDown = (event: React.MouseEvent) => {
    setMoving(true)
    const startX = event.clientX
    const onMouseMove = (event: MouseEvent) => {
      const currentX = event.clientX
      setDiffX(startX - currentX)
    }
    const onMouseUp = () => {
      setMoving(false)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
    window.addEventListener('mousemove', onMouseMove, eventOptions)
    window.addEventListener('mouseup', onMouseUp, eventOptions)
  }

  const onTouchStart = (event: React.TouchEvent) => {
    setMoving(true)
    const startX = event.touches[0].clientX
    const onTouchMove = (event: TouchEvent) => {
      const currentX = event.touches[0].clientX
      setDiffX(startX - currentX)
    }
    const onTouchEnd = () => {
      setMoving(false)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
    window.addEventListener('touchmove', onTouchMove, eventOptions)
    window.addEventListener('touchend', onTouchEnd, eventOptions)
  }

  React.useEffect(() => {
    console.log({ active, offset })
  }, [active, offset])

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
      console.log('next')
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
    containerProps: {
      style: containerStyle(),
      onTransitionEnd,
      onTouchStart,
      onMouseDown
    },
    itemProps: {
      style: itemStyle
    },
    onNext,
    onPrev
  }
}
