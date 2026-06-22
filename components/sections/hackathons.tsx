"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Trophy, Rocket, Sparkles } from "lucide-react";

export function Hackathons() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 w-full bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="hackathons" className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Hackathons & Competitions</span>
          </h2>

          <p className="text-gray-400 text-lg">
            Building innovative solutions under competitive environments
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {resume.hackathons.map((hackathon) => (
            <motion.div
              key={hackathon.name}
              variants={itemVariants}
              className="glass-card rounded-2xl p-8 group hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 border border-white/5 hover:border-cyan-400/20"
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-5">
                  <Trophy className="text-cyan-400" size={26} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {hackathon.name}
                </h3>

                <p className="text-cyan-400 text-sm font-medium">
                  {hackathon.organization}
                </p>
              </div>

              <div className="mb-5">
                <div className="flex items-center gap-2 mb-3">
                  <Rocket size={16} className="text-cyan-400" />
                  <span className="text-sm uppercase tracking-wider text-gray-400">
                    Project
                  </span>
                </div>

                <h4 className="text-xl font-semibold text-white">
                  {hackathon.project}
                </h4>
              </div>

              <div className="flex items-start gap-2">
                <Sparkles
                  size={16}
                  className="text-cyan-400 mt-1 flex-shrink-0"
                />

                <p className="text-gray-400 leading-relaxed">
                  {hackathon.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
