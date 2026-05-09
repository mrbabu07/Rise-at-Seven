import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Animation utilities for consistent effects across components
export const fadeInUp = (element, delay = 0) => {
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
}

export const scaleIn = (element, delay = 0) => {
  return gsap.fromTo(element,
    { scale: 0.8, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      delay,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: element,
        start: "top 90%"
      }
    }
  )
}

export const slideInLeft = (element, delay = 0) => {
  return gsap.fromTo(element,
    { x: -100, opacity: 0 },
    {
      x: 0,
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
}

export const slideInRight = (element, delay = 0) => {
  return gsap.fromTo(element,
    { x: 100, opacity: 0 },
    {
      x: 0,
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
}

export const staggerChildren = (container, childSelector = '.stagger-child', delay = 0.1) => {
  const children = container.querySelectorAll(childSelector)
  
  children.forEach((child, index) => {
    gsap.fromTo(child,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: index * delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: child,
          start: "top 90%"
        }
      }
    )
  })
}

export const parallaxImage = (image, speed = 0.5) => {
  return gsap.fromTo(image,
    { y: '-10%', scale: 1.1 },
    {
      y: '10%',
      scale: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: image.closest('.parallax-container') || image,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    }
  )
}

export const hoverLift = (element, liftAmount = -8) => {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, { y: liftAmount, duration: 0.3, ease: 'power2.out' })
  })
  
  element.addEventListener('mouseleave', () => {
    gsap.to(element, { y: 0, duration: 0.3, ease: 'power2.out' })
  })
}

export const magneticEffect = (element, strength = 0.3) => {
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: 'power2.out'
    })
  })
  
  element.addEventListener('mouseleave', () => {
    gsap.to(element, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' })
  })
}

export const textReveal = (element) => {
  const text = element.textContent
  element.innerHTML = text.split('').map(char => 
    `<span class="char" style="display: inline-block; opacity: 0; transform: translateY(50px);">${char === ' ' ? '&nbsp;' : char}</span>`
  ).join('')
  
  const chars = element.querySelectorAll('.char')
  
  return gsap.to(chars, {
    opacity: 1,
    y: 0,
    duration: 0.05,
    stagger: 0.02,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 85%'
    }
  })
}