"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Store",
    description:
      "A full-stack e-commerce platform with cart, checkout, admin dashboard, and Stripe integration.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Stripe"],
    image: "ecom.jpg",
    link: "https://your-ecommerce-demo.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase my skills, projects, and contact information with animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "port.jpg",
    link: "https://your-portfolio.com",
  },
  {
    title: "Blog CMS",
    description:
      "A markdown-powered blog content management system with admin interface and user comments.",
    tech: ["Next.js", "Firebase", "Chakra UI"],
    image: "cms.jpg",
    link: "https://your-blog-cms.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.25,
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Check if device is mobile/touch device
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    
    if (isMobile) {
      return;
    }

    // Custom cursor code as before...
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor-label";
    cursor.textContent = "My Projects";
    document.body.appendChild(cursor);

    Object.assign(cursor.style, {
      position: "fixed",
      top: "0",
      left: "0",
      padding: "6px 12px",
      color: "#fff",
      fontWeight: "700",
      fontSize: "18px",
      fontFamily: "Segoe UI",
      borderRadius: "9999px",
      pointerEvents: "none",
      userSelect: "none",
      transform: "translate(30px, -50%)",
      transition: "opacity 0.3s ease, transform 0.15s ease",
      opacity: "0",
      zIndex: "9999",
      whiteSpace: "nowrap",
      textShadow: "0 0 6px rgba(0,0,0,0.7)",
      backgroundColor: "transparent",
    });

    let mouseX = -9999;
    let mouseY = -9999;
    let currentX = 0;
    let currentY = 0;
    const ease = 0.15;

    const animate = () => {
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;
      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;
      requestAnimationFrame(animate);
    };

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const showCursor = () => {
      cursor.style.opacity = "1";
    };

    const hideCursor = () => {
      cursor.style.opacity = "0";
    };

    const section = sectionRef.current;

    animate();

    window.addEventListener("mousemove", moveCursor);

    if (section) {
      section.addEventListener("mouseenter", showCursor);
      section.addEventListener("mouseleave", hideCursor);
    }

    return () => {
      cursor.remove();
      window.removeEventListener("mousemove", moveCursor);
      if (section) {
        section.removeEventListener("mouseenter", showCursor);
        section.removeEventListener("mouseleave", hideCursor);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 leading-tight">
          Projects
        </h2>
        <div className="grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-orange-500/40 transition duration-300 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 lg:h-52 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 group-hover:text-orange-500 transition">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-3 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-orange-600/80 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 font-medium text-xs sm:text-sm"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
