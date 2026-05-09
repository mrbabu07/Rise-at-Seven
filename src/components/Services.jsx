import { ArrowButton, ServiceLink } from './index.jsx'
import './Services.css'

export function Services({ services, featuredWork, heroImages }) {
  return (
    <section className="services-live section-pad" id="services">
      <div className="services-live__head" data-reveal>
        <h2>
          Our
          <img src="https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=aec6b230473b13e5be3032641e65eb8b" alt="" className="services-live__title-img" />
          Services
        </h2>
        <ArrowButton href="https://riseatseven.com/services/">View All Services</ArrowButton>
      </div>
      <div className="services-live__grid" data-reveal>
        {services.map((service, index) => {
          const bgImg = featuredWork[index]?.image || heroImages[0]
          return <ServiceLink key={service} image={bgImg}>{service}</ServiceLink>
        })}
      </div>
    </section>
  )
}
