import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import WorkflowPanel from '@/components/WorkflowPanel';
import FeatureCard from '@/components/FeatureCard';
import TrustGrid from '@/components/TrustGrid';
import CTABanner from '@/components/CTABanner';
import {
  IconInbox,
  IconRobot,
  IconUserCheck,
} from '@tabler/icons-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'TaxBuddy — Agentic T1 Filing for Canadian Accounting Firms',
  description:
    'TaxBuddy automates T1 preparation for Canadian tax firms. Clients upload documents, AI agents extract and classify data, practitioners review and approve with full audit trails.',
  keywords: ['Canadian tax firms', 'agentic T1 filing', 'AI tax preparation', 'T1 software', 'CRA tax software'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'TaxBuddy — Agentic T1 Filing for Canadian Accounting Firms',
    description:
      'TaxBuddy automates T1 preparation for Canadian tax firms. Clients upload documents, AI agents extract and classify data, practitioners review and approve with full audit trails.',
    url: '/',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TaxBuddy — Agentic T1 Filing for Canadian Accounting Firms',
    description:
      'TaxBuddy automates T1 preparation for Canadian tax firms. Clients upload documents, AI agents extract and classify data, practitioners review and approve with full audit trails.',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TaxBuddy',
  url: 'https://taxbuddy.online',
  description: 'Agentic T1 filing software for Canadian accounting firms',
  logo: 'https://taxbuddy.online/logo.png',
} as const;

const FEATURE_CARDS = [
  {
    icon: IconInbox,
    title: 'Document intake',
    description:
      'Clients upload slips and docs through a secure portal. No more email chains and lost PDFs.',
  },
  {
    icon: IconRobot,
    title: 'AI-prepared returns',
    description:
      'Agents extract data, classify slips, populate schedules, and flag discrepancies. Full audit trail.',
  },
  {
    icon: IconUserCheck,
    title: 'You stay in control',
    description:
      'Every return goes through your review. You have decision-making authority on all deliverables.',
  },
];

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        {/* Section 1 — Hero */}
        <HeroBanner />

        {/* Section 2 — Workflow visualization */}
        <WorkflowPanel />

        {/* Section 3 — Feature cards */}
        <section className={`section ${styles.features}`}>
          <div className="container">
            <p className="label" style={{ marginBottom: 16 }}>What TaxBuddy does</p>
            <h2 className={styles.featuresHeadline}>Your expertise leads. AI handles the rest.</h2>
            <div className={styles.featureGrid}>
              {FEATURE_CARDS.map((card) => (
                <FeatureCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 — Social proof quote */}
        <section className={`section ${styles.quote}`}>
          <div className="container">
            <p className="label" style={{ marginBottom: 24, textAlign: 'center' }}>
              What we hear from firms every season
            </p>
            <blockquote className={styles.blockquote}>
              <p className={styles.quoteText}>
                &ldquo;Tax season is brutal — not because of the work itself, but because of all the
                coordination. Tracking down documents, chasing clients, making sure nothing slips
                through. The actual returns are the easy part.&rdquo;
              </p>
              <footer className={styles.quoteAttrib}>
                Canadian accounting firm, 2025 discovery interview
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Section 5 — Trust signals grid */}
        <TrustGrid />

        {/* Section 6 — Bottom CTA */}
        <CTABanner />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
