export default function clickToAbout() {
  $('.header_bottom_button').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: $('#about').offset().top - 104,
      },
      500,
      function () {
        window.history.replaceState(null, null, `${window.location.origin}/#about`)
      }
    )
  })
}
