import React from 'react';
import { motion } from 'framer-motion';
import { 
  TbBrain, 
  TbTerminal2, 
  TbDatabase, 
  TbInputSearch, 
  TbBinaryTree, 
  TbSettingsAutomation, 
  TbMessageChatbot, 
  TbCloudUpload,
  TbCompass,
  TbLayersIntersect
} from 'react-icons/tb';

const AIExpertise = () => {
  const expertise = [
    {
      title: "Retrieval-Augmented Generation (RAG)",
      desc: "Architecting context-enriched generation pipelines to connect private documents with LLM reasoning nodes.",
      icon: <TbInputSearch />
    },
    {
      title: "Large Language Models (LLMs)",
      desc: "Integrating, configuring, and optimizing proprietary and open-source models for custom business use cases.",
      icon: <TbBrain />
    },
    {
      title: "Prompt Engineering",
      desc: "Designing robust, structured instructions and agent system prompts to maximize model consistency and output quality.",
      icon: <TbTerminal2 />
    },
    {
      title: "Vector Databases",
      desc: "Setting up and querying indexing vector stores (FAISS, Chroma, pgvector) with embedding comparisons.",
      icon: <TbLayersIntersect />
    },
    {
      title: "Semantic Search",
      desc: "Implementing search algorithms that match query intent rather than literal keywords, yielding richer retrieval quality.",
      icon: <TbCompass />
    },
    {
      title: "NLP Applications",
      desc: "Building classification models, tokenizers, intent routers, and custom entity recognizers.",
      icon: <TbMessageChatbot />
    },
    {
      title: "Deep Learning",
      desc: "Training and fine-tuning convolutional or recurrent architectures using PyTorch and Hugging Face library packages.",
      icon: <TbBinaryTree />
    },
    {
      title: "Machine Learning Pipelines",
      desc: "Structuring clean, automated pipelines from raw tabular cleaning to hyperparameter validation and feature scaling.",
      icon: <TbSettingsAutomation />
    },
    {
      title: "AI Chatbot Development",
      desc: "Designing state-management conversational flows, fallback intents, and automated FAQ response routers.",
      icon: <TbBrain className="text-primary" />
    },
    {
      title: "Model Deployment",
      desc: "Wrapping custom inference weights in FastAPI microservices and configuring robust server containers.",
      icon: <TbCloudUpload />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="expertise" className="py-24 bg-[#050505] px-6 md:px-12 border-b border-primary/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Core Competencies</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">AI Expertise</h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Expertise Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {expertise.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                borderColor: "rgba(255, 0, 79, 0.4)",
                boxShadow: "0 10px 25px rgba(255, 0, 79, 0.1)"
              }}
              className="p-8 glass-panel rounded-2xl border border-primary/10 transition-all duration-300 relative group flex flex-col justify-between min-h-[200px]"
            >
              {/* Corner Glow Highlight */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-colors duration-300 pointer-events-none" />

              <div>
                {/* Icon */}
                <div className="text-4xl text-primary mb-6 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                {/* Title */}
                <h4 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h4>
              </div>
              {/* Description */}
              <p className="text-textSilver text-sm leading-relaxed mt-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default AIExpertise;
