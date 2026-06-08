import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const roles = ["Generative AI Developer", "AI/ML Engineer", "Python Developer"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Mouse reactive glow coordinates
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Typewriter effect logic
  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    
    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause at full text
          setTypingSpeed(2000);
          setIsDeleting(true);
        } else {
          setTypingSpeed(100);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500);
        } else {
          setTypingSpeed(50);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  // Framer Motion variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black py-20 px-6 md:px-12 border-b border-primary/5"
      onMouseMove={handleMouseMove}
    >
      {/* Mouse Reactive Radial Glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300 md:block hidden"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 0, 79, 0.08), transparent 80%)`
        }}
      />

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25" />

      {/* Floating Particles/Nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[2px] h-[2px] bg-primary rounded-full top-[20%] left-[30%] animate-ping" />
        <div className="absolute w-[2px] h-[2px] bg-primary rounded-full top-[70%] left-[15%] animate-ping [animation-delay:1s]" />
        <div className="absolute w-[2px] h-[2px] bg-primary rounded-full top-[40%] left-[80%] animate-ping [animation-delay:1.5s]" />
        <div className="absolute w-[2px] h-[2px] bg-primary rounded-full top-[85%] left-[75%] animate-ping [animation-delay:2s]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Tagline / Subtitle */}
          <motion.div 
            variants={itemVariants}
            className="px-4 py-1.5 rounded-full glass-panel text-xs md:text-sm font-semibold tracking-wider text-primary border border-primary/20 mb-6 uppercase shadow-[0_0_15px_rgba(255,0,79,0.1)]"
          >
            AI Startup Portfolio
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-7xl font-extrabold tracking-tight mb-4 leading-none"
          >
            Hi, I'm <span className="text-primary hover:shadow-neon transition-shadow duration-300">A. Santhosh</span>
          </motion.h1>

          {/* Typing Animation Subtitle */}
          <motion.h2 
            variants={itemVariants}
            className="text-xl md:text-3xl font-semibold text-white/90 min-h-[40px] mb-6 flex items-center justify-center gap-1"
          >
            <span className="animated-gradient-text">{currentText}</span>
            <span className="w-[3px] h-6 md:h-8 bg-primary animate-pulse" />
          </motion.h2>

          {/* Professional Summary */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg text-textSilver max-w-2xl leading-relaxed mb-10"
          >
            AI/ML graduate passionate about building intelligent applications using Machine Learning, Deep Learning, NLP, Generative AI, and Python. Experienced in developing RAG systems, AI chatbots, sentiment analysis APIs, and predictive analytics solutions.
          </motion.p>

          {/* Actions Button Group */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center"
          >
            <a 
              href="/images/CV.pdf" 
              download 
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primaryHover transition-all shadow-neon hover:shadow-neonHover duration-300 w-full sm:w-auto text-center clickable"
            >
              Download Resume
            </a>
            <a 
              href="#featured" 
              className="px-8 py-4 border border-white/10 rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-white font-semibold w-full sm:w-auto text-center duration-300 clickable"
            >
              View Featured RAG Project
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-white/10 rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-white font-semibold w-full sm:w-auto text-center duration-300 clickable"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator Mouse */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs uppercase tracking-widest text-textSilver">Scroll</span>
        <div className="w-[24px] h-[40px] border-2 border-textSilver rounded-full relative">
          <div className="w-[4px] h-[8px] bg-primary rounded-full absolute top-[6px] left-1/2 transform -translate-x-1/2 scroll-indicator-dot" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
