import Section from '../components/Section'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import Reveal from '../components/Reveal'
import { motion } from 'framer-motion'
import { Mail, Phone, Globe, GitBranch, Sparkles } from 'lucide-react'

export default function ContactSection({ contact }) {
  return (
    <Section id="contact" title={contact.title} subtitle={contact.cta} tone="alt">
      <Reveal>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="glass-surface relative overflow-hidden rounded-3xl p-8 md:p-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-secondary/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-24 h-52 w-52 rounded-full bg-primary/15 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Sparkles className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-textSecondary">
                Open for collaboration
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="rounded-2xl border border-borderColor bg-baseBg/70 p-5"
              >
                <p className="flex items-center gap-2 text-sm font-medium text-textSecondary">
                  <Mail className="h-4 w-4 text-secondary" />
                  {contact.emailLabel}
                </p>
                <p className="mt-2 text-lg font-semibold text-textPrimary break-all">{contact.email}</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="rounded-2xl border border-borderColor bg-baseBg/70 p-5"
              >
                <p className="flex items-center gap-2 text-sm font-medium text-textSecondary">
                  <Phone className="h-4 w-4 text-secondary" />
                  {contact.phoneLabel}
                </p>
                <p className="mt-2 text-lg font-semibold text-textPrimary">{contact.phone}</p>
              </motion.div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <PrimaryButton onClick={() => window.open(`mailto:${contact.email}`, '_blank')} className="gap-2">
                <Mail className="h-4 w-4" />
                Email
              </PrimaryButton>
              <SecondaryButton onClick={() => window.open(`tel:${contact.phone}`, '_blank')} className="gap-2">
                <Phone className="h-4 w-4" />
                Call
              </SecondaryButton>
              <SecondaryButton onClick={() => window.open(contact.links.linkedin, '_blank', 'noopener,noreferrer')} className="gap-2">
                <Globe className="h-4 w-4" />
                LinkedIn
              </SecondaryButton>
              <SecondaryButton onClick={() => window.open(contact.links.github, '_blank', 'noopener,noreferrer')} className="gap-2">
                <GitBranch className="h-4 w-4" />
                GitHub
              </SecondaryButton>
            </div>
          </div>
        </motion.div>
      </Reveal>
    </Section>
  )
}
