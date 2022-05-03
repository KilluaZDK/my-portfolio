export default function smoothScroll() {
  const scrollHandler = (e) => {
    const hash = e.currentTarget.hash

    if (typeof hash === 'string' && hash.length > 0) {
      e.preventDefault()

      $('input#nav_switch').prop('checked', false)

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 104,
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
