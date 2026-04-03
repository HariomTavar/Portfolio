import { motion } from 'framer-motion'

export default function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const directionalOffset =
    direction === 'left'
      ? { x: -28, y: 0 }
      : direction === 'right'
        ? { x: 28, y: 0 }
        : { x: 0, y: 24 }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directionalOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
