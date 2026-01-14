import { useState } from "react";
import { useResumeStore } from "../../store/resumeStore";

export default function ResumeForm() {
  const { getCurrentResume, updatePersonalInfo, updateField } = useResumeStore();
  const resume = getCurrentResume();
  const [expandedSections, setExpandedSections] = useState({
    personalInfo: true,
    profile: false,
    experience: false,
    projects: false,
    highlights: false,
    openSource: false,
    certifications: false,
    skills: false,
    education: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handlePersonalChange = (field, value) => {
    updatePersonalInfo({ ...resume.personalInfo, [field]: value });
  };

  const handleProfileChange = (value) => {
    updateField("profile", value);
  };

  // Experience management
  const addExperience = () => {
    const newExperience = [
      ...resume.experience,
      { role: "", company: "", location: "", duration: "", responsibilities: [] },
    ];
    updateField("experience", newExperience);
  };

  const updateExperience = (index, field, value) => {
    const updated = [...resume.experience];
    updated[index] = { ...updated[index], [field]: value };
    updateField("experience", updated);
  };

  const addResponsibility = (index) => {
    const updated = [...resume.experience];
    updated[index].responsibilities = [...(updated[index].responsibilities || []), ""];
    updateField("experience", updated);
  };

  const updateResponsibility = (expIndex, respIndex, value) => {
    const updated = [...resume.experience];
    updated[expIndex].responsibilities[respIndex] = value;
    updateField("experience", updated);
  };

  const deleteResponsibility = (expIndex, respIndex) => {
    const updated = [...resume.experience];
    updated[expIndex].responsibilities = updated[expIndex].responsibilities.filter((_, i) => i !== respIndex);
    updateField("experience", updated);
  };

  const deleteExperience = (index) => {
    const updated = resume.experience.filter((_, i) => i !== index);
    updateField("experience", updated);
  };

  // Projects management
  const addProject = () => {
    const newProjects = [
      ...(resume.projects || []),
      { name: "", techStack: [], details: [] },
    ];
    updateField("projects", newProjects);
  };

  const updateProject = (index, field, value) => {
    const updated = [...(resume.projects || [])];
    updated[index] = { ...updated[index], [field]: value };
    updateField("projects", updated);
  };

  const addProjectDetail = (index) => {
    const updated = [...(resume.projects || [])];
    updated[index].details = [...(updated[index].details || []), ""];
    updateField("projects", updated);
  };

  const updateProjectDetail = (projIndex, detailIndex, value) => {
    const updated = [...(resume.projects || [])];
    updated[projIndex].details[detailIndex] = value;
    updateField("projects", updated);
  };

  const deleteProjectDetail = (projIndex, detailIndex) => {
    const updated = [...(resume.projects || [])];
    updated[projIndex].details = updated[projIndex].details.filter((_, i) => i !== detailIndex);
    updateField("projects", updated);
  };

  const deleteProject = (index) => {
    const updated = (resume.projects || []).filter((_, i) => i !== index);
    updateField("projects", updated);
  };

  // Skills management
  const handleSkillsChange = (category, value) => {
    const skills = resume.skills || {};
    const updatedSkills = {
      ...skills,
      [category]: value.split(",").map((s) => s.trim()).filter((s) => s),
    };
    updateField("skills", updatedSkills);
  };

  // Highlights management
  const addHighlight = () => {
    const highlights = [...(resume.highlights || []), ""];
    updateField("highlights", highlights);
  };

  const updateHighlight = (index, value) => {
    const highlights = [...(resume.highlights || [])];
    highlights[index] = value;
    updateField("highlights", highlights);
  };

  const deleteHighlight = (index) => {
    const highlights = (resume.highlights || []).filter((_, i) => i !== index);
    updateField("highlights", highlights);
  };

  // OpenSource management
  const addOpenSourceProject = () => {
    const newOpenSource = [
      ...(resume.openSource || []),
      { name: "", url: "" },
    ];
    updateField("openSource", newOpenSource);
  };

  const updateOpenSourceProject = (index, field, value) => {
    const updated = [...(resume.openSource || [])];
    updated[index] = { ...updated[index], [field]: value };
    updateField("openSource", updated);
  };

  const deleteOpenSourceProject = (index) => {
    const updated = (resume.openSource || []).filter((_, i) => i !== index);
    updateField("openSource", updated);
  };

  // Certifications management
  const addCertification = () => {
    const newCertification = [
      ...(resume.certifications || []),
      { name: "", issuer: "", year: "" },
    ];
    updateField("certifications", newCertification);
  };

  const updateCertification = (index, field, value) => {
    const updated = [...(resume.certifications || [])];
    updated[index] = { ...updated[index], [field]: value };
    updateField("certifications", updated);
  };

  const deleteCertification = (index) => {
    const updated = (resume.certifications || []).filter((_, i) => i !== index);
    updateField("certifications", updated);
  };

  // Education management
  const addEducation = () => {
    const newEducation = [
      ...(resume.education || []),
      { degree: "", institution: "", location: "", year: "", cgpa: "", percentage: "" },
    ];
    updateField("education", newEducation);
  };

  const updateEducation = (index, field, value) => {
    const updated = [...(resume.education || [])];
    updated[index] = { ...updated[index], [field]: value };
    updateField("education", updated);
  };

  const deleteEducation = (index) => {
    const updated = (resume.education || []).filter((_, i) => i !== index);
    updateField("education", updated);
  };

  const sectionStyle = {
    marginBottom: "16px",
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: "12px",
  };

  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    padding: "10px",
    backgroundColor: "#f3f4f6",
    borderRadius: "6px",
    marginBottom: "12px",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #d1d5db",
    borderRadius: "4px",
    fontFamily: "inherit",
    fontSize: "14px",
  };

  const buttonStyle = {
    padding: "8px 16px",
    marginRight: "8px",
    marginBottom: "8px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  };

  const deleteButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#ef4444",
    marginRight: "8px",
  };

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Personal Info */}
      <div style={sectionStyle}>
        <div style={headerStyle} onClick={() => toggleSection("personalInfo")}>
          <h3 style={{ margin: 0 }}>👤 Personal Information</h3>
          <span>{expandedSections.personalInfo ? "▼" : "▶"}</span>
        </div>
        {expandedSections.personalInfo && (
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={resume.personalInfo?.name || "John Doe"}
              onChange={(e) => handlePersonalChange("name", e.target.value)}
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Job Title"
              value={resume.personalInfo?.title || "Software Engineer"}
              onChange={(e) => handlePersonalChange("title", e.target.value)}
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Email"
              value={resume.personalInfo?.email || "john@example.com"}
              onChange={(e) => handlePersonalChange("email", e.target.value)}
              style={inputStyle}
            />
            <input
              type="tel"
              placeholder="Phone"
              value={resume.personalInfo?.phone || "+1 (555) 123-4567"}
              onChange={(e) => handlePersonalChange("phone", e.target.value)}
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Location"
              value={resume.personalInfo?.location || "City, State/Country"}
              onChange={(e) => handlePersonalChange("location", e.target.value)}
              style={inputStyle}
            />
            <input
              type="url"
              placeholder="GitHub URL"
              value={resume.personalInfo?.github || "https://github.com/username"}
              onChange={(e) => handlePersonalChange("github", e.target.value)}
              style={inputStyle}
            />
            <input
              type="url"
              placeholder="LinkedIn URL"
              value={resume.personalInfo?.linkedin || "https://linkedin.com/in/username"}
              onChange={(e) => handlePersonalChange("linkedin", e.target.value)}
              style={inputStyle}
            />
          </div>
        )}
      </div>

      {/* Profile */}
      <div style={sectionStyle}>
        <div style={headerStyle} onClick={() => toggleSection("profile")}>
          <h3 style={{ margin: 0 }}>📝 Professional Profile</h3>
          <span>{expandedSections.profile ? "▼" : "▶"}</span>
        </div>
        {expandedSections.profile && (
          <textarea
            placeholder="Write your professional profile here. Include your years of experience, key skills, and career objectives..."
            value={resume.profile || "Experienced professional with strong technical expertise and proven track record of delivering quality solutions."}
            onChange={(e) => handleProfileChange(e.target.value)}
            style={{
              ...inputStyle,
              width: "100%",
              minHeight: "100px",
              marginBottom: "0",
              fontFamily: "inherit",
            }}
          />
        )}
      </div>

      {/* Work Experience */}
      <div style={sectionStyle}>
        <div style={headerStyle} onClick={() => toggleSection("experience")}>
          <h3 style={{ margin: 0 }}>💼 Work Experience</h3>
          <span>{expandedSections.experience ? "▼" : "▶"}</span>
        </div>
        {expandedSections.experience && (
          <div>
            {(resume.experience || []).map((exp, idx) => (
              <div
                key={idx}
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  padding: "12px",
                  marginBottom: "12px",
                  backgroundColor: "#fafbfc",
                }}
              >
                <input
                  type="text"
                  placeholder="Role/Position"
                  value={exp.role || "Software Developer"}
                  onChange={(e) => updateExperience(idx, "role", e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={exp.company || "Company Name"}
                  onChange={(e) => updateExperience(idx, "company", e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={exp.location || "City, Country"}
                  onChange={(e) => updateExperience(idx, "location", e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Duration (e.g., Jan 2020 - Present)"
                  value={exp.duration || "Jan 2020 - Present"}
                  onChange={(e) => updateExperience(idx, "duration", e.target.value)}
                  style={inputStyle}
                />
                <div style={{ marginBottom: "10px" }}>
                  <label style={{ display: "block", fontWeight: "600", marginBottom: "8px", fontSize: "14px" }}>
                    📌 Responsibilities:
                  </label>
                  {(exp.responsibilities || []).map((resp, respIdx) => (
                    <div key={respIdx} style={{ display: "flex", gap: "8px", marginBottom: "8px", alignItems: "flex-start" }}>
                      <span style={{ marginTop: "10px", color: "#6b7280", fontWeight: "bold" }}>•</span>
                      <input
                        type="text"
                        placeholder="Add responsibility"
                        value={resp || ""}
                        onChange={(e) => updateResponsibility(idx, respIdx, e.target.value)}
                        style={{ ...inputStyle, marginBottom: "0", flex: 1 }}
                      />
                      <button
                        type="button"
                        onClick={() => deleteResponsibility(idx, respIdx)}
                        style={{
                          padding: "8px 12px",
                          backgroundColor: "#ef4444",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          marginTop: "0",
                          fontSize: "12px",
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addResponsibility(idx)}
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#3b82f6",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "13px",
                      marginTop: "8px",
                    }}
                  >
                    + Add Responsibility
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => deleteExperience(idx)}
                  style={deleteButtonStyle}
                >
                  Delete Experience
                </button>
              </div>
            ))}
            <button type="button" onClick={addExperience} style={buttonStyle}>
              + Add Experience
            </button>
          </div>
        )}
      </div>

      {/* Projects */}
      <div style={sectionStyle}>
        <div style={headerStyle} onClick={() => toggleSection("projects")}>
          <h3 style={{ margin: 0 }}>📦 Projects</h3>
          <span>{expandedSections.projects ? "▼" : "▶"}</span>
        </div>
        {expandedSections.projects && (
          <div>
            {(resume.projects || []).map((project, idx) => (
              <div
                key={idx}
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  padding: "12px",
                  marginBottom: "12px",
                  backgroundColor: "#fafbfc",
                }}
              >
                <input
                  type="text"
                  placeholder="Project Name"
                  value={project.name || "Project Title"}
                  onChange={(e) => updateProject(idx, "name", e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Tech Stack (comma-separated)"
                  value={(project.techStack || []).join(", ") || "React, Node.js, MongoDB"}
                  onChange={(e) =>
                    updateProject(
                      idx,
                      "techStack",
                      e.target.value.split(",").map((t) => t.trim())
                    )
                  }
                  style={inputStyle}
                />
                <div style={{ marginBottom: "10px" }}>
                  <label style={{ display: "block", fontWeight: "600", marginBottom: "8px", fontSize: "14px" }}>
                    📌 Project Details:
                  </label>
                  {(project.details || []).map((detail, detailIdx) => (
                    <div key={detailIdx} style={{ display: "flex", gap: "8px", marginBottom: "8px", alignItems: "flex-start" }}>
                      <span style={{ marginTop: "10px", color: "#6b7280", fontWeight: "bold" }}>•</span>
                      <input
                        type="text"
                        placeholder="Add project detail"
                        value={detail || ""}
                        onChange={(e) => updateProjectDetail(idx, detailIdx, e.target.value)}
                        style={{ ...inputStyle, marginBottom: "0", flex: 1 }}
                      />
                      <button
                        type="button"
                        onClick={() => deleteProjectDetail(idx, detailIdx)}
                        style={{
                          padding: "8px 12px",
                          backgroundColor: "#ef4444",
                          color: "white",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                          marginTop: "0",
                          fontSize: "12px",
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addProjectDetail(idx)}
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#3b82f6",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "13px",
                      marginTop: "8px",
                    }}
                  >
                    + Add Detail
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => deleteProject(idx)}
                  style={deleteButtonStyle}
                >
                  Delete Project
                </button>
              </div>
            ))}
            <button type="button" onClick={addProject} style={buttonStyle}>
              + Add Project
            </button>
          </div>
        )}
      </div>

      {/* Highlights */}
      <div style={sectionStyle}>
        <div style={headerStyle} onClick={() => toggleSection("highlights")}>
          <h3 style={{ margin: 0 }}>⭐ Highlights</h3>
          <span>{expandedSections.highlights ? "▼" : "▶"}</span>
        </div>
        {expandedSections.highlights && (
          <div>
            {(resume.highlights || []).map((highlight, idx) => (
              <div key={idx} style={{ display: "flex", gap: "8px", marginBottom: "8px", alignItems: "flex-start" }}>
                <span style={{ marginTop: "10px", color: "#6b7280", fontWeight: "bold" }}>•</span>
                <input
                  type="text"
                  placeholder="Add key highlight"
                  value={highlight || ""}
                  onChange={(e) => updateHighlight(idx, e.target.value)}
                  style={{ ...inputStyle, marginBottom: "0", flex: 1 }}
                />
                <button
                  type="button"
                  onClick={() => deleteHighlight(idx)}
                  style={{
                    padding: "8px 12px",
                    backgroundColor: "#ef4444",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginTop: "0",
                    fontSize: "12px",
                  }}
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addHighlight}
              style={{
                padding: "6px 12px",
                backgroundColor: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "13px",
                marginTop: "8px",
              }}
            >
              + Add Highlight
            </button>
          </div>
        )}
      </div>

      {/* Skills */}
      <div style={sectionStyle}>
        <div style={headerStyle} onClick={() => toggleSection("skills")}>
          <h3 style={{ margin: 0 }}>🎯 Skills</h3>
          <span>{expandedSections.skills ? "▼" : "▶"}</span>
        </div>
        {expandedSections.skills && (
          <div>
            {Object.entries(resume.skills || {}).map(([category, skillList]) => (
              <div key={category} style={{ marginBottom: "12px" }}>
                <label style={{ display: "block", fontWeight: "600", marginBottom: "6px", textTransform: "capitalize" }}>
                  {category}
                </label>
                <textarea
                  placeholder={`Enter ${category} skills (comma-separated)`}
                  value={(skillList || []).join(", ")}
                  onChange={(e) => handleSkillsChange(category, e.target.value)}
                  style={{
                    ...inputStyle,
                    minHeight: "60px",
                    marginBottom: "0",
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Open Source Projects */}
      <div style={sectionStyle}>
        <div style={headerStyle} onClick={() => toggleSection("openSource")}>
          <h3 style={{ margin: 0 }}>🔗 Open Source Projects</h3>
          <span>{expandedSections.openSource ? "▼" : "▶"}</span>
        </div>
        {expandedSections.openSource && (
          <div>
            {(resume.openSource || []).map((project, idx) => (
              <div
                key={idx}
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  padding: "12px",
                  marginBottom: "12px",
                  backgroundColor: "#fafbfc",
                }}
              >
                <input
                  type="text"
                  placeholder="Project Name"
                  value={project.name || ""}
                  onChange={(e) => updateOpenSourceProject(idx, "name", e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="url"
                  placeholder="GitHub URL"
                  value={project.url || ""}
                  onChange={(e) => updateOpenSourceProject(idx, "url", e.target.value)}
                  style={inputStyle}
                />
                <button
                  type="button"
                  onClick={() => deleteOpenSourceProject(idx)}
                  style={deleteButtonStyle}
                >
                  Delete Project
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addOpenSourceProject}
              style={buttonStyle}
            >
              + Add Open Source Project
            </button>
          </div>
        )}
      </div>

      {/* Certifications */}
      <div style={sectionStyle}>
        <div style={headerStyle} onClick={() => toggleSection("certifications")}>
          <h3 style={{ margin: 0 }}>🏆 Certifications</h3>
          <span>{expandedSections.certifications ? "▼" : "▶"}</span>
        </div>
        {expandedSections.certifications && (
          <div>
            {(resume.certifications || []).map((cert, idx) => (
              <div
                key={idx}
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  padding: "12px",
                  marginBottom: "12px",
                  backgroundColor: "#fafbfc",
                }}
              >
                <input
                  type="text"
                  placeholder="Certification Name"
                  value={cert.name || ""}
                  onChange={(e) => updateCertification(idx, "name", e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Issuing Organization"
                  value={cert.issuer || ""}
                  onChange={(e) => updateCertification(idx, "issuer", e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Year"
                  value={cert.year || ""}
                  onChange={(e) => updateCertification(idx, "year", e.target.value)}
                  style={inputStyle}
                />
                <button
                  type="button"
                  onClick={() => deleteCertification(idx)}
                  style={deleteButtonStyle}
                >
                  Delete Certification
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addCertification}
              style={buttonStyle}
            >
              + Add Certification
            </button>
          </div>
        )}
      </div>

      {/* Education */}
      <div style={sectionStyle}>
        <div style={headerStyle} onClick={() => toggleSection("education")}>
          <h3 style={{ margin: 0 }}>🎓 Education</h3>
          <span>{expandedSections.education ? "▼" : "▶"}</span>
        </div>
        {expandedSections.education && (
          <div>
            {(resume.education || []).map((edu, idx) => (
              <div
                key={idx}
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  padding: "12px",
                  marginBottom: "12px",
                  backgroundColor: "#fafbfc",
                }}
              >
                <input
                  type="text"
                  placeholder="Degree"
                  value={edu.degree || "Bachelor of Science"}
                  onChange={(e) => updateEducation(idx, "degree", e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Institution/School"
                  value={edu.institution || "University Name"}
                  onChange={(e) => updateEducation(idx, "institution", e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={edu.location || "City, Country"}
                  onChange={(e) => updateEducation(idx, "location", e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Year"
                  value={edu.year || new Date().getFullYear()}
                  onChange={(e) => updateEducation(idx, "year", e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="CGPA (if applicable)"
                  value={edu.cgpa || "3.5/4.0"}
                  onChange={(e) => updateEducation(idx, "cgpa", e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="text"
                  placeholder="Percentage (if applicable)"
                  value={edu.percentage || "85%"}
                  onChange={(e) => updateEducation(idx, "percentage", e.target.value)}
                  style={inputStyle}
                />
                <button
                  type="button"
                  onClick={() => deleteEducation(idx)}
                  style={deleteButtonStyle}
                >
                  Delete
                </button>
              </div>
            ))}
            <button type="button" onClick={addEducation} style={buttonStyle}>
              + Add Education
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
