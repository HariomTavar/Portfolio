import Reveal from '../components/Reveal'
import Section from '../components/Section'

export default function WhyWorkSection({ whyWork }) {
  return (
    <Section id="why-work" title={whyWork.title} tone="alt">
      <div className="grid gap-4 md:grid-cols-2">
        {whyWork.points.map((point, index) => (
          <Reveal key={point} delay={index * 0.06}>
            <article className="glass-surface rounded-3xl p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
              <p className="text-base font-medium text-textPrimary">{point}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
