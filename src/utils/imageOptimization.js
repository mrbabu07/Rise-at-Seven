// Image optimization utilities

export const generateSrcSet = (basePath, sizes = [400, 800, 1200, 1600]) => {
  return sizes.map(size => `${basePath}?w=${size} ${size}w`).join(', ')
}

export const generateSizes = (breakpoints = { mobile: 620, tablet: 980 }) => {
  return `(max-width: ${breakpoints.mobile}px) 100vw, (max-width: ${breakpoints.tablet}px) 50vw, 33vw`
}

export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]')
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove('lazy')
        observer.unobserve(img)
      }
    })
  }, {
    rootMargin: '50px'
  })
  
  images.forEach(img => imageObserver.observe(img))
}

export const preloadCriticalImages = (imagePaths) => {
  imagePaths.forEach(path => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = path
    document.head.appendChild(link)
  })
}

export const optimizeImageFormat = (src, format = 'webp') => {
  // Check if browser supports WebP
  const supportsWebP = () => {
    const canvas = document.createElement('canvas')
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
  }
  
  if (format === 'webp' && supportsWebP()) {
    return src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
  }
  
  return src
}