// Accessibility utility functions

export const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  const handleTabKey = (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
        }
      }
    }
  }

  element.addEventListener('keydown', handleTabKey)
  
  return () => {
    element.removeEventListener('keydown', handleTabKey)
  }
}

export const announceToScreenReader = (message, priority = 'polite') => {
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
  
  document.body.appendChild(announcement)
  
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

export const addSkipLink = () => {
  const skipLink = document.createElement('a')
  skipLink.href = '#main-content'
  skipLink.textContent = 'Skip to main content'
  skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black p-2 rounded z-50'
  
  document.body.insertBefore(skipLink, document.body.firstChild)
}

export const ensureColorContrast = () => {
  // Add high contrast mode detection
  const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches
  
  if (prefersHighContrast) {
    document.documentElement.classList.add('high-contrast')
  }
}

export const respectReducedMotion = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  if (prefersReducedMotion) {
    document.documentElement.classList.add('reduce-motion')
  }
}

export const initAccessibility = () => {
  addSkipLink()
  ensureColorContrast()
  respectReducedMotion()
}