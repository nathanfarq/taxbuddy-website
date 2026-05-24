import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Book a Demo — TaxBuddy',
  description:
    "Book a 15-minute demo to see TaxBuddy's T1 filing automation in action. We show your workflow, not a generic pitch.",
  keywords: ['Canadian tax software', 'T1 filing', 'CRA tax software'],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Book a Demo — TaxBuddy',
    description:
      "Book a 15-minute demo to see TaxBuddy's T1 filing automation in action. We show your workflow, not a generic pitch.",
    url: '/contact',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Demo — TaxBuddy',
    description:
      "Book a 15-minute demo to see TaxBuddy's T1 filing automation in action. We show your workflow, not a generic pitch.",
  },
};

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main>
        <section className={`section ${styles.page}`}>
          <div className="container">
            <div className={styles.layout}>
              <div className={styles.left}>
                <p className="label" style={{ marginBottom: 16 }}>Get in touch</p>
                <h1 className={styles.headline}>Book a demo</h1>
                <p className={styles.subhead}>
                  We&apos;ll walk through your firm&apos;s workflow — intake to filing — and show
                  you exactly how TaxBuddy fits in. Fifteen minutes, no slides.
                </p>
                <div className={styles.directEmail}>
                  <p className={styles.directLabel}>Or email us directly</p>
                  <a href="mailto:nathan@taxbuddy.online" className={styles.emailLink}>
                    nathan@taxbuddy.online
                  </a>
                </div>
              </div>
              <div className={styles.right}>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
