"use client";
import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
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
      className="min-h-screen flex items-center px-6 bg-gray-900 "
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content*/}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me{" "}
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Hello! I'm{" "}
            <span className="font-semibold text-orange-500">Khalid</span>. I'm a
            MERN Stack Developer and DevOps Engineer with a passion for building
            modern web applications that are both functional and visually
            engaging.
          </p>
          <p className="text-lg md:text-xl text-gray-200 mt-4 leading-relaxed">
            I have experience working on more than 10 projects, ranging from
            dynamic websites to scalable backend systems. I am constantly
            exploring new technologies and believe in continuous learning. When
            I'm not coding, I enjoy mentoring, experimenting with open source,
            and leveling up my skill set.
          </p>
        </div>
        {/* Profile Image*/}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="k.jpg" // this image should be in public folder
            alt="Khalid profile"
            className="w-100 h-100 object-cover rounded-xl md:mb-0 lg:mb-0 mb-10"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
