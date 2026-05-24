'use client';

import { useState } from 'react';
import { IconChevronDown } from '@tabler/icons-react';
import styles from './ExpandableSection.module.css';

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function ExpandableSection({
  title,
  children,
  defaultOpen = false,
}: ExpandableSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={styles.item}>
      <button
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className={styles.title}>{title}</span>
        <IconChevronDown
          size={20}
          stroke={1.5}
          className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
        />
      </button>
      {open && <div className={styles.body}>{children}</div>}
    </div>
  );
}
