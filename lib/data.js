// Single source of truth for all section content.

// ---- Marquee (only sites with a real screenshot in /assets/shots) ----
export const marqueeProjects = [
  ["https://plexusaviation.in", "Plexus Aviation"],
  ["https://iba.ac.in", "IBA Academy"],
  ["https://arhamengg.com", "Arham Engg"],
  ["https://dastoorglass.com", "Dastoor Glass"],
  ["https://degree.dbuglobal.com", "DBU Global"],
  ["https://rohojewels.com", "Roho Jewels"],
  ["https://pynkworld.com", "Pynk World"],
  ["https://bludiamonds.com", "Blu Diamonds"],
  ["https://skyatransdermic.com", "Skya Transdermic"],
  ["https://goodhealthalways.in", "Good Health"],
  ["https://makeplans.in", "Make Plans"],
  ["https://elegity.com", "Elegity"],
];

// ---- Stats band ----
export const stats = [
  { count: 40, suffix: "+", label: "Live Projects" },
  { count: 7, suffix: "+", label: "Industries Served" },
  { count: 5, suffix: "+", label: "Years Building" },
  { count: 100, suffix: "%", label: "Client Focus" },
];

// ---- Stack / services ----
export const stackCards = [
  {
    num: "01",
    icon: "layout-dashboard",
    accent: "#FFB703",
    title: "Frontend",
    desc: "Pixel-perfect, accessible interfaces that load fast and feel alive.",
    pills: ["Next.js", "React", "TypeScript", "Tailwind", "HTML5", "CSS3"],
  },
  {
    num: "02",
    icon: "server",
    accent: "#FB8500",
    title: "Backend",
    desc: "Robust APIs and data layers built to scale without breaking a sweat.",
    pills: ["PHP", "Laravel", "CodeIgniter", "Strapi", "Node.js", "MySQL", "REST APIs"],
  },
  {
    num: "03",
    icon: "shopping-bag",
    accent: "#EA5252",
    title: "CMS & E-Commerce",
    desc: "Storefronts and content systems clients can actually run themselves.",
    pills: ["Shopify", "WordPress", "WooCommerce", "Elementor", "ACF", "Liquid"],
  },
  {
    num: "04",
    icon: "gauge",
    accent: "#5B7E3C",
    title: "Performance",
    desc: "SEO-optimized, performance-first builds tuned for speed and reliability.",
    pills: ["Core Web Vitals", "Lighthouse", "SEO", "Caching", "CDN"],
  },
  {
    num: "05",
    icon: "sparkles",
    accent: "#FFB703",
    title: "Quality",
    desc: "Clean, scalable, maintainable codebases — handed off documented and ready, from first commit to deployment.",
    pills: ["Clean Code", "Git", "Documentation", "Maintainable", "Scalable"],
    wide: true,
  },
];

// ---- About floating decor + heading word-shots ----
export const aboutDecor = [
  { pos: "tl", parallax: 0.05, site: "https://plexusaviation.in", label: "Plexus Aviation" },
  { pos: "bl", parallax: 0.09, site: "https://rohojewels.com", label: "Roho Jewels" },
  { pos: "tr", parallax: 0.07, site: "https://dastoorglass.com", label: "Dastoor Glass" },
  { pos: "br", parallax: 0.11, site: "https://skyatransdermic.com", label: "Skya" },
];

export const aboutWordShots = [
  "https://goodhealthalways.in",
  "https://pynkworld.com",
  "https://makeplans.in",
];

export const aboutParagraph =
  "As a full-stack developer based in India, I bridge the gap between design and engineering — delivering everything from blazing-fast Shopify stores to custom Next.js platforms. I care about results, not just deliverables.";

