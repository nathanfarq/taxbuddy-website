import Link from 'next/link';
import { IconBrandLinkedin } from '@tabler/icons-react';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.wordmark}>TaxBuddy</Link>
          <p className={styles.tagline}>Agentic T1 filing for Canadian accounting firms.</p>
          <p className={styles.copy}>© {year} TaxBuddy. All rights reserved.</p>
        </div>

        <nav className={styles.links} aria-label="Footer navigation">
          <div className={styles.col}>
            <h3 className={styles.colHead}>Product</h3>
            <Link href="/product" className={styles.link}>Overview</Link>
            <Link href="/contact" className={styles.link}>Book a demo</Link>
          </div>
          <div className={styles.col}>
            <h3 className={styles.colHead}>Company</h3>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/blog" className={styles.link}>Blog</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>
          <div className={styles.col}>
            <h3 className={styles.colHead}>Legal</h3>
            <span className={styles.link}>Privacy</span>
            <span className={styles.link}>Terms</span>
          </div>
        </nav>

        <div className={styles.social}>
          <a
            href="https://linkedin.com/company/taxbuddy"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="TaxBuddy on LinkedIn"
          >
            <IconBrandLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
