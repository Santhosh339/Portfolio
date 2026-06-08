import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiBot, BiSend, BiMinus } from 'react-icons/bi';
import { TbMessageChatbot } from 'react-icons/tb';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hi! I'm Santhosh's AI Assistant. Ask me anything about his skills, projects, experience, or contact information. Click any of the suggestion chips below to start!",
      isStreaming: false
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestionChips = [
    { label: "Tell me about Santhosh", query: "about" },
    { label: "Show AI projects", query: "projects" },
    { label: "What skills does he have?", query: "skills" },
    { label: "Explain the RAG chatbot", query: "rag" },
    { label: "Contact information", query: "contact" }
  ];

  // Auto-scroll chat to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Handle chatbot keyword routing responses
  const getBotResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes('about') || q.includes('who') || q.includes('santhosh') || q.includes('background')) {
      return "A. Santhosh is a Generative AI Developer, AI/ML Engineer, and Python Developer based in Bangalore, Karnataka. He is set to graduate in 2025 with a B.E. in AI & ML from Sri Krishna Institute of Technology. He focuses on building RAG systems, NLP APIs, and custom LLM solutions.";
    }
    
    if (q.includes('project') || q.includes('work') || q.includes('portfolio')) {
      return "Santhosh has engineered 8 core projects: \n1. **RAG Document Chatbot** (FAISS + LangChain)\n2. **FastAPI Sentiment BERT API**\n3. **AI Farming Assistant Chatbot**\n4. **IoT Predictive Maintenance System**\n5. **Inventory Forecasting & Demand Planner**\n6. **EduQuiz Adaptive Platform**\n7. **Smart Classroom Backend**\n8. **Preventive Health Care Platform**.";
    }

    if (q.includes('skill') || q.includes('technology') || q.includes('stack') || q.includes('tool')) {
      return "Santhosh's technical toolkit includes:\n• **Generative AI**: LangChain, RAG, OpenAI APIs, FAISS, Vector DBs, Prompt Engineering\n• **Machine Learning**: Scikit-Learn, Pandas, NumPy, Time Series Analysis, Feature Engineering\n• **Deep Learning**: PyTorch, Transformers, BERT\n• **Backend**: Python, FastAPI, PostgreSQL, REST APIs\n• **Tools**: Git, Streamlit, PyCharm, VS Code";
    }

    if (q.includes('rag') || q.includes('document') || q.includes('chatbot') || q.includes('qa')) {
      return "The **RAG Q&A Chatbot** is his featured project. It handles 100+ page PDF documents, chunking text, computing semantic embeddings, indexing them inside FAISS, and retrieving similarity segments. These segments are fused into an LLM context prompt to generate answers in sub-3 seconds.";
    }

    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('social') || q.includes('hire') || q.includes('reach')) {
      return "Here are A. Santhosh's contact details:\n• **Email**: santhoshalakunta333@gmail.com\n• **Phone**: +91 8688009269\n• **Location**: Bangalore, Karnataka\n• **GitHub**: github.com/Santhosh339\n• **LinkedIn**: linkedin.com/in/santhosh-a-838412310";
    }

    return "I'm not sure I understood that fully. Try asking about his 'skills', 'AI projects', 'RAG chatbot', or 'contact details', or use the suggestion chips below!";
  };

  // Typing effect streaming response helper
  const streamResponse = (responseText) => {
    setIsTyping(false);
    
    const newMsgIndex = messages.length + 1; // Anticipated length after user message
    
    setMessages(prev => [...prev, { sender: 'ai', text: "", isStreaming: true }]);

    let currentString = "";
    let index = 0;
    
    const interval = setInterval(() => {
      if (index < responseText.length) {
        currentString += responseText[index];
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { sender: 'ai', text: currentString, isStreaming: true };
          return updated;
        });
        index++;
      } else {
        clearInterval(interval);
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { sender: 'ai', text: responseText, isStreaming: false };
          return updated;
        });
      }
    }, 12); // Stream character velocity
  };

  const handleSendMessage = (textToSend) => {
    if (!textToSend.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { sender: 'user', text: textToSend, isStreaming: false }]);
    setInputValue("");
    setIsTyping(true);

    // Simulate thinking delay then stream response
    setTimeout(() => {
      const response = getBotResponse(textToSend);
      streamResponse(response);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
      
      {/* Floating Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.85 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-[350px] md:w-[400px] h-[500px] bg-black/95 border border-primary/20 backdrop-blur-xl rounded-2xl overflow-hidden shadow-neon flex flex-col mb-4"
          >
            {/* Header */}
            <div className="p-4 bg-primary/10 border-b border-primary/10 flex justify-between items-center">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 text-primary shadow-neon animate-pulse-fast">
                  <TbMessageChatbot className="text-xl" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">AI Portfolio Assistant</h4>
                  <span className="text-[10px] text-green-500 font-semibold uppercase tracking-wider">Online & Streaming</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded hover:bg-white/10 text-textSilver hover:text-white transition-colors clickable"
                aria-label="Collapse Chat"
              >
                <BiMinus className="text-xl" />
              </button>
            </div>

            {/* Message History Pane */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-primary text-white rounded-br-none shadow-neon'
                      : 'bg-white/5 border border-white/10 text-white/90 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Thinking loader */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-primary rounded-bl-none flex items-center gap-1">
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.4s]" />
                    <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.6s]" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestion Chips */}
            <div className="px-4 py-2 border-t border-white/5 bg-black/50 flex flex-nowrap gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide py-3">
              {suggestionChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(chip.query)}
                  className="px-3 py-1.5 rounded-full border border-white/10 hover:border-primary bg-white/5 text-[11px] text-textSilver hover:text-white transition-all shrink-0 clickable"
                >
                  {chip.label}
                </button>
              ))}
            </div>

            {/* Input Form Box */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-3 bg-black border-t border-white/5 flex gap-2"
            >
              <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me about skills, projects, contact info..."
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-white text-sm"
              />
              <button 
                type="submit"
                className="p-2 bg-primary hover:bg-primaryHover text-white rounded-lg transition-colors flex items-center justify-center clickable"
                aria-label="Send Message"
              >
                <BiSend className="text-xl" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-primary hover:bg-primaryHover flex items-center justify-center text-white text-2xl shadow-neon hover:shadow-neonHover transition-all duration-300 relative group clickable"
        aria-label="Toggle AI Assistant"
      >
        <BiBot className="group-hover:rotate-12 transition-transform duration-300" />
        {/* Glow pulsing ring around button */}
        <span className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-60 pointer-events-none" />
      </motion.button>

    </div>
  );
};

export default AIChatbot;
