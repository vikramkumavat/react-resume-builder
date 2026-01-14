import React from 'react'

export default function Field({ label, value, onChange, placeholder }) {
  return (
    <label className="block">
      <div className="text-sm font-medium text-slate-700">{label}</div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 block w-full rounded border border-slate-200 px-3 py-2 text-sm"
      />
    </label>
  )
}
