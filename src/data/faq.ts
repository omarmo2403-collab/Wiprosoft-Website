export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "How long does it take to build a website?",
    answer: "Project timelines vary depending on complexity. A standard business website typically takes 4-6 weeks, while more complex web applications or e-commerce platforms can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    id: "2",
    question: "How much does a website cost?",
    answer: "Our projects start from £2,500 for a standard business website. E-commerce solutions start from £5,000, and custom web applications from £8,000. Every project is unique, so we provide tailored quotes after understanding your specific requirements.",
  },
  {
    id: "3",
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, we offer comprehensive maintenance packages that include regular updates, security monitoring, performance optimisation, and content updates. Our support plans start from £150/month and ensure your website stays secure and performing at its best.",
  },
  {
    id: "4",
    question: "Can you help improve our search engine rankings?",
    answer: "Absolutely. SEO is one of our core services. We offer both on-page and off-page optimisation, technical SEO audits, content strategy, and ongoing SEO management. Most clients see significant ranking improvements within 3-6 months.",
  },
  {
    id: "5",
    question: "Do you work with businesses outside of London?",
    answer: "Yes, we work with clients across the UK and internationally. While we're based in London, most of our collaboration happens remotely. We use video calls, project management tools, and regular updates to keep projects on track regardless of location.",
  },
  {
    id: "6",
    question: "What technologies do you use?",
    answer: "We work with a wide range of modern technologies including React, Next.js, TypeScript, Node.js, WordPress, Shopify, and more. We choose the best technology stack for each project based on your specific requirements, budget, and long-term goals.",
  },
];
