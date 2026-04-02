import { motion } from 'framer-motion'

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-12 md:mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-3xl md:text-4xl font-bold tracking-tight text-textPrimary"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-4 text-lg text-textSecondary max-w-2xl"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  )
}
