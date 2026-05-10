import { useEffect, useState, useRef, useLayoutEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  clientLogos,
  featuredWork,
  heroImages,
  heroMedia,
  legacyCards,
  navigation,
  news,
  services,
} from '../data/site.js'
import {
  ArrowButton,
  ClientCarousel,
  Footer,
  AnnouncementBar,
} from '../components/index.jsx'
import { Hero } from '../components/Hero.jsx'
import { FeaturedWork } from '../components/FeaturedWork.jsx'
import { Services } from '../components/Services.jsx'
import { Legacy } from '../components/Legacy.jsx'
import { News } from '../components/News.jsx'

gsap.registerPlugin(ScrollTrigger)

/* Award logos shown below the "#1 Most Recommended" line in the hero */
const awardBadges = [
  {
    name: 'Global Search Awards',
    src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/global-search-awards.png?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847622&s=23bf2a7e2f39955d0abe46caa32425b0',
    fallback: 'Global Search Awards',
  },
  {
    name: 'The Drum',
    src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Placeholder-logos/Mask-group.png?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847620&s=7c2987086a33a0130ee0c44db031696f',
    fallback: 'The Drum',
  },
  {
    name: 'UK Social Media Awards',
    src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UKSocial-Media-Awards-White.png?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=a174fe7fc463eae678282dcc34e71cbf',
    fallback: 'UK Social Media Awards',
  },
  {
    name: 'UK Content Awards',
    src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Awards/White/UK-Content-Awards-White.png?w=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847605&s=1eb3d80746ace5c014434b6f0284de6f',
    fallback: 'UK Content Awards',
  },
]

