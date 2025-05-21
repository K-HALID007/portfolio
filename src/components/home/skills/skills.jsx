"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiTypescript,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState("");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Use springs for smooth motion instead of instant jumps
  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  useEffect(() => {
    // Attach global mousemove listener only when tooltip active
    if (hoveredSkill) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }
    // Cleanup
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hoveredSkill]);

  useEffect(() => {
    // This part creates the legacy tooltip div and animates it smoothly
    const cursor = document.createElement("div");
    cursor.id = "custom-tooltip";
    document.body.appendChild(cursor);

    Object.assign(cursor.style, {
      position: "fixed",
      top: "0",
      left: "0",
      padding: "8px 16px",
      background: "#222",
      color: "#fff",
      fontWeight: "700",
      fontSize: "18px",
      fontFamily: "sans-serif",
      borderRadius: "9999px",
      pointerEvents: "none",
      userSelect: "none",
      transform: "translate(30px, -50%)",
      transition: "opacity 0.3s ease, transform 0.15s ease",
      opacity: "0",
      zIndex: "9999",
      whiteSpace: "nowrap",
    });

    let mouseX = 0,
      mouseY = 0,
      currentX = 0,
      currentY = 0;
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

    animate();
    window.addEventListener("mousemove", moveCursor);

    return () => {
      cursor.remove();
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const cursor = document.getElementById("custom-tooltip");
    if (!cursor) return;

    if (hoveredSkill) {
      cursor.textContent = hoveredSkill;
      cursor.style.opacity = "1";
    } else {
      cursor.style.opacity = "0";
    }
  }, [hoveredSkill]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gray-900 relative overflow-hidden">
      {/* Tooltip Cursor with smooth spring motion */}
      {hoveredSkill && (
        <motion.div
          className="fixed z-50 px-3 py-1 bg-white text-sm font-bold text-black rounded-lg shadow-lg pointer-events-none select-none"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-150%", // tooltip above cursor
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.25 }}
        >
          {hoveredSkill}
        </motion.div>
      )}

      <div className="max-w-5xl w-full text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-xl hover:shadow-lg transition duration-300 hover:scale-105 cursor-pointer"
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100 },
                },
              }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill("")}
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-lg font-medium text-gray-800">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
