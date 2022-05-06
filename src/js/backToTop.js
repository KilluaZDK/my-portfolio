export default function backToTop() {
  $('.nav_left img').on('click', function () {
    $('#root').animate(
      {
        scrollTop: 0,
      },
      800,
      function () {
        window.history.replaceState(null, null, `${window.location.origin}${window.location.pathname}`)
      }
    )
  })
}
