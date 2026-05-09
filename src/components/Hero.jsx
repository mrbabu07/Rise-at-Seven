import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Hero = () => {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })
    
    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(ctaRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.7)" },
      "-=0.5"
    )
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white mobile:rounded-b-2xl tablet:rounded-b-3xl desktop:rounded-b-none"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pages/hero-background.svg')] bg-cover bg-center"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 mobile:px-4 tablet:px-6 desktop:px-8 py-20 mobile:py-16 tablet:py-20 desktop:py-32">
        <div className="grid desktop:grid-cols-2 gap-12 desktop:gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-center desktop:text-left">
            <h1 
              ref={titleRef}
              className="font-display font-bold text-gray-900 leading-tight mb-6"
              style={{
                fontSize: 'clamp(2.25rem, 4vw + 1rem, 4rem)', // 36px to 64px
                lineHeight: 'clamp(2.5rem, 4.5vw + 1rem, 4.5rem)'
              }}
            >
              We make brands{' '}
              <span className="relative">
                <img 
                  src="/images/icons/arrow.svg" 
                  alt="" 
                  className="inline-block mx-2"
                  style={{
                    width: 'clamp(2.8125rem, 3.5vw + 1rem, 4.375rem)', // 45px to 70px
                    height: 'clamp(2.8125rem, 3.5vw + 1rem, 4.375rem)'
                  }}
                />
              </span>
              rise at seven
            </h1>

            <p 
              ref={subtitleRef}
              className="text-gray-600 mb-8 max-w-2xl mobile:max-w-none desktop:max-w-2xl mx-auto desktop:mx-0"
              style={{
                fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.375rem)', // 16px to 22px
                lineHeight: 'clamp(1.5rem, 2vw + 0.75rem, 2rem)'
              }}
            >
              Award-winning digital marketing agency specializing in SEO, content marketing, 
              and social media. We help ambitious brands dominate their markets through 
              data-driven strategies and creative excellence.
            </p>

            <div ref={ctaRef} className="flex flex-col mobile:flex-col tablet:flex-row desktop:flex-row gap-4 justify-center desktop:justify-start">
              <a 
                href="/contact" 
                className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                style={{ fontSize: '0.875rem', height: '3rem' }} // 14px, 42px height
              >
                Start Your Project
              </a>
              <a 
                href="/work" 
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
                style={{ fontSize: '0.875rem', height: '3rem' }} // 14px, 42px height
              >
                View Our Work
              </a>
            </div>

            {/* Bottom Info - Awards */}
            <div className="mt-12 mobile:mt-8 tablet:mt-10 desktop:mt-12">
              <div className="flex flex-col mobile:flex-col tablet:flex-col desktop:flex-row items-center desktop:items-start gap-6">
                <div className="text-center desktop:text-left">
                  <p className="text-gray-500 text-sm mb-3">Award-winning agency</p>
                  <div className="flex items-center justify-center desktop:justify-start gap-4">
                    <img 
                      src="/images/logos/awards/global-search-awards.svg" 
                      alt="Global Search Awards" 
                      className="h-9 mobile:h-9 tablet:h-10 desktop:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                    />
                    <img 
                      src="/images/logos/awards/drum-awards.svg" 
                      alt="Drum Awards" 
                      className="h-9 mobile:h-9 tablet:h-10 desktop:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                    />
                    <img 
                      src="/images/logos/awards/content-marketing-awards.svg" 
                      alt="Content Marketing Awards" 
                      className="h-9 mobile:h-9 tablet:h-10 desktop:h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center desktop:justify-end">
            <div 
              ref={imageRef}
              className="relative max-w-lg mobile:max-w-sm tablet:max-w-md desktop:max-w-lg w-full"
            >
              <img 
                src="/images/pages/hero-banner.svg" 
                alt="Rise at Seven Team" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-bounce">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  <div>
                    <div className="w-16 h-2 bg-gray-200 rounded mb-1"></div>
                    <div className="w-12 h-2 bg-gray-100 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero