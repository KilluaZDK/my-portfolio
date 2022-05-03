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

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(onEnterView)
    lazyImages.forEach((img) => {
      observer.observe(img)
    })
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyImages.forEach((img) => {
      setImageSrc(img)
    })
  }
}
