import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Animated Count-Up helper for metrics
const MetricCounter = ({ targetString }) => {
  const numberMatch = targetString.match(/\d+(\.\d+)?/);
  const targetNumber = numberMatch ? parseFloat(numberMatch[0]) : null;
  const suffix = targetNumber !== null ? targetString.split(numberMatch[0])[1] || "" : targetString;
  const prefix = targetNumber !== null ? targetString.split(numberMatch[0])[0] || "" : "";

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (targetNumber === null) {
      setCount(targetString);
      return;
    }

    let start = 0;
    const duration = 1500; // ms
    const increment = targetNumber / (duration / 16); // 60fps refresh rate approximately
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [targetString, targetNumber]);

  if (targetNumber === null) return <span>{count}</span>;
  return <span>{prefix}{count}{suffix}</span>;
};

// 3D Tilt Card Wrapper Component
const TiltCard = ({ children, className, ...props }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    // Degrees of tilt
    const maxTilt = 12;
    const rX = -(mouseY / (height / 2)) * maxTilt;
    const rY = (mouseX / (width / 2)) * maxTilt;

    setTilt({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.02 : 1})`,
        transition: isHovered ? 'transform 0.05s ease-out' : 'transform 0.5s ease',
      }}
      {...props}
    >
      {children}
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const filterCategories = [
    'All',
    'Generative AI',
    'Machine Learning',
    'Deep Learning',
    'NLP',
    'Backend Development',
    'Full Stack Python'
  ];

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter(proj => 
        proj.categories.some(cat => cat.toLowerCase() === activeFilter.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 bg-[#050505] px-6 md:px-12 border-b border-primary/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">My Work</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Projects</h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold border transition-all duration-300 clickable ${
                activeFilter === cat
                  ? 'bg-primary border-primary text-white shadow-neon'
                  : 'bg-white/5 border-white/10 text-textSilver hover:border-primary/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <TiltCard className="h-full flex flex-col justify-between glass-panel rounded-2xl border border-primary/10 overflow-hidden relative group glass-panel-hover cursor-pointer">
                  
                  {/* Glowing Outline Layer */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-2xl transition-colors duration-300 pointer-events-none z-10" />

                  <div>
                    {/* Project Image Panel */}
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Metric float overlay */}
                      <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded bg-black/80 backdrop-blur-sm border border-primary/30 text-xs font-bold text-primary shadow-neon">
                        <MetricCounter targetString={project.metrics.accuracy} />
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h4>
                      <p className="text-textSilver text-sm leading-relaxed mb-6 text-justify">
                        {project.description}
                      </p>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tech.map((badge) => (
                          <span key={badge} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-semibold text-white/90">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer / Overlay Metrics Details */}
                  <div className="px-6 pb-6 pt-2 border-t border-white/5 bg-black/30 flex justify-between items-center z-20">
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] text-textSilver uppercase tracking-wider">Latency</span>
                      <span className="text-xs font-bold text-white"><MetricCounter targetString={project.metrics.responseTime} /></span>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] text-textSilver uppercase tracking-wider">Achievement</span>
                      <span className="text-xs font-bold text-white truncate max-w-[120px]">{project.metrics.keyAchievement}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-textSilver hover:text-primary transition-colors duration-300 clickable"
                        aria-label="GitHub Repo"
                      >
                        <FaGithub className="text-lg" />
                      </a>
                    </div>
                  </div>

                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
