import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Legacy = () => {
  const sectionRef = useRef(null)
  const cardsRefs = useRef([])

  const legacyCards = [
    {
      id: 'pioneers',
      title: 'Pioneers',
      body: 'Leading the industry with innovative search-first content strategies that set new standards.',
      bg: '#FF6B35',
      color: '#FFFFFF',
      image: '/images/pages/about-team.svg'
    },
    {
      id: 'award-winning',
      title: 'Award Winning',
      body: 'Recognized globally for excellence in digital marketing and content creation.',
      bg: '#8B5CF6',
      color: '#FFFFFF',
      image: '/images/logos/awards/global-search-awards.svg'
    },
    {
      id: 'future-focused',
      title: 'Future Focused',
      body: 'Building tomorrow\'s digital landscape with cutting-edge technology and human insight.',
      bg: '#10B981',
      color: '#FFFFFF',
      image: '/images/services/strategy-featured.svg'
    }
  ]

  useEffect(() => {
    // Desktop stacking animation
    if (window.matchMedia('(min-width: 981px)').matches && sectionRef.current && cardsRefs.current.length > 0) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=350%',
          pin: true,
          scrub: 1,
        }
      })
      
      // Card 1 flies up and rotates left
      tl.to(cardsRefs.current[0], {
        yPercent: -150,
        opacity: 0,
        rotation: -15,
        duration: 1
      })
      
      // Card 2 flies up and rotates left
      tl.to(cardsRefs.current[1], {
        yPercent: -150,
        opacity: 0,
        rotation: -25,
        duration: 1
      }, "<0.8")
      
      // Card 3 stays visible
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="bg-gray-50 mobile:py-14 tablet:py-16 desktop:py-20"
      style={{ padding: 'clamp(3.5rem, 6vw, 5rem) clamp(1rem, 4vw, 2rem) clamp(3rem, 5vw, 4rem)' }} // 56px 16px 48px mobile
    >
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Title */}
        <p 
          className="text-gray-600 font-medium mb-12 mobile:mb-8 tablet:mb-10 desktop:mb-16"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }} // 16px fluid
        >
          Legacy In The Making
        </p>

        {/* Cards Stack */}
        <div className="relative flex justify-center">
          <div 
            className="relative"
            style={{
              width: 'clamp(94vw, 90vw, 26.25rem)', // 94vw mobile, max 420px
              maxWidth: 'clamp(26.25rem, 30vw, 32.5rem)', // 420px to 520px
              height: 'clamp(38.75rem, 45vw, 45rem)' // 620px mobile to 720px tablet
            }}
          >
            {legacyCards.map((card, index) => {
              const rotations = [3, -6, -10]
              const zIndexes = [3, 2, 1]
              
              return (
                <article
                  key={card.id}
                  ref={(el) => (cardsRefs.current[index] = el)}
                  className="absolute inset-0 rounded-2xl shadow-2xl flex flex-col items-center justify-center text-center"
                  style={{
                    backgroundColor: card.bg,
                    color: card.color,
                    zIndex: zIndexes[index],
                    transform: `rotate(${rotations[index]}deg)`,
                    padding: 'clamp(3rem, 6vw, 3.5rem) clamp(1.75rem, 4vw, 2rem) clamp(3.5rem, 7vw, 4rem)' // 48px 28px 56px mobile
                  }}
                >
                  {/* Card Image */}
                  <img 
                    src={card.image} 
                    alt=""
                    className="mb-6 mobile:mb-4 tablet:mb-6 desktop:mb-8 rounded-lg"
                    style={{
                      width: 'clamp(6.875rem, 12vw, 8.75rem)', // 110px mobile
                      height: 'clamp(6.875rem, 12vw, 8.75rem)'
                    }}
                  />

                  {/* Card Title */}
                  <h3 
                    className="font-display font-bold mb-4 mobile:mb-3 tablet:mb-4 desktop:mb-6"
                    style={{
                      fontSize: 'clamp(2.25rem, 4vw + 0.5rem, 3.125rem)', // 36px to 50px
                      lineHeight: '1.1'
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Card Body */}
                  <p 
                    className="leading-relaxed max-w-sm mx-auto"
                    style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1rem)' }} // 14px fluid
                  >
                    {card.body}
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/30 rounded-full"></div>
                </article>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 mobile:mt-12 tablet:mt-14 desktop:mt-20">
          <a 
            href="/about" 
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            Learn Our Story
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Legacy