import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Manifesto = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const headingRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    const elements = [textRef.current, headingRef.current, buttonsRef.current]
    
    elements.forEach((el, index) => {
      if (el) {
        gsap.fromTo(el, 
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "bottom 15%",
            }
          }
        )
      }
    })
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="bg-white mobile:py-10 tablet:py-12 desktop:py-20"
      style={{ padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1rem, 4vw, 2rem)' }} // 40px 16px mobile to larger
    >
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Body Text */}
        <p 
          ref={textRef}
          className="text-gray-600 mb-8 mobile:mb-6 tablet:mb-8 desktop:mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{
            fontSize: 'clamp(1.0625rem, 2vw + 0.5rem, 1.625rem)', // 17px to 26px
            lineHeight: 'clamp(1.5rem, 2.5vw + 0.75rem, 2.25rem)'
          }}
        >
          A global team of search-first content marketers engineering semantic relevancy and 
          category signals for both the internet and people. We create content that doesn't 
          just rank—it resonates, converts, and builds lasting brand authority.
        </p>

        {/* Main Heading with Inline Image */}
        <h2 
          ref={headingRef}
          className="font-display font-bold text-gray-900 mb-10 mobile:mb-8 tablet:mb-10 desktop:mb-12 leading-tight"
          style={{
            fontSize: 'clamp(2.375rem, 4vw + 1rem, 4rem)', // 38px to 64px
            lineHeight: 'clamp(2.75rem, 4.5vw + 1rem, 4.5rem)'
          }}
        >
          Driving Demand &{' '}
          <span className="relative inline-block">
            <img 
              src="/images/pages/hero-banner.svg" 
              alt="" 
              className="inline-block mx-2 rounded-lg"
              style={{
                width: 'clamp(2.8125rem, 3.5vw + 1rem, 4.375rem)', // 45px to 70px
                height: 'clamp(2.8125rem, 3.5vw + 1rem, 4.375rem)',
                verticalAlign: 'middle'
              }}
            />
          </span>
          Discovery
        </h2>

        {/* CTA Buttons */}
        <div 
          ref={buttonsRef}
          className="flex flex-col mobile:flex-col tablet:flex-row desktop:flex-row gap-4 justify-center items-center"
        >
          <a 
            href="/about" 
            className="group bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            style={{ 
              fontSize: '0.875rem', // 14px
              height: '2.625rem' // 42px
            }}
          >
            Our Story
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a 
            href="/services" 
            className="group border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center gap-2"
            style={{ 
              fontSize: '0.875rem', // 14px
              height: '2.625rem' // 42px
            }}
          >
            Our Services
            <svg 
              className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Stats or Additional Info */}
        <div className="mt-16 mobile:mt-12 tablet:mt-14 desktop:mt-20 grid mobile:grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-3 gap-8 mobile:gap-6 tablet:gap-8 desktop:gap-12">
          <div className="text-center">
            <div className="text-3xl mobile:text-2xl tablet:text-3xl desktop:text-4xl font-bold text-gray-900 mb-2">
              150+
            </div>
            <p className="text-gray-600 text-sm mobile:text-sm tablet:text-base desktop:text-base">
              Brands Transformed
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mobile:text-2xl tablet:text-3xl desktop:text-4xl font-bold text-gray-900 mb-2">
              4
            </div>
            <p className="text-gray-600 text-sm mobile:text-sm tablet:text-base desktop:text-base">
              Global Offices
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mobile:text-2xl tablet:text-3xl desktop:text-4xl font-bold text-gray-900 mb-2">
              50+
            </div>
            <p className="text-gray-600 text-sm mobile:text-sm tablet:text-base desktop:text-base">
              Awards Won
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Manifesto