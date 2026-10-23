'use client';

import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { TOPIC_SLUGS, BUILT_TOPIC_LOCALES } from '@/lib/topics';

export default function TopicLinks() {
  const locale = useLocale();
  const t = useTranslations('topicLinks');

  if (!BUILT_TOPIC_LOCALES.includes(locale as (typeof BUILT_TOPIC_LOCALES)[number])) {
    return null;
  }

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('title')}
          </h2>
          <p className="text-sm mt-3 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOPIC_SLUGS.map((slug) => (
            <a
              key={slug}
              href={`/${locale}/${slug}`}
              className="group rounded-xl p-5 flex items-center justify-between transition-colors hover:opacity-90"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
            >
              <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                {t(slug as any)}
              </span>
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
                style={{ color: 'var(--accent)' }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
