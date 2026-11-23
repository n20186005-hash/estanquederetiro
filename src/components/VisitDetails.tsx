import { getTranslations } from 'next-intl/server';
import { MapPin, Star, TrainFront } from 'lucide-react';
import { getVisitInfo } from '@/lib/nearby';
import type { TopicLocale } from '@/lib/topics';
import { visitLabels } from '@/lib/visit';

export default async function VisitDetails({ slug, locale }: { slug: string; locale: TopicLocale }) {
  const labels = visitLabels[locale];
  const visit = getVisitInfo(slug, locale);
  const basic = visit.pondRating ? await getTranslations({ locale, namespace: 'basicInfo' }) : null;
  const rows = [
    [labels.address, visit.address],
    [labels.hours, visit.hours],
    [labels.tickets, visit.admission],
  ];

  return (
    <div className="space-y-8">
      <section className="rounded-2xl p-6" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
        <h2 className="font-display text-2xl font-semibold mb-2">{labels.about}</h2>
        <p style={{ color: 'var(--text-secondary)' }}>{visit.manager}</p>
        <a className="inline-block mt-3 underline underline-offset-4" style={{ color: 'var(--accent)' }} href={visit.source}>{labels.official}</a>
      </section>
      <section>
        <h2 className="font-display text-2xl font-semibold mb-4">{labels.info}</h2>
        <dl className="divide-y rounded-2xl px-5" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
          {rows.map(([label, value]) => (
            <div key={label} className="grid gap-1 py-3 sm:grid-cols-[10rem_1fr]" style={{ borderColor: 'var(--border-color)' }}>
              <dt className="font-semibold">{label}</dt>
              <dd style={{ color: 'var(--text-secondary)' }}>{value}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section>
        <h2 className="font-display text-2xl font-semibold mb-3">{labels.transit}</h2>
        <p className="flex items-center gap-2 mb-3" style={{ color: 'var(--text-secondary)' }}>
          <TrainFront size={17} aria-hidden="true" /> {labels.metro} {visit.station}
        </p>
        <a href={visit.map} className="inline-flex items-center gap-2 underline underline-offset-4" style={{ color: 'var(--accent)' }}>
          <MapPin size={17} aria-hidden="true" /> {labels.map}
        </a>
      </section>
      <section>
          <h2 className="font-display text-2xl font-semibold mb-3">{labels.reviews}</h2>
          {basic ? (
            <p className="flex items-center gap-2 mb-3" style={{ color: 'var(--text-secondary)' }}>
              <Star size={17} aria-hidden="true" style={{ color: 'var(--accent)' }} />
              Estanque Grande del Retiro · Google Maps {basic('googleRatingValue')}
            </p>
          ) : (
            <p className="mb-3" style={{ color: 'var(--text-secondary)' }}>{visit.areaGuide ? labels.venueReviews : labels.reviewLink}</p>
          )}
          <a className="underline underline-offset-4" style={{ color: 'var(--accent)' }} href={visit.reviewMap}>{labels.readReviews}</a>
      </section>
    </div>
  );
}
