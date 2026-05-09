import { useState, useEffect } from 'react'
import { Header } from './index.jsx'
import './Hero.css'

export function Hero({ navigation, heroImages, awardBadges }) {
  const [heroIndex, setHeroIndex] = useState(0)
  const [isMobilePanelOpen, setIsMobilePanelOpen] = useState(false)

  useEffect(() => {
    const heroTimer = window.setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length)
    }, 3200)

    return () => clearInterval(heroTimer)
  }, [heroImages.length])

  return (
    <section className="hero hero--live">
      <header className="hero--live header">
        <div className="hero--live brand">
          <span className="brand__text">Rise at Seven</span>
          <span className="brand__mark">®</span>
        </div>
        
        <nav className="hero--live desktop-nav">
          {navigation?.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
              {item.badge && <em>{item.badge}</em>}
            </a>
          ))}
        </nav>
        
        <a href="/contact" className="hero--live header-cta">Get Started</a>
        
        <button 
          className="hero--live menu-button"
          onClick={() => setIsMobilePanelOpen(!isMobilePanelOpen)}
          aria-label="Toggle menu"
        >
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Mobile Panel */}
        {isMobilePanelOpen && (
          <div className="mobile-panel">
            <div className="mobile-panel__top">
              <div className="mobile-panel__brand">
                Rise at Seven<sup>®</sup>
              </div>
              <button 
                className="mobile-panel__close"
                onClick={() => setIsMobilePanelOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {navigation?.map((item) => (
              <details key={item.label}>
                <summary>
                  {item.label}
                  <span className="mobile-chevron"></span>
                </summary>
                {item.submenu && item.submenu.map((sub) => (
                  <a key={sub.label} href={sub.href} onClick={() => setIsMobilePanelOpen(false)}>
                    {sub.label}
                  </a>
                ))}
              </details>
            ))}

            <a href="/contact" className="mobile-panel__cta" onClick={() => setIsMobilePanelOpen(false)}>
              Get Started
            </a>
          </div>
        )}
      </header>

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
  )
}
