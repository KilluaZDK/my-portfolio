import html from '../templates/app.pug'
import smoothScroll from './smoothScroll'
import clickToAbout from './headerButton'
import backToTop from './logo'

export function app() {
  const container = document.getElementById('root')
  container.innerHTML = html

  smoothScroll()
  clickToAbout()
  backToTop()
}
