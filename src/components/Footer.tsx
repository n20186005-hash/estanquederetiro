import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();
  const prefix = `/${locale}`;

  return (
    <footer
      className="py-12 px-4 sm:px-6"
      style={{ background: 'var(--bg-tertiary)', borderTop: '1px solid var(--border-color)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-8">
          <div className="max-w-md">
            <div className="mb-6">
              <h2 className="font-display text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                {t('brandName')}
              </h2>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {t('brandSubtitle')}
              </p>
            </div>
            <h3 className="font-display text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {t('officialResourcesTitle')}
            </h3>
            <div className="flex flex-col gap-2">
              <a href="https://www.spain.info/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm" style={{ color: 'var(--accent)' }}>
                {locale === 'zh' ? '西班牙国家旅游局' : locale === 'es' ? 'Turismo de España' : 'Spain Tourism'}
              </a>
              <a href="https://www.comunidad.madrid/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm" style={{ color: 'var(--accent)' }}>
                {locale === 'zh' ? '马德里大区政府' : locale === 'es' ? 'Comunidad de Madrid' : 'Madrid Regional Government'}
              </a>
              <a href="https://www.esmadrid.com/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm" style={{ color: 'var(--accent)' }}>
                {locale === 'zh' ? '马德里市政府官方旅游门户' : locale === 'es' ? 'Portal Oficial de Turismo del Ayuntamiento de Madrid' : 'Madrid City Council Official Tourism Portal'}
              </a>
              <a href="https://www.paisajedelaluz.es/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm" style={{ color: 'var(--accent)' }}>
                {locale === 'zh' ? '光之景观' : locale === 'es' ? 'Paisaje de la Luz' : 'Landscape of Light'}
              </a>
              <a href="https://monumentamadrid.es/AM_Portada/AM_Portada_WEB/index2.htm" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm" style={{ color: 'var(--accent)' }}>
                {locale === 'zh' ? '马德里市纪念碑与古迹建筑数字档案库' : locale === 'es' ? 'Archivo Digital de Monumentos y Edificios Históricos de Madrid' : 'Madrid City Monument and Historic Building Digital Archive'}
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm mt-4 sm:mt-0">
            <a href={`${prefix}/privacy-policy`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('privacy')}
            </a>
            <a href={`${prefix}/terms-of-service`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('terms')}
            </a>
            <a href={`${prefix}/cookie-settings`} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('cookies')}
            </a>
          </div>
        </div>

        <div
          className="pt-6 text-center text-sm space-y-4"
          style={{ borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)' }}
        >
          <p>{t('rights')}</p>
          <p className="text-xs max-w-3xl mx-auto leading-relaxed">{t('disclaimer')}</p>
        </div>
      </div>
    </footer>
  );
}
