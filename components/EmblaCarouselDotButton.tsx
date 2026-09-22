'use client'

import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('select', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  }
}

type PropType = ComponentPropsWithRef<'button'> & {
  isSelected?: boolean
}

export const DotButton: React.FC<PropType> = ({ isSelected, children, ...restProps }) => {
  return (
    <button
      type="button"
      style={{
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        border: isSelected ? '2px solid #ffffff' : '1px solid #525252',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        outline: 'none',
        padding: 0,
        margin: 0,
        transition: 'all 0.2s ease'
      }}
      {...restProps}
    >
      {children}
    </button>
  )
}