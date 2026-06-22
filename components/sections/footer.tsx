'use client'

import { motion } from 'framer-motion'
import { Code2, Briefcase, Mail, Heart } from 'lucide-react'
import { resume } from '@/data/resume'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.1)] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.3)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{resume.name}</h3>
            <p className="text-gray-400 text-sm">{resume.title}</p>
            <p className="text-gray-500 text-xs mt-2">Building intelligent systems at scale</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#stats" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="#footer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={resume.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[rgba(0,212,255,0.1)] hover:bg-[rgba(0,212,255,0.2)] text-cyan-400 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <Code2 size={20} />
              </a>
              <a
                href={resume.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[rgba(0,212,255,0.1)] hover:bg-[rgba(0,212,255,0.2)] text-cyan-400 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Briefcase size={20} />
              </a>
              <a
                href={`mailto:${resume.email}`}
                className="p-2 rounded-lg bg-[rgba(0,212,255,0.1)] hover:bg-[rgba(0,212,255,0.2)] text-cyan-400 transition-all hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[rgba(255,255,255,0.1)] my-8" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {currentYear} Aishwarya Kawade. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Crafted with <Heart size={16} className="text-cyan-400" /> for great tech
          </p>
          <p className="text-gray-500 text-xs">
            Built with Next.js, React & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
