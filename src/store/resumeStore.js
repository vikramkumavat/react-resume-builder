import { create } from "zustand";
import defaultResumeData from "../data/resumeData.json";

const STORAGE_KEY = "resumeBuilderData";

const loadFromStorage = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : null;
};

const saveToStorage = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// Transform the new data structure to internal format
const transformData = (data) => {
  return {
    pages: [
      {
        id: 1,
        name: "Professional Resume",
        sections: ["personalInfo", "profile", "experience", "projects", "highlights", "openSource", "certifications", "skills", "education"],
      },
    ],
    currentPageId: 1,
    resumes: {
      "1": data,
    },
  };
};

export const useResumeStore = create((set, get) => {
  const savedData = loadFromStorage();
  const initialState = savedData || transformData(defaultResumeData);

  return {
    pages: initialState.pages,
    currentPageId: initialState.currentPageId,
    resumes: initialState.resumes,

    // Get current resume
    getCurrentResume: () => {
      const state = get();
      const resume = state.resumes[String(state.currentPageId)];
      return resume || {};
    },

    // Update personal info
    updatePersonalInfo: (data) =>
      set((state) => {
        const updated = {
          ...state,
          resumes: {
            ...state.resumes,
            [String(state.currentPageId)]: {
              ...state.resumes[String(state.currentPageId)],
              personalInfo: data,
            },
          },
        };
        saveToStorage(updated);
        return updated;
      }),

    // Update any field
    updateField: (field, data) =>
      set((state) => {
        const updated = {
          ...state,
          resumes: {
            ...state.resumes,
            [String(state.currentPageId)]: {
              ...state.resumes[String(state.currentPageId)],
              [field]: data,
            },
          },
        };
        saveToStorage(updated);
        return updated;
      }),

    // Reorder sections on current page
    reorderSections: (newOrder) =>
      set((state) => {
        const updated = {
          ...state,
          pages: state.pages.map((page) =>
            page.id === state.currentPageId
              ? { ...page, sections: newOrder }
              : page
          ),
        };
        saveToStorage(updated);
        return updated;
      }),

    // Add new page
    addPage: () =>
      set((state) => {
        const newPageId = Math.max(...state.pages.map((p) => p.id), 0) + 1;
        const updated = {
          ...state,
          pages: [
            ...state.pages,
            {
              id: newPageId,
              name: `Resume ${newPageId}`,
              sections: ["personalInfo", "profile", "experience", "projects", "skills", "education"],
            },
          ],
          resumes: {
            ...state.resumes,
            [String(newPageId)]: { ...defaultResumeData },
          },
          currentPageId: newPageId,
        };
        saveToStorage(updated);
        return updated;
      }),

    // Delete page
    deletePage: (pageId) =>
      set((state) => {
        if (state.pages.length === 1) return state;
        const updated = {
          ...state,
          pages: state.pages.filter((p) => p.id !== pageId),
          currentPageId:
            state.currentPageId === pageId
              ? state.pages.find((p) => p.id !== pageId).id
              : state.currentPageId,
          resumes: Object.fromEntries(
            Object.entries(state.resumes).filter(([id]) => id != pageId)
          ),
        };
        saveToStorage(updated);
        return updated;
      }),

    // Switch page
    switchPage: (pageId) =>
      set((state) => {
        const updated = { ...state, currentPageId: pageId };
        saveToStorage(updated);
        return updated;
      }),

    // Update page name
    updatePageName: (pageId, name) =>
      set((state) => {
        const updated = {
          ...state,
          pages: state.pages.map((p) =>
            p.id === pageId ? { ...p, name } : p
          ),
        };
        saveToStorage(updated);
        return updated;
      }),
  };
});
