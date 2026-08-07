export const projects = [
  {
    slug: "pawsnest",
    name: "PawsNest",
    image: "/pawsnest.png",
    shortDescription:
      "A pet adoption platform connecting adopters with pets available nearby.",
    description:
      "PawsNest is a full-stack pet adoption platform where users can browse pets available for adoption — dogs, cats, birds, rabbits, and more — view detailed profiles, and submit adoption requests. Anyone can list their own pet for adoption, and pet owners can review, accept, or deny incoming requests. Adopters can track the status of their own requests from a personal dashboard.",
    techStack: ["Next.js", "MongoDB", "Better Auth", "Express", "Tailwind CSS"],
    category: "Full Stack",
    liveLink: "https://pawsnest.vercel.app",
    githubLink: "https://github.com/saadmannur/PawsNest",
    challenges:
      "Designing a request/response workflow between two different user roles — pet owners and adopters — so each side always sees accurate, up-to-date status without conflicting actions.",
    improvements:
      "Adding real-time chat between adopters and pet owners, plus notifications for request status changes.",
    featured: true,
  },

  {
    slug: "life-sizzle",
    name: "Life Sizzle",
    image: "/life-sizzle.png",
    shortDescription:
      "A community platform for preserving and sharing personal life lessons.",
    description:
      "Life Sizzle helps people capture what they've learned in life so it isn't forgotten. Users write down personal lessons, tag them by category and emotional tone, and choose to keep them private or share them publicly. The community can browse, like, save, and comment on shared lessons, and each user gets a personal dashboard with saved favorites and activity stats. A separate admin panel handles content moderation, user management, and platform-wide analytics, with a Stripe-based premium tier unlocking extra access.",
    techStack: ["Next.js", "MongoDB", "Better Auth", "Stripe", "Express", "Tailwind CSS"],
    category: "Full Stack",
    liveLink: "https://life-sizzle.vercel.app",
    githubLink: "https://github.com/saadmannur/life-sizzle",
    challenges:
      "Building two genuinely different experiences in one app — a public community feed and a full admin moderation dashboard — meant carefully structuring auth roles and access control so admin actions stayed completely separate from regular user permissions.",
    improvements:
      "Adding real-time notifications for comments and likes, and expanding the analytics dashboard with deeper engagement trends.",
    featured: true,
  },
  
  {
    slug: "royals-books",
    name: "Royals Books",
    image: "/royals-books.png",
    shortDescription:
      "A book library platform with searchable listings and author details.",
    description:
      "Royals Books is a library-style web app for browsing books with detailed information, author profiles, and a searchable catalog. It includes user profile management, a promotional marquee for offers, and a contact section in the footer — built to be fully responsive across devices.",
    techStack: ["Next.js", "MongoDB", "Better Auth", "Tailwind CSS"],
    category: "Frontend",
    liveLink: "https://royals-books-assignment-8.vercel.app",
    githubLink: "https://github.com/saadmannur/royals-books-assignment-8",
    challenges:
      "Implementing fast, responsive search across a growing book catalog while keeping the UI smooth on both desktop and mobile.",
    improvements:
      "Adding user reviews and ratings for books, and a personalized recommendation section based on browsing history.",
    featured: true,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
