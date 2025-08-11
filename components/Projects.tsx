'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiCpu, FiCamera, FiZap } from 'react-icons/fi'
import TechLogo from './TechLogo'

const Projects = () => {
  // Tech logo mapping for projects
  const techLogoMap: { [key: string]: string } = {
    "Python": "/images/tech-logos/python.png",
    "PyTorch": "/images/tech-logos/pytorch.svg",
    "PyTorch Mobile": "/images/tech-logos/pytorch.svg",
    "OpenCV": "/images/tech-logos/opencv.svg",
    "YOLOv8": "/images/tech-logos/UltralyticsYOLO_full_blue.svg",
    "Kivy": "/images/tech-logos/kivy.png",
    "Android Studio": "/images/tech-logos/Android Studio.png",
    "DRL": "/images/tech-logos/drl.png",
    "DQN": "/images/tech-logos/dqn.png",
    "Stable Baselines3": "/images/tech-logos/stable-baselines3.png",
    "UAVs": "/images/tech-logos/uav.png",
    "ROS": "/images/tech-logos/ros2.svg",
    "SLAM": "/images/tech-logos/slam.png",
    "LiDAR": "/images/tech-logos/lidar.png",
    "Computer Vision": "/images/tech-logos/opencv.svg",
    "RTSP": "/images/tech-logos/rtsp.png",
    "Automation": "/images/tech-logos/automation.png",
    "Data Analysis": "/images/tech-logos/data-analysis.png",
    "Raspberry Pi": "/images/tech-logos/Raspberry Pi.png",
    "Visual Tracking": "/images/tech-logos/tracking.png",
    "GIS": "/images/tech-logos/gis.png",
    "Data Visualization": "/images/tech-logos/visualization.png",
    "Reporting": "/images/tech-logos/reporting.png",
    "Machine Learning": "/images/tech-logos/ml.png",
    "Deep Learning": "/images/tech-logos/dl.png",
    "3D Reconstruction": "/images/tech-logos/3d-reconstruction.png",
    "Transformers": "/images/tech-logos/transformers.png",
    "Stereo Vision": "/images/tech-logos/stereo-vision.png",
    "Image Processing": "/images/tech-logos/image-processing.png",
    "Pandas": "/images/tech-logos/Pandas.png",
    "Blender": "/images/tech-logos/Blender.png"
  };

  const projects = [
    {
      title: "ContextVision",
      description: "Mobile-based computer vision app that uses YOLOv8 and PyTorch Mobile to detect and describe surrounding objects in real time via Android interface. Designed for visually impaired assistance and context-aware applications.",
      tech: ["YOLOv8", "PyTorch", "Android Studio"],
      github: "https://github.com/omrode1/ContextVision",
      period: "April 2025 – Present",
      icon: <FiCamera className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      media: {
        images: [],
        videos: [],
        documents: []
      }
    },
    {
      title: "Operator Occupancy Detection",
      description: "Implemented a vision-based system to monitor operator presence, log entry/exit times, and generate efficiency reports via RTSP stream analysis.",
      tech: ["Python", "Computer Vision", "Pandas"],
      period: "January 2024 – June 2024",
      icon: <FiCamera className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      media: {
        images: [],
        videos: [],
        documents: []
      }
    },
    {
      title: "UAV Person Following",
      description: "Created algorithms enabling drones to detect, track, and follow individuals using onboard vision and path-planning systems.",
      tech: ["Computer Vision", "Python", "Raspberry Pi"],
      period: "December 2023 – June 2024",
      icon: <FiZap className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-500",
      media: {
        images: [],
        videos: [],
        documents: []
      }
    },
    {
      title: "ADAS Road Safety Analysis",
      description: "Analyzed Advanced Driver Assistance System alert data to identify accident-prone zones and road safety trends in Chennai.",
      tech: ["Python", "Pandas"],
      period: "August 2023 – September 2023",
      icon: <FiCpu className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-500",
      media: {
        images: [],
        videos: [],
        documents: ["/Intel_UGC_Summer2023.pdf"]
      }
    },
    {
      title: "Foreign Object Detection – Intel Unnati Challenge",
      description: "Built a prototype to detect debris on airport runways in real time using OpenCV, improving runway safety.",
      tech: ["Python", "OpenCV", "YOLOv8"],
      period: "October 2022 – January 2023",
      icon: <FiCamera className="w-6 h-6" />,
      gradient: "from-red-500 to-pink-500",
      media: {
        images: [],
        videos: [],
        documents: []
      }
    },
    {
      title: "Multi-View 3D Face Reconstruction",
      description: "Designed a learning-based pipeline to generate textured 3D face meshes from 3–4 RGB images taken from fixed viewpoints.",
      tech: ["Blender", "Python"],
      period: "February 2025 – Present",
      github: "https://github.com/omrode1/3d_face_recon",
      icon: <FiCpu className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-500",
      media: {
        images: [],
        videos: [],
        documents: []
      }
    },
    {
      title: "Monocular Depth Estimation",
      description: "Implemented monocular depth prediction using the Monodepth2 architecture in PyTorch for dense scene understanding from single images.",
      tech: ["PyTorch", "OpenCV"],
      period: "May 2025 – Present",
      github: "https://github.com/omrode1/monocular_depth_estimation_v1",
      icon: <FiCamera className="w-6 h-6" />,
      gradient: "from-emerald-500 to-teal-500",
      media: {
        images: [],
        videos: [],
        documents: []
      }
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-100/50 dark:bg-gray-800/50 relative z-10">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="h-full"
            >
              <div className="bg-gray-900/50 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 overflow-hidden group h-full backdrop-blur-sm hover:shadow-lg hover:shadow-primary-500/10">
                <div className="p-4 md:p-6">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.gradient} mb-4`}>
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {project.period && (
                    <div className="mb-4">
                      <span className="text-xs md:text-sm bg-blue-600/20 text-blue-300 px-2 md:px-3 py-1 rounded-full">
                        {project.period}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">Technologies Used:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                      {project.tech.map((tech, techIndex) => {
                        const logoPath = techLogoMap[tech];
                        return (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center group/tech"
                          >
                            <div className="bg-gray-800/70 p-2 md:p-3 rounded-lg border border-gray-700 hover:border-primary-500/50 transition-all duration-300">
                              {logoPath ? (
                                <TechLogo 
                                  name="" 
                                  src={logoPath} 
                                  alt={`${tech} logo`} 
                                  size={32}
                                  className="flex-shrink-0"
                                />
                              ) : (
                                <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-600 rounded flex-shrink-0"></div>
                              )}
                            </div>
                            
                            {/* Label */}
                            <span className="text-xs text-gray-600 dark:text-gray-400 text-center mt-2 font-medium line-clamp-2">
                              {tech}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Media Section */}
                  {(project.media?.images?.length > 0 || project.media?.videos?.length > 0 || project.media?.documents?.length > 0) && (
                    <div className="mb-6">
                      <h4 className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">Media & Documents:</h4>
                      
                      {/* Images */}
                      {project.media?.images?.length > 0 && (
                        <div className="mb-3">
                          <h5 className="text-xs text-gray-500 dark:text-gray-500 mb-2">Images:</h5>
                          <div className="grid grid-cols-2 gap-2">
                            {project.media?.images?.map((image, imgIndex) => (
                              <motion.div
                                key={imgIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: imgIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="relative group"
                              >
                                <img
                                  src={image}
                                  alt={`${project.title} image ${imgIndex + 1}`}
                                  className="w-full h-20 object-cover rounded-lg border border-gray-700 hover:border-primary-500/50 transition-all duration-300 cursor-pointer"
                                  onClick={() => window.open(image, '_blank')}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-medium">
                                    Click to view
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Videos */}
                      {project.media?.videos?.length > 0 && (
                        <div className="mb-3">
                          <h5 className="text-xs text-gray-500 dark:text-gray-500 mb-2">Videos:</h5>
                          <div className="space-y-2">
                            {project.media?.videos?.map((video, vidIndex) => (
                              <motion.div
                                key={vidIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: vidIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="relative group"
                              >
                                <video
                                  src={video}
                                  controls
                                  className="w-full h-24 object-cover rounded-lg border border-gray-700 hover:border-primary-500/50 transition-all duration-300"
                                  preload="metadata"
                                />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Documents */}
                      {project.media?.documents?.length > 0 && (
                        <div className="mb-3">
                          <h5 className="text-xs text-gray-500 dark:text-gray-500 mb-2">Documents:</h5>
                          <div className="space-y-2">
                            {project.media?.documents?.map((document, docIndex) => (
                              <motion.div
                                key={docIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: docIndex * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <motion.a
                                  href={document}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="flex items-center space-x-2 bg-gray-800/70 hover:bg-gray-700/70 border border-gray-700 hover:border-primary-500/50 rounded-lg px-3 py-2 transition-all duration-300 group"
                                >
                                  <div className="w-8 h-8 bg-red-600/20 rounded flex items-center justify-center">
                                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                    </svg>
                                  </div>
                                  <span className="text-xs text-gray-300 group-hover:text-white transition-colors duration-300">
                                    {document.split('/').pop()?.replace(/\.[^/.]+$/, '') || 'Document'}
                                  </span>
                                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                  </div>
                                </motion.a>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="flex space-x-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                      >
                        <FiGithub size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mt-8 md:mt-12"
        >
          <motion.a
            href="https://github.com/omrode1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 text-sm md:text-base"
          >
            <FiGithub size={18} />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
