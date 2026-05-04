/**
 * SINGLE SOURCE OF TRUTH for all personal content.
 * Update this file to change anything visible on the site.
 * No content strings should be hardcoded in JSX components.
 */

// ─── Personal ─────────────────────────────────────────────────────────────────

export const PERSONAL = {
  name: 'Amit Prakhar Pandey',
  firstName: 'Amit',
  brandName: '// AMIT.DEV',
  title: 'AI Platform Lead & Engineer',
  currentRole: 'AI Platform Lead',
  currentCompany: 'MediCodio',
  location: 'Bengaluru, Karnataka, India',
  education: 'B.Tech CSE · IIIT Dharwad · CPI 8.52',
  linkedinStats: '1,019 followers · 500+ connections',
  availabilityStatus: 'AVAILABLE',
  heroImage: 'Media.jpg',
  aboutImage: 'Media-2.jpg',
  experienceImage: 'Media-2.jpg',
  footerWatermark: 'PORTFOLIO',
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HERO = {
  availabilityLabel: 'AVAILABLE FOR WORK',
  headlineLines: ['AI Platform', 'Lead &', 'Engineer'],
  tagline:
    'Most AI systems fail not because models are weak — but because orchestration is broken. ' +
    'I engineer velocity, collapse cost, and convert AI into real leverage. AI Platform Lead ' +
    'at MediCodio, building Agentic AI & GenAI systems for US HealthTech.',
  roleLine: 'AI Platform Lead · Agentic AI · LLM Orchestration · Automation-First',
  stats: [
    { num: '1.6+', label: 'Years Exp.' },
    { num: '3',    label: 'AI Products Shipped' },
    { num: '75%',  label: 'Cost Cut w/ AI' },
  ],
  featuredProjectsLabel: 'Featured projects',
  cta: { primary: 'HIRE ME', secondary: 'VIEW WORK', resume: 'RESUME PDF' },
}

// ─── About ────────────────────────────────────────────────────────────────────

export const ABOUT = {
  sectionLabel: 'ABOUT ME',
  greeting: "Hey, I'm Amit.",
  hook: '"Most AI systems fail not because models are weak — but because orchestration is broken."',
  bio: [
    'I work at the intersection of AI engineering, automation, and product velocity — ' +
    'designing agentic, production-grade AI systems that move from prototype to scale. ' +
    'Fast, reliable, and cost-efficient. I lead teams, own technical roadmaps, and ship ' +
    'systems that humans actually trust and use.',
    "AI Platform Lead at MediCodio. B.Tech CSE, IIIT Dharwad (CPI 8.52). I don’t just " +
    'build AI — I engineer velocity, collapse cost, and convert AI into real leverage.',
  ],
  detailsLabel: 'PERSONAL DETAILS',
  stats: [
    { value: '95%+', label: 'AI accuracy' },
    { value: '75%',  label: 'Cost reduction' },
    { value: '90%',  label: 'Manual ops eliminated' },
  ],
  statusLabel: 'STATUS',
  cta: { primary: 'GET IN TOUCH', resume: 'RESUME PDF' },
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

export const NAVBAR = {
  brand: '// AMIT.DEV',
  links: [
    { href: '/#feed',    label: 'Feed' },
    { href: '/#work',    label: 'Work' },
    { href: '/#about',   label: 'About' },
    { href: '/#contact', label: 'Contact' },
  ],
  hireCta: 'HIRE ME',
}

// ─── Services ─────────────────────────────────────────────────────────────────

export const SERVICES_META = {
  sectionLabel: 'WHAT I BUILD',
  heading: 'Engineering That Solves Real Problems',
  intro:
    'Full-stack products and AI systems built for production — from architecture decisions to ' +
    'shipping features fast. I own the entire stack.',
  highlights: [
    { num: '95%+', label: 'AI prediction accuracy' },
    { num: '50%',  label: 'Faster execution' },
    { num: '75%',  label: 'Cost reduction' },
  ],
}

export const SERVICES = [
  {
    num: '01',
    title: 'Frontend Development',
    detail:
      "Production-quality React.js UIs — dashboard systems, complex data tables, chart review flows, " +
      "and multi-step workflows. Optimised for performance: memoization, state restructuring, and sub-second " +
      "load targets. I've rebuilt broken frontends that shipped with render bottlenecks and turned them around.",
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
  },
  {
    num: '02',
    title: 'Backend & API Engineering',
    detail:
      'RESTful API design with Node.js and Express — schema design, auth, job queues, and webhook integrations. ' +
      'Pushed ~40% performance gains through query optimisation, indexing, and N+1 elimination in PostgreSQL. ' +
      'I design APIs that are easy to consume, not just easy to write.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
  },
  {
    num: '03',
    title: 'AI / LLM Integration',
    detail:
      'End-to-end LLM pipelines: prompt engineering, chain-of-thought reasoning, Pinecone vector search, and agentic ' +
      'workflows with fallback logic. Built production systems hitting 95%+ accuracy with 75% cost reduction — ' +
      'not demos, not notebooks. Systems that run 24/7 on real data.',
    tags: ['OpenAI API', 'LangChain', 'Pinecone', 'Agentic AI'],
  },
  {
    num: '04',
    title: 'RPA & Process Automation',
    detail:
      'Full workflow automation from EMR ingestion through validation, AI prediction, human review, audit, and export. ' +
      'Fault-tolerant pipelines with retry logic, mandatory-field validation, denial detection, and specialty routing — ' +
      'reducing manual operations by ~90% across US healthcare clients.',
    tags: ['RPA', 'API Integrations', 'Workflow Design', 'Healthcare IT'],
  },
]

// ─── Skills ───────────────────────────────────────────────────────────────────

export const SKILLS_META = {
  sectionLabel: 'TECHNICAL SKILLS',
  heading: 'Stack, Tools & Specialties',
}

export const SKILL_GROUPS = [
  {
    title: 'AI / GenAI & Agentic Systems',
    items: [
      'AI Orchestration', 'Agentic AI Workflows', 'Generative AI (GenAI)',
      'LLM Optimization', 'Prompt Engineering', 'Multi-Agent Systems',
      'Model Context Protocol', 'Claude API', 'OpenAI API', 'LangChain',
      'Vector Intelligence (Pinecone)', 'Semantic Retrieval',
      'AI Cost Optimization', 'HuggingFace Transformers', 'N8N',
    ],
  },
  {
    title: 'Languages & Frameworks',
    items: [
      'JavaScript', 'TypeScript', 'Python', 'C / C++', 'SQL',
      'HTML / CSS', 'React.js', 'Node.js', 'Express.js',
    ],
  },
  {
    title: 'Databases & Backend',
    items: [
      'PostgreSQL', 'MongoDB', 'MySQL', 'Pinecone (Vector DB)',
      'REST API Design', 'Scalable Backend Architecture',
      'RPA-Driven Pipelines', 'EMR Integrations',
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      'Git / GitHub', 'Cursor', 'Postman', 'Jupyter Notebook',
      'Bootstrap', 'Tailwind CSS', 'Azure Services', 'Visual Studio Code',
    ],
  },
  {
    title: 'Leadership & Strategy',
    items: [
      'Technical Leadership', 'Product Development', 'Technical Roadmap Strategy',
      'AI Platform Architecture', 'Team Leadership', 'Agile / Sprint Planning',
    ],
  },
]

// ─── Experience ───────────────────────────────────────────────────────────────

export const EXPERIENCE_META = {
  sectionLabel: 'EXPERIENCE',
  heading: 'Career Journey',
  linkedinCta: 'VIEW FULL PROFILE ON LINKEDIN',
}

export const EXPERIENCES = [
  {
    id: 'lead',
    role: 'Software Engineer – Module Lead',
    subtitle: 'AI Platform & Application',
    period: 'Nov 2025 – Present',
    company: 'MediCodio Inc.',
    location: 'Bengaluru, Karnataka, India · On-site',
    type: 'Full-time',
    challenge:
      'Scale a healthcare AI platform requiring near-human accuracy, enterprise reliability, and aggressive cost control.',
    points: [
      'Architected the core AI prediction engine using LLM orchestration and agentic workflows — specialty-aware, modular pipelines with fault-tolerant edge-case handling.',
      'Optimised vector search, batching, caching, and intelligent model routing for maximum throughput and cost efficiency.',
      'Led AI Platform & Application teams — aligning system reliability with delivery velocity across the full stack.',
      'Owned technical roadmap strategy and served as client-facing technical lead for US enterprise healthcare clients.',
    ],
    outcomes: [
      '95%+ prediction accuracy across multiple specialties',
      '50% reduction in execution time',
      '75% operational cost savings',
      '90% reduction in manual chart operations',
      'Deployment cycles cut from weeks to days',
    ],
  },
  {
    id: 'fsd',
    role: 'Software Development Engineer',
    subtitle: 'AI Platform / Full Stack',
    period: 'Jul 2024 – Jan 2026',
    company: 'MediCodio Inc.',
    location: 'Bengaluru, Karnataka, India · On-site',
    type: 'Full-time',
    challenge: 'Build the foundation for a scalable, automation-first AI product from scratch.',
    points: [
      'Built the entire AI-powered SaaS platform using the PERN stack — sole owner of frontend, backend, and database layers.',
      'Developed secure REST APIs, chart pipelines, coder dashboards, review queues, and audit workflows supporting real healthcare operations.',
      'Integrated AI engine endpoints for prediction, review, audit, and chart lifecycle management.',
      'Designed EMR API + RPA integrations — established the platform architecture later scaled across the company.',
    ],
    outcomes: [
      '40% performance improvement across APIs and UI',
      '90% reduction in manual chart operations',
      'Full platform architecture established from zero',
    ],
  },
  {
    id: 'techolution',
    role: 'Full-Stack Intern',
    period: 'Sep 2023 – Oct 2023',
    company: 'Techolution',
    location: 'Hyderabad, Telangana, India · Remote',
    type: 'Internship',
    points: [
      'Delivered React UI components and feature updates for a client-facing application on an industrial-scale MERN codebase.',
      'Integrated REST APIs to surface dynamic data, improving feature completeness and eliminating manual client-side steps.',
      'Participated in structured code reviews — first exposure to production-grade development practices and team workflow.',
    ],
  },
  {
    id: 'talentserve',
    role: 'Software Engineer Intern',
    period: 'Jun 2023 – Aug 2023',
    company: 'TalentServe',
    location: 'Mumbai, Maharashtra, India · Remote',
    type: 'Internship',
    points: [
      'Contributed features to a live MERN education platform serving active learners in production.',
      'Optimised MongoDB aggregation queries and Express.js middleware, reducing backend response latency.',
      'Worked in agile sprints — scoped, estimated, and shipped quality features on schedule.',
    ],
  },
]

// ─── Certifications ───────────────────────────────────────────────────────────
// Master list — sorted newest first.
// url: credential/certificate link (present = show in highlights marquee)

export const CERTIFICATIONS = [
  {
    id: 'mcp-intro',
    title: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic',
    date: 'Apr 2026',
    credentialId: '344yhicp5d4q',
    url: 'https://www.linkedin.com/in/amit-prakhar-pandey-b537851b0/details/certifications/',
    highlight: true,
  },
  {
    id: 'claude-api',
    title: 'Building with the Claude API',
    issuer: 'Anthropic',
    date: 'Apr 2026',
    credentialId: 'jbgwu8xgmdyn',
    url: 'https://www.linkedin.com/in/amit-prakhar-pandey-b537851b0/details/certifications/',
    skills: ['Claude API'],
    highlight: true,
  },
  {
    id: 'ai-fluency',
    title: 'AI Fluency Framework & Foundations',
    issuer: 'Anthropic',
    date: 'Apr 2026',
    credentialId: 'zdfqiwmhxhev',
    skills: ['Anthropic Claude'],
    highlight: true,
  },
  {
    id: 'claude-code-action',
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: 'Apr 2026',
    credentialId: 'unwc5nj74sgs',
    skills: ['Anthropic Claude'],
    highlight: true,
  },
  {
    id: 'claude-code-101',
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    date: 'Apr 2026',
    credentialId: '9qwhwquqqqzj',
    skills: ['Claude Code Subagents', 'Claude Skills'],
    highlight: true,
  },
  {
    id: 'claude-101',
    title: 'Claude 101',
    issuer: 'Anthropic',
    date: 'Apr 2026',
    credentialId: 'wudg4d98ge9w',
    skills: ['Anthropic Claude'],
    highlight: true,
  },
  {
    id: 'reactjs-advanced',
    title: 'ReactJS Basic to Advanced [2024]',
    issuer: 'Udemy',
    date: 'Jan 2024',
    credentialId: 'UC-5df28751-973f-44df-a2aa-b7aeff77bd12',
    url: 'https://drive.google.com/file/d/1WwW9WyNNJ6-5wc1ZzpOOSNih3uJEL6QH/view?usp=sharing',
    skills: ['React.js', 'React Hooks'],
  },
  {
    id: 'cpp-course',
    title: 'CPP Programming Complete Course',
    issuer: 'Udemy',
    date: 'Jan 2022',
    credentialId: 'UC-33900c6f-6ae8-4160-9608-42138762668b',
    url: 'https://drive.google.com/file/d/1ndQRLaQf9vw08wlCQa2Uh2NGvzneoi4Y/view?usp=sharing',
    skills: ['C++', 'Data Structures & Algorithms'],
  },
  {
    id: 'html-js-css',
    title: 'Programming in HTML5 with JavaScript and CSS3',
    issuer: 'Udemy',
    date: 'Jan 2022',
    url: 'https://drive.google.com/drive/u/2/folders/10g8AVZSUhPFuLNRWXMdYL_Cj51XvvWa_',
    skills: ['JavaScript', 'HTML', 'CSS', 'EJS'],
  },
]

export const CERTIFICATIONS_META = {
  sectionLabel: 'LICENSES & CERTIFICATIONS',
  heading: 'Credentials',
  subheading: 'Verified certifications across AI, cloud, and full-stack development.',
  highlightsLabel: 'LEARNING & GROWTH',
  highlightsHeading: 'Certifications',
  viewCta: 'VIEW CERTIFICATE →',
}

// ─── Process / How I Work ─────────────────────────────────────────────────────

export const PROCESS_META = {
  sectionLabel: 'HOW I WORK',
  heading: 'Why Clients Trust the Process',
  subheading: 'Six principles that shape every project — from first commit to production.',
}

export const PROCESS = [
  {
    num: '01',
    title: 'Understand the Problem',
    detail:
      'Domain mapping, user workflows, and failure modes — before a line of code. A week of clear requirements saves months of rework. I ask the questions nobody wants to hear early.',
  },
  {
    num: '02',
    title: 'Architect Before Building',
    detail:
      'Data model, API contract, component hierarchy — designed upfront. The architecture is the force multiplier. Everything built on a shaky foundation costs double to fix later.',
  },
  {
    num: '03',
    title: 'Ship Early, Improve Constantly',
    detail:
      'Working software replaces assumptions. I ship to real users as fast as possible, then let actual usage drive the next iteration. Performance and cost profiling are continuous, not afterthoughts.',
  },
  {
    num: '04',
    title: 'Outcomes Over Elegance',
    detail:
      'Every technical decision is evaluated against business outcomes — does it reduce cost, increase accuracy, or ship faster? The best code is the code that solves the right problem.',
  },
  {
    num: '05',
    title: 'Modular & Readable',
    detail:
      'Clean interface boundaries, single-responsibility modules, and zero magic. Because six months from now someone needs to add a feature without dreading the codebase.',
  },
  {
    num: '06',
    title: 'Clean Handoffs',
    detail:
      'Documented APIs, meaningful git history, and onboarding instructions that actually work. The next engineer should be productive on day one — not day thirty.',
  },
]

// ─── Ticker ───────────────────────────────────────────────────────────────────

export const TICKER_ITEMS = [
  'AI Orchestration', 'Agentic AI', 'LLM Engineering', 'React.js', 'Node.js',
  'Model Context Protocol', 'Prompt Engineering', 'PERN Stack', 'Pinecone',
  'GenAI Systems', 'RPA Automation', 'Claude API', 'HealthTech SaaS',
  'Semantic Retrieval', 'PostgreSQL', 'AI Cost Optimization',
  'Full-Stack', 'LangChain', 'Multi-Agent Systems', 'Technical Leadership',
]

// ─── Contact ──────────────────────────────────────────────────────────────────

export const CONTACT = {
  sectionLabel: "LET'S TALK",
  heading: 'Have a project in mind?',
  tagline:
    'Open to full-time roles, freelance contracts, and interesting collaborations.\nReach out — I reply fast.',
  cta: 'GET IN TOUCH',
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export const PROJECTS_META = {
  sectionLabel: 'FEATURED WORK',
  heading: 'Selected Works',
  subheading:
    'A selection of AI applications, full-stack SaaS platforms, and engineering tools — built and shipped.',
  moreSectionLabel: 'More projects',
  resumeCta: 'DOWNLOAD RESUME PDF',
}

export const RESUME_PROJECTS = [
  {
    id: 'codio-prediction-engine',
    title: 'Codio Prediction Engine',
    stack: 'LLMs · Prompt Engineering · Pinecone · Python',
    teaser:
      'Production AI engine predicting medical codes at 95%+ accuracy — 75% lower cost and 50% faster execution vs. the baseline I inherited.',
    description:
      "Sole architect of MediCodio's core AI engine: specialty-aware LLM reasoning, Pinecone vector retrieval, batching/caching strategy, and fallback model chains — all tuned to hit 95%+ accuracy while slashing inference cost by 75% and runtime by 50%.",
    image: '/project_thumbnail_codio_ai_engine.svg',
    category: 'Resume project',
    detail: {
      lead: 'AI Medical Code Prediction — 95%+ Accuracy, 75% Cost Reduction',
      overview:
        'End-to-end LLM pipeline for medical chart processing, code enrichment, and ICD/CPT prediction across specialties. I designed the full system from the ground up — specialty routing, chain-of-thought prompting, vector-augmented retrieval, and a cost-optimised inference stack that runs 24/7 in production.',
      highlights: [
        'Specialty-aware chain-of-thought LLM workflows with targeted prompting — 95%+ medical code prediction accuracy across diverse chart types.',
        '50% faster execution vs. baseline via Pinecone vector search optimisation, batched inference, response caching, and model-call deduplication.',
        '75% operational cost reduction through prompt compression, fallback model strategy, and fine-tuned inference configuration.',
        'Fault-tolerant, modular architecture with specialty routing, edge-case handlers, and horizontal scaling for large chart volume.',
        'Continuous accuracy monitoring with feedback loops feeding prompt improvement cycles.',
      ],
      tags: ['OpenAI API', 'LangChain', 'Pinecone', 'Prompt Engineering', 'Python', 'PostgreSQL'],
    },
  },
  {
    id: 'medicodio-application-platform',
    title: 'Medicodio Application Platform',
    stack: 'React.js · Node.js · Express · PostgreSQL · RPA',
    teaser:
      'Full PERN SaaS platform built from scratch — coder dashboards, chart lifecycle, AI engine integration, and ~40% performance uplift delivered mid-tenure.',
    description:
      'Sole owner of the full application stack: React.js coder dashboards, Express/PostgreSQL APIs, chart review flows, RPA orchestration hooks, and AI prediction engine endpoints — plus a ~40% performance improvement across API response times and frontend render cycles.',
    image: '/project_thumbnail_medicodio_platform.svg',
    category: 'Resume project',
    detail: {
      lead: 'Full-Stack HealthTech SaaS — Built & Owned End-to-End',
      overview:
        'Complete B2B SaaS platform for AI-assisted medical coding — built from zero. I owned frontend, backend, and database: React.js coder dashboards, queue management, chart review workflows, REST APIs, and deep integration with the AI prediction engine and RPA automation layer.',
      highlights: [
        'End-to-end ownership — frontend components, API design, database schema, and AI engine integration all authored by one engineer.',
        '~40% API response time improvement via PostgreSQL query optimisation, index tuning, and elimination of N+1 patterns across Express routes.',
        'React.js state restructuring and memoisation overhaul — eliminated render bottlenecks in high-frequency dashboard views.',
        'Chart lifecycle management: import → queue → predict → review → audit → export, with status tracking at each stage.',
        'Rapid feature delivery cadence supporting weekly releases without regression.',
      ],
      tags: ['React.js', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs', 'RPA'],
    },
  },
  {
    id: 'emr-integration-automation',
    title: 'EMR Integration & Chart Automation',
    stack: 'RPA · API Integrations · Workflow Design · Healthcare IT',
    teaser:
      '~90% reduction in manual chart operations — fault-tolerant EMR-to-export automation with validation, denial detection, and specialty routing.',
    description:
      'End-to-end automation pipeline across multiple EMR systems: ingestion, mandatory-field validation, denial detection, risk scoring, AI prediction routing, coder review, audit logic, and export — with daily alignment with US clients to keep it running cleanly.',
    image: '/project_thumbnail_emr_integration.svg',
    category: 'Resume project',
    detail: {
      lead: 'EMR-to-Export Automation — ~90% Reduction in Manual Operations',
      overview:
        'Unified automation pipeline spanning multiple US healthcare EMR systems. Charts flow from ingestion through validation, AI prediction, human review, audit, and export — with zero manual touchpoints on the happy path. Built for fault tolerance, compliance, and daily production use.',
      highlights: [
        '~90% reduction in manual chart operations — full pipeline runs automatically from EMR import to final code export.',
        'Mandatory-field validation, denial detection, risk scoring, and specialty-based routing enforce data quality at every stage.',
        'Fault-tolerant execution engine: per-step retry logic, fallback workflows, and structured logging for debuggable failures.',
        'Daily alignment with US healthcare clients on EMR data mapping, chart formats, and workflow execution — zero surprises in production.',
        'Configurable per-client workflow templates to support diverse EMR setups without code changes.',
      ],
      tags: ['RPA', 'API Integrations', 'Workflow Design', 'Healthcare IT', 'Node.js'],
    },
  },
]

export const MORE_PROJECTS = [
  {
    id: 'linkstack',
    title: 'LinkStack Social Referencing App',
    description:
      'Full-stack link-curation platform — personalised link pages, MongoDB persistence, and server-side rendering with Pug/EJS. Built as a complete CRUD product with auth and profile management.',
    image: '/project_thumbnail_linkstack.svg',
    category: 'Project',
    stack: 'MongoDB · Express · Node.js · Pug · EJS',
    detail: {
      lead: 'Personalised Link Curation — Full-Stack MERN Product',
      overview:
        'LinkStack lets users build and share curated link pages across social platforms. Built as a full-stack product with MongoDB persistence, Express routing, server-side rendering, and user authentication.',
      highlights: [
        'Full CRUD: create, edit, organise, and publish personalised link collections.',
        'Server-side rendering with Pug and EJS for fast initial load and SEO-friendly pages.',
        'MongoDB for flexible document storage with user-scoped data isolation.',
        'Express.js session-based authentication with protected route middleware.',
      ],
      tags: ['JavaScript', 'Node.js', 'MongoDB', 'Express', 'EJS', 'Pug'],
    },
  },
  {
    id: 'realtime-chat',
    title: 'Realtime Chat Application',
    description:
      'WebSockets-powered room-based chat — bidirectional messaging, live presence tracking, join/leave events, and auto-scroll. Built to understand real-time architecture patterns with Socket.io.',
    image: '/project_thumbnail_realtime_chat.svg',
    category: 'Project',
    stack: 'Node.js · Socket.io · JavaScript · HTML/CSS',
    detail: {
      lead: 'Real-Time Chat Rooms with WebSockets',
      overview:
        'Users join named rooms and exchange messages in real time with live presence indicators. Built to deeply understand bidirectional communication patterns, event-driven architecture, and room-scoped state management with Socket.io.',
      highlights: [
        'Socket.io for persistent bidirectional connections with automatic reconnection handling.',
        'Room-scoped message broadcasting — users only receive messages from their active room.',
        'Live user presence: join/leave events broadcast instantly to all room members.',
        'Auto-scroll behaviour on new messages with smooth UX handling for history.',
      ],
      tags: ['Node.js', 'Socket.io', 'WebSockets', 'JavaScript'],
    },
  },
  {
    id: 'trend-market',
    title: 'Trend Market Ecommerce',
    description:
      'Feature-complete ecommerce SPA — product catalog, cart, auth, category filters, recommendations, and a Lerna monorepo. Demonstrates production-pattern React state management with Redux.',
    image: '/project_thumbnail_trend_market.svg',
    category: 'Project',
    stack: 'React · Redux · Axios · React Bootstrap · Lerna',
    detail: {
      lead: 'Feature-Complete Ecommerce SPA',
      overview:
        'Trend Market is a responsive ecommerce frontend with catalog browsing, product detail pages, shopping cart, user authentication, category filtering, and product recommendations — structured as a Lerna monorepo to practise package-level separation at scale.',
      highlights: [
        'Product listing, detail views, categories, recommendations, cart, and login/register flows.',
        'Redux for global state — cart, auth, and product data managed predictably across routes.',
        'Axios for API communication with interceptors for auth token injection.',
        'Lerna monorepo structure for package-level separation of concerns.',
        'react-bootstrap design system for consistent, responsive UI components.',
      ],
      tags: ['React', 'Redux', 'Axios', 'Bootstrap', 'MongoDB'],
    },
  },
  {
    id: 'vehicle-insurance-db',
    title: 'Vehicle Insurance Database',
    description:
      'Normalised relational schema for a vehicle insurance system — entities, relationships, constraints, and analytical queries designed for correctness, integrity, and query performance.',
    image: '/project_thumbnail_vehicle_insurance.svg',
    category: 'Project',
    stack: 'SQL · MySQL',
    detail: {
      lead: 'Relational Database Design — Insurance Domain',
      overview:
        'A fully normalised relational database model for a vehicle insurance system covering vehicles, owners, policies, claims, and agents. Designed for data integrity, analytical query performance, and extensibility.',
      highlights: [
        'Fully normalised schema (3NF) with clearly defined primary/foreign key relationships.',
        'Covers vehicles, owners, insurance policies, claims, agents, and coverage types.',
        'Analytical SQL queries for claim history, policy status, and risk reporting.',
        'Designed with referential integrity constraints and index strategy for query performance.',
      ],
      tags: ['SQL', 'MySQL', 'Database Design', 'Schema Normalisation'],
    },
  },
]
