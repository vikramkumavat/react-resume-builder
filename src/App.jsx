import { useState } from "react";
import ResumePreview from "./components/preview/ResumePreview";
import ThemeControls from "./components/theme/ThemeControls";
import ResumeForm from "./components/editor/ResumeForm";
import DraggableSection from "./components/editor/DraggableSection";
import PageSelector from "./components/editor/PageSelector";
import { useThemeStore } from "./store/themeStore";
import { downloadResumePDF } from "./utils/downloadPDF";
import { FiDownload, FiFileText } from 'react-icons/fi';

export default function App() {
  const { theme } = useThemeStore();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const bgColor = theme.isDarkMode ? "bg-gray-900" : "bg-white";
  const textColor = theme.isDarkMode ? "text-gray-100" : "text-gray-900";
  const borderColor = theme.isDarkMode ? "border-gray-700" : "border-gray-200";

  return (
    <div className={`flex h-screen ${bgColor} ${textColor} transition-colors duration-300 lg:flex-row flex-col`}>
      {/* SIDEBAR - Editor Panel */}
      <aside className={`${sidebarOpen ? "block" : "hidden"} lg:block lg:w-[420px] w-full p-6 border-r ${borderColor} overflow-y-auto bg-gradient-to-br ${theme.isDarkMode ? "from-gray-800 to-gray-900" : "from-gray-50 to-white"} shadow-lg lg:shadow-none`}>
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold flex items-center gap-2 mb-2">
            <FiFileText className="text-blue-600" />
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Resume Builder</span>
          </h1>
          <p className={`text-sm ${theme.isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Create and customize your professional resume
          </p>
        </div>

        {/* Page Selector */}
        <div className="mb-6">
          <PageSelector />
        </div>

        {/* Theme Controls */}
        <div className="mb-6">
          <ThemeControls />
        </div>

        {/* Draggable Sections */}
        <div className="mb-6">
          <DraggableSection />
        </div>

        {/* Resume Form */}
        <div>
          <ResumeForm />
        </div>
      </aside>

      {/* MAIN CONTENT - Preview Panel */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className={`px-6 py-4 border-b ${borderColor} ${theme.isDarkMode ? "bg-gray-800" : "bg-gray-50"} shadow-sm flex justify-between items-center flex-wrap gap-4`}>
          <h1 className="text-2xl font-bold text-blue-600">
            📄 Live Preview
          </h1>
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => downloadResumePDF("my-resume")}
              className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                theme.isDarkMode
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-green-500 hover:bg-green-600 text-white"
              }`}
            >
              <FiDownload />
              <span>Download PDF</span>
            </button>
            {window.innerWidth < 768 && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  theme.isDarkMode
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                {sidebarOpen ? "Hide Editor" : "Show Editor"}
              </button>
            )}
          </div>
        </header>

        {/* Preview Content */}
        <div className="flex-1 overflow-hidden">
          <ResumePreview />
        </div>
      </main>
    </div>
  );
}
