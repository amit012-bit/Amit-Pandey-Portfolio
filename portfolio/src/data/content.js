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
  education: 'B.Tech CSE · IIIT Dharwad · CPI 8.54',
  linkedinStats: '1,019 followers · 500+ connections',
  availabilityStatus: 'AVAILABLE',
  heroImage: 'images/personal/hero.jpg',
  aboutImage: 'images/personal/about.jpg',
  experienceImage: 'images/personal/experience.jpg',
  footerWatermark: 'PORTFOLIO',
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export const HERO = {
  availabilityLabel: 'AVAILABLE FOR WORK',
  headlineLines: ['Agentic AI', 'That Ships at', '97% Accuracy'],
  tagline:
    'AI Platform Lead at MediCodio, building agentic LLM & GenAI systems for US HealthTech ' +
    'that run in production at 75% lower cost. Most AI fails not because models are weak — ' +
    'but because orchestration is broken.',
  roleLine: 'AI Platform Lead · Agentic AI · LLM Orchestration · Automation-First',
  stats: [
    { num: '2+', label: 'Years Exp.' },
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
    "AI Platform Lead at MediCodio. B.Tech CSE, IIIT Dharwad (CPI 8.54). I don’t just " +
    'build AI — I engineer velocity, collapse cost, and convert AI into real leverage. ' +
    '600+ DSA problems solved across LeetCode, Coding Ninjas, and GFG.',
  ],
  detailsLabel: 'PERSONAL DETAILS',
  stats: [
    { value: '95–97%', label: 'AI accuracy' },
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
    { num: '95–97%', label: 'AI prediction accuracy' },
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
      'workflows with fallback logic. Built production systems hitting 95–97% accuracy with 75% cost reduction — ' +
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
      'NumPy', 'Pandas', 'Scikit-learn',
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
  heading: 'Experience Shipping AI Systems',
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
      'Own the AI platform end-to-end — LLM orchestration, prompt architecture, Pinecone vector search, and ICD/CPT-focused agentic workflows across multiple specialties.',
      'Drove inference-pipeline rewrites informed by live production data, improving accuracy while cutting AI costs by 75% and execution time by 50%.',
      'Designed the EMR automation system eliminating ~90% of manual chart operations across multiple live EMR systems with retries, denial detection, risk scoring, and specialty routing.',
      'Lead AI Platform & Application teams — setting technical direction, owning the roadmap, and resolving high-priority production issues before they reach clients.',
      'Serve as primary technical contact for US enterprise healthcare clients across requirement gathering, integration design, and production deployment alignment.',
    ],
    outcomes: [
      '95–97% prediction accuracy across specialties — up from a 60% baseline',
      '50% reduction in execution time',
      '75% operational cost savings',
      '90% reduction in manual chart operations',
      'Primary technical contact for multiple US healthcare accounts',
    ],
  },
  {
    id: 'fsd',
    role: 'Software Development Engineer',
    subtitle: 'AI Platform / Full Stack',
    period: 'Jul 2024 – Oct 2025',
    company: 'MediCodio Inc.',
    location: 'Bengaluru, Karnataka, India · On-site',
    type: 'Full-time',
    challenge: 'Build and repeatedly evolve the foundation for a scalable, automation-first AI product as product requirements and production scale changed.',
    points: [
      'Built MediCodio’s application platform through multiple production versions from scratch — each PERN-stack rebuild driven by product evolution and scale requirements.',
      'Owned frontend, backend, and database layers: REST API design, PostgreSQL schema/indexing, React workflow surfaces, and production integration points.',
      'Developed core product surfaces used daily by US healthcare clients: coder dashboards, chart review interfaces, queue management, and workflow orchestration.',
      'Improved application performance by 40% through REST API redesign, PostgreSQL index restructuring, and React state-management overhaul.',
      'Built and deployed API + RPA integrations across multiple live EMR systems, covering import, validation, prediction, review, audit, and export.',
    ],
    outcomes: [
      '40% performance improvement across APIs and UI',
      'Multiple production platform versions shipped from zero',
      'Core workflow surfaces used daily by US healthcare clients',
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
  {
    id: 'ngo',
    role: 'General Secretary & CTO',
    period: 'Oct 2023 – Present',
    company: 'SarvaSamarpitSewaSansthan (Trust)',
    companyUrl: 'https://sarva-samarpit-sewa-sansthan.in/',
    location: 'India · Volunteer',
    type: 'Volunteering',
    points: [
      'Founding member of a registered Trust focused on food, clothing, shelter, and education awareness — driving poverty and hunger relief across India.',
      'Support youth empowerment initiatives and community outreach programs.',
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
    'Available for freelance and contract work — AI/LLM systems, full-stack products, and automation that ship to production. Open to full-time roles too.\nReach out — I reply fast.',
  cta: 'GET IN TOUCH',
  upworkCta: 'HIRE ME ON UPWORK',
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
      'Production AI engine that lifted medical-code prediction from a 60% baseline to 95–97% accuracy — at 75% lower cost and 50% faster execution.',
    description:
      "Sole architect of MediCodio's core AI engine: specialty-aware LLM reasoning, Pinecone vector retrieval, batching/caching strategy, and fallback model chains — tuned to lift accuracy from 60% to 95–97% while slashing inference cost by 75% and runtime by 50%.",
    image: '/images/projects/codio-ai-engine.svg',
    category: 'Resume project',
    detail: {
      lead: 'AI Medical Code Prediction — 60% to 95–97% Accuracy, 75% Cost Reduction',
      problem:
        'US medical-coding teams were drowning in manual chart review, and the AI baseline I inherited topped out around 60% accuracy — too low to trust in a compliance-sensitive billing workflow. Every incorrect code risks claim denials and lost revenue, so the engine had to reach near-human accuracy without letting the inference bill scale out of control.',
      overview:
        'End-to-end LLM pipeline for medical chart processing, code enrichment, and ICD/CPT prediction across specialties. I designed the full system from the ground up — specialty routing, chain-of-thought prompting, vector-augmented retrieval, and a cost-optimised inference stack that runs 24/7 in production.',
      highlights: [
        'Specialty-aware chain-of-thought LLM workflows with targeted prompting — lifted medical code prediction accuracy from a 60% baseline to 95–97% across diverse chart types.',
        '50% faster execution vs. baseline via Pinecone vector search optimisation, batched inference, response caching, and model-call deduplication.',
        '75% operational cost reduction through prompt compression, fallback model strategy, and fine-tuned inference configuration.',
        'Fault-tolerant, modular architecture with specialty routing, edge-case handlers, and horizontal scaling for large chart volume.',
        'Continuous accuracy monitoring with feedback loops feeding prompt improvement cycles.',
      ],
      decisions: [
        'Chose retrieval-augmented LLM prompting over fine-tuning a custom model. With limited labelled chart data and a fast-moving spec, RAG over a curated medical knowledge base hit the accuracy target without training cost and stayed explainable for compliance review. I would revisit fine-tuning only at a much larger labelled-data scale.',
        'Routed charts through specialty-aware pipelines instead of one generic prompt. A single prompt plateaued in the 60s because cardiology and radiology charts need different reasoning. Specialty routing meant more code to maintain, but it was the single biggest accuracy lever.',
        'Added fallback model chains rather than relying on one model. A cheaper model handles the common case and escalates only hard charts to a stronger model — this is what let 75% cost reduction and high accuracy coexist instead of trading off against each other.',
        'Optimised cost at the prompt layer (compression, caching, batching, call deduplication) before reaching for bigger infrastructure. Most of the savings came from sending fewer and smaller tokens, not from scaling hardware.',
      ],
      results: [
        { value: '95–97%', label: 'Prediction accuracy (from a ~60% baseline)' },
        { value: '75%', label: 'Lower inference & operational cost' },
        { value: '50%', label: 'Faster execution vs. baseline' },
        { value: '24/7', label: 'Running in production on real US chart volume' },
      ],
      reflection:
        'I would invest in evaluation tooling earlier — an automated, per-specialty accuracy-regression suite would have caught prompt drift faster than the manual feedback loop we started with. I would also expose the fallback-routing thresholds as tunable config rather than code, so the cost/accuracy balance could be adjusted per client without a deploy.',
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
    image: '/images/projects/medicodio-platform.svg',
    category: 'Resume project',
    detail: {
      lead: 'Full-Stack HealthTech SaaS — Built & Owned End-to-End',
      problem:
        'The AI engine needed a production product around it: coder queues, chart lifecycle tracking, review workflows, audit visibility, and reliable APIs for healthcare teams working against real billing deadlines. Without a full platform, predictions stayed as isolated outputs instead of becoming an operational system people could trust and use every day.',
      overview:
        'Complete B2B SaaS platform for AI-assisted medical coding — built from zero. I owned frontend, backend, and database: React.js coder dashboards, queue management, chart review workflows, REST APIs, and deep integration with the AI prediction engine and RPA automation layer.',
      highlights: [
        'End-to-end ownership — frontend components, API design, database schema, and AI engine integration all authored by one engineer.',
        '~40% API response time improvement via PostgreSQL query optimisation, index tuning, and elimination of N+1 patterns across Express routes.',
        'React.js state restructuring and memoisation overhaul — eliminated render bottlenecks in high-frequency dashboard views.',
        'Chart lifecycle management: import → queue → predict → review → audit → export, with status tracking at each stage.',
        'Rapid feature delivery cadence supporting weekly releases without regression.',
      ],
      decisions: [
        'Chose PostgreSQL for the core platform data instead of a document database because chart lifecycle, users, reviews, audits, and client configuration have strong relational structure. It required more upfront schema discipline, but made reporting, joins, and integrity constraints much safer.',
        'Built explicit workflow states instead of treating charts as generic records. That added product complexity, but it made the system operationally debuggable: teams could see exactly where a chart was stuck, whether it was pending AI, under review, audited, or ready for export.',
        'Kept AI prediction behind backend service boundaries rather than calling model workflows directly from the UI. This kept credentials and orchestration logic off the client, made retries and audit logging easier, and allowed the AI engine to evolve without breaking the dashboard.',
        'Prioritised render performance and API query tuning before adding new UI features. In a high-frequency dashboard, slow queues destroy trust, so memoisation, state restructuring, indexing, and N+1 elimination became product work, not cleanup.',
      ],
      results: [
        { value: '0→1', label: 'Full HealthTech SaaS platform built from scratch' },
        { value: '~40%', label: 'Performance improvement across APIs and UI' },
        { value: '90%', label: 'Reduction in manual chart operations' },
        { value: 'Weekly', label: 'Release cadence for production workflows' },
      ],
      reflection:
        'I would introduce stronger internal observability earlier: structured dashboards for queue latency, failed transitions, slow API routes, and frontend render hotspots. I would also document workflow state transitions as a formal state machine from day one, so product, engineering, and operations could share the same mental model.',
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
    image: '/images/projects/emr-integration.svg',
    category: 'Resume project',
    detail: {
      lead: 'EMR-to-Export Automation — ~90% Reduction in Manual Operations',
      problem:
        'Healthcare operations teams were spending too much time moving charts between EMRs, validation steps, AI prediction, coder review, audit, and final export. The business risk was not only speed: every manual handoff increased the chance of missing required fields, mishandling denials, or delaying claims that depended on clean chart flow.',
      overview:
        'Unified automation pipeline spanning multiple US healthcare EMR systems. Charts flow from ingestion through validation, AI prediction, human review, audit, and export — with zero manual touchpoints on the happy path. Built for fault tolerance, compliance, and daily production use.',
      highlights: [
        '~90% reduction in manual chart operations — full pipeline runs automatically from EMR import to final code export.',
        'Mandatory-field validation, denial detection, risk scoring, and specialty-based routing enforce data quality at every stage.',
        'Fault-tolerant execution engine: per-step retry logic, fallback workflows, and structured logging for debuggable failures.',
        'Daily alignment with US healthcare clients on EMR data mapping, chart formats, and workflow execution — zero surprises in production.',
        'Configurable per-client workflow templates to support diverse EMR setups without code changes.',
      ],
      decisions: [
        'Designed the pipeline around validation gates instead of a simple linear script. That slowed down the happy-path design, but it prevented bad charts from silently moving forward and made data-quality failures visible before they reached billing-sensitive steps.',
        'Used configurable per-client workflow templates rather than hardcoding every EMR variation. The tradeoff was more abstraction upfront, but it let the same automation framework support different chart formats, client rules, and export requirements without constant rewrites.',
        'Added retry and fallback logic at each stage instead of failing the entire workflow on a single brittle integration point. This made the system more complex, but healthcare automation has to survive partial failures, network delays, and inconsistent source systems.',
        'Kept humans in the loop for review and audit checkpoints instead of chasing full autonomy. The goal was not to remove judgment from healthcare workflows; it was to remove repetitive movement, validation, and routing work so reviewers could focus on exceptions.',
      ],
      results: [
        { value: '~90%', label: 'Reduction in manual chart operations' },
        { value: 'Multi-EMR', label: 'Automation across diverse healthcare systems' },
        { value: 'Daily', label: 'Client-aligned production workflow execution' },
        { value: 'Zero-touch', label: 'Happy-path movement from import to export' },
      ],
      reflection:
        'I would add richer workflow observability earlier: per-step success rates, retry counts, client-specific failure trends, and alerting around stuck charts. I would also separate the client workflow configuration into a more visible admin layer so operations teams could inspect rules without asking engineering to trace code.',
      tags: ['RPA', 'API Integrations', 'Workflow Design', 'Healthcare IT', 'Node.js'],
    },
  },
]

export const MORE_PROJECTS = [
  {
    id: 'astrovault-ai',
    title: 'AstroVault AI Marketplace',
    description:
      'Full-stack AI solutions marketplace with customer, vendor, and superadmin roles, intelligent matching, advanced search, reviews, blogs, and secure JWT-based access control.',
    image: '/images/projects/astrovault-ai.svg',
    category: 'GitHub project',
    stack: 'Next.js · TypeScript · Node.js · Express · MongoDB',
    detail: {
      lead: 'Multi-Role AI Solutions Marketplace',
      problem:
        'The client needed more than a static AI-services catalog: customers had to discover solutions by business need, vendors needed a way to list and manage offerings, and admins needed control over quality, categories, and marketplace content. The challenge was turning a broad AI marketplace idea into clear, role-specific workflows that could scale beyond a brochure site.',
      overview:
        'AstroVault AI is a full-stack marketplace for discovering, listing, and matching AI solutions to business requirements. The platform separates customer, vendor, and superadmin workflows with role-based authorization, search/filtering, vendor solution management, reviews, and content features for AI trend discovery.',
      highlights: [
        'Built a multi-role product architecture with customer discovery flows, vendor solution management, and superadmin moderation controls.',
        'Implemented intelligent solution matching and multi-criteria filtering across category, industry, pricing, and customer requirements.',
        'Designed a secure MERN + Next.js stack with JWT authentication, MongoDB Atlas persistence, validation middleware, and reusable API services.',
        'Created a modern responsive UI with TypeScript, Tailwind CSS, Framer Motion, React Query, and API-driven state management.',
      ],
      decisions: [
        'Separated customer, vendor, and superadmin flows instead of forcing all users through one generic dashboard. That increased routing and permission complexity, but made each role simpler and reduced the risk of exposing vendor/admin actions to customers.',
        'Used Next.js with TypeScript for the frontend so the marketplace could support reusable typed views, faster navigation, and cleaner API contracts as the product grew. The tradeoff was more setup discipline compared with a plain React app.',
        'Built search and matching around structured filters first rather than jumping directly to black-box AI recommendations. This made the first version easier to validate, debug, and explain to users before adding more advanced ranking logic.',
        'Chose JWT-based role authorization with validation middleware because the app needed clear access boundaries across marketplace actors. It added backend guardrails early instead of relying on UI-level hiding.',
      ],
      results: [
        { value: '3 roles', label: 'Customer, vendor, and superadmin workflows' },
        { value: 'Full-stack', label: 'Marketplace delivered from UI to API and database' },
        { value: 'Typed', label: 'TypeScript frontend for safer growth' },
        { value: 'Client-ready', label: 'Product structure handed over for continued iteration' },
      ],
      reflection:
        'I would add analytics around search queries, filter usage, and vendor listing views earlier. That would help validate whether users discover solutions through categories, industries, pricing, or keywords, and would make the next recommendation layer data-driven instead of assumption-driven.',
      tags: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    },
  },
  {
    id: 'crelio-dashboard-webhook',
    title: 'Crelio Dashboard Webhook',
    description:
      'Real-time MERN/Next.js dashboard that receives lab webhook data, stores patient/report metadata in MongoDB, and visualizes daily activity, status, doctors, and success metrics.',
    image: '/images/projects/crelio-dashboard.svg',
    category: 'GitHub project',
    stack: 'Next.js · React · TypeScript · Express · MongoDB',
    liveUrl: 'https://crelio-dashboard-webhook.vercel.app',
    detail: {
      lead: 'Webhook-Driven Healthcare Operations Dashboard',
      problem:
        'Lab webhook events were hard to monitor once they left the source system: teams needed a clear operational view of incoming patients, reports, doctors, status changes, and failed or delayed payloads. The business need was visibility — turning raw webhook traffic into a dashboard that non-engineering teams could use without reading logs.',
      overview:
        'A full-stack dashboard for operational visibility over Crelio webhook events. Incoming payloads are persisted into MongoDB models for patients, doctors, reports, and labs, then surfaced through animated dashboard views, charts, status tracking, and auto-refreshing metrics.',
      highlights: [
        'Built a token-secured webhook ingestion API that receives Crelio payloads and normalises them for dashboard consumption.',
        'Modelled patients, doctors, reports, and lab entities in MongoDB to support status tracking and operational queries.',
        'Created real-time dashboard views with daily patient statistics, recent reports, activity charts, and specialty success metrics.',
        'Connected frontend and backend as a modular MERN/Next.js system with reusable API clients, error handling, and responsive UI components.',
      ],
      decisions: [
        'Normalised webhook payloads into explicit patient, doctor, report, and lab models instead of storing raw JSON only. Raw storage would be faster initially, but structured models made dashboards, filtering, and status reporting practical for operations users.',
        'Added token-secured ingestion because webhook endpoints are public-facing by nature. This kept the receiver simple while still preventing casual unauthorised payload submissions.',
        'Built dashboard metrics around operational questions first: what arrived today, what status is each report in, and what recently changed. This kept the UI useful for daily monitoring instead of becoming a generic chart gallery.',
        'Separated API client logic from UI components so frontend views stayed focused on presentation while backend changes could be handled in a central service layer.',
      ],
      results: [
        { value: 'Real-time', label: 'Operational visibility for lab webhook activity' },
        { value: '4 models', label: 'Patients, doctors, reports, and labs structured in MongoDB' },
        { value: 'Token-secured', label: 'Webhook ingestion protected from unauthorised calls' },
        { value: 'Live demo', label: 'Dashboard deployed for client review and handoff' },
      ],
      reflection:
        'I would add an event replay and dead-letter queue earlier. Webhooks are easy to receive when everything works, but production value comes from safely retrying malformed, delayed, or partially processed payloads without losing audit history.',
      tags: ['Next.js', 'React', 'TypeScript', 'Express', 'MongoDB', 'Webhooks', 'Recharts'],
    },
  },
  {
    id: 'doctor-loyalty-tracking',
    title: 'Doctor Loyalty Tracking Management',
    description:
      'MERN application for managing doctor loyalty rewards and transactions, with a production-style admin workflow and deployed frontend.',
    image: '/images/projects/doctor-loyalty.svg',
    category: 'GitHub project',
    stack: 'React · Node.js · Express · MongoDB',
    liveUrl: 'https://doctor-loyalty-tracking-management.vercel.app',
    detail: {
      lead: 'Doctor Rewards & Transaction Management System',
      problem:
        'The client needed a practical way to manage doctor loyalty rewards, transactions, and program records without relying on scattered spreadsheets or manual tracking. The core requirement was a simple admin workflow that could make reward activity visible, searchable, and easier to maintain.',
      overview:
        'A full-stack management application for tracking doctor loyalty rewards, transactions, and program activity. It demonstrates CRUD-heavy product workflows, MongoDB-backed records, and admin-friendly React screens for healthcare operations.',
      highlights: [
        'Built reward and transaction management flows for a healthcare loyalty use case.',
        'Structured a MERN application with API-backed data persistence and reusable frontend views.',
        'Deployed the frontend on Vercel and kept the project connected to a public GitHub repository for review.',
        'Useful as a portfolio bridge between healthcare domain work and full-stack product engineering.',
      ],
      decisions: [
        'Prioritised admin CRUD clarity over visual complexity. For an operations tool, the main value is fast record creation, updates, and lookup, so the interface needed to stay predictable rather than overly animated.',
        'Used MongoDB for reward and transaction records because the program data could evolve over time and did not require heavy relational joins in the initial version. This kept iteration speed high during handoff.',
        'Kept the project as a MERN-style architecture so frontend views, APIs, and persistence stayed easy for another developer or client-side maintainer to understand after delivery.',
        'Deployed the frontend separately on Vercel to make client review simple and avoid requiring local setup for stakeholders who only needed to validate workflows.',
      ],
      results: [
        { value: 'Admin-ready', label: 'Doctor rewards and transaction workflows delivered' },
        { value: 'MERN', label: 'Full-stack implementation with persistent records' },
        { value: 'Deployed', label: 'Frontend available for client review' },
        { value: 'Handoff', label: 'Codebase structured for continued maintenance' },
      ],
      reflection:
        'I would add audit history and role-based access controls earlier if the product were going deeper into production. Reward-management systems benefit from knowing who changed points, why a transaction was adjusted, and whether approvals are required for sensitive edits.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'MERN', 'Healthcare'],
    },
  },
  {
    id: 'crelio-webhook-receiver',
    title: 'Node.js Crelio Webhook Receiver',
    description:
      'Flexible webhook receiver that auto-detects Crelio payload field variations, saves PDF reports with metadata, validates tokens, and sends email alerts.',
    image: '/images/projects/webhook-receiver.svg',
    category: 'GitHub project',
    stack: 'Node.js · Express · Webhooks · SMTP',
    detail: {
      lead: 'Fault-Tolerant Lab Report Webhook Receiver',
      problem:
        'The client needed a lightweight service that could receive Crelio lab-report payloads, extract report identifiers and PDFs, and alert the team without requiring someone to manually inspect payloads or server logs. The risky part was payload variability: real webhook fields are not always named or shaped exactly as the documentation suggests.',
      overview:
        'A standalone Node.js service for receiving Crelio webhook payloads, extracting report identifiers and PDF data across inconsistent field names, saving metadata, and notifying teams through email. It is designed for deployment on Render or local ngrok-based testing.',
      highlights: [
        'Implemented token-authenticated webhook handling for secure external payload ingestion.',
        'Added case-insensitive field detection so the receiver can tolerate different Crelio payload naming conventions.',
        'Saved base64 PDF reports and JSON metadata side by side for traceability and debugging.',
        'Integrated asynchronous email alerts so operations teams can see report IDs, bill IDs, file paths, and timestamps without blocking webhook processing.',
      ],
      decisions: [
        'Kept the receiver as a standalone Express service instead of folding it into a larger dashboard first. That made the webhook path easier to test, deploy, and debug independently before adding richer UI layers.',
        'Implemented flexible field detection instead of trusting one fixed payload schema. The tradeoff was extra parsing logic, but it made the receiver more resilient to Crelio naming variations and real-world integration drift.',
        'Saved both PDF output and JSON metadata because webhook debugging needs traceability. Storing only the PDF would hide why a payload succeeded or failed; storing metadata gives support teams a paper trail.',
        'Sent email alerts asynchronously so notification failures would not block webhook processing. The main priority was receiving and preserving the report reliably.',
      ],
      results: [
        { value: 'Resilient', label: 'Handles Crelio payload field variations' },
        { value: 'PDF + JSON', label: 'Reports and metadata preserved for traceability' },
        { value: 'Secure', label: 'Token-authenticated webhook endpoint' },
        { value: 'Deployable', label: 'Designed for Render and ngrok-based testing' },
      ],
      reflection:
        'I would add a small admin view for recent webhook events, failed payloads, and resend status. For a utility service, logs are enough during development, but client handoff is stronger when non-engineers can verify recent activity without server access.',
      tags: ['Node.js', 'Express', 'Webhooks', 'SMTP', 'Render', 'PDF Processing'],
    },
  },
  {
    id: 'android-permission-scanner',
    title: 'Android Permission Scanner',
    description:
      'Java Android app that scans installed applications for camera and microphone access, then helps users identify possible privacy concerns.',
    image: '/images/projects/android-scanner.svg',
    category: 'GitHub project',
    stack: 'Java · Android Studio · Mobile Security',
    sourceUrl: 'https://github.com/amit012-bit/Android-Applications-Permission-Scanner',
    detail: {
      lead: 'Mobile Privacy Scanner for Camera & Microphone Access',
      overview:
        'An Android Studio project focused on privacy visibility. The app scans installed applications, identifies camera or microphone access, and guides the user to monitor suspicious apps for potential privacy concerns.',
      highlights: [
        'Built a native Android application in Java focused on user privacy and permission awareness.',
        'Scans installed apps to identify access to sensitive device capabilities such as camera and microphone.',
        'Provides a practical security-oriented workflow rather than a simple static permission list.',
        'Shows breadth beyond web apps: mobile development, Android permissions, and privacy-focused tooling.',
      ],
      tags: ['Java', 'Android Studio', 'Android Permissions', 'Privacy', 'Mobile Security'],
    },
  },
  {
    id: 'linkstack',
    title: 'LinkStack Social Referencing App',
    description:
      'Full-stack link-curation platform — personalised link pages, MongoDB persistence, and server-side rendering with Pug/EJS. Built as a complete CRUD product with auth and profile management.',
    image: '/images/projects/linkstack.svg',
    category: 'Project',
    stack: 'MongoDB · Express · Node.js · Pug · EJS',
    sourceUrl: 'https://github.com/amit012-bit/LinkStack',
    liveUrl: 'https://linkstack-0g21.onrender.com/',
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
    image: '/images/projects/realtime-chat.svg',
    category: 'Project',
    stack: 'Node.js · Socket.io · JavaScript · HTML/CSS',
    sourceUrl: 'https://github.com/amit012-bit/WeChat-App',
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
    image: '/images/projects/trend-market.svg',
    category: 'Project',
    stack: 'React · Redux · Axios · React Bootstrap · Lerna',
    sourceUrl: 'https://github.com/amit012-bit/Trend-Market-Ecommerce-Application',
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
    image: '/images/projects/vehicle-insurance.svg',
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
