"use client";

import { motion } from "framer-motion";
import { Mail, Briefcase, Code2, Phone, MapPin } from "lucide-react";
import { resume } from "@/data/resume";

export function Contact() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 w-full bg-gradient-to-b from-transparent via-pink-500/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Let&apos;s Connect</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Interested in collaborating or discussing AI, backend systems, or
            open source?
          </p>
        </motion.div>

        <motion.div
          className="glass-card p-8 sm:p-12 rounded-xl mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">
                Get in Touch
              </h3>

              <a
                href={`mailto:${resume.email}`}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors group"
              >
                <Mail
                  size={24}
                  className="text-cyan-400 group-hover:scale-110 transition-transform"
                />
                <div>
                  <p className="text-xs text-gray-500 uppercase">Email</p>
                  <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {resume.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${resume.phone}`}
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors group"
              >
                <Phone
                  size={24}
                  className="text-cyan-400 group-hover:scale-110 transition-transform"
                />
                <div>
                  <p className="text-xs text-gray-500 uppercase">Phone</p>
                  <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {resume.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-lg">
                <MapPin size={24} className="text-cyan-400" />
                <div>
                  <p className="text-xs text-gray-500 uppercase">Location</p>
                  <p className="text-white font-semibold">{resume.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>

              <a
                href={resume.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors group"
              >
                <Code2
                  size={24}
                  className="text-cyan-400 group-hover:scale-110 transition-transform"
                />
                <div>
                  <p className="text-xs text-gray-500 uppercase">GitHub</p>
                  <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    View My Projects
                  </p>
                </div>
              </a>

              <a
                href={resume.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors group"
              >
                <Briefcase
                  size={24}
                  className="text-cyan-400 group-hover:scale-110 transition-transform"
                />
                <div>
                  <p className="text-xs text-gray-500 uppercase">LinkedIn</p>
                  <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    Connect Professionally
                  </p>
                </div>
              </a>

              <a
                href={resume.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg hover:bg-[rgba(255,255,255,0.1)] transition-colors group"
              >
                <div className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center">
                  <span className="text-cyan-400 text-xs font-bold">X</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase">Twitter</p>
                  <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    Follow Updates
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileHover={{ scale: 1.02 }}
          >
            <a
              href={`mailto:${resume.email}`}
              className="px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-center"
            >
              Send Me an Email
            </a>
            <a
              href={resume.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-semibold text-white border border-cyan-500/50 hover:border-cyan-400 hover:bg-[rgba(0,212,255,0.1)] transition-all text-center"
            >
              Message on LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>
            Open to full-time, contract, and project-based opportunities.
            Currently interested in AI engineering roles.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
