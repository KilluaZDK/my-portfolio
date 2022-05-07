import { navHeight } from './spec'

export default function smoothScroll() {
  const scrollHandler = (e) => {
    const hash = e.currentTarget.hash

    if (typeof hash === 'string' && hash.length > 0) {
      e.preventDefault()

      $('input#nav_switch').prop('checked', false)

      $('#root').animate(
        {
          scrollTop: $('#root').scrollTop() + $(hash).offset().top - navHeight,
        },
        'slow',
        function () {
          window.history.replaceState(null, null, `${window.location.origin}${window.location.pathname}${hash}`)
        }
      )
    }
  }

  $('a.nav_text').on('click', scrollHandler)

  $('a.about_marketing_block').on('click', scrollHandler)
}
