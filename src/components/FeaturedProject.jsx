import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaArrowRight, FaServer } from 'react-icons/fa';
import { TbLayersIntersect, TbMessageCode, TbFileText, TbBinaryTree, TbShieldCheck } from 'react-icons/tb';

const RAGStepNode = ({ id, label, icon, isActive, isCompleted }) => {
  return (
    <motion.div 
      className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center gap-2 relative min-w-[120px] transition-colors duration-500 ${
        isActive 
          ? 'bg-primary/10 border-primary text-white shadow-neon' 
          : isCompleted 
            ? 'bg-white/5 border-primary/40 text-white/80' 
            : 'bg-white/5 border-white/10 text-white/40'
      }`}
      animate={isActive ? { scale: 1.05 } : { scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Node Icon */}
      <div className={`text-2xl ${isActive ? 'text-primary' : 'text-white/60'}`}>
        {icon}
      </div>
      
      {/* Node Label */}
      <span className="text-xs font-bold tracking-wide uppercase">{label}</span>
      
      {/* Active Pulse rings */}
      {isActive && (
        <span className="absolute inset-0 rounded-xl border border-primary animate-ping opacity-75" />
      )}
    </motion.div>
  );
};

const FeaturedProject = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: "PDF Documents", icon: <TbFileText /> },
    { label: "Text Chunking", icon: <TbBinaryTree /> },
    { label: "Embeddings", icon: <TbLayersIntersect /> },
    { label: "FAISS Store", icon: <FaServer /> },
    { label: "Retriever", icon: <TbShieldCheck /> },
    { label: "LLM Node", icon: <TbMessageCode /> },
    { label: "Answer Gen", icon: <TbMessageCode className="text-[#ff3b70]" /> }
  ];

  // Auto-cycle pipeline steps for interactive feel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="featured" className="py-24 bg-black px-6 md:px-12 border-b border-primary/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Showcase centerpiece</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Featured Project</h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Featured Card */}
        <div className="glass-panel rounded-3xl border border-primary/10 overflow-hidden p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side: Project Metadata */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between h-full">
            <div>
              {/* Featured Label */}
              <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase bg-primary/20 border border-primary/30 text-primary tracking-widest inline-block mb-6 shadow-neon">
                Generative AI / RAG
              </span>
              
              {/* Title */}
              <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                RAG-Based Document Q&A Chatbot
              </h3>
              
              {/* Description */}
              <p className="text-textSilver text-base leading-relaxed mb-6 text-justify">
                A production-grade Retrieval-Augmented Generation (RAG) system engineered to parse, index, and retrieve data from high-volume PDF corpora (100+ pages). Utilizes chunk partitioning methods, semantic vector comparisons via SentenceTransformers, and local LLM context embedding to supply accurate answers within sub-3 second response limits.
              </p>

              {/* Achievements / Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-textSilver block uppercase tracking-wider mb-1">Capacity</span>
                  <span className="text-lg font-bold text-white">100+ Page PDFs</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-textSilver block uppercase tracking-wider mb-1">Retrieval Latency</span>
                  <span className="text-lg font-bold text-white">Sub-3 Seconds</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-textSilver block uppercase tracking-wider mb-1">Vector Search</span>
                  <span className="text-lg font-bold text-white">FAISS Indexing</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xs text-textSilver block uppercase tracking-wider mb-1">Inference Engine</span>
                  <span className="text-lg font-bold text-white">Hugging Face APIs</span>
                </div>
              </div>

              {/* Technologies Badge List */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Python", "LangChain", "FAISS", "Hugging Face", "Streamlit", "PyTorch"].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-md text-xs font-semibold bg-white/5 border border-white/10 text-white/95">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://github.com/Santhosh339" 
                target="_blank" 
                rel="noreferrer"
                className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primaryHover transition-all flex items-center gap-2 shadow-neon hover:shadow-neonHover duration-300 clickable"
              >
                <FaGithub /> Repository Link
              </a>
              <a 
                href="#projects"
                className="px-6 py-3 border border-white/10 text-white rounded-lg font-semibold hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-2 duration-300 clickable"
              >
                View Other Projects <FaArrowRight />
              </a>
            </div>
          </div>

          {/* Right Side: Interactive Architecture Visualization */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-6 bg-[#030303] rounded-2xl border border-primary/5 relative">
            <h4 className="text-sm uppercase tracking-widest text-textSilver font-semibold mb-8">
              RAG Pipeline Architecture
            </h4>
            
            {/* Steps Container */}
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 max-w-lg relative z-10">
              {steps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <RAGStepNode 
                    id={idx}
                    label={step.label}
                    icon={step.icon}
                    isActive={activeStep === idx}
                    isCompleted={idx < activeStep}
                  />
                  {idx < steps.length - 1 && (
                    <div className="md:block hidden text-primary/30 text-lg">
                      <motion.span 
                        animate={activeStep === idx ? { color: "#ff004f", scale: 1.2 } : { color: "rgba(255, 0, 79, 0.2)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaArrowRight />
                      </motion.span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Stage Description Overlay */}
            <div className="mt-8 p-4 rounded-xl border border-primary/10 bg-primary/5 w-full text-center min-h-[80px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-xs text-primary font-bold uppercase tracking-wider block mb-1">
                    Pipeline Stage {activeStep + 1}
                  </span>
                  <p className="text-sm text-textSilver leading-relaxed">
                    {activeStep === 0 && "Loads raw PDF document bytes, extracting plain texts and metadata headers."}
                    {activeStep === 1 && "Splits texts into semantic paragraphs (chunks) using sliding window overlaps."}
                    {activeStep === 2 && "Converts raw text chunks into 768-dimensional numerical vector embeddings."}
                    {activeStep === 3 && "Saves vector embeddings into FAISS indexes for lightning-fast similarity lookups."}
                    {activeStep === 4 && "Queries the vector indexes based on user questions, extracting the top closest chunks."}
                    {activeStep === 5 && "Injects the question alongside extracted source context chunks into the LLM context prompt."}
                    {activeStep === 6 && "Generates the final coherent response grounded in the original source PDFs."}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedProject;
