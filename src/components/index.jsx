import { useState } from 'react'

/* ─────────────────────────── HEADER ─────────────────────────── */
export function Header({ navigation }) {
  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)

  const slug = (s) =>
    s.toLowerCase().replaceAll(' ', '-').replaceAll('&', '').replaceAll('/', '').replaceAll('  ', '-')

  return (
    <header className="header" onMouseLeave={() => setActiveMenu(null)}>
      {/* Brand wordmark */}
      <a className="brand" href="/" aria-label="Rise at Seven home">
        <span className="brand__text">Rise at Seven</span>
        <svg className="brand__mark" viewBox="0 0 10 10" fill="none" aria-hidden="true" width="10" height="10">
          <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>

      {/* Desktop nav */}
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <div
            key={item.label}
            className="nav-item"
            onMouseEnter={() => setActiveMenu(item.items ? item.label : null)}
          >
            <a href={`https://riseatseven.com/${item.label.toLowerCase()}/`}>
              {item.label}
              {item.label === 'Work' && <em>25</em>}
              {item.items && <span className="nav-chevron" aria-hidden="true">+</span>}
            </a>
          </div>
        ))}
      </nav>

      <a className="header-cta" href="https://riseatseven.com/connect-with-us/">
        Get In Touch
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <i className="fa-solid fa-xmark" aria-hidden="true" />
        ) : (
          <span className="hamburger-icon" aria-hidden="true">
            <span></span>
            <span></span>
          </span>
        )}
      </button>

      {/* Mega-menu dropdown */}
      <div className={`mega-menu${activeMenu ? ' is-open' : ''}`} role="dialog" aria-label="Navigation menu">
        {navigation
          .filter((item) => item.label === activeMenu)
          .map((item) => (
            <div key={item.label} className="mega-menu__inner">
              <div className="mega-menu__intro">
                <p>{item.label === 'About' ? 'About Rise at Seven' : item.label === 'Services' ? 'Core Services' : item.label}</p>
                <span>Explore {item.label.toLowerCase()} at Rise at Seven</span>
              </div>
              <div className="mega-menu__links">
                {item.items.map((child) => (
                  <a key={child} href={`https://riseatseven.com/${slug(child)}/`}>
                    <span>{child}</span>
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Mobile slide-down panel */}
      {open && (
        <nav className="mobile-panel" aria-label="Mobile navigation">
          <div className="mobile-panel__top">
            <a className="mobile-panel__brand" href="/" onClick={() => setOpen(false)}>
              Rise at Seven<sup>®</sup>
            </a>
            <button className="mobile-panel__close" type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              <i className="fa-solid fa-xmark" aria-hidden="true" />
            </button>
          </div>
          {navigation.map((item) => (
            <details key={item.label}>
              <summary>
                {item.label}
                {item.items && <span className="mobile-chevron">+</span>}
              </summary>
              {item.items && item.items.map((child) => (
                <a key={child} href={`https://riseatseven.com/${slug(child)}/`} onClick={() => setOpen(false)}>
                  {child}
                </a>
              ))}
            </details>
          ))}
          <a href="https://riseatseven.com/connect-with-us/" className="mobile-panel__cta" onClick={() => setOpen(false)}>
            Get In Touch ↗
          </a>
        </nav>
      )}
    </header>
  )
}

/* ─────────────────────────── MARQUEE ─────────────────────────── */
export function Marquee({ text, children, dark = false }) {
  const item = children || text

  return (
    <div className={`marquee${dark ? ' marquee--dark' : ''}`} aria-hidden="true">
      <div className="marquee__track">
        {Array.from({ length: 2 }).map((_, groupIndex) => (
          <div className="marquee__group" key={groupIndex}>
            {Array.from({ length: 6 }).map((__, i) => (
              <span key={`${groupIndex}-${i}`}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────── ANNOUNCEMENT BAR ─────────────────────────── */
export function AnnouncementBar({ text }) {
  return (
    <a href="https://riseatseven.com/category-leaderboard/" className="announcement-bar">
      <div className="announcement-bar__text-wrap">
        <span className="announcement-bar__item">
          <span className="announcement-bar__text">{text}</span>
          <span className="announcement-bar__text" aria-hidden="true">{text}</span>
        </span>
      </div>
    </a>
  )
}

/* ─────────────────────── CLIENT LOGO CAROUSEL ──────────────────── */
export function ClientCarousel({ logos }) {
  // Duplicate items so the infinite scroll looks seamless
  const items = [...logos, ...logos]
  return (
    <section className="client-row" aria-label="Clients">
      <p className="client-row__label">The agency behind …</p>
      <div className="client-carousel" aria-hidden="true">
        <div className="client-carousel__track">
          {items.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="client-carousel__item">
              {logo.src ? (
                <img
                  src={logo.src}
                  alt=""
                  loading="lazy"
                  className="client-carousel__logo"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              ) : null}
              <span className="client-carousel__name">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── SECTION TITLE ─────────────────────── */
export function SectionTitle({ kicker, children }) {
  return (
    <div className="title-block">
      <p>{kicker}</p>
      <h2>{children}</h2>
    </div>
  )
}

/* ─────────────────────────── ARROW BUTTON ──────────────────────── */
export function ArrowButton({ children, variant = 'light', href = '#contact' }) {
  return (
    <a className={`arrow-button arrow-button--${variant}`} href={href}>
      <span className="arrow-button__text-wrap">
        <span className="arrow-button__line">
          <span className="arrow-button__text">{children}</span>
          <span className="button-arrow" aria-hidden="true" />
        </span>
        <span className="arrow-button__line" aria-hidden="true">
          <span className="arrow-button__text">{children}</span>
          <span className="button-arrow" aria-hidden="true" />
        </span>
      </span>
    </a>
  )
}

/* ─────────────────────────── SERVICE LINK ──────────────────────── */
export function ServiceLink({ children, image }) {
  return (
    <a className="service-link" href="https://riseatseven.com/services/">
      <img className="service-link__thumb" src={image} alt="" aria-hidden="true" loading="lazy" />
      <div className="service-link__bg-wrap">
        <img src={image} alt="" aria-hidden="true" />
      </div>
      <span className="service-link__content">
        <svg className="service-link__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
        <span className="service-link__text">{children}</span>
      </span>
    </a>
  )
}

/* ─────────────────────────── FOOTER ────────────────────────────── */
export function Footer() {
  const navLinks = [
    { label: 'Services', url: 'https://riseatseven.com/services/' },
    { label: 'Work', url: 'https://riseatseven.com/work/' },
    { label: 'About', url: 'https://riseatseven.com/about/' },
    { label: 'Culture', url: 'https://riseatseven.com/culture/' },
    { label: 'Meet The Risers', url: 'https://riseatseven.com/meet-the-team/' },
    { label: 'Testimonials', url: 'https://riseatseven.com/testimonials/' },
    { label: 'Blog', url: 'https://riseatseven.com/blog/' },
    { label: 'Webinars', url: 'https://riseatseven.com/webinars/' },
    { label: 'Careers', url: 'https://riseatseven.com/careers/' },
  ]
  const offices = [
    { name: 'Sheffield', url: 'https://g.co/kgs/4Br7JaS' },
    { name: 'Manchester', url: 'https://g.co/kgs/9vh5imK' },
    { name: 'London', url: 'https://g.co/kgs/hsv6LhR' },
    { name: 'New York', url: 'https://g.co/kgs/NxzhAKU' },
    { name: 'Contact', url: 'https://riseatseven.com/contact/' },
  ]
  const socials = [
    { icon: 'fa-x-twitter', label: 'X / Twitter', url: 'https://twitter.com/riseatseven' },
    { icon: 'fa-linkedin-in', label: 'LinkedIn', url: 'https://www.linkedin.com/company/rise-at-seven' },
    { icon: 'fa-instagram', label: 'Instagram', url: 'https://www.instagram.com/riseatseven' },
    { icon: 'fa-tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@riseatseven' },
  ]
  const animatedFooterText = (label) => (
    <span className="footer__link-text-stack">
      <span>{label}</span>
      <span aria-hidden="true">{label}</span>
    </span>
  )

  return (
    <>
      <section className="ready-to-rise">
        <div className="ready-to-rise__pin">
          <p className="ready-to-rise__track" aria-label="Ready to Rise at Seven?">
            Ready to Rise at Seven?
          </p>
        </div>
        <div className="ready-to-rise__wave-container">
          <svg
            viewBox="0 0 1440 500"
            className="ready-to-rise__wave-svg"
            xmlns="http://www.w3.org/2000/svg"
            overflow="visible"
            aria-label="Ready to Rise at Seven?"
          >
            <defs>
              <path
                id="wavePath"
                d="M -200 390 Q 360 100 720 320 Q 1080 520 1440 260 Q 1800 60 2160 280"
              />
            </defs>
            {/* Font props as SVG presentation attrs — guaranteed to work */}
            <text
              fontSize="200"
              fontWeight="500"
              letterSpacing="-8"
              fill="#050505"
              fontFamily="saans, ui-sans-serif, system-ui, sans-serif"
            >
              <textPath
                href="#wavePath"
                startOffset="30%"
                className="ready-to-rise__text-path"
              >
                Ready to Rise at Seven?
              </textPath>
            </text>
          </svg>
        </div>
      </section>

      <footer className="footer" id="contact">
        {/* ── Top Row ── */}
        <div className="footer__top">
          {/* Left: newsletter */}
          <div className="footer__newsletter">
            <h3 className="footer__heading">Stay updated with Rise news</h3>
            <div className="footer__email-row">
              <input type="email" placeholder="Your Email Address" className="footer__email-input" />
              <button className="footer__email-btn" aria-label="Subscribe">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </button>
            </div>
            <div className="footer__social">
              {[
                { icon: 'fa-facebook-f', label: 'Facebook', url: 'https://www.facebook.com/riseatseven' },
                { icon: 'fa-x-twitter', label: 'X', url: 'https://twitter.com/riseatseven' },
                { icon: 'fa-linkedin-in', label: 'LinkedIn', url: 'https://www.linkedin.com/company/rise-at-seven' },
                { icon: 'fa-youtube', label: 'YouTube', url: 'https://www.youtube.com/@riseatseven' },
                { icon: 'fa-tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@riseatseven' },
                { icon: 'fa-instagram', label: 'Instagram', url: 'https://www.instagram.com/riseatseven' },
              ].map((s) => (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="footer__social-link">
                  <i className={`fa-brands ${s.icon}`} aria-hidden="true" />
                  <svg viewBox="0 0 24 24" width="9" height="9" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="footer__divider" />

          {/* Right: 3 nav columns */}
          <div className="footer__nav-cols">
            <div className="footer__nav-col">
              {['Services', 'Work', 'About', 'Culture', 'Meet The Risers'].map(label => (
                <a key={label} href={navLinks.find(l => l.label === label)?.url || '#'}>{animatedFooterText(label)}</a>
              ))}
            </div>
            <div className="footer__nav-col">
              {['Testimonials', 'Blog & Resources', 'Webinars', 'Careers'].map(label => (
                <a key={label} href={navLinks.find(l => l.label === label)?.url || '#'}>{animatedFooterText(label)}</a>
              ))}
            </div>
            <div className="footer__nav-col">
              {offices.map((o) => (
                <a key={o.name} href={o.url} target={o.name !== 'Contact' ? '_blank' : undefined} rel="noopener noreferrer">
                  {animatedFooterText(o.name)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Giant wordmark ── */}
        <div className="footer__wordmark" aria-label="Rise at Seven">
          <span className="footer__wordmark-text">Rise at Seve</span>
          <span className="footer__wordmark-n">
            <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer__wordmark-n-svg">
              <path d="M8 112 L8 8 L80 112 L80 8" stroke="white" strokeWidth="16" strokeLinecap="square" strokeLinejoin="miter" fill="none"/>
            </svg>
          </span>
          <span className="footer__wordmark-r">®</span>
        </div>

        {/* ── Legal bar ── */}
        <div className="footer__legal">
          <div className="footer__legal-left">
            <span>© 2025 Rise at Seven Ltd. All rights reserved</span>
            <span className="footer__legal-dot">•</span>
            <span>Company Number 11955187</span>
            <span className="footer__legal-dot">•</span>
            <span>VAT Registered GB 322402945</span>
            <span className="footer__legal-dot">•</span>
            <a href="https://riseatseven.com/privacy-policy/">Privacy Policy</a>
            <span className="footer__legal-dot">•</span>
            <a href="https://riseatseven.com/terms-conditions/">Terms &amp; conditions</a>
          </div>
          <a href="https://madebyshape.co.uk" target="_blank" rel="noopener noreferrer" className="footer__legal-shape">
            Website MadeByShape
          </a>
        </div>
      </footer>
    </>
  )
}
