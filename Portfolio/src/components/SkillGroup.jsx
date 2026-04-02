import Reveal from './Reveal'

export default function SkillGroup({ group }) {
  return (
    <Reveal>
      <article className="glass-surface rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/15">
        <h3 className="text-lg font-semibold text-textPrimary">{group.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {group.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-borderColor bg-baseBg/80 px-3 py-1.5 text-sm text-textSecondary"
            >
              {item}
            </span>
          ))}
        </div>
      </article>
    </Reveal>
  )
}
