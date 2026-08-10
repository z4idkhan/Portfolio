export const personalInfo = {
  name: "Mohammad Zaid Khan",
  title: "Creative Developer",
  subtitle: "Building immersive digital experiences",
  email: "khanzaid75005@gmail.com",
  // location: "India",
  bio: "I'm Mohammad Zaid Khan, a creative developer who blends code and design to craft unique digital experiences. With some experience in web development , I love pushing the boundaries of what's possible on the web.",
  
  socialLinks: {
    github: "https://github.com/z4idkhan",
    linkedin: "https://www.linkedin.com/in/mohd-zaid-khan-0a0014338",
    twitter: "https://x.com/khanzaid1_",
  },
};

export const projects = [
  {
    id: 1,
    title: "AD/ADAS ML platform",
    description:
      "Built an ML pipeline for road-scene risk classification with dataset validation, training, evaluation, and FastAPI-based inference.",
    tags: ["Python", "Machine Learning", "PyTorch", "FastAPI"],
    color: "#aacc13",
    github: "https://github.com/z4idkhan/adas-ml-platform-mini",
    live: null,
  },

  {
    id: 2,
    title: "Headless CMS",
    description:
      "Built and deployed a Headless CMS using Spring Boot and PostgreSQL, exposing secured REST APIs with a draft–publish workflow. Implemented JWT authentication for secure access, enabling frontend-agnostic JSON integration.",
    tags: ["Java", "Spring Boot", "Spring Security", "Spring 6"],
    color: "#d61c1c",
    github: "https://github.com/z4idkhan/headless-cms",
    live: "/headlesscmsdashboard",
  },

  {
    id: 3,
    title: "Deep Packet Inspection",
    description:
      "High-performance C++ DPI engine that parses PCAP traffic, extracts TLS SNI/HTTP metadata, classifies applications, performs flow-based filtering, and supports multi-threaded packet processing.",
    tags: ["Computer Networks", "Wireshark", "Internet", "Backend"],
    color: "#d1c522",
    github: "https://github.com/z4idkhan/Deep-Packet-Inspection",
    live: null,
  },

  {
    id: 4,
    title: "Content Management System App using my Headless CMS API",
    description:
      "Created a Content Management System frontend app using my Headless CMS API to demonstrate the functionality of the API.",
    tags: [
      "React",
      "Headless CMS API",
      "Java",
      "Spring Boot",
      "Spring Security",
    ],
    color: "#22d3ee",
    github: "https://github.com/z4idkhan/Content-Management-System",
    live: "https://content-management-system-eight.vercel.app/login",
  },

  {
    id: 5,
    title: "Expense Tracker",
    description:
      "An AI-powered note-taking app with beautiful markdown editing and mind maps.",
    tags: ["TypeScript", "AI", "Canvas"],
    color: "#22d142",
    github: "https://github.com/z4idkhan/expense-tracker",
    live: "https://expense-tracker-orcin-zeta-40.vercel.app/",
  },

  {
    id: 6,
    title: "Aerospace Telemetry Anomaly Detection",
    description:
      "Demonstrate how Machine Learning can enhance aerospace mission safety by predicting component failure before it occurs, reducing downtime and preventing catastrophic failures.",
    tags: ["Python", "AI", "Machine Learning", "Aerospace"],
    color: "#d17122",
    github:
      "https://github.com/z4idkhan/aerospace-telemetry-anomaly-detection",
    live: null,
  },
];

export const skills = [
  { name: "Java", level: 95 },
  { name: "Spring Boot", level: 92 },
  { name: "Python", level: 80 },
  { name: "C++", level: 85 },
  { name: "React", level: 70 },
  { name: "Machine Learning", level: 75 },
];

/** Navigation sections — order matters for scroll */
export const sections = ["Home", "About", "Projects", "Skills", "Contact"] as const;
