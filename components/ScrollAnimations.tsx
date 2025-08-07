'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

// Floating geometric shapes animation
export const FloatingShapes = () => {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50])
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating Circle */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating Triangle */}
      <motion.div
        style={{ 
          y: y2,
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
        className="absolute top-40 left-10 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-lg"
        animate={{
          scale: [1, 0.8, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating Square */}
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-40 right-20 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg blur-lg"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 45, 90, 135, 180],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}

// Scroll progress indicator
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 origin-left z-50"
      style={{ scaleX }}
    />
  )
}

// Mouse follower effect
export const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    
    window.addEventListener('mousemove', handleMouseMove)
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <motion.div
      className="fixed pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 2 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28
      }}
    >
      <div className="w-8 h-8 bg-white rounded-full opacity-50" />
    </motion.div>
  )
}

// Parallax container for sections
export const ParallaxSection = ({ 
  children, 
  speed = 0.5,
  className = ""
}: { 
  children: React.ReactNode
  speed?: number
  className?: string
}) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed])

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

// Stagger container for animating lists
export const StaggerContainer = ({ 
  children,
  staggerDelay = 0.1,
  className = ""
}: {
  children: React.ReactNode
  staggerDelay?: number
  className?: string
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Reveal animation for individual items
export const RevealItem = ({ 
  children,
  direction = "up",
  delay = 0,
  className = ""
}: {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  className?: string
}) => {
  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 }
  }

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          ...directionOffset[direction]
        },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration: 0.6,
            delay,
            ease: "easeOut"
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Text reveal animation
export const TextReveal = ({ 
  text,
  className = ""
}: {
  text: string
  className?: string
}) => {
  const words = text.split(" ")

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.5,
                delay: i * 0.1
              }
            }
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
