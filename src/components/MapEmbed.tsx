import { useTranslations } from 'next-intl';

const MAPS_EMBED_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5402.8602946756055!2d-3.6839004999999996!3d40.417142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289f1576c54d%3A0x6d5dca33dd3c51c8!2sEstanque%20Grande%20del%20Retiro!5e1!3m2!1ses!2ses!4v1787902558504!5m2!1ses!2ses';
const GOVT_TOURISM_URL = 'https://www.esmadrid.com/';
const MAPS_SHARE_URL = 'https://maps.app.goo.gl/UiQJMWAmzD3pyw6aA';

export default function MapEmbed() {
  const t = useTranslations('mapSection');

  return (
    <section id="map" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        {/* Map */}
        <div
          className="map-container relative rounded-xl overflow-hidden shadow-lg"
          style={{ border: '1px solid var(--map-border)' }}
        >
          <iframe
            src={MAPS_EMBED_SRC}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Google Maps - Estanque Grande del Retiro (Madrid, Spain)"
          />
        </div>

        {/* Open in Google Maps */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4 items-center">
          <a
            href={MAPS_SHARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-colors"
            style={{ background: 'var(--accent)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t('openMaps')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        {/* Official Tourism Portal Link */}
        <div className="mt-10 space-y-4">
          <div className="p-5 sm:p-6 rounded-xl text-sm" style={{ background: 'var(--bg-tertiary)', border: '1px dashed var(--border-color)' }}>
            <p className="mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('officialTourismPortal')}
            </p>
            <a
              href={GOVT_TOURISM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium hover:underline"
              style={{ color: 'var(--accent)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <line x1="9" y1="15" x2="15" y2="15" />
              </svg>
              {t('officialTourismLinkLabel')}
            </a>
          </div>

          <div className="p-5 sm:p-6 rounded-xl text-sm" style={{ background: 'var(--bg-tertiary)', border: '1px dashed var(--border-color)' }}>
            <p className="mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {t('officialHeritagePortal')}
            </p>
            <a
              href="https://patrimonioypaisaje.madrid.es/portales/monumenta/es/Monumentos-y-Edificios-Singulares/Monumentos/Estanque-grande-del-Retiro/?vgnextfmt=default&vgnextoid=2a58091d1b9c4510091d1b9c45102e085a0aRCRD&vgnextchannel=8fac3cb702aa4510VgnVCM1000008a4a900aRCRD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium hover:underline"
              style={{ color: 'var(--accent)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              {t('officialHeritageLinkLabel')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
