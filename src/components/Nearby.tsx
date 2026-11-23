import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';
import { getNearby, getVisitInfo, nearbyPlaces } from '@/lib/nearby';
import type { TopicLocale } from '@/lib/topics';
import { visitLabels } from '@/lib/visit';
import Footer from './Footer';
import PhotoCredit from './PhotoCredit';
import VisitDetails from './VisitDetails';

export function NearbyLinks({ locale }: { locale: TopicLocale }) {
  const labels = visitLabels[locale];
  return (
    <section id="nearby" className="section-padding scroll-mt-16" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-display text-3xl sm:text-4xl font-semibold">{labels.nearby}</h2>
        <p className="text-center mt-3 mb-8" style={{ color: 'var(--text-secondary)' }}>{labels.subtitle}</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {nearbyPlaces.map((place) => (
            <li key={place.slug}>
              <a href={`/${locale}/${place.slug}`} className="group flex h-full items-center justify-between gap-3 rounded-xl p-4 font-medium"
                style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
                {place.title[locale]}
                <ArrowRight size={17} aria-hidden="true" className="shrink-0 transition-transform group-hover:translate-x-1" style={{ color: 'var(--accent)' }} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function NearbyPage({ place, locale }: { place: (typeof nearbyPlaces)[number]; locale: TopicLocale }) {
  const labels = visitLabels[locale];
  const title = place.title[locale];
  const visit = getVisitInfo(place.slug, locale);
  const next = getNearby(place.next)!;
  return (
    <>
      <main style={{ background: 'var(--bg-primary)' }}>
        <section className="relative isolate min-h-[28rem] flex items-end overflow-hidden text-white">
          <Image src={`/nearby/${place.slug}.webp`} alt={title} fill priority unoptimized className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/35" />
          <div className="relative w-full max-w-5xl mx-auto px-5 sm:px-8 py-10">
            <a href={`/${locale}#nearby`} className="inline-block mb-6 text-sm underline underline-offset-4">{labels.nearby}</a>
            <h1 className="font-display text-4xl sm:text-6xl font-semibold mb-4">{title}</h1>
            <a href={visit.map} className="inline-flex items-center gap-2 text-sm underline underline-offset-4">
              <MapPin size={18} aria-hidden="true" /> {visit.address}
            </a>
          </div>
        </section>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8 sm:py-12 space-y-8">
          <p><PhotoCredit photo={place.photo} locale={locale} archive={place.slug === 'paseo-de-coches'} /></p>
          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">{labels.overview}</h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{place.history[locale]}</p>
          </section>
          <VisitDetails slug={place.slug} locale={locale} />
          <section>
            <h2 className="font-display text-2xl font-semibold mb-3">{labels.plan}</h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{place.tips[locale]}</p>
          </section>
          <section className="rounded-2xl p-6" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <h2 className="font-display text-2xl font-semibold mb-3">{labels.next}</h2>
            <a href={`/${locale}/${next.slug}`} className="inline-flex items-center gap-2 underline underline-offset-4" style={{ color: 'var(--accent)' }}>
              {next.title[locale]} <ArrowRight size={17} aria-hidden="true" />
            </a>
            <div className="mt-3"><a href={`/${locale}#nearby`} className="underline underline-offset-4">{labels.related}</a></div>
          </section>
          <nav aria-label={title} className="flex gap-5 text-sm">
            {(['es', 'en', 'zh'] as const).map((language) => (
              <a key={language} href={`/${language}/${place.slug}`} hrefLang={language} aria-current={locale === language ? 'page' : undefined} className="underline underline-offset-4">
                {{ es: 'Español', en: 'English', zh: '中文' }[language]}
              </a>
            ))}
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
