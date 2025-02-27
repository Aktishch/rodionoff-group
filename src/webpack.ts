import fancybox from './ts/fancybox'
import sliderSwiper from './ts/slider-swiper'
import scrollHeader from './ts/scroll-header'
import currentTab from './ts/current-tab'
import sidebar from './ts/sidebar'
import menu from './ts/menu'
import scrollTo from './ts/scroll-to'
import animation from './ts/animation'
import waved from './ts/waved'
import accordion from './ts/accordion'
import submitHandler from './ts/submit-handler'
import inputs from './ts/inputs'
import phoneMask from './ts/phone-mask'
import preloader from './ts/preloader'

import '@fancyapps/ui/dist/fancybox/fancybox.css'
import 'swiper/css/bundle'
import './scss/main.scss'

window.addEventListener('DOMContentLoaded', ((): void => {
  fancybox()
  sliderSwiper()
  currentTab()
  scrollHeader()
  sidebar()
  menu()
  scrollTo()
  animation()
  waved()
  accordion()
  submitHandler()
  inputs()
  phoneMask()
  preloader()
}) as EventListener)
