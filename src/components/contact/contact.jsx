"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    // Check if device is mobile/touch device
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    
    if (isMobile) {
      return;
    }

    const cursor = document.createElement("div");
    cursor.id = "reach-out-cursor";
    cursor.innerText = "Reach Out";
    document.body.appendChild(cursor);

    Object.assign(cursor.style, {
      position: "fixed",
      zIndex: "9999",
      pointerEvents: "none",
      color: "#e0e0ff",
      fontSize: "18px",
      fontWeight: "600",
      fontFamily: "sans-serif",
      padding: "4px 10px",
      borderRadius: "12px",
      whiteSpace: "nowrap",
      textShadow: `
        0 0 6px rgba(139, 92, 246, 0.6),
        0 0 12px rgba(139, 92, 246, 0.5),
        0 0 18px rgba(139, 92, 246, 0.4)
      `,
      transition: "transform 0.1s ease",
      transform: "translate(30px, -50%)",
      display: "none",
      background: "transparent",
    });

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const section = document.getElementById("contact");

    const handleEnter = () => {
      cursor.style.display = "block";
      window.addEventListener("mousemove", moveCursor);
    };

    const handleLeave = () => {
      cursor.style.display = "none";
      window.removeEventListener("mousemove", moveCursor);
    };

    section?.addEventListener("mouseenter", handleEnter);
    section?.addEventListener("mouseleave", handleLeave);

    const rect = section?.getBoundingClientRect();
    if (rect) {
      const onMouseMove = (e) => {
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          handleEnter();
        } else {
          handleLeave();
        }
      };

      window.addEventListener("mousemove", onMouseMove, { once: true });
    }

    return () => {
      section?.removeEventListener("mouseenter", handleEnter);
      section?.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mousemove", moveCursor);
      cursor.remove();
    };
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-[#1e1b4b] to-[#1e293b] text-white pt-32 sm:pt-36 lg:pt-40 xl:pt-44 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8"
      style={{ scrollMarginTop: '80px' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-16 relative z-10"
      >
        {/* Left Side: Text Content */}
        <div className="w-full xl:w-1/2 space-y-6 sm:space-y-8 text-center xl:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
            Get in{" "}
            <span className="text-purple-400 border-b-2 sm:border-b-4 border-purple-500">
              Touch
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Have questions, opportunities, or feedback? I'd love to hear from
            you and discuss how we can collaborate.
          </p>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start gap-3 sm:gap-4 justify-center xl:justify-start">
              <FaEnvelope className="text-purple-400 text-xl sm:text-2xl mt-1 flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <p className="text-sm sm:text-base lg:text-lg break-all">ks0903525@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 justify-center xl:justify-start">
              <FaPhoneAlt className="text-purple-400 text-xl sm:text-2xl mt-1 flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Phone</p>
                <p className="text-sm sm:text-base lg:text-lg">+91 8828057917</p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:gap-4 justify-center xl:justify-start">
              <FaMapMarkerAlt className="text-purple-400 text-xl sm:text-2xl mt-1 flex-shrink-0" />
              <div className="text-left">
                <p className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Address</p>
                <p className="text-sm sm:text-base lg:text-lg">Vikhroli, Mumbai, India</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-6 sm:mt-8">
            <h3 className="text-base sm:text-lg mb-3 sm:mb-4 font-semibold">Connect with me</h3>
            <div className="flex justify-center xl:justify-start space-x-4 sm:space-x-5">
              <a
                href="https://wa.me/918828057917"
                target="_blank"
                rel="noreferrer"
                className="p-2 sm:p-0 hover:bg-green-400/10 rounded-full transition-colors duration-300"
              >
                <FaWhatsapp className="text-green-400 text-xl sm:text-2xl hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/khalid-shaikh-7392b4320"
                target="_blank"
                rel="noreferrer"
                className="p-2 sm:p-0 hover:bg-blue-500/10 rounded-full transition-colors duration-300"
              >
                <FaLinkedin className="text-blue-500 text-xl sm:text-2xl hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://github.com/K-HALID007"
                target="_blank"
                rel="noreferrer"
                className="p-2 sm:p-0 hover:bg-gray-300/10 rounded-full transition-colors duration-300"
              >
                <FaGithub className="text-gray-300 text-xl sm:text-2xl hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.instagram.com/khalid.devops"
                target="_blank"
                rel="noreferrer"
                className="p-2 sm:p-0 hover:bg-pink-500/10 rounded-full transition-colors duration-300"
              >
                <FaInstagram className="text-pink-500 text-xl sm:text-2xl hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Animated SVG Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-full xl:w-1/2 flex justify-center items-center mt-4 sm:mt-6 xl:mt-0"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md">
            {/* Animated Contact SVG */}
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 400 400"
              className="drop-shadow-2xl w-full h-auto"
            >
              {/* Background Circle with Gradient */}
              <defs>
                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
                <linearGradient id="messageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>

              {/* Background Circle */}
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="url(#bgGradient)"
                className="animate-pulse-slow"
              />

              {/* Phone Device */}
              <g className="animate-float">
                <rect
                  x="140"
                  y="120"
                  width="120"
                  height="200"
                  rx="20"
                  fill="url(#phoneGradient)"
                  className="drop-shadow-lg"
                />
                <rect
                  x="150"
                  y="140"
                  width="100"
                  height="160"
                  rx="8"
                  fill="#1f2937"
                />
                
                {/* Phone Screen Content */}
                <circle cx="200" cy="135" r="3" fill="#6b7280" />
                <rect x="170" y="150" width="60" height="4" rx="2" fill="#8b5cf6" />
                <rect x="160" y="160" width="80" height="3" rx="1.5" fill="#6b7280" />
                <rect x="160" y="170" width="70" height="3" rx="1.5" fill="#6b7280" />
                <rect x="160" y="180" width="75" height="3" rx="1.5" fill="#6b7280" />
                
                {/* Message Bubbles */}
                <rect x="160" y="200" width="50" height="20" rx="10" fill="#8b5cf6" className="animate-pulse" />
                <rect x="190" y="230" width="45" height="20" rx="10" fill="#374151" />
                <rect x="160" y="260" width="55" height="20" rx="10" fill="#8b5cf6" className="animate-pulse" style={{animationDelay: '0.5s'}} />
              </g>

              {/* Floating Message Icons */}
              <g className="animate-float" style={{animationDelay: '1s'}}>
                <circle cx="100" cy="150" r="25" fill="url(#messageGradient)" opacity="0.8" />
                <path
                  d="M85 140 L115 140 L115 155 L105 155 L100 165 L95 155 L85 155 Z"
                  fill="white"
                />
                <rect x="90" y="145" width="20" height="2" fill="#1f2937" />
                <rect x="90" y="150" width="15" height="2" fill="#1f2937" />
              </g>

              <g className="animate-float" style={{animationDelay: '2s'}}>
                <circle cx="320" cy="180" r="20" fill="#10b981" opacity="0.8" />
                <path
                  d="M310 175 L330 175 L330 185 L325 185 L320 190 L315 185 L310 185 Z"
                  fill="white"
                />
                <rect x="313" y="178" width="14" height="1.5" fill="#1f2937" />
                <rect x="313" y="181" width="10" height="1.5" fill="#1f2937" />
              </g>

              {/* Email Icon */}
              <g className="animate-float" style={{animationDelay: '1.5s'}}>
                <circle cx="300" cy="280" r="22" fill="#f59e0b" opacity="0.8" />
                <rect x="285" y="270" width="30" height="20" rx="3" fill="white" />
                <path d="M285 270 L300 280 L315 270" stroke="#1f2937" strokeWidth="2" fill="none" />
              </g>

              {/* Notification Dots */}
              <circle cx="80" cy="250" r="4" fill="#ef4444" className="animate-ping" />
              <circle cx="320" cy="120" r="3" fill="#10b981" className="animate-ping" style={{animationDelay: '1s'}} />
              <circle cx="350" cy="220" r="2" fill="#8b5cf6" className="animate-ping" style={{animationDelay: '2s'}} />

              {/* Connection Lines */}
              <g stroke="#8b5cf6" strokeWidth="2" opacity="0.3" className="animate-pulse">
                <line x1="125" y1="150" x2="140" y2="160" />
                <line x1="260" y1="180" x2="300" y2="180" />
                <line x1="260" y1="250" x2="285" y2="270" />
              </g>

              {/* Floating Particles */}
              <circle cx="60" cy="100" r="2" fill="#8b5cf6" opacity="0.6" className="animate-bounce" />
              <circle cx="340" cy="320" r="1.5" fill="#3b82f6" opacity="0.6" className="animate-bounce" style={{animationDelay: '0.5s'}} />
              <circle cx="380" cy="80" r="1" fill="#f59e0b" opacity="0.6" className="animate-bounce" style={{animationDelay: '1s'}} />
            </svg>

            {/* Glowing Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow -z-10"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <div className="text-center text-xs sm:text-sm text-gray-400 mt-12 sm:mt-16 lg:mt-20">
        © 2025 | Khalid Shaikh
      </div>
    </section>
  );
};

export default Contact;