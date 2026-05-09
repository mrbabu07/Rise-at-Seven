import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FeaturedWork = () => {
  const [activeWork, setActiveWork] = useState(0)
  const workListRef = useRef(null)
  const cardsRef = useRef(null)

  const featuredWork = [
    {
      title: 'JD Sports',
      years: '2022-2024',
      category: 'SEO + Content',
      result: '+127% Organic Traffic Growth',
      image: '/images/case-studies/jd-sports/featured.svg',
      cardBg: '#FF6B35',
      slug: 'jd-sports'
    },
    {
      title: 'Revolution Beauty',
      years: '2021-2024',
      category: 'Social + PR',
      result: '+89% Brand Awareness',
      image: '/images/case-studies/revolution/featured.svg',
      cardBg: '#8B5CF6',
      slug: 'revolution-beauty'
    },
    {
      title: 'Lloyds Pharmacy',
      years: '2023-2024',
      category: 'Content + Data',
      result: '+156% Conversion Rate',
      image: '/images/case-studies/lloyds/featured.svg',
      cardBg: '#10B981',
      slug: 'lloyds-pharmacy'
    },
    {
      title: 'PrettyLittleThing',
      years: '2022-2024',
      category: 'Social SEO',
      result: '+203% Social Engagement',
      image: '/images/case-studies/plt/featured.svg',
      cardBg: '#F59E0B',
      slug: 'prettylittlething'
    },
    {
      title: 'Sixt',
      years: '2023-2024',
      category: 'SEO + PR',
      result: '+94% Market Share',
      image: '/images/case-studies/sixt/featured.svg',
      cardBg: '#EF4444',
      slug: 'sixt'
    }
  ]

  useEffect(() => {
    // Animate the work list to keep the active item visible
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

    // Set up scroll triggers for work cards
    const workCards = document.querySelectorAll('.work-card')
    workCards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 55%',
        end: 'bottom 55%',
        onEnter: () => setActiveWork(i),
        onEnterBack: () => setActiveWork(i),
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [activeWork])

  return (
    <section className="bg-gray-50 mobile:my-12 tablet:my-16 desktop:my-20">
      <div 
        className="bg-white rounded-2xl mobile:mx-2 tablet:mx-4 desktop:mx-8 overflow-hidden"
        style={{
          margin: 'clamp(0.5rem, 2vw, 2rem)', // 8px mobile
          padding: 'clamp(1.25rem, 3vw, 1.75rem) clamp(0.75rem, 2vw, 1.5rem) clamp(1.75rem, 4vw, 2.5rem)', // 20px 12px 28px mobile
          borderRadius: '1rem' // 16px
        }}
      >
        <div className="grid desktop:grid-cols-2 gap-8 desktop:gap-12">
          
          {/* Left: Work List */}
          <div className="desktop:sticky desktop:top-8 desktop:h-fit">
            <p 
              className="text-gray-600 font-medium mb-6 mobile:mb-4 tablet:mb-6 desktop:mb-8"
              style={{ fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)' }} // 15px mobile
            >
              Featured Work
            </p>
            
            <div className="desktop:block hidden">
              <div className="relative overflow-hidden h-80">
                <div ref={workListRef} className="space-y-4">
                  {featuredWork.map((item, index) => (
                    <a
                      key={item.title}
                      href={`/work/${item.slug}`}
                      className={`block p-4 rounded-lg transition-all duration-300 ${
                        index === activeWork 
                          ? 'bg-gray-900 text-white' 
                          : index < activeWork 
                            ? 'text-gray-400' 
                            : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <h3 
                        className="font-bold mb-1"
                        style={{
                          fontSize: 'clamp(1.875rem, 3vw + 0.5rem, 3.25rem)', // 30px to 52px
                          lineHeight: '1.1'
                        }}
                      >
                        {item.title}
                      </h3>
                      <span className="text-sm opacity-70">[{item.years}]</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile: Simple List */}
            <div className="desktop:hidden space-y-3">
              {featuredWork.map((item, index) => (
                <div key={item.title} className="border-b border-gray-200 pb-3">
                  <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                  <span className="text-sm text-gray-500">[{item.years}]</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Work Cards */}
          <div 
            ref={cardsRef}
            className="space-y-6 mobile:space-y-4 tablet:space-y-6 desktop:space-y-8 desktop:max-h-screen desktop:overflow-y-auto"
          >
            {featuredWork.map((item, index) => (
              <article
                key={item.title}
                className="work-card relative group cursor-pointer overflow-hidden rounded-xl"
                style={{ height: 'clamp(21.25rem, 25vw, 26.25rem)' }} // 340px mobile to 420px tablet
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const x = e.clientX - rect.left
                  const y = e.clientY - rect.top
                  e.currentTarget.style.setProperty('--x', `${x}px`)
                  e.currentTarget.style.setProperty('--y', `${y}px`)
                }}
              >
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center"
                  style={{ backgroundColor: item.cardBg }}
                >
                  <h3 
                    className="text-white font-bold text-center px-6"
                    style={{
                      fontSize: 'clamp(1.625rem, 3vw + 0.5rem, 2.75rem)', // 26px to 44px
                      lineHeight: '1.2'
                    }}
                  >
                    {item.result}
                  </h3>
                </div>

                {/* Hover Circle */}
                <div 
                  className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white rounded-full flex items-center justify-center pointer-events-none"
                  style={{
                    width: 'clamp(4.375rem, 6vw, 5.25rem)', // 70px mobile
                    height: 'clamp(4.375rem, 6vw, 5.25rem)',
                    left: 'var(--x, 50%)',
                    top: 'var(--y, 50%)',
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <svg 
                    className="w-6 h-6 text-gray-900" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Category Pill */}
                <div 
                  className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full flex items-center gap-2"
                  style={{
                    fontSize: 'clamp(0.6875rem, 1vw, 0.75rem)', // 11px
                    padding: 'clamp(0.4375rem, 1vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem)' // 7px 12px
                  }}
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                  <span>{item.category}</span>
                </div>

                {/* Mobile Title */}
                <div className="desktop:hidden absolute bottom-4 left-4 text-white">
                  <span className="text-sm opacity-80">[{item.years}]</span>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>

                {/* Link */}
                <a 
                  href={`/work/${item.slug}`} 
                  className="absolute inset-0 z-10"
                  aria-label={`View ${item.title} case study`}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWork