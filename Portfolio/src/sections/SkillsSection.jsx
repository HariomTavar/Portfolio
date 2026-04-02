import Section from '../components/Section'
import SkillGroup from '../components/SkillGroup'

export default function SkillsSection({ skills }) {
  return (
    <Section id="skills" title={skills.title} subtitle={skills.subtitle} tone="alt">
      <div className="grid gap-4 md:grid-cols-2">
        {skills.groups.map((group) => (
          <SkillGroup key={group.title} group={group} />
        ))}
      </div>
    </Section>
  )
}
