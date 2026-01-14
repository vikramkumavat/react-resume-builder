import html2pdf from "html2pdf.js";

export const downloadResumePDF = (resumeName = "resume") => {
  const resumeElement = document.getElementById("resume-preview");
  
  if (!resumeElement) {
    alert("Resume preview not found!");
    return;
  }

  const opt = {
    margin: [15, 15, 15, 15], // [top, left, bottom, right] in mm
    filename: `${resumeName}.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, allowTaint: true },
    jsPDF: { orientation: "portrait", unit: "mm", format: "a4" },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  html2pdf().set(opt).from(resumeElement).save();
};
