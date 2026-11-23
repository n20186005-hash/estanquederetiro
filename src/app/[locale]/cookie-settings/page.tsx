import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://estanquederetiro.com';
  const zhUrl = `${baseUrl}/zh/cookie-settings`;
  const enUrl = `${baseUrl}/en/cookie-settings`;
  const esUrl = `${baseUrl}/es/cookie-settings`;
  const selfUrl = locale === 'zh' ? zhUrl : locale === 'es' ? esUrl : enUrl;

  const t = await getTranslations({ locale, namespace: 'cookieSettings' });

  return {
    title: t('title'),
    alternates: {
      canonical: selfUrl,
      languages: {
        'zh': zhUrl,
        'en': enUrl,
        'es': esUrl,
        'x-default': enUrl,
      },
    },
  };
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Header overlay={false} />
      <main className="pt-16"><CookieSettingsClient /></main>
      <Footer />
    </>
  );
}
