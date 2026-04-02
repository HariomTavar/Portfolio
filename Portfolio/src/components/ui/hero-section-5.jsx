'use client'
import React from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { motion, useScroll } from 'framer-motion'
import { Button } from './button'
import { InfiniteSlider } from './infinite-slider'
import { ProgressiveBlur } from './progressive-blur'
import { cn } from '../../lib/utils'
import TypingText from '../TypingText'

export function HeroSectionFive({ hero, links, onNavigate, navItems }) {
  return (
    <>
      <HeroHeader navItems={navItems} onNavigate={onNavigate} />
      <section id="hero" className="overflow-x-hidden pt-14 md:pt-16">
        <div className="relative py-8 md:pb-14 lg:pb-18 lg:pt-12">
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12">
            <div className="mx-auto max-w-3xl text-center lg:ml-0 lg:max-w-4xl lg:text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-smart/25 bg-smart/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-smart">
                <span className="h-2 w-2 rounded-full bg-smart" />
                {hero.role}
              </p>

              <h1 className="mt-8 max-w-3xl text-balance text-5xl font-semibold leading-tight text-textPrimary drop-shadow-[0_3px_14px_rgba(10,15,28,0.45)] md:text-6xl xl:text-7xl">
                <span className="text-textPrimary">{hero.heading.split(' ')[0]} </span>
                <span className="text-primary">{hero.heading.split(' ')[1]}</span>
              </h1>

              <p className="mt-6 max-w-3xl text-balance text-lg text-textPrimary/92 md:text-xl">
                {hero.subheading}
              </p>

              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                <TypingText texts={hero.typingRoles} className="text-secondary" />
              </p>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-textSecondary/95 md:text-lg">
                {hero.oneLiner}
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-primary pl-5 pr-3 text-base text-[#0A0F1C] shadow-lg shadow-primary/30 hover:bg-primaryHover"
                >
                  <button type="button" onClick={() => onNavigate(hero.primaryCta.target)}>
                    <span className="text-nowrap">{hero.primaryCta.label}</span>
                    <ChevronRight className="ml-1 inline-block h-4 w-4" />
                  </button>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-12 rounded-full border border-secondary/50 bg-[#111827] px-5 text-base text-secondary hover:bg-[#0A0F1C]"
                >
                  <button type="button" onClick={() => onNavigate(hero.secondaryCta.target)}>
                    <span className="text-nowrap">{hero.secondaryCta.label}</span>
                  </button>
                </Button>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-2 overflow-hidden rounded-3xl border border-borderColor/70 sm:aspect-video lg:rounded-[3rem]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover opacity-80"
              src="https://ik.imagekit.io/lrigu76hy/tailark/dna-video.mp4?updatedAt=1745736251477"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,15,28,0.22),rgba(10,15,28,0.48))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(250,204,21,0.08),transparent_38%)]" />
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#0A0F1C] pb-3">
        <div className="group relative m-auto max-w-7xl px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:border-borderColor md:pr-6">
              <p className="text-end text-sm text-textSecondary/90">Built with modern stack</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <InfiniteSlider durationOnHover={40} duration={28} gap={72}>
                <TechPill label="React" />
                <TechPill label="Tailwind" />
                <TechPill label="Java" />
                <TechPill label="Spring Boot" />
                <TechPill label="MySQL" />
                <TechPill label="PostgreSQL" />
                <TechPill label="AWS" />
                <TechPill label="GitHub" />
              </InfiniteSlider>

              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-sectionBg to-transparent" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-sectionBg to-transparent" />

              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-16"
                direction="left"
                blurIntensity={0.8}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-16"
                direction="right"
                blurIntensity={0.8}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function TechPill({ label }) {
  return (
    <div className="rounded-full border border-white/10 bg-[#111827] px-4 py-2 text-xs font-semibold tracking-wide text-textPrimary shadow-sm shadow-black/25">
      {label}
    </div>
  )
}

function HeroHeader({ navItems, onNavigate }) {
  const [menuState, setMenuState] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { scrollYProgress } = useScroll()

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrolled(latest > 0.05)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  return (
    <header>
      <nav data-state={menuState && 'active'} className="group fixed z-30 w-full pt-2">
        <div
          className={cn(
            'mx-auto max-w-7xl rounded-2xl border border-white/10 bg-baseBg/45 px-6 backdrop-blur-xl transition-all duration-300 lg:px-12',
            scrolled && 'bg-baseBg/80 shadow-lg shadow-black/30',
          )}
        >
          <motion.div
            className={cn(
              'relative flex items-center justify-between gap-4 py-3 duration-200 lg:py-5',
              scrolled && 'lg:py-3',
            )}
          >
            <button
              type="button"
              onClick={() => onNavigate('hero')}
              className="text-left text-xl font-semibold tracking-tight text-textPrimary"
            >
              Hariom Tavar
            </button>

            <button
              type="button"
              onClick={() => setMenuState((prev) => !prev)}
              aria-label={menuState ? 'Close Menu' : 'Open Menu'}
              className="relative z-20 -m-2.5 block cursor-pointer p-2.5 md:hidden"
            >
              <Menu className="h-6 w-6 text-textPrimary transition group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0" />
              <X className="absolute inset-0 m-auto h-6 w-6 -rotate-180 scale-0 text-textPrimary opacity-0 transition group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100" />
            </button>

            <ul className="hidden items-center gap-8 text-sm md:flex">
              {navItems.slice(1, 6).map((item) => (
                <li key={item.target}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.target)}
                    className="text-textSecondary transition hover:text-textPrimary"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {menuState ? (
            <div className="mb-3 rounded-2xl border border-borderColor bg-cardBg p-4 shadow-lg md:hidden">
              <ul className="space-y-3 text-sm">
                {navItems.slice(1).map((item) => (
                  <li key={item.target}>
                    <button
                      type="button"
                      onClick={() => {
                        onNavigate(item.target)
                        setMenuState(false)
                      }}
                      className="text-textSecondary transition hover:text-textPrimary"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  )
}
