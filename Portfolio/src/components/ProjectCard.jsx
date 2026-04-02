import { motion } from 'framer-motion'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import Reveal from './Reveal'

export default function ProjectCard({ project, links, direction = 'up' }) {
  return (
    <Reveal direction={direction}>
      <motion.article
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        className={`glass-surface rounded-3xl bg-gradient-to-br from-[#111827] via-[#111827] to-[#0A0F1C] p-6 transition hover:shadow-xl hover:shadow-primary/20 md:p-7 ${
          project.featured ? 'md:col-span-2' : ''
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-textPrimary md:text-2xl">{project.title}</h3>
            <p className="mt-2 text-sm font-medium text-secondary">{project.type}</p>
          </div>
          {project.featured ? (
            <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
              Featured
            </span>
          ) : null}
        </div>

        <div className="mt-5 space-y-4 text-sm leading-relaxed text-textSecondary">
          <p>
            <span className="font-semibold text-textPrimary">Problem: </span>
            {project.problem}
          </p>
          <p>
            <span className="font-semibold text-textPrimary">Solution: </span>
            {project.solution}
          </p>
          <div>
            <p className="font-semibold text-textPrimary">Key Features:</p>
            <ul className="mt-2 space-y-1">
              {project.keyFeatures.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </div>
          <p>
            <span className="font-semibold text-textPrimary">Impact: </span>
            {project.impact}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <PrimaryButton onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}>
              {project.liveLabel}
            </PrimaryButton>
          ) : (
            <SecondaryButton onClick={() => window.open(links.github, '_blank', 'noopener,noreferrer')}>
              View Case Study
            </SecondaryButton>
          )}
          <SecondaryButton onClick={() => window.open(links.github, '_blank', 'noopener,noreferrer')}>
            GitHub
          </SecondaryButton>
        </div>
      </motion.article>
    </Reveal>
  )
}
