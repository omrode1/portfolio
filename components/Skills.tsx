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
        { name: "C++", logo: "/images/tech-logos/cpp.png" },
        { name: "Bash", logo: "/images/tech-logos/bash.png" }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: "Frameworks",
      skills: [
        { name: "PyTorch", logo: "/images/tech-logos/pytorch.png" },
        { name: "TensorRT", logo: "/images/tech-logos/tensorrt.png" },
        { name: "FastAPI", logo: "/images/tech-logos/fastapi.png" },
        { name: "OpenCV", logo: "/images/tech-logos/opencv.png" },
        { name: "ROS2", logo: "/images/tech-logos/ros2.png" }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FiServer className="w-6 h-6" />,
      title: "DevOps",
      skills: [
        { name: "Docker", logo: "/images/tech-logos/docker.png" },
        { name: "Kubernetes", logo: "/images/tech-logos/kubernetes.png" },
        { name: "Git", logo: "/images/tech-logos/git.png" },
        { name: "Vercel", logo: "/images/tech-logos/vercel.png" },
        { name: "AWS", logo: "/images/tech-logos/aws.png" }
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <FiTool className="w-6 h-6" />,
      title: "Tools & Other",
      skills: [
        { name: "Kafka", logo: "/images/tech-logos/kafka.png" },
        { name: "Redis", logo: "/images/tech-logos/redis.png" },
        { name: "Prometheus", logo: "/images/tech-logos/prometheus.png" },
        { name: "Grafana", logo: "/images/tech-logos/grafana.png" },
        { name: "NVIDIA Jetson", logo: "/images/tech-logos/jetson.png" },
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
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} mb-4`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 text-gray-300 text-sm bg-gray-900/50 px-3 py-2 rounded-lg hover:bg-primary-600/20 hover:text-primary-300 transition-all duration-300"
                  >
                    <TechLogo 
                      name="" 
                      src={skill.logo} 
                      alt={`${skill.name} logo`} 
                      size={20}
                      className="flex-shrink-0"
                    />
                    <span className="truncate">{skill.name}</span>
                  </motion.div>
                ))}
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
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600/10 to-accent-600/10 border border-primary-500/20 rounded-xl p-8">
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
