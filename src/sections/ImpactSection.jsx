import { motion } from 'framer-motion'
import Section from '../components/Section'
import Reveal from '../components/Reveal'

export default function ImpactSection({ impact }) {
  return (
    <Section id="impact" title={impact.title} subtitle={impact.subtitle} tone="alt">
      <div className="grid gap-4 md:grid-cols-4">
        {impact.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.06}>
            <motion.article
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              className="glass-surface rounded-3xl p-6"
            >
              <p className="text-3xl font-semibold text-primary md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-textPrimary">{stat.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-textSecondary">{stat.description}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
