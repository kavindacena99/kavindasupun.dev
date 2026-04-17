import portrait from "../assets/dp.jpg";

export const portfolioContent = {
  seo: {
    title: "Kavinda Supun | Associate AI Engineer",
    description:
      "Associate AI Engineer in Sri Lanka building agentic AI systems, RAG workflows, backend APIs, mobile products, and deployment-ready software.",
  },
  navigation: [
    { label: "Home", href: "#home", sectionId: "home" },
    { label: "About", href: "#about", sectionId: "about" },
    { label: "Experience", href: "#experience", sectionId: "experience" },
    { label: "Education", href: "#education", sectionId: "education" },
    { label: "Skills", href: "#skills", sectionId: "skills" },
    { label: "Projects", href: "#projects", sectionId: "projects" },
    { label: "Contact", href: "#contact", sectionId: "contact" },
  ],
  profile: {
    name: "Kavinda Supun",
    role: "Associate AI Engineer",
    headline:
      "Associate AI Engineer | MSc Computer Science Student | Full-Stack Developer",
    location: "Sri Lanka",
    summary:
      "I build practical AI and software systems with a focus on agentic workflows, retrieval-augmented generation, backend APIs, mobile apps, and deployment-ready engineering.",
    heroIntro:
      "Engineering AI-assisted products and real-world software across backend, mobile, and cloud-facing delivery.",
    portrait,
    focusTags: [
      "Agentic AI",
      "RAG pipelines",
      "Django + DRF",
      "Flutter",
      "MERN stack",
      "Cloud / DevOps",
    ],
    quickFacts: [
      { label: "Current role", value: "Associate AI Engineer" },
      {
        label: "Current study",
        value: "MSc in Computer Science, University of Kelaniya",
      },
      {
        label: "Engineering lens",
        value: "AI systems, backend architecture, mobile delivery, deployment",
      },
    ],
    about: {
      eyebrow: "Professional Profile",
      title: "An AI-focused engineer who ships practical systems.",
      description:
        "I combine an AI engineering focus with a software engineering foundation across backend development, mobile products, and production-minded delivery.",
      paragraphs: [
        "I am currently working as an Associate AI Engineer while continuing my MSc in Computer Science at the University of Kelaniya. My work is centered on building usable AI systems rather than isolated demos, with particular attention to agentic workflows, retrieval quality, backend reliability, and grounded outputs.",
        "Alongside AI-focused work, I have experience delivering full-stack and mobile systems across Django, DRF, Flutter, and MERN-based products. I enjoy building software that solves operational problems, supports real workflows, and stays maintainable as the system grows.",
      ],
      highlights: [
        "Build AI features with retrieval, orchestration, and backend integration in mind",
        "Comfortable across API design, business logic, mobile flows, and deployment work",
        "Based in Sri Lanka and interested in practical, product-oriented engineering",
      ],
    },
    resume: {
      href: "",
      label: "Download Resume",
      note: "TODO: Add a public resume or CV file when it is ready to publish.",
    },
  },
  currentFocus: {
    eyebrow: "Current Focus",
    title: "What I am working on now",
    description:
      "The portfolio is positioned around real engineering work, not generic claims. These are the areas I am actively deepening.",
    items: [
      {
        icon: "spark",
        title: "Agentic AI systems",
        description:
          "Designing workflows that combine prompting, retrieval, tools, and controlled execution paths for practical product use.",
      },
      {
        icon: "database",
        title: "RAG pipelines",
        description:
          "Improving note ingestion, retrieval quality, grounded answer generation, and evaluation-oriented system design.",
      },
      {
        icon: "server",
        title: "Backend engineering",
        description:
          "Building Django and DRF APIs, business logic, integration layers, and service structures that support reliable delivery.",
      },
      {
        icon: "cloud",
        title: "Deployment-minded delivery",
        description:
          "Connecting application code with Docker, NGINX, CI/CD, Azure, and the operational work needed to ship usable systems.",
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Professional direction and engineering background",
    description:
      "Specific employer names and timelines are intentionally left out until they are ready to publish. The section still reflects the current scope of work truthfully.",
    roles: [
      {
        phase: "Current role",
        title: "Associate AI Engineer",
        summary:
          "Working on AI-driven application features and backend systems with a focus on retrieval-augmented generation, orchestration logic, grounded outputs, and production-minded implementation.",
        highlights: [
          "Designing agentic AI flows that connect models, retrieval, and application logic",
          "Building APIs and backend services that support AI features within larger systems",
          "Thinking in terms of evaluation, maintainability, and deployment readiness instead of prompt-only prototypes",
        ],
      },
      {
        phase: "Engineering background",
        title: "Software Engineer / Full-Stack Developer",
        summary:
          "Delivered software across web and mobile products, including internal workflow systems, multi-role applications, backend-heavy implementations, and business logic driven platforms.",
        highlights: [
          "Hands-on experience across Django, MERN, Flutter, and relational / document-oriented data layers",
          "Built systems involving role-based access, workflow orchestration, notifications, and operational business rules",
          "Comfortable moving between frontend, backend, database, and deployment concerns when a product needs end-to-end ownership",
        ],
      },
    ],
  },
  education: {
    eyebrow: "Education",
    title: "Academic foundation aligned with current engineering work",
    description:
      "The academic track supports both applied software engineering and AI-focused work.",
    items: [
      {
        status: "Current study",
        degree: "Master of Science in Computer Science",
        institution: "University of Kelaniya",
        note: "Continuing advanced study alongside practical AI engineering work.",
      },
      {
        status: "Completed degree",
        degree: "BSc in Applied Mathematics and Computing",
        institution: "University of Jaffna",
        note: "Built the analytical and computing foundation behind current software and AI work.",
      },
    ],
  },
  skillGroups: {
    eyebrow: "Skills",
    title: "Core technologies grouped by how I use them",
    description:
      "The stack is organized around real delivery work instead of a flat list of tools.",
    groups: [
      {
        icon: "spark",
        title: "AI / ML",
        items: ["LangChain", "LangGraph", "ChromaDB", "RAG workflows", "Python"],
      },
      {
        icon: "server",
        title: "Backend",
        items: ["Django", "Django REST Framework", "Node.js", "Express", "REST APIs"],
      },
      {
        icon: "device",
        title: "Frontend / Mobile",
        items: ["React", "Flutter", "Dart", "Tailwind CSS", "MERN applications"],
      },
      {
        icon: "database",
        title: "Databases",
        items: ["MongoDB", "MySQL", "ChromaDB", "Firebase"],
      },
      {
        icon: "cloud",
        title: "DevOps / Cloud",
        items: ["Docker", "NGINX", "Azure", "CI/CD", "Deployment workflows"],
      },
      {
        icon: "tools",
        title: "Tools",
        items: ["Git", "GitHub", "Gemini", "Postman", "System integration"],
      },
    ],
  },
  projects: {
    eyebrow: "Featured Projects",
    title: "Projects that show how I build across AI, backend, and product workflows",
    description:
      "These projects are framed around problem-solving, implementation focus, and system thinking instead of just listing technologies.",
    items: [
      {
        featured: true,
        category: "AI / RAG",
        title: "AI Study Notes RAG Assistant",
        summary:
          "A retrieval-grounded study assistant designed to turn notes into usable context for question answering and revision support.",
        problem:
          "The system addresses the gap between static study material and trustworthy answers by focusing on ingestion, retrieval, grounded response generation, and evaluation-aware thinking.",
        focus:
          "Built around Django + DRF services, ChromaDB-backed retrieval, Gemini-based answer generation, and a backend-first approach to controlling quality and grounding.",
        stack: ["Django", "Django REST Framework", "ChromaDB", "Gemini", "Python", "RAG"],
        links: {},
      },
      {
        featured: true,
        category: "Mobile + Backend",
        title: "Dewmal / Wildlife Alert System",
        summary:
          "A wildlife alert platform for reporting sightings, sharing location-aware alerts, and supporting notification-driven community response.",
        problem:
          "The project focuses on operational awareness in wildlife-related situations by combining location context, real-time reporting, and cross-platform coordination.",
        focus:
          "Worked across Flutter mobile flows, Django backend services, Firebase integrations, notifications, and GPS-aware application behavior.",
        stack: ["Flutter", "Django", "Firebase", "Dart", "Python", "Location workflows"],
        links: {},
      },
      {
        category: "Full-Stack Product System",
        title: "DoughGo Bakery Delivery System",
        summary:
          "A multi-role delivery and order management system connecting bakery operations, drivers, and customers through web and mobile experiences.",
        problem:
          "The system organizes orders, delivery coordination, and role-specific workflows in a product that needs both operational clarity and user-facing usability.",
        focus:
          "Built around MERN architecture with mobile and web surfaces, role-based behavior, and flow coordination across different actors in the system.",
        stack: ["React", "React Native", "Node.js", "Express", "MongoDB", "JWT"],
        links: {
          github: "https://github.com/kavindacena99/DoughGo",
        },
      },
      {
        category: "Business Workflow System",
        title: "Loan Management System",
        summary:
          "An internal workflow-oriented system for handling loan operations, role-based processes, installments, and ledger-style business logic.",
        problem:
          "The core challenge is translating financial workflow rules into a maintainable system with controlled access, state handling, and operational visibility.",
        focus:
          "Built as a MERN-based application emphasizing business logic, workflow handling, installment tracking, and backend-driven process reliability.",
        stack: ["MongoDB", "Express", "React", "Node.js", "Role workflows", "Business logic"],
        links: {},
      },
      {
        category: "Machine Learning",
        title: "Land Price Prediction",
        summary:
          "A machine learning project for predicting Sri Lankan land prices using structured property-related inputs.",
        problem:
          "The project explores how prediction models can support decision-making when location and property characteristics strongly affect pricing.",
        focus:
          "Worked on data preparation, model building, and practical framing of the prediction task using a Sri Lankan context.",
        stack: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
        links: {
          github: "https://github.com/kavindacena99/Sri-Lankan-Land-Price-Predictor",
        },
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Open to thoughtful engineering conversations and collaboration",
    description:
      "If you are building something around AI systems, backend platforms, or product-focused software delivery, feel free to reach out.",
    email: "kavindach4@gmail.com",
    location: "Sri Lanka",
    availability:
      "Interested in AI engineering, backend, mobile, and product-oriented collaboration.",
    socialLinks: [
      {
        label: "GitHub",
        href: "https://github.com/kavindacena99",
        icon: "github",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/kavindasupundissanayake99/",
        icon: "linkedin",
      },
    ],
  },
};
