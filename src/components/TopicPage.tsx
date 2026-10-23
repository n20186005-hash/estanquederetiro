import type { TopicContent } from '@/lib/topics';

export interface RelatedTopic {
  slug: string;
  label: string;
}

export interface TopicPageLabels {
  home: string;
  faq: string;
  related: string;
}

export default function TopicPage({
  topic,
  locale,
  related,
  labels,
}: {
  topic: TopicContent;
  locale: string;
  related: RelatedTopic[];
  labels: TopicPageLabels;
}) {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <a
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-sm font-medium mb-10 transition-colors"
          style={{ color: 'var(--accent)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          {labels.home}
        </a>

        <h1
          className="font-display text-3xl sm:text-4xl font-bold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {topic.h1}
        </h1>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <p
          className="text-lg leading-relaxed mb-12"
          style={{ color: 'var(--text-secondary)' }}
        >
          {topic.intro}
        </p>

        <div className="space-y-10">
          {topic.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2
                className="font-display text-xl sm:text-2xl font-semibold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {section.title}
              </h2>
              <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {topic.faq.length > 0 && (
          <section className="mt-12">
            <h2
              className="font-display text-xl sm:text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {labels.faq}
            </h2>
            <div className="space-y-3">
              {topic.faq.map((item, i) => (
                <details
                  key={i}
                  className="rounded-xl p-4"
                  style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
                >
                  <summary
                    className="font-medium cursor-pointer"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.question}
                  </summary>
                  <p className="mt-2 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-12">
            <h2
              className="font-display text-xl sm:text-2xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {labels.related}
            </h2>
            <ul className="flex flex-wrap gap-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <a
                    href={`/${locale}/${r.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:opacity-90"
                    style={{
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
