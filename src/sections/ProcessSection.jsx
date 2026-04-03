import { motion } from 'framer-motion'
import Section from '../components/Section'
import Reveal from '../components/Reveal'

export default function ProcessSection({ process }) {
  return (
    <Section id="process" title={process.title} subtitle={process.subtitle}>
      <div className="grid gap-5 md:grid-cols-3">
        {process.steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.08}>
            <motion.article
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="glass-surface rounded-3xl p-6"
            >
              <p className="inline-flex rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {step.phase}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-textPrimary">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-textSecondary">{step.description}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
