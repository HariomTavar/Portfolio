export const portfolioData = {
  site: {
    title: 'Hariom Tavar | Full Stack Developer Portfolio',
  },
  person: {
    name: 'Hariom Tavar',
    role: 'Full Stack Developer | System Builder',
    email: 'hariomtavar7@gmail.com',
  },
  links: {
    github: 'https://github.com/HariomTavar',
    linkedin: 'https://www.linkedin.com/in/hariom-tavar-065685268/',
    veynor: 'https://694c040387b1cc5298218430--veynor.netlify.app/',
  },
  nav: [
    { label: 'Hero', target: 'hero' },
    { label: 'About', target: 'about' },
    { label: 'Impact', target: 'impact' },
    { label: 'Projects', target: 'projects' },
    { label: 'Process', target: 'process' },
    { label: 'Skills', target: 'skills' },
    { label: 'Journey', target: 'journey' },
    { label: 'Why Work With Me', target: 'why-work' },
    { label: 'Future', target: 'future' },
    { label: 'Contact', target: 'contact' },
  ],
  hero: {
    heading: 'Hariom Tavar',
    role: 'Full Stack Developer | System Builder',
    subheading:
      'I design and build structured systems that solve real-world problems through scalable and user-focused development.',
    typingRoles: ['System Builder', 'Full Stack Developer', 'Problem Solver'],
    oneLiner:
      'From learning platforms to healthcare systems, I turn ideas into impactful digital solutions.',
    primaryCta: { label: 'Explore My Work', target: 'projects' },
    secondaryCta: { label: 'Contact', target: 'contact' },
  },
  about: {
    title: 'About Me',
    paragraphs: [
      'I am a Computer Science student with a strong interest in building practical and scalable applications. My focus is on solving real-world problems through structured thinking and clean implementation.',
      'I work with modern technologies like React, Java, Spring Boot, and databases to create systems that are not only functional but meaningful.',
      'I believe in continuous learning, consistency, and building projects that create real impact rather than just completing tasks.',
    ],
  },
  impact: {
    title: 'Impact Snapshot',
    subtitle: 'How I measure execution quality and real product outcomes.',
    stats: [
      {
        value: '3+',
        label: 'Structured Systems Built',
        description: 'Education, productivity, and healthcare-focused system builds.',
      },
      {
        value: '100%',
        label: 'Problem-First Projects',
        description: 'Every project starts with a practical pain point and measurable outcome.',
      },
      {
        value: 'Fast',
        label: 'Execution Velocity',
        description: 'From concept to workable prototype with product-level UI polish.',
      },
      {
        value: 'High',
        label: 'Scalability Focus',
        description: 'Design decisions keep maintainability and future expansion in mind.',
      },
    ],
  },
  projects: {
    title: 'Projects',
    subtitle: 'Systems built to solve practical problems with clarity, structure, and measurable impact.',
    items: [
      {
        title: 'Veynor - Structured Learning & Consistency Platform',
        type: 'Featured Project',
        featured: true,
        liveLabel: 'Live Demo',
        liveUrl: 'https://694c040387b1cc5298218430--veynor.netlify.app/',
        problem: 'Students lack direction and consistency in learning.',
        solution: 'A platform that provides structured learning paths and tracks progress.',
        keyFeatures: [
          'Guided skill roadmap',
          'Consistency tracker',
          'Organized learning resources',
        ],
        impact: 'Helps students stay consistent and focused.',
      },
      {
        title: 'Smart Task & Search System',
        type: 'Concept / Case Study',
        featured: false,
        problem: 'Users waste time searching and managing tasks.',
        solution: 'A system that provides fast and structured results.',
        keyFeatures: [
          'Efficient search logic',
          'Task organization',
          'Fast response system',
        ],
        impact: 'Improves productivity and reduces effort.',
      },
      {
        title: 'Healthcare Coordination System',
        type: 'Concept / Case Study',
        featured: false,
        problem: 'Hospitals lack coordination during emergencies.',
        solution: 'A system connecting hospitals for better communication.',
        keyFeatures: [
          'Resource tracking',
          'Data sharing',
          'Emergency coordination',
        ],
        impact: 'Improves response efficiency in critical situations.',
      },
    ],
  },
  process: {
    title: 'How I Build',
    subtitle: 'A clear workflow for turning ideas into reliable systems.',
    steps: [
      {
        phase: '01 Discover',
        title: 'Problem Clarification',
        description:
          'I identify constraints, user pain points, and success criteria before writing code.',
      },
      {
        phase: '02 Design',
        title: 'System and UX Planning',
        description:
          'I map architecture, data flow, and interface hierarchy for clarity and scale.',
      },
      {
        phase: '03 Deliver',
        title: 'Build, Iterate, Improve',
        description:
          'I ship practical versions quickly, validate behavior, and refine performance and usability.',
      },
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'A production-focused skill stack for building reliable, scalable, and maintainable products.',
    groups: [
      {
        title: 'Frontend',
        items: [
          'React',
          'JavaScript',
          'TypeScript',
          'Tailwind',
          'Next.js',
          'Responsive Design',
          'Framer Motion',
        ],
      },
      {
        title: 'Backend',
        items: [
          'Java',
          'Spring Boot',
          'Node.js',
          'Express.js',
          'REST APIs',
          'MVC',
          'Authentication',
        ],
      },
      {
        title: 'Database',
        items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Data Modeling', 'Query Optimization'],
      },
      {
        title: 'Problem Solving',
        items: ['DSA', 'Logical Thinking', 'Optimization', 'Complexity Analysis'],
      },
      {
        title: 'Tools',
        items: ['Git', 'GitHub', 'Debugging', 'Postman', 'VS Code', 'API Testing'],
      },
      {
        title: 'Cloud',
        items: ['AWS Basics', 'EC2', 'S3', 'Deployment', 'CI/CD Basics'],
      },
      {
        title: 'System Thinking',
        items: [
          'Scalable Systems',
          'Architecture',
          'Real-world Solutions',
          'Performance Mindset',
          'Reliability Thinking',
        ],
      },
    ],
  },
  journey: {
    title: 'My Journey',
    subtitle: 'From curiosity to structured product building.',
    items: [
      {
        period: 'Step 1',
        title: 'Curiosity to Foundations',
        description:
          'I started learning technology with curiosity, but quickly realized that building real projects is what creates true understanding.',
      },
      {
        period: 'Step 2',
        title: 'Learning to Building',
        description:
          'Over time, I shifted my focus from learning concepts to solving real problems through structured systems.',
      },
      {
        period: 'Step 3',
        title: 'Scalable and Impactful Thinking',
        description:
          'Today, I aim to build solutions that are useful, scalable, and impactful.',
      },
    ],
  },
  whyWork: {
    title: 'Why Work With Me',
    points: [
      'Strong problem-solving mindset',
      'Focus on real-world solutions',
      'Consistent learning approach',
      'Clean and structured development',
    ],
  },
  future: {
    title: 'Future Vision',
    text: 'I aim to build systems that solve large-scale problems in education, healthcare, and productivity through efficient and scalable solutions.',
  },
  contact: {
    title: 'Contact',
    cta: "Let's build something meaningful together.",
    emailLabel: 'Email',
    email: 'hariomtavar7@gmail.com',
    phoneLabel: 'Phone',
    phone: '9753564070',
    links: {
      linkedin: 'https://www.linkedin.com/in/hariom-tavar-065685268/',
      github: 'https://github.com/HariomTavar',
    },
  },
}
