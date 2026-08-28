import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { HERO_IMAGE_ABSOLUTE } from '@/constants/gallery';

const DOMAIN_NAME = 'estanquederetiro.com';
const BASE_URL = `https://${DOMAIN_NAME}`;
const HERO_IMAGE = HERO_IMAGE_ABSOLUTE(BASE_URL);
const MAPS_SHARE_URL = 'https://maps.app.goo.gl/UiQJMWAmzD3pyw6aA';
const MAPS_EMBED_SRC = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5402.8602946756055!2d-3.6839004999999996!3d40.417142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289f1576c54d%3A0x6d5dca33dd3c51c8!2sEstanque%20Grande%20del%20Retiro!5e1!3m2!1szh-CN!2s!4v1787902558504!5m2!1szh-CN!2s';
const GOVT_TOURISM_URL = 'https://www.esmadrid.com/';
const HERITAGE_PORTAL_URL = 'https://patrimonioypaisaje.madrid.es/portales/monumenta/es/Monumentos-y-Edificios-Singulares/Monumentos/Estanque-grande-del-Retiro/?vgnextfmt=default&vgnextoid=2a58091d1b9c4510091d1b9c45102e085a0aRCRD&vgnextchannel=8fac3cb702aa4510VgnVCM1000008a4a900aRCRD';
const ATTRACTION_ID = `${BASE_URL}/#attraction`;
const LATITUDE = 40.417142;
const LONGITUDE = -3.6839004999999996;
const POSTAL_CODE = '28016';
const COUNTRY_CODE = 'ES';
const STATE_PROVINCE = 'Madrid';

