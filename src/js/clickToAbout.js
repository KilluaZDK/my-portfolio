import { navHeight } from './spec'

export default function clickToAbout() {
  $('.header_bottom_button').on('click', function () {
    $('#root').animate(
      {
        scrollTop: $('#root').scrollTop() + $('#about').offset().top - navHeight,
      },
      500,
      function () {
        window.history.replaceState(null, null, `${window.location.origin}${window.location.pathname}#about`)
      }
    )
  })
}
