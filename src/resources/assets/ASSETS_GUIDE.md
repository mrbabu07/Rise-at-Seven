# 🖼️ Rise at Seven - Assets & Images Guide

## Overview

This guide explains how to manage all images, logos, and media assets for the Rise at Seven website.

## 📁 Assets Folder Structure

```
src/resources/assets/
├── images.json          # All image paths and references
├── config.js            # Asset configuration
└── ASSETS_GUIDE.md      # This file
```

## 📊 Images Configuration

### images.json Structure

All image paths are centralized in `images.json`:

```json
{
  "logos": {
    "brand": { ... },
    "clients": { ... },
    "awards": { ... },
    "social": { ... }
  },
  "caseStudies": { ... },
  "team": { ... },
  "blog": { ... },
  "services": { ... },
  "pages": { ... },
  "icons": { ... },
  "seo": { ... }
}
```

## 🪝 Using Images with useImages Hook

### Import the Hook
```javascript
import { useImages } from '@/resources/hooks/useImages'
```

### Get Brand Logo
```javascript
const { getBrandLogo } = useImages()

const mainLogo = getBrandLogo('main')
const darkLogo = getBrandLogo('dark')
const lightLogo = getBrandLogo('light')
```

### Get Client Logos
```javascript
const { getClientLogo } = useImages()

const sixtLogo = getClientLogo('sixt')
const dojoLogo = getClientLogo('dojo')
const redBullLogo = getClientLogo('redBull')
```

### Get Case Study Images
```javascript
const { getCaseStudyImages } = useImages()

const sixtImages = getCaseStudyImages('sixt')
// Returns: { featured, thumbnail, gallery: [...] }

<img src={sixtImages.featured} alt="Sixt case study" />
{sixtImages.gallery.map(img => <img key={img} src={img} />)}
```

### Get Team Photos
```javascript
const { getTeamPhoto } = useImages()

const carriePhoto = getTeamPhoto('carrieRose')
// Returns: { photo, thumbnail }

<img src={carriePhoto.photo} alt="Carrie Rose" />
```

### Get Blog Images
```javascript
const { getBlogImages } = useImages()

const post1Images = getBlogImages('post1')
// Returns: { featured, thumbnail }

<img src={post1Images.featured} alt="Blog post" />
```

### Get Service Images
```javascript
const { getServiceImages } = useImages()

const strategyImages = getServiceImages('strategy')
// Returns: { icon, featured }

<img src={strategyImages.icon} alt="Strategy service" />
```

### Get Icons
```javascript
const { getIcon } = useImages()

const arrowIcon = getIcon('arrow')
const checkIcon = getIcon('check')
const menuIcon = getIcon('menu')
```

### Get SEO Images
```javascript
const { getSeoImages } = useImages()

const seoImages = getSeoImages()
// Returns: { ogImage, twitterImage, favicon, appleTouchIcon }
```

## 🎨 Asset Configuration

### config.js Settings

#### Image Paths
```javascript
import { IMAGE_PATHS } from '@/resources/assets/config'

IMAGE_PATHS.LOGOS        // '/images/logos'
IMAGE_PATHS.CLIENTS      // '/images/logos/clients'
IMAGE_PATHS.CASE_STUDIES // '/images/case-studies'
IMAGE_PATHS.TEAM         // '/images/team'
```

#### Image Sizes
```javascript
import { IMAGE_SIZES } from '@/resources/assets/config'

IMAGE_SIZES.thumbnail    // { width: 200, height: 200 }
IMAGE_SIZES.small        // { width: 400, height: 300 }
IMAGE_SIZES.medium       // { width: 600, height: 450 }
IMAGE_SIZES.large        // { width: 1200, height: 800 }
IMAGE_SIZES.hero         // { width: 1920, height: 1080 }
```

#### Image Formats
```javascript
import { IMAGE_FORMATS } from '@/resources/assets/config'

IMAGE_FORMATS.WEBP       // 'webp'
IMAGE_FORMATS.JPG        // 'jpg'
IMAGE_FORMATS.PNG        // 'png'
IMAGE_FORMATS.SVG        // 'svg'
IMAGE_FORMATS.AVIF       // 'avif'
```

#### CDN Configuration
```javascript
import { CDN_CONFIG } from '@/resources/assets/config'

CDN_CONFIG.enabled       // false (set to true when using CDN)
CDN_CONFIG.baseUrl       // 'https://cdn.riseatseven.com'
CDN_CONFIG.imageOptimization  // true
CDN_CONFIG.webpSupport   // true
CDN_CONFIG.lazyLoading   // true
```

#### Image Optimization
```javascript
import { IMAGE_OPTIMIZATION } from '@/resources/assets/config'

IMAGE_OPTIMIZATION.quality      // 80
IMAGE_OPTIMIZATION.format       // 'webp'
IMAGE_OPTIMIZATION.responsive   // true
IMAGE_OPTIMIZATION.lazyLoad     // true
IMAGE_OPTIMIZATION.blur         // true
```

