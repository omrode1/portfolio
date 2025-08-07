'use client'

import { motion } from 'framer-motion'
import { FiInstagram, FiCamera, FiVideo, FiEdit3, FiExternalLink } from 'react-icons/fi'

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

  // Placeholder Instagram posts - in a real implementation, you'd use Instagram Basic Display API
  const instagramPosts = [
    {
      id: 1,
      image: "/api/placeholder/300/300",
      caption: "Behind the scenes of a tech project shoot 📱✨",
      likes: 45,
      link: "https://www.instagram.com/om_rode.exe/"
    },
    {
      id: 2,
      image: "/api/placeholder/300/300",
      caption: "Experimenting with new camera angles 🎬",
      likes: 32,
      link: "https://www.instagram.com/om_rode.exe/"
    },
    {
      id: 3,
      image: "/api/placeholder/300/300",
      caption: "Pixel 6a capturing the perfect moment 📸",
      likes: 58,
      link: "https://www.instagram.com/om_rode.exe/"
    },
    {
      id: 4,
      image: "/api/placeholder/300/300",
      caption: "Late night editing session in Premiere Pro 🌙",
      likes: 41,
      link: "https://www.instagram.com/om_rode.exe/"
    }
  ]

  return (
    <section id="creative" className="section-padding bg-gray-800/50">
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
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {skill.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Equipment & Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-xl p-8 mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            My Creative Arsenal
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-medium text-purple-400 mb-3">Equipment</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Google Pixel 6a - Advanced computational photography
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Various lighting setups and accessories
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-pink-400 mb-3">Software</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Adobe Premiere Pro - Professional video editing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Advanced knowledge of cuts and camera angles
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Instagram Feed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Latest from <span className="text-pink-400">Instagram</span>
            </h3>
            <p className="text-gray-300">Follow my creative journey @om_rode.exe</p>
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
                className="group relative aspect-square bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-pink-500/50 transition-all duration-300"
              >
                {/* Placeholder for Instagram image */}
                <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                  <FiCamera className="w-12 h-12 text-gray-400 group-hover:text-pink-400 transition-colors duration-300" />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <FiInstagram className="w-6 h-6 mx-auto mb-2" />
                    <p className="text-sm font-medium">{post.likes} likes</p>
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
