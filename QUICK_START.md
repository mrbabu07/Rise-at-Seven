# 🚀 Rise at Seven - Quick Start Guide

## What You Have

A **complete, clean project** with only what's needed to build the Rise at Seven website:

```
rise-at-seven-clone/
├── src/
│   └── resources/          ← ALL RESOURCES HERE
│       ├── data/           (11 JSON files - all website content)
│       ├── assets/         (3 files - image management)
│       ├── constants/      (3 files - colors, animations, routes)
│       ├── hooks/          (3 hooks - useData, useNavigation, useImages)
│       ├── utils/          (1 file - 14 helper functions)
│       ├── index.js        (central exports)
│       └── README.md       (detailed documentation)
├── README.md               (project overview)
└── QUICK_START.md          (this file)
```

## 📊 Resources Summary

| Category | Count | Details |
|----------|-------|---------|
| Data Files | 11 | Services, case studies, clients, blog, team, locations, navigation, footer, content, international, SEO |
| Asset Files | 3 | Images (100+ refs), config, documentation |
| Constants | 3 | Colors, animations, routes |
| Hooks | 3 | useData, useNavigation, useImages |
| Utilities | 1 | 14 helper functions |
| **Total** | **23** | **Everything to build the website** |

## 🎯 How to Use

### 1. Import Resources
```javascript
import {
  // Data
  servicesData, caseStudiesData, clientsData, blogData,
  teamData, locationsData, navigationData, footerData,
  contentData, internationalData, seoData,
  
  // Assets
  imagesData, IMAGE_PATHS, CDN_CONFIG,
  
  // Constants
  COLORS, GRADIENTS, ANIMATION_VARIANTS, ROUTES,
  EXTERNAL_LINKS, LOCATIONS,
  
  // Hooks
  useNavigation, useData, useImages,
  
  // Utilities
  formatDate, truncateText, slugToTitle, isMobileDevice,
} from '@/resources'
```

### 2. Use in Components
```javascript
function MyComponent() {
  const { services } = useData()
  const { goToServices } = useNavigation()
  const { getBrandLogo } = useImages()
  
  return (
    <div>
      <img src={getBrandLogo('main')} alt="Logo" />
      {services.map(s => <div key={s.id}>{s.name}</div>)}
      <button onClick={goToServices}>View Services</button>
    </div>
  )
}
```

## 📚 Documentation

- **README.md** - Project overview
- **src/resources/README.md** - Detailed resource documentation
- **src/resources/assets/ASSETS_GUIDE.md** - Image management guide

## 🎨 What's Inside Resources

### Data (11 JSON files)
- **services.json** - 8 core services
- **caseStudies.json** - 10 featured case studies
- **clients.json** - 8 major clients
- **blog.json** - 3 blog posts
- **team.json** - 3 team members + stats
- **locations.json** - 4 office locations
- **navigation.json** - Complete menu structure
- **footer.json** - Footer links & social media
- **content.json** - All page copy
- **international.json** - 4 international regions
- **seo.json** - SEO metadata

### Assets (3 files)
- **images.json** - 100+ image references
- **config.js** - Asset configuration
- **ASSETS_GUIDE.md** - Image management documentation

### Constants (3 files)
- **colors.js** - 50+ colors & 10 gradients
- **animations.js** - 8 animation variants
- **routes.js** - 30+ routes & external links

### Hooks (3 files)
- **useData.js** - Access all data with helper methods
- **useNavigation.js** - Navigate and access routes
- **useImages.js** - Manage images and assets

### Utilities (1 file)
- **helpers.js** - 14 utility functions

## 🚀 Next Steps

1. **Read Documentation**
   - Check `src/resources/README.md`
   - Check `src/resources/assets/ASSETS_GUIDE.md`

2. **Create Image Folders**
   ```bash
   mkdir -p public/images/{logos/clients,logos/awards,logos/social,case-studies,team,blog,services,pages,icons,seo}
   ```

3. **Add Your Images**
   - Place images in appropriate folders
   - Follow naming conventions in `images.json`

4. **Build Components**
   - Use resources to create components
   - Import from `@/resources`

5. **Build Pages**
   - Create page components
   - Use data from resources

6. **Test & Deploy**
   - Test all functionality
   - Build and deploy

## 💡 Quick Examples

### Get Services
```javascript
const { services } = useData()
services.map(s => <ServiceCard {...s} />)
```

### Get Case Studies
```javascript
const { caseStudies } = useData()
caseStudies.map(c => <CaseStudyCard {...c} />)
```

### Navigate
```javascript
const { goToServices, goToWork } = useNavigation()
<button onClick={goToServices}>Services</button>
```

### Get Images
```javascript
const { getBrandLogo, getCaseStudyImages } = useImages()
<img src={getBrandLogo('main')} alt="Logo" />
```

### Format Data
```javascript
import { formatDate, truncateText } from '@/resources'
const date = formatDate('2025-05-04')
const text = truncateText('Long text...', 50)
```

## 📞 Need Help?

1. Check `src/resources/README.md` - Detailed documentation
2. Check `src/resources/assets/ASSETS_GUIDE.md` - Image guide
3. Review examples above
4. Check data structure in JSON files

## ✨ Key Features

✅ **Centralized Data** - All content in JSON files
✅ **Custom Hooks** - Easy data access
✅ **Reusable Constants** - Consistent styling
✅ **Utility Functions** - Helper functions
✅ **Image Management** - Complete asset system
✅ **SEO Ready** - Metadata included
✅ **Animations** - Pre-configured
✅ **Responsive Design** - Mobile first
✅ **Production Ready** - Optimized

## 🎉 Ready to Build!

Everything is set up and ready. Start building the Rise at Seven website now!

---

**Status**: ✅ Complete & Clean
**Version**: 1.0.0
**Date**: May 4, 2025
