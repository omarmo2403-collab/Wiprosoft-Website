import type { Metadata } from "next";
import { Lightbulb, Shield, Users, Target } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { CTABanner } from "@/components/sections/home/CTABanner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Wiprosoft's team and mission. We are a group of digital innovators dedicated to building exceptional digital experiences.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of the curve, embracing new technologies and approaches to deliver cutting-edge solutions.",
  },
  {
    icon: Shield,
    title: "Quality",
    description:
      "We hold ourselves to the highest standards, ensuring every project meets rigorous quality benchmarks.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients, treating every project as a true partnership built on transparency and trust.",
  },
  {
    icon: Target,
    title: "Results",
    description:
      "We focus on measurable outcomes, delivering solutions that drive real business growth and impact.",
  },
];

const team = [
  { name: "Alex Mitchell", role: "CEO", initials: "AM" },
  { name: "Sarah Chen", role: "Creative Director", initials: "SC" },
  { name: "James Wilson", role: "Lead Developer", initials: "JW" },
  { name: "Priya Patel", role: "Marketing Director", initials: "PP" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title="We're a Team of Digital Innovators"
        description="We combine creativity, technology, and strategy to help businesses thrive in the digital landscape."
      />

      {/* Our Story */}
      <div className="bg-surface-alt">
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                align="left"
                label="Our Story"
                title="Building Digital Excellence Since 2018"
              />
              <p className="text-text-body mt-6">
                Wiprosoft was founded with a simple mission: to help businesses
                unlock their full potential through innovative digital solutions.
                What started as a small team of passionate developers has grown
                into a full-service digital agency serving clients across the
                globe.
              </p>
              <p className="text-text-body mt-4">
                Over the years, we&apos;ve partnered with startups, SMEs, and
                enterprises alike, delivering tailor-made solutions that drive
                measurable results. Our commitment to quality, transparency, and
                client success remains at the heart of everything we do.
              </p>
            </div>
            <img
              src="/images/about/cover-image.png"
              alt="Wiprosoft team and office"
              className="aspect-square w-full rounded-2xl object-cover"
            />
          </div>
        </SectionWrapper>
      </div>

      {/* Values */}
      <SectionWrapper>
        <SectionHeader label="Our Values" title="What Drives Us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <Card key={value.title}>
              <value.icon className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-secondary">
                {value.title}
              </h3>
              <p className="text-text-body mt-2">{value.description}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Team */}
      <div className="bg-surface-alt">
        <SectionWrapper>
          <SectionHeader label="Our Team" title="Meet the Experts" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name}>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-accent/15 mx-auto flex items-center justify-center">
                    <span className="text-accent font-semibold text-lg">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="text-secondary font-semibold mt-4">
                    {member.name}
                  </h3>
                  <p className="text-text-muted text-sm mt-1">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </SectionWrapper>
      </div>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
