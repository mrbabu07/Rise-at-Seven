import { useEffect, useState } from 'react'
import './Hero.css'
import './HomepageMatch.css'

const toHref = (item) => {
  if (item.href) return item.href
  if (item.label === 'Blog & Resources') return 'https://riseatseven.com/blog/'
  if (item.label === 'Webinar') return 'https://riseatseven.com/webinars/'
  const slug = item.label.toLowerCase().replaceAll('&', '').replaceAll(' ', '-')
  return `https://riseatseven.com/${slug}/`
}

const toChildHref = (child) => {
  const slug = child.toLowerCase().replaceAll('&', '').replaceAll('/', '').replaceAll(' ', '-')
  return `https://riseatseven.com/${slug}/`
}

const mobileOnlyChildren = {
  'Blog & Resources': ['Blog', 'Category Leaderboard', 'Multi-Channel Search Report'],
}

export function Hero({ navigation, heroImages, awardBadges }) {
  const [heroIndex, setHeroIndex] = useState(0)
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false)

  useEffect(() => {
    heroImages.forEach((src) => {
      const image = new Image()
      image.src = src
    })

    const heroTimer = window.setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length)
    }, 6200)

    return () => clearInterval(heroTimer)
  }, [heroImages.length])

  useEffect(() => {
    document.body.classList.toggle('is-menu-open', isMobilePanelOpen)
    return () => document.body.classList.remove('is-menu-open')
  }, [isMobilePanelOpen])

  return (
    <section className="hero hero--live" style={{ '--hero-bg': `url("${heroImages[heroIndex]}")` }}>
      <header className="header">
        <a className="brand" href="https://riseatseven.com/" aria-label="Rise at Seven home">
          <span className="brand__text">Rise at Seven</span>
          <span className="brand__mark" aria-hidden="true"></span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation?.map((item) => (
            <a key={item.label} href={toHref(item)}>
              {item.label}
              {item.label === 'Work' && <em>25</em>}
              {item.items?.length ? <span aria-hidden="true"> +</span> : null}
            </a>
          ))}
        </nav>

        <a href="https://riseatseven.com/connect-with-us/" className="header-cta">
          <span className="cta-text-stack">
            <span className="cta-text-line">
              <span>Get In Touch</span>
              <span className="cta-text-arrow" aria-hidden="true" />
            </span>
            <span className="cta-text-line" aria-hidden="true">
              <span>Get In Touch</span>
              <span className="cta-text-arrow" aria-hidden="true" />
            </span>
          </span>
        </a>

        <button
          className="menu-button"
          onClick={() => setIsMobilePanelOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMobilePanelOpen}
          type="button"
        >
          <div className="hamburger-icon" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {isMobilePanelOpen && (
          <div className="mobile-panel" role="dialog" aria-label="Mobile navigation">
            <div className="mobile-panel__top">
              <a className="mobile-panel__brand" href="https://riseatseven.com/" onClick={() => setIsMobilePanelOpen(false)}>
                Rise at Seven<sup>&reg;</sup>
              </a>
              <button
                className="mobile-panel__close"
                onClick={() => setIsMobilePanelOpen(false)}
                aria-label="Close menu"
                type="button"
              >
                &times;
              </button>
            </div>

            {navigation?.map((item) => {
              const mobileChildren = item.items?.length ? item.items : mobileOnlyChildren[item.label]

              return mobileChildren?.length ? (
                <details key={item.label}>
                  <summary>
                    {item.label}
                    <span className="mobile-chevron" aria-hidden="true"></span>
                  </summary>
                  {mobileChildren.map((child) => (
                    <a key={child} href={toChildHref(child)} onClick={() => setIsMobilePanelOpen(false)}>
                      {child}
                    </a>
                  ))}
                </details>
              ) : (
                <a key={item.label} href={toHref(item)} onClick={() => setIsMobilePanelOpen(false)}>
                  {item.label}
                </a>
              )
            })}

            <a href="https://riseatseven.com/connect-with-us/" className="mobile-panel__cta" onClick={() => setIsMobilePanelOpen(false)}>
              <span className="cta-text-stack">
                <span className="cta-text-line">
                  <span>Get In Touch</span>
                  <span className="cta-text-arrow" aria-hidden="true" />
                </span>
                <span className="cta-text-line" aria-hidden="true">
                  <span>Get In Touch</span>
                  <span className="cta-text-arrow" aria-hidden="true" />
                </span>
              </span>
            </a>
          </div>
        )}
      </header>

      <img key={heroIndex} className="hero-live__bg" src={heroImages[heroIndex]} alt="" aria-hidden="true" loading="eager" fetchPriority="high" />

      <div className="hero-live__center">
        <div className="award-line" data-reveal>
          <span className="award-line__dash" />
          <strong>#1 Most Recommended Content Marketing Agency</strong>
          <span className="award-line__dash" />
        </div>

        <div className="hero-awards" data-reveal>
          {awardBadges.map((badge) => (
            <div key={badge.name} className="hero-award-badge" title={badge.name}>
              <img
                src={badge.src}
                alt={badge.name}
                onError={(event) => {
                  event.currentTarget.style.display = 'none'
                  event.currentTarget.nextSibling.style.display = 'inline'
                }}
              />
              <span style={{ display: 'none' }}>{badge.fallback}</span>
            </div>
          ))}
        </div>

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
  )
}
