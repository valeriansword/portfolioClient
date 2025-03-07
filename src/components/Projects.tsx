import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const projects = [
    {
      title: ' E-COMMERCE WEB APPLICATION',
      description: 'Developed an e-commerce web application that replicates the Nike website, allowing users to browse and order shoes, add items to the cart, and save products for later purchases, ensuring a visually appealing and user-friendly shopping experience.',
      image: 'skills/e-com.png',
      tags: ['React', 'MERN', 'Tailwind CSS', 'Redux'],
      liveLink: 'https://e-comclient.onrender.com/',
      repoLink: 'https://github.com/valeriansword/e-comClient.git',
    },
    {
      title: ' AI IMAGE GENERATION',
      description: 'Developed an AI image generation tool using the ClipDrop API, allowing users to generate images, store them, and view or download them anytime from the homepage.',
      image: 'skills/aigen.png',
      tags: ['React', 'Redux', 'Mongo DB', 'Tailwind css','clipdrop api'],
      liveLink: 'https://aigen-client.onrender.com/',
      repoLink: 'https://github.com/valeriansword/aigen-client.git',
    },
    {
      title: ' REAL TIME CHAT APPLICATION',
      description: 'Developed a real-time chat application using React.js and Firebase for instant messaging, enabling users to log in, edit profiles, message friends, and view their online status.',
      image: 'skills/chat.png',
      tags: ['React', 'Tailwind css', 'Firebase', 'Cloudinary'],
      liveLink: 'https://fcaletschat.netlify.app/',
      repoLink: 'https://github.com/valeriansword/fca.git',
    },
    // {
    //   title: 'Weather Application',
    //   description: 'A weather forecasting application with location-based services, interactive maps, and detailed weather information.',
    //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    //   tags: ['React', 'OpenWeather API', 'Leaflet', 'Styled Components'],
    //   liveLink: 'https://example.com',
    //   repoLink: 'https://github.com',
    // },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">My Projects</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
            Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-black transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/valeriansword" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;