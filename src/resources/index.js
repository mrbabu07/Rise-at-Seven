/**
 * Central export file for all resources
 * Import everything you need from this single file
 */

// Data
export { default as servicesData } from './data/services.json'
export { default as caseStudiesData } from './data/caseStudies.json'
export { default as clientsData } from './data/clients.json'
export { default as blogData } from './data/blog.json'
export { default as teamData } from './data/team.json'
export { default as locationsData } from './data/locations.json'
export { default as navigationData } from './data/navigation.json'
export { default as footerData } from './data/footer.json'
export { default as contentData } from './data/content.json'
export { default as internationalData } from './data/international.json'
export { default as seoData } from './data/seo.json'

// Assets
export { default as imagesData } from './assets/images.json'
export {
  IMAGE_PATHS,
  IMAGE_SIZES,
  IMAGE_FORMATS,
  PLACEHOLDERS,
  CDN_CONFIG,
  IMAGE_OPTIMIZATION,
  ASSET_CATEGORIES,
  FALLBACK_IMAGES,
  SOCIAL_IMAGE_SIZES,
  VIDEO_CONFIG,
  LOADING_STRATEGY,
  ALT_TEXT_TEMPLATES,
} from './assets/config'

// Constants
export { COLORS, GRADIENTS } from './constants/colors'
export { ANIMATION_VARIANTS, GSAP_ANIMATIONS, TRANSITIONS, EASING } from './constants/animations'
export { ROUTES, EXTERNAL_LINKS, LOCATIONS } from './constants/routes'

// Hooks
export { useNavigation } from './hooks/useNavigation'
export { useData } from './hooks/useData'
export { useImages } from './hooks/useImages'

// Utilities
export {
  formatDate,
  truncateText,
  slugToTitle,
  titleToSlug,
  isInViewport,
  debounce,
  throttle,
  smoothScrollTo,
  getRandomItem,
  shuffleArray,
  isMobileDevice,
  getDeviceType,
  copyToClipboard,
  formatNumber,
  calculateReadingTime,
} from './utils/helpers'
