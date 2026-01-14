import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

export default function ModernTwoColumnLayout({ resume, theme = {} }) {
  const {
    personalInfo = {},
    profile = "",
    experience = [],
    projects = [],
    skills = {},
    education = [],
  } = resume;

  const SectionTitle = ({ children }) => (
    <h3 className="text-xs font-bold uppercase tracking-wide mb-2">
      {children}
    </h3>
  );

  return (
    <div
      className="grid grid-cols-[32%_68%] min-h-full text-[13px]"
      style={{
        fontFamily: `"${theme.font}", system-ui, sans-serif`,
        color: theme.text,
      }}
    >
      {/* ================= LEFT SIDEBAR ================= */}
      <aside
        className="p-6"
        style={{ backgroundColor: theme.primary, color: "#ffffff" }}
      >
        <h1 className="text-xl font-bold leading-tight">
          {personalInfo.name || "Your Name"}
        </h1>
        <p className="text-sm opacity-90 mt-1">
          {personalInfo.title || "Job Title"}
        </p>

        {/* CONTACT */}
        <div className="mt-5 space-y-2 text-xs">
          {personalInfo.email && (
            <p className="flex items-center gap-2">
              <FiMail /> {personalInfo.email}
            </p>
          )}
          {personalInfo.phone && (
            <p className="flex items-center gap-2">
              <FiPhone /> {personalInfo.phone}
            </p>
          )}
          {personalInfo.location && (
            <p className="flex items-center gap-2">
              <FiMapPin /> {personalInfo.location}
            </p>
          )}
          {personalInfo.github && (
            <a href={personalInfo.github} className="flex items-center gap-2">
              <FiGithub /> GitHub
            </a>
          )}
          {personalInfo.linkedin && (
            <a href={personalInfo.linkedin} className="flex items-center gap-2">
              <FiLinkedin /> LinkedIn
            </a>
          )}
        </div>

        {/* SKILLS */}
        {Object.keys(skills).length > 0 && (
          <div className="mt-6">
            <SectionTitle>Skills</SectionTitle>
            <div className="flex flex-wrap gap-2">
              {Object.values(skills)
                .flat()
                .map((s, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-[11px] rounded bg-white/20"
                  >
                    {s}
                  </span>
                ))}
            </div>
          </div>
        )}
      </aside>

      {/* ================= RIGHT CONTENT ================= */}
      <main className="p-8">
        {/* PROFILE */}
        {profile && (
          <div className="mb-6">
            <SectionTitle>Profile</SectionTitle>
            <p className="leading-relaxed">{profile}</p>
          </div>
        )}

        {/* EXPERIENCE */}
        {experience.length > 0 && (
          <div className="mb-6">
            <SectionTitle>Experience</SectionTitle>

            {experience.map((exp, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-semibold">{exp.role}</h4>
                  <span className="text-[11px] text-gray-500">
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
        )}

        {/* PROJECTS */}
        {projects.length > 0 && (
          <div className="mb-6">
            <SectionTitle>Projects</SectionTitle>

            {projects.map((p, i) => (
              <div key={i} className="mb-4">
                <h4 className="font-semibold">{p.name}</h4>
                {p.techStack && (
                  <p
                    className="text-[11px] font-medium"
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
        )}

        {/* EDUCATION */}
        {education.length > 0 && (
          <div>
            <SectionTitle>Education</SectionTitle>

            {education.map((e, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between">
                  <h4 className="font-semibold">{e.degree}</h4>
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
        )}
      </main>
    </div>
  );
}
