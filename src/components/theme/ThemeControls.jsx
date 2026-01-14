import { useThemeStore } from "../../store/themeStore";

export default function ThemeControls() {
  const { theme, updateTheme, toggleDarkMode } = useThemeStore();

  return (
    <div className={`p-4 rounded-lg border ${theme.isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        🎨 Theme Settings
      </h3>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`w-full px-4 py-3 rounded-lg font-semibold mb-4 transition-all flex items-center justify-center gap-2 ${
          theme.isDarkMode
            ? "bg-gray-700 text-gray-100 border-2 border-blue-400 hover:bg-gray-600"
            : "bg-gray-100 text-gray-900 border-2 border-gray-300 hover:bg-gray-200"
        }`}
      >
        {theme.isDarkMode ? "🌙 Dark Mode (ON)" : "☀️ Light Mode (ON)"}
      </button>

      {/* Color Controls */}
      <div className="space-y-3">
        {/* Primary Color */}
        <div>
          <label className="block text-sm font-medium mb-2">Primary Color</label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={theme.primary}
              onChange={(e) => updateTheme({ primary: e.target.value })}
              className="w-12 h-10 rounded cursor-pointer border border-gray-300"
            />
            <span className={`text-sm font-mono ${theme.isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              {theme.primary}
            </span>
          </div>
        </div>

        {/* Background Color */}
        <div>
          <label className="block text-sm font-medium mb-2">Background</label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={theme.background}
              onChange={(e) => updateTheme({ background: e.target.value })}
              className="w-12 h-10 rounded cursor-pointer border border-gray-300"
            />
            <span className={`text-sm font-mono ${theme.isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              {theme.background}
            </span>
          </div>
        </div>

        {/* Text Color */}
        <div>
          <label className="block text-sm font-medium mb-2">Text Color</label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={theme.text}
              onChange={(e) => updateTheme({ text: e.target.value })}
              className="w-12 h-10 rounded cursor-pointer border border-gray-300"
            />
            <span className={`text-sm font-mono ${theme.isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              {theme.text}
            </span>
          </div>
        </div>

        {/* Font Family */}
        <div>
          <label className="block text-sm font-medium mb-2">Font Family</label>
          <select
            value={theme.font}
            onChange={(e) => updateTheme({ font: e.target.value })}
            className={`w-full px-3 py-2 rounded-lg border transition-colors ${
              theme.isDarkMode
                ? "bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500"
                : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          >
            <option value="Inter">Inter</option>
            <option value="Poppins">Poppins</option>
            <option value="Roboto">Roboto</option>
            <option value="Montserrat">Montserrat</option>
          </select>
        </div>

        {/* Layout */}
        <div>
          <label className="block text-sm font-medium mb-2">Layout</label>
          <select
            value={theme.layout}
            onChange={(e) => updateTheme({ layout: e.target.value })}
            className={`w-full px-3 py-2 rounded-lg border transition-colors ${
              theme.isDarkMode
                ? "bg-gray-700 border-gray-600 text-gray-100 focus:border-blue-500"
                : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          >
            <option value="classic">Classic</option>
            <option value="modern">Modern</option>
          </select>
        </div>
      </div>
    </div>
  );
}
