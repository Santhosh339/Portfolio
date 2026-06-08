import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/skills';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' }
  ];

  const experienceData = [
    {
      role: "Python & AI Developer",
      project: "Abnormal Activity Detection & Video Surveillance",
      desc: "Developed a computer vision surveillance system in Python utilizing deep learning models to automatically flag abnormal actions in real-time."
    },
    {
      role: "Conversational UI Designer",
      project: "AI Farming Assistant Chatbot",
      desc: "Designed and implemented the web-based conversational interface and NLP routing scripts for the farming assistance chatbot."
    },
    {
      role: "App Developer",
      project: "E-Commerce Web Application",
      desc: "Designed and built the transactional front-end layout and database connectivity modules for a responsive shopping app."
    }
  ];

  const educationData = [
    {
      year: "2021 - 2025",
      degree: "B.E. in Artificial Intelligence & Machine Learning",
      institution: "Sri Krishna Institute of Technology, Bangalore",
      grade: "Graduating with hands-on expertise in Neural Networks, Python systems, and Data Science."
    },
    {
      year: "2019 - 2021",
      degree: "Intermediate M.P.C (Maths, Physics, Chemistry)",
      institution: "Sai Sri Chaithanya Junior College, Andhra Pradesh"
    },
    {
      year: "2019",
      degree: "Secondary Schooling",
      institution: "Elena Bettini School, Andhra Pradesh"
    }
  ];

  return (
    <section id="about" className="py-24 bg-black px-6 md:px-12 border-b border-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Image with dynamic glow border */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[38%] relative group"
          >
            {/* Ambient Red Glow Behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-[#ff3b70] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-black rounded-2xl overflow-hidden border border-primary/20">
              <img 
                src={`${import.meta.env.BASE_URL}images/User.png`}
                alt="A. Santhosh" 
                className="w-full h-auto object-cover filter grayscale hover:grayscale-0 transition-all duration-700 rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-[62%]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                About <span className="text-primary">Me</span>
              </h2>
              
              <p className="text-textSilver text-base md:text-lg leading-relaxed mb-8 text-justify">
                I am a passionate and driven Generative AI Developer and AI/ML Engineer based in Bangalore. With a deep interest in building automated, intelligent systems, I specialize in designing end-to-end applications utilizing LLMs, RAG frameworks, custom NLP pipelines, and deep learning models. By combining my academic engineering background with hands-on development in Python and modern frameworks, I build production-ready software solutions that translate complex research into real-world business value.
              </p>
            </motion.div>

            {/* Currently Learning Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">Current Focus Areas</h3>
              <div className="flex flex-wrap gap-2.5">
                {skillsData.currentlyLearning.map((item, idx) => (
                  <motion.span 
                    key={item}
                    whileHover={{ scale: 1.08, borderColor: "#ff004f" }}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/5 border border-primary/20 text-white/90 shadow-[0_0_10px_rgba(255,0,79,0.02)] transition-shadow duration-300 hover:shadow-[0_0_15px_rgba(255,0,79,0.15)]"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Tab Links Navigation */}
            <div className="border-b border-white/10 flex mb-8 overflow-x-auto whitespace-nowrap">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3.5 text-base font-semibold transition-colors duration-300 focus:outline-none ${
                    activeTab === tab.id ? 'text-primary' : 'text-textSilver hover:text-white'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Contents */}
            <div className="min-h-[200px]">
              <AnimatePresence mode="wait">
                {activeTab === 'experience' && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-6"
                  >
                    {experienceData.map((exp, idx) => (
                      <div key={idx} className="border-l-2 border-primary/30 pl-5 relative">
                        <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-[6px] shadow-neon" />
                        <h4 className="text-lg font-bold text-white leading-tight">{exp.role}</h4>
                        <span className="text-xs text-primary font-semibold uppercase tracking-wider block mt-1 mb-2">{exp.project}</span>
                        <p className="text-textSilver text-sm leading-relaxed">{exp.desc}</p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'education' && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-6"
                  >
                    {educationData.map((edu, idx) => (
                      <div key={idx} className="border-l-2 border-primary/30 pl-5 relative">
                        <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-[6px] shadow-neon" />
                        <span className="text-xs text-primary font-bold tracking-wider uppercase block mt-1">{edu.year}</span>
                        <h4 className="text-lg font-bold text-white mt-1 mb-1">{edu.degree}</h4>
                        <span className="text-sm text-white/70 block mb-2">{edu.institution}</span>
                        {edu.grade && <p className="text-textSilver text-sm">{edu.grade}</p>}
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'certifications' && (
                  <motion.div
                    key="certifications"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {skillsData.certifications.map((cert, idx) => (
                      <div key={idx} className="p-5 glass-panel rounded-xl border border-primary/10 flex flex-col justify-between">
                        <div>
                          <h4 className="text-base font-bold text-white mb-1">{cert.title}</h4>
                          <span className="text-sm text-textSilver block">{cert.issuer}</span>
                        </div>
                        <span className="text-xs text-primary font-semibold mt-3">{cert.year}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
