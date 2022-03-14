export default function backToTop() {
  $('.nav_left img').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      800,
      function () {
        window.history.replaceState(null, null, window.location.origin)
      }
    )
  })
}
