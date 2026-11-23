import type { MetadataRoute } from 'next';
import { nearbyPlaces } from '@/lib/nearby';
import { routing } from '@/i18n/routing';
import { TOPIC_SLUGS, BUILT_TOPIC_LOCALES } from '@/lib/topics';

const BASE_URL = 'https://estanquederetiro.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticHome: MetadataRoute.Sitemap = (['zh', 'en', 'es'] as const).map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 1,
  }));

  const legalPaths = ['/privacy-policy', '/terms-of-service', '/cookie-settings'];
  const legal: MetadataRoute.Sitemap = [];
  for (const locale of ['zh', 'en', 'es'] as const) {
    for (const path of legalPaths) {
      legal.push({
        url: `${BASE_URL}/${locale}${path}`,
        lastModified: now,
        changeFrequency: 'yearly',
        priority: 0.3,
      });
    }
  }

  const topics: MetadataRoute.Sitemap = [];
  for (const locale of BUILT_TOPIC_LOCALES) {
    for (const slug of TOPIC_SLUGS) {
      const languages: Record<string, string> = {};
      for (const l of BUILT_TOPIC_LOCALES) {
        languages[l] = `${BASE_URL}/${l}/${slug}`;
      }
      languages['x-default'] = `${BASE_URL}/en/${slug}`;
      topics.push({
        url: `${BASE_URL}/${locale}/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: { languages },
      });
    }
  }

  const nearby: MetadataRoute.Sitemap = nearbyPlaces.flatMap(({ slug }) => {
    const languages = Object.fromEntries(routing.locales.map((locale) => [locale, `${BASE_URL}/${locale}/${slug}`]));
    languages['x-default'] = languages.en;
    return routing.locales.map((locale) => ({ url: languages[locale], alternates: { languages } }));
  });

  return [...staticHome, ...legal, ...topics, ...nearby];
}
