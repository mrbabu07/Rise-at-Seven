// Application configuration constants

export const SITE_CONFIG = {
  name: 'Rise at Seven',
  description: 'Award-winning digital marketing agency specializing in SEO, content marketing, and social media.',
  url: 'https://riseatseven.com',
  author: 'Rise at Seven Team',
  social: {
    twitter: '@riseatseven',
    linkedin: 'rise-at-seven',
    instagram: 'riseatseven',
    youtube: 'riseatseven'
  }
}

export const BREAKPOINTS = {
  mobile: 620,
  tablet: 980,
  desktop: 981
}

export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0
  },
  easing: {
    ease: 'power2.out',
    bounce: 'back.out(1.7)',
    elastic: 'elastic.out(1, 0.3)'
  }
}

export const API_ENDPOINTS = {
  contact: '/api/contact',
  newsletter: '/api/newsletter',
  blog: '/api/blog'
}

export const PERFORMANCE_CONFIG = {
  lazyLoadOffset: '50px',
  debounceDelay: 250,
  throttleLimit: 100
}