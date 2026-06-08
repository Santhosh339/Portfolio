import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ targetVal, label, suffix = "+", prefix = "" }) => {
  const [currentVal, setCurrentVal] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // ms
    const increment = targetVal / (duration / 16); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetVal) {
        setCurrentVal(targetVal);
        clearInterval(timer);
      } else {
        setCurrentVal(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, targetVal]);

  return (
    <div 
      ref={cardRef} 
      className="p-6 md:p-8 glass-panel rounded-2xl border border-primary/10 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-primary/30 transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <span className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
        {prefix}{currentVal}{suffix}
      </span>
      <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-textSilver">
        {label}
      </span>
    </div>
  );
};

const Dashboard = () => {
  const stats = [
    { targetVal: 8, label: "Projects Completed", suffix: "+" },
    { targetVal: 15, label: "Technologies Mastered", suffix: "+" },
    { targetVal: 5, label: "Specialized AI Projects", suffix: "+" },
    { targetVal: 100, label: "Open To Work Status", suffix: "%", prefix: "" }
  ];

  return (
    <section className="py-20 bg-black px-6 md:px-12 border-b border-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <StatCard 
                targetVal={stat.targetVal} 
                label={stat.label} 
                suffix={stat.suffix} 
                prefix={stat.prefix}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
