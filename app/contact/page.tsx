import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact Us — TaxBuddy',
  description:
    "Get in touch with TaxBuddy. Book a demo, ask a general question, explore a partnership, or reach out for press.",
  keywords: ['Canadian tax software', 'T1 filing', 'CRA tax software'],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us — TaxBuddy',
    description:
      "Get in touch with TaxBuddy. Book a demo, ask a general question, explore a partnership, or reach out for press.",
    url: '/contact',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us — TaxBuddy',
    description:
      "Get in touch with TaxBuddy. Book a demo, ask a general question, explore a partnership, or reach out for press.",
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
                <h1 className={styles.headline}>Get in touch</h1>
                <p className={styles.subhead}>
                  We are here for demo bookings, general questions, partnerships, and press.
                  Pick a topic and we will get back to you within one business day.
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
