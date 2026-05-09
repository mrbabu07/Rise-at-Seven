// Analytics tracking utilities

export const trackEvent = (eventName, properties = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)
  }
  
  // Also track with other analytics services if needed
  if (typeof window !== 'undefined' && window.analytics) {
    window.analytics.track(eventName, properties)
  }
}

export const trackPageView = (path, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: path,
      page_title: title
    })
  }
}

export const trackFormSubmission = (formName, success = true) => {
  trackEvent('form_submission', {
    form_name: formName,
    success: success
  })
}

export const trackButtonClick = (buttonName, location) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location
  })
}

export const trackScrollDepth = (percentage) => {
  trackEvent('scroll_depth', {
    percentage: percentage
  })
}

export const initAnalytics = () => {
  // Initialize scroll depth tracking
  let maxScroll = 0
  const milestones = [25, 50, 75, 100]
  
  const handleScroll = () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    )
    
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent
      
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && maxScroll < milestone) {
          trackScrollDepth(milestone)
        }
      })
    }
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
}