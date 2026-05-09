/**
 * Utility helper functions for the application
 */

/**
 * Format date to readable string
 * @param {string|Date} date - Date to format
 * @returns {string} Formatted date
 */
export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en-US', options)
}

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} Truncated text with ellipsis
 */
export const truncateText = (text, length = 100) => {
  if (text.length <= length) return text
  return text.substring(0, length) + '...'
}

/**
 * Convert slug to readable title
 * @param {string} slug - URL slug
 * @returns {string} Readable title
 */
export const slugToTitle = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Convert title to URL slug
 * @param {string} title - Title text
 * @returns {string} URL slug
 */
export const titleToSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - DOM element
 * @returns {boolean} True if element is visible
 */
export const isInViewport = (element) => {
  if (!element) return false
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait = 300) => {
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

/**
 * Throttle function
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit = 300) => {
  let inThrottle
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * Smooth scroll to element
 * @param {string|HTMLElement} target - Element ID or element
 * @param {number} offset - Offset from top
 */
export const smoothScrollTo = (target, offset = 0) => {
  const element = typeof target === 'string' ? document.getElementById(target) : target
  if (!element) return

  const top = element.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({
    top,
    behavior: 'smooth',
  })
}

/**
 * Get random item from array
 * @param {Array} array - Array to pick from
 * @returns {*} Random item
 */
export const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

/**
 * Shuffle array
 * @param {Array} array - Array to shuffle
 * @returns {Array} Shuffled array
 */
export const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

/**
 * Check if device is mobile
 * @returns {boolean} True if mobile device
 */
export const isMobileDevice = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
}

/**
 * Get device type
 * @returns {string} Device type: 'mobile', 'tablet', or 'desktop'
 */
export const getDeviceType = () => {
  const width = window.innerWidth
  if (width < 640) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success status
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy:', err)
    return false
  }
}

/**
 * Format number with commas
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * Calculate reading time
 * @param {string} text - Text content
 * @returns {number} Reading time in minutes
 */
export const calculateReadingTime = (text) => {
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}
