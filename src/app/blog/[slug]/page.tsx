import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderMarkdown(content: string) {
  return content.split("\n\n").map((block, index) => {
    // Handle ## headings
    if (block.startsWith("## ")) {
      const headingText = block.slice(3);
      return (
        <h2
          key={index}
          className="mt-10 mb-4 text-2xl font-bold text-secondary"
        >
          {headingText}
        </h2>
      );
    }

    // Replace **text** with <strong>text</strong> for inline bold
    const html = block.replace(
      /\*\*(.*?)\*\*/g,
      "<strong class='text-secondary font-semibold'>$1</strong>"
    );

    return (
      <p
        key={index}
        className="mb-4 leading-relaxed text-text-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  return (
    <>
      <article className="pt-32 pb-16">
        <SectionWrapper className="max-w-3xl">
          {/* Header */}
          <header className="mb-10">
            <Badge>{post.category}</Badge>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-secondary sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center gap-4 text-sm text-text-muted">
              <span>{post.author}</span>
              <span>&middot;</span>
              <span>{formatDate(post.date)}</span>
              <span>&middot;</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Featured Image Placeholder */}
          <div
            className="mb-10 flex aspect-video items-center justify-center rounded-2xl"
            style={{ backgroundColor: post.color }}
          >
            <span className="px-6 text-center text-xl font-semibold text-white">
              {post.title}
            </span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {renderMarkdown(post.content)}
          </div>
        </SectionWrapper>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-surface-alt">
          <SectionWrapper className="max-w-3xl">
            <h2 className="mb-8 text-2xl font-bold text-secondary">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                >
                  <Card className="h-full overflow-hidden transition-transform hover:-translate-y-1">
                    <div
                      className="flex aspect-video items-center justify-center rounded-xl"
                      style={{ backgroundColor: relatedPost.color }}
                    >
                      <span className="px-4 text-center text-lg font-semibold text-white">
                        {relatedPost.title}
                      </span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <Badge>{relatedPost.category}</Badge>
                      <h3 className="text-lg font-semibold text-secondary">
                        {relatedPost.title}
                      </h3>
                      <p className="line-clamp-2 text-sm text-text-muted">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-text-muted">
                        <span>{formatDate(relatedPost.date)}</span>
                        <span>&middot;</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </SectionWrapper>
        </div>
      )}
    </>
  );
}
