/**
 * Asset Configuration
 * Centralized asset management for images, logos, and media
 */

// Image paths
export const IMAGE_PATHS = {
  // Base paths
  LOGOS: '/images/logos',
  CLIENTS: '/images/logos/clients',
  AWARDS: '/images/logos/awards',
  SOCIAL: '/images/logos/social',
  CASE_STUDIES: '/images/case-studies',
  TEAM: '/images/team',
  BLOG: '/images/blog',
  SERVICES: '/images/services',
  PAGES: '/images/pages',
  ICONS: '/images/icons',
  SEO: '/images/seo',
}

// Image sizes for responsive images
export const IMAGE_SIZES = {
  thumbnail: {
    width: 200,
    height: 200,
  },
  small: {
    width: 400,
    height: 300,
  },
  medium: {
    width: 600,
    height: 450,
  },
  large: {
    width: 1200,
    height: 800,
  },
  hero: {
    width: 1920,
    height: 1080,
  },
}

// Image formats
export const IMAGE_FORMATS = {
  WEBP: 'webp',
  JPG: 'jpg',
  PNG: 'png',
  SVG: 'svg',
  AVIF: 'avif',
}

// Placeholder images (for development)
export const PLACEHOLDERS = {
  logo: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23f0f0f0" width="200" height="200"/%3E%3Ctext x="50%" y="50%" font-size="14" fill="%23999" text-anchor="middle" dy=".3em"%3ELogo%3C/text%3E%3C/svg%3E',
  image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23f0f0f0" width="600" height="400"/%3E%3Ctext x="50%" y="50%" font-size="18" fill="%23999" text-anchor="middle" dy=".3em"%3EImage%3C/text%3E%3C/svg%3E',
  thumbnail: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23f0f0f0" width="200" height="200"/%3E%3Ctext x="50%" y="50%" font-size="12" fill="%23999" text-anchor="middle" dy=".3em"%3EThumb%3C/text%3E%3C/svg%3E',
}

// CDN configuration
export const CDN_CONFIG = {
  enabled: false, // Set to true when using CDN
  baseUrl: 'https://cdn.riseatseven.com',
  imageOptimization: true,
  webpSupport: true,
  lazyLoading: true,
}

// Image optimization settings
export const IMAGE_OPTIMIZATION = {
  quality: 80,
  format: 'webp',
  responsive: true,
  lazyLoad: true,
  blur: true,
  blurDataUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="10" height="10"%3E%3Crect fill="%23f0f0f0" width="10" height="10"/%3E%3C/svg%3E',
}

// Asset categories
export const ASSET_CATEGORIES = {
  LOGOS: 'logos',
  CLIENTS: 'clients',
  AWARDS: 'awards',
  CASE_STUDIES: 'caseStudies',
  TEAM: 'team',
  BLOG: 'blog',
  SERVICES: 'services',
  PAGES: 'pages',
  ICONS: 'icons',
  SEO: 'seo',
}

// Default fallback images
export const FALLBACK_IMAGES = {
  logo: '/images/logos/rise-at-seven-logo.png',
  caseStudy: '/images/case-studies/default.jpg',
  team: '/images/team/default.jpg',
  blog: '/images/blog/default.jpg',
  service: '/images/services/default.jpg',
}

// Social media image sizes
export const SOCIAL_IMAGE_SIZES = {
  facebook: {
    width: 1200,
    height: 630,
  },
  twitter: {
    width: 1200,
    height: 675,
  },
  linkedin: {
    width: 1200,
    height: 627,
  },
  instagram: {
    width: 1080,
    height: 1080,
  },
}

// Video configuration
export const VIDEO_CONFIG = {
  vimeo: {
    baseUrl: 'https://vimeo.com',
    playerUrl: 'https://player.vimeo.com/video',
  },
  youtube: {
    baseUrl: 'https://youtube.com',
    playerUrl: 'https://www.youtube.com/embed',
  },
}

// Asset loading strategy
export const LOADING_STRATEGY = {
  eager: 'eager',
  lazy: 'lazy',
  auto: 'auto',
}

// Image alt text templates
export const ALT_TEXT_TEMPLATES = {
  logo: (name) => `${name} logo`,
  caseStudy: (title) => `${title} case study`,
  team: (name) => `${name} team member`,
  blog: (title) => `${title} blog post`,
  service: (name) => `${name} service`,
  award: (name) => `${name} award`,
}
