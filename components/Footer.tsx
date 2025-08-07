'use client'

import { motion } from 'framer-motion'
import { FiHeart, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <FiGithub className="w-5 h-5" />,
      href: "https://github.com/omrode1",
      label: "GitHub"
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/om-rode",
      label: "LinkedIn"
    },
    {
      icon: <FiMail className="w-5 h-5" />,
      href: "mailto:omrode1@gmail.com",
      label: "Email"
    }
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container-width px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Name and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <h3 className="text-xl font-bold gradient-text mb-2">
              Om Rode
            </h3>
            <p className="text-gray-400 text-sm">
              Computer Vision Engineer & ML Engineer
            </p>
          </motion.div>

          {/* Center - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-6 md:mb-0"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Right side - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
              Made with <FiHeart className="w-4 h-4 text-red-500 mx-1" /> by Om Rode
            </p>
            <p className="text-gray-500 text-xs mt-1">
              © {currentYear} All rights reserved
            </p>
          </motion.div>
        </div>

        {/* Bottom section - Tech stack used */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-xs">
            Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
