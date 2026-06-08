import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AIExpertise from './components/AIExpertise';
import Skills from './components/Skills';
import Services from './components/Services';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import Dashboard from './components/Dashboard';
import GitHubSection from './components/GitHubSection';
import AIChatbot from './components/AIChatbot';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import NeuralBackground from './components/NeuralBackground';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white font-poppins selection:bg-primary selection:text-white overflow-hidden">
      
      {/* Interactive AI Particle Background */}
      <NeuralBackground />

      {/* Mouse Reactive Glowing Cursor */}
      <CustomCursor />

      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Portfolio Main Content Layout Flow */}
      <main className="relative w-full">
        {/* Cinematic Welcome Hero */}
        <Hero />
        
        {/* About Biography & Focus Timelines */}
        <About />

        {/* Core AI Competency Cards */}
        <AIExpertise />

        {/* Technical Toolkit & Progress Gauges */}
        <Skills />

        {/* Startup-style Capabilities */}
        <Services />

        {/* RAG Pipeline Interactive Centerpiece */}
        <FeaturedProject />

        {/* Recruiter Stats Dashboard Metrics */}
        <Dashboard />

        {/* Classified Projects Grid with 3D tilts */}
        <Projects />

        {/* Live GitHub Telemetry Dashboard */}
        <GitHubSection />

        {/* Contact Submission & Connect Form */}
        <Contact />
      </main>

      {/* Conversational Floating Assistant AI Widget */}
      <AIChatbot />

      {/* Footer Credits telemetry */}
      <Footer />

    </div>
  );
}

export default App;
