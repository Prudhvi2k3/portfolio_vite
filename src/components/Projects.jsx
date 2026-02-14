import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import Hub from '../assets/K-Hub.png';
import Data from '../assets/Datavisulizer.jpg';
import AugTask from '../assets/Augtask.png';
import NovTask from '../assets/Novtask.png';
import handgesture from '../assets/handgesture.jpg';

const projects = [
  {
    title: "Digital Twin System - Water Utility Network",
    description: "Designed and developed a comprehensive Digital Twin system for water utility networks to enhance real-time monitoring and predictive analytics. Integrated IoT sensor data with FastAPI backend and PostgreSQL database, implementing hydraulic modeling for failure simulations and predictive insights.",
    image: Hub,
    tech: ["FastAPI", "React", "PostgreSQL", "IoT", "TensorFlow"],
    github: "#",
    live: "#"
  },
  {
    title: "Dev-Orbit: Project-Based Learning Platform",
    description: "Full-stack web platform built with React.js, Node.js, and MongoDB to streamline student project development. Features user and admin dashboards, real-time chat, quiz/assignment management, integrated compiler, and AI chatbot assistance. Implemented certificate generation system with verification capabilities.",
    image: Hub,
    tech: ["React.js", "Node.js", "MongoDB", "Socket.io", "Express"],
    github: "#",
    live: "#"
  },
  {
    title: "Crowd Monitoring with Computer Vision",
    description: "Developed ML models for crowd density estimation and human activity recognition using real-time video data. Implemented deep learning pipelines leveraging CNN and transfer learning architectures for feature extraction and crowd behavior pattern analysis.",
    image: handgesture,
    tech: ["TensorFlow", "OpenCV", "CNN", "Python", "Computer Vision"],
    github: "#",
    live: "#"
  },
  {
    title: "Real-time Facial Recognition System",
    description: "Deployed facial recognition visitor counter with sentiment analysis using OpenCV and TensorFlow. Created web-based dashboards with Flask and React.js for real-time data visualization and analysis from computer vision systems.",
    image: Data,
    tech: ["TensorFlow", "OpenCV", "Flask", "React", "Python"],
    github: "#",
    live: "#"
  },
  {
    title: "K-Hub Website",
    description: "Comprehensive MERN stack web application showcasing K-Hub's mission and initiatives to a larger audience. Built robust backend with admin panel for content management, user authentication, and dynamic content updates.",
    image: AugTask,
    tech: ["React", "Node.js", "MongoDB", "Express", "Git"],
    github: "https://github.com/Prudhvi2k3/Project-K",
    live: "https://project-k-hub.onrender.com/"
  },
  {
    title: "Hand Gesture Recognition System",
    description: "Gesture control application using MediaPipe for hand tracking and Flask for web streaming. Captures video from webcam, processes to detect hand gestures in real-time, and displays recognized gestures on web interface.",
    image: NovTask,
    tech: ["Python", "Flask", "OpenCV", "MediaPipe", "Computer Vision"],
    github: "https://github.com/Prudhvi2k3/virtual-mouse-using-hand-gesture",
    live: "https://www.linkedin.com/posts/prudhvi-ankamreddi_gesturecontrol-computervision-pyautogui-activity-7256169573119336448-2EKD"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.4 }
  }
};

const linkVariants = {
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: { duration: 0.6 }
  }
};

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" id="projects">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative overflow-hidden group">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-46 object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.a
                    href={project.github}
                    className="p-2 bg-white dark:bg-gray-800 rounded-full"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <Github className="w-6 h-6 text-gray-900 dark:text-white" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className="p-2 bg-white dark:bg-gray-800 rounded-full"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <ExternalLink className="w-6 h-6 text-gray-900 dark:text-white" />
                  </motion.a>
                </motion.div>
              </div>

              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600 dark:bg-blue-500 text-sm rounded-full text-white"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}