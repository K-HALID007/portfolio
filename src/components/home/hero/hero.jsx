"use client";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    cursor.textContent = "Khalid Shaikh";
    document.body.appendChild(cursor);

    Object.assign(cursor.style, {
      position: "fixed",
      top: "0",
      left: "0",
      padding: "8px 16px",
      color: "#fff",
      fontWeight: "700",
      fontSize: "18px", // Bigger font size
      fontFamily: "sans-serif",
      borderRadius: "9999px",
      pointerEvents: "none",
      userSelect: "none",
      transform: "translate(30px, -50%)", // right side & vertically centered
      transition: "opacity 0.3s ease, transform 0.15s ease", // smooth opacity + transform
      opacity: "0",
      zIndex: "9999",
      whiteSpace: "nowrap",
      textShadow: "0 0 6px rgba(0,0,0,0.7)",
    });

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const ease = 0.15; // smoothing factor

    // Smoothly animate cursor movement
    const animate = () => {
      currentX += (mouseX - currentX) * ease;
      currentY += (mouseY - currentY) * ease;
      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;
      requestAnimationFrame(animate);
    };

    // Update mouse target coordinates
    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const heroSection = document.querySelector("section");

    const showCursor = () => {
      cursor.style.opacity = "1";
    };

    const hideCursor = () => {
      cursor.style.opacity = "0";
    };

    // Start animation loop
    animate();

    // Initial mousemove to track coordinates
    window.addEventListener("mousemove", moveCursor);

    // Check if mouse is inside hero section initially and on enter/leave
    const checkInitialHover = () => {
      if (!heroSection) return;
      const el = document.elementFromPoint(mouseX, mouseY);
      if (heroSection.contains(el)) showCursor();
      else hideCursor();
    };

    setTimeout(checkInitialHover, 100);

    if (heroSection) {
      heroSection.addEventListener("mouseenter", showCursor);
      heroSection.addEventListener("mouseleave", hideCursor);
    }

    return () => {
      clearTimeout(timeout);
      cursor.remove();
      window.removeEventListener("mousemove", moveCursor);
      if (heroSection) {
        heroSection.removeEventListener("mouseenter", showCursor);
        heroSection.removeEventListener("mouseleave", hideCursor);
      }
    };
  }, []);
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
      <div
        className={`text-center max-w-3xl transform transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-yellow-400">
          Hi, I'm Khalid
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-4">
          I&apos;m a passionate Full-stack Developer crafting beautiful web
          experiences with{" "}
          <span className="font-semibold text-gray-200">Next.js</span>,{" "}
          <span className="font-semibold text-gray-200">React</span>,{" "}
          <span className="font-semibold text-gray-200">Tailwind CSS</span>.
        </p>

        <p className="text-lg md:text-xl text-gray-300 mb-4">
          Building fast, scalable, and elegant applications that solve real
          problems is what drives me every day.
        </p>

        <p className="text-lg md:text-xl text-gray-300 mb-6">
          I’m dedicated to continuous learning and pushing boundaries to deliver
          exceptional digital experiences.
        </p>

        <a
          href="contactme"
          className="inline-block px-8 py-3 text-white bg-orange-600 hover:bg-orange-700 rounded-xl text-lg transition-transform duration-300 transform hover:scale-105 shadow-md hover:shadow-orange-400/40"
        >
          Let's Connect
        </a>
      </div>
    </section>
  );
};

export default Hero;
