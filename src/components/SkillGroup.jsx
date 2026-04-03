import Reveal from './Reveal'
import { motion } from 'framer-motion'

export default function SkillGroup({ group }) {
  return (
    <Reveal>
      <motion.article
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="glass-surface rounded-3xl p-6 transition hover:shadow-xl hover:shadow-secondary/15"
      >
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-textPrimary">{group.title}</h3>
          <span className="rounded-full border border-borderColor bg-baseBg/60 px-2.5 py-1 text-xs font-medium text-textSecondary">
            {group.items.length}
          </span>
        </div>

        <div className="mt-3 h-[2px] w-20 rounded-full bg-gradient-to-r from-secondary/90 to-primary/70" />

        <motion.div
          className="mt-4 flex flex-wrap gap-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.05 },
            },
          }}
        >
          {group.items.map((item) => (
            <motion.span
              key={item}
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -2, borderColor: 'rgba(59,130,246,0.55)', color: '#E5E7EB' }}
              className="rounded-full border border-borderColor bg-baseBg/80 px-3 py-1.5 text-sm text-textSecondary transition"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </motion.article>
    </Reveal>
  )
}
