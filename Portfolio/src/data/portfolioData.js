export const portfolioData = {
  site: {
    title: 'Hariom Tavar | Full Stack Developer Portfolio',
  },
  person: {
    name: 'Hariom Tavar',
    role: 'Full Stack Developer | System Builder',
    email: 'hariomtavar@email.com',
  },
  links: {
    github: 'https://github.com/HariomTavar',
    linkedin: 'https://www.linkedin.com/in/hariom-tavar-065685268/',
    veynor: 'https://694c040387b1cc5298218430--veynor.netlify.app/',
  },
  nav: [
    { label: 'Hero', target: 'hero' },
    { label: 'About', target: 'about' },
    { label: 'Projects', target: 'projects' },
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
    primaryCta: { label: 'Explore My Work', target: 'about' },
    secondaryCta: { label: 'View Projects', target: 'projects' },
  },
  about: {
    title: 'About Me',
    paragraphs: [
      'I am a Computer Science student with a strong interest in building practical and scalable applications. My focus is on solving real-world problems through structured thinking and clean implementation.',
      'I work with modern technologies like React, Java, Spring Boot, and databases to create systems that are not only functional but meaningful.',
      'I believe in continuous learning, consistency, and building projects that create real impact rather than just completing tasks.',
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
  skills: {
    title: 'Skills',
    subtitle: 'Core technologies I use to build scalable, practical products.',
    groups: [
      {
        title: 'Frontend',
        items: ['React', 'JavaScript', 'Tailwind CSS'],
      },
      {
        title: 'Backend',
        items: ['Java', 'Spring Boot'],
      },
      {
        title: 'Database',
        items: ['MySQL', 'PostgreSQL'],
      },
      {
        title: 'Other',
        items: ['DSA', 'Git', 'AWS Basics'],
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
    email: 'hariomtavar@email.com',
    links: {
      linkedin: 'https://www.linkedin.com/in/hariom-tavar-065685268/',
      github: 'https://github.com/HariomTavar',
    },
  },
}
