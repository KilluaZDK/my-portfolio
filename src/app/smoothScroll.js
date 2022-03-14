export default function smoothScroll() {
  $('a.nav_text').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault()

      const hash = this.hash

      console.log()
      $('input#nav_switch').prop('checked', false)

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 80,
        },
        800,
        function () {
          window.history.replaceState(null, null, `${window.location.origin}/${hash}`)
        }
      )
    }
  })
}
