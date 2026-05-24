'use client';

import { useEffect } from 'react';
import { initAppInsights } from '@/lib/analytics';

export default function AppInsightsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initAppInsights();
  }, []);

  return <>{children}</>;
}
