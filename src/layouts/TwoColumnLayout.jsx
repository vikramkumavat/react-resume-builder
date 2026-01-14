import React from 'react'

export default function TwoColumnLayout({ data }) {
  const { personal, profile, experience, projects, skills, education } = data

  return (
    <article className="resume-canvas bg-white text-[14px] text-slate-900 p-[24px] grid grid-cols-[220px_1fr] gap-6" style={{ fontFamily: 'var(--font-sans)' }}>
      <aside className="space-y-4">
        <div>
          <h1 className="text-xl font-bold">{personal.name}</h1>
          <div className="text-sm text-slate-600">{personal.title}</div>
        </div>

        <div>
          <h3 className="font-semibold text-sm uppercase tracking-wide">Contact</h3>
          <div className="text-[13px] mt-1 text-slate-700">
            <div>{personal.email}</div>
            <div>{personal.phone}</div>
            <div>{personal.location}</div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-sm uppercase tracking-wide">Skills</h3>
          <div className="text-[13px] mt-1">
            {Object.values(skills).flat().join(', ')}
          </div>
        </div>
      </aside>

      <main>
        {profile && (
          <section className="mb-4">
            <h2 className="font-semibold text-sm uppercase tracking-wide">Profile</h2>
            <p className="text-[13px] mt-1">{profile}</p>
          </section>
        )}

        <section className="mb-4">
          <h2 className="font-semibold text-sm uppercase tracking-wide">Experience</h2>
          <div className="mt-2 space-y-3">
            {experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between">
                  <div className="font-medium">{exp.role} — {exp.company}</div>
                  <div className="text-sm text-slate-600">{exp.duration}</div>
                </div>
                <ul className="list-disc list-inside text-[13px] mt-1 space-y-1">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-semibold text-sm uppercase tracking-wide">Projects</h2>
          <div className="mt-2 space-y-2">
            {projects.map((p, i) => (
              <div key={i}>
                <div className="font-medium">{p.name}</div>
                <p className="text-[13px] mt-1">{p.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </article>
  )
}
