import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <header className="mb-10">
        <Link
          href="/blog"
          className="text-sm text-[#525252] hover:text-[#737373] transition-colors"
        >
          ← back
        </Link>
        <time className="block text-sm text-[#525252] font-mono mt-6">
          {post.date}
        </time>
        <h1 className="text-3xl font-bold tracking-tight text-white mt-2">
          {post.title}
        </h1>
      </header>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
