import { motion } from 'framer-motion'

export default function GradientButton({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  variant = 'primary',
}) {
  const baseClass =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2'

  const variants = {
    primary: 'primary-gradient text-white focus-visible:ring-primary/60',
    secondary: 'bg-white text-primary border border-primary focus-visible:ring-primary/60',
    outline: 'bg-transparent text-primary border border-primary hover:bg-primary/5 focus-visible:ring-primary/60',
  }

  const classes = `${baseClass} ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        whileTap={{ scale: 0.98 }}
        whileHover={{ y: -2 }}
        href={href}
        target={target}
        rel={rel}
        className={classes}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ y: -2 }}
      onClick={onClick}
      className={classes}
    >
      {children}
    </motion.button>
  )
}
