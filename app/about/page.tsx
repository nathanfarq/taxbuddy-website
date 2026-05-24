import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About TaxBuddy — Built for Canadian Tax Firms',
  description:
    'TaxBuddy was built by a Canadian accounting student who saw the coordination problem firsthand. Learn our mission: give Canadian accounting firms their capacity back.',
  keywords: ['Canadian tax firms', 'T1 software', 'AI tax preparation'],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About TaxBuddy — Built for Canadian Tax Firms',
    description:
      'TaxBuddy was built by a Canadian accounting student who saw the coordination problem firsthand. Learn our mission: give Canadian accounting firms their capacity back.',
    url: '/about',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About TaxBuddy — Built for Canadian Tax Firms',
    description:
      'TaxBuddy was built by a Canadian accounting student who saw the coordination problem firsthand. Learn our mission: give Canadian accounting firms their capacity back.',
  },
};

const VALUES = [
  {
    title: 'Accuracy over speed',
    description:
      'We optimize for correctness, not throughput. Every extraction and classification is verified and logged.',
  },
  {
    title: 'Practitioner authority',
    description:
      'AI prepares; you approve. Decision-making authority stays with the practitioner on every deliverable.',
  },
  {
    title: 'Canadian-first design',
    description:
      'Built for CRA forms, Canadian tax rules, and Canadian firms from the ground up — not adapted from a US product.',
  },
  {
    title: 'Transparency in AI',
    description:
      'You can see exactly how every return was prepared. Every agent action is logged, cited, and reviewable.',
  },
];

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main>
        {/* Section 1 — Founder story */}
        <section className={`section ${styles.hero}`}>
          <div className="container">
            <p className="label" style={{ marginBottom: 20 }}>Our story</p>
            <h1 className={styles.headline}>
              Built by someone who lived through tax season
            </h1>
            <div className={styles.story}>
              <p>
                I studied accounting at the University of Waterloo and spent a season working inside a
                Canadian tax firm. What I found wasn&apos;t a technology problem — it was a coordination
                problem. Tracking down documents, chasing clients for missing slips, reconciling
                information across a dozen formats. The actual tax preparation was the easy part.
              </p>
              <p>
                Practitioners are spending their most valuable hours on logistics, not on the judgment
                calls that require their expertise. TaxBuddy was built to fix that — to take everything
                before the review off the practitioner&apos;s plate.
              </p>
              <p>
                I built what I wished existed during tax season. A system that handles the intake,
                extraction, and preparation — and hands a clean, reviewed-ready return to the
                practitioner who knows what to do with it.
              </p>
              <p className={styles.attribution}>— Nathan Farquharson, Founder</p>
            </div>
          </div>
        </section>

        {/* Section 2 — Mission & Vision */}
        <section className={`section ${styles.mission}`}>
          <div className="container">
            <div className={styles.missionGrid}>
              <div className={styles.missionBlock}>
                <p className="label" style={{ marginBottom: 16 }}>Mission</p>
                <h2 className={styles.missionHeadline}>
                  Give Canadian accounting firms their capacity back
                </h2>
                <p className={styles.missionText}>
                  TaxBuddy automates T1 preparation so practitioners can focus on the work that
                  requires their expertise: client relationships, complex judgement calls, and
                  growing their practice.
                </p>
              </div>
              <div className={styles.missionBlock}>
                <p className="label" style={{ marginBottom: 16 }}>Vision</p>
                <h2 className={styles.missionHeadline}>
                  The infrastructure for Canadian tax, built for what&apos;s next
                </h2>
                <p className={styles.missionText}>
                  We&apos;re building agentic workflows that start with T1 and expand from there —
                  the foundation for how Canadian accounting firms will operate in the next decade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Values */}
        <section className={`section ${styles.values}`}>
          <div className="container">
            <p className="label" style={{ marginBottom: 16 }}>What we believe</p>
            <h2 className={styles.valuesHeadline}>Our values</h2>
            <div className={styles.valueGrid}>
              {VALUES.map((v) => (
                <div key={v.title} className={styles.valueCard}>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
