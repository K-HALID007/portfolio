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

    // Attach listeners
    section?.addEventListener("mouseenter", handleEnter);
    section?.addEventListener("mouseleave", handleLeave);

    // NEW: Check if mouse is inside #contact on load
    const rect = section?.getBoundingClientRect();
    if (rect) {
      // Get current mouse position
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

      // Listen once for current mouse position to decide
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
      className="min-h-screen bg-gradient-to-br from-[#1e1b4b] to-[#1e293b] text-white py-20 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16"
      >
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-5xl font-extrabold leading-tight">
            Get in{" "}
            <span className="text-purple-400 border-b-4 border-purple-500">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-md">
            Have questions, opportunities, or feedback? I’d love to hear from
            you and discuss how we can collaborate.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-purple-400 text-2xl mt-1" />
              <div>
                <p className="text-sm text-gray-400 uppercase">Email</p>
                <p className="text-lg">ks0903525@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-purple-400 text-2xl mt-1" />
              <div>
                <p className="text-sm text-gray-400 uppercase">Phone</p>
                <p className="text-lg">+91 8828057917</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-purple-400 text-2xl mt-1" />
              <div>
                <p className="text-sm text-gray-400 uppercase">Address</p>
                <p className="text-lg">Vikhroli, Mumbai, India</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-6">
            <h3 className="text-lg mb-2 font-semibold">Connect with me</h3>
            <div className="flex space-x-5">
              <a
                href="https://wa.me/918828057917"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="text-green-400 text-2xl hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/khalid-shaikh-7392b4320"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-blue-500 text-2xl hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://github.com/K-HALID007"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-gray-300 text-2xl hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.instagram.com/khalid.devops"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="text-pink-500 text-2xl hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <div className="bg-white border border-purple-200 rounded-2xl shadow-2xl p-6 w-[300px] animate-glow-container transition-all duration-500">
            <img
              src="co.svg"
              alt="Contact Illustration"
              className="rounded-xl w-full h-[520px] object-contain drop-shadow-[0_0_15px_rgba(139,92,246,0.7)]"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-400 mt-16">
        © 2025 | Khalid Shaikh
      </div>
    </section>
  );
};

export default Contact;
