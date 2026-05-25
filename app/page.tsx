import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroBanner from '@/components/HeroBanner';
import WorkflowPanel from '@/components/WorkflowPanel';
import FeatureCard from '@/components/FeatureCard';
import TrustGrid from '@/components/TrustGrid';
import CTABanner from '@/components/CTABanner';
import {
  IconFolderSearch,
  IconLayoutDashboard,
  IconUsers,
  IconClipboardList,
} from '@tabler/icons-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'TaxBuddy — Agentic T1 Filing for Canadian Accounting Firms',
  description:
    'TaxBuddy automates T1 preparation for Canadian tax firms. Clients upload documents, AI agents classify and extract the data, practitioners review and approve with full audit trails.',
  keywords: ['Canadian tax firms', 'agentic T1 filing', 'AI tax preparation', 'T1 software', 'CRA tax software'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'TaxBuddy — Agentic T1 Filing for Canadian Accounting Firms',
    description:
      'TaxBuddy automates T1 preparation for Canadian tax firms. Clients upload documents, AI agents classify and extract the data, practitioners review and approve with full audit trails.',
    url: '/',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TaxBuddy — Agentic T1 Filing for Canadian Accounting Firms',
    description:
      'TaxBuddy automates T1 preparation for Canadian tax firms. Clients upload documents, AI agents classify and extract the data, practitioners review and approve with full audit trails.',
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
    icon: IconFolderSearch,
    title: 'Document discovery',
    description:
      'Clients upload files through a secure portal. Every slip is found, classified, and confirmed automatically. Nothing gets lost.',
  },
  {
    icon: IconLayoutDashboard,
    title: 'Your dashboard',
    description:
      'A firm-level view of every client\'s status, outstanding items, and progress through the pipeline. One place for everything.',
  },
  {
    icon: IconUsers,
    title: 'Client portal',
    description:
      'Clients see exactly what was received and what is still needed. Fewer follow-up calls. Fewer missed slips.',
  },
  {
    icon: IconClipboardList,
    title: 'Full audit trail',
    description:
      'Every extraction, classification, and calculation is logged and cited back to its source. Reviewable at any time.',
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
            <p className="label" style={{ marginBottom: 16 }}>What you get</p>
            <h2 className={styles.featuresHeadline}>Everything your firm needs. Nothing it doesn&apos;t.</h2>
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
                &ldquo;Tax season is brutal. Not because of the work itself, but because of all the
                coordination. Tracking down documents, chasing clients, making sure nothing slips
                through. The actual returns are the easy part.&rdquo;
              </p>
              <footer className={styles.quoteAttrib}>
                Canadian accounting firm
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
