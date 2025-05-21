"use client";
import React, { useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const education = [
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "Guru Nanak High School, Vikhroli",
    duration: "2018 - 2019",
    description:
      "Laid a strong academic foundation with a focus on science and mathematics. Built interest in technology and logical thinking.",
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "Chandrabhan Sharma College, Powai",
    duration: "2019 - 2021",
    description:
      "Specialized in science with IT as a major subject. Developed strong fundamentals in computer science and problem-solving.",
  },
  {
    degree: "BSc IT (Bachelor of Science in Information Technology)",
    institution: "Mumbai University",
    duration: "2021 - 2024",
    description:
      "Focused on full-stack development, software engineering, database systems, and networking. Built academic projects using the MERN stack and gained exposure to DevOps tools and cloud deployment.",
  },
];

const Education = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.id = "education-cursor";
    cursor.innerText = "Education";
    document.body.appendChild(cursor);

    Object.assign(cursor.style, {
      position: "fixed",
      zIndex: "9999",
      pointerEvents: "none",
      color: "rgba(255, 255, 255, 0.85)",
      fontSize: "18px",
      fontWeight: "600",
      fontFamily: "sans-serif",
      padding: "4px 10px",
      borderRadius: "12px",
      whiteSpace: "nowrap",
      transition: "transform 0.1s ease",
      transform: "translate(30px, -50%)",
      transition: "opacity 0.3s ease, transform 0.15s ease",
      display: "none",
      background: "transparent",
      userSelect: "none",
      boxShadow: "none",
    });

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const section = document.getElementById("education-section");

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

    // Check if mouse is inside section on load
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
      id="education-section"
      className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-12">
          <span className="inline-block text-orange-600 mr-2 animate-bounce">
            🎓
          </span>
          Education
        </h2>

        <div className="space-y-10">
          {education.map((edu, index) => (
            <FadeInSlideUp key={index} delay={index * 200}>
              <div className="relative flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-3xl shadow-lg p-8 md:p-10 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(251,146,60,0.7)]">
                <div className="flex-shrink-0 mr-6 text-orange-500 text-4xl animate-pulse-slow">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent dark:text-transparent">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {edu.institution} • {edu.duration}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </FadeInSlideUp>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

// Helper component to fade & slide up when visible
const FadeInSlideUp = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      style={{
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
      }}
    >
      {children}
    </div>
  );
};

export default Education;
