"use client";

import { motion } from "framer-motion";
import { resume } from "@/data/resume";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";

export function Certifications() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            id="certifications"
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            <span className="gradient-text">Certifications</span>
          </h2>

          <p className="text-gray-400 text-lg">
            Industry programs, simulations, and professional learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {resume.certifications.map((cert) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 group hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                    <Award size={22} className="text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {cert.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-2">
                      <ShieldCheck size={14} className="text-cyan-400" />
                      <span className="text-sm text-gray-400">
                        {cert.issuer}
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
