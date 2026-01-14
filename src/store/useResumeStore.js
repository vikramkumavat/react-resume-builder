import create from 'zustand'

const useResumeStore = create((set) => ({
  // Personal
  personal: {
    name: 'Your Name',
    title: 'Job Title',
    email: '',
    phone: '',
    location: '',
    github: '',
    linkedin: '',
  },

  // Sections
  profile: '',
  experience: [
    {
      id: 1,
      role: 'Software Engineer',
      company: 'Company',
      duration: '2020 - Present',
      responsibilities: ['Built features', 'Improved performance'],
    },
  ],
  projects: [],
  skills: {
    technical: ['JavaScript', 'React'],
    tools: ['Git', 'VSCode'],
  },
  education: [],

  highlights: [],

  // UI state
  layout: 'classic', // 'classic' | 'two-column'
  theme: {
    primary: '#0ea5e9',
    text: '#0f172a',
    font: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto",
  },

  // Actions
  updatePersonal: (patch) => set((s) => ({ personal: { ...s.personal, ...patch } })),
  setProfile: (text) => set({ profile: text }),
  addExperience: (item) => set((s) => ({ experience: [...s.experience, item] })),
  updateExperience: (id, patch) => set((s) => ({
    experience: s.experience.map((e) => (e.id === id ? { ...e, ...patch } : e)),
  })),
  setLayout: (l) => set({ layout: l }),
  setTheme: (patch) => set((s) => ({ theme: { ...s.theme, ...patch } })),
  loadSampleData: () => set({
    personal: {
      name: 'Vikram Kumavat',
      title: 'Senior Backend Engineer',
      email: 'vikram@example.com',
      phone: '+91-XXXXXXXXXX',
      location: 'Ahmedabad, Gujarat, India',
      github: 'https://github.com/vikramkumavat',
      linkedin: '',
    },
    profile: `Detail-oriented Software Engineer with 6+ years of experience building robust, scalable, and high‑performance applications using Laravel, React, Node.js, WHMCS, and modern API systems. Strong expertise in travel-related API integrations, automation, logging pipelines, and large‑scale data processing. Skilled in client communication, team collaboration, and delivering solutions aligned with business goals.`,
    experience: [
      {
        id: 1,
        role: 'Software Engineer',
        company: 'Netclues Technologies, Ahmedabad',
        duration: '2019 – 2023',
        responsibilities: [
          'Worked on various in‑house systems using Laravel, WHMCS, jQuery, and JavaScript.',
          'Integrated PayU payment gateway with secure backend workflows.',
          'Upgraded Laravel applications from version 5 to version 9 while ensuring backward‑compatibility.',
          'Developed Knowledge Base and Ticketing System using Laravel + REST APIs.',
          'Built an automated invoicing module that generated and emailed monthly client invoices.',
          'Created a custom WHMCS module to sync billing, clients, and plans with QuickBooks.',
        ],
      },
      {
        id: 2,
        role: 'Senior Backend Engineer',
        company: 'Travel Projects',
        duration: '2023 – Present',
        responsibilities: [
          'Developed large‑scale travel systems using Laravel, React, Node.js, and Lumen.',
          'Upgraded existing third‑party travel API versions and optimized data flow.',
          'Built unified API services to manage multiple supplier responses efficiently.',
          'Implemented logging & monitoring pipelines using OpenSearch, tracking, and DataDog.',
          'Developed custom rate‑management and supplier‑client pricing workflows.',
          'Created large CSV ingestion system and mapping service using OpenSearch and S3.',
          'Built hotel and supplier blacklist module with configurable frontend controls.',
          'Added MoEngage tracking for customer behavior analytics.',
          'Collaborated with cross‑functional teams through Jira for sprint planning and priorities.',
          'Documented workflows, conducted KT sessions, and mentored junior developers.',
        ],
      },
    ],
    highlights: [
      'Handled direct communication with international clients.',
      'Delivered multiple high‑priority releases within deadlines.',
      'Consistent track record of building clean, testable, maintainable code.',
      'Led backend processes and collaborated closely with product teams.',
    ],
    projects: [
      {
        name: 'Travel Booking Platform',
        tech: 'Laravel, Lumen, React.js, Node.js, MySQL, OpenSearch',
        description: 'Integrated multiple supplier APIs; built travel search, booking, pricing, and cancellation pipelines; developed rate‑management engine and supplier mapping services; optimized API response time and DB performance.',
      },
      {
        name: 'Ticketing & Log Management System',
        tech: 'Laravel, React.js, jQuery, MySQL',
        description: 'Created task and ticket management system with automated workflows; integrated Gmail API for customer support automation; developed deal‑management module with activity tracking.',
      },
      {
        name: 'Laravel Filament + React Admin Application',
        tech: 'Laravel, Filament, React.js, MySQL, REST APIs, Vite',
        description: 'Built a full‑stack admin-driven web application using Laravel + Filament for backend management and React for frontend UIs; implemented role-based admin panel, CRUD, validation and relational data handling.',
      },
    ],
    skills: {
      backend: ['Laravel', 'Lumen', 'Node.js', 'Express.js', 'PHP', 'WHMCS'],
      frontend: ['React.js', 'jQuery', 'JavaScript', 'HTML5', 'CSS3'],
      databases: ['MySQL', 'OpenSearch'],
      tools: ['Git', 'GitHub', 'Jira', 'DataDog', 'MoEngage', 'cPanel', 'FTP', 'PuTTY'],
      soft: ['Team Collaboration', 'Client Communication', 'Problem‑Solving', 'Mentoring'],
    },
    education: [
      {
        degree: 'Bachelor of Engineering – Computer Engineering',
        school: 'Swarrnim Startup & Innovation University, Gujarat',
        year: '2019',
        score: 'CGPA: 7.6/10',
      },
      { degree: '12th – G.H.S.E.B.', year: '2015', score: '55%' },
      { degree: '10th – G.S.E.B.', year: '2013', score: '74%' },
    ],
  }),
}))

export default useResumeStore
