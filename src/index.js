import { backToTop, clickToAbout, lazyLoading, showMoreWorks, smoothScroll } from './js'
import './styles/main.sass'

import './templates/index.pug' // load resources correctly in HMR

window.addEventListener('DOMContentLoaded', function () {
  lazyLoading()
  smoothScroll()
  clickToAbout()
  backToTop()
  showMoreWorks()
})
