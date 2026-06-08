import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import { BiBot } from 'react-icons/bi';
import { FaPython, FaNetworkWired } from 'react-icons/fa';
import { TbBrain, TbCpu, TbDeviceAnalytics } from 'react-icons/tb';

const iconMap = {
  BiBot: <BiBot />,
  TbBrain: <TbBrain />,
  TbCpu: <TbCpu />,
  FaPython: <FaPython />,
  FaNetworkWired: <FaNetworkWired />,
  TbDeviceAnalytics: <TbDeviceAnalytics />
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#050505] px-6 md:px-12 border-b border-primary/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">What I Offer</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Services</h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                y: -6, 
                backgroundColor: 'rgba(255, 0, 79, 0.03)',
                borderColor: 'rgba(255, 0, 79, 0.35)',
                boxShadow: '0 8px 30px rgba(255, 0, 79, 0.1)'
              }}
              className="p-8 glass-panel rounded-2xl border border-primary/10 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Corner accent glow lines */}
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary group-hover:h-full transition-all duration-500" />
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />

              {/* Service Icon */}
              <div className="text-4xl text-primary mb-6 transition-transform duration-300 group-hover:scale-110">
                {iconMap[service.iconName] || <TbCpu />}
              </div>

              {/* Service Title */}
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h4>

              {/* Service Description */}
              <p className="text-textSilver text-sm leading-relaxed text-justify">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
