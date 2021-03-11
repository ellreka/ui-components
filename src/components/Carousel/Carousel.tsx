import React from 'react'

import { CarouselItemProps, CarouselProps, useCarouselContext } from '.'

function Item({
  children,
  className = ''
}: CarouselItemProps): React.ReactElement {
  return (
    <div className={className} style={{ flexShrink: 0, width: '100%' }}>
      {children}
    </div>
  )
}

export function Carousel({ children, className }: CarouselProps) {
  const slides = React.Children.toArray(children)
  const length = slides.length
  const { configs, containerProps } = useCarouselContext()
  const beforeSlides = (): React.ReactNode[] => {
    return slides.slice(length - configs.show, length)
  }
  const afterSlides = (): React.ReactNode[] => {
    return slides.slice(0, configs.show + 1)
  }
  const mainSlides = (): React.ReactNode[] => {
    if (configs.loop) {
      return [...slides, ...slides]
    } else {
      return slides
    }
  }
  return (
    <div className={className} {...containerProps}>
      {configs.loop && beforeSlides().map((v, i) => <Item key={i}>{v}</Item>)}
      {mainSlides().map((slide, index) => (
        <Item key={index}>{slide}</Item>
      ))}
      {configs.loop && afterSlides().map((v, i) => <Item key={i}>{v}</Item>)}
    </div>
  )
}
