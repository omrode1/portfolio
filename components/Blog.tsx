'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiExternalLink, FiLinkedin, FiCalendar, FiTag } from 'react-icons/fi'
import { linkedinPosts } from '@/data/social-posts'

const Blog = () => {

  return (
    <section id="blog" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recent <span className="gradient-text">Posts</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          {/* <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Sharing insights on Computer Vision, Machine Learning, and emerging technologies
          </p> */}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {linkedinPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group"
            >
              {/* Post Image */}
              {post.image && (
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-blue-600/90 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <FiTag className="w-3 h-3 mr-1" />
                      {post.category}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-600/20 rounded-lg mr-3">
                      <FiLinkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <FiCalendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {post.engagement}
                  </span>
                  <motion.a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    <FiExternalLink size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="https://www.linkedin.com/in/om-rode-b51520202/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
          >
            <FiLinkedin size={20} />
            <span>View All Posts on LinkedIn</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
