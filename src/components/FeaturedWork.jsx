import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowButton } from './index.jsx'
import './FeaturedWork.css'

gsap.registerPlugin(ScrollTrigger)

export function FeaturedWork({ featuredWork }) {
  const [activeWork, setActiveWork] = useState(0)
  const workListRef = useRef(null)

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

  useEffect(() => {
    gsap.utils.toArray('.work-card').forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 55%',
        end: 'bottom 55%',
        onEnter: () => setActiveWork(i),
        onEnterBack: () => setActiveWork(i),
      })
      
      const img = card.querySelector('img')
      if (img) {
        gsap.fromTo(img, 
          { y: '-10%', scale: 1.15 }, 
          { y: '10%', scale: 1, ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true } }
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <>
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
    </>
  )
}
