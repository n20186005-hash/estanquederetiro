'use client';

import { useTranslations, useMessages } from 'next-intl';
import { useState } from 'react';

type FAQItem = { question: string; answer: string };

export default function FAQSection() {
  const t = useTranslations('faq');
  const messages = useMessages() as any;
  const items: FAQItem[] = (messages?.faq?.items || []) as FAQItem[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (items.length === 0) return null;

  return (
    <section id="faq" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-colors"
                style={{
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left p-5 sm:p-6 flex items-start gap-4 hover:bg-white/[0.02] transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  <div
                    className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-transform"
                    style={{
                      background: isOpen ? 'var(--accent)' : 'transparent',
                      color: isOpen ? 'white' : 'var(--accent)',
                      border: `1px solid var(--accent)`,
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden="true"
                  >
                    +
                  </div>
                  <h3
                    className="flex-1 font-display text-base sm:text-lg font-semibold leading-snug"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.question}
                  </h3>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div
                    className="pl-[4.25rem] pr-5 sm:pr-6 pb-6 text-base leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
