import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'

export default function ProjectsSection({ projects, links }) {
  return (
    <Section id="projects" title={projects.title} subtitle={projects.subtitle} tone="alt">
      <div className="grid gap-5 md:grid-cols-3">
        {projects.items.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            links={links}
            direction={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </Section>
  )
}
