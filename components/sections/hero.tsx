"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { resume } from "@/data/resume";

const roles = [
  "AI Engineer",
  "Backend Developer",
  "Open Source Contributor",
  "System Designer",
  "AI Agent Builder",
];

const techBadges = [
  "Java",
  "Python",
  "AI Agents",
  "RAG",
  "GCP",
  "PostgreSQL",
  "Open Source",
];

// const achievements = [
//   { label: "GSSoC 2026", subtitle: "Contributor", icon: "⭐" },
//   { label: "NASA Open Science", subtitle: "Certified", icon: "🚀" },
//   { label: "Google GenAI", subtitle: "Program", icon: "✨" },
//   { label: "Open Source", subtitle: "Contributor", icon: "💎" },
// ];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting && displayedRole === currentRole) {
      const delayBeforeDelete = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50);
      }, 2000);
      return () => clearTimeout(delayBeforeDelete);
    }

    if (isDeleting && displayedRole === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(100);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedRole(displayedRole.slice(0, -1));
      } else {
        setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedRole, roleIndex, isDeleting, typingSpeed]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatVariants = {
    float: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="w-full max-w-6xl z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div className="flex flex-col justify-center">
            {/* Main headline */}
            <motion.h1
              id="about"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              Building <span className="gradient-text">AI Systems</span> That{" "}
              <span className="gradient-text">Think,</span>{" "}
              <span className="gradient-text">Learn</span> and{" "}
              <span className="gradient-text">Scale.</span>
            </motion.h1>
            {/* Typing animation role */}
            <motion.div className="mb-6 h-10" variants={itemVariants}>
              <p className="text-lg sm:text-xl text-cyan-400 font-semibold min-h-10">
                {displayedRole}
                <span className="animate-pulse ml-1">|</span>
              </p>
            </motion.div>
            {/* Subheading */}
            <motion.p
              className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              {resume.bio}
            </motion.p>
            {/* CTA Buttons
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8"
              variants={itemVariants}
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="https://github.com/KAishwarya2429"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-semibold text-white border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/aishwarya-kawade-9b0356319"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-semibold text-white border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
              >
                LinkedIn
              </a>
              <a
                href="/resume/Aishwarya_Kawade_Resume.pdf"
                download
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div> */}
            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8"
              variants={itemVariants}
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
              >
                View Projects
              </a>

              <a
                href="https://github.com/KAishwarya2429"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-semibold text-white border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/aishwarya-kawade-9b0356319"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg font-semibold text-white border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
              >
                LinkedIn
              </a>

              <a
                href="/resume/Aishwarya_Kawade__Resume.pdf"
                download
                className="px-6 py-3 rounded-lg font-semibold text-white border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all"
              >
                Resume
              </a>
            </motion.div>
            {/* Status badge */}
            <motion.div
              className="flex items-center gap-3"
              variants={itemVariants}
            >
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">
                Available for Internships and Early Career Opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Right Column - Portrait Section */}
          <motion.div
            className="relative flex flex-col items-center justify-center"
            variants={itemVariants}
          >
            {/* Portrait with glowing border */}
            <motion.div
              className="relative w-64 h-80 rounded-3xl overflow-hidden"
              animate="float"
              variants={floatVariants}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl p-1 -z-10 animate-glow" />
              <div className="absolute inset-1 bg-background rounded-3xl -z-10" />

              {/* Portrait image */}
              <Image
                src="/aishukawadepic.jpeg"
                alt="Aishwarya Kawade"
                fill
                className="object-cover rounded-3xl"
                priority
              />
            </motion.div>
            {/* Name and title below image */}
            <motion.div className="text-center mt-6" variants={itemVariants}>
              <h2 className="text-2xl font-bold text-white mb-1">
                Aishwarya Kawade
              </h2>
              <p className="text-cyan-400 font-medium">AI & Backend Engineer</p>
            </motion.div>
            {/* Tech badges around portrait */}
            {/* <div className="absolute inset-0 pointer-events-none">
              {techBadges.map((badge, i) => {
                const angle = (i / techBadges.length) * Math.PI * 2;
                const radius = 160;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={badge}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  >
                    <div className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-full text-xs font-semibold text-cyan-400 backdrop-blur-sm whitespace-nowrap">
                      {badge}
                    </div>
                  </motion.div>
                );
              })}
            </div> */}
            {/* Achievement cards */}
            <div className="absolute -bottom-20 -left-10 right-0 grid grid-cols-2 gap-4 pointer-events-none">
              {/* {achievements.map((achievement, i) => (
                <motion.div
                  key={i}
                  className="glass-card p-4 rounded-lg backdrop-blur-md border border-cyan-500/30 hover:border-cyan-400/60 pointer-events-auto transition-all"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <div className="text-sm font-semibold text-white">
                    {achievement.label}
                  </div>
                  <div className="text-xs text-gray-400">
                    {achievement.subtitle}
                  </div>
                </motion.div>
              ))} */}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => {
          document
            .getElementById("stats")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <div className="w-6 h-10 border border-cyan-400 rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
