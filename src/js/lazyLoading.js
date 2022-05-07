export default function lazyLoading() {
  const lazyImages = document.querySelectorAll('img.lazy')

  const setImageSrc = (img) => {
    img.setAttribute('src', img.dataset.src)
    img.removeAttribute('data-src')
    img.classList.remove('lazy')
  }

  const onEnterView = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        setImageSrc(img)
        observer.unobserve(img)
      }
    })
  }

  const options = {
    rootMargin: '1000px',
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(onEnterView, options)
    lazyImages.forEach((img) => {
      observer.observe(img)
    })
  } else {
    // TODO: Fallback for browsers that don't support IntersectionObserver
    // TODO: no js support
    lazyImages.forEach((img) => {
      setImageSrc(img)
    })
  }
}
