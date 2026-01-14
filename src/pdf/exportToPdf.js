import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

/**
 * Export the given DOM element (A4 canvas) to a pixel-perfect A4 PDF.
 * Uses px units and matches the preview size (794x1123 px).
 */
export async function exportToPdf(element) {
  if (!element) throw new Error('No element provided for export')

  // Temporarily remove preview shadow for exact rendering
  const root = element
  root.classList.remove('preview-shadow')

  const opts = {
    scale: 2, // increase DPI for crisp text
    useCORS: true,
    allowTaint: false,
    backgroundColor: '#ffffff',
  }

  const canvas = await html2canvas(root, opts)

  // restore
  root.classList.add('preview-shadow')

  const imgData = canvas.toDataURL('image/png')

  const pdf = new jsPDF({ unit: 'px', format: [794, 1123] })
  pdf.addImage(imgData, 'PNG', 0, 0, 794, 1123)
  pdf.save('resume.pdf')
}

export default exportToPdf
