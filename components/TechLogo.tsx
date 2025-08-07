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

const TechLogo = ({ name, src, alt, size = 32, className = "" }: TechLogoProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`flex flex-col items-center space-y-2 p-2 ${className}`}
    >
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-contain"
          loading="lazy"
        />
      </div>
      <span className="text-xs text-gray-400 text-center">{name}</span>
    </motion.div>
  )
}

export default TechLogo
