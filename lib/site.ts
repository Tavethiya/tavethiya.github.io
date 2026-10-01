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
  location: "India", // TODO: confirm or change
  email: "mtavethiya12@gmail.com",
  social: {
    github: "https://github.com/Tavethiya",
    linkedin: "https://linkedin.com/in/mahesh-tavethiya",
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
 * TODO: Replace these placeholders with your real roles.
 * Keep bullets outcome-focused: what shipped, what improved, by how much.
 */
export const experience: Experience[] = [
  {
    company: "Company Name", // TODO
    role: "Senior Full-Stack Engineer", // TODO
    period: "2023 - Present", // TODO
    location: "Remote", // TODO
    summary:
      "Lead engineer on SaaS products built with Next.js and .NET, owning delivery from architecture to deployment.",
    bullets: [
      "Architected and shipped a multi-tenant SaaS platform on Next.js, Node.js and PostgreSQL.",
      "Cut page load times by over 50% through server rendering, image optimisation and caching.",
      "Set up CI/CD on GitHub Actions with Docker deployments to Azure.",
    ],
    stack: ["Next.js", "TypeScript", ".NET", "PostgreSQL", "Azure"],
  },
  {
    company: "Company Name", // TODO
    role: "Full-Stack Developer", // TODO
    period: "2020 - 2023", // TODO
    location: "Remote", // TODO
    summary:
      "Built and maintained client web applications across React, Angular and Node.js stacks.",
    bullets: [
      "Delivered MVPs for early-stage startups, taking ideas from wireframe to launch.",
      "Built REST and GraphQL APIs on Node.js and Express backed by MongoDB and MySQL.",
      "Containerised services with Docker and deployed on AWS.",
    ],
    stack: ["React", "Angular", "Node.js", "MongoDB", "AWS"],
  },
  {
    company: "Company Name", // TODO
    role: "Software Developer", // TODO
    period: "2018 - 2020", // TODO
    location: "India", // TODO
    summary: "Developed web applications and internal tools with .NET and JavaScript.",
    bullets: [
      "Built ASP.NET Core services and SQL Server data layers for business applications.",
      "Introduced automated testing and code review practices to the team.",
    ],
    stack: [".NET", "ASP.NET Core", "MSSQL", "JavaScript"],
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
