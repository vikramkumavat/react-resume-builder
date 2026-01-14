import { useResumeStore } from "../../store/resumeStore";
import { useThemeStore } from "../../store/themeStore";
import ClassicLayout from "../../layouts/ClassicLayout";

export default function ResumePreview() {
  const { pages, currentPageId, resumes } = useResumeStore();
  const { theme } = useThemeStore();

  const currentResume = resumes[String(currentPageId)] || resumes["1"];
  const currentPage = pages.find((p) => p.id === currentPageId) || pages[0];

  // Ensure theme has default values
  const safeTheme = {
    background: theme?.background || "#ffffff",
    text: theme?.text || "#111827",
    primary: theme?.primary || "#2563eb",
    font: theme?.font || "Inter",
  };

  return (
    <div
      className="resume h-full overflow-y-auto w-full"
      id="resume-preview"
      style={{
        backgroundColor: safeTheme.background,
        color: safeTheme.text,
      }}
    >
      {currentResume && currentPage ? (
        <ClassicLayout 
          resume={currentResume} 
          sections={currentPage.sections}
          theme={safeTheme}
        />
      ) : (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <p className="text-gray-500 text-lg">Loading resume data...</p>
          </div>
        </div>
      )}
    </div>
  );
}
