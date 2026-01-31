import { skills } from "../data/skills"

export default function Skills() {
  return (
    <section id="skills" className="p-20">
      <h2 className="text-3xl text-neon mb-6 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <span
            key={skill}
            className="border border-neon px-4 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
