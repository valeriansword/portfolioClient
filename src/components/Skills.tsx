import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const skills = [
    { name: 'HTML5', level: 95, image: '/skills/html5.svg' },
    { name: 'CSS3', level: 90, image: '/skills/css3.svg' },
    { name: 'JavaScript', level: 80, image: '/skills/javascript.svg' },
    { name: 'React.js', level: 90, image: '/skills/react.svg' },
    { name: 'Tailwind CSS', level: 88, image: '/skills/tailwindcss.svg' },
    { name: 'Node.js', level: 75, image: '/skills/nodedotjs.svg' },
    { name: 'MongoDB', level: 85, image: '/skills/mongodb.svg' },
    { name: 'MySQL', level: 80, image: '/skills/mysql.svg' },
    { name: 'Firebase', level: 78, image: '/skills/firebase.svg' },
    { name: 'Python', level: 80, image: '/skills/python.svg' },
    { name: 'Java', level: 92, image: '/skills/java.png' },
    { name: 'Spring Boot', level: 92, image: '/skills/springboot.svg' },
    { name: 'Git/GitHub', level: 85, image: '/skills/git.svg' },
    { name: 'Responsive Design', level: 92, image: '/skills/responsive.png' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">My Skills</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            I've acquired a diverse range of skills throughout my journey as a developer.
            Here's a glimpse of my technical expertise and proficiency levels.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className=" max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div 
              key={skill.name} 
              variants={item}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 relative"
              whileHover={{ 
                x: [0, -3, 3, -2, 2, 0], // Shake effect
                transition: { duration: 0.4 } 
              }}
            >
              <div className="p-6 text-center">
                <img src={skill.image} alt={skill.name} className="w-12 h-12 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">{skill.name}</h3>

                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                  <motion.div 
                    className="h-2.5 rounded-full bg-black"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                  ></motion.div>
                </div>
                <p className="text-gray-600 font-medium">{skill.level}%</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="max-w-7xl mx-auto mt-16 p-8 bg-white rounded-xl shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-4 text-center text-gray-800">Tools & Technologies I Use</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['VS Code', 'Git', 'GitHub', 'Figma', 'npm', 'eureka server','vercel','Render', 'Vite', 'Jest', 'ESLint', 'Prettier'].map((tool) => (
              <span 
                key={tool}
                className="relative px-4 py-2 overflow-hidden rounded-full text-sm font-medium border border-gray-300 text-gray-800 cursor-pointer transition-colors duration-300"
              >
                <span className="relative z-10">{tool}</span>
                <motion.span 
                  className="absolute inset-0 bg-black" 
                  initial={{ width: '0%' }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
