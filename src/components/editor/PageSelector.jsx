import { useState } from "react";
import { useResumeStore } from "../../store/resumeStore";

export default function PageSelector() {
  const { pages, currentPageId, addPage, deletePage, switchPage, updatePageName } = useResumeStore();
  const [editingPageId, setEditingPageId] = useState(null);
  const [editingName, setEditingName] = useState("");

  const handleAddPage = () => {
    addPage();
  };

  const handleDeletePage = (pageId) => {
    if (pages.length === 1) {
      alert("You must have at least one page!");
      return;
    }
    if (confirm(`Delete "${pages.find(p => p.id === pageId).name}"?`)) {
      deletePage(pageId);
    }
  };

  const handleStartEdit = (page) => {
    setEditingPageId(page.id);
    setEditingName(page.name);
  };

  const handleSaveName = (pageId) => {
    if (editingName.trim()) {
      updatePageName(pageId, editingName);
    }
    setEditingPageId(null);
  };

  const handleKeyPress = (e, pageId) => {
    if (e.key === "Enter") {
      handleSaveName(pageId);
    } else if (e.key === "Escape") {
      setEditingPageId(null);
    }
  };

  const containerStyle = {
    marginBottom: "20px",
    padding: "12px",
    backgroundColor: "#f9fafb",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
  };

  const tabsContainerStyle = {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    marginBottom: "12px",
    alignItems: "center",
  };

  const tabStyle = (isActive) => ({
    padding: "8px 12px",
    backgroundColor: isActive ? "#2563eb" : "#ffffff",
    color: isActive ? "#ffffff" : "#111827",
    border: `2px solid ${isActive ? "#2563eb" : "#d1d5db"}`,
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: isActive ? "600" : "400",
    transition: "all 0.2s",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  });

  const addButtonStyle = {
    padding: "8px 12px",
    backgroundColor: "#10b981",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
  };

  const deleteButtonStyle = {
    padding: "4px 8px",
    backgroundColor: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "12px",
    marginLeft: "4px",
  };

  const inputStyle = {
    padding: "6px 8px",
    border: "1px solid #d1d5db",
    borderRadius: "3px",
    fontSize: "14px",
    marginRight: "6px",
  };

  return (
    <div style={containerStyle}>
      <h3 style={{ margin: "0 0 12px 0" }}>📄 Resume Pages</h3>
      <div style={tabsContainerStyle}>
        {pages.map((page) => (
          <div key={page.id} style={{ display: "flex", alignItems: "center" }}>
            {editingPageId === page.id ? (
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <input
                  type="text"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  onBlur={() => handleSaveName(page.id)}
                  onKeyPress={(e) => handleKeyPress(e, page.id)}
                  style={inputStyle}
                  autoFocus
                />
                <button
                  onClick={() => handleSaveName(page.id)}
                  style={{
                    ...deleteButtonStyle,
                    backgroundColor: "#2563eb",
                    padding: "4px 8px",
                    fontSize: "12px",
                  }}
                >
                  ✓
                </button>
              </div>
            ) : (
              <div
                onClick={() => switchPage(page.id)}
                style={tabStyle(currentPageId === page.id)}
              >
                <span>{page.name}</span>
                {pages.length > 1 && (
                  <div style={{ display: "flex", gap: "4px", marginLeft: "4px" }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleStartEdit(page);
                      }}
                      style={{
                        ...deleteButtonStyle,
                        backgroundColor: "#6366f1",
                        padding: "2px 6px",
                        fontSize: "11px",
                        marginLeft: "0",
                      }}
                      title="Edit page name"
                    >
                      ✏️
                    </button>
                    {pages.length > 1 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeletePage(page.id);
                        }}
                        style={deleteButtonStyle}
                        title="Delete page"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={handleAddPage} style={addButtonStyle}>
        + Add Page
      </button>
    </div>
  );
}
