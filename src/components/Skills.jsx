import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skills';

// Circular Progress Component
const CircularProgress = ({ percent, label, delay = 0 }) => {
  const radius = 50;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-28 h-28 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="56"
            cy="56"
            r={radius}
            className="stroke-white/5 fill-transparent"
            strokeWidth={strokeWidth}
          />
          {/* Animated Glow Circle */}
          <motion.circle
            cx="56"
            cy="56"
            r={radius}
            className="stroke-primary fill-transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay, ease: "easeOut" }}
            strokeLinecap="round"
            style={{
              filter: 'drop-shadow(0px 0px 5px rgba(255, 0, 79, 0.5))'
            }}
          />
        </svg>
        {/* Percentage Label */}
        <span className="absolute text-lg font-bold text-white">{percent}%</span>
      </div>
      <span className="text-sm font-semibold text-textSilver uppercase tracking-wider text-center">{label}</span>
    </div>
  );
};

const Skills = () => {
  const coreCompetencies = [
    { percent: 95, label: "Python Dev", delay: 0.1 },
    { percent: 90, label: "Generative AI", delay: 0.2 },
    { percent: 88, label: "Machine Learning", delay: 0.3 },
    { percent: 85, label: "NLP & Deep Learning", delay: 0.4 }
  ];

  return (
    <section id="skills" className="py-24 bg-black px-6 md:px-12 border-b border-primary/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Technical Proficiency</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Skills & Toolkit</h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Circular Progress Indicators Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center mb-16 p-8 glass-panel rounded-2xl border border-primary/10">
          {coreCompetencies.map((item, idx) => (
            <CircularProgress 
              key={idx} 
              percent={item.percent} 
              label={item.label} 
              delay={item.delay} 
            />
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ borderColor: "rgba(255, 0, 79, 0.3)" }}
              className="p-6 glass-panel rounded-2xl border border-primary/10 transition-colors duration-300"
            >
              <h4 className="text-lg font-bold text-primary mb-4 border-b border-primary/10 pb-2">
                {cat.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 0, 79, 0.1)" }}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-white/90 transition-all duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
