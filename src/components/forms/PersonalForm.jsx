import React from 'react'
import Field from '../ui/Field'
import useResumeStore from '../../store/useResumeStore'

export default function PersonalForm() {
  const personal = useResumeStore((s) => s.personal)
  const updatePersonal = useResumeStore((s) => s.updatePersonal)

  return (
    <form className="space-y-3">
      <Field label="Name" value={personal.name} onChange={(v) => updatePersonal({ name: v })} />
      <Field label="Title" value={personal.title} onChange={(v) => updatePersonal({ title: v })} />
      <Field label="Email" value={personal.email} onChange={(v) => updatePersonal({ email: v })} />
      <Field label="Phone" value={personal.phone} onChange={(v) => updatePersonal({ phone: v })} />
      <Field label="Location" value={personal.location} onChange={(v) => updatePersonal({ location: v })} />
      <Field label="GitHub" value={personal.github} onChange={(v) => updatePersonal({ github: v })} />
      <Field label="LinkedIn" value={personal.linkedin} onChange={(v) => updatePersonal({ linkedin: v })} />
    </form>
  )
}
