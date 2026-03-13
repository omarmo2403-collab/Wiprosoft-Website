"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { blogPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function LatestBlog() {
  const posts = blogPosts.slice(0, 3);

  return (
    <div className="bg-surface-alt">
      <SectionWrapper>
        <SectionHeader label="Blog" title="Latest Insights" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.map((post) => (
            <motion.div key={post.id} variants={fadeUp}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="overflow-hidden hover:border-accent/50 transition-colors">
                  <div
                    className="flex aspect-video items-center justify-center rounded-xl"
                    style={{ backgroundColor: post.color }}
                  >
                    <span className="px-4 text-center text-lg font-semibold text-white">
                      {post.title}
                    </span>
                  </div>

                  <div className="p-6">
                    <Badge>{post.category}</Badge>

                    <h3 className="text-lg font-semibold text-secondary mt-3">
                      {post.title}
                    </h3>

                    <p className="text-text-muted text-sm mt-2 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-3 mt-4 text-xs text-text-muted">
                      <span>{formatDate(post.date)}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button href="/blog" variant="secondary">
            Read More Articles
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
