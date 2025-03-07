import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { Award, BookOpen, Coffee, Code,GraduationCap } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isInView && statsRef.current) {
      const statElements = statsRef.current.querySelectorAll('.stat-item');
      
      gsap.fromTo(statElements, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2, 
          duration: 0.8,
          ease: "power3.out"
        }
      );
    }
    if (statsRef.current) {
      const statItems = statsRef.current.querySelectorAll(".stat-item");
  
      statItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, { scale: 1.05, duration: 0.2, ease: "power2.out" });
        });
        item.addEventListener("mouseleave", () => {
          gsap.to(item, { scale: 1, duration: 0.2, ease: "power2.in" });
        });
      });
    }
  }, [isInView]);

  const stats = [
    { icon: <Code size={24} />, value: '2+', label: 'Years Experience (as a freelancer)' },
    { icon: <BookOpen size={24} />, value: '15+', label: 'Projects Completed' },
    { icon: <Award size={24} />, value: 'Udemy & Meta', label: 'Certified Full Stack Developer' },
    { icon: <GraduationCap size={24} />, value: 'NITT Workshop', label: 'Attendee' },
  ];
  
  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">About Me</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          I'm a passionate full-stack developer with a strong foundation in modern web technologies. As a freelancer, I've been creating exceptional digital experiences and bringing ideas to life."
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gray-200 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-200 rounded-full z-0"></div>
            <img 
              src="skills/cartoon1.png" 
              alt="Developer working" 
              className="rounded-lg  shadow-xl relative z-10"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-black">Who am I?</h3>
            <p className="text-gray-700 mb-6">
  I'm Chandru, a passionate web developer and the founder of Vebzart Studios. I have a deep enthusiasm for creating 
  intuitive, dynamic user experiences and bringing creative ideas to life.
</p>
<p className="text-gray-700 mb-6">
  With expertise in React, JavaScript, and modern CSS frameworks like Tailwind and GSAP, I build applications that are 
  not only functional but also aesthetically pleasing and user-friendly.
</p>
<p className="text-gray-700 mb-8">
  When I'm not coding, you can find me exploring new technologies or enjoying outdoor activities to maintain a healthy work-life balance.
</p>

            <a 
              href="#contact" 
              className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>

        <div ref={statsRef} className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-item bg-white p-6 rounded-lg cursor-pointer shadow-lg border border-gray-200 text-center transform transition-transform hover:scale-105 duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-800 rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="md:text-3xl max-sm:text-xl font-bold text-gray-800 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;