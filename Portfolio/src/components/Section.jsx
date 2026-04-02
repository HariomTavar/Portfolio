import Reveal from './Reveal'

export default function Section({ id, title, subtitle, children, tone = 'base' }) {
  return (
    <section id={id} className={`relative overflow-hidden py-20 md:py-24 ${tone === 'alt' ? 'bg-sectionBg/90' : 'bg-baseBg'}`}>
      <div className="section-glow pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {(title || subtitle) && (
          <Reveal>
            <header className="relative z-10 mb-10 md:mb-12">
              {title ? (
                <h2 className="text-3xl font-semibold tracking-tight text-textPrimary md:text-4xl lg:text-5xl">
                  {title}
                </h2>
              ) : null}
              {subtitle ? (
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-textSecondary md:text-lg">
                  {subtitle}
                </p>
              ) : null}
            </header>
          </Reveal>
        )}
        <div className="relative z-10">{children}</div>
      </div>
    </section>
  )
}
