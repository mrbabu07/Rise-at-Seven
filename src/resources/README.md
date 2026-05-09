# 🚀 Rise at Seven - Complete Resources Folder

This folder contains **everything needed to build the Rise at Seven website** - all data, constants, hooks, utilities, and assets organized and ready to use.

## Folder Structure

```
resources/
├── data/                 # JSON data files
│   ├── services.json     # Core services data
│   ├── caseStudies.json  # Featured work/case studies
│   ├── clients.json      # Client logos and info
│   ├── blog.json         # Blog posts
│   ├── team.json         # Team members and stats
│   ├── locations.json    # Office locations
│   ├── navigation.json   # Navigation structure
│   ├── footer.json       # Footer links and info
│   ├── content.json      # Page content and copy
│   ├── international.json # International services
│   └── seo.json          # SEO metadata
├── constants/            # Application constants
│   ├── colors.js         # Brand colors and gradients
│   ├── animations.js     # Animation configurations
│   └── routes.js         # Application routes
├── hooks/                # Custom React hooks
│   ├── useNavigation.js  # Navigation hook
│   └── useData.js        # Data access hook
├── utils/                # Utility functions
│   └── helpers.js        # Helper functions
└── README.md             # This file
```

## Data Files

### services.json
Contains all core services offered by Rise at Seven.
```javascript
import servicesData from '@/resources/data/services.json'
const services = servicesData.coreServices
```

### caseStudies.json
Featured work and case studies with results and metrics.
```javascript
import caseStudies from '@/resources/data/caseStudies.json'
const work = caseStudies.featuredWork
```

### clients.json
Client logos and information.
```javascript
import clients from '@/resources/data/clients.json'
const clientList = clients.clients
```

### blog.json
Blog posts with metadata.
```javascript
import blog from '@/resources/data/blog.json'
const posts = blog.blogPosts
```

### team.json
Team members and company statistics.
```javascript
import team from '@/resources/data/team.json'
const members = team.teamMembers
const stats = team.stats
```

### locations.json
Office locations with maps links.
```javascript
import locations from '@/resources/data/locations.json'
const offices = locations.offices
```

### navigation.json
Navigation menu structure with dropdowns.
```javascript
import nav from '@/resources/data/navigation.json'
const menu = nav.mainNav
```

### footer.json
Footer links, social media, and company info.
```javascript
import footer from '@/resources/data/footer.json'
const footerData = footer
```

### content.json
Page content, headings, and copy.
```javascript
import content from '@/resources/data/content.json'
const heroContent = content.hero
```

### international.json
International service regions.
```javascript
import international from '@/resources/data/international.json'
const regions = international.regions
```

### seo.json
SEO metadata and schema markup.
```javascript
import seo from '@/resources/data/seo.json'
const pageMetadata = seo.pages.home
```

## Constants

### colors.js
Brand colors and gradient combinations.
```javascript
import { COLORS, GRADIENTS } from '@/resources/constants/colors'

// Usage
const primaryColor = COLORS.primary // '#000000'
const blueGradient = GRADIENTS.blue // 'from-blue-400 to-blue-600'
```

### animations.js
Animation variants and GSAP configurations.
```javascript
import { ANIMATION_VARIANTS, GSAP_ANIMATIONS } from '@/resources/constants/animations'

// Usage with Framer Motion
<motion.div variants={ANIMATION_VARIANTS.container}>
  {/* content */}
</motion.div>
```

### routes.js
All application routes and external links.
```javascript
import { ROUTES, EXTERNAL_LINKS, LOCATIONS } from '@/resources/constants/routes'

// Usage
navigate(ROUTES.SERVICES)
window.open(EXTERNAL_LINKS.FACEBOOK)
```

## Custom Hooks

### useNavigation()
Provides navigation functionality and route access.
```javascript
import { useNavigation } from '@/resources/hooks/useNavigation'

const { goToServices, goToWork, ROUTES } = useNavigation()

// Usage
<button onClick={goToServices}>View Services</button>
```

### useData()
Centralized data access with helper methods.
```javascript
import { useData } from '@/resources/hooks/useData'

const { 
  services, 
  caseStudies, 
  getServiceBySlug,
  getCaseStudyBySlug 
} = useData()

// Usage
const service = getServiceBySlug('digital-pr')
const caseStudy = getCaseStudyBySlug('sixt')
```

## Utility Functions

### helpers.js
Common utility functions.
```javascript
import { 
  formatDate, 
  truncateText, 
  slugToTitle,
  isInViewport,
  debounce,
  smoothScrollTo,
  isMobileDevice,
  formatNumber
} from '@/resources/utils/helpers'

// Usage
const formatted = formatDate('2025-05-04') // 'May 4, 2025'
const title = slugToTitle('digital-pr') // 'Digital Pr'
const truncated = truncateText('Long text...', 50)
```

## Usage Examples

### Example 1: Using Services Data
```javascript
import { useData } from '@/resources/hooks/useData'

function ServicesGrid() {
  const { services } = useData()
  
  return (
    <div>
      {services.map(service => (
        <div key={service.id}>{service.name}</div>
      ))}
    </div>
  )
}
```

### Example 2: Using Navigation
```javascript
import { useNavigation } from '@/resources/hooks/useNavigation'

function Header() {
  const { goToServices, ROUTES } = useNavigation()
  
  return (
    <button onClick={goToServices}>
      Services
    </button>
  )
}
```

### Example 3: Using Colors
```javascript
import { COLORS, GRADIENTS } from '@/resources/constants/colors'

function Card() {
  return (
    <div className={`bg-gradient-to-r ${GRADIENTS.blue}`}>
      <h2 style={{ color: COLORS.primary }}>Title</h2>
    </div>
  )
}
```

### Example 4: Using Animations
```javascript
import { motion } from 'framer-motion'
import { ANIMATION_VARIANTS } from '@/resources/constants/animations'

function AnimatedSection() {
  return (
    <motion.div
      variants={ANIMATION_VARIANTS.container}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={ANIMATION_VARIANTS.item}>
        Title
      </motion.h1>
    </motion.div>
  )
}
```

## Adding New Resources

### To add new data:
1. Create a new JSON file in `data/`
2. Import it in `useData.js`
3. Add accessor methods if needed

### To add new constants:
1. Create a new JS file in `constants/`
2. Export constants as named exports
3. Import where needed

### To add new utilities:
1. Add functions to `utils/helpers.js` or create new file
2. Export functions as named exports
3. Import where needed

## Best Practices

1. **Keep data centralized** - All data should be in JSON files
2. **Use hooks for data access** - Don't import JSON directly in components
3. **Use constants** - Avoid hardcoding values
4. **Use utility functions** - Reuse common logic
5. **Type safety** - Consider adding TypeScript definitions
6. **Documentation** - Keep this README updated

## Performance Tips

- Data is loaded once and cached
- Use `useData()` hook to access data efficiently
- Memoize components that use data
- Use `debounce` and `throttle` for event handlers
- Lazy load images and components when possible

## SEO Optimization

All SEO metadata is stored in `seo.json`:
- Page titles
- Meta descriptions
- Keywords
- Open Graph tags
- Schema markup

Use this data in your page components for consistent SEO.

## Maintenance

- Update JSON files when content changes
- Keep constants synchronized across the app
- Review and update routes when adding new pages
- Test all navigation links regularly
- Monitor performance of data-heavy components

## Support

For questions or issues with resources:
1. Check this README
2. Review example usage in components
3. Check the data structure in JSON files
4. Verify imports are correct
