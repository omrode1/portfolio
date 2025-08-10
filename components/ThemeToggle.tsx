'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      // Default to light mode regardless of system preference
      setIsDark(false)
      document.documentElement.classList.remove('dark')
      // Ensure light mode is saved as preference
      if (!savedTheme) {
        localStorage.setItem('theme', 'light')
      }
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative w-14 h-7 rounded-full border transition-all duration-800 ease-in-out cursor-pointer overflow-hidden
        ${isDark 
          ? 'bg-slate-800 border-gray-300' 
          : 'bg-sky-400 border-gray-600'
        }
      `}
      aria-label="Toggle theme"
    >
      {/* Sun/Moon */}
      <motion.div
        className={`
          absolute w-5 h-5 rounded-full transition-all duration-800 ease-in-out
          ${isDark ? 'bg-gray-100' : 'bg-yellow-400'}
        `}
        animate={{
          x: isDark ? 32 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.8
        }}
        style={{
          top: '4px',
          left: '0px',
        }}
      />

      {/* Moon overlay (creates crescent) */}
      {isDark && (
        <motion.div
          className="absolute w-4 h-4 bg-slate-800 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            top: '5px',
            left: '30px',
            zIndex: 10,
          }}
        />
      )}

      {/* Cloud balls that transform to stars */}
      <motion.div
        className={`absolute w-1.5 h-1.5 rounded-full transition-all duration-800 ease-in-out ${
          isDark ? 'bg-white' : 'bg-white'
        }`}
        animate={{
          x: isDark ? 8 : 20,
          y: isDark ? 0 : 0,
          scale: isDark ? 0.5 : 1,
          opacity: isDark ? 1 : 0.8,
        }}
        transition={{ duration: 0.8 }}
        style={{
          top: '8px',
          left: '0px',
        }}
      />

      <motion.div
        className={`absolute w-1.5 h-1.5 rounded-full transition-all duration-800 ease-in-out ${
          isDark ? 'bg-white' : 'bg-white'
        }`}
        animate={{
          x: isDark ? 14 : 24,
          y: isDark ? 0 : 0,
          scale: isDark ? 0.5 : 1,
          opacity: isDark ? 1 : 0.8,
        }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{
          top: '12px',
          left: '0px',
        }}
      />

      <motion.div
        className={`absolute w-1.5 h-1.5 rounded-full transition-all duration-800 ease-in-out ${
          isDark ? 'bg-white' : 'bg-white'
        }`}
        animate={{
          x: isDark ? 20 : 28,
          y: isDark ? 0 : 0,
          scale: isDark ? 0.5 : 1,
          opacity: isDark ? 1 : 0.8,
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          top: '16px',
          left: '0px',
        }}
      />

      <motion.div
        className={`absolute w-1.5 h-1.5 rounded-full transition-all duration-800 ease-in-out ${
          isDark ? 'bg-white' : 'bg-white'
        }`}
        animate={{
          x: isDark ? 26 : 24,
          y: isDark ? 0 : 0,
          scale: isDark ? 0.5 : 1,
          opacity: isDark ? 1 : 0.8,
        }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          top: '4px',
          left: '0px',
        }}
      />

      {/* Additional stars that only appear in dark mode */}
      {isDark && (
        <>
          <motion.div
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{
              top: '6px',
              left: '6px',
            }}
          />
          <motion.div
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            style={{
              top: '20px',
              left: '10px',
            }}
          />
          <motion.div
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            style={{
              top: '10px',
              left: '18px',
            }}
          />
        </>
      )}
    </motion.button>
  )
}

export default ThemeToggle
