import {
  IconUpload,
  IconCpu,
  IconCircleCheck,
} from '@tabler/icons-react';
import styles from './WorkflowPanel.module.css';

const STEPS = [
  {
    number: '01',
    icon: IconUpload,
    title: 'Client intake',
    description:
      'Clients upload T-slips and supporting documents through a secure portal. No more email chains or lost PDFs.',
  },
  {
    number: '02',
    icon: IconCpu,
    title: 'AI processing',
    description:
      'Agents classify slips, extract data, populate T1 schedules, and flag any discrepancies — with a full audit trail.',
  },
  {
    number: '03',
    icon: IconCircleCheck,
    title: 'Your review',
    description:
      'Every return goes through your review. You have decision-making authority on all deliverables before filing.',
  },
];

export default function WorkflowPanel() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className="container">
        <p className="label">How it works</p>
        <h2 className={styles.headline}>Three steps. You stay in control.</h2>
        <div className={styles.grid}>
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.stepNum}>{step.number}</span>
                  <Icon size={28} className={styles.icon} stroke={1.5} />
                </div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
