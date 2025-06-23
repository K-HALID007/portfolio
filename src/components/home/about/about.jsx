"use client";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    // Check if device is mobile/touch device
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    
    if (isMobile) {
      return;
    }

    const cursor = document.createElement("div");
    cursor.id = "about-cursor";
    cursor.innerText = "Khalid Shaikh";
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
      transform: "translate(30px, -50%)", // shifted right 10px and vertically centered
      transition: "opacity 0.3s ease, transform 0.15s ease",
      display: "none",
      background: "transparent",
      userSelect: "none",
      boxShadow: "none",
    });

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX + 30}px`; // 30px right of pointer
      cursor.style.top = `${e.clientY}px`;
    };

    const section = document.getElementById("about-section");

    const handleEnter = () => {
      cursor.style.display = "block";
      window.addEventListener("mousemove", moveCursor);
    };

    const handleLeave = () => {
      cursor.style.display = "none";
      window.removeEventListener("mousemove", moveCursor);
    };

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
      id="about-section"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-gray-900 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center gap-8 sm:gap-10 lg:gap-16">
        {/* Text Content*/}
        <div className="w-full xl:w-1/2 text-center xl:text-left">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            About Me{" "}
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-4 sm:mb-6 px-2 sm:px-0">
            Hello! I'm{" "}
            <span className="font-semibold text-orange-500">Khalid</span>. I'm a
            MERN Stack Developer and DevOps Engineer with a passion for building
            modern web applications that are both functional and visually
            engaging.
          </p>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed px-2 sm:px-0">
            I have experience working on more than 10 projects, ranging from
            dynamic websites to scalable backend systems. I am constantly
            exploring new technologies and believe in continuous learning. When
            I'm not coding, I enjoy mentoring, experimenting with open source,
            and leveling up my skill set.
          </p>
        </div>
        {/* Profile Image*/}
        <div className="w-full xl:w-1/2 flex justify-center mt-8 xl:mt-0">
          <img
            src="k.jpg" // this image should be in public folder
            alt="Khalid profile"
            className="w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-full lg:h-auto lg:max-w-md object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
