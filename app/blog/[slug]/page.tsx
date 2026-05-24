import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { getPost, getPostSlugs } from '@/lib/blog';
import styles from './page.module.css';

export const dynamicParams = false;

export function generateStaticParams(): Array<{ slug: string }> {
  const slugs = getPostSlugs();
  // output: 'export' requires at least one static param — use a placeholder
  // when no posts exist yet. The page calls notFound() for the placeholder.
  return slugs.length > 0 ? slugs.map((slug) => ({ slug })) : [{ slug: '_placeholder' }];
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  if (!getPostSlugs().includes(slug)) return {};
  const post = await getPost(slug);
  return {
    title: `${post.title} — TaxBuddy`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: `${post.title} — TaxBuddy`,
      description: post.excerpt,
      url: `/blog/${slug}`,
      images: [{ url: '/og-default.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} — TaxBuddy`,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (!getPostSlugs().includes(slug)) notFound();
  const post = await getPost(slug);

  return (
    <>
      <NavBar />
      <main>
        <article className={`section ${styles.article}`}>
          <div className="container">
            <div className={styles.header}>
              <p className="label" style={{ marginBottom: 12 }}>{post.category}</p>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.date}>{post.date}</p>
            </div>
            <div
              className={styles.prose}
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
