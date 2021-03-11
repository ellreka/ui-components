import { Story } from '@storybook/react/types-6-0'
import clsx from 'clsx'
import React from 'react'

import { Carousel, CarouselContext, useCarousel } from '.'

export default {
  title: 'Carousel'
}

const Template: Story<React.ComponentProps<typeof Carousel>> = () => {
  const methods = useCarousel({
    loop: true,
    length: 5,
    show: 1,
    swipe: true
  })
  const itemclass = 'w-full h-48 flex justify-center items-center text-lg'
  return (
    <CarouselContext.Provider value={methods}>
      <Carousel>
        <div className={clsx('bg-blue-500', itemclass)}>A</div>
        <div className={clsx('bg-red-500', itemclass)}>B</div>
        <div className={clsx('bg-green-500', itemclass)}>C</div>
        <div className={clsx('bg-orange-500', itemclass)}>D</div>
        <div className={clsx('bg-teal-500', itemclass)}>E</div>
      </Carousel>
      <div className="flex space-x-5">
        <button onClick={() => methods.onPrev()}>prev</button>
        <button onClick={() => methods.onNext()}>next</button>
      </div>
    </CarouselContext.Provider>
  )
}

export const Default = Template.bind({})
