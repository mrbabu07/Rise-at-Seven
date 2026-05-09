import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const ClientCarousel = () => {
  const clients = [
    { name: 'JD Sports', logo: '/images/logos/clients/jd-sports-logo.svg' },
    { name: 'Lloyds Pharmacy', logo: '/images/logos/clients/lloyds-pharmacy-logo.svg' },
    { name: 'PrettyLittleThing', logo: '/images/logos/clients/prettylittlething-logo.svg' },
    { name: 'Revolution Beauty', logo: '/images/logos/clients/revolution-beauty-logo.svg' },
    { name: 'Parkdean', logo: '/images/logos/clients/parkdean-logo.svg' },
    { name: 'Red Bull', logo: '/images/logos/clients/red-bull-logo.svg' },
    { name: 'Sixt', logo: '/images/logos/clients/sixt-logo.svg' },
    { name: 'Dojo', logo: '/images/logos/clients/dojo-logo.svg' },
  ]

  return (
    <section className="bg-gray-50 mobile:py-9 tablet:py-12 desktop:py-16">
      <div className="max-w-7xl mx-auto mobile:px-4 tablet:px-6 desktop:px-8">
        
        {/* Section Label */}
        <div className="text-center mb-8 mobile:mb-6 tablet:mb-8 desktop:mb-10">
          <p 
            className="text-gray-600 font-medium border-b border-gray-200 pb-3 mobile:pb-2 tablet:pb-3 desktop:pb-4 mobile:text-sm tablet:text-base desktop:text-lg"
            style={{ fontSize: 'clamp(0.875rem, 1vw, 1rem)' }} // 14px fluid
          >
            Trusted by Leading Brands
          </p>
        </div>

        {/* Desktop: Infinite Scroll Carousel */}
        <div className="desktop:block hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={60}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000}
            className="client-carousel"
          >
            {[...clients, ...clients].map((client, index) => (
              <SwiperSlide key={`${client.name}-${index}`} className="!w-auto">
                <div className="flex flex-col items-center gap-3">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-10 desktop:h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="text-gray-500 text-sm font-medium">
                    {client.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile & Tablet: Stacked Grid */}
        <div className="desktop:hidden">
          <div className="grid mobile:grid-cols-2 tablet:grid-cols-4 gap-8 mobile:gap-6 tablet:gap-8">
            {clients.slice(0, 8).map((client) => (
              <div key={client.name} className="flex flex-col items-center gap-3">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="mobile:h-9 tablet:h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{ height: 'clamp(2.375rem, 3vw, 2.5rem)' }} // 38px mobile
                />
                <span 
                  className="text-gray-500 font-medium text-center"
                  style={{ fontSize: 'clamp(0.8125rem, 1vw, 0.875rem)' }} // 13px mobile
                >
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .client-carousel .swiper-wrapper {
          transition-timing-function: linear;
        }
        
        .client-carousel:hover .swiper-wrapper {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default ClientCarousel