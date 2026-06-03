export const siteConfig = {
  name: "FTS LLC",
  tagline: "Precision Infrastructure & Digital Engineering",
  url: "https://fts.gg",
  location: "Reno, Nevada, USA",
  email: "support@fts.gg",
  phoneDisplay: "843-240-3823",
  phoneTel: "+18432403823",
  legal: {
    entity: "FTS LLC",
    state: "Nevada",
    structure: "Nevada Limited-Liability Company",
    businessId: "NV20253501064",
    licenseExpiration: "12/31/2026",
  },
} as const;

export const navItems = [
  { label: "Mission", href: "#mission" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "CTRL", href: "#ctrl" },
  { label: "Advantage", href: "#advantage" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroContent = {
  headline: "Infrastructure that stays online when it matters",
  subhead:
    "FTS LLC is a specialized software development and managed infrastructure firm based in Nevada. We bridge enterprise-grade cloud hosting and everyday developer needs — from high-traffic retail drops to your first production deploy.",
  cta: "Talk to engineering",
};

export const missionContent = {
  title: "Our mission",
  body: [
    "We approach digital architecture with military discipline. The goal is simple: zero downtime, transparent pricing, and speed you can feel.",
    "We do not resell generic hosting templates. We engineer custom deployment pipelines and scalable environments built to survive harsh traffic without breaking a sweat.",
  ],
};

export const capabilitiesContent = {
  title: "Core capabilities",
  ecommerce: {
    title: "Bespoke e-commerce engineering",
    description:
      "Premium, mobile-first storefronts tailored for high-volume sales — not sluggish template sites.",
    bullets: [
      "Custom Shopify themes and bespoke front-ends tuned for sub-1.5s load times",
      "Brand-led UX so your digital presence matches the quality of what you sell",
    ],
  },
  ctrl: {
    title: "The CTRL platform",
    description:
      "The backbone of our hosting operations: a proprietary, high-availability orchestration engine.",
    bullets: [
      "Advanced containerization with edge-aware delivery",
      "Automatic load balancing, hardware failovers, and security hardening",
      "You ship code; we manage scale, failover, and resilience",
    ],
  },
};

export const advantageContent = {
  title: "The FTS advantage",
  items: [
    {
      title: "Predictable economics",
      description:
        "Fixed-tier pricing so you know what infrastructure costs every month — no surprise cloud invoices.",
    },
    {
      title: "Resilience by default",
      description:
        "Automatic failover and redundancy. If hardware fails, your application keeps running.",
    },
    {
      title: "Veteran-owned & operated",
      description:
        "Built on integrity, accountability, and mission accomplishment. We offer 10% off all services and retainers for active-duty military, veterans, and military-owned businesses.",
    },
  ],
};

export const contactContent = {
  title: "Ready to upgrade your stack?",
  subtitle:
    "Whether you need a resilient hosting foundation or a storefront built for scale, we are here to help.",
};

export const founderContent = {
  eyebrow: "Founder",
  title: "The person behind FTS",
  name: "Dimitri Shepherd",
  role: "Founder & Owner",
  bio: "When your initials are DNS, you were always going to end up in tech.",
  image: {
    src: "/dimitri.png",
    alt: "Portrait of Dimitri Shepherd",
  },
  links: [
    {
      label: "dimitri.one",
      href: "https://dimitri.one",
      icon: "globe",
      external: true,
    },
    {
      label: "github.com/DarkerMatter",
      href: "https://github.com/DarkerMatter",
      icon: "github",
      external: true,
    },
    {
      label: "support@fts.gg",
      href: "mailto:support@fts.gg",
      icon: "mail",
      external: false,
    },
  ],
} as const;
