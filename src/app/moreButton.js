export default function moreButton() {
  $('.works_more_button').on('click', function () {
    const $button = $(this)
    const $wrapper = $button.prev('.label_wrapper')
    const originalHeight = $wrapper.data('originalHeight') || $wrapper.data('originalHeight', $wrapper.height())
    const autoHeight = $wrapper.prop('scrollHeight')

    if ($button.text() === 'More') {
      $wrapper.animate(
        {
          height: autoHeight,
        },
        'slow',
        () => {
          $button.text('Collapse').addClass('is_open')
          $button.next('.fadeout').hide()
        }
      )
    } else {
      $wrapper.animate(
        {
          height: originalHeight,
        },
        'slow',
        () => {
          $button.text('More').removeClass('is_open')
          $button.next('.fadeout').show()
        }
      )
      $('html, body').animate(
        {
          scrollTop: $button.prev().prev('.works_block_title_wrapper').offset().top - 80,
        },
        'slow'
      )
    }
  })
}
