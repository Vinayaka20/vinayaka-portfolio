export const personalInfo = {
  name: 'Vinayaka H',
  shortName: 'VH',
  eyebrow: 'COMPUTER SCIENCE ENGINEERING STUDENT',
  headline: 'Building Intelligent Systems. Engineering Reliable Software.',
  intro:
    "I'm Vinayaka H, a Computer Science Engineering student interested in Java backend development, full-stack applications, data structures and algorithms, and AI-powered systems. I enjoy building practical software that solves real-world problems.",
  tagline: 'Computer Science Engineering Student & Full-Stack Developer',
};

export const aboutInfo = {
  heading: 'A Little About Me',
  description:
    "I'm a Computer Science Engineering student building my skills in software development, backend engineering, and intelligent applications. My interests include designing REST APIs, working with databases, solving algorithmic problems, and exploring how AI and embedded systems can solve practical challenges.",
  cards: [
    {
      title: 'Backend Engineering',
      description: 'Java, Spring Boot, REST APIs, and database-driven applications.',
      icon: 'Server',
    },
    {
      title: 'Problem Solving',
      description: 'Data structures, algorithms, and continuous coding practice.',
      icon: 'Code2',
    },
    {
      title: 'AI & IoT',
      description:
        'Computer vision, machine learning fundamentals, and embedded-system integration.',
      icon: 'Cpu',
    },
  ],
};

export const skillsData = [
  {
    category: 'Programming Languages',
    icon: 'Code2',
    skills: ['Java', 'C', 'Python', 'JavaScript', 'PHP', 'SQL'],
  },
  {
    category: 'Backend Development',
    icon: 'Server',
    skills: ['Spring Boot', 'REST APIs', 'Spring Data JPA', 'JDBC'],
  },
  {
    category: 'Frontend Development',
    icon: 'Layout',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Databases',
    icon: 'Database',
    skills: ['MySQL'],
  },
  {
    category: 'AI / Machine Learning',
    icon: 'BrainCircuit',
    skills: ['TensorFlow', 'OpenCV', 'Machine Learning Fundamentals'],
  },
  {
    category: 'IoT & Embedded Systems',
    icon: 'Cpu',
    skills: ['Raspberry Pi', 'ESP32'],
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    skills: ['Git', 'GitHub', 'Maven', 'Postman', 'VS Code', 'IntelliJ IDEA'],
  },
];

export const projects = [
  {
    id: 'dsa-progress-analyzer',
    title: 'DSA Progress Analyzer',
    description:
      'A full-stack application that tracks and analyzes LeetCode problem-solving progress through GitHub synchronization.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'GitHub API'],
    features: [
      'GitHub synchronization',
      'Solution commit-date tracking',
      'Weekly and 30-day goals',
      'Solving statistics and streak tracking',
      'Topic-wise analysis',
      'Progress history',
      'Spring Boot REST APIs and MySQL data management',
    ],
    actionLabel: 'View on GitHub',
    actionUrl: '',
    visual: 'dsa-dashboard',
    status: null,
  },
  {
    id: 'iot-weed-detection',
    title: 'IoT-Based Weed Detection and Removal',
    description:
      'An ongoing AI and IoT project exploring camera-based weed detection, image classification, and automated weed removal.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Raspberry Pi', 'ESP32'],
    features: [
      'Computer vision-based weed detection',
      'Image processing and classification',
      'Raspberry Pi camera integration',
      'ESP32 motor control',
      'Exploration of autonomous navigation and targeted weed removal',
    ],
    actionLabel: 'Explore Project',
    actionUrl: '',
    visual: 'iot-vision',
    status: 'In Progress',
  },
  {
    id: 'online-voting-system',
    title: 'Online Voting System',
    description:
      'A database-backed web application that allows users to register, log in, and cast votes through a structured digital voting workflow.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
    features: [
      'Registration and login',
      'Server-side validation',
      'Prevention of duplicate voting',
      'Database-backed vote handling',
      'Responsive user interface',
    ],
    actionLabel: 'View Project',
    actionUrl: '',
    visual: 'voting-system',
    status: null,
  },
];

export const education = [
  {
    institution: 'A J Institute of Engineering and Technology',
    degree: 'Bachelor of Engineering — Computer Science and Engineering',
    detail: 'CGPA: 8.2',
  },
  {
    institution: 'Kendriya Vidyalaya No. 1, Panambur, Mangalore',
    degree: '10th Standard',
    detail: '84.8%',
  },
  {
    institution: 'Kendriya Vidyalaya No. 1, Panambur, Mangalore',
    degree: '12th Standard',
    detail: '75%',
  },
];

export const achievements = [
  {
    title: 'Smart India Hackathon (SIH) 2026',
    role: 'Participant',
    date: '9 September 2026',
    description:
      'Participated in Smart India Hackathon 2026 and received a certificate of participation from A J Institute of Engineering and Technology.',
    certificateUrl: '',
  },
];

export const contactInfo = {
  heading: "Let's Build Something Meaningful",
  description:
    'Have a project idea, a technical opportunity, or a reason to connect? Feel free to reach out.',
  email: 'vinayakahhirematha@gmail.com',
  github: 'https://github.com/Vinayaka20',
  linkedin: 'https://linkedin.com/in/vinayaka-h',
  leetcode: 'https://leetcode.com/u/Vinay_CS124',
};

export const socialLinks = {
  github: 'https://github.com/Vinayaka20',
  linkedin: 'https://linkedin.com/in/vinayaka-h',
  leetcode: 'https://leetcode.com/u/Vinay_CS124',
};

export const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact', id: 'contact' },
];
