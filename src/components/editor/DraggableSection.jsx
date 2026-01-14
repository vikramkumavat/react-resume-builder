import { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useResumeStore } from "../../store/resumeStore";

function SortableItem({ id, children }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    padding: "10px",
    marginBottom: "8px",
    backgroundColor: isDragging ? "#e5e7eb" : "#f9fafb",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    cursor: "grab",
    touchAction: "none",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span style={{ fontSize: "18px", color: "#6b7280" }}>⋮⋮</span>
        {children}
      </div>
    </div>
  );
}

const SECTION_NAMES = {
  personalInfo: "Personal Information",
  profile: "Professional Profile",
  experience: "Work Experience",
  projects: "Projects",
  highlights: "Highlights",
  openSource: "Open Source",
  certifications: "Certifications",
  skills: "Skills",
  education: "Education",
};

export default function DraggableSection() {
  const { pages, currentPageId, reorderSections } = useResumeStore();
  const currentPage = pages.find((p) => p.id === currentPageId);
  const [sections, setSections] = useState(currentPage?.sections || []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      distance: 8,
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = sections.indexOf(active.id);
      const newIndex = sections.indexOf(over.id);
      const newSections = arrayMove(sections, oldIndex, newIndex);
      setSections(newSections);
      reorderSections(newSections);
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3 style={{ marginBottom: "12px" }}>Drag to Reorder Sections</h3>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={sections}
          strategy={verticalListSortingStrategy}
        >
          {sections.map((section) => (
            <SortableItem key={section} id={section}>
              {SECTION_NAMES[section]}
            </SortableItem>
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
