import { useResumeStore } from "../../store/resumeStore";
import { useThemeStore } from "../../store/themeStore";
import ClassicLayout from "../../layouts/ClassicLayout";
import ModernTwoColumnLayout from "../../layouts/ModernTwoColumnLayout";

export default function ResumePreview({ pdfMode = false }) {
  const { pages, currentPageId, resumes } = useResumeStore();
  const { theme } = useThemeStore();

  const currentResume = resumes[String(currentPageId)] || resumes["1"];
  const currentPage = pages.find((p) => p.id === currentPageId) || pages[0];

  const safeTheme = {
    background: theme?.background || "#ffffff",
    text: theme?.text || "#111827",
    primary: theme?.primary || "#2563eb",
    font: theme?.font || "Inter",
  };

  return (
    /* ✅ FIXED HEIGHT SCROLL CONTAINER */
    <div
      className={`h-screen w-full ${
        pdfMode ? "" : "bg-gray-100"
      } overflow-y-auto`}
    >
      {/* CENTERING WRAPPER */}
      <div className="flex justify-center py-10">
        {/* A4 PAGE */}
        <div
  id="resume-preview"
  className={`resume bg-white ${
    pdfMode ? "" : "shadow-xl"
  }`}
  style={{
    width: "794px",
    minHeight: "1123px",
    backgroundColor: safeTheme.background,
    color: safeTheme.text,
    fontFamily: safeTheme.font,
    boxSizing: "border-box", // ❗ VERY IMPORTANT
  }}
>
            <div className={pdfMode ? "px-8 py-8" : "px-10 py-10"}>
            {currentResume && currentPage ? (
              <ClassicLayout
                resume={currentResume}
                sections={currentPage.sections}
                theme={safeTheme}
              />
              // <ModernTwoColumnLayout
              //   resume={currentResume}
              //   sections={currentPage.sections}
              //   theme={safeTheme}
              // />
            ) : (
              <div className="flex items-center justify-center min-h-[1123px]">
                <p className="text-gray-500 text-lg">
                  Loading resume data...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
