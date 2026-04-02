import { motion } from 'framer-motion'

export default function ModeTabs({ tabs, activeMode, onChange }) {
  return (
    <div className="inline-flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
      {tabs.map((tab) => {
        const isActive = activeMode === tab.key
        return (
          <motion.button
            key={tab.key}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChange(tab.key)}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
              isActive
                ? 'signature-gradient text-textPrimary shadow-[0_0_22px_rgba(59,130,246,0.25)]'
                : 'text-textSecondary hover:text-textPrimary'
            }`}
          >
            <span className="mr-2 inline-block">{tab.icon}</span>
            {tab.label}
          </motion.button>
        )
      })}
    </div>
  )
}
