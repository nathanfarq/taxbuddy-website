import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'How It Works — TaxBuddy',
  description:
    'A detailed look at how TaxBuddy works: client intake, AI-powered extraction and classification, and practitioner-led review and approval — with a full audit trail.',
};

export default function ProductPage() {
  return (
    <>
      <NavBar />
      <main>
        {/* Section 1 — Hero */}
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <p className="label" style={{ marginBottom: 20 }}>Product</p>
            <h1 className={styles.headline}>How TaxBuddy works</h1>
            <p className={styles.subhead}>
              Clients upload their documents, AI agents extract and classify every slip, and you
              review and approve the finished return — with a complete audit trail from intake to
              filing.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
