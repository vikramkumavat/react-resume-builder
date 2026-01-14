import React from 'react'

export default function PreviewContainer({ children, isExporting, canvasRef }) {
  return (
    <div className="w-full h-full flex justify-center items-start p-8 overflow-auto">
      <div
        ref={canvasRef}
        className={`relative ${!isExporting ? 'preview-shadow' : ''}`}
        style={{ WebkitPrintColorAdjust: 'exact' }}
      >
        {children}
      </div>
    </div>
  )
}
