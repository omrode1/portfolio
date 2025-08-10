'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiInstagram, FiCamera, FiVideo, FiEdit3, FiExternalLink } from 'react-icons/fi'
import { instagramPosts } from '@/data/social-posts'

const Creative = () => {
  const filmingSkills = [
    {
      icon: <FiCamera className="w-6 h-6" />,
      title: "Mobile Photography",
      description: "Capturing stunning visuals with Pixel 6a's advanced camera system",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <FiVideo className="w-6 h-6" />,
      title: "Videography",
      description: "Creating engaging content with knowledge of camera angles and composition",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <FiEdit3 className="w-6 h-6" />,
      title: "Video Editing",
      description: "Post-production expertise using Adobe Premiere Pro for professional cuts",
      color: "from-blue-500 to-cyan-500"
    }
  ]



  return (
    <section id="creative" className="section-padding bg-gray-100/50 dark:bg-gray-800/50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Creative <span className="gradient-text">Side</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Beyond code and algorithms, I love capturing moments and creating visual stories through photography and videography
          </p>
        </motion.div>

        {/* Filming Skills */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {filmingSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4`}>
                <div className="text-white">
                  {skill.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {skill.title}
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>



        {/* Instagram Feed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Latest from <span className="text-pink-600 dark:text-pink-400">Instagram</span>
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Follow my creative journey @om_rode.exe</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {instagramPosts.map((post, index) => (
              <motion.a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative aspect-square bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-300 dark:border-gray-700 hover:border-pink-500/50 transition-all duration-300"
              >
                {/* Real Instagram image */}
                <Image
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <FiInstagram className="w-6 h-6 mx-auto mb-2" />
                    <p className="text-sm font-medium mb-1">{post.likes} likes</p>
                    <p className="text-xs text-gray-200 line-clamp-2">{post.caption}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <motion.a
              href="https://www.instagram.com/om_rode.exe/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
            >
              <FiInstagram size={20} />
              <span>Follow @om_rode.exe</span>
              <FiExternalLink size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Creative
