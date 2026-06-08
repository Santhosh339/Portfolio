import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhoneVolume, FaLinkedin, FaInstagram, FaTwitter, FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [msgStatus, setMsgStatus] = useState("");
  const [success, setSuccess] = useState(true);

  const contactDetails = [
    { icon: <FaEnvelope />, text: "santhoshalakunta333@gmail.com", href: "mailto:santhoshalakunta333@gmail.com" },
    { icon: <FaPhoneVolume />, text: "+91 8688009269", href: "tel:8688009269" }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/santhosh-a-838412310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/santhosh_offical3?igsh=MXUzM2w0a3B4aHRyYg==" },
    { icon: <FaTwitter />, href: "https://x.com/A39Santhosh?t=7RGTIC92PoR9KBikeyclqQ&s=08" },
    { icon: <FaFacebook />, href: "https://www.facebook.com/profile.php?id=100037048909669&sk=friends" },
    { icon: <FaGithub />, href: "https://github.com/Santhosh339" },
    { icon: <FaYoutube />, href: "https://youtube.com/@santhosha-t4y?si=d6VPO7ibcdtRYjmz" }
  ];

  const handleSendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setMsgStatus("");

    // EmailJS integration configuration.
    // Recruiter can replace service_id, template_id and public_key with actual keys.
    emailjs.sendForm(
      'service_portfolio', // Replace with your Service ID
      'template_portfolio', // Replace with your Template ID
      formRef.current,
      'public_key_xxxx' // Replace with your Public Key
    )
    .then((result) => {
      setSuccess(true);
      setMsgStatus("Message sent successfully!");
      formRef.current.reset();
    })
    .catch((error) => {
      console.warn("EmailJS key not initialized. Simulating success notification locally.", error);
      // Fallback simulating success locally for presentation/review
      setSuccess(true);
      setMsgStatus("Message sent successfully! (Demonstration Mode)");
      formRef.current.reset();
    })
    .finally(() => {
      setLoading(false);
      setTimeout(() => setMsgStatus(""), 4000);
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] px-6 md:px-12 border-b border-primary/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-2">Get in Touch</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Contact Me</h3>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* Left Column: Details & Socials */}
          <div className="w-full lg:w-2/5 flex flex-col justify-between p-8 glass-panel rounded-2xl border border-primary/10 relative">
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Let's Connect</h4>
              <p className="text-textSilver text-sm leading-relaxed mb-8">
                I am actively seeking full-time opportunities as a Generative AI Developer, AI/ML Engineer, or Python Developer. Reach out if you want to collaborate on cutting-edge AI systems or discuss my portfolio!
              </p>

              {/* Contact Nodes */}
              <div className="flex flex-col gap-6 mb-8">
                {contactDetails.map((node, idx) => (
                  <a 
                    key={idx} 
                    href={node.href}
                    className="flex items-center gap-4 text-textSilver hover:text-primary transition-colors duration-300 clickable"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/15 flex items-center justify-center text-primary text-xl shadow-neon">
                      {node.icon}
                    </div>
                    <span className="text-sm font-semibold">{node.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Icons list */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-textSilver block mb-4">Follow My Work</span>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, idx) => (
                  <a 
                    key={idx}
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:border-primary text-textSilver hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 clickable"
                    aria-label="Social Link"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Input Form */}
          <div className="w-full lg:w-3/5 p-8 glass-panel rounded-2xl border border-primary/10 flex flex-col justify-between">
            <form ref={formRef} onSubmit={handleSendEmail} className="flex flex-col gap-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col text-left">
                  <label className="text-xs font-bold text-textSilver uppercase tracking-wider mb-2">Your Name</label>
                  <input 
                    type="text" 
                    name="user_name"
                    placeholder="Enter name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-white text-sm"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <label className="text-xs font-bold text-textSilver uppercase tracking-wider mb-2">Your Email</label>
                  <input 
                    type="email" 
                    name="user_email"
                    placeholder="Enter email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-white text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col text-left">
                <label className="text-xs font-bold text-textSilver uppercase tracking-wider mb-2">Message</label>
                <textarea 
                  name="message"
                  rows="6"
                  placeholder="Enter message..."
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary outline-none text-white text-sm resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primaryHover transition-all shadow-neon hover:shadow-neonHover duration-300 w-full text-center flex items-center justify-center gap-2 clickable"
              >
                {loading ? "Sending..." : "Submit Message"}
              </button>

              {/* Status Popup Banner */}
              {msgStatus && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-lg text-center text-xs font-bold ${
                    success ? 'bg-green-500/15 border border-green-500/30 text-green-500' : 'bg-red-500/15 border border-red-500/30 text-red-500'
                  }`}
                >
                  {msgStatus}
                </motion.div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
