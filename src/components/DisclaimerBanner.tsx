'use client';

import { useTranslations } from 'next-intl';

export default function DisclaimerBanner() {
  const t = useTranslations('disclaimerHome');

  return (
    <div className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-xl p-5 flex items-start gap-4"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            className="flex-shrink-0 mt-0.5"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <div>
            <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>{t('title')}</p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('text')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
