import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Legacy({ legacyCards, heroImages, legacyLiveRef, legacyCardsRefs }) {
  useEffect(() => {
    if (legacyLiveRef.current && legacyCardsRefs.current.length > 0 && window.matchMedia('(min-width: 701px)').matches) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: legacyLiveRef.current,
          start: 'top top',
          end: '+=350%',
          pin: true,
          scrub: 1,
        }
      })
      
      tl.to(legacyCardsRefs.current[0], {
        yPercent: -150,
        opacity: 0,
        rotation: -15,
        duration: 1
      })
      
      tl.to(legacyCardsRefs.current[1], {
        yPercent: -150,
        opacity: 0,
        rotation: -25,
        duration: 1
      }, "<0.8")
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [legacyLiveRef, legacyCardsRefs])

  return (
    <section className="legacy-live section-pad" ref={legacyLiveRef}>
      <p>Legacy In The Making</p>
      <div className="legacy-stack">
        {legacyCards.map((card, i) => {
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
  )
}
