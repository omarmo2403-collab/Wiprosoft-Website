export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Managing Director",
    company: "Skill Matters",
    content: "Wiprosoft transformed our online presence completely. Our new platform has seen a 200% increase in user engagement and the feedback from our learners has been overwhelmingly positive.",
    rating: 5,
  },
  {
    id: "2",
    name: "James Anderson",
    role: "CEO",
    company: "JMA HR Consulting",
    content: "Professional, responsive, and incredibly talented. The team at Wiprosoft delivered a website that perfectly represents our brand and has significantly improved our lead generation.",
    rating: 5,
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    role: "Founder",
    company: "Interior Finish London",
    content: "The branding work Wiprosoft did for us was exceptional. They captured our aesthetic perfectly and the website they built showcases our portfolio beautifully.",
    rating: 5,
  },
  {
    id: "4",
    name: "David Chen",
    role: "Operations Manager",
    company: "Car Door Mirrors",
    content: "Our e-commerce sales have increased by 150% since launching the new site. The SEO work has put us on the first page for our key search terms. Couldn't be happier.",
    rating: 5,
  },
  {
    id: "5",
    name: "Marcus Thompson",
    role: "Creative Director",
    company: "SPRK Music",
    content: "Wiprosoft's digital marketing strategy helped us reach audiences we never thought possible. Their understanding of the music industry combined with technical expertise is unmatched.",
    rating: 5,
  },
];
