'use client';

import { useTranslations, useMessages } from 'next-intl';

type FieldKey =
  | 'officialName' | 'type' | 'typology' | 'ownership'
  | 'yearBuilt' | 'architectMaster' | 'dimensions' | 'district'
  | 'country' | 'city' | 'googleRating' | 'telephone'
  | 'plusCode' | 'rehabilitationYear' | 'address';

const FIELD_ORDER: FieldKey[] = [
  'officialName', 'type', 'typology', 'ownership',
  'yearBuilt', 'architectMaster', 'dimensions', 'district',
  'country', 'city', 'googleRating', 'telephone',
  'plusCode', 'rehabilitationYear',
];

export default function BasicInfo() {
  const t = useTranslations('basicInfo');
  const messages = useMessages() as any;
  const raw = messages?.basicInfo || {};

  const hasField = (k: FieldKey) => typeof raw[k] === 'string' && typeof raw[`${k}Value`] === 'string';
  const fullSpanFields: FieldKey[] = ['address'];

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FIELD_ORDER
            .filter(hasField)
            .map((key) => (
              <InfoCard
                key={key}
                title={t(key)}
                value={t(`${key}Value`)}
                href={key === 'telephone' ? 'tel:+34915744024' : undefined}
                wide={false}
              />
            ))}
          {fullSpanFields.filter(hasField).map((key) => (
            <div key={key} className="md:col-span-2 lg:col-span-3">
              <InfoCard
                title={t(key)}
                value={t(`${key}Value`)}
                wide
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, value, href, wide }: { title: string; value: string; href?: string; wide?: boolean }) {
  const content = (
    <div
      className={`rounded-xl p-5 h-full transition-colors hover:bg-white/[0.03] ${wide ? '' : ''}`}
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
    >
      <p className="text-xs sm:text-sm mb-1 tracking-wide uppercase" style={{ color: 'var(--text-muted)' }}>{title}</p>
      <p className="font-medium leading-relaxed" style={{ color: 'var(--text-primary)' }}>{value}</p>
    </div>
  );
  return href ? (
    <a href={href} className="block no-underline">{content}</a>
  ) : content;
}
