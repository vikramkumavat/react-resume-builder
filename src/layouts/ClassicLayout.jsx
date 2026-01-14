import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

export default function ClassicLayout({ resume, sections = [], theme = {} }) {
  const {
    personalInfo = {},
    profile = "",
    experience = [],
    projects = [],
    skills = {},
    education = [],
  } = resume;

  const SectionTitle = ({ children }) => (
    <h2
      className="text-[13px] font-bold uppercase tracking-wide border-b pb-1 mb-3"
      style={{ borderColor: theme.primary }}
    >
      {children}
    </h2>
  );

  const sectionsToRender =
    sections.length > 0
      ? sections
      : ["personalInfo", "profile", "experience", "projects", "skills", "education"];

  return (
    <div
  className="w-full text-[13px] leading-relaxed"
  style={{
    color: theme.text,
    fontFamily: `"${theme.font}", system-ui, sans-serif`,
  }}
>

      {sectionsToRender.map((section) => {
        switch (section) {

          /* ================= HEADER ================= */
          case "personalInfo":
            return (
              <div key="personalInfo" className="mb-7">
                <h1 className="text-2xl font-bold leading-tight">
                  {personalInfo.name || "Your Name"}
                </h1>

                <p
                  className="text-sm font-semibold mt-1"
                  style={{ color: theme.primary }}
                >
                  {personalInfo.title || "Job Title"}
                </p>

                {/* CONTACT INFO */}
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-6 text-xs">
                  {personalInfo.email && (
                    <span className="flex items-center gap-2">
                      <FiMail className="shrink-0" />
                      {personalInfo.email}
                    </span>
                  )}
                  {personalInfo.phone && (
                    <span className="flex items-center gap-2">
                      <FiPhone className="shrink-0" />
                      {personalInfo.phone}
                    </span>
                  )}
                  {personalInfo.location && (
                    <span className="flex items-center gap-2">
                      <FiMapPin className="shrink-0" />
                      {personalInfo.location}
                    </span>
                  )}
                  {personalInfo.github && (
                    <a
                      href={personalInfo.github}
                      className="flex items-center gap-2 hover:underline"
                      style={{ color: theme.primary }}
                    >
                      <FiGithub className="shrink-0" />
                      GitHub
                    </a>
                  )}
                  {personalInfo.linkedin && (
                    <a
                      href={personalInfo.linkedin}
                      className="flex items-center gap-2 hover:underline"
                      style={{ color: theme.primary }}
                    >
                      <FiLinkedin className="shrink-0" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            );

          /* ================= PROFILE ================= */
          case "profile":
            return (
              profile && (
                <div key="profile" className="mb-6">
                  <SectionTitle>Profile</SectionTitle>
                  <p className="whitespace-pre-line">{profile}</p>
                </div>
              )
            );

          /* ================= EXPERIENCE ================= */
          case "experience":
            return (
              experience.length > 0 && (
                <div key="experience" className="mb-6">
                  <SectionTitle>Experience</SectionTitle>

                  {experience.map((exp, i) => (
                    <div key={i} className="mb-4">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold leading-snug">
                          {exp.role}
                        </h3>
                        <span className="text-[11px] text-gray-500 whitespace-nowrap">
                          {exp.duration}
                        </span>
                      </div>

                      <p className="italic text-[11px] text-gray-500 mb-1">
                        {exp.company}
                        {exp.location && ` • ${exp.location}`}
                      </p>

                      <ul className="list-disc ml-4 space-y-1">
                        {exp.responsibilities?.map((r, idx) => (
                          <li key={idx}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )
            );

          /* ================= PROJECTS ================= */
          case "projects":
            return (
              projects.length > 0 && (
                <div key="projects" className="mb-6">
                  <SectionTitle>Projects</SectionTitle>

                  {projects.map((p, i) => (
                    <div key={i} className="mb-4">
                      <h3 className="font-semibold">{p.name}</h3>

                      {p.techStack && (
                        <p
                          className="text-[11px] font-medium mb-1"
                          style={{ color: theme.primary }}
                        >
                          {p.techStack.join(" • ")}
                        </p>
                      )}

                      <ul className="list-disc ml-4 space-y-1">
                        {p.details?.map((d, idx) => (
                          <li key={idx}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )
            );

          /* ================= SKILLS ================= */
          case "skills":
            return (
              Object.keys(skills).length > 0 && (
                <div key="skills" className="mb-6">
                  <SectionTitle>Skills</SectionTitle>

                  {Object.entries(skills).map(([cat, list]) => (
                    <div key={cat} className="mb-3">
                      <p className="font-semibold text-xs capitalize mb-1">
                        {cat}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {list.map((s, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 rounded text-[11px] border"
                            style={{
                              borderColor: theme.primary,
                              color: theme.primary,
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )
            );

          /* ================= EDUCATION ================= */
          case "education":
            return (
              education.length > 0 && (
                <div key="education" className="mb-6">
                  <SectionTitle>Education</SectionTitle>

                  {education.map((e, i) => (
                    <div key={i} className="mb-3">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">{e.degree}</h3>
                        <span className="text-[11px] text-gray-500">
                          {e.year}
                        </span>
                      </div>
                      <p className="italic text-[11px] text-gray-500">
                        {e.institution}
                        {e.location && ` • ${e.location}`}
                      </p>
                    </div>
                  ))}
                </div>
              )
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
