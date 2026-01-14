import React from 'react'

export default function ClassicLayout({ data }) {
  const { personal, profile, experience, projects, skills, education } = data

  return (
    <article className="resume-canvas bg-white text-[14px] text-slate-900 p-[32px] leading-tight" style={{ fontFamily: 'var(--font-sans)' }}>
      <header className="mb-4">
        <h1 className="text-2xl font-bold">{personal.name}</h1>
        <p className="text-sm text-slate-600">{personal.title}</p>
      </header>

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

      <section className="mb-4">
        <h2 className="font-semibold text-sm uppercase tracking-wide">Projects</h2>
        <div className="mt-2 space-y-2">
          {projects.map((p, i) => (
            <div key={i}>
              <div className="font-medium">{p.name}</div>
              <div className="text-[13px] text-slate-600">{p.tech}</div>
              <p className="text-[13px] mt-1">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-4">
        <h2 className="font-semibold text-sm uppercase tracking-wide">Skills</h2>
        <div className="mt-2 text-[13px]">
          {Object.entries(skills).map(([cat, list]) => (
            <div key={cat} className="mb-1">
              <div className="font-medium text-sm">{cat}</div>
              <div className="text-[13px] text-slate-700">{list.join(', ')}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-semibold text-sm uppercase tracking-wide">Education</h2>
        <div className="mt-2 text-[13px]">
          {education.map((e, i) => (
            <div key={i} className="mb-2">
              {typeof e === 'string' ? (
                <div>{e}</div>
              ) : (
                <>
                  <div className="font-medium">{e.degree}</div>
                  <div className="text-sm text-slate-600">{e.school} {e.year ? `— ${e.year}` : ''}</div>
                  {e.score && <div className="text-[13px]">{e.score}</div>}
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}
