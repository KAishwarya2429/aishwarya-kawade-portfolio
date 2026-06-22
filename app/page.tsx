import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/sections/hero'
import { Stats } from '@/components/sections/stats'
import { FeaturedProjects } from '@/components/sections/featured-projects'
import { TechStack } from '@/components/sections/tech-stack'
import { OpenSource } from '@/components/sections/open-source'
import { Timeline } from '@/components/sections/timeline'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="relative w-full overflow-hidden bg-background text-foreground pt-16">
        {/* Hero Section */}
        <div id="hero">
          <Hero />
        </div>

        {/* Stats Section */}
        <div id="stats">
          <Stats />
        </div>

        {/* Featured Projects */}
        <div id="projects">
          <FeaturedProjects />
        </div>

        {/* Tech Stack */}
        <div id="skills">
          <TechStack />
        </div>

        {/* Open Source */}
        <div id="opensource">
          <OpenSource />
        </div>

        {/* Timeline */}
        <div id="timeline">
          <Timeline />
        </div>

        {/* Contact */}
        <div id="contact">
          <Contact />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}
