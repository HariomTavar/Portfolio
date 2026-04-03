import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function QuickSectionRail({ items, onNavigate }) {
  const [active, setActive] = useState(items[0]?.target ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.42 },
    )

    items.forEach((item) => {
      const el = document.getElementById(item.target)
      if (el) {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <div className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 lg:block">
      <div className="glass-surface flex flex-col gap-2 rounded-2xl p-2">
        {items.map((item) => {
          const isActive = active === item.target
          return (
            <button
              key={item.target}
              onClick={() => onNavigate(item.target)}
              aria-label={`Go to ${item.label}`}
              className="group relative"
            >
              <motion.span
                animate={{ scale: isActive ? 1.12 : 1 }}
                className={`block h-2.5 w-2.5 rounded-full transition ${
                  isActive ? 'bg-primary' : 'bg-textSecondary/50 group-hover:bg-textPrimary/80'
                }`}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
