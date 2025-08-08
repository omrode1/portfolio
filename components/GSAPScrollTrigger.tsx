'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGSAPScrollTrigger = () => {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return elementRef
}

// Parallax effect hook
export const useParallax = <T extends HTMLElement = HTMLDivElement>(speed: number = 0.5) => {
  const elementRef = useRef<T>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })

    tl.to(element, {
      y: (i, target) => -target.offsetHeight * speed,
      ease: 'none'
    })

    return () => {
      tl.kill()
    }
  }, [speed])

  return elementRef
}

// Stagger reveal hook
export const useStaggerReveal = <T extends HTMLElement = HTMLDivElement>(stagger: number = 0.1, direction: 'up' | 'down' | 'left' | 'right' = 'up') => {
  const containerRef = useRef<T>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const elements = container.children
    const yOffset = direction === 'up' ? 50 : direction === 'down' ? -50 : 0
    const xOffset = direction === 'left' ? 50 : direction === 'right' ? -50 : 0

    gsap.set(elements, { 
      opacity: 0, 
      y: yOffset, 
      x: xOffset 
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    tl.to(elements, {
      opacity: 1,
      y: 0,
      x: 0,
      duration: 0.8,
      stagger: stagger,
      ease: 'power2.out'
    })

    return () => {
      tl.kill()
    }
  }, [stagger, direction])

  return containerRef
}

// Text reveal hook
export const useTextReveal = <T extends HTMLElement = HTMLHeadingElement>() => {
  const textRef = useRef<T>(null)

  useEffect(() => {
    const text = textRef.current
    if (!text) return

    const chars = text.textContent?.split('') || []
    text.innerHTML = chars.map(char => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`).join('')

    gsap.set('.char', { opacity: 0, y: 50 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: text,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    tl.to('.char', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.03,
      ease: 'power2.out'
    })

    return () => {
      tl.kill()
    }
  }, [])

  return textRef
}

// Scale on scroll hook
export const useScaleOnScroll = <T extends HTMLElement = HTMLDivElement>(scale: number = 1.1) => {
  const elementRef = useRef<T>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })

    tl.to(element, {
      scale: scale,
      ease: 'none'
    })

    return () => {
      tl.kill()
    }
  }, [scale])

  return elementRef
}

// Magnetic effect hook
export const useMagneticEffect = <T extends HTMLElement = HTMLDivElement>(strength: number = 0.3) => {
  const elementRef = useRef<T>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength])

  return elementRef
} 