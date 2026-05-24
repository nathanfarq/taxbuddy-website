'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IconMenu2, IconX } from '@tabler/icons-react';
import Button from '@/components/Button';
import styles from './NavBar.module.css';

const NAV_LINKS = [
  { label: 'Product', href: '/product', disabled: true },
  { label: 'About', href: '/about' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.wordmark}>
          TaxBuddy
        </Link>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {NAV_LINKS.map((link) =>
            link.disabled ? (
              <span key={link.href} className={`${styles.navLink} ${styles.navLinkDisabled}`}>
                {link.label}
              </span>
            ) : (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            )
          )}
          <Button href="/contact" variant="primary">Book a demo</Button>
        </nav>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className={styles.mobileNav} role="dialog" aria-modal="true" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) =>
            link.disabled ? (
              <span key={link.href} className={`${styles.mobileLink} ${styles.mobileLinkDisabled}`}>
                {link.label}
              </span>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <div className={styles.mobileCta}>
            <Button href="/contact" variant="primary" fullWidth>Book a demo</Button>
          </div>
        </div>
      )}
    </header>
  );
}
