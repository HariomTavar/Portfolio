import Section from '../components/Section'
import Reveal from '../components/Reveal'

export default function AboutSection({ about }) {
  return (
    <Section id="about" title={about.title} tone="alt">
      <Reveal>
        <article className="glass-surface max-w-4xl rounded-3xl p-8 md:p-10">
          <div className="space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-textSecondary md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </article>
      </Reveal>
    </Section>
  )
}
