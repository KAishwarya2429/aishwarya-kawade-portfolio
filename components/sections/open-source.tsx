"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Code2, Star, GitFork, ExternalLink } from "lucide-react";

export function OpenSource() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 w-full bg-gradient-to-b from-transparent via-green-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="open-source" className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Open Source Contributions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Projects I maintain and contribute to
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {resume.openSource.map((project, index) => (
            <motion.div
              key={project.name}
              className="glass-card p-6 sm:p-8 rounded-xl group hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-start justify-between mb-4 gap-4">
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 size={20} className="text-cyan-400" />
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <p className="inline-block px-3 py-1 bg-cyan-500/20 text-xs text-cyan-300 rounded-full font-semibold mb-3">
                    {project.role}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 p-2 rounded-lg hover:bg-[rgba(0,212,255,0.2)] text-cyan-400 transition-colors"
                  aria-label="Visit repository"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <p className="text-gray-400 text-sm mb-4 italic border-l-2 border-cyan-400/50 pl-4">
                {project.contributions}
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1 bg-[rgba(0,212,255,0.1)] rounded-lg">
                  <Star size={16} className="text-cyan-400" />
                  <span className="text-sm text-cyan-300 font-semibold">
                    {project.stars} stars
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-[rgba(0,212,255,0.1)] rounded-lg">
                  <GitFork size={16} className="text-cyan-400" />
                  <span className="text-sm text-cyan-300 font-semibold">
                    {project.prs} PRs
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
