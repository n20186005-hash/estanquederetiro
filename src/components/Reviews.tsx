'use client';

import { useTranslations } from 'next-intl';
import { Star } from 'lucide-react';

const MAPS_URL = 'https://maps.app.goo.gl/UiQJMWAmzD3pyw6aA';

export default function Reviews() {
  const t = useTranslations('reviews');
  const rating = t('ratingSnapshot');
  const count = t('reviewCountSnapshot');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div
          className="rounded-xl p-8 text-center"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star size={28} className="fill-current" style={{ color: 'var(--accent)' }} />
            <span className="text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>{rating}</span>
            <span className="text-xl" style={{ color: 'var(--text-secondary)' }}>/ 5</span>
          </div>
          <p className="text-lg mb-1" style={{ color: 'var(--text-secondary)' }}>
            {count} {t('reviewsLabel')}
          </p>
          <p className="text-sm mb-4 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {t('declaration')}
          </p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:opacity-90"
            style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
          >
            {t('moreReviews')}
          </a>
          <p className="text-xs mt-4" style={{ color: 'var(--text-secondary)' }}>{t('asOf')}</p>
        </div>
      </div>
    </section>
  );
}
