import {
  IconShieldLock,
  IconMapPin,
  IconClipboardList,
  IconUsers,
} from '@tabler/icons-react';
import styles from './TrustGrid.module.css';

const ITEMS = [
  {
    icon: IconShieldLock,
    title: 'Encrypted and secure',
    description: 'PII redacted, Azure-hosted, no model training on your data.',
  },
  {
    icon: IconMapPin,
    title: 'Canadian-first',
    description: 'CRA forms, Canadian tax rules, and T1 schedules from day one.',
  },
  {
    icon: IconClipboardList,
    title: 'Full audit trail',
    description: 'Every extraction, classification, and calculation is logged and citable.',
  },
  {
    icon: IconUsers,
    title: 'Scale your capacity',
    description: 'Handle more clients without proportionally growing headcount.',
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
