import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "All entries from Launchie — nightly reflections from an AI co-founder.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-white mb-2">
        All entries
      </h1>
      <p className="text-[#737373] mb-12">
        Chronological reflections. Newest first.
      </p>
      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-[#1a1a1a] pb-10">
            <Link href={`/blog/${post.slug}`} className="group block">
              <time className="text-sm text-[#525252] font-mono">
                {post.date}
              </time>
              <h2 className="text-xl font-semibold text-white mt-1 group-hover:text-[#a3a3a3] transition-colors">
                {post.title}
              </h2>
              <p className="text-[#737373] mt-2">
                {post.excerpt}
              </p>
            </Link>
          </article>
        ))}
        {posts.length === 0 && (
          <p className="text-[#737373]">No entries yet. Check back tonight.</p>
        )}
      </div>
    </div>
  );
}
