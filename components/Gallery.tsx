'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiZoomIn, FiExternalLink } from 'react-icons/fi'

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "RTSP YOLO Detection in Action",
      category: "Technical",
      description: "Real-time object detection pipeline processing RTSP video streams",
      image: "/api/placeholder/400/300",
      type: "project"
    },
    {
      id: 2,
      title: "Jetson Xavier Deployment Setup",
      category: "Hardware",
      description: "Edge deployment configuration for ML model optimization",
      image: "/api/placeholder/400/300",
      type: "project"
    },
    {
      id: 3,
      title: "Formula Student Team Leadership",
      category: "Professional",
      description: "Leading the Ashwariders team as Captain, focusing on electronics",
      image: "/api/placeholder/400/300",
      type: "experience"
    },
    {
      id: 4,
      title: "Development Workspace",
      category: "Behind the Scenes",
      description: "My coding environment where the magic happens",
      image: "/api/placeholder/400/300",
      type: "personal"
    },
    {
      id: 5,
      title: "Pixel 6a Photography Session",
      category: "Creative",
      description: "Capturing moments with computational photography",
      image: "/images/gallery/PXL_20250720_110557084.jpg",
      type: "creative"
    },
    {
      id: 6,
      title: "Creative Tech Photography",
      category: "Creative", 
      description: "Where engineering meets art - creative perspective",
      image: "/images/gallery/PXL_20241102_192838224.jpg",
      type: "creative"
    }
  ]

  const categories = ["All", "Technical", "Creative", "Professional", "Behind the Scenes"]

  return (
    <section id="gallery" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visual <span className="gradient-text">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            A glimpse into my work, projects, and creative journey through images
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                {item.image.includes('PXL_') ? (
                  /* Real image */
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  /* Placeholder for missing images */
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center mb-3 mx-auto">
                        <FiZoomIn className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-400">Image Placeholder</p>
                    </div>
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300"
                  >
                    <FiZoomIn size={20} />
                  </motion.button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Suggested Photos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            📸 Photo Suggestions for Your Portfolio
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h4 className="text-blue-400 font-medium mb-2">Professional</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Headshot/professional portrait</li>
                <li>• Workspace/development setup</li>
                <li>• Speaking at events</li>
                <li>• Team photos from work</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h4 className="text-purple-400 font-medium mb-2">Technical</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• RTSP YOLO API screenshots</li>
                <li>• Jetson Xavier deployment</li>
                <li>• Code snippets/terminal</li>
                <li>• Hardware setups</li>
              </ul>
            </div>
            
            <div className="bg-gray-800/30 p-4 rounded-lg">
              <h4 className="text-pink-400 font-medium mb-2">Creative</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Pixel 6a filming setup</li>
                <li>• Premiere Pro workspace</li>
                <li>• Behind-the-scenes shots</li>
                <li>• Your photography work</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
