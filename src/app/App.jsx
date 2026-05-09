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
  Header,
  Marquee,
  AnnouncementBar,
  SectionTitle,
  ServiceLink,
} from '../components/index.jsx'

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
          start: 'top top',
          end: '+=350%', // Increased scroll distance to make animation play much slower
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
    const handleHeaderScrollState = () => {
      document.body.classList.add('is-mobile-scrolling')
      document.body.classList.toggle('is-past-hero', window.scrollY > 120)
      clearTimeout(scrollClassTimer)
      scrollClassTimer = window.setTimeout(() => {
        document.body.classList.remove('is-mobile-scrolling')
      }, 180)
    }
    handleHeaderScrollState()
    window.addEventListener('scroll', handleHeaderScrollState, { passive: true })

    return () => {
      clearInterval(heroTimer)
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.removeEventListener('wheel', handleWorkWheel)
      window.removeEventListener('touchstart', handleWorkTouchStart)
      window.removeEventListener('touchmove', handleWorkTouchMove)
      window.removeEventListener('scroll', handleHeaderScrollState)
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
        <section className="hero hero--live">
          <Header navigation={navigation} />

          {/* Background image that slowly zooms */}
          <img key={heroIndex} className="hero-live__bg" src={heroImages[heroIndex]} alt="" aria-hidden="true" />

          <div className="hero-live__center">
            {/* "#1" badge row */}
            <div className="award-line" data-reveal>
              <span className="award-line__dash" />
              <strong>#1 Most Recommended Content Marketing Agency</strong>
              <span className="award-line__dash" />
            </div>

            {/* Award logos */}
            <div className="hero-awards" data-reveal>
              {awardBadges.map((badge) => (
                <div key={badge.name} className="hero-award-badge" title={badge.name}>
                  <img
                    src={badge.src}
                    alt={badge.name}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextSibling.style.display = 'inline'
                    }}
                  />
                  <span style={{ display: 'none' }}>{badge.fallback}</span>
                </div>
              ))}
            </div>

            {/* Main headline */}
            <h1 data-reveal>
              We Create
              <br />
              Category{' '}
              <img
                src={heroImages[heroIndex]}
                alt=""
                className="hero-live__inline-img"
              />{' '}
              Leaders
            </h1>
            <p data-reveal>on every searchable platform</p>
          </div>

          {/* Bottom two-col info */}
          <div className="hero-live__bottom" data-reveal>
            <p>
              Organic media planners creating, distributing &amp; optimising
              <br />
              search-first content for SEO, Social, PR, Ai and LLM search
            </p>
            <p>
              4 Global Offices serving
              <br />
              UK, USA (New York) &amp; EU
            </p>
          </div>
        </section>

        {/* ── CLIENT LOGOS — infinite auto-scroll carousel ── */}
        <ClientCarousel logos={clientLogos} />

        {/* ── MANIFESTO ── */}
        <section className="manifesto section-pad">
          <p data-reveal>
            A global team of search-first content marketers engineering semantic relevancy and
            category signals for both the internet and people.
          </p>
          <h2 data-reveal>
            Driving Demand &amp; Discovery
            <img src={heroMedia.floating} alt="" className="manifesto__inline-img" />
          </h2>
          <div className="button-row manifesto__buttons" data-reveal>
            <ArrowButton href="https://riseatseven.com/about/">Our Story</ArrowButton>
            <ArrowButton href="https://riseatseven.com/services/">Our Services</ArrowButton>
          </div>
        </section>

        {/* ── FEATURED WORK ── */}
        <section className="work-live" id="work">
          {/* LEFT: sticky title list */}
          <div className="work-live__list" data-reveal>
            <p>Featured Work</p>
            <div className="work-live__list-mask">
              <div ref={workListRef} className="work-live__list-inner">
                {featuredWork.map((item, index) => (
                  <a
                    key={item.title}
                    className={index === activeWork ? 'is-active' : index < activeWork ? 'is-past' : ''}
                    href={`https://riseatseven.com/work/${item.slug}/`}
                  >
                    {item.title}
                    <span>[{item.years}]</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: stacked cards */}
          <div className="work-live__cards" data-lenis-prevent>
            {featuredWork.map((item, index) => (
              <article
                key={item.title}
                className="work-card"
                data-work-index={index}
                data-reveal
                onPointerMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--x', `${x}px`);
                  e.currentTarget.style.setProperty('--y', `${y}px`);
                }}
              >
                <a href={`https://riseatseven.com/work/${item.slug}/`} className="work-card__link" aria-label={item.title}>
                  <div className={`work-card__hover-circle hover-circle-${index}`}>
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </a>
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="work-card__mobile-title">
                  <span>[{item.years}]</span>
                  <strong>{item.title}</strong>
                </div>

                {/* Colored hover overlay with result text */}
                <div 
                  className="work-card__overlay"
                  style={{ backgroundColor: item.cardBg || '#c37e42' }}
                >
                  <h3>{item.result}</h3>
                </div>

                {/* Bottom-right: category pill */}
                <div className="work-card__pill">
                  <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
                  <span>{item.category}</span>
                  <span className="work-card__pill-sep" aria-hidden="true" />
                  <i className="fa-solid fa-chart-simple" aria-hidden="true" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="work-explore">
          <ArrowButton href="https://riseatseven.com/work/">Explore Our Work</ArrowButton>
        </div>

        {/* ── SERVICES ── */}
        <section className="services-live section-pad" id="services">
          <div className="services-live__head" data-reveal>
            <h2>
              Our
              <img src="https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=aec6b230473b13e5be3032641e65eb8b" alt="" className="services-live__title-img" />
              Services
            </h2>
            <ArrowButton href="https://riseatseven.com/services/">View All Services</ArrowButton>
          </div>
          <div className="services-live__grid" data-reveal>
            {services.map((service, index) => {
              // We'll reuse featuredWork images for the service hover backgrounds
              const bgImg = featuredWork[index]?.image || heroImages[0]
              return <ServiceLink key={service} image={bgImg}>{service}</ServiceLink>
            })}
          </div>
        </section>

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
        <section className="legacy-live section-pad" ref={legacyLiveRef}>
          <p>Legacy In The Making</p>
          <div className="legacy-stack">
            {legacyCards.map((card, i) => {
              // Pre-calculate rotations and styles based on index
              const rotations = [3, -6, -10]
              const zIndexes = [3, 2, 1]
              
              return (
                <article
                  key={card.id}
                  className="legacy-card-item"
                  ref={(el) => (legacyCardsRefs.current[i] = el)}
                  style={{
                    backgroundColor: card.bg,
                    color: card.color,
                    zIndex: zIndexes[i] || 1,
                    transform: `rotate(${rotations[i] || 0}deg)`,
                  }}
                >
                  {/* Provide working fallback images */}
                  {i === 0 && (
                    <img
                      src="https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=c5a1a20dcf5c67ab2aeaf69095353d79"
                      alt="Protest sign"
                    />
                  )}
                  {i === 1 && (
                    <img
                      src={heroImages[2] || "https://rise-atseven.transforms.svdcdn.com/production/images/138128/PR-Week-Awards.jpg"} 
                      alt="Awards"
                    />
                  )}
                  {i === 2 && (
                    <img
                      src={heroImages[3] || "https://rise-atseven.transforms.svdcdn.com/production/images/138128/Speed-Graphic.jpg"} 
                      alt="Speed"
                    />
                  )}
                  <h3>{card.title}</h3>
                  <p style={{ textAlign: 'center' }}>{card.body}</p>
                  {card.sub && (
                    <p style={{ textAlign: 'center', marginTop: '16px' }}>{card.sub}</p>
                  )}
                </article>
              )
            })}
          </div>
        </section>

        {/* ── WHAT'S NEW ── */}
        <section className="news section-pad" id="blog">
          <div className="section-head" data-reveal>
            <SectionTitle kicker="What's">New</SectionTitle>
            <ArrowButton href="https://riseatseven.com/blog/">Explore More Thoughts</ArrowButton>
          </div>
          <div className="news-grid">
            {news.map((post, index) => (
              <a 
                key={post.title} 
                className="news-card" 
                href={post.url} 
                data-reveal
              >
                <div 
                  className="news-card__image-wrap"
                  onPointerMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty('--x', `${x}px`);
                    e.currentTarget.style.setProperty('--y', `${y}px`);
                  }}
                >
                  {post.image && <img src={post.image} alt="" className="news-card__bg" />}
                  
                  <div className="news-card__content">
                    <span className="news-card__tag">{post.tag}</span>
                  </div>

                  {post.hoverText === 'Read Article' ? (
                    <div className="news-card__hover-circle">
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  ) : (
                    <div className="news-card__hover-pill">
                      <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
                      <span>{post.hoverText}</span>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '4px'}}>
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  )}
                </div>

                <div className="news-card__meta">
                  <div className="news-card__bottom">
                    {post.authorImage && <img src={post.authorImage} alt="" className="news-card__author-img" />}
                    <small>{post.author} <i className="fa-regular fa-clock" aria-hidden="true" /> 3 mins</small>
                  </div>
                  <h3>{post.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
