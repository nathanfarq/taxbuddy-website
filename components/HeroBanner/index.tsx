import Badge from '@/components/Badge';
import Button from '@/components/Button';
import styles from './HeroBanner.module.css';

export default function HeroBanner() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <Badge>Built for Canadian tax firms</Badge>
        <h1 className={styles.headline}>
          Agentic T1 filing that works<br />the way your firm does
        </h1>
        <p className={styles.subhead}>
          Clients upload documents, AI agents extract and classify data, and you
          review and approve every return — with a full audit trail on every action.
        </p>
        <div className={styles.ctas}>
          <Button href="/contact" variant="primary">Book a demo</Button>
          <Button href="#how-it-works" variant="secondary">See how it works</Button>
        </div>
      </div>
    </section>
  );
}
