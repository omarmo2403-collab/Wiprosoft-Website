import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/sections/home/CTABanner";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tips, and stories from our team on web development, digital marketing, and branding.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        label="Our Blog"
        title="Blog"
        description="Insights, tips, and stories from our team on web development, digital marketing, and branding."
      />

      {/* Blog Posts Grid */}
      <section className="pb-16">
        <SectionWrapper>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="h-full overflow-hidden transition-transform hover:-translate-y-1">
                  {/* Color Placeholder */}
                  <div
                    className="flex aspect-video items-center justify-center rounded-xl"
                    style={{ backgroundColor: post.color }}
                  >
                    <span className="px-4 text-center text-lg font-semibold text-white">
                      {post.title}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-4 space-y-3">
                    <Badge>{post.category}</Badge>
                    <h3 className="text-lg font-semibold text-secondary">
                      {post.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-text-muted">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-text-muted">
                      <span>{formatDate(post.date)}</span>
                      <span>&middot;</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      </section>

      <CTABanner />
    </>
  );
}
