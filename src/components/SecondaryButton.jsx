import { motion } from 'framer-motion'

export default function SecondaryButton({ children, className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
      className={`inline-flex items-center justify-center rounded-xl border border-secondary/45 bg-cardBg px-6 py-3 text-sm font-semibold text-secondary shadow-card transition hover:border-secondary hover:text-secondary hover:shadow-xl hover:shadow-secondary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
