import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const News = () => {
  const sectionRef = useRef(null)

  const newsArticles = [
    {
      title: 'The Future of SEO: AI and Human Creativity',
      tag: 'SEO Strategy',
      author: 'Carrie Rose',
      authorImage: '/images/team/carrie-rose-thumb.svg',
      image: '/images/blog/coneys-demand-thumb.svg',
      url: '/blog/future-of-seo-ai-creativity',
      hoverText: 'Read Article'
    },
    {
      title: 'Content Marketing Trends for 2024',
      tag: 'Content',
      author: 'Ryan McNamara',
      authorImage: '/images/team/ryan-mcnamara-thumb.svg',
      image: '/images/blog/ryan-mcnamara-promotion-thumb.svg',
      url: '/blog/content-marketing-trends-2024',
      hoverText: 'Read Article'
    },
    {
      title: 'Social Media Algorithm Changes',
      tag: 'Social Media',
      author: 'Ray Saddiq',
      authorImage: '/images/team/ray-saddiq-thumb.svg',
      image: '/images/blog/noomz-demand-thumb.svg',
      url: '/blog/social-media-algorithm-changes',
      hoverText: 'Read Article'
    }
  ]

  useEffect(() => {
    // Animate news cards on scroll
    const cards = sectionRef.current?.querySelectorAll('.news-card')
    cards?.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%"
          }
        }
      )
    })
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="bg-white mobile:py-10 tablet:py-12 desktop:py-16"
      style={{ padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem)' }} // 40px 16px mobile
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col mobile:flex-col tablet:flex-row desktop:flex-row justify-between items-start mobile:items-center tablet:items-center desktop:items-center mb-12 mobile:mb-8 tablet:mb-10 desktop:mb-16 gap-6">
          <div>
            <p className="text-gray-600 font-medium mb-2">What's</p>
            <h2 
              className="font-display font-bold text-gray-900"
              style={{
                fontSize: 'clamp(2.25rem, 4vw + 1rem, 4.25rem)', // 36px to 68px
                lineHeight: '1.1'
              }}
            >
              New
            </h2>
          </div>
          
          <a 
            href="/blog" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors group"
          >
            Explore More Thoughts
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

        {/* News Grid */}
        <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 mobile:gap-4 tablet:gap-6 desktop:gap-8">
          {newsArticles.map((article, index) => (
            <a
              key={article.title}
              href={article.url}
              className="news-card group block bg-gray-50 rounded-xl overflow-hidden hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              style={{ gap: 'clamp(1.125rem, 2vw, 1.5rem)' }} // 18px gap
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                e.currentTarget.style.setProperty('--x', `${x}px`)
                e.currentTarget.style.setProperty('--y', `${y}px`)
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-video bg-gray-200 overflow-hidden">
                <img 
                  src={article.image} 
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Tag */}
                <div 
                  className="absolute top-3 left-3 bg-black/80 text-white px-2 py-1 rounded-full"
                  style={{ fontSize: 'clamp(0.625rem, 1vw, 0.75rem)' }} // 10px
                >
                  {article.tag}
                </div>

                {/* Hover Circle */}
                <div 
                  className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white rounded-full flex items-center justify-center pointer-events-none"
                  style={{
                    width: 'clamp(3.5rem, 5vw, 4rem)', // 56px mobile
                    height: 'clamp(3.5rem, 5vw, 4rem)',
                    left: 'var(--x, 50%)',
                    top: 'var(--y, 50%)',
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <svg 
                    className="w-5 h-5 text-gray-900" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 mobile:p-4 tablet:p-5 desktop:p-6">
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={article.authorImage} 
                    alt={article.author}
                    className="w-6 h-6 rounded-full"
                  />
                  <div className="flex items-center gap-2 text-gray-500">
                    <span style={{ fontSize: 'clamp(0.625rem, 1vw, 0.75rem)' }}> {/* 10px */}
                      {article.author}
                    </span>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span style={{ fontSize: 'clamp(0.625rem, 1vw, 0.75rem)' }}> {/* 10px */}
                      3 mins
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="font-bold text-gray-900 group-hover:text-gray-700 transition-colors leading-tight"
                  style={{ fontSize: 'clamp(1.0625rem, 2vw, 1.25rem)' }} // 17px
                >
                  {article.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News