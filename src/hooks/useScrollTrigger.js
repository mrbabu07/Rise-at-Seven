import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollTrigger = (animation, dependencies = []) => {
  const elementRef = useRef(null)

  useEffect(() => {
    if (elementRef.current && animation) {
      const trigger = animation(elementRef.current)
      
      return () => {
        if (trigger && trigger.kill) {
          trigger.kill()
        }
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === elementRef.current) {
            st.kill()
          }
        })
      }
    }
  }, dependencies)

  return elementRef
}

export const useFadeInUp = (delay = 0) => {
  return useScrollTrigger((element) => {
    return gsap.fromTo(element,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%"
        }
      }
    )
  }, [delay])
}

export const useStaggerAnimation = (childSelector = '.stagger-child', delay = 0.1) => {
  return useScrollTrigger((container) => {
    const children = container.querySelectorAll(childSelector)
    
    return gsap.fromTo(children,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 90%"
        }
      }
    )
  }, [childSelector, delay])
}

export const useParallax = (speed = 0.5) => {
  return useScrollTrigger((element) => {
    return gsap.fromTo(element,
      { y: '-10%' },
      {
        y: '10%',
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    )
  }, [speed])
}