"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";

export function TechStack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 w-full bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg">
            30+ technologies across multiple domains
          </p>
        </motion.div>

        {/* <div className="space-y-12">
          {Object.entries(resume.skills).map((entry, categoryIndex) => {
            const [category, skills] = entry
            return (
              <motion.div
                key={category}
                className="space-y-4"
                variants={categoryVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider">{category}</h3>
                </div>

                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="glass-card p-4 rounded-lg text-center group hover:bg-[rgba(255,255,255,0.1)] hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <p className="text-sm font-semibold text-gray-200 group-hover:text-cyan-400 transition-colors">
                        {skill}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div> */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(resume.skills).map(([category, skills], index) => (
            <motion.div
              key={category}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.05] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 mb-3">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="text-3xl font-bold text-white">{category}</h3>
                </div>

                <div className="h-14 w-14 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-cyan-400">
                    {category.slice(0, 2)}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="text-sm text-gray-400 leading-7">
                  {category === "Backend" &&
                    "Used in Java, Spring Boot, REST API, automation workflows, and full-stack backend projects."}

                  {category === "AI/ML" &&
                    "Applied in RAG systems, AI agents, prompt engineering, Gemini integrations, and intelligent automation projects."}

                  {category === "Databases" &&
                    "Used for storing application data, authentication, reports, analytics, and scalable backend systems."}

                  {category === "Cloud" &&
                    "Hands-on exposure through Google Cloud GenAI programs, Vertex AI, Cloud Run, and AI deployment workflows."}

                  {category === "DevOps" &&
                    "Used for project deployment, CI/CD workflows, GitHub collaboration, Dockerized apps, and production-ready development."}

                  {category === "Architecture" &&
                    "Focused on scalable backend design, distributed systems, microservices, REST APIs, and event-driven workflows."}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interests/Learning */}
        <motion.div
          className="mt-16 glass-card p-8 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Currently Learning & Interested In
          </h3>
          <div className="flex flex-wrap gap-3">
            {resume.interests.map((interest, i) => (
              <motion.div
                key={i}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-sm text-cyan-300 font-medium"
                whileHover={{ scale: 1.05, borderColor: "#00d4ff" }}
              >
                {interest}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
