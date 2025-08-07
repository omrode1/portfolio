'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCpu, FiCamera, FiZap } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: "RTSP YOLO API",
      description: "A scalable API pipeline to consume RTSP streams and run YOLO-based detection with multi-threaded performance. Includes recording functionality for person-specific clips with pre/post buffers.",
      tech: ["PyTorch", "OpenCV", "FastAPI", "ffmpeg"],
      github: "https://github.com/omrode1/rtsp_yolo_api",
      icon: <FiCamera className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "LPG Cylinder Bottom Classification",
      description: "Custom-trained EfficientNet-B5 model to classify LPG cylinder conditions into four classes: 'good', 'ring bent', 'ring cut', and 'rust'. Optimized for real-time edge inference using ONNX and TensorRT.",
      tech: ["PyTorch", "TensorRT", "ONNX", "Jetson Xavier"],
      deployment: "Deployed on Jetson Xavier",
      icon: <FiCpu className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "BEV Perception Pipeline",
      description: "Worked on transforming camera feeds into Bird's Eye View projections using homography-based mapping and stitching, integrated into real-time monitoring pipelines.",
      tech: ["OpenCV", "Python", "Homography", "Real-time Processing"],
      application: "Industrial automation and safety",
      icon: <FiZap className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Sub-50g Drone Flight Controller",
      description: "Designed a custom lightweight flight controller for a micro drone with focus on hardware design, embedded C programming, and IMU integration.",
      tech: ["Embedded C", "IMU", "Hardware Design", "Flight Control"],
      icon: <FiZap className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "AI Incident Response Dashboard",
      description: "End-to-end system for real-time log ingestion, AI anomaly detection, and automated system recovery visualized via a React-D3 dashboard.",
      tech: ["Kafka", "FastAPI", "PyTorch", "React", "Docker", "AWS"],
      status: "In Progress",
      icon: <FiCpu className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-800/50">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-900/50 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.gradient} mb-4`}>
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.deployment && (
                  <div className="mb-4">
                    <span className="text-sm bg-green-600/20 text-green-300 px-3 py-1 rounded-full">
                      {project.deployment}
                    </span>
                  </div>
                )}

                {project.application && (
                  <div className="mb-4">
                    <span className="text-sm text-accent-300 font-medium">
                      Application: {project.application}
                    </span>
                  </div>
                )}

                {project.status && (
                  <div className="mb-4">
                    <span className="text-sm bg-yellow-600/20 text-yellow-300 px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      <FiGithub size={20} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/omrode1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
          >
            <FiGithub size={20} />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
