"use client";
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.2, // 20% of the section visible triggers animation
  });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-900 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-4xl w-full text-center">
        {/* Animated heading */}
        <h2
          className={`text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight transition-opacity duration-1000 ease-out ${
            inView ? "opacity-100" : "opacity-0"
          }`}
          style={{
            animationDuration: "1s",
            animationTimingFunction: "ease-out",
          }}
        >
          Contact Me
        </h2>

        <p
          className={`text-sm xs:text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0 transition-opacity duration-1000 ease-out delay-200 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          Got a project idea or just want to say hello? Fill out the form below
          or reach out via email!
        </p>

        {/* Form container */}
        <form
          className={`space-y-4 sm:space-y-6 bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg transition-opacity duration-1000 ease-out delay-400 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2.5 sm:p-3 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 transition text-sm sm:text-base"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2.5 sm:p-3 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 transition text-sm sm:text-base"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-2.5 sm:p-3 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 transition text-sm sm:text-base resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-orange-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base lg:text-lg hover:bg-orange-700 transition duration-300 shadow-md w-full sm:w-auto"
          >
            Send Message
          </button>
        </form>

        {/* Contact info */}
        <div
          className={`mt-8 sm:mt-12 text-gray-400 space-y-3 sm:space-y-4 text-left max-w-lg mx-auto transition-opacity duration-1000 ease-out delay-600 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start text-sm sm:text-base">
            <FaEnvelope className="text-orange-600 flex-shrink-0" /> Email:{" "}
            <a
              href="mailto:ks0903525@gmail.com"
              className="text-orange-600 hover:underline break-all"
            >
              ks0903525@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start text-sm sm:text-base">
            <FaPhoneAlt className="text-orange-600 flex-shrink-0" /> Contact:{" "}
            <a
              href="tel:8828057917"
              className="text-orange-600 hover:underline"
            >
              8828057917
            </a>
          </p>
          <p className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start text-sm sm:text-base">
            <FaMapMarkerAlt className="text-orange-600 flex-shrink-0" /> Location: Mumbai,
            India
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
