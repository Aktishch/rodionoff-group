import Swiper from 'swiper'
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Grid,
  Thumbs,
  EffectCards,
} from 'swiper/modules'
import { media } from './utils'

declare global {
  interface Window {
    Swiper: typeof Swiper
  }
}

Swiper.use([
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Grid,
  Thumbs,
  EffectCards,
])
Swiper.defaults.touchStartPreventDefault = false
window.Swiper = Swiper

export const createСasesSlider = (): void => {
  const slider = document.querySelector(
    '*[data-slider="cases"]'
  ) as HTMLDivElement

  if (!slider) return

  const value: string = slider.dataset.slider
  const swiper = slider.querySelector(
    `*[data-slider-swiper="${value}"]`
  ) as HTMLDivElement
  const prev = slider.querySelector(
    `*[data-slider-prev="${value}"]`
  ) as HTMLButtonElement
  const next = slider.querySelector(
    `*[data-slider-next="${value}"]`
  ) as HTMLButtonElement

  new window.Swiper(swiper, {
    navigation: {
      prevEl: prev,
      nextEl: next,
    },
    effect: 'cards',
    slidesPerView: 1,
    slidesPerGroup: 1,
    grabCursor: true,
    watchSlidesProgress: true,
    cardsEffect: {
      perSlideOffset: 8,
      rotate: false,
    },
    breakpoints: {
      [media.lg]: {
        grabCursor: false,
        allowTouchMove: false,
      },
    },
  }) as Swiper
}

export default (): void => {
  createСasesSlider()
}
