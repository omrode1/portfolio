'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface TechLogoProps {
  name: string
  src: string
  alt: string
  size?: number
  className?: string
}

const TechLogo = ({ name, src, alt, size = 50, className = "" }: TechLogoProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`flex items-center justify-center p-2 ${className}`}
    >
      <div 
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-contain w-full h-full"
          loading="lazy"
          sizes={`${size}px`}
          style={{ objectFit: 'contain' }}
        />
      </div>
    </motion.div>
  )
}

export default TechLogo
