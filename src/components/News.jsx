import { ArrowButton } from './index.jsx'
import './News.css'

const titleImage =
  'https://rise-atseven.transforms.svdcdn.com/production/images/FOS25-3380.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846499&s=8c1a07d60970e114e350dc38945f6bad'

export function News({ news }) {
  return (
    <section className="news section-pad" id="blog">
      <div className="section-head" data-reveal>
        <div className="title-block">
          <h2>
            <span className="news-title">
              What's
              <img src={titleImage} alt="" className="news-title__image" loading="lazy" />
              New
            </span>
          </h2>
        </div>
        <ArrowButton href="https://riseatseven.com/blog/">Explore More Thoughts</ArrowButton>
      </div>
      <div className="news-grid">
        {news.map((post) => (
          <a 
            key={post.title} 
            className="news-card" 
            href={post.url} 
            data-reveal
          >
            <div 
              className="news-card__image-wrap"
              onPointerMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty('--x', `${x}px`);
                e.currentTarget.style.setProperty('--y', `${y}px`);
              }}
            >
              {post.image && <img src={post.image} alt="" className="news-card__bg" />}
              
              <div className="news-card__content">
                <span className="news-card__tag">{post.tag}</span>
              </div>

              {post.hoverText === 'Read Article' ? (
                <div className="news-card__hover-circle">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              ) : (
                <div className="news-card__hover-pill">
                  <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
                  <span>{post.hoverText}</span>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '4px'}}>
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              )}
            </div>

            <div className="news-card__meta">
              <div className="news-card__bottom">
                {post.authorImage && <img src={post.authorImage} alt="" className="news-card__author-img" />}
                <small>{post.author} <i className="fa-regular fa-clock" aria-hidden="true" /> 3 mins</small>
              </div>
              <h3>{post.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
