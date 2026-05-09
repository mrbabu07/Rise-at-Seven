// Performance optimization utilities

// Debounce function for scroll and resize events
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function for high-frequency events
export const throttle = (func, limit) => {
  let inThrottle
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Lazy loading for images
export const lazyLoadImage = (img) => {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const image = entry.target
        image.src = image.dataset.src
        image.classList.remove('lazy')
        observer.unobserve(image)
      }
    })
  })
  
  imageObserver.observe(img)
}

// Preload critical images
export const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = resolve
    img.onerror = reject
    img.src = src
  })
}

// Optimize animations for mobile
export const optimizeForMobile = () => {
  const isMobile = window.matchMedia('(max-width: 620px)').matches
  
  if (isMobile) {
    // Reduce animation complexity on mobile
    document.documentElement.style.setProperty('--animation-duration', '0.3s')
    document.documentElement.style.setProperty('--animation-easing', 'ease-out')
  } else {
    document.documentElement.style.setProperty('--animation-duration', '0.6s')
    document.documentElement.style.setProperty('--animation-easing', 'cubic-bezier(0.4, 0, 0.2, 1)')
  }
}

// Memory cleanup for GSAP animations
export const cleanupAnimations = (animations) => {
  animations.forEach(animation => {
    if (animation && animation.kill) {
      animation.kill()
    }
  })
}

// Reduce motion for accessibility
export const respectReducedMotion = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms')
    document.documentElement.classList.add('reduce-motion')
  }
}

// Initialize performance optimizations
export const initPerformance = () => {
  optimizeForMobile()
  respectReducedMotion()
  
  // Add resize listener with debounce
  window.addEventListener('resize', debounce(() => {
    optimizeForMobile()
  }, 250))
}