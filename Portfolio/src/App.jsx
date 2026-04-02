import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import FutureSection from './sections/FutureSection'
import HeroSection from './sections/HeroSection'
import JourneySection from './sections/JourneySection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import WhyWorkSection from './sections/WhyWorkSection'
import { portfolioData } from './data/portfolioData'

function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  const handleNavigate = (target) => {
    const section = document.getElementById(target)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    document.title = portfolioData.site.title
  }, [])

  return (
    <div className="min-h-screen bg-baseBg text-textPrimary">
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-primary via-secondary to-highlight"
        style={{ scaleX: progress }}
      />

      <main>
        <HeroSection
          hero={portfolioData.hero}
          links={portfolioData.links}
          onNavigate={handleNavigate}
        />
        <AboutSection about={portfolioData.about} />
        <ProjectsSection projects={portfolioData.projects} links={portfolioData.links} />
        <SkillsSection skills={portfolioData.skills} />
        <JourneySection journey={portfolioData.journey} />
        <WhyWorkSection whyWork={portfolioData.whyWork} />
        <FutureSection future={portfolioData.future} />
        <ContactSection contact={portfolioData.contact} />
      </main>
    </div>
  )
}

export default App
