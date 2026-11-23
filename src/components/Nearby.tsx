import Image from 'next/image';
import { ArrowRight, MapPin, Star, TrainFront } from 'lucide-react';
import type { ReactNode } from 'react';
import { guideLabels, nearbyStays, placeKinds, suggestedDuration } from '@/lib/nearby-guide';
import { getNearby, getVisitInfo, nearbyPlaces } from '@/lib/nearby';
import type { TopicLocale } from '@/lib/topics';
import { visitLabels } from '@/lib/visit';
import Footer from './Footer';
import PhotoCredit from './PhotoCredit';


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

function GuideSection({ title, id, children }: { title: string; id?: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-8">
      <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">{title}</h2>
      <div className="space-y-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{children}</div>
    </section>
  );
}

export function NearbyPage({ place, locale }: { place: (typeof nearbyPlaces)[number]; locale: TopicLocale }) {
  const labels = visitLabels[locale];
  const guide = guideLabels[locale];
  const title = place.title[locale];
  const visit = getVisitInfo(place.slug, locale);
  const next = getNearby(place.next)!;
  const rows = [
    [guide.name, place.title.es],
    [guide.type, placeKinds[place.kind][locale]],
    [guide.management, visit.manager],
    [labels.address, visit.address],
    [labels.metro, visit.station],
    [guide.visitTime, suggestedDuration(place.slug, place.kind, locale)],
  ];
  return (
    <>
      <main style={{ background: 'var(--bg-primary)' }}>
        <section className="relative isolate min-h-[28rem] flex items-end overflow-hidden text-white">
          <Image src={`/nearby/${place.slug}.webp`} alt={title} fill priority unoptimized className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/35" />
          <div className="relative w-full max-w-5xl mx-auto px-5 sm:px-8 py-10">
            <a href={`/${locale}#nearby`} className="inline-block mb-6 text-sm underline underline-offset-4">{labels.nearby}</a>
            <h1 className="font-display text-4xl sm:text-6xl font-semibold mb-4">{title}</h1>
            <p className="max-w-3xl text-base sm:text-lg mb-4 leading-relaxed">{place.tagline[locale]}</p>
            <p className="text-sm mb-3">{labels.hours} · {visit.hours}</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a href={visit.map} className="inline-flex items-center gap-2 text-sm underline underline-offset-4">
                <MapPin size={18} aria-hidden="true" className="shrink-0" /> {visit.address}
              </a>
              <a href="#visitor-reviews" className="inline-flex items-center gap-2 text-sm underline underline-offset-4">
                <Star size={17} aria-hidden="true" /> {guide.reviews}
              </a>
            </div>
          </div>
        </section>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8 sm:py-12 space-y-8">
          <p><PhotoCredit photo={place.photo} locale={locale} archive={place.slug === 'paseo-de-coches'} /></p>
          <GuideSection title={guide.intro} id="introduction">
            <p>{place.history[locale]}</p>
          </GuideSection>
          <GuideSection title={labels.plan} id="visit-tips">
            <p>{place.tips[locale]}</p>
          </GuideSection>
          <GuideSection title={guide.highlights} id="highlights">
            <p>{place.features[locale]}</p>
          </GuideSection>
          <section id="about" className="rounded-2xl p-6 sm:p-8" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">{labels.aboutPlace(title)}</h2>
            <p className="font-medium leading-relaxed">{labels.managedBy(visit.manager)}</p>
            <a className="inline-block mt-4 underline underline-offset-4" style={{ color: 'var(--accent)' }} href={visit.source}>{labels.official}</a>
          </section>
          <GuideSection title={labels.info} id="basic-info">
            <dl className="divide-y rounded-2xl px-5" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
              {rows.map(([label, value]) => (
                <div key={label} className="grid gap-1 py-3 sm:grid-cols-[12rem_1fr]" style={{ borderColor: 'var(--border-color)' }}>
                  <dt className="font-semibold" style={{ color: 'var(--text-primary)' }}>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </GuideSection>
          <GuideSection title={labels.hours} id="opening-hours">
            <p>{visit.hours}</p>
          </GuideSection>
          <GuideSection title={labels.tickets} id="admission">
            <p>{visit.admission}</p>
          </GuideSection>
          <GuideSection title={labels.transit} id="transport">
            <p className="flex items-center gap-2">
              <TrainFront size={18} aria-hidden="true" className="shrink-0" /> {labels.approach(visit.station)}
            </p>
            <a href={visit.walkingMap} className="underline underline-offset-4" style={{ color: 'var(--accent)' }}>{labels.walkingMap}</a>
          </GuideSection>
          <GuideSection title={guide.experience} id="experience">
            <p>{place.discovery[locale]}</p>
          </GuideSection>
          <GuideSection title={labels.walk} id="walking-route">
            <ol className="list-decimal pl-6 space-y-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <li>{labels.approach(visit.station)}</li>
              <li>{place.walk[locale]}</li>
              <li><a href={`/${locale}/${next.slug}`} className="underline underline-offset-4" style={{ color: 'var(--accent)' }}>
                {labels.next} · {next.title[locale]}
              </a></li>
            </ol>
          </GuideSection>
          <GuideSection title={guide.notice} id="visit-notice">
            <p>{place.notice[locale]}</p>
            <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{labels.faq}</h3>
            <details className="rounded-xl p-4" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
              <summary className="cursor-pointer font-medium" style={{ color: 'var(--text-primary)' }}>{place.question[locale]}</summary>
              <p className="mt-3">{place.answer[locale]}</p>
            </details>
          </GuideSection>
          <GuideSection title={labels.photoSpot} id="photo-spots">
            <p>{place.photoSpot[locale]}</p>
            {place.walkPhoto && (
              <figure className="mt-4">
                <Image src={place.walkPhoto.src} alt={title} width={960} height={720} unoptimized className="w-full h-auto rounded-2xl" />
                <figcaption className="mt-2"><PhotoCredit photo={place.walkPhoto} locale={locale} /></figcaption>
              </figure>
            )}
          </GuideSection>
          <GuideSection title={guide.stay} id="where-to-stay">
            <p>{nearbyStays[place.stay][locale]}</p>
          </GuideSection>
          <GuideSection title={labels.reviews} id="visitor-reviews">
            <p>{labels.reviewLink}</p>
            <a href={visit.reviewMap} className="underline underline-offset-4" style={{ color: 'var(--accent)' }}>{labels.readReviews}</a>
          </GuideSection>
          <GuideSection title={guide.directions} id="location">
            <address className="not-italic">{visit.address}</address>
            <a href={visit.map} className="inline-flex items-center gap-2 underline underline-offset-4" style={{ color: 'var(--accent)' }}>
              <MapPin size={18} aria-hidden="true" /> {labels.map}
            </a>
          </GuideSection>
          <section className="rounded-2xl p-6" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}>
            <a href={`/${locale}#nearby`} className="inline-flex items-center gap-2 underline underline-offset-4">
              {labels.related} <ArrowRight size={17} aria-hidden="true" />
            </a>
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
