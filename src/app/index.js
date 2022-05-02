import html from '../templates/app.pug'
import smoothScroll from './smoothScroll'
import clickToAbout from './headerButton'
import backToTop from './logo'
import showMoreWorks from './moreButton'
import lazyLoading from './lazyLoading'

export function app() {
  const container = document.getElementById('root')
  container.innerHTML = html

  lazyLoading()
  smoothScroll()
  clickToAbout()
  backToTop()
  showMoreWorks()
}
