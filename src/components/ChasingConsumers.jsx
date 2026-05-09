import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ChasingConsumers = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (sectionRef.current) {
      // Parallax effect for the text
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2
        }
      })

      tl.to('.chasing__word--consumers', { x: '-6vw', ease: 'none' })
        .to('.chasing__word--algorithms', { x: '6vw', ease: 'none' }, 0)
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="bg-gray-900 text-white py-20 mobile:py-16 tablet:py-18 desktop:py-24 overflow-hidden"
    >
      <a 
        href="/contact" 
        className="block hover:bg-gray-800 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 mobile:px-4 tablet:px-6 desktop:px-8">
          
          {/* Animated Text Lines */}
          <div className="space-y-4 mobile:space-y-2 tablet:space-y-3 desktop:space-y-6">
            
            {/* Line 1: Chasing */}
            <div className="flex items-center justify-center mobile:gap-2 tablet:gap-4 desktop:gap-8">
              <span 
                className="chasing__word font-display font-bold"
                style={{
                  fontSize: 'clamp(3rem, 8vw + 1rem, 8.125rem)', // 48px to 130px
                  lineHeight: '0.9'
                }}
              >
                Chasing
              </span>
              <img 
                src="/images/pages/hero-banner.svg" 
                alt=""
                className="rounded-lg"
                style={{
                  width: 'clamp(3rem, 6vw + 1rem, 7.5rem)', // 48px to 120px
                  height: 'clamp(3rem, 6vw + 1rem, 7.5rem)'
                }}
              />
            </div>

            {/* Line 2: Consumers */}
            <div className="flex items-center justify-center mobile:gap-2 tablet:gap-4 desktop:gap-8">
              <img 
                src="/images/services/content-featured.svg" 
                alt=""
                className="rounded-lg"
                style={{
                  width: 'clamp(3rem, 6vw + 1rem, 7.5rem)', // 48px to 120px
                  height: 'clamp(3rem, 6vw + 1rem, 7.5rem)'
                }}
              />
              <span 
                className="chasing__word chasing__word--consumers font-display font-bold"
                style={{
                  fontSize: 'clamp(3rem, 8vw + 1rem, 8.125rem)', // 48px to 130px
                  lineHeight: '0.9'
                }}
              >
                Consumers
              </span>
            </div>

            {/* Line 3: Not */}
            <div className="flex items-center justify-center mobile:gap-2 tablet:gap-4 desktop:gap-8">
              <span 
                className="chasing__word font-display font-bold"
                style={{
                  fontSize: 'clamp(3rem, 8vw + 1rem, 8.125rem)', // 48px to 130px
                  lineHeight: '0.9'
                }}
              >
                Not
              </span>
              <img 
                src="/images/services/seo-featured.svg" 
                alt=""
                className="rounded-lg"
                style={{
                  width: 'clamp(3rem, 6vw + 1rem, 7.5rem)', // 48px to 120px
                  height: 'clamp(3rem, 6vw + 1rem, 7.5rem)'
                }}
              />
            </div>

            {/* Line 4: Algorithms */}
            <div className="flex items-center justify-center mobile:gap-2 tablet:gap-4 desktop:gap-8">
              <img 
                src="/images/services/data-featured.svg" 
                alt=""
                className="rounded-lg"
                style={{
                  width: 'clamp(3rem, 6vw + 1rem, 7.5rem)', // 48px to 120px
                  height: 'clamp(3rem, 6vw + 1rem, 7.5rem)'
                }}
              />
              <span 
                className="chasing__word chasing__word--algorithms font-display font-bold"
                style={{
                  fontSize: 'clamp(3rem, 8vw + 1rem, 8.125rem)', // 48px to 130px
                  lineHeight: '0.9'
                }}
              >
                Algorithms
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 mobile:mt-8 tablet:mt-10 desktop:mt-16">
            <p className="text-gray-300 mb-6 mobile:mb-4 tablet:mb-6 desktop:mb-8 text-lg mobile:text-base tablet:text-lg desktop:text-xl">
              Ready to put people first?
            </p>
            <div className="inline-flex items-center gap-3 text-white hover:text-gray-200 transition-colors group">
              <span className="text-lg font-medium">Get Started</span>
              <svg 
                className="w-6 h-6 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </section>
  )
}

export default ChasingConsumers