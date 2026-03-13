import { Code, BarChart3, Palette } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SubService {
  name: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: LucideIcon;
  subServices: SubService[];
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
    color: "#03A3B2",
    icon: Code,
    subServices: [
      { name: "Custom Website Design", description: "Bespoke designs tailored to your brand identity" },
      { name: "E-Commerce Solutions", description: "Scalable online stores with secure payment integration" },
      { name: "Web Applications", description: "Complex web apps with modern frameworks" },
      { name: "WordPress Development", description: "Custom themes and plugins for WordPress" },
      { name: "Website Maintenance", description: "Ongoing support, updates, and security patches" },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that increase visibility, drive traffic, and convert visitors into customers.",
    color: "#172F56",
    icon: BarChart3,
    subServices: [
      { name: "Search Engine Optimisation", description: "On-page and off-page SEO to improve rankings" },
      { name: "Pay-Per-Click Advertising", description: "Google Ads and social media advertising campaigns" },
      { name: "Social Media Marketing", description: "Content strategy and community management" },
      { name: "Email Marketing", description: "Automated campaigns that nurture and convert leads" },
      { name: "Content Marketing", description: "Blog posts, articles, and content that engages your audience" },
    ],
  },
  {
    id: "branding-design",
    title: "Branding & Design",
    description: "Creative branding solutions that establish a strong visual identity and make your business stand out.",
    color: "#03A3B2",
    icon: Palette,
    subServices: [
      { name: "Brand Identity", description: "Logo design, color palettes, and brand guidelines" },
      { name: "UI/UX Design", description: "User-centered design for digital products" },
      { name: "Graphic Design", description: "Marketing materials, social media graphics, and more" },
      { name: "Motion Graphics", description: "Animated content for web and social media" },
    ],
  },
];
