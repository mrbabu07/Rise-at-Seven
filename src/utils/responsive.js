// Responsive utility functions for mobile-first design

export const breakpoints = {
  mobile: 620,
  tablet: 980,
  desktop: 981
}

export const mediaQueries = {
  mobile: `(max-width: ${breakpoints.mobile}px)`,
  tablet: `(min-width: ${breakpoints.mobile + 1}px) and (max-width: ${breakpoints.tablet}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`
}

export const isMobile = () => window.matchMedia(mediaQueries.mobile).matches
export const isTablet = () => window.matchMedia(mediaQueries.tablet).matches
export const isDesktop = () => window.matchMedia(mediaQueries.desktop).matches

export const getDeviceType = () => {
  if (isMobile()) return 'mobile'
  if (isTablet()) return 'tablet'
  return 'desktop'
}

// Fluid typography helpers
export const fluidSize = (minSize, maxSize, minViewport = 320, maxViewport = 1440) => {
  return `clamp(${minSize}rem, ${minSize}rem + ${maxSize - minSize} * ((100vw - ${minViewport}px) / ${maxViewport - minViewport}), ${maxSize}rem)`
}

// Touch-friendly sizing
export const touchTarget = (size = 44) => ({
  minWidth: `${size}px`,
  minHeight: `${size}px`
})

// Responsive spacing
export const responsiveSpacing = {
  xs: 'clamp(0.25rem, 1vw, 0.5rem)',
  sm: 'clamp(0.5rem, 2vw, 1rem)',
  md: 'clamp(1rem, 3vw, 1.5rem)',
  lg: 'clamp(1.5rem, 4vw, 2.5rem)',
  xl: 'clamp(2rem, 5vw, 4rem)',
  xxl: 'clamp(3rem, 8vw, 6rem)'
}

// Mobile-specific optimizations
export const disableHoverOnTouch = () => {
  if ('ontouchstart' in window) {
    document.body.classList.add('touch-device')
  }
}

export const preventZoom = () => {
  document.addEventListener('gesturestart', (e) => {
    e.preventDefault()
  })
  
  document.addEventListener('gesturechange', (e) => {
    e.preventDefault()
  })
  
  document.addEventListener('gestureend', (e) => {
    e.preventDefault()
  })
}

// Viewport height fix for mobile browsers
export const setVhProperty = () => {
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

// Initialize responsive utilities
export const initResponsive = () => {
  disableHoverOnTouch()
  setVhProperty()
  
  window.addEventListener('resize', setVhProperty)
  window.addEventListener('orientationchange', () => {
    setTimeout(setVhProperty, 100)
  })
}