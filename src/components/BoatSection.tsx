'use client';

import { useTranslations } from 'next-intl';
import { Ship, Ticket, MapPin, Info } from 'lucide-react';

const MAPS_URL = 'https://maps.app.goo.gl/UiQJMWAmzD3pyw6aA';

export default function BoatSection() {
  const t = useTranslations('boat');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4"
            style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
          >
            <Ship size={16} /> {t('subtitle')}
          </div>
          <h2
            className="font-display text-3xl sm:text-4xl font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div
            className="rounded-xl p-6"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <div className="flex items-center gap-2 mb-2" style={{ color: 'var(--accent)' }}>
              <Ticket size={18} />
              <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>{t('priceWeekday')}</h3>
            </div>
            <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{t('priceWeekdayValue')}</p>
          </div>
          <div
            className="rounded-xl p-6"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <div className="flex items-center gap-2 mb-2" style={{ color: 'var(--accent)' }}>
              <Ticket size={18} />
              <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>{t('priceWeekend')}</h3>
            </div>
            <p className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>{t('priceWeekendValue')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div
            className="rounded-xl p-6"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <div className="flex items-center gap-2 mb-2" style={{ color: 'var(--accent)' }}>
              <Info size={18} />
              <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>{t('bookingTitle')}</h3>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('bookingText')}</p>
          </div>
          <div
            className="rounded-xl p-6"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            <div className="flex items-center gap-2 mb-2" style={{ color: 'var(--accent)' }}>
              <MapPin size={18} />
              <h3 className="font-medium" style={{ color: 'var(--text-primary)' }}>{t('dockTitle')}</h3>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('dockText')}</p>
          </div>
        </div>

        <div
          className="rounded-xl p-5 flex items-start gap-4 mb-6"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--accent)' }}
        >
          <Info size={18} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('note')}</p>
        </div>

        <div className="text-center">
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors hover:opacity-90"
            style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}
          >
            <MapPin size={16} /> {t('cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