// ---- Projects (sticky stack) ----
export const projects = [
  {
    num: "01",
    color: "green",
    accent: "#5B7E3C",
    count: "11 Projects",
    title: "Services & Consulting",
    pills: [
      { name: "Plexus Aviation", href: "https://plexusaviation.in" },
      { name: "IBA Academy", href: "https://iba.ac.in" },
      { name: "Arham Engg", href: "https://arhamengg.com" },
      { name: "DigiCare" },
      { name: "+7 More" },
    ],
    shots: [
      { site: "https://iba.ac.in", size: "sm" },
      { site: "https://arhamengg.com", size: "sm" },
      { site: "https://plexusaviation.in", size: "lg" },
    ],
  },
  {
    num: "02",
    color: "red",
    accent: "#EA5252",
    count: "7 Projects",
    title: "Beauty & Wellness",
    pills: [
      { name: "Skya Transdermic", href: "https://skyatransdermic.com" },
      { name: "Wild Ferns" },
      { name: "Good Health", href: "https://goodhealthalways.in" },
      { name: "+4 More" },
    ],
    shots: [
      { site: "https://elegity.com", size: "sm" },
      { site: "https://skyatransdermic.com", size: "sm" },
      { site: "https://goodhealthalways.in", size: "lg" },
    ],
  },
  {
    num: "03",
    color: "orange",
    accent: "#FB8500",
    count: "8 Projects",
    title: "Real Estate & Spaces",
    pills: [
      { name: "Dosti Thane" },
      { name: "Dastoor Glass", href: "https://dastoorglass.com" },
      { name: "DBU Global", href: "https://degree.dbuglobal.com" },
      { name: "+5 More" },
    ],
    shots: [
      { site: "https://makeplans.in", size: "sm" },
      { site: "https://degree.dbuglobal.com", size: "sm" },
      { site: "https://dastoorglass.com", size: "lg" },
    ],
  },
  {
    num: "04",
    color: "coral",
    accent: "#FF6B5E",
    count: "6 Projects",
    title: "Fashion & Jewellery",
    pills: [
      { name: "Roho Jewels", href: "https://rohojewels.com" },
      { name: "Pynk World", href: "https://pynkworld.com" },
      { name: "Blu Diamonds", href: "https://bludiamonds.com" },
      { name: "+3 More" },
    ],
    shots: [
      { site: "https://pynkworld.com", size: "sm" },
      { site: "https://bludiamonds.com", size: "sm" },
      { site: "https://rohojewels.com", size: "lg" },
    ],
  },
];

// ---- Archive directory ----
export const archive = [
  {
    num: "01",
    site: "https://plexusaviation.in",
    title: "Services & Consulting",
    bg: "SERVICES",
    pills: [
      { name: "Plexus Aviation", href: "https://plexusaviation.in" },
      { name: "IBA Academy", href: "https://iba.ac.in" },
      { name: "Arham Engg", href: "https://arhamengg.com" },
      { name: "DigiCare" },
      { name: "+ 7 More" },
    ],
  },
  {
    num: "02",
    site: "https://dastoorglass.com",
    title: "Real Estate & Spaces",
    bg: "ESTATE",
    pills: [
      { name: "Dosti Thane" },
      { name: "Dastoor Glass", href: "https://dastoorglass.com" },
      { name: "DBU Global", href: "https://degree.dbuglobal.com" },
      { name: "+ 5 More" },
    ],
  },
  {
    num: "03",
    site: "https://rohojewels.com",
    title: "Fashion & Jewellery",
    bg: "FASHION",
    pills: [
      { name: "Roho Jewels", href: "https://rohojewels.com" },
      { name: "Pynk World", href: "https://pynkworld.com" },
      { name: "Blu Diamonds", href: "https://bludiamonds.com" },
      { name: "+ 3 More" },
    ],
  },
  {
    num: "04",
    site: "https://skyatransdermic.com",
    title: "Beauty & Wellness",
    bg: "WELLNESS",
    pills: [
      { name: "Skya Transdermic", href: "https://skyatransdermic.com" },
      { name: "Wild Ferns" },
      { name: "Good Health", href: "https://goodhealthalways.in" },
      { name: "+ 4 More" },
    ],
  },
  {
    num: "05",
    site: "https://makeplans.in",
    title: "Events & Media",
    bg: "MEDIA",
    last: true,
    pills: [
      { name: "Make Plans", href: "https://makeplans.in" },
      { name: "Elegity", href: "https://elegity.com" },
      { name: "The Super Eats" },
      { name: "+ 4 More" },
    ],
  },
];

export const EMAIL = "sujatakhedekar99@gmail.com";
