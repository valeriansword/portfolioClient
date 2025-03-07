
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    if (textRef.current) {
      gsap.set(textRef.current, { opacity: 1 }); // Ensure visibility
      tl.from(textRef.current, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power3.out",
      });
    }

    if (imageRef.current) {
      gsap.set(imageRef.current, { opacity: 1 }); // Ensure visibility
      tl.from(
        imageRef.current,
        {
          duration: 1.2,
          opacity: 0,
          x: 100,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // Floating effect for image
      gsap.to(imageRef.current, {
        y: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-black"
    >
      {/* Background Noise Effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>

      <div className="container mx-auto px-6 md:px-10 lg:px-20 py-12 z-10 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Text */}
          <div ref={textRef} className="text-white opacity-100">
            <h2 className="text-xl md:text-2xl font-medium mb-2 text-gray-400">
              Welcome to my world
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hello, I'm Chandru
            </h1>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
              Full stack  Developer
            </h3>

            <p className="text-lg md:text-xl mb-8 max-w-lg text-gray-400">
              Welcome to my digital playground! I craft exceptional web
              experiences with clean code and creative designs. Let's turn your
              ideas into reality with modern web technologies.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex md:flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="md:px-6 md:py-3 max-sm:px-4 max-sm:flex max-sm:items-center bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                View Projects
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/valeriansword"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/chandra-kumar-132020248/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Linkedin size={24} />
              </a>
             
            </div>
          </div>

          {/* Hero Image */}
         {/* Hero Image */}
<div ref={imageRef} className="flex justify-center max-sm:hidden lg:justify-center">
  <div className="relative max-w-xs md:max-w-sm lg:max-w-md">
    <img
      src="skills/cartoon.png"
      alt="Developer Cartoon Avatar"
      className="w-full max-w-[400px] rounded-full border-4 border-white/30 shadow-2xl relative z-10 hero-image"
    />
  </div>
</div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <a href="#about" className="flex flex-col items-center">
          <span className="mb-2 text-sm font-medium">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
