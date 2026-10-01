/**
 * Single source of truth for all site content.
 * Anything marked TODO is a placeholder for you to replace.
 */

export const site = {
  url: "https://tavethiya.github.io",
  name: "Mahesh Tavethiya",
  firstName: "Mahesh",
  handle: "Tavethiya",
  role: "Full-Stack Engineer",
  tagline:
    "I build SaaS products and MVPs with Next.js, React, Angular, Node.js and .NET, and ship them on AWS/Azure.",
  description:
    "Mahesh Tavethiya is a full-stack engineer building SaaS products and MVPs with Next.js, React, Angular, Node.js and .NET on AWS and Azure.",
  location: "India",
  email: "mtavethiya12@gmail.com",
  social: {
    github: "https://github.com/Tavethiya",
    linkedin: "https://linkedin.com/in/mahesh-tavethiya",
    whatsapp: "https://wa.me/919033404261",
  },
  keywords: [
    "Mahesh Tavethiya",
    "full-stack engineer",
    "Next.js developer",
    "React developer",
    "Angular developer",
    "Node.js developer",
    ".NET developer",
    "SaaS development",
    "MVP development",
    "AWS",
    "Azure",
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/experience/", label: "Experience" },
  { href: "/contact/", label: "Contact" },
] as const;

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", ".NET / ASP.NET Core", "GraphQL", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "MSSQL"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "CI/CD", "Vercel"],
  },
];

/** Tech nodes that orbit in the hero animation. Keep to 8 for spacing. */
export const orbitTech = [
  "Next.js",
  "React",
  "Angular",
  "TypeScript",
  "Node.js",
  ".NET",
  "AWS",
  "Azure",
];

export const highlights = [
  {
    title: "SaaS platforms & MVPs",
    text: "From first commit to production. Auth, billing, dashboards, multi-tenant data, the lot.",
  },
  {
    title: "Performance that ranks",
    text: "Server-rendered Next.js, green Core Web Vitals, structured data and clean canonical URLs.",
  },
  {
    title: "Cloud-native delivery",
    text: "Dockerised services on AWS and Azure with CI/CD pipelines that make releases boring.",
  },
  {
    title: "AI features in real products",
    text: "Practical integrations of LLM and ML capabilities into existing web applications.",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

/**
 * Keep bullets outcome-focused: what shipped, what improved, by how much.
 */
export const experience: Experience[] = [
  {
    company: "Self-employed",
    role: "Full-Stack / MEAN Stack Developer",
    period: "Oct 2018 – Present",
    location: "Greater Ahmedabad Area · Remote",
    summary:
      "Independent engineering for founders, agencies and product teams across the US, UK, Europe and Australia — 8,400+ tracked hours, 23+ engagements, 92% Job Success and a 5.0★ average across 27 Upwork reviews.",
    bullets: [
      "Delivered MVPs from zero: Next.js/React front ends on Node.js and Express/FeathersJS with auth, payments and a live deployment within weeks.",
      "Built real-time IoT and telemetry dashboards handling high event volumes with streaming device data and time-series visualisation.",
      "Led Angular modernisation projects — upgraded legacy codebases, cut bundle size and load times, stabilised inherited applications.",
      "Embedded as fractional senior engineer on product teams, owning architecture decisions and unblocking delivery.",
    ],
    stack: ["TypeScript", "React", "Next.js", "Angular", "Node.js", "FeathersJS", "Express", "MongoDB", "PostgreSQL", "Azure", "AWS", "Docker"],
  },
  {
    company: "Insigma Inc",
    role: "Software Engineer",
    period: "Jun 2016 – Sep 2018",
    location: "Noida, Uttar Pradesh, India · Hybrid",
    summary:
      "Built and maintained enterprise web applications for international clients as part of a delivery team.",
    bullets: [
      "Developed component-based Angular and TypeScript front ends, replacing older jQuery-driven interfaces.",
      "Built and consumed REST APIs on ASP.NET / C# backed by SQL Server and Azure SQL.",
      "Deployed and maintained applications on Microsoft Azure, including Azure Web Apps and Azure SQL.",
      "Worked directly with client stakeholders on requirements and demos, cutting out project-management overhead.",
    ],
    stack: ["Angular", "TypeScript", "ASP.NET", "C#", "SQL Server", "Azure", "Bootstrap"],
  },
  {
    company: "SciTER Technologies Pvt. Ltd.",
    role: "Software Developer",
    period: "Apr 2015 – May 2016",
    location: "Ahmedabad, Gujarat, India · On-site",
    summary:
      "First professional role on a small team, owning features end to end from day one.",
    bullets: [
      "Built front-end interfaces in HTML5, CSS3, JavaScript and jQuery, and moved into early Angular work as the team modernised its stack.",
      "Wrote server-side logic and SQL Server queries for internal and client-facing applications.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "jQuery", "Angular", "SQL Server"],
  },
];

export const aboutParagraphs = [
  "I'm a full-stack engineer who likes taking a product from a rough idea to something real people use. Most of my work sits in the space between a founder's roadmap and a production system: choosing the right architecture, shipping fast without cutting corners, and keeping things fast once they're live.",
  "My day-to-day stack is TypeScript end to end, with Next.js and React on the front, Node.js or .NET on the back, and Postgres or MongoDB underneath. I deploy to AWS and Azure, containerise with Docker, and automate releases so nobody has to think about them.",
  "I care a lot about the unglamorous parts: Core Web Vitals, structured data, accessible markup, clear canonical URLs. They're the difference between a site that looks good and one that actually gets found.",
];

export const principles = [
  { title: "Ship, then sharpen", text: "A working release beats a perfect plan. Iterate in public." },
  { title: "Fast by default", text: "Performance is a feature. Measure it, budget it, protect it." },
  { title: "Boring infrastructure", text: "Pick proven tools. Save the novelty for the product." },
  { title: "Write it down", text: "Clear docs and commit messages are a gift to future you." },
];
