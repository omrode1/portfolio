'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCpu, FiCamera, FiZap } from 'react-icons/fi'
import Card3D from './Card3D'
import { StaggerContainer, RevealItem } from './ScrollAnimations'
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
      title: "AI Chess Engine – Deep RL",
      description: "Built and trained a chess-playing AI agent using Deep Reinforcement Learning with DQN, custom reward shaping, and curriculum learning in Stable Baselines3.",
      tech: ["Python"],
      github: "https://github.com/omrode1/Chess-Engine-RL",
      period: "March 2025 – Present",
      icon: <FiCpu className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      media: {
        images: [],
        videos: [],
        documents: []
      }
    },
    {
      title: "UAV Obstacle Avoidance",
      description: "Developed a camera and LiDAR-based system for drones to autonomously detect and avoid obstacles, ensuring safe and efficient flight paths.",
      tech: ["ROS", "Python", "Computer Vision"],
      period: "December 2023 – June 2024",
      icon: <FiZap className="w-6 h-6" />,
      gradient: "from-green-500 to-teal-500",
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
        documents: []
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
    <section id="projects" className="section-padding bg-gray-100/50 dark:bg-gray-800/50">
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

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <RevealItem key={index} direction="up" delay={index * 0.1}>
              <Card3D className="h-full">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-gray-900/50 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 overflow-hidden group h-full backdrop-blur-sm"
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

                {project.period && (
                  <div className="mb-4">
                    <span className="text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full">
                      {project.period}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Technologies Used:</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {project.tech.map((tech, techIndex) => {
                      const logoPath = techLogoMap[tech];
                      return (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex flex-col items-center group/tech"
                        >
                          <motion.div
                            whileHover={{ 
                              scale: 1.05,
                              boxShadow: "0 0 15px rgba(59, 130, 246, 0.2)"
                            }}
                            className="bg-gray-800/70 p-3 rounded-lg border border-gray-700 hover:border-primary-500/50 transition-all duration-300 cursor-pointer"
                          >
                            {logoPath ? (
                              <TechLogo 
                                name="" 
                                src={logoPath} 
                                alt={`${tech} logo`} 
                                size={40}
                                className="flex-shrink-0"
                              />
                            ) : (
                              <div className="w-8 h-8 bg-gray-600 rounded flex-shrink-0"></div>
                            )}
                          </motion.div>
                          
                          {/* Label */}
                          <span className="text-xs text-gray-400 text-center mt-2 font-medium">
                            {tech}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
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
              </Card3D>
            </RevealItem>
          ))}
        </StaggerContainer>

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
