"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaServer, FaCode, FaCogs, FaCloud } from "react-icons/fa";

const experiences = [
  {
    title: "MERN Stack Developer",
    company: "Freelance / Projects",
    duration: "2022 - Present",
    description:
      "Built and deployed dynamic web apps using MongoDB, Express, React, and Node.js. Focused on creating clean UIs, RESTful APIs, and scalable backends.",
    icon: <FaCode className="text-blue-600 text-3xl" />,
  },
  {
    title: "DevOps Engineer",
    company: "Freelance / Projects",
    duration: "2023 - Present",
    description:
      "Automated deployments, CI/CD pipelines, and cloud infrastructure using Docker, GitHub Actions, and AWS. Monitored apps with Prometheus and Grafana.",
    icon: <FaCogs className="text-green-600 text-3xl" />,
  },
  {
    title: "Cloud Deployment",
    company: "AWS / Vercel",
    duration: "2023 - Present",
    description:
      "Deployed full-stack applications to AWS EC2, S3, and Vercel. Implemented domain routing, SSL, and CDN for better performance and security.",
    icon: <FaCloud className="text-purple-600 text-3xl" />,
  },
  {
    title: "Backend & API Development",
    company: "Node.js / Express",
    duration: "2022 - Present",
    description:
      "Designed secure REST APIs, handled user authentication, and integrated third-party services. Used Postman and Swagger for testing/documentation.",
    icon: <FaServer className="text-orange-600 text-3xl" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  }),
};

const Experience = () => {
  useEffect(() => {
    // Check if device is mobile/touch device
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    
    if (isMobile) {
      return;
    }

    const cursor = document.createElement("div");
    cursor.id = "experience-cursor";
    cursor.innerText = "Experience";
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

    const section = document.getElementById("experience-section");

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
      id="experience-section"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-900 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-6xl w-full text-center">
        <motion.h2
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-200 mb-8 sm:mb-10 lg:mb-12 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="p-4 sm:p-6 border rounded-xl shadow transition duration-300 text-left hover:shadow-2xl hover:scale-105 hover:bg-white/5"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="text-2xl sm:text-3xl">{exp.icon}</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-200">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200">
                    {exp.company} | {exp.duration}
                  </p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
