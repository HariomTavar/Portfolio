import Reveal from '../components/Reveal'
import Section from '../components/Section'

export default function FutureSection({ future }) {
  return (
    <Section id="future" title={future.title}>
      <Reveal>
        <article className="glass-surface rounded-3xl p-8 md:p-10">
          <p className="max-w-4xl text-base leading-relaxed text-textSecondary md:text-lg">
            {future.text}
          </p>
        </article>
      </Reveal>
    </Section>
  )
}
