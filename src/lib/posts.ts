import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readingTime: number;
  keywords: string[];
  image: string | null;
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 230;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        excerpt: data.excerpt || "",
        content,
        tags: data.tags || [],
        readingTime: data.readingTime || calculateReadingTime(content),
        keywords: data.keywords || [],
        image: data.image || null,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processed = await remark().use(html).process(content);
  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    content: processed.toString(),
    tags: data.tags || [],
    readingTime: data.readingTime || calculateReadingTime(content),
    keywords: data.keywords || [],
    image: data.image || null,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllTags(): { tag: string; count: number }[] {
  const posts = getAllPosts();
  const tagMap: Record<string, number> = {};
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tagMap[tag] = (tagMap[tag] || 0) + 1;
    });
  });
  return Object.entries(tagMap)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}
