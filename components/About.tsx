'use client'

import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiZap } from 'react-icons/fi'

const About = () => {
  const highlights = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "ML Pipeline Expert",
      description: "Designing and deploying scalable ML pipelines for real-world automation"
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: "Computer Vision",
      description: "YOLO-based custom training, RTSP systems, and edge deployment optimization"
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "CUDA acceleration, TensorRT optimization, and multi-threaded applications"
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-800/50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
  I’m a Computer Vision Engineer at <span className="text-blue-400 font-medium">Quantic Tech Analysis</span>, 
  where I design and deploy ML pipelines for object detection and anomaly tracking in real-time RTSP video streams.
</p>

<p className="text-lg text-gray-300 mb-6 leading-relaxed">
  Previously, I was a Robotics Intern at <span className="text-blue-400 font-medium">Solar Industries India Ltd.</span> 
  and served as Team Captain of <span className="text-purple-400 font-medium">Formula Ashwariders</span> in Formula Student, 
  leading electronics and data acquisition while managing a 27-member team.
</p>

<p className="text-lg text-gray-300 mb-8 leading-relaxed">
  My expertise includes YOLO-based custom training, CUDA optimization, multi-threaded Python development, 
  and robust RTSP-based deployments. I focus on building production-ready AI systems that move seamlessly 
  from prototype to real-world automation.
</p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
