import React from 'react'
import { CarouselProps } from './Carousel.interfaces'
import { useCarousel } from './useCarousel'

export function Carousel({}: CarouselProps) {
  const loop = true
  const show = 3
  const auto = false
  const { active, containerProps, itemProps, onNext, onPrev } = useCarousel({
    length: 3,
    loop,
    show,
    auto,
    interval: 1000
  })

  return (
    <>
      <div className="" {...containerProps}>
        {loop && (
          <>
            <div {...itemProps} className="bg-blue-500">
              AAAα
            </div>
            <div {...itemProps} className="bg-blue-500">
              BBBα
            </div>
            <div {...itemProps} className="bg-blue-500">
              CCCα
            </div>
          </>
        )}
        {['AAA', 'BBB', 'CCC'].map((v) => (
          <div key={v} {...itemProps} className="bg-red-500">
            {v}
          </div>
        ))}
        {['AAA1', 'BBB2', 'CCC3'].map((v) => (
          <div key={v} {...itemProps} className="bg-red-500">
            {v}
          </div>
        ))}
        {loop && (
          <>
            <div {...itemProps} className="bg-blue-500">
              AAAα
            </div>
            <div {...itemProps} className="bg-blue-500">
              BBBα
            </div>
            <div {...itemProps} className="bg-blue-500">
              CCCα
            </div>
          </>
        )}
      </div>
      <div>
        <button onClick={onPrev}>prev</button>
        <button onClick={onNext}>next</button>
      </div>
    </>
  )
}
