import './Legacy.css'

const legacyImages = [
  {
    src: 'https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=c5a1a20dcf5c67ab2aeaf69095353d79',
    alt: 'Protest sign',
  },
  {
    src: 'https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=ff193da32959495c96e4b9c899031b7a',
    alt: 'Award-winning agency moment',
  },
  {
    src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=800&h=800&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=a7562fdfd13999772e4611553e537780',
    alt: 'Speed campaign result',
  },
]

const cardRotations = [3, -6, -10]
const cardOffsets = [0, 14, 28]

export function Legacy({ legacyCards, heroImages, legacyLiveRef, legacyCardsRefs }) {
  return (
    <section className="legacy-live section-pad" ref={legacyLiveRef}>
      <h2>
        Legacy
        In The Making
      </h2>
      <p className="legacy-mobile-title">Legacy In The Making</p>
      <div className="legacy-stack">
        {legacyCards.map((card, i) => {
          const zIndexes = [3, 2, 1]
          const image = legacyImages[i] || legacyImages[0]
          
          return (
            <article
              key={card.id}
              className="legacy-card-item"
              ref={(el) => (legacyCardsRefs.current[i] = el)}
              style={{
                backgroundColor: card.bg,
                color: card.color,
                zIndex: zIndexes[i] || 1,
                transform: `translateY(${cardOffsets[i] || 0}px) rotate(${cardRotations[i] || 0}deg)`,
              }}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              {card.sub && (
                <p>{card.sub}</p>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
