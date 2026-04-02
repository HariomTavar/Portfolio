import Section from '../components/Section'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import Reveal from '../components/Reveal'

export default function ContactSection({ contact }) {
  return (
    <Section id="contact" title={contact.title} subtitle={contact.cta} tone="alt">
      <Reveal>
        <div className="glass-surface rounded-3xl p-8 md:p-10">
          <p className="text-sm font-medium text-textSecondary">{contact.emailLabel}</p>
          <p className="mt-2 text-xl text-textPrimary">{contact.email}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryButton onClick={() => window.open(`mailto:${contact.email}`, '_blank')}>
              Email
            </PrimaryButton>
            <SecondaryButton onClick={() => window.open(contact.links.linkedin, '_blank', 'noopener,noreferrer')}>
              LinkedIn
            </SecondaryButton>
            <SecondaryButton onClick={() => window.open(contact.links.github, '_blank', 'noopener,noreferrer')}>
              GitHub
            </SecondaryButton>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
