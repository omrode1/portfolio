'use client'

import { motion } from 'framer-motion'
import { ReactNode, useRef, useState } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  magneticStrength?: number
  [key: string]: any
}

const MagneticButton = ({ 
  children, 
  className = "", 
  magneticStrength = 0.2,
  ...props 
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    const deltaX = clientX - centerX
    const deltaY = clientY - centerY
    
    setPosition({
      x: deltaX * magneticStrength,
      y: deltaY * magneticStrength
    })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      <motion.div
        className="relative z-10"
        animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
      >
        {children}
      </motion.div>
      
      {/* Hover effect background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}

export default MagneticButton
