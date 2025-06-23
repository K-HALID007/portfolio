"use client";
import React, { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    // Check if device is mobile/touch device
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    
    if (isMobile) {
      return;
    }

    const cursor = document.createElement("div");
    cursor.id = "about-me-cursor";
    cursor.innerText = "About Me";
    document.body.appendChild(cursor);

    Object.assign(cursor.style, {
      position: "fixed",
      zIndex: "9999",
      pointerEvents: "none",
      color: "#fff",
      fontSize: "20px",
      fontWeight: "600",
      fontFamily: "sans-serif",
      padding: "4px 10px",
      borderRadius: "12px",
      whiteSpace: "nowrap",
      transform: "translate(30px, -50%)",
      transition: "opacity 0.3s ease, transform 0.15s ease",
      display: "none",
      background: "transparent",
      userSelect: "none",
      boxShadow: "none",
    });

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const ease = 0.15;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Animate cursor smoothly following the mouse
    const animate = () => {
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;
      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;
      requestAnimationFrame(animate);
    };

    const handleEnter = () => {
      cursor.style.display = "block";
      window.addEventListener("mousemove", moveCursor);
      animate();
    };

    const handleLeave = () => {
      cursor.style.display = "none";
      window.removeEventListener("mousemove", moveCursor);
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mouseenter", handleEnter);
      section.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener("mouseenter", handleEnter);
        section.removeEventListener("mouseleave", handleLeave);
      }
      window.removeEventListener("mousemove", moveCursor);
      cursor.remove();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16 lg:pb-20"
    >
      <div className="flex flex-col-reverse xl:flex-row items-center max-w-7xl w-full gap-8 sm:gap-10 lg:gap-16">
        {/* Left side: Text content */}
        <div className="text-center xl:text-left flex-1">
          <h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fadeIn leading-tight"
            style={{
              animationDuration: "1.2s",
              animationTimingFunction: "ease-out",
            }}
          >
            Hi, I'm <span className="text-orange-500">Khalid</span>
          </h1>

          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed px-2 sm:px-0">
            <Typewriter
              words={[
                `I’m Khalid Shaikh, a passionate and results-driven MERN Stack Developer and DevOps Engineer. I specialize in building scalable web applications, cloud-native deployments, and responsive user interfaces with clean, maintainable code. My experience includes projects like dynamic e-commerce platforms, full-stack apps, and system integrations.

I love learning new tools, contributing to open-source projects, and mentoring fellow developers. I’m currently working with Next.js, React, and Tailwind CSS to create modern and performant web experiences.`,
              ]}
              typeSpeed={30}
              deleteSpeed={0}
              delaySpeed={1000}
              cursor
            />
          </p>
        </div>

        {/* Right side: Profile Image */}
        <div className="flex justify-center xl:justify-end flex-1 mt-8 xl:mt-0">
          <img
            src="/k.jpg"
            alt="Khalid"
            className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-orange-400 shadow-lg ring-2 ring-orange-500 ring-opacity-60 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Fade-in animation style */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation-name: fadeIn;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
