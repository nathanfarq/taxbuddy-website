import {
  IconShieldLock,
  IconRobot,
  IconMapPin,
  IconClipboardList,
} from '@tabler/icons-react';
import styles from './TrustGrid.module.css';

const ITEMS = [
  {
    icon: IconShieldLock,
    title: 'Azure infrastructure',
    description:
      'All processing and storage runs on Microsoft Azure in Canadian regions. Encrypted at rest (AES-256) and in transit (TLS 1.2+).',
  },
  {
    icon: IconRobot,
    title: 'Your data. Never ours.',
    description:
      'Client documents are never used to train or fine-tune AI models. Data isolation is enforced per firm.',
  },
  {
    icon: IconMapPin,
    title: 'Canadian-first',
    description:
      'CRA forms, Canadian tax rules, and T1 schedules from day one. Built here. Not adapted from a US product.',
  },
  {
    icon: IconClipboardList,
    title: 'Full audit trail',
    description:
      'Every extraction, classification, and calculation is logged and citable. Reviewable at any time.',
  },
];

export default function TrustGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className={styles.card}>
                <div className={styles.iconWrap}>
                  <Icon size={22} stroke={1.5} />
                </div>
                <div>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.desc}>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