const localeMetaMap: Record<string, {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  faq: Array<{ question: string; answer: string }>;
  touristAttractionDescription: string;
}> = {
  es: {
    title: 'Estanque Grande del Retiro (Madrid) - Guía del Visitante y Ubicación',
    description: 'Descubre el Estanque Grande del Retiro, el icónico estanque de Madrid, Comunidad de Madrid, España. Consulta su ubicación en el mapa, horarios, el Monumento a Alfonso XII cercano y consejos de viaje.',
    ogTitle: 'Estanque Grande del Retiro - Guía de Viaje de Madrid',
    ogDescription: 'Guía oficial del visitante para el Estanque Grande del Retiro en Madrid, Comunidad de Madrid, España.',
    touristAttractionDescription: 'Guía completa del visitante para el Estanque Grande del Retiro en Madrid, Comunidad de Madrid, España.',
    faq: [
      {
        question: '¿Dónde se encuentra el Estanque Grande del Retiro?',
        answer: 'El Estanque Grande del Retiro se encuentra en el P.º de Colombia, 2, Retiro, 28016 Madrid, Comunidad de Madrid, España.'
      },
      {
        question: '¿Es gratuita la visita al Estanque Grande del Retiro?',
        answer: 'Sí, el Estanque Grande del Retiro es un espacio público ubicado dentro del Parque del Retiro y su visita es gratuita durante todo el año.'
      },
      {
        question: '¿Qué monumentos destacan cerca del Estanque Grande del Retiro?',
        answer: 'Cerca del Estanque Grande del Retiro destacan el Monumento a Alfonso XII en su extremo sur y el propio Parque del Retiro, uno de los pulmones verdes más importantes de Madrid.'
      }
    ]
  },
  en: {
    title: 'Estanque Grande del Retiro (Madrid) - Visitor Guide & Location',
    description: 'Discover Estanque Grande del Retiro, the iconic landmark in Madrid, Community of Madrid, Spain. View location map, opening details, nearby Monument to Alfonso XII, and travel tips.',
    ogTitle: 'Estanque Grande del Retiro - Madrid Travel Guide',
    ogDescription: 'Official visitor guide to Estanque Grande del Retiro in Madrid, Community of Madrid, Spain.',
    touristAttractionDescription: 'Comprehensive visitor guide to Estanque Grande del Retiro in Madrid, Community of Madrid, Spain.',
    faq: [
      {
        question: 'Where is Estanque Grande del Retiro located?',
        answer: 'Estanque Grande del Retiro is located at P.º de Colombia, 2, Retiro, 28016 Madrid, Community of Madrid, Spain.'
      },
      {
        question: 'Is Estanque Grande del Retiro free to visit?',
        answer: 'Yes, Estanque Grande del Retiro is a public space within Retiro Park and is free to visit year-round.'
      },
      {
        question: 'What landmarks are near Estanque Grande del Retiro?',
        answer: 'Key landmarks near Estanque Grande del Retiro include the Monument to Alfonso XII at its southern end and Retiro Park itself, one of Madrid\'s most important green lungs.'
      }
    ]
  },
  zh: {
    title: 'Estanque Grande del Retiro (马德里) - 游客指南与位置',
    description: '探索西班牙马德里自治区马德里的标志性景点——丽池公园大池塘（Estanque Grande del Retiro）。查看位置地图、开放信息、附近的阿尔方索十二世纪念碑及旅行建议。',
    ogTitle: 'Estanque Grande del Retiro - 马德里旅行指南',
    ogDescription: '西班牙马德里自治区马德里丽池公园大池塘（Estanque Grande del Retiro）官方游客指南。',
    touristAttractionDescription: '西班牙马德里自治区马德里丽池公园大池塘（Estanque Grande del Retiro）综合游客指南。',
    faq: [
      {
        question: 'Estanque Grande del Retiro 位于哪里？',
        answer: 'Estanque Grande del Retiro（丽池公园大池塘）位于西班牙马德里自治区马德里市丽池区哥伦比亚大道2号（P.º de Colombia, 2, Retiro, 28016 Madrid）。'
      },
      {
        question: '参观丽池公园大池塘是否免费？',
        answer: '是的，Estanque Grande del Retiro（丽池公园大池塘）是丽池公园内的公共空间，全年免费向公众开放。'
      },
      {
        question: 'Estanque Grande del Retiro 附近有哪些著名地标？',
        answer: '丽池公园大池塘附近的核心地标包括其南端的阿尔方索十二世纪念碑（Monumento a Alfonso XII）以及作为马德里最重要绿肺之一的丽池公园（Parque del Retiro）本身。'
      }
    ]
  }
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta = localeMetaMap[locale] || localeMetaMap.en;

  const zhUrl = `${BASE_URL}/zh`;
  const enUrl = `${BASE_URL}/en`;
  const esUrl = `${BASE_URL}/es`;
  const selfUrl = locale === 'zh' ? zhUrl : locale === 'es' ? esUrl : enUrl;

  return {
    metadataBase: new URL(BASE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: selfUrl,
      languages: {
        'zh': zhUrl,
        'en': enUrl,
        'es': esUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: selfUrl,
      siteName: 'Estanque Grande del Retiro',
      locale: locale === 'zh' ? 'zh_CN' : locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
      images: [
        {
          url: HERO_IMAGE,
          width: 1200,
          height: 800,
          alt: `Estanque Grande del Retiro - Main view in Madrid, Spain`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: [HERO_IMAGE],
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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const meta = localeMetaMap[locale] || localeMetaMap.en;

  const touristAttractionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': ATTRACTION_ID,
    name: 'Estanque Grande del Retiro',
    alternateName: [
      'Estanque del Retiro',
      'Madrid Estanque Grande del Retiro',
      '丽池公园大池塘'
    ],
    description: meta.touristAttractionDescription,
    url: BASE_URL,
    image: [HERO_IMAGE],
    isAccessibleForFree: true,
    telephone: '+34915744024',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'P.º de Colombia, 2, Retiro',
      addressLocality: 'Madrid',
      addressRegion: STATE_PROVINCE,
      postalCode: POSTAL_CODE,
      addressCountry: COUNTRY_CODE,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: LATITUDE,
      longitude: LONGITUDE,
    },
    hasMap: MAPS_SHARE_URL,
    sameAs: [
      MAPS_SHARE_URL,
      GOVT_TOURISM_URL,
      HERITAGE_PORTAL_URL,
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: meta.faq.map((item) => ({
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
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Madrid',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: STATE_PROVINCE,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: locale === 'es' ? 'España' : locale === 'zh' ? '西班牙' : 'Spain',
      },
    ],
  };

  return (
    <html lang={locale === 'zh' ? 'zh-CN' : locale === 'es' ? 'es' : 'en'} suppressHydrationWarning>
      <head>
        <meta property="og:image" content={HERO_IMAGE} />
        <meta property="og:image:alt" content="Estanque Grande del Retiro in Madrid, Spain" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="800" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous" />
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
