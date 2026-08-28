import { useTranslations, useMessages } from 'next-intl';

export default function Intro() {
  const t = useTranslations('intro');
  const tOff = useTranslations('officialManagement');
  const tBc = useTranslations('breadcrumb');
  const messages = useMessages() as any;
  const items: string[] = messages?.intro?.visitGuide?.items || [];
  const alsoKnownAsItems: string[] = messages?.intro?.alsoKnownAs?.items || [];
  const breadcrumbItems: string[] = messages?.breadcrumb?.items || [];

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Geographic Breadcrumb */}
        <div className="mb-10 p-4 sm:p-5 rounded-xl text-xs sm:text-sm" style={{ background: 'var(--bg-tertiary)', border: '1px dashed var(--border-color)' }}>
          <p className="mb-2 font-medium" style={{ color: 'var(--text-muted)' }}>
            {tBc('label')}
          </p>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {breadcrumbItems.map((label, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span style={{ color: i === 0 ? 'var(--accent)' : 'var(--text-secondary)' }} className="font-medium">
                    {label}
                  </span>
                  {i < breadcrumbItems.length - 1 && (
                    <span aria-hidden="true" style={{ color: 'var(--text-muted)' }}>→</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        {/* Description with strong tags */}
        <p
          className="text-lg leading-relaxed mb-12"
          style={{ color: 'var(--text-secondary)' }}
          dangerouslySetInnerHTML={{ __html: t('description') }}
        />

        {/* Nearby cluster card */}
        <div className="mb-10 p-6 sm:p-8 rounded-xl border-l-4" style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--accent)' }}>
          <h3
            className="font-display text-xl font-semibold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('nearbyCluster.title')}
          </h3>
          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            dangerouslySetInnerHTML={{ __html: t('nearbyCluster.description') }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('visitGuide.title')}
            </h3>
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-6 sm:p-8"
            style={{ background: 'var(--bg-tertiary)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('alsoKnownAs.title')}
            </h3>
            <ul className="space-y-3">
              {alsoKnownAsItems.map((keyword, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{keyword}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 p-6 sm:p-8 rounded-xl border border-[var(--accent)]" style={{ background: 'var(--bg-tertiary)' }}>
          <h2 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            {tOff('title')}
          </h2>
          <div
            className="text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
            dangerouslySetInnerHTML={{ __html: tOff('text') }}
          />
        </div>
      </div>
    </section>
  );
}
