import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Blog — TaxBuddy',
  description: 'Tax insights, product updates, and news from TaxBuddy.',
};

export default function BlogPage() {
  return (
    <>
      <NavBar />
      <main>
        <section className={`section ${styles.page}`}>
          <div className="container">
            <p className="label" style={{ marginBottom: 16 }}>Blog</p>
            <h1 className={styles.headline}>Insights from TaxBuddy</h1>
            <p className={styles.subhead}>
              Tax season insights, product updates, and news. Coming soon.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
