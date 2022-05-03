import { backToTop, clickToAbout, lazyLoading, showMoreWorks, smoothScroll } from './js'
import { hmr } from './utils/hmr'
import './styles/main.sass'

// Hot Module Replacement
hmr()

window.addEventListener('DOMContentLoaded', function () {
  lazyLoading()
  smoothScroll()
  clickToAbout()
  backToTop()
  showMoreWorks()
})
