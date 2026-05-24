import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import ExpandableSection from '@/components/ExpandableSection';
import {
  IconUpload,
  IconCpu,
  IconCircleCheck,
  IconShieldLock,
  IconFingerprint,
  IconRobot,
  IconKey,
  IconCertificate,
  IconEye,
} from '@tabler/icons-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'How TaxBuddy Works — Agentic T1 Filing Software',
  description:
    "See how TaxBuddy's three-step workflow handles Canadian T1 filing: secure client intake, AI-powered CRA data extraction, and practitioner-led review with complete audit trails.",
  keywords: ['agentic T1 filing', 'AI tax preparation', 'CRA tax software', 'T1 software'],
  alternates: { canonical: '/product' },
  openGraph: {
    title: 'How TaxBuddy Works — Agentic T1 Filing Software',
    description:
      "See how TaxBuddy's three-step workflow handles Canadian T1 filing: secure client intake, AI-powered CRA data extraction, and practitioner-led review with complete audit trails.",
    url: '/product',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How TaxBuddy Works — Agentic T1 Filing Software',
    description:
      "See how TaxBuddy's three-step workflow handles Canadian T1 filing: secure client intake, AI-powered CRA data extraction, and practitioner-led review with complete audit trails.",
  },
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
        {/* Section 2 — Detailed workflow */}
        <section className={`section ${styles.workflow}`}>
          <div className="container">
            <p className="label" style={{ color: 'var(--color-accent)', marginBottom: 16 }}>
              How it works
            </p>
            <h2 className={styles.workflowHeadline}>
              Three steps. Full visibility at every stage.
            </h2>

            {/* Step 1 — Client intake */}
            <div className={styles.stepRow}>
              <div className={styles.stepText}>
                <span className={styles.stepNum}>01</span>
                <h3 className={styles.stepTitle}>Client intake</h3>
                <p className={styles.stepDesc}>
                  Clients access a secure portal and upload their tax documents — no email
                  attachments, no follow-up calls to track down missing slips.
                </p>
                <ul className={styles.stepList}>
                  <li>Guided upload flow walks clients through each document type</li>
                  <li>Accepts PDF, JPG, and PNG — scanned paper included</li>
                  <li>Automatic receipt confirmation so clients know what was received</li>
                  <li>Practitioner is notified when a client&apos;s package is complete</li>
                </ul>
              </div>
              <div className={styles.stepScreen} aria-hidden="true">
                <div className={styles.screenInner}>
                  <div className={styles.screenBar}>
                    <span className={styles.screenDot} />
                    <span className={styles.screenDot} />
                    <span className={styles.screenDot} />
                  </div>
                  <div className={styles.mockUploadZone}>
                    <IconUpload size={28} stroke={1.5} style={{ color: 'var(--color-accent)' }} />
                    <span className={styles.mockLabel}>Drop files or click to upload</span>
                    <span className={styles.mockSubLabel}>PDF · JPG · PNG</span>
                  </div>
                  <div className={styles.mockFileRow}>
                    <span className={styles.mockFile}>T4_2024.pdf</span>
                    <span className={styles.mockBadge}>Received</span>
                  </div>
                  <div className={styles.mockFileRow}>
                    <span className={styles.mockFile}>T5_Scotiabank.pdf</span>
                    <span className={styles.mockBadge}>Received</span>
                  </div>
                  <div className={styles.mockFileRow} style={{ opacity: 0.4 }}>
                    <span className={styles.mockFile}>RRSP_receipt.pdf</span>
                    <span className={styles.mockBadgePending}>Pending</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 — AI processing */}
            <div className={`${styles.stepRow} ${styles.reversed}`}>
              <div className={styles.stepScreen} aria-hidden="true">
                <div className={styles.screenInner}>
                  <div className={styles.screenBar}>
                    <span className={styles.screenDot} />
                    <span className={styles.screenDot} />
                    <span className={styles.screenDot} />
                  </div>
                  <div className={styles.mockPipeline}>
                    <div className={styles.pipelineStep} style={{ opacity: 1 }}>
                      <IconCpu size={16} stroke={1.5} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                      <span>Classify document type</span>
                      <span className={styles.pipelineDone}>✓</span>
                    </div>
                    <div className={styles.pipelineStep} style={{ opacity: 1 }}>
                      <IconCpu size={16} stroke={1.5} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                      <span>Extract field values</span>
                      <span className={styles.pipelineDone}>✓</span>
                    </div>
                    <div className={styles.pipelineStep} style={{ opacity: 1 }}>
                      <IconCpu size={16} stroke={1.5} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                      <span>Populate T1 schedules</span>
                      <span className={styles.pipelineDone}>✓</span>
                    </div>
                    <div className={styles.pipelineStep} style={{ opacity: 0.5 }}>
                      <IconCpu size={16} stroke={1.5} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
                      <span>Flag discrepancies</span>
                      <span className={styles.pipelineRunning}>•••</span>
                    </div>
                  </div>
                  <div className={styles.mockAuditLine}>
                    Line 10100 ← T4 Box 14, p. 1 — $72,400
                  </div>
                  <div className={styles.mockAuditLine}>
                    Line 12100 ← T5 Box 13, p. 1 — $840
                  </div>
                </div>
              </div>
              <div className={styles.stepText}>
                <span className={styles.stepNum}>02</span>
                <h3 className={styles.stepTitle}>AI processing</h3>
                <p className={styles.stepDesc}>
                  Agents work through every document in parallel — classifying slip types,
                  extracting values, populating T1 schedules, and flagging anything that needs a
                  closer look.
                </p>
                <ul className={styles.stepList}>
                  <li>Multi-step pipeline: classify → extract → validate → populate → flag</li>
                  <li>Each field is traced back to its source document and page number</li>
                  <li>Discrepancies and low-confidence extractions are surfaced for review</li>
                  <li>Full audit log generated automatically — no manual documentation</li>
                </ul>
              </div>
            </div>

            {/* Step 3 — Practitioner review */}
            <div className={styles.stepRow}>
              <div className={styles.stepText}>
                <span className={styles.stepNum}>03</span>
                <h3 className={styles.stepTitle}>Your review</h3>
                <p className={styles.stepDesc}>
                  You see a pre-populated return with every field sourced and every agent action
                  logged. Review, override anything you want, and approve when you&apos;re satisfied.
                </p>
                <ul className={styles.stepList}>
                  <li>Click any field to see the source document and extraction confidence</li>
                  <li>Override individual values without re-running the full pipeline</li>
                  <li>Flagged items are grouped at the top of your review queue</li>
                  <li>Your approval is the final step before filing prep</li>
                </ul>
              </div>
              <div className={styles.stepScreen} aria-hidden="true">
                <div className={styles.screenInner}>
                  <div className={styles.screenBar}>
                    <span className={styles.screenDot} />
                    <span className={styles.screenDot} />
                    <span className={styles.screenDot} />
                  </div>
                  <div className={styles.mockReviewRow}>
                    <span className={styles.mockFieldLabel}>Line 10100</span>
                    <span className={styles.mockFieldVal}>$72,400</span>
                    <span className={styles.mockSource}>T4 · p.1</span>
                  </div>
                  <div className={styles.mockReviewRow}>
                    <span className={styles.mockFieldLabel}>Line 12100</span>
                    <span className={styles.mockFieldVal}>$840</span>
                    <span className={styles.mockSource}>T5 · p.1</span>
                  </div>
                  <div className={`${styles.mockReviewRow} ${styles.flagged}`}>
                    <span className={styles.mockFieldLabel}>Line 20800</span>
                    <span className={styles.mockFieldVal}>$6,000 ⚠</span>
                    <span className={styles.mockSource}>RRSP · p.1</span>
                  </div>
                  <div className={styles.mockApproveBtn}>
                    <IconCircleCheck size={16} stroke={1.5} />
                    Approve return
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Feature deep dives */}
        <section className={`section ${styles.features}`}>
          <div className="container">
            <p className="label" style={{ marginBottom: 16 }}>Feature detail</p>
            <h2 className={styles.featuresHeadline}>Under the hood</h2>
            <p className={styles.featuresSubhead}>
              Everything you need to evaluate TaxBuddy for your firm.
            </p>

            <div className={styles.accordion}>
              <ExpandableSection title="Supported slip types" defaultOpen>
                <p>
                  TaxBuddy handles the slips that appear in the vast majority of T1 returns for
                  individual Canadian taxpayers.
                </p>
                <ul>
                  <li><strong>T4</strong> — employment income (Statement of Remuneration Paid)</li>
                  <li><strong>T4A</strong> — pension, retirement, annuity, and other income</li>
                  <li><strong>T4A(OAS) / T4A(P)</strong> — OAS and CPP/QPP payments</li>
                  <li><strong>T4E</strong> — employment insurance benefits</li>
                  <li><strong>T5</strong> — investment income (dividends, interest)</li>
                  <li><strong>T3</strong> — trust income allocations</li>
                  <li><strong>T2202</strong> — tuition and enrolment certificate</li>
                  <li><strong>T4RSP / T4RIF</strong> — RRSP/RRIF income</li>
                  <li><strong>RRSP contribution receipts</strong></li>
                  <li><strong>Charitable donation receipts</strong></li>
                </ul>
                <p style={{ marginTop: 16 }}>
                  Additional slip types are added on a rolling basis. Contact us if you have a
                  specific slip type your client base relies on.
                </p>
              </ExpandableSection>

              <ExpandableSection title="Document handling and OCR">
                <p>
                  Clients upload files directly through the intake portal. TaxBuddy accepts PDF,
                  JPG, and PNG — scanned paper documents included.
                </p>
                <ul>
                  <li>OCR extracts text from scanned documents and image-based PDFs</li>
                  <li>Each extracted value carries a confidence score</li>
                  <li>Low-confidence fields are flagged and surfaced for practitioner review rather than silently assumed</li>
                  <li>Original documents are preserved in full and linked to the fields they populated</li>
                  <li>Clients receive confirmation when each document is received and processed</li>
                </ul>
              </ExpandableSection>

              <ExpandableSection title="Agent processing pipeline">
                <p>
                  Document processing runs as a sequential pipeline of discrete agent steps. Each
                  step is logged independently so you can inspect exactly what happened at any
                  point.
                </p>
                <ul>
                  <li><strong>Classify</strong> — identify document type and tax year</li>
                  <li><strong>Extract</strong> — pull field values from each slip using OCR and layout understanding</li>
                  <li><strong>Validate</strong> — cross-check extracted values against expected formats and ranges</li>
                  <li><strong>Populate</strong> — map extracted values to the correct T1 schedule lines</li>
                  <li><strong>Flag</strong> — surface discrepancies, missing documents, and low-confidence fields</li>
                  <li><strong>Log</strong> — write a timestamped audit entry for every action taken</li>
                </ul>
                <p>
                  The pipeline runs in parallel across all documents in a client&apos;s package.
                  Processing time scales with document count, not practitioner attention.
                </p>
              </ExpandableSection>

              <ExpandableSection title="Review and approval workflow">
                <p>
                  The practitioner review interface presents a pre-populated return with every
                  field sourced, every flag surfaced, and every agent action available for
                  inspection.
                </p>
                <ul>
                  <li>Flagged items are grouped at the top of the review queue — you see the highest-priority issues first</li>
                  <li>Click any field to see the source document, the page it came from, and the extraction confidence</li>
                  <li>Override individual values without re-running the full pipeline</li>
                  <li>Add practitioner notes that travel with the audit log</li>
                  <li>Approval is explicit — no return leaves review without a practitioner sign-off</li>
                </ul>
              </ExpandableSection>

              <ExpandableSection title="Audit trail and citations">
                <p>
                  Every action taken by TaxBuddy is logged, timestamped, and retained. The audit
                  trail is not a summary — it is a complete record of what happened, when, and why.
                </p>
                <ul>
                  <li>Every T1 field is cited back to its source document and page number</li>
                  <li>Every agent action is logged with a timestamp and the input it acted on</li>
                  <li>Practitioner overrides are recorded with the original value and the replacement</li>
                  <li>The full audit log is exportable at any time — before, during, and after filing</li>
                  <li>Retained for a minimum of seven years to support CRA reassessment requests</li>
                </ul>
              </ExpandableSection>
            </div>
          </div>
        </section>

        {/* Section 4 — Security */}
        <section className={`section ${styles.security}`}>
          <div className="container">
            <p className="label" style={{ marginBottom: 16 }}>Security</p>
            <h2 className={styles.securityHeadline}>Built with security from day one</h2>
            <p className={styles.securitySubhead}>
              Client data is confidential. We designed TaxBuddy with that constraint as a
              first-class requirement, not an afterthought.
            </p>

            <div className={styles.securityGrid}>
              <div className={styles.secCard}>
                <div className={styles.secIcon}>
                  <IconShieldLock size={22} stroke={1.5} />
                </div>
                <div>
                  <h3 className={styles.secTitle}>Azure-hosted infrastructure</h3>
                  <p className={styles.secDesc}>
                    All processing and storage runs on Microsoft Azure in Canadian regions. Data
                    is encrypted at rest (AES-256) and in transit (TLS 1.2+).
                  </p>
                </div>
              </div>

              <div className={styles.secCard}>
                <div className={styles.secIcon}>
                  <IconFingerprint size={22} stroke={1.5} />
                </div>
                <div>
                  <h3 className={styles.secTitle}>PII redaction</h3>
                  <p className={styles.secDesc}>
                    Sensitive identifiers are redacted before leaving the processing boundary. We
                    do not collect SINs or store raw personal identifiers beyond what CRA filing
                    requires.
                  </p>
                </div>
              </div>

              <div className={styles.secCard}>
                <div className={styles.secIcon}>
                  <IconRobot size={22} stroke={1.5} />
                </div>
                <div>
                  <h3 className={styles.secTitle}>No model training on your data</h3>
                  <p className={styles.secDesc}>
                    Client documents and extracted data are never used to train or fine-tune AI
                    models — by TaxBuddy or any third-party provider. Data isolation is enforced
                    per firm.
                  </p>
                </div>
              </div>

              <div className={styles.secCard}>
                <div className={styles.secIcon}>
                  <IconKey size={22} stroke={1.5} />
                </div>
                <div>
                  <h3 className={styles.secTitle}>Access controls</h3>
                  <p className={styles.secDesc}>
                    Client and practitioner roles are fully separated. Clients can only see their
                    own data. Practitioners access only the clients assigned to their firm. No
                    cross-client visibility.
                  </p>
                </div>
              </div>

              <div className={styles.secCard}>
                <div className={styles.secIcon}>
                  <IconCertificate size={22} stroke={1.5} />
                </div>
                <div>
                  <h3 className={styles.secTitle}>Compliance roadmap</h3>
                  <p className={styles.secDesc}>
                    SOC 2 Type II is on our roadmap. Current controls are documented and
                    auditable. We&apos;ll share our security posture on request — reach out and
                    we&apos;ll walk through it.
                  </p>
                </div>
              </div>

              <div className={styles.secCard}>
                <div className={styles.secIcon}>
                  <IconEye size={22} stroke={1.5} />
                </div>
                <div>
                  <h3 className={styles.secTitle}>Full transparency</h3>
                  <p className={styles.secDesc}>
                    Every AI action is logged, timestamped, and explainable. No black-box outputs.
                    You can inspect what the system did on any return at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 — CTA */}
        <CTABanner />

      </main>
      <Footer />
    </>
  );
}
