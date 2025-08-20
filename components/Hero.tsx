'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { TextReveal } from './ScrollAnimations'
import MagneticButton from './MagneticButton'
import { useParallax, useTextReveal, useMagneticEffect } from './GSAPScrollTrigger'

const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // GSAP hooks
  const backgroundRef = useParallax(0.3)
  const titleRef = useTextReveal()
  const descriptionRef = useTextReveal()
  const buttonsRef = useMagneticEffect(0.2)

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-width relative z-10">
        <div className="text-center">
          <motion.div
            style={{ y, opacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Hi, I'm{" "}
              <motion.span 
                className="gradient-text inline-block"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Om Rode
              </motion.span>
            </motion.h1>
            
            <TextReveal 
              text="Computer Vision Engineer & ML Engineer"
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8"
            />
            
            <motion.p 
              ref={descriptionRef}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              From pixels to predictions — I make vision work.
            </motion.p>
          </motion.div>

          <motion.div
            ref={buttonsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <MagneticButton
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              Get In Touch
            </MagneticButton>
            <MagneticButton
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-blue-600 text-blue-400 px-8 py-3 rounded-lg font-medium hover:bg-blue-600/10 transition-all duration-300"
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="border border-green-600 text-green-400 px-8 py-3 rounded-lg font-medium hover:bg-green-600/10 transition-all duration-300"
            >
              View Resume
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/omrode1"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FiGithub size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/om-rode-b51520202/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FiLinkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:omrode.work@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
            >
              <FiMail size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-400 rounded-full flex justify-center cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-xs text-gray-400 mt-2 text-center"
        >
          Scroll to explore
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Hero
