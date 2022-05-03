export default function showMoreWorks() {
  const handleWorks = ($button) => {
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
          $button.next('.works_cover').addClass('hidden')
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
          $button.next('.works_cover').removeClass('hidden')
        }
      )
      $('html, body').animate(
        {
          scrollTop: $button.prev().prev('.works_block_title_wrapper').offset().top - 80,
        },
        'slow'
      )
    }
  }

  $('.works_more_button').on('click', function () {
    const $button = $(this)
    handleWorks($button)
  })

  $('.works_block .works_cover').on('click', function () {
    const $button = $(this).prev('.works_more_button')
    handleWorks($button)
  })
}
