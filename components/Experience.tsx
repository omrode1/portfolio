'use client'

import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      title: "Computer Vision Engineer",
      company: "Quantic Tech Analysis",
      period: "July 2024 – Present",
      location: "Remote",
      description: [
        "Developed ML pipelines for object detection and anomaly tracking in RTSP video environments",
        "Deployed models on Jetson devices with quantization and CUDA acceleration",
        "Optimized real-time video processing systems for industrial automation"
      ],
      current: true
    },
    {
      title: "Robotics Intern",
      company: "Solar Industries India Ltd.",
      period: "2023",
      location: "India",
      description: [
        "Worked on robotics automation systems for industrial applications",
        "Developed embedded systems for autonomous operations",
        "Collaborated on safety and monitoring systems"
      ],
      current: false
    },
    {
      title: "Team Captain - Electronics & Data Acquisition",
      company: "Ashwariders (Formula Student Team)",
      period: "2022 - 2023",
      location: "India",
      description: [
        "Led the Formula Student team focusing on electronics and data acquisition systems",
        "Designed and implemented telemetry systems for race car performance monitoring",
        "Managed cross-functional team coordination and project timelines"
      ],
      current: false
    }
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-24 bg-gradient-to-b from-primary-500 to-accent-500"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Timeline Dot */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  exp.current 
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500' 
                    : 'bg-gray-700 border-2 border-gray-600'
                }`}>
                  <FiBriefcase className={`w-5 h-5 ${exp.current ? 'text-white' : 'text-gray-400'}`} />
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-primary-500/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg text-primary-400 font-medium">
                        {exp.company}
                      </h4>
                    </div>
                    
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-400 text-sm mb-1">
                        <FiCalendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-400 text-sm">
                        <FiMapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {exp.current && (
                    <div className="mb-4">
                      <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">
                        Current Position
                      </span>
                    </div>
                  )}

                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (itemIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="text-gray-300 flex items-start"
                      >
                        <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
