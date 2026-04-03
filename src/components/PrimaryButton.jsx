import { motion } from 'framer-motion'

export default function PrimaryButton({ children, className = '', ...props }) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 320, damping: 20 }}
      className={`inline-flex items-center justify-center rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-secondary/90 hover:shadow-xl hover:shadow-secondary/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
