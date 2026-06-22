"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { resume } from "@/data/resume";

export function Stats() {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    resume.stats.forEach((stat) => {
      const maxCount = parseInt(stat.value.replace(/\D/g, ""));
      let current = 0;

      const interval = setInterval(() => {
        current += Math.ceil(maxCount / 30);
        if (current >= maxCount) {
          setCounts((prev) => ({ ...prev, [stat.label]: maxCount }));
          clearInterval(interval);
        } else {
          setCounts((prev) => ({ ...prev, [stat.label]: current }));
        }
      }, 50);

      return () => clearInterval(interval);
    });
  }, [isVisible]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative py-20 px-4 sm:px-6 lg:px-8 w-full bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Impact by Numbers</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Metrics that showcase my technical journey
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {resume.stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 sm:p-8 text-center rounded-xl group hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300"
              variants={itemVariants}
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {counts[stat.label] || 0}+
              </div>
              <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub contribution graph placeholder */}
        <motion.div
          className="mt-16 glass-card p-8 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Experience & Achievements Section */}
          <div id="experience" className="mt-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-white">
              Experience & Achievements
            </h3>

            <div className="relative border-l border-[rgba(255,255,255,0.08)] pl-10 space-y-14">
              {/* FinTech */}
              <div className="relative">
                <span className="absolute -left-[46px] top-3 flex h-5 w-5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-30"></span>
                  <span className="relative inline-flex h-5 w-5 rounded-full bg-blue-500"></span>
                </span>

                <h4 className="text-2xl font-semibold text-white">
                  DevOps & Automation Extern
                </h4>

                <p className="text-blue-400 text-lg mt-2">
                  Zetheta Algorithm Pvt Lmt
                </p>

                <p className="text-gray-400 text-base md:text-lg leading-8 mt-4 max-w-3xl">
                  Building automation-driven software solutions, backend
                  integrations, workflow orchestration, API-based systems, and
                  intelligent business process automation focused on operational
                  efficiency and scalability.
                </p>
              </div>

              {/* GSSoC */}
              <div className="relative">
                <span className="absolute -left-[46px] top-3 flex h-5 w-5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-30"></span>
                  <span className="relative inline-flex h-5 w-5 rounded-full bg-blue-500"></span>
                </span>

                <h4 className="text-2xl font-semibold text-white">
                  Open Source Contributor
                </h4>

                <p className="text-blue-400 text-lg mt-2">
                  GirlScript Summer of Code 2026
                </p>

                <p className="text-gray-400 text-base md:text-lg leading-8 mt-4 max-w-3xl">
                  Contributing to AgentAPI and EnterpriseRAG AI projects.
                  Developed provider fallback routing, enhanced testing
                  coverage, resolved backend issues, and delivered
                  production-ready open-source improvements.
                </p>
              </div>

              {/* Google */}
              <div className="relative">
                <span className="absolute -left-[46px] top-3 flex h-5 w-5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-30"></span>
                  <span className="relative inline-flex h-5 w-5 rounded-full bg-blue-500"></span>
                </span>

                <h4 className="text-2xl font-semibold text-white">
                  Generative AI Practitioner
                </h4>

                <p className="text-blue-400 text-lg mt-2">
                  Google Cloud GenAI Programs
                </p>

                <p className="text-gray-400 text-base md:text-lg leading-8 mt-4 max-w-3xl">
                  Completed advanced Generative AI programs with hands-on
                  experience in Gemini, Vertex AI, AI Agents, Prompt
                  Engineering, Cloud Deployment, and modern AI application
                  development.
                </p>
              </div>

              {/* NASA */}
              <div className="relative">
                <span className="absolute -left-[46px] top-3 flex h-5 w-5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-30"></span>
                  <span className="relative inline-flex h-5 w-5 rounded-full bg-blue-500"></span>
                </span>

                <h4 className="text-2xl font-semibold text-white">
                  NASA Open Science 101 Challenge
                </h4>

                <p className="text-blue-400 text-lg mt-2">
                  Research & Open Science
                </p>

                <p className="text-gray-400 text-base md:text-lg leading-8 mt-4 max-w-3xl">
                  Completed NASA Open Science training focused on reproducible
                  research, open-source collaboration, scientific workflows, and
                  data-driven problem solving for modern research environments.
                </p>
              </div>

              {/* AI Backend */}
              <div className="relative">
                <span className="absolute -left-[46px] top-3 flex h-5 w-5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-30"></span>
                  <span className="relative inline-flex h-5 w-5 rounded-full bg-blue-500"></span>
                </span>

                <h4 className="text-2xl font-semibold text-white">
                  AI & Backend Engineering
                </h4>

                <p className="text-blue-400 text-lg mt-2">
                  Java • Python • PostgreSQL • RAG • LLMs
                </p>

                <p className="text-gray-400 text-base md:text-lg leading-8 mt-4 max-w-3xl">
                  Designing scalable backend systems and AI-powered applications
                  using Java, Python, REST APIs, PostgreSQL, Retrieval-Augmented
                  Generation, LLM integrations, and intelligent automation
                  workflows.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
