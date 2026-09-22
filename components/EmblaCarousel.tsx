'use client'

import React from 'react'
import Image from 'next/image'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons'

export interface SlideItem {
  id: string | number
  title: string
  description: string
  imageSrc: string
  imageAlt: string
}

interface EmblaCarouselProps {
  slides: SlideItem[]
  options?: EmblaOptionsType
}

export default function EmblaCarousel({ slides, options }: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: 'center',
    ...options,
  })

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <div style={{ width: '100%', maxWidth: '960px', margin: '0 auto', padding: '0 16px' }}>
      {/* Viewport do Carrossel */}
      <div 
        style={{ overflow: 'hidden', borderRadius: '16px', width: '100%' }} 
        ref={emblaRef}
      >
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: 'nowrap',
            width: '100%' 
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              style={{ 
                flex: '0 0 100%', 
                minWidth: '100%', 
                maxWidth: '100%' 
              }}
            >
              <div style={{ position: 'relative', width: '100%', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#111111' }}>
                <Image
                  src={slide.imageSrc}
                  alt={slide.imageAlt}
                  width={760}
                  height={360}
                  className="w-full h-auto object-cover object-center"
                  priority={slide.id === 1}
                />

                {/* Informações do projeto abaixo da imagem */}
                <div style={{ padding: '20px 4px 0 4px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#ffffff' }}>{slide.title}</h3>
                  <p style={{ fontSize: '14px', color: '#a3a3a3', marginTop: '4px' }}>
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTROLES: Setas à esquerda e Dots à direita */}
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          marginTop: '24px',
          padding: '0 4px'
        }}
      >
        {/* BOTÕES CIRCULARES BRANCOS */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
            <ChevronLeft size={20} color="#ffffff" strokeWidth={1.5} />
          </PrevButton>

          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}>
            <ChevronRight size={20} color="#ffffff" strokeWidth={1.5} />
          </NextButton>
        </div>

        {/* DOTS EM BOLINHAS BRANCAS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              isSelected={index === selectedIndex}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}