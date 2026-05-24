import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md') && !file.startsWith('_'))
    .map((file) => file.replace(/\.md$/, ''));
}

export function getPostMetas(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const { data } = matter(fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), 'utf8'));
      return {
        slug,
        title: data.title as string,
        date: data.date instanceof Date
          ? data.date.toISOString().split('T')[0]
          : String(data.date),
        excerpt: data.excerpt as string,
        category: data.category as string,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post> {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.md`), 'utf8');
  const { data, content } = matter(raw);
  const processed = await remark().use(remarkHtml).process(content);
  return {
    slug,
    title: data.title as string,
    date: data.date instanceof Date
      ? data.date.toISOString().split('T')[0]
      : String(data.date),
    excerpt: data.excerpt as string,
    category: data.category as string,
    contentHtml: processed.toString(),
  };
}
