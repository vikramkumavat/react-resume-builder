import React, { useRef, useState } from 'react'
import useResumeStore from '../store/useResumeStore'
import PersonalForm from '../components/forms/PersonalForm'
import PreviewContainer from '../components/preview/PreviewContainer'
import ClassicLayout from '../layouts/ClassicLayout'
import TwoColumnLayout from '../layouts/TwoColumnLayout'
import { exportToPdf } from '../pdf/exportToPdf'

export default function Builder() {
  const data = useResumeStore((s) => ({
    personal: s.personal,
    profile: s.profile,
    experience: s.experience,
    projects: s.projects,
    skills: s.skills,
    education: s.education,
  }))

  const layout = useResumeStore((s) => s.layout)
  const setLayout = useResumeStore((s) => s.setLayout)
  const theme = useResumeStore((s) => s.theme)
  const loadSampleData = useResumeStore((s) => s.loadSampleData)

  const [isExporting, setIsExporting] = useState(false)
  const canvasRef = useRef(null)

  const handleExport = async () => {
    if (!canvasRef.current) return
    setIsExporting(true)
    // wait for DOM to update and shadow removal
    await new Promise((r) => setTimeout(r, 120))
    await exportToPdf(canvasRef.current)
    setIsExporting(false)
  }

  const Layout = layout === 'two-column' ? TwoColumnLayout : ClassicLayout

  return (
    <div className="min-h-screen flex gap-6 p-6">
      <aside className="w-80 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Builder</h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded bg-slate-800 text-white" onClick={() => setLayout('classic')}>Classic</button>
            <button className="px-3 py-1 rounded bg-slate-800 text-white" onClick={() => setLayout('two-column')}>Two-Column</button>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-medium mb-2">Personal</h3>
          <PersonalForm />
        </div>

        <div className="bg-white p-4 rounded shadow-sm">
          <h3 className="font-medium mb-2">Data</h3>
          <button className="w-full py-2 bg-slate-700 text-white rounded" onClick={loadSampleData}>Load Sample Data</button>
        </div>

        <div className="space-y-2">
          <button className="w-full py-2 bg-blue-600 text-white rounded" onClick={handleExport}>Export PDF</button>
        </div>
      </aside>

      <main className="flex-1 bg-gray-100 p-4 rounded">
        <PreviewContainer isExporting={isExporting} canvasRef={canvasRef}>
          <div style={{ ['--primary']: theme.primary, ['--text']: theme.text, ['--font-sans']: theme.font }}>
            <Layout data={data} />
          </div>
        </PreviewContainer>
      </main>
    </div>
  )
}
