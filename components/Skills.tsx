'use client'

import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiServer, FiTool } from 'react-icons/fi'
import TechLogo from './TechLogo'

const Skills = () => {
  const skillCategories = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Languages",
      skills: [
        { name: "Python", logo: "/images/tech-logos/python.png" },
        { name: "C++", logo: "/images/tech-logos/cpp.svg" },
        { name: "Bash", logo: "/images/tech-logos/bash.svg" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: "Frameworks",
      skills: [
        { name: "PyTorch", logo: "/images/tech-logos/pytorch.svg" },
        { name: "TensorRT", logo: "/images/tech-logos/tensorrt.png" },
        { name: "FastAPI", logo: "/images/tech-logos/fastapi.png" },
        { name: "OpenCV", logo: "/images/tech-logos/opencv.svg" },
        { name: "ROS2", logo: "/images/tech-logos/ros2.svg" }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FiServer className="w-6 h-6" />,
      title: "DevOps",
      skills: [
        { name: "Docker", logo: "/images/tech-logos/docker.png" },
        { name: "Kubernetes", logo: "/images/tech-logos/kubernetes.svg" },
        { name: "Git", logo: "/images/tech-logos/git.png" },
        { name: "Vercel", logo: "/images/tech-logos/vercel.svg" },
        { name: "AWS", logo: "/images/tech-logos/aws.svg" }
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <FiTool className="w-6 h-6" />,
      title: "Tools & Other",
      skills: [
        { name: "Redis", logo: "/images/tech-logos/redis.svg" },
        { name: "Prometheus", logo: "/images/tech-logos/prometheus.svg" },
        { name: "Grafana", logo: "/images/tech-logos/grafana.svg" },
        { name: "NVIDIA Jetson", logo: "/images/tech-logos/jetson.svg" },
        { name: "Embedded C", logo: "/images/tech-logos/embedded.png" }
      ],
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            Specializing in AI, Computer Vision, DevOps, and Embedded Systems
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.color} mb-6 shadow-lg`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-6">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center group/skill"
                    >
                      <div className="relative">
                        <motion.div
                          whileHover={{ 
                            scale: 1.1,
                            boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)"
                          }}
                          className="bg-gray-900/70 p-4 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 cursor-pointer"
                        >
                          <TechLogo 
                            name="" 
                            src={skill.logo} 
                            alt={`${skill.name} logo`} 
                            size={48}
                            className="flex-shrink-0"
                          />
                        </motion.div>
                        
                        {/* Tooltip */}
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap border border-gray-700">
                            {skill.name}
                          </div>
                        </div>
                      </div>
                      
                      {/* Label */}
                      <span className="text-xs text-gray-400 text-center mt-3 font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600/10 to-accent-600/10 border border-primary-500/20 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Specialized In
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              <span className="text-primary-400 font-medium">RTSP-based systems</span> • 
              <span className="text-accent-400 font-medium"> YOLO-based custom training</span> • 
              <span className="text-primary-400 font-medium"> CUDA optimization</span> • 
              <span className="text-accent-400 font-medium"> Multi-threaded applications</span> • 
              <span className="text-primary-400 font-medium"> Jetson deployment</span> • 
              <span className="text-accent-400 font-medium"> Model quantization</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
