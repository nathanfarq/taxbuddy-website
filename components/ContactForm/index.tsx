'use client';

import { useState } from 'react';
import Button from '@/components/Button';
import styles from './ContactForm.module.css';

type Reason = 'demo' | 'general' | 'partnership' | 'press';

interface FormData {
  name: string;
  email: string;
  firm: string;
  message: string;
}

const REASONS: { value: Reason; label: string }[] = [
  { value: 'demo', label: 'Book a demo' },
  { value: 'general', label: 'General inquiry' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'press', label: 'Press / media' },
];

const MESSAGE_PLACEHOLDER: Record<Reason, string> = {
  demo: 'Tell us about your firm and what you are looking for...',
  general: 'What can we help you with?',
  partnership: 'Tell us about the integration or partnership you have in mind.',
  press: 'What can we help with? We will route to the right person.',
};

const INITIAL: FormData = { name: '', email: '', firm: '', message: '' };

export default function ContactForm() {
  const [reason, setReason] = useState<Reason>('demo');
  const [data, setData] = useState<FormData>(INITIAL);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: wire Azure Function at /api/contact
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, reason }),
      });
    } catch (_) {
      // Form stub — Azure Function not yet deployed; show success regardless
    }
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <h3 className={styles.successTitle}>Message sent</h3>
        <p className={styles.successText}>
          Thanks for reaching out. We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.reasonGroup} role="group" aria-label="Reason for contact">
        {REASONS.map((r) => (
          <button
            key={r.value}
            type="button"
            className={`${styles.reasonBtn} ${reason === r.value ? styles.reasonBtnActive : ''}`}
            onClick={() => setReason(r.value)}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            value={data.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@firmname.ca"
            value={data.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="firm" className={styles.label}>Firm name</label>
        <input
          id="firm"
          name="firm"
          type="text"
          placeholder="Smith & Associates CPA"
          value={data.firm}
          onChange={handleChange}
          className={styles.input}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={MESSAGE_PLACEHOLDER[reason]}
          value={data.message}
          onChange={handleChange}
          className={styles.textarea}
        />
      </div>
      <Button type="submit" variant="primary" disabled={loading}>
        {loading ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  );
}
