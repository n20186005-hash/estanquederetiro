import { setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import {
  TOPIC_SLUGS,
  getTopic,
  BUILT_TOPIC_LOCALES,
  type TopicData,
  type TopicContent,
} from '@/lib/topics';
import TopicPage, { type RelatedTopic } from '@/components/TopicPage';

const BASE_URL = 'https://estanquederetiro.com';

export const dynamicParams = false;

function resolveContent(slug: string, locale: string): TopicContent | undefined {
  const data = getTopic(slug);
  if (!data) return undefined;
  return data[locale as keyof TopicData] as TopicContent | undefined;
}

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of BUILT_TOPIC_LOCALES) {
    for (const slug of TOPIC_SLUGS) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const content = resolveContent(slug, locale);
  if (!content) return {};

  const selfUrl = `${BASE_URL}/${locale}/${slug}`;
  const languages: Record<string, string> = {};
  for (const l of BUILT_TOPIC_LOCALES) {
    languages[l] = `${BASE_URL}/${l}/${slug}`;
  }
  languages['x-default'] = `${BASE_URL}/en/${slug}`;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: selfUrl,
      languages,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function TopicRoute({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const content = resolveContent(slug, locale);
  if (!content) notFound();

  const common = await getTranslations({ locale, namespace: 'topicPage' });

  const related: RelatedTopic[] = content.related
    .map((r) => {
      const relatedContent = resolveContent(r, locale);
      return relatedContent ? { slug: r, label: relatedContent.h1 } : null;
    })
    .filter((x): x is RelatedTopic => x !== null);

  const selfUrl = `${BASE_URL}/${locale}/${slug}`;
  const homeUrl = `${BASE_URL}/${locale}`;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Estanque Grande del Retiro',
        item: homeUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: content.h1,
        item: selfUrl,
      },
    ],
  };

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${selfUrl}#webpage`,
    name: content.metaTitle,
    description: content.metaDescription,
    url: selfUrl,
    inLanguage: locale === 'zh' ? 'zh-CN' : locale === 'es' ? 'es-ES' : 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Estanque Grande del Retiro',
      url: BASE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <TopicPage
        topic={content}
        locale={locale}
        related={related}
        labels={{
          home: common('home'),
          faq: common('faq'),
          related: common('related'),
        }}
      />
    </>
  );
}
