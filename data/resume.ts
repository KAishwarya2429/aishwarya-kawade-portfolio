export const resume = {
  name: "Aishwarya Kawade",
  title: "AI & Backend Engineer",
  email: "www.aishwaryaashokkawade@gmail.com",
  phone: "+91-9325819201",
  location: "Pune, Maharashtra, India",

  socialLinks: {
    github: "https://github.com/KAishwarya2429",
    linkedin: "https://www.linkedin.com/in/aishwarya-kawade-9b0356319",
    twitter: "https://x.com/AKawade24866",
  },

  headline: "Building AI Systems That Think, Learn and Scale.",
  subheading: "AI Engineer | Backend Developer | Open Source Contributor",

  bio: "I build intelligent systems that scale. Passionate about backend engineering, AI agents, RAG systems, cloud technologies, and open-source development. Currently exploring Agentic AI, LLM applications, and scalable software systems.",

  stats: [
    { label: "Open Source Projects", value: "10+" },
    { label: "Featured Projects", value: "15+" },
    { label: "Hackathons Built", value: "8+" },
    { label: "Technologies", value: "30+" },
  ],

  skills: {
    Backend: [
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "Node.js",
      "REST APIs",
    ],
    "AI/ML": [
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "Vector Databases",
      "AI Agents",
      "LangChain",
    ],
    Databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"],
    Cloud: [
      "Google Cloud Platform",
      "Vertex AI",
      "Cloud Run",
      "Cloud Functions",
    ],
    DevOps: ["Docker", "GitHub Actions", "CI/CD", "Linux", "Git"],
    Architecture: [
      "Microservices",
      "Distributed Systems",
      "System Design",
      "Event-Driven Architecture",
    ],
  },

  featuredProjects: [
    {
      id: 1,
      title: "SafeSakhi AI",
      subtitle: "Multi-Agent Women Safety Platform",
      description:
        "An AI-powered women safety platform built during the Google Cloud Rapid Agent Hackathon, leveraging intelligent agents, emergency assistance, location awareness, and real-time support systems.",
      problem:
        "Women often lack immediate access to trusted emergency assistance, location-based safety guidance, and intelligent support during critical situations.",
      solution:
        "Developed a multi-agent AI platform integrating Gemini-powered assistance, emergency workflows, location intelligence, and safety-focused automation.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Google Gemini",
        "AI Agents",
        "Google Maps API",
        "Firebase",
      ],
      keyFeatures: [
        "Multi-agent safety assistant",
        "Emergency support workflows",
        "Location intelligence and tracking",
        "AI-powered safety recommendations",
        "Trusted contact integration",
        "Real-time assistance system",
      ],
      github: "https://github.com/KAishwarya2429/safesakhi-ai",
      demo: "#",
      image: "/projects/safesakhi-ai.png",
    },
    {
      id: 2,
      title: "EarthAI",
      subtitle: "AI Pollution Monitoring & Awareness Platform",
      description:
        "Final-year project focused on monitoring environmental pollution, air quality analysis, and citizen reporting using AI-assisted insights and geolocation services.",
      problem:
        "Citizens lack a centralized platform to report pollution issues, monitor air quality, and access environmental awareness data in real time.",
      solution:
        "Built a full-stack platform that combines pollution reporting, AQI monitoring, geolocation services, environmental analytics, and administrative management tools.",
      technologies: [
        "Java",
        "Servlets",
        "JSP",
        "Hibernate",
        "PostgreSQL",
        "Bootstrap",
        "OpenWeather API",
      ],
      keyFeatures: [
        "Pollution incident reporting",
        "Air Quality Index monitoring",
        "Location-based environmental insights",
        "Admin analytics dashboard",
        "Image upload and verification",
        "Environmental awareness system",
      ],
      github:
        "https://github.com/KAishwarya2429/ai-pollution-monitoring-platform",
      demo: "#",
      image: "/projects/earth-ai.png",
    },
    {
      id: 3,
      title: "AI Road Safety Intelligence System",
      subtitle: "IIT Madras Hackathon Project",
      description:
        "An intelligent road safety platform that identifies high-risk zones, analyzes accident patterns, and provides AI-driven recommendations for safer transportation.",
      problem:
        "Road accident data is difficult to analyze effectively, making it challenging to identify dangerous locations and preventive measures.",
      solution:
        "Developed an AI-powered road intelligence system using maps, risk analysis, and predictive insights to improve public safety.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Google Maps API",
        "Gemini API",
        "Vite",
      ],
      keyFeatures: [
        "Risk zone identification",
        "AI-powered road safety insights",
        "Interactive mapping dashboard",
        "Accident trend analysis",
        "Location-based recommendations",
      ],
      github: "https://github.com/KAishwarya2429",
      demo: "#",
      image: "/projects/road-safety-ai.png",
    },
  ],

  openSource: [
    {
      name: "GirlScript Summer of Code 2026",
      role: "Open Source Contributor",
      description: "National Open Source Program",
      contributions:
        "Contributed to AgentAPI and EnterpriseRAG AI projects, implementing provider fallback routing, testing improvements, bug fixes, and production-ready enhancements.",
      link: "https://gssoc.girlscript.tech",
    },
    {
      name: "Mifos Initiative (GSoC 2026)",
      role: "Google Summer of Code Contributor Candidate",
      description: "Open Source Digital Financial Services Platform",
      contributions:
        "Worked on AI-powered financial workflow automation, MCP integrations, validation systems, testing, and intelligent banking automation solutions.",
      link: "https://mifos.org",
    },
    {
      name: "AgentAPI",
      role: "Open Source Contributor",
      description: "Framework for Building AI Agents",
      contributions:
        "Implemented LLM provider fallback routing, testing infrastructure improvements, debugging, documentation, and backend feature development.",
      link: "https://github.com/KAishwarya2429",
    },
    {
      name: "EnterpriseRAG AI",
      role: "Open Source Contributor",
      description: "Enterprise Retrieval-Augmented Generation Platform",
      contributions:
        "Contributed to RAG workflows, vector retrieval pipelines, AI integrations, backend improvements, and production-focused enhancements.",
      link: "https://github.com/KAishwarya2429",
    },
    {
      name: "Google Cloud Gen AI APAC",
      role: "Program Graduate",
      description: "Google Cloud Generative AI Program",
      contributions:
        "Completed hands-on projects using Gemini, Vertex AI, AI Agents, Prompt Engineering, Cloud Run, and modern Generative AI application development.",
      link: "https://cloud.google.com",
    },
    {
      name: "NASA Open Science",
      role: "Graduate",
      description: "NASA Open Science Training Program",
      contributions:
        "Completed training in reproducible research, open science methodologies, collaborative development, and scientific data practices.",
      link: "https://science.nasa.gov/open-science",
    },
  ],

  hackathons: [
    {
      name: "GrabHack 2.0",
      organization: "Hackathon",
      project: "AutoFix AI",
      description:
        "AI-powered automated debugging system that analyzes logs, generates fixes, and creates pull requests.",
    },
    {
      name: "Road Safety Intelligence Hackathon",
      organization: "IIT Madras",
      project: "AI Road Safety Intelligence System",
      description:
        "AI-driven road safety platform using risk analysis, maps, and predictive insights.",
    },
    {
      name: "Google Cloud Rapid Agent Hackathon 2026",
      organization: "Google Cloud",
      project: "SafeSakhi AI",
      description:
        "Multi-agent women safety platform leveraging Gemini, AI agents, location intelligence, and intelligent automation.",
    },
  ],

  certifications: [
    {
      name: "Walmart Global Tech - Advanced Software Engineering Job Simulation",
      issuer: "Forage",
      link: "https://drive.google.com/file/d/1iRJollDLYq7ANBXWoK3zW55IAuWvD7jW/view?uspdrive_link",
    },
    {
      name: "JP Morgan Chase - Software Engineering Job Simulation",
      issuer: "Forage",
      link: "https://drive.google.com/file/d/1tzrtwl-L6ylDXBBFqAHKiimhjO4fdNXP/view?usp=drive_link",
    },
    {
      name: "Deloitte - Data Analytics Job Simulation",
      issuer: "Forage",
      link: "https://drive.google.com/file/d/1smT195Y88xpk9ZoaDve5Ssp6lXcMbYMa/view?usp=drive_link",
    },
    {
      name: "Programming Using Java",
      issuer: "Infosys Springboard",
      link: "https://drive.google.com/file/d/1HHjhw0Tbpj3GSbC8jXdVDmmRJdWZrGjx/view?usp=drive_link",
    },
    {
      name: "Generative AI",
      issuer: "LinkedIn Learning",
      link: "https://drive.google.com/file/d/164qLpnK-oxP39jzhT0n0EdUtbUPsB1Hb/view?usp=drive_link",
    },
    {
      name: "NASA Open Science 101",
      issuer: "NASA Open Science",
      link: "https://drive.google.com/file/d/1VOYqgfVWk5qpmtHmq1RxpMVoie-RHC0q/view?usp=drive_link",
    },
    {
      name: "Full Stack Developer Internship",
      issuer: "Cognifyz Technologies",
      link: "https://drive.google.com/file/d/1kyCgia4O9tBRpm-Kbm4kKvDx_tU7ZO01/view?usp=drive_link",
    },
  ],

  timeline: [
    {
      year: "2019-2020",
      title: "SSC (10th Standard)",
      events: [
        "Studied Mathematics, Science, Social Science and English",
        "Built strong analytical and problem-solving foundations",
        "Developed interest in technology and computers",
      ],
    },
    {
      year: "2020-2022",
      title: "HSC (Science)",
      events: [
        "Studied Mathematics, Physics, Chemistry and Biology",
        "Strengthened logical reasoning and quantitative skills",
        "Explored Computer Science and programming concepts",
      ],
    },
    {
      year: "2023-2026",
      title: "Bachelor of Science in Computer Science",
      events: [
        "Learned Data Structures, Databases, Operating Systems and Software Engineering",
        "Built full-stack and backend development projects",
        "Developed EarthAI and other real-world applications",
        "Participated in hackathons and technical competitions",
        "Started open-source contributions",
      ],
    },
    {
      year: "2026",
      title: "Professional Growth",
      events: [
        "Selected as GSSoC 2026 Contributor",
        "Completed NASA Open Science Program",
        "Completed Google Cloud Generative AI Programs",
        "Contributed to EnterpriseRAG AI, AgentAPI and Open Source Projects",
        "Worked on MCP-based AI Systems and Agentic AI Applications",
      ],
    },
    {
      year: "2026-Present",
      title: "Master of Computer Applications (MCA)",
      events: [
        "Specializing in AI Engineering and Backend Systems",
        "Building RAG, LLM and Agentic AI applications",
        "Studying Distributed Systems and System Design",
        "Preparing for Software Engineering and AI Engineering roles",
        "Working toward large-scale production AI systems",
      ],
    },
    {
      year: "Future Goals",
      title: "AI & Distributed Systems Engineer",
      events: [
        "Master System Design",
        "Build Distributed AI Systems",
        "Contribute to Global Open Source Ecosystems",
        "Pursue Advanced Research in AI",
        "Develop Autonomous Agents at Scale",
      ],
    },
  ],

  experience: [
    {
      role: "Automation Engineer",
      company: "FinTech Automation",
      period: "2026 - Present",
      highlights: [
        "Building automation-driven software solutions",
        "Working on backend integrations and API workflows",
        "Exploring AI-powered automation for business processes",
      ],
    },
    {
      role: "Open Source Contributor",
      company: "GSSoC 2026",
      period: "2026",
      highlights: [
        "Contributing to AgentAPI and EnterpriseRAG AI",
        "Worked on provider fallback routing and backend improvements",
        "Improved testing, debugging, and documentation workflows",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Savitribai Phule Pune University",
      field: "Computer Science",
      highlights: [
        "Completed full-stack and backend development projects",
        "Built EarthAI as final-year project",
        "Studied databases, operating systems, software engineering, and programming",
      ],
    },
    {
      degree: "Master of Computer Applications",
      institution: "Currently Enrolled",
      field: "Computer Applications",
      highlights: [
        "Focused on AI Engineering, Backend Systems, and Software Development",
        "Learning advanced programming, system design, and intelligent applications",
      ],
    },
  ],

  interests: [
    "Distributed Systems",
    "Agentic AI",
    "LLM Engineering",
    "Backend Architecture",
    "Open Source",
    "System Design",
  ],
};
