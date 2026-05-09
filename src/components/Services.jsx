import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const gridRef = useRef(null)

  const services = [
    {
      name: 'SEO',
      icon: '/images/services/seo-icon.svg',
      featured: '/images/services/seo-featured.svg',
      description: 'Technical and content SEO that drives organic growth'
    },
    {
      name: 'Content Marketing',
      icon: '/images/services/content-icon.svg',
      featured: '/images/services/content-featured.svg',
      description: 'Strategic content that builds authority and drives conversions'
    },
    {
      name: 'Social Media',
      icon: '/images/services/social-icon.svg',
      featured: '/images/services/social-featured.svg',
      description: 'Social strategies that amplify your brand voice'
    },
    {
      name: 'Digital PR',
      icon: '/images/services/pr-icon.svg',
      featured: '/images/services/pr-featured.svg',
      description: 'PR campaigns that build links and brand awareness'
    },
    {
      name: 'Data & Analytics',
      icon: '/images/services/data-icon.svg',
      featured: '/images/services/data-featured.svg',
      description: 'Data-driven insights that inform strategy'
    },
    {
      name: 'Strategy',
      icon: '/images/services/strategy-icon.svg',
      featured: '/images/services/strategy-featured.svg',
      description: 'Comprehensive digital marketing strategies'
    }
  ]

  useEffect(() => {
    // Animate heading
    if (headingRef.current) {
      gsap.fromTo(headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%"
          }
        }
      )
    }

    // Animate service links
    const serviceLinks = gridRef.current?.querySelectorAll('.service-link')
    serviceLinks?.forEach((link, index) => {
      gsap.fromTo(link,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: link,
            start: "top 90%"
          }
        }
      )
    })
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="bg-white mobile:py-10 tablet:py-12 desktop:py-20"
      style={{ padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1rem, 4vw, 2rem) clamp(2rem, 4vw, 3rem)' }} // 40px 16px 32px mobile
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 mobile:mb-8 tablet:mb-10 desktop:mb-16">
          <h2 
            ref={headingRef}
            className="font-display font-bold text-gray-900 mb-6 mobile:mb-4 tablet:mb-6 desktop:mb-8"
            style={{
              fontSize: 'clamp(2.75rem, 5vw + 1rem, 4.75rem)', // 44px to 76px
              lineHeight: 'clamp(3rem, 5.5vw + 1rem, 5rem)'
            }}
          >
            Our{' '}
            <span className="relative">
              <img 
                src="/images/services/strategy-featured.svg" 
                alt="" 
                className="inline-block mx-2 rounded-lg"
                style={{
                  width: 'clamp(3.4375rem, 4.5vw + 1rem, 5.625rem)', // 55px to 90px
                  height: 'clamp(3.4375rem, 4.5vw + 1rem, 5.625rem)',
                  verticalAlign: 'middle'
                }}
              />
            </span>
            Services
          </h2>
          
          <a 
            href="/services" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors group"
          >
            View All Services
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

        {/* Services Grid */}
        <div 
          ref={gridRef}
          className="grid mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 mobile:gap-4 tablet:gap-6 desktop:gap-8"
        >
          {services.map((service, index) => (
            <a
              key={service.name}
              href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="service-link group relative overflow-hidden rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              style={{
                height: 'clamp(4.25rem, 8vw, 5.25rem)', // 68px mobile to 84px tablet
                padding: 'clamp(1rem, 2vw, 1.5rem)'
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('.service-bg')
                if (img) {
                  gsap.to(img, { opacity: 0.1, duration: 0.3 })
                }
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('.service-bg')
                if (img) {
                  gsap.to(img, { opacity: 0, duration: 0.3 })
                }
              }}
            >
              {/* Background Image */}
              <img 
                src={service.featured} 
                alt=""
                className="service-bg absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300"
              />
              
              {/* Content */}
              <div className="relative z-10 flex items-center justify-between h-full">
                <div className="flex items-center gap-4">
                  <img 
                    src={service.icon} 
                    alt=""
                    className="w-8 h-8 mobile:w-6 mobile:h-6 tablet:w-8 tablet:h-8 desktop:w-10 desktop:h-10"
                  />
                  <div>
                    <h3 
                      className="font-bold text-gray-900 group-hover:text-white transition-colors"
                      style={{
                        fontSize: 'clamp(1.375rem, 2.5vw + 0.5rem, 2.125rem)', // 22px to 34px
                        lineHeight: '1.2'
                      }}
                    >
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-200 transition-colors desktop:block hidden">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <svg 
                  className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services