'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiInstagram, FiExternalLink } from 'react-icons/fi'

const Instagram = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "/images/instagram-posts/PXL_20250720_110557084.jpg",
      caption: "AI Engineer journey in Computer Vision",
      link: "https://www.instagram.com/om_rode.exe/"
    },
    {
      id: 2,
      image: "/images/instagram-posts/PXL_20250318_082919545~2.jpg",
      caption: "Working on MLOps and model deployment",
      link: "https://www.instagram.com/om_rode.exe/"
    },
    {
      id: 3,
      image: "/images/instagram-posts/PXL_20241102_192838224.jpg",
      caption: "Robotics and autonomous systems",
      link: "https://www.instagram.com/om_rode.exe/"
    },
    {
      id: 4,
      image: "/images/instagram-posts/original_e6d8187e-6615-4afd-8027-ba8c4ca03906_PXL_20250115_083743856~2.jpg",
      caption: "Computer Vision projects and innovations",
      link: "https://www.instagram.com/om_rode.exe/"
    }
  ]

  return (
    <section id="instagram" className="section-padding bg-gray-50/50 dark:bg-gray-800/50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Instagram <span className="gradient-text">Posts</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
          {/* <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Follow my journey in AI, Computer Vision, and Robotics
          </p> */}
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 hover:border-pink-500/50 dark:hover:border-pink-400/50 transition-all duration-300 block"
            >
              {/* Image */}
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <FiInstagram className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm font-medium">{post.caption}</p>
                  </div>
                </div>

                {/* Instagram Icon */}
                <div className="absolute top-3 right-3">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded-full">
                    <FiInstagram className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://www.instagram.com/om_rode.exe/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FiInstagram className="w-5 h-5" />
            Follow on Instagram
            <FiExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Instagram
