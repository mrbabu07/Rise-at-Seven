// SEO utility functions

export const updateMetaTag = (name, content) => {
  let meta = document.querySelector(`meta[name="${name}"]`)
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = name
    document.head.appendChild(meta)
  }
  meta.content = content
}

export const updateTitle = (title) => {
  document.title = title
}

export const updateDescription = (description) => {
  updateMetaTag('description', description)
}

export const updateOgTags = ({ title, description, image, url }) => {
  if (title) updateMetaTag('og:title', title)
  if (description) updateMetaTag('og:description', description)
  if (image) updateMetaTag('og:image', image)
  if (url) updateMetaTag('og:url', url)
}

export const updateTwitterTags = ({ title, description, image }) => {
  updateMetaTag('twitter:card', 'summary_large_image')
  if (title) updateMetaTag('twitter:title', title)
  if (description) updateMetaTag('twitter:description', description)
  if (image) updateMetaTag('twitter:image', image)
}

export const addStructuredData = (data) => {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  }
}

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rise at Seven",
    "url": "https://riseatseven.com",
    "logo": "https://riseatseven.com/images/logos/rise-at-seven-logo.svg",
    "sameAs": [
      "https://twitter.com/riseatseven",
      "https://www.linkedin.com/company/rise-at-seven",
      "https://www.instagram.com/riseatseven"
    ]
  }
}