## 📂 Image Directory Structure

Create this folder structure in your `public/` directory:

```
public/
├── images/
│   ├── logos/
│   │   ├── rise-at-seven-logo.png
│   │   ├── rise-at-seven-icon.png
│   │   ├── rise-at-seven-dark.png
│   │   ├── rise-at-seven-light.png
│   │   ├── clients/
│   │   │   ├── sixt-logo.png
│   │   │   ├── dojo-logo.png
│   │   │   ├── red-bull-logo.png
│   │   │   ├── jd-sports-logo.png
│   │   │   ├── parkdean-logo.png
│   │   │   ├── revolution-beauty-logo.png
│   │   │   ├── lloyds-pharmacy-logo.png
│   │   │   └── prettylittlething-logo.png
│   │   ├── awards/
│   │   │   ├── global-search-awards.png
│   │   │   ├── drum-awards.png
│   │   │   ├── uk-social-media-awards.png
│   │   │   └── content-marketing-awards.png
│   │   └── social/
│   │       ├── facebook.svg
│   │       ├── twitter.svg
│   │       ├── linkedin.svg
│   │       ├── youtube.svg
│   │       ├── tiktok.svg
│   │       └── instagram.svg
│   ├── case-studies/
│   │   ├── sixt/
│   │   │   ├── featured.jpg
│   │   │   ├── thumbnail.jpg
│   │   │   ├── gallery-1.jpg
│   │   │   ├── gallery-2.jpg
│   │   │   └── gallery-3.jpg
│   │   ├── dojo/
│   │   ├── magnet-trade/
│   │   ├── esim/
│   │   ├── jd-sports/
│   │   ├── parkdean/
│   │   ├── pooky/
│   │   ├── revolution/
│   │   ├── lloyds/
│   │   └── plt/
│   ├── team/
│   │   ├── carrie-rose.jpg
│   │   ├── carrie-rose-thumb.jpg
│   │   ├── ryan-mcnamara.jpg
│   │   ├── ryan-mcnamara-thumb.jpg
│   │   ├── ray-saddiq.jpg
│   │   └── ray-saddiq-thumb.jpg
│   ├── blog/
│   │   ├── ryan-mcnamara-promotion.jpg
│   │   ├── ryan-mcnamara-promotion-thumb.jpg
│   │   ├── coneys-demand.jpg
│   │   ├── coneys-demand-thumb.jpg
│   │   ├── noomz-demand.jpg
│   │   └── noomz-demand-thumb.jpg
│   ├── services/
│   │   ├── strategy-icon.svg
│   │   ├── strategy-featured.jpg
│   │   ├── seo-icon.svg
│   │   ├── seo-featured.jpg
│   │   ├── content-icon.svg
│   │   ├── content-featured.jpg
│   │   ├── b2b-icon.svg
│   │   ├── b2b-featured.jpg
│   │   ├── pr-icon.svg
│   │   ├── pr-featured.jpg
│   │   ├── social-icon.svg
│   │   ├── social-featured.jpg
│   │   ├── data-icon.svg
│   │   ├── data-featured.jpg
│   │   ├── social-seo-icon.svg
│   │   └── social-seo-featured.jpg
│   ├── pages/
│   │   ├── hero-background.jpg
│   │   ├── hero-banner.jpg
│   │   ├── about-team.jpg
│   │   ├── about-office.jpg
│   │   ├── about-culture.jpg
│   │   ├── contact-map.jpg
│   │   └── contact-office.jpg
│   ├── icons/
│   │   ├── arrow.svg
│   │   ├── chevron.svg
│   │   ├── check.svg
│   │   ├── close.svg
│   │   ├── menu.svg
│   │   ├── search.svg
│   │   ├── phone.svg
│   │   ├── email.svg
│   │   ├── location.svg
│   │   └── calendar.svg
│   └── seo/
│       ├── og-image.jpg
│       ├── twitter-image.jpg
│       ├── favicon.ico
│       └── apple-touch-icon.png
```

## 💡 Usage Examples

### Example 1: Navigation with Logo
```javascript
import { useImages } from '@/resources/hooks/useImages'

function Navigation() {
  const { getBrandLogo } = useImages()
  
  return (
    <nav>
      <img src={getBrandLogo('main')} alt="Rise at Seven" />
    </nav>
  )
}
```

### Example 2: Case Study Card
```javascript
import { useImages } from '@/resources/hooks/useImages'

function CaseStudyCard({ caseStudyKey, title }) {
  const { getCaseStudyImages, generateAltText } = useImages()
  const images = getCaseStudyImages(caseStudyKey)
  
  return (
    <div>
      <img 
        src={images.featured} 
        alt={generateAltText('caseStudy', title)}
      />
      <h3>{title}</h3>
    </div>
  )
}
```

### Example 3: Team Member
```javascript
import { useImages } from '@/resources/hooks/useImages'

function TeamMember({ memberKey, name }) {
  const { getTeamPhoto, generateAltText } = useImages()
  const photo = getTeamPhoto(memberKey)
  
  return (
    <div>
      <img 
        src={photo.photo} 
        alt={generateAltText('team', name)}
      />
      <h3>{name}</h3>
    </div>
  )
}
```

### Example 4: Client Logos Grid
```javascript
import { useImages } from '@/resources/hooks/useImages'
import clientsData from '@/resources/data/clients.json'

function ClientLogos() {
  const { getClientLogo } = useImages()
  
  return (
    <div>
      {clientsData.clients.map(client => (
        <img 
          key={client.id}
          src={getClientLogo(client.name.toLowerCase())}
          alt={client.name}
        />
      ))}
    </div>
  )
}
```

### Example 5: Blog Post with Image
```javascript
import { useImages } from '@/resources/hooks/useImages'

function BlogPost({ postKey, title }) {
  const { getBlogImages, generateAltText } = useImages()
  const images = getBlogImages(postKey)
  
  return (
    <article>
      <img 
        src={images.featured} 
        alt={generateAltText('blog', title)}
      />
      <h1>{title}</h1>
    </article>
  )
}
```

## 🔧 Adding New Images

### Step 1: Add to images.json
```json
{
  "newCategory": {
    "newImage": "/images/new-category/new-image.jpg"
  }
}
```

### Step 2: Create Folder
```bash
mkdir -p public/images/new-category
```

### Step 3: Add Image File
```bash
cp your-image.jpg public/images/new-category/new-image.jpg
```

### Step 4: Use in Component
```javascript
const { images } = useImages()
const imagePath = images.newCategory.newImage
```

## 🖼️ Image Optimization Tips

### 1. Use WebP Format
- Smaller file sizes
- Better compression
- Supported by modern browsers

### 2. Provide Multiple Sizes
- Thumbnail: 200x200
- Small: 400x300
- Medium: 600x450
- Large: 1200x800

### 3. Lazy Load Images
```javascript
<img src={imagePath} loading="lazy" />
```

### 4. Use Responsive Images
```javascript
<img 
  src={imagePath}
  srcSet={`${imagePath}?w=400 400w, ${imagePath}?w=800 800w`}
  sizes="(max-width: 600px) 400px, 800px"
/>
```

### 5. Add Alt Text
```javascript
const altText = generateAltText('caseStudy', 'Sixt')
<img src={imagePath} alt={altText} />
```

## 🌐 CDN Integration

### Enable CDN
```javascript
// In config.js
CDN_CONFIG.enabled = true
CDN_CONFIG.baseUrl = 'https://your-cdn.com'
```

### Images will automatically use CDN
```javascript
const { getImageUrl } = useImages()
const url = getImageUrl('/images/logo.png')
// Returns: https://your-cdn.com/images/logo.png
```

## 📱 Responsive Images

### Mobile First
```javascript
const { IMAGE_SIZES } = useImages()

// Use smaller images on mobile
const mobileImage = IMAGE_SIZES.small
const desktopImage = IMAGE_SIZES.large
```

### Picture Element
```javascript
<picture>
  <source 
    media="(max-width: 600px)" 
    srcSet={smallImage}
  />
  <source 
    media="(min-width: 601px)" 
    srcSet={largeImage}
  />
  <img src={largeImage} alt="Description" />
</picture>
```

## 🎯 Best Practices

1. **Always use useImages hook** - Don't hardcode paths
2. **Provide alt text** - Use generateAltText()
3. **Use appropriate sizes** - Match device capabilities
4. **Optimize images** - Compress before uploading
5. **Use WebP format** - Better compression
6. **Lazy load** - Improve performance
7. **Provide fallbacks** - Handle missing images
8. **Update images.json** - Keep it in sync

## 🚀 Performance Tips

- Use WebP format for better compression
- Provide multiple image sizes
- Lazy load images below the fold
- Use CDN for faster delivery
- Optimize images before uploading
- Use responsive images
- Cache images in browser
- Monitor image performance

## 📊 Image Statistics

- **Brand Logos**: 4
- **Client Logos**: 8
- **Award Logos**: 4
- **Social Logos**: 6
- **Case Study Images**: 30 (10 case studies × 3 images)
- **Team Photos**: 6 (3 members × 2 sizes)
- **Blog Images**: 6 (3 posts × 2 sizes)
- **Service Images**: 16 (8 services × 2 images)
- **Page Images**: 7
- **Icons**: 10
- **SEO Images**: 4

**Total: 100+ image references**

## 🔗 Related Files

- `src/resources/assets/images.json` - Image paths
- `src/resources/assets/config.js` - Asset configuration
- `src/resources/hooks/useImages.js` - Image hook
- `src/resources/index.js` - Central exports

## 📞 Support

For questions about assets:
1. Check this guide
2. Review example usage
3. Check images.json structure
4. Verify image paths exist
5. Check browser console for errors

---

**Last Updated**: May 4, 2025
**Version**: 1.0.0
