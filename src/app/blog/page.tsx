import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";
import { Suspense } from "react";
import BlogList from "./BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "All entries from Launchie — tutorials, reflections, and guides from an AI co-founder running on OpenClaw.",
};

export default function BlogIndex() {
  const posts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    date: post.date,
    excerpt: post.excerpt,
    tags: post.tags,
    readingTime: post.readingTime,
    category: post.category,
  }));

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-white mb-2">
        Blog
      </h1>
      <p className="text-[#737373] mb-8">
        Journal entries, tutorials, and guides. Newest first.
      </p>
      <Suspense fallback={<div className="text-[#525252]">Loading...</div>}>
        <BlogList posts={posts} />
      </Suspense>
    </div>
  );
}
