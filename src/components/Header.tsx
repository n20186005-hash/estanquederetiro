'use client';

import { useTranslations, useLocale } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import { visitLabels } from '@/lib/visit';
import type { TopicLocale } from '@/lib/topics';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';

const NAV_ITEMS = ['nearby', 'gallery', 'reviews', 'map', 'faq'] as const;

export default function Header({ overlay = true }: { overlay?: boolean }) {
  const t = useTranslations('header');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const solid = scrolled || !overlay;
  const locale = useLocale();
  const prefix = `/${locale}`;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: solid ? 'var(--bg-secondary)' : 'transparent',
        borderBottom: solid ? '1px solid var(--border-color)' : 'none',
        backdropFilter: solid ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href={prefix} className="font-display text-sm sm:text-lg font-semibold tracking-tight" style={{ color: solid ? 'var(--text-primary)' : '#fff' }}>
          Estanque Grande del Retiro
        </a>

        <nav className="hidden lg:flex items-center gap-5">
          {NAV_ITEMS.map((section) => (
            <a
              key={section}
              href={`${prefix}#${section}`}
              className="text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: solid ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)' }}
            >
              {section === 'nearby' ? visitLabels[locale as TopicLocale].nearby : t(section)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`${prefix}#nearby`} aria-label={visitLabels[locale as TopicLocale].nearby}
            className="lg:hidden text-xs underline underline-offset-4"
            style={{ color: solid ? 'var(--text-secondary)' : '#fff' }}>
            {locale === 'zh' ? '周边' : locale === 'es' ? 'Cerca' : 'Nearby'}
          </a>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
