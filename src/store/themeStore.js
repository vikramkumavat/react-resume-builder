import { create } from "zustand";

const THEME_STORAGE_KEY = "resumeBuilderTheme";

const loadThemeFromStorage = () => {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  return saved ? JSON.parse(saved) : null;
};

const saveThemeToStorage = (theme) => {
  localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme));
};

const lightTheme = {
  primary: "#2563eb",
  background: "#ffffff",
  text: "#111827",
  font: "Inter",
  layout: "classic",
  isDarkMode: false,
};

const darkTheme = {
  primary: "#60a5fa",
  background: "#1f2937",
  text: "#f3f4f6",
  font: "Inter",
  layout: "classic",
  isDarkMode: true,
};

export const useThemeStore = create((set) => {
  const savedTheme = loadThemeFromStorage();
  const initialTheme = savedTheme || lightTheme;

  return {
    theme: initialTheme,

    updateTheme: (data) =>
      set((state) => {
        const updated = { ...state.theme, ...data };
        saveThemeToStorage(updated);
        return { theme: updated };
      }),

    toggleDarkMode: () =>
      set((state) => {
        const isDark = !state.theme.isDarkMode;
        const newTheme = isDark ? darkTheme : lightTheme;
        saveThemeToStorage(newTheme);
        return { theme: newTheme };
      }),
  };
});
