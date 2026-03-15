export type ProjectCategory = "web-development" | "digital-marketing" | "branding-design";

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  image: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Skill Matters",
    slug: "skill-matters",
    category: "web-development",
    description: "A comprehensive learning platform connecting professionals with expert-led training courses across technology and business skills.",
    tags: ["Next.js", "UI/UX", "E-Learning"],
    image: "/images/portfolio/skill-matters.jpg",
    color: "#03A3B2",
  },
  {
    id: "2",
    title: "JMA HR Consulting",
    slug: "jma-hr",
    category: "web-development",
    description: "Corporate website for a leading HR consultancy firm, featuring service showcases and client testimonial integration.",
    tags: ["WordPress", "Corporate", "HR"],
    image: "/images/portfolio/jma-hr.jpg",
    color: "#172F56",
  },
  {
    id: "3",
    title: "Interior Finish London",
    slug: "interior-finish",
    category: "branding-design",
    description: "Brand identity and portfolio website for a premium London-based interior design studio.",
    tags: ["Branding", "Portfolio", "Design"],
    image: "/images/portfolio/interior-finish.jpg",
    color: "#03A3B2",
  },
  {
    id: "4",
    title: "SPRK Music",
    slug: "sprk-music",
    category: "digital-marketing",
    description: "Digital marketing campaign and website for an independent music label, driving streaming numbers and artist visibility.",
    tags: ["Marketing", "Music", "Social Media"],
    image: "/images/portfolio/sprk-music.jpg",
    color: "#172F56",
  },
  {
    id: "5",
    title: "Car Door Mirrors",
    slug: "car-door-mirrors",
    category: "web-development",
    description: "E-commerce platform for automotive parts retailer with advanced search, filtering, and secure checkout.",
    tags: ["E-Commerce", "Automotive", "SEO"],
    image: "/images/portfolio/car-door-mirrors.png",
    color: "#03A3B2",
  },
  {
    id: "6",
    title: "Burgernomics",
    slug: "burgernomics",
    category: "branding-design",
    description: "Fun, bold branding and website for a gourmet burger restaurant chain expanding across South London.",
    tags: ["Branding", "Restaurant", "Web Design"],
    image: "/images/portfolio/burgernomics.jpg",
    color: "#172F56",
  },
];
