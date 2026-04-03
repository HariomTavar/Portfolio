import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`card card-hover ${className}`}
    >
      {children}
    </motion.div>
  )
}
