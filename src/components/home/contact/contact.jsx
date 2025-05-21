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
      className="min-h-screen flex items-center justify-center px-6 bg-gray-900"
    >
      <div className="max-w-3xl w-full text-center">
        {/* Animated heading */}
        <h2
          className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-opacity duration-1000 ease-out ${
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
          className={`text-lg text-gray-400 mb-8 max-w-xl mx-auto transition-opacity duration-1000 ease-out delay-200 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          Got a project idea or just want to say hello? Fill out the form below
          or reach out via email!
        </p>

        {/* Form container */}
        <form
          className={`space-y-6 bg-gray-800 p-8 rounded-xl shadow-lg transition-opacity duration-1000 ease-out delay-400 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 transition"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 transition"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 transition"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-700 transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </form>

        {/* Contact info */}
        <div
          className={`mt-12 text-gray-400 space-y-3 text-left max-w-md mx-auto transition-opacity duration-1000 ease-out delay-600 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="flex items-center gap-3 justify-center md:justify-start">
            <FaEnvelope className="text-orange-600" /> Email:{" "}
            <a
              href="mailto:ks0903525@gmail.com"
              className="text-orange-600 hover:underline"
            >
              ks0903525@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-3 justify-center md:justify-start">
            <FaPhoneAlt className="text-orange-600" /> Contact:{" "}
            <a
              href="tel:8828057917"
              className="text-orange-600 hover:underline"
            >
              8828057917
            </a>
          </p>
          <p className="flex items-center gap-3 justify-center md:justify-start">
            <FaMapMarkerAlt className="text-orange-600" /> Location: Mumbai,
            India
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
