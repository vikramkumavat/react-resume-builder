export default function ClassicLayout({ resume, sections = [], theme = {} }) {
  const {
    personalInfo = {},
    profile = "",
    experience = [],
    projects = [],
    highlights = [],
    openSource = [],
    certifications = [],
    skills = {},
    education = [],
  } = resume;

  const sectionStyle = {
    marginBottom: "24px",
  };

  const headingStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "12px",
    paddingBottom: "6px",
    borderBottom: `2px solid ${theme.primary || "#2563eb"}`,
    color: theme.text || "#111827",
    marginTop: "0",
  };

  const renderSection = (sectionKey) => {
    switch (sectionKey) {
      case "personalInfo":
        return (
          <div style={sectionStyle} key="personalInfo">
            <h1 style={{ margin: "0 0 4px 0", fontSize: "28px", fontWeight: "bold", color: theme.text || "#111827" }}>
              {personalInfo.name || "Your Name"}
            </h1>
            <p style={{ margin: "0 0 12px 0", fontSize: "16px", fontWeight: "600", color: theme.primary || "#2563eb" }}>
              {personalInfo.title || "Job Title"}
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", fontSize: "14px", color: theme.text || "#111827" }}>
              {personalInfo.email && <span>📧 {personalInfo.email}</span>}
              {personalInfo.phone && <span>📱 {personalInfo.phone}</span>}
              {personalInfo.location && <span>📍 {personalInfo.location}</span>}
              {personalInfo.github && (
                <span>
                  <a href={personalInfo.github} style={{ color: theme.primary || "#2563eb", textDecoration: "none" }}>
                    🔗 GitHub
                  </a>
                </span>
              )}
              {personalInfo.linkedin && (
                <span>
                  <a href={personalInfo.linkedin} style={{ color: theme.primary || "#2563eb", textDecoration: "none" }}>
                    💼 LinkedIn
                  </a>
                </span>
              )}
            </div>
          </div>
        );

      case "profile":
        if (!profile) return null;
        return (
          <div style={sectionStyle} key="profile">
            <h2 style={headingStyle}>Professional Profile</h2>
            <p style={{ lineHeight: "1.6", whiteSpace: "pre-wrap", color: theme.text || "#111827" }}>
              {profile}
            </p>
          </div>
        );

      case "experience":
        if (!experience || experience.length === 0) return null;
        return (
          <div style={sectionStyle} key="experience">
            <h2 style={headingStyle}>Work Experience</h2>
            {experience.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <h3 style={{ margin: "0", fontSize: "15px", fontWeight: "600", color: theme.text || "#111827" }}>
                    {exp.role}
                  </h3>
                  {exp.duration && (
                    <span style={{ fontSize: "13px", color: "#6b7280" }}>
                      {exp.duration}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: "14px", color: "#6b7280", fontStyle: "italic", margin: "4px 0 8px 0" }}>
                  {exp.company} {exp.location && `• ${exp.location}`}
                </div>
                {exp.responsibilities && Array.isArray(exp.responsibilities) && (
                  <ul style={{ margin: "8px 0 0 0", paddingLeft: "20px", color: theme.text || "#111827" }}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} style={{ marginBottom: "4px", fontSize: "14px" }}>
                        {resp}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        );

      case "projects":
        if (!projects || projects.length === 0) return null;
        return (
          <div style={sectionStyle} key="projects">
            <h2 style={headingStyle}>Projects</h2>
            {projects.map((project, idx) => (
              <div key={idx} style={{ marginBottom: "16px" }}>
                <h3 style={{ margin: "0 0 6px 0", fontSize: "15px", fontWeight: "600", color: theme.text || "#111827" }}>
                  {project.name}
                </h3>
                {project.techStack && Array.isArray(project.techStack) && (
                  <p style={{ margin: "4px 0 8px 0", fontSize: "13px", color: theme.primary || "#2563eb", fontWeight: "500" }}>
                    {project.techStack.join(" • ")}
                  </p>
                )}
                {project.details && Array.isArray(project.details) && (
                  <ul style={{ margin: "0", paddingLeft: "20px", color: theme.text || "#111827" }}>
                    {project.details.map((detail, i) => (
                      <li key={i} style={{ marginBottom: "4px", fontSize: "14px" }}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        );

      case "highlights":
        if (!highlights || highlights.length === 0) return null;
        return (
          <div style={sectionStyle} key="highlights">
            <h2 style={headingStyle}>Highlights</h2>
            <ul style={{ margin: "0", paddingLeft: "20px", color: theme.text || "#111827" }}>
              {highlights.map((highlight, i) => (
                <li key={i} style={{ marginBottom: "6px", fontSize: "14px" }}>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        );

      case "openSource":
        if (!openSource || openSource.length === 0) return null;
        return (
          <div style={sectionStyle} key="openSource">
            <h2 style={headingStyle}>Open Source</h2>
            <ul style={{ margin: "0", paddingLeft: "20px", color: theme.text || "#111827" }}>
              {openSource.map((repo, i) => (
                <li key={i} style={{ marginBottom: "6px", fontSize: "14px" }}>
                  <a href={repo.url} style={{ color: theme.primary || "#2563eb", textDecoration: "none" }}>
                    {repo.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );

      case "certifications":
        if (!certifications || certifications.length === 0) return null;
        return (
          <div style={sectionStyle} key="certifications">
            <h2 style={headingStyle}>Certifications</h2>
            <ul style={{ margin: "0", paddingLeft: "20px", color: theme.text || "#111827" }}>
              {certifications.map((cert, i) => (
                <li key={i} style={{ marginBottom: "8px", fontSize: "14px" }}>
                  <span style={{ fontWeight: "600" }}>{cert.name}</span>
                  {cert.issuer && <span> • {cert.issuer}</span>}
                  {cert.year && <span style={{ color: "#6b7280", marginLeft: "8px" }}>({cert.year})</span>}
                </li>
              ))}
            </ul>
          </div>
        );

      case "skills":
        if (!skills || Object.keys(skills).length === 0) return null;
        return (
          <div style={sectionStyle} key="skills">
            <h2 style={headingStyle}>Skills</h2>
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} style={{ marginBottom: "12px" }}>
                <p style={{ margin: "0 0 6px 0", fontSize: "14px", fontWeight: "600", color: theme.text || "#111827", textTransform: "capitalize" }}>
                  {category}:
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {Array.isArray(skillList) &&
                    skillList.map((skill, i) => (
                      <span
                        key={i}
                        style={{
                          display: "inline-block",
                          padding: "6px 12px",
                          backgroundColor: theme.primary || "#2563eb",
                          color: "#ffffff",
                          borderRadius: "20px",
                          fontSize: "13px",
                          fontWeight: "500",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        );

      case "education":
        if (!education || education.length === 0) return null;
        return (
          <div style={sectionStyle} key="education">
            <h2 style={headingStyle}>Education</h2>
            {education.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <h3 style={{ margin: "0", fontSize: "15px", fontWeight: "600", color: theme.text || "#111827" }}>
                    {edu.degree}
                  </h3>
                  {edu.year && (
                    <span style={{ fontSize: "13px", color: "#6b7280" }}>
                      {edu.year}
                    </span>
                  )}
                </div>
                {edu.institution && (
                  <p style={{ margin: "4px 0 0 0", fontSize: "14px", color: "#6b7280", fontStyle: "italic" }}>
                    {edu.institution} {edu.location && `• ${edu.location}`}
                  </p>
                )}
                {edu.cgpa && (
                  <p style={{ margin: "4px 0 0 0", fontSize: "13px", color: theme.text || "#111827" }}>
                    CGPA: {edu.cgpa}
                  </p>
                )}
                {edu.percentage && (
                  <p style={{ margin: "4px 0 0 0", fontSize: "13px", color: theme.text || "#111827" }}>
                    Percentage: {edu.percentage}
                  </p>
                )}
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  const containerStyle = {
    padding: "30px 30px 30px 30px", // top, right, bottom, left - balanced spacing
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: theme.background || "#ffffff",
    color: theme.text || "#111827",
    fontFamily: `"${theme.font}", system-ui, -apple-system, sans-serif`,
    minHeight: "100%",
  };

  // If sections array is provided, render in that order
  const sectionsToRender =
    sections && sections.length > 0
      ? sections
      : ["personalInfo", "profile", "experience", "projects", "highlights", "openSource", "certifications", "skills", "education"];

  return (
    <div style={containerStyle}>
      {sectionsToRender.map((section) => renderSection(section))}
    </div>
  );
}
