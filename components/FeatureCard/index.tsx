import type { Icon } from '@tabler/icons-react';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  icon: Icon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: IconComponent, title, description }: FeatureCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap}>
        <IconComponent size={24} stroke={1.5} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
}
