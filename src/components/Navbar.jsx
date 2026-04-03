import { useMemo, useState } from 'react'

export default function Navbar({ navItems, onNavigate, ownerName }) {
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const primaryItems = useMemo(() => navItems.slice(1, 6), [navItems])
  const secondaryItems = useMemo(() => navItems.slice(6), [navItems])

  return (
    <header className="sticky top-0 z-40 border-b border-borderColor/80 bg-baseBg/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 md:px-6">
        <button
          onClick={() => onNavigate('hero')}
          className="text-left text-base font-semibold tracking-tight text-textPrimary"
          aria-label="Go to hero section"
        >
          {ownerName}
        </button>

        <nav className="flex items-center gap-5" aria-label="Primary navigation">
          {primaryItems.map((item) => (
            <button
              key={item.target}
              onClick={() => onNavigate(item.target)}
              className={`group relative hidden whitespace-nowrap text-sm font-medium transition md:block ${
                item.active ? 'text-textPrimary' : 'text-textSecondary hover:text-textPrimary'
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-primary transition-transform duration-300 ${
                  item.active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>
          ))}

          {secondaryItems.length ? (
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsMoreOpen((prev) => !prev)}
                className="rounded-lg border border-borderColor bg-cardBg px-3 py-1.5 text-sm font-medium text-textSecondary transition hover:text-textPrimary"
              >
                More
              </button>

              {isMoreOpen ? (
                <div className="absolute right-0 mt-2 w-44 rounded-xl border border-borderColor bg-cardBg p-2 shadow-card">
                  {secondaryItems.map((item) => (
                    <button
                      key={item.target}
                      onClick={() => {
                        onNavigate(item.target)
                        setIsMoreOpen(false)
                      }}
                      className="block w-full rounded-lg px-3 py-2 text-left text-sm text-textSecondary transition hover:bg-baseBg hover:text-textPrimary"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}

          <button
            onClick={() => onNavigate('contact')}
            className="rounded-lg bg-gradient-to-r from-primary to-secondary px-3.5 py-2 text-xs font-semibold text-white shadow-premium transition hover:scale-[1.02] md:text-sm"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  )
}