export function App() {
  const [heroIndex, setHeroIndex] = useState(0)
  const [activeWork, setActiveWork] = useState(0)
  const legacyLiveRef = useRef(null)
  const legacyCardsRefs = useRef([])
  const workListRef = useRef(null)

  // Animate the work list to keep the active item visible
  useEffect(() => {
    if (workListRef.current) {
      const activeEl = workListRef.current.children[activeWork]
      if (activeEl) {
        gsap.to(workListRef.current, {
          y: -activeEl.offsetTop,
          duration: 0.5,
          ease: 'power2.out',
        })
      }
    }
  }, [activeWork])

  useLayoutEffect(() => {
    const lenis = new Lenis({ duration: 1.25, smoothWheel: true, wheelMultiplier: 0.82, touchMultiplier: 1.2 })

    let rafId
    function raf(time) { lenis.raf(time); rafId = requestAnimationFrame(raf) }
    rafId = requestAnimationFrame(raf)

    const heroTimer = window.setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length)
    }, 3200)

    // Scroll reveal
    gsap.utils.toArray('[data-reveal]').forEach((el) => {
      gsap.fromTo(el, { autoAlpha: 0, y: 40 }, {
        autoAlpha: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      })
    })

    // Hero BG slow zoom, matching the live site's soft full-bleed motion.
    gsap.to('.hero-live__bg', { scale: 1.12, duration: 8, repeat: -1, yoyo: true, ease: 'sine.inOut' })

    // Sticky work list highlight — fires as each card enters center
    gsap.utils.toArray('.work-card').forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 55%',
        end: 'bottom 55%',
        onEnter: () => setActiveWork(i),
        onEnterBack: () => setActiveWork(i),
      })
      
      // Image scroll parallax inside the card
      const img = card.querySelector('img')
      if (img) {
        gsap.fromTo(img, 
          { y: '-10%', scale: 1.15 }, 
          { y: '10%', scale: 1, ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true } }
        )
      }
    })

    // Chasing Consumers parallax
    if (document.querySelector('.chasing')) {
      const opts = { trigger: '.chasing', start: 'top bottom', end: 'bottom top', scrub: 1.2 }
      gsap.to('.chasing__word--consumers', { x: '-6vw', ease: 'none', scrollTrigger: opts })
      gsap.to('.chasing__word--algorithms', { x: '6vw', ease: 'none', scrollTrigger: opts })
    }

    // Legacy Stack Peeling Animation
    if (legacyLiveRef.current && legacyCardsRefs.current.length > 0 && window.matchMedia('(min-width: 701px)').matches) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: legacyLiveRef.current,
          start: 'center center', // Animation starts when the section center reaches viewport center
          end: '+=1',
          pin: true,
          scrub: 1,
        }
      })
      
      // Card 1 (Pioneers) flies up and rotates left slowly
      tl.to(legacyCardsRefs.current[0], {
        yPercent: -150,
        opacity: 0,
        rotation: -15, // Soft left rotation
        duration: 1
      })
      
      // Card 2 (Award Winning) flies up and rotates left slowly
      tl.to(legacyCardsRefs.current[1], {
        yPercent: -150,
        opacity: 0,
        rotation: -25, // Soft left rotation
        duration: 1
      }, "<0.8") // "<0.8" means start 0.8 seconds after the start of the previous animation (which is 1 second long)
      // Card 3 stays
    }

    // Ready to Rise Wave Marquee — scrolling down moves text LEFT, up moves it RIGHT
    if (document.querySelector('.ready-to-rise')) {
      gsap.fromTo(
        '.ready-to-rise__text-path',
        { attr: { startOffset: '38%' } },   // text starts pushed right (scroll-top state)
        {
          attr: { startOffset: '8%' },       // text ends pushed left (scroll-bottom state)
          ease: 'none',
          scrollTrigger: {
            trigger: '.ready-to-rise',
            start: 'top bottom',   // animation starts when section enters viewport bottom
            end: 'bottom top',     // ends when section exits viewport top
            scrub: 1.5,            // smooth lag following scroll
          },
        }
      );
    }

    // Hover lift on interactive elements
    gsap.utils.toArray('.arrow-button, .fw-card, .service-link').forEach((el) => {
      el.addEventListener('pointerenter', () => gsap.to(el, { y: -3, duration: 0.22, ease: 'power2.out' }))
      el.addEventListener('pointerleave', () => gsap.to(el, { y: 0, duration: 0.22, ease: 'power2.out' }))
    })

    const mobileWorkSection = document.querySelector('.work-live')
    const mobileWorkScroller = document.querySelector('.work-live__cards')
    let touchStartY = 0

    const isInsideMobileWork = (x, y) => {
      if (!mobileWorkSection || !mobileWorkScroller || !window.matchMedia('(max-width: 700px)').matches) return false
      const rect = mobileWorkSection.getBoundingClientRect()
      return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
    }

    const scrollMobileWork = (deltaY, x, y) => {
      if (!mobileWorkScroller || !isInsideMobileWork(x, y)) return false
      const maxScroll = mobileWorkScroller.scrollHeight - mobileWorkScroller.clientHeight
      if (maxScroll <= 0) return false

      const canScrollDown = deltaY > 0 && mobileWorkScroller.scrollTop < maxScroll - 1
      const canScrollUp = deltaY < 0 && mobileWorkScroller.scrollTop > 1

      if (canScrollDown || canScrollUp) {
        mobileWorkScroller.scrollTop = Math.max(0, Math.min(maxScroll, mobileWorkScroller.scrollTop + deltaY))
        return true
      }

      return false
    }

    const handleWorkWheel = (event) => {
      if (scrollMobileWork(event.deltaY, event.clientX, event.clientY)) {
        event.preventDefault()
        event.stopPropagation()
      }
    }

    const handleWorkTouchStart = (event) => {
      touchStartY = event.touches[0]?.clientY || 0
    }

    const handleWorkTouchMove = (event) => {
      const touch = event.touches[0]
      const currentY = touch?.clientY || 0
      const deltaY = touchStartY - currentY
      if (Math.abs(deltaY) < 2) return

      if (scrollMobileWork(deltaY, touch?.clientX || 0, currentY)) {
        event.preventDefault()
        event.stopPropagation()
        touchStartY = currentY
      }
    }

    window.addEventListener('wheel', handleWorkWheel, { passive: false })
    window.addEventListener('touchstart', handleWorkTouchStart, { passive: true })
    window.addEventListener('touchmove', handleWorkTouchMove, { passive: false })

    let scrollClassTimer
    const syncHeaderPosition = () => {
      clearTimeout(scrollClassTimer)
      document.body.classList.add('is-mobile-scrolling')
      document.body.classList.toggle('is-past-hero', window.scrollY > 120)
      scrollClassTimer = window.setTimeout(() => {
        document.body.classList.remove('is-mobile-scrolling')
      }, 180)
    }
    document.body.classList.toggle('is-past-hero', window.scrollY > 120)
    window.addEventListener('scroll', syncHeaderPosition, { passive: true })

    return () => {
      clearInterval(heroTimer)
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.removeEventListener('wheel', handleWorkWheel)
      window.removeEventListener('touchstart', handleWorkTouchStart)
      window.removeEventListener('touchmove', handleWorkTouchMove)
      window.removeEventListener('scroll', syncHeaderPosition)
      clearTimeout(scrollClassTimer)
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div data-barba="wrapper">
      <main data-barba="container" data-barba-namespace="home" className="site-shell">

        {/* ── ANNOUNCEMENT BAR (Now fixed) ── */}
        <div className="announcement-wrapper">
          <AnnouncementBar text="The Category Leaderboard - Live Now" />
        </div>

        {/* ── HERO ── */}
        <Hero navigation={navigation} heroImages={heroImages} awardBadges={awardBadges} />

        {/* ── CLIENT LOGOS — infinite auto-scroll carousel ── */}
        <ClientCarousel logos={clientLogos} />

        {/* ── MANIFESTO ── */}
        <section className="manifesto section-pad">
          <p data-reveal>
            A global team of search-first content marketers engineering semantic relevancy and
            category signals for both the internet and people
          </p>
          <h2 data-reveal>
            Driving Demand &amp;
            <br />
            Discovery
            <img src={heroMedia.floating} alt="" className="manifesto__inline-img" />
          </h2>
          <div className="button-row manifesto__buttons" data-reveal>
            <ArrowButton href="https://riseatseven.com/about/">Our Story</ArrowButton>
            <ArrowButton href="https://riseatseven.com/services/">Our Services</ArrowButton>
          </div>
        </section>

        {/* ── FEATURED WORK ── */}
        <FeaturedWork featuredWork={featuredWork} />

        {/* ── SERVICES ── */}
        <Services services={services} featuredWork={featuredWork} heroImages={heroImages} />

        {/* ── CHASING CONSUMERS NOT ALGORITHMS ── */}
        <section className="chasing" aria-label="Chasing Consumers Not Algorithms">
          <a className="chasing__inner" href="https://riseatseven.com/contact/">
            <div className="chasing-marquee">
              <div className="chasing-marquee__track">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="chasing__line">
                    <span className="chasing__word">Chasing</span>
                    <span className="chasing__word">Consumers</span>
                    <span className="chasing__word">Not</span>
                    <span className="chasing__word">Algorithms</span>
                    <img className="chasing__img" src={heroMedia.floating} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </a>
        </section>

        {/* ── LEGACY IN THE MAKING ── */}
        <Legacy legacyCards={legacyCards} heroImages={heroImages} legacyLiveRef={legacyLiveRef} legacyCardsRefs={legacyCardsRefs} />

        {/* ── WHAT'S NEW ── */}
        <News news={news} />

        <Footer />
      </main>
    </div>
  )
}
