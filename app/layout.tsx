import type { Metadata } from 'next';
import { Instrument_Serif, Instrument_Sans } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const instrumentSans = Instrument_Sans({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://taxbuddy.online'),
  title: 'TaxBuddy — Agentic T1 Filing for Canadian Accounting Firms',
  description:
    'TaxBuddy automates T1 preparation for Canadian tax firms. Clients upload documents, AI agents extract and classify data, and practitioners review and approve returns with full audit trails.',
  keywords: ['Canadian tax software', 'T1 filing', 'accounting firm software', 'agentic tax preparation', 'CRA'],
  openGraph: {
    title: 'TaxBuddy — Agentic T1 Filing for Canadian Accounting Firms',
    description:
      'Automate T1 preparation. You stay in control. Built for Canadian accounting firms.',
    siteName: 'TaxBuddy',
    locale: 'en_CA',
    type: 'website',
    url: 'https://taxbuddy.online',
    images: [{ url: '/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TaxBuddy — Agentic T1 Filing for Canadian Accounting Firms',
    description: 'Automate T1 preparation. You stay in control. Built for Canadian accounting firms.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${instrumentSerif.variable} ${instrumentSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
