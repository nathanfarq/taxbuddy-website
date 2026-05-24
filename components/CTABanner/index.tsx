import Button from '@/components/Button';
import styles from './CTABanner.module.css';

interface CTABannerProps {
  headline?: string;
  subhead?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  headline = 'Ready to see it in action?',
  subhead = 'Book a 15-minute demo. See your workflow, not a generic pitch.',
  primaryLabel = 'Book a demo',
  primaryHref = '/contact',
  secondaryLabel = 'Contact us',
  secondaryHref = '/contact',
}: CTABannerProps) {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.headline}>{headline}</h2>
        <p className={styles.subhead}>{subhead}</p>
        <div className={styles.ctas}>
          <Button href={primaryHref} variant="primary">{primaryLabel}</Button>
          <Button href={secondaryHref} variant="ghost">{secondaryLabel}</Button>
        </div>
      </div>
    </section>
  );
}
