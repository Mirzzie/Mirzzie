// ============================================================
// PORTFOLIO DATA - Edit this file to update your portfolio!
// ============================================================
// Simply change the values below. No HTML/CSS knowledge needed.
// After editing, commit and push to GitHub to update your site.
// ============================================================

const portfolioData = {

  // ── PERSONAL INFO ──────────────────────────────────────────
  personal: {
    name: "Mirzad Ismail",
    title: "Junior IT Operations & Cybersecurity (SOC) Analyst",
    tagline: "I work at the intersection of IT operations and cybersecurity: keeping systems stable, secure, and support-ready. I am focused on junior IT Operations and entry-level Cybersecurity/SOC roles where I can contribute from day one.",
    email: "mirzad.official@outlook.com",
    location: "Dublin, Ireland",
    availability: "Open to Junior IT Operations and Entry-Level Cybersecurity/SOC roles",
    hiringFocus: "Target roles: Junior IT Operations, SOC Analyst (L1), Junior Cybersecurity Analyst",
    resumeLink: "#", // Link to your resume PDF — keep it for HR/ATS, your portfolio does the real talking
    calendlyLink: "https://calendly.com/mirzad-ismail", // Your Calendly booking link
    avatarUrl: "", // URL to your profile photo — personal branding tip: use a real photo, it builds trust
    bio: [
      "I'll be honest, I started by breaking things, Googling errors at midnight, and slowly getting better at putting them back together. I studied CS in India, interned on real cloud projects, then landed a production DevOps role where actual clients were watching and real money was on the line.",
      "Now I have completed my MSc in Cyber Security in Dublin, building on everything I've learned. Along the way, I started helping friends, colleagues, people who reached out with cloud, DevOps, security questions, and IT problems they couldn't crack. That turned into proper consultation work. I like solving hard problems, and I like helping people solve theirs even more."
    ]
  },

  // ── CONSULTATION & MENTORING ───────────────────────────────
  consultation: {
    enabled: true,
    headline: "Need a hand with something?",
    subheadline: "I do consultation and beginner mentoring for people and teams working through cloud, DevOps, security, or general IT challenges. Practical support, no jargon, no fluff.",
    services: [
      {
        title: "Cloud & Infrastructure",
        icon: "☁️",
        description: "Thinking about moving to AWS or Azure? Not sure if your setup is right? I'll help you figure out what actually makes sense for your situation.",
        examples: ["Cloud architecture review", "AWS/Azure migration planning", "Cost optimisation strategy", "Infrastructure best practices"]
      },
      {
        title: "DevOps & Automation",
        icon: "⚙️",
        description: "If your team is deploying things manually or your CI/CD pipeline feels held together with tape, I can help you get it sorted. Practical automation, not buzzword consulting.",
        examples: ["CI/CD pipeline setup", "Automation strategy", "Monitoring & alerting", "DevOps workflow review"]
      },
      {
        title: "Security Guidance",
        icon: "🛡️",
        description: "Studying cyber security at MSc level means I think about threats before they happen. I'll help you understand your risk and what to actually do about it.",
        examples: ["Security posture review", "Vulnerability assessment guidance", "Secure coding practices", "Incident response planning"]
      },
      {
        title: "Beginner Mentoring",
        icon: "🧭",
        description: "If you're just getting started in cloud, DevOps, or security and feel overwhelmed, I can mentor you step by step. Real guidance, beginner-friendly explanations, and no judgment.",
        examples: ["Beginner Q&A sessions", "Hands-on fundamentals mentoring", "Tooling walkthroughs", "Practical learning support"]
      }
    ],
    cta: {
      text: "Book a free 15-minute call",
      subtext: "No commitment. Just tell me what you're working on and I'll tell you if I can help.",
      link: "https://calendly.com/mirzad-ismail" // Your Calendly link
    }
  },

  // ── SOCIAL LINKS ───────────────────────────────────────────
  social: {
    github: "https://github.com/Mirzzie",
    linkedin: "https://linkedin.com/in/mirzad-ismail",
    twitter: "",
    blog: "",
    devto: "",
    medium: "",
  },

  // ── VALUE PROPOSITION ──────────────────────────────────────
  // Psychology: Loss aversion — each card shows what they MISS by not hiring you
  // Psychology: Specificity — concrete verbs, not buzzwords
  valueProposition: {
    headline: "Here's what I actually bring to the table",
    subheadline: "If you are hiring for junior IT Operations or entry-level Cybersecurity/SOC roles, this is where I can add value immediately.",
    cards: [
      {
        role: "IT Support",
        icon: "🖥️",
        promise: "When someone's laptop won't connect or a server's acting up, I'm the person who figures it out calmly, clearly, and fast.",
        proof: [
          "Handled Level 2 support directly with clients at Crozaint",
          "Ran scheduled backups, monitored resources, and wrote reports clients could actually understand",
          "Learned to prioritise on the fly when three things break at once"
        ],
        edge: "I've been the one fielding calls when things go wrong. That taught me patience, urgency, and how to explain technical stuff to non-technical people."
      },
      {
        role: "IT Operations",
        icon: "🔧",
        promise: "I keep infrastructure healthy so your team doesn't have to think about it. If something's about to break, I'd rather catch it the night before.",
        proof: [
          "Set up and monitored cloud environments built to each client's specific needs",
          "Automated backups and resource tracking instead of doing them manually every morning",
          "Comfortable with Linux, Windows Server, and the networking stuff in between"
        ],
        edge: "I'm not the kind of person who waits for the alert. I check things, document things, and try to make sure the alert never fires."
      },
      {
        role: "Cybersecurity Operations (SOC-Ready)",
        icon: "🛡️",
        promise: "I bring an operations-first security mindset: monitor signals, reduce risk early, and respond in a structured way when incidents happen.",
        proof: [
          "Completed MSc Cyber Security with hands-on modules in incident response, forensics, malware analysis, and secure coding",
          "Built practical strength in SIEM concepts, vulnerability analysis, and security-focused troubleshooting",
          "Approach security with strong IT operations foundations, so controls stay practical and usable"
        ],
        edge: "I do not treat operations and security as separate worlds. I focus on reliable systems that are also secure by design."
      },
      {
        role: "Automation & DevOps",
        icon: "⚙️",
        promise: "If you're doing something repetitive by hand every day, I'll probably try to script it before the week's over.",
        proof: [
          "Built and fixed CI/CD pipelines in AWS and Azure for client projects",
          "Automated backups, monitoring, and reporting workflows",
          "Troubleshot deployment issues in production"
        ],
        edge: "I came up through IT support before touching DevOps. I know exactly what it feels like when a deployment breaks something for real users."
      }
    ]
  },

  // ── CAREER JOURNEY (Timeline) ──────────────────────────────
  // Psychology: Growth narrative — recruiters scan for trajectory, not titles
  journey: [
    {
      phase: "Going deeper",
      icon: "🔒",
      period: "Jan 2025 - Jan 2026",
      role: "MSc Cyber Security",
      company: "National College of Ireland",
      description: "I moved to Dublin to complete this master's and go deeper into security. The program gave me structured, hands-on depth in pen testing, cryptography, forensics, and incident response and made me a stronger engineer overall.",
      achievements: [
        "Learning to think like an attacker: pentesting, network security, vulnerability analysis",
        "Studying cryptography and secure coding so I can build things right, not just fast",
        "Malware analysis, digital forensics, and incident response: the stuff that matters when things go really wrong",
        "IT law and research methods: because security isn't just technical"
      ],
      technologies: ["Penetration Testing", "Cryptography", "SIEM", "Forensics", "Malware Analysis", "Secure Coding"]
    },
    {
      phase: "The real deal",
      icon: "⚙️",
      period: "Jan 2024 - Jun 2024",
      role: "Junior DevOps Engineer Trainee",
      company: "Crozaint Technologies Pvt Ltd",
      description: "This is where I grew up professionally. Real clients, real deadlines, real consequences. I automated deployments, managed cloud environments, and learned what it means when your script runs in production and actual people are waiting.",
      achievements: [
        "Wrote automation scripts that cut cloud costs by 10%",
        "Handled Level 2 support directly with clients when things needed fixing fast",
        "Set up and monitored cloud environments tailored to what each client actually needed",
        "Built automated backup and reporting workflows so nothing fell through the cracks",
        "Improved CI/CD pipelines across AWS and Azure"
      ],
      technologies: ["AWS", "Azure", "CI/CD", "Bash", "Python", "Monitoring", "Excel Reporting"]
    },
    {
      phase: "First taste of cloud",
      icon: "☁️",
      period: "May 2023 - Aug 2023",
      role: "AWS Cloud Intern",
      company: "F13 Technologies",
      description: "My first time working with real cloud infrastructure, not just textbooks. I deployed an actual app on AWS and realised cloud isn't about fancy tools: it's about solving problems for real businesses.",
      achievements: [
        "Built and deployed a web app on AWS with proper CI/CD from scratch",
        "Studied how companies actually use cloud: real case studies",
        "Completed AWS Skill Builder training and got certified"
      ],
      technologies: ["AWS", "EC2", "S3", "CloudFormation", "CI/CD", "AWS Skill Builder"]
    },
    {
      phase: "Where it started",
      icon: "🎓",
      period: "Apr 2020 - Mar 2023",
      role: "Bachelor of Computer Applications",
      company: "Mahatma Gandhi University (MGU)",
      description: "This is where I learned to think like an engineer. Three years of CS fundamentals: programming, databases, networking, how operating systems actually work. It wasn't glamorous, but it gave me the foundation everything else is built on.",
      achievements: [
        "Got solid with Python, Java, SQL, and the basics of web development",
        "Learned networking and OS internals: the stuff that actually matters when things break",
        "Came out knowing how to learn, not just what to memorise"
      ],
      technologies: ["Python", "Java", "SQL", "Networking", "Operating Systems", "Web Development"]
    }
  ],

  // ── SKILLS ─────────────────────────────────────────────────
  // Honest levels — no inflated percentages
  skills: [
    {
      category: "Infrastructure & Networking",
      icon: "🌐",
      items: [
        { name: "Linux Administration", level: 70, proficiency: "Proficient" },
        { name: "TCP/IP, DNS, Firewalls", level: 65, proficiency: "Proficient" },
        { name: "Windows Server & AD", level: 60, proficiency: "Working" },
        { name: "Monitoring & Troubleshooting", level: 70, proficiency: "Proficient" }
      ]
    },
    {
      category: "Cloud Platforms",
      icon: "☁️",
      items: [
        { name: "AWS (EC2, S3, IAM, VPC)", level: 70, proficiency: "Proficient" },
        { name: "Azure (VMs, Pipelines, AD)", level: 60, proficiency: "Working" },
        { name: "Cloud Cost Optimisation", level: 55, proficiency: "Working" }
      ]
    },
    {
      category: "Automation & DevOps",
      icon: "⚙️",
      items: [
        { name: "Bash / Shell Scripting", level: 70, proficiency: "Proficient" },
        { name: "Python Scripting", level: 65, proficiency: "Proficient" },
        { name: "CI/CD Pipelines", level: 65, proficiency: "Working" },
        { name: "Git & Version Control", level: 70, proficiency: "Proficient" }
      ]
    },
    {
      category: "Security",
      icon: "🛡️",
      items: [
        { name: "Network Security & Pen Testing", level: 55, proficiency: "Developing" },
        { name: "Cryptography & Secure Coding", level: 50, proficiency: "Developing" },
        { name: "Incident Response & Forensics", level: 45, proficiency: "Developing" }
      ]
    },
    {
      category: "Containers & IaC",
      icon: "🐳",
      items: [
        { name: "Docker", level: 55, proficiency: "Working" },
        { name: "CloudFormation", level: 50, proficiency: "Working" },
        { name: "Kubernetes", level: 35, proficiency: "Learning" },
        { name: "Terraform", level: 40, proficiency: "Learning" }
      ]
    },
    {
      category: "Communication & Process",
      icon: "🤝",
      items: [
        { name: "Client Communication", level: 80, proficiency: "Strong" },
        { name: "Technical Documentation", level: 75, proficiency: "Proficient" },
        { name: "Problem Solving Under Pressure", level: 75, proficiency: "Proficient" }
      ]
    }
  ],

  // ── CERTIFICATIONS ─────────────────────────────────────────
  // Add your actual certifications here
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "Issued Oct 2025 • Expires Oct 2028",
      icon: "aws",
      verifyLink: "https://www.credly.com/badges/a6fa5089-50d9-4fdf-b1cc-b6fe1bde6623/linked_in_profile",
    },
    // Add more certs as you earn them:
    // {
    //   name: "AWS Solutions Architect Associate",
    //   issuer: "Amazon Web Services",
    //   date: "2026",
    //   icon: "aws",
    //   verifyLink: "#",
    // },
  ],

  // ── EDUCATION ──────────────────────────────────────────────
  education: [
    {
      degree: "MSc Cyber Security (Completed)",
      institution: "National College of Ireland",
      period: "Jan 2025 - Jan 2026",
      location: "Dublin, Ireland",
      icon: "🎓",
      modules: [
        "Security Fundamentals",
        "Secure Programming for Web",
        "Network Security & Penetration Testing",
        "IT Law & Ethics",
        "Research in Computing",
        "Cryptography",
        "Secure Programming for Application Development",
        "Malware Analysis",
        "Research Methods",
        "Internship",
        "Incident Response & Analytics",
        "Forensics & eDiscovery",
        "Cloud Security"
      ]
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Mahatma Gandhi University (MGU)",
      period: "Apr 2020 - Mar 2023",
      location: "Kerala, India",
      icon: "📚",
      modules: []
    }
  ],

  // ── SOC / CYBERSECURITY EVIDENCE ─────────────────────────
  securityEvidence: {
    enabled: true,
    headline: "SOC & Cybersecurity Evidence",
    subheadline: "Focused evidence from MSc modules directly aligned to entry-level SOC and cybersecurity operations work.",
    items: [
      {
        title: "Incident Response & Analytics (MSc Module)",
        summary: "Built SOC-style triage and response workflows during Incident Response & Analytics, including severity classification, containment steps, and escalation notes.",
        outcomes: [
          "Classified events by business impact and urgency for L1 triage flow",
          "Documented containment and escalation steps in analyst-ready format",
          "Linked incident evidence to post-incident recommendations"
        ],
        tools: ["Incident Response & Analytics", "SIEM Concepts", "Escalation Playbooks"]
      },
      {
        title: "Forensics & eDiscovery (MSc Module)",
        summary: "Applied end-to-end forensic workflow from evidence handling to reporting within Forensics & eDiscovery labs.",
        outcomes: [
          "Created timeline-based incident narratives from collected artefacts",
          "Practiced evidence handling with chain-of-custody awareness",
          "Translated technical findings into clear business-facing summaries"
        ],
        tools: ["Forensics & eDiscovery", "Digital Evidence Handling", "Case Documentation"]
      },
      {
        title: "Network Security & Penetration Testing + Cloud Security",
        summary: "Assessed common vulnerabilities in lab environments and prioritized practical hardening actions that fit operational realities.",
        outcomes: [
          "Identified misconfigurations and mapped remediation by risk priority",
          "Connected penetration testing findings to day-to-day security controls",
          "Applied Cloud Security principles to reduce common attack surface"
        ],
        tools: ["Network Security & Penetration Testing", "Cloud Security", "Vulnerability Analysis"]
      }
    ]
  },

  // ── PROJECTS ───────────────────────────────────────────────
  projects: [
    {
      title: "Cloud Cost Optimisation Scripts",
      description: "At Crozaint, I noticed we were overspending on cloud resources. So I wrote Python and Bash scripts to track usage and flag waste. Ended up saving 10%.",
      tags: ["Python", "Bash", "AWS", "Azure", "Automation"],
      githubLink: "",
      liveLink: "",
      image: "",
      highlights: [
        "10% actual cost reduction",
        "Automated resource tracking",
        "Fed into client-facing reports",
        "Client code was internal/private; walkthrough available on request"
      ]
    },
    {
      title: "Deployment Pipeline Automation",
      description: "The deployment process at Crozaint had too many manual steps. I cleaned up the CI/CD pipelines across AWS and Azure so deployments were faster and less overhead for everyone.",
      tags: ["CI/CD", "AWS", "Azure", "DevOps", "Bash"],
      githubLink: "",
      liveLink: "",
      image: "",
      highlights: [
        "Cut out manual deployment steps",
        "Worked across AWS and Azure",
        "Tied into backup workflows",
        "Built for live client environments, not classroom demos"
      ]
    },
    {
      title: "Backup & Monitoring Automation",
      description: "Nobody wants to manually run backups every morning. I automated the whole thing: scheduled backups, resource monitoring, and reports that went straight to clients in a format they could read.",
      tags: ["Bash", "Python", "Monitoring", "Backup", "Reporting"],
      githubLink: "",
      liveLink: "",
      image: "",
      highlights: [
        "Fully automated backup scheduling",
        "Resource health monitoring",
        "Client reports in Excel & Word",
        "Reduced repetitive manual ops workload"
      ]
    },
    {
      title: "AWS Web App Deployment",
      description: "During my internship at F13, I built and deployed a web app on AWS from scratch: EC2, S3, CloudFormation, proper CI/CD. It was my first time doing it end-to-end, and it clicked.",
      tags: ["AWS", "EC2", "S3", "CI/CD", "CloudFormation"],
      githubLink: "",
      liveLink: "",
      image: "",
      highlights: [
        "End-to-end deployment pipeline",
        "Built on AWS with CloudFormation",
        "My first real cloud project",
        "Hands-on foundation for later production DevOps work"
      ]
    }
  ],

  // ── WHAT I'M BUILDING NEXT ─────────────────────────────────
  // Psychology: Shows initiative and direction — recruiter sees a plan, not just a history
  currentlyLearning: {
    enabled: false,
    items: [
      { skill: "Kubernetes & Container Orchestration", progress: 35, context: "Personal labs + coursework" },
      { skill: "Terraform & Infrastructure as Code", progress: 40, context: "Building multi-cloud IaC projects" },
      { skill: "SIEM & Log Analysis", progress: 45, context: "MSc Incident Response module" }
    ]
  },

  // ── BLOG / WRITING ─────────────────────────────────────────
  blog: {
    enabled: false,
    posts: []
  },

  // ── TESTIMONIALS ───────────────────────────────────────────
  testimonials: {
    enabled: false,
    items: []
  },

  // ── STATS ──────────────────────────────────────────────────
  // Honest, specific numbers — no inflation
  stats: [
    { value: "MSc", label: "Cyber Security" },
    { value: "10%", label: "Cloud Costs Cut" },
    { value: "6mo", label: "Production DevOps" },
    { value: "L2", label: "Client IT Support" }
  ],

  // ── THEME SETTINGS ─────────────────────────────────────────
  theme: {
    primaryColor: "#0f766e",
    secondaryColor: "#f97316",
    fontFamily: "'Space Grotesk', sans-serif",
  }
};