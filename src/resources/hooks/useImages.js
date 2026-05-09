import { useMemo } from 'react'
import imagesData from '../assets/images.json'
import { CDN_CONFIG, FALLBACK_IMAGES, ALT_TEXT_TEMPLATES } from '../assets/config'

/**
 * Custom hook for managing images and assets
 * Provides easy access to all images with optimization
 */
export const useImages = () => {
  const images = useMemo(() => imagesData, [])

  /**
   * Get image URL with optional CDN
   * @param {string} path - Image path
   * @returns {string} Full image URL
   */
  const getImageUrl = (path) => {
    if (!path) return FALLBACK_IMAGES.logo
    if (CDN_CONFIG.enabled) {
      return `${CDN_CONFIG.baseUrl}${path}`
    }
    return path
  }

  /**
   * Get brand logo
   * @param {string} variant - Logo variant (main, icon, dark, light)
   * @returns {string} Logo URL
   */
  const getBrandLogo = (variant = 'main') => {
    const logo = images.logos.brand[variant]
    return getImageUrl(logo || images.logos.brand.main)
  }

  /**
   * Get client logo
   * @param {string} clientKey - Client key
   * @returns {string} Client logo URL
   */
  const getClientLogo = (clientKey) => {
    const logo = images.logos.clients[clientKey]
    return getImageUrl(logo || FALLBACK_IMAGES.logo)
  }

  /**
   * Get award logo
   * @param {string} awardKey - Award key
   * @returns {string} Award logo URL
   */
  const getAwardLogo = (awardKey) => {
    const logo = images.logos.awards[awardKey]
    return getImageUrl(logo || FALLBACK_IMAGES.logo)
  }

  /**
   * Get social media logo
   * @param {string} platform - Social platform (facebook, twitter, etc.)
   * @returns {string} Social logo URL
   */
  const getSocialLogo = (platform) => {
    const logo = images.logos.social[platform]
    return getImageUrl(logo || FALLBACK_IMAGES.logo)
  }

  /**
   * Get case study images
   * @param {string} caseStudyKey - Case study key
   * @returns {object} Case study images
   */
  const getCaseStudyImages = (caseStudyKey) => {
    const caseStudy = images.caseStudies[caseStudyKey]
    if (!caseStudy) return null
    return {
      featured: getImageUrl(caseStudy.featured),
      thumbnail: getImageUrl(caseStudy.thumbnail),
      gallery: caseStudy.gallery.map(img => getImageUrl(img)),
    }
  }

  /**
   * Get team member photo
   * @param {string} memberKey - Team member key
   * @returns {object} Team member images
   */
  const getTeamPhoto = (memberKey) => {
    const member = images.team[memberKey]
    if (!member) return null
    return {
      photo: getImageUrl(member.photo),
      thumbnail: getImageUrl(member.thumbnail),
    }
  }

  /**
   * Get blog post images
   * @param {string} postKey - Blog post key
   * @returns {object} Blog post images
   */
  const getBlogImages = (postKey) => {
    const post = images.blog[postKey]
    if (!post) return null
    return {
      featured: getImageUrl(post.featured),
      thumbnail: getImageUrl(post.thumbnail),
    }
  }

  /**
   * Get service images
   * @param {string} serviceKey - Service key
   * @returns {object} Service images
   */
  const getServiceImages = (serviceKey) => {
    const service = images.services[serviceKey]
    if (!service) return null
    return {
      icon: getImageUrl(service.icon),
      featured: getImageUrl(service.featured),
    }
  }

  /**
   * Get page images
   * @param {string} pageKey - Page key
   * @returns {object} Page images
   */
  const getPageImages = (pageKey) => {
    const page = images.pages[pageKey]
    if (!page) return null
    return Object.entries(page).reduce((acc, [key, value]) => {
      acc[key] = getImageUrl(value)
      return acc
    }, {})
  }

  /**
   * Get icon
   * @param {string} iconKey - Icon key
   * @returns {string} Icon URL
   */
  const getIcon = (iconKey) => {
    const icon = images.icons[iconKey]
    return getImageUrl(icon || FALLBACK_IMAGES.logo)
  }

  /**
   * Get SEO images
   * @returns {object} SEO images
   */
  const getSeoImages = () => {
    return {
      ogImage: getImageUrl(images.seo.ogImage),
      twitterImage: getImageUrl(images.seo.twitterImage),
      favicon: getImageUrl(images.seo.favicon),
      appleTouchIcon: getImageUrl(images.seo.appleTouchIcon),
    }
  }

  /**
   * Generate alt text
   * @param {string} type - Image type
   * @param {string} name - Image name
   * @returns {string} Alt text
   */
  const generateAltText = (type, name) => {
    const template = ALT_TEXT_TEMPLATES[type]
    return template ? template(name) : name
  }

  /**
   * Get image with fallback
   * @param {string} path - Image path
   * @param {string} fallback - Fallback image
   * @returns {string} Image URL
   */
  const getImageWithFallback = (path, fallback = FALLBACK_IMAGES.logo) => {
    return path ? getImageUrl(path) : getImageUrl(fallback)
  }

  return {
    images,
    getImageUrl,
    getBrandLogo,
    getClientLogo,
    getAwardLogo,
    getSocialLogo,
    getCaseStudyImages,
    getTeamPhoto,
    getBlogImages,
    getServiceImages,
    getPageImages,
    getIcon,
    getSeoImages,
    generateAltText,
    getImageWithFallback,
  }
}
