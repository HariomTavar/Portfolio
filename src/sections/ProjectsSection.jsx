import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsSection({ projects, links }) {
  const [filter, setFilter] = useState('all')

  const filteredProjects = useMemo(() => {
    if (filter === 'featured') {
      return projects.items.filter((item) => item.featured)
    }
    if (filter === 'case-study') {
      return projects.items.filter((item) => !item.featured)
    }
    return projects.items
  }, [projects.items, filter])

  return (
    <Section id="projects" title={projects.title} subtitle={projects.subtitle} tone="alt">
      <div className="mb-6 flex flex-wrap gap-2">
        {[
          { key: 'all', label: 'All Projects' },
          { key: 'featured', label: 'Featured' },
          { key: 'case-study', label: 'Case Studies' },
        ].map((tab) => (
          <motion.button
            key={tab.key}
            whileTap={{ scale: 0.97 }}
            onClick={() => setFilter(tab.key)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              filter === tab.key
                ? 'border-primary/40 bg-primary/10 text-primary'
                : 'border-borderColor bg-cardBg text-textSecondary hover:text-textPrimary'
            }`}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            links={links}
            direction={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </Section>
  )
}
