import Section from '../components/Section'
import Reveal from '../components/Reveal'

export default function JourneySection({ journey }) {
  return (
    <Section id="journey" title={journey.title} subtitle={journey.subtitle}>
      <div className="relative ml-3 border-l border-borderColor/70 pl-6">
        {journey.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <article className="glass-surface relative mb-8 rounded-2xl p-5">
              <span className="absolute -left-[31px] top-6 h-3 w-3 rounded-full bg-primary" />
              <p className="text-sm font-semibold text-primary">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-textPrimary">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-textSecondary">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
