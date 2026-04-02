import { motion } from 'framer-motion'

export default function AnimatedBackgroundBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-mesh absolute inset-0 opacity-70" />
      <div className="hero-grid absolute inset-0 opacity-30" />

      <motion.div
        className="absolute -left-20 top-4 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
        animate={{ x: [0, 32, -16, 0], y: [0, -20, 16, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-40px] top-14 h-80 w-80 rounded-full bg-secondary/25 blur-3xl"
        animate={{ x: [0, -20, 18, 0], y: [0, 18, -12, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-32px] left-1/3 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
        animate={{ x: [0, 12, -10, 0], y: [0, 14, -8, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
