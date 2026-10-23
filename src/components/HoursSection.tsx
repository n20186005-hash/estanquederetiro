'use client';

import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

export default function HoursSection() {
  const t = useTranslations('hours');

  const parkLines = [
    `${t('winterLabel')}: ${t('winterTime')}`,
    `${t('summerLabel')}: ${t('summerTime')}`,
  ];

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <TimeCard title={t('parkTitle')} lines={parkLines} iconKey="park" />
          <TimeCard title={t('boatTitle')} lines={[t('boatTime')]} note={t('boatNote')} iconKey="boat" />
        </div>

        <div
          className="rounded-xl p-5 flex items-start gap-4"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--accent)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('tip')}</p>
        </div>
      </div>
    </section>
  );
}

function TimeCard({ title, lines, note, iconKey }: { title: string; lines: string[]; note?: string; iconKey: string }) {
  const icons: Record<string, ReactNode> = {
    park: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L4 12h3v4h10v-4h3L12 2z" />
        <rect x="10" y="16" width="4" height="6" />
      </svg>
    ),
    boat: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 17h18l-2 4H5l-2-4z" />
        <path d="M12 3v8" />
        <path d="M12 3c-2 1-3 3-3 5h6c0-2-1-4-3-5z" />
      </svg>
    ),
  };

  return (
    <div
      className="rounded-xl p-6"
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
    >
      <div className="flex items-center gap-3 mb-3" style={{ color: 'var(--accent)' }}>
        {icons[iconKey]}
        <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>{title}</h3>
      </div>
      {lines.map((line, i) => (
        <p key={i} className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{line}</p>
      ))}
      {note && (
        <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>{note}</p>
      )}
    </div>
  );
}
