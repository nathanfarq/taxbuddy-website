import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import {
  IconUpload,
  IconCpu,
  IconCircleCheck,
} from '@tabler/icons-react';
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

      </main>
      <Footer />
    </>
  );
}
