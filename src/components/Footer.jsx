import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full text-center py-8 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-textSilver">
        <p>© {new Date().getFullYear()} A. Santhosh. All rights reserved.</p>
        <p className="flex items-center gap-1.5 justify-center">
          Engineered with <FaHeart className="text-primary animate-pulse" /> using React 19 & Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
