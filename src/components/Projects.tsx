import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section id="projects" className="p-20">
      <h2 className="text-3xl text-neon mb-6 text-center">Projects</h2>
      {projects.map(project => (
        <div
          key={project.title}
          className="border border-neon p-6 rounded-xl mb-4"
        >
          <h3 className="text-xl text-neon">{project.title}</h3>
          <p className="mt-2">{project.description}</p>
        </div>
      ))}
    </section>
  )
}
