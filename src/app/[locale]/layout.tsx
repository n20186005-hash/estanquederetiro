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
const POSTAL_CODE = '28009';
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
    title: 'Estanque del Retiro: barcas, horarios y cómo llegar',
    description: 'Guía del Estanque Grande del Retiro (Madrid): paseos en barca (precios y reserva), horarios del parque, cómo llegar, el Monumento a Alfonso XII y dónde comer cerca.',
    ogTitle: 'Estanque del Retiro - Guía de Visita y Barcas',
    ogDescription: 'Todo sobre el Estanque Grande del Retiro en Madrid: barcas, horarios, cómo llegar y qué ver alrededor.',
    touristAttractionDescription: 'Guía del visitante para el Estanque Grande del Retiro en Madrid: barcas, horarios, ubicación y alrededores.',
    faq: [
      {
        question: '¿Dónde se encuentra el Estanque Grande del Retiro?',
        answer: 'El Estanque Grande del Retiro se encuentra en el P.º de Colombia, 2, Retiro, 28009 Madrid, Comunidad de Madrid, España.'
      },
      {
        question: '¿Es gratuita la visita al Estanque Grande del Retiro?',
        answer: 'Sí, el Estanque Grande del Retiro es un espacio público dentro del Parque del Retiro y la entrada es gratuita. El parque abre de 06:00 a 22:00 (oct–mar) y de 06:00 a 00:00 (abr–sep); el alquiler de barcas tiene su propio horario.'
      },
      {
        question: '¿Qué monumentos destacan cerca del Estanque Grande del Retiro?',
        answer: 'Junto al Estanque Grande del Retiro destaca el Monumento a Alfonso XII en su lado este y el propio Parque del Retiro, uno de los pulmones verdes más importantes de Madrid.'
      }
    ]
  },
  en: {
    title: 'Retiro Park Lake: Boats, Opening Hours & Visitor Guide',
    description: 'Retiro Park Lake (Estanque Grande del Retiro) in Madrid: boat rides (prices & booking), park opening hours, how to get there, the Alfonso XII Monument and where to eat nearby.',
    ogTitle: 'Retiro Park Lake - Boats, Hours & Visitor Guide',
    ogDescription: 'Everything about Retiro Park Lake in Madrid: boats, opening hours, how to get there and what to see around it.',
    touristAttractionDescription: 'Visitor guide to Retiro Park Lake (Estanque Grande del Retiro) in Madrid: boats, hours, location and surroundings.',
    faq: [
      {
        question: 'Where is Estanque Grande del Retiro located?',
        answer: 'Estanque Grande del Retiro is located at P.º de Colombia, 2, Retiro, 28009 Madrid, Community of Madrid, Spain.'
      },
      {
        question: 'Is Estanque Grande del Retiro free to visit?',
        answer: 'Yes, Estanque Grande del Retiro is a public space within Retiro Park and is free to visit year-round. Retiro Park opens 06:00–22:00 (Oct–Mar) and 06:00–00:00 (Apr–Sep); boat hire runs on a separate schedule.'
      },
      {
        question: 'What landmarks are near Estanque Grande del Retiro?',
        answer: 'Key landmarks near Estanque Grande del Retiro include the Monument to Alfonso XII on its eastern side and Retiro Park itself, one of Madrid\'s most important green lungs.'
      }
    ]
  },
  zh: {
    title: '丽池公园大池塘：划船、开放时间与到达指南',
    description: '西班牙马德里丽池公园大池塘（Estanque Grande del Retiro）指南：划船价格与预约、公园开放时间、如何到达、阿尔方索十二世纪念碑及周边餐饮。',
    ogTitle: '丽池公园大池塘 - 划船、开放时间与游览指南',
    ogDescription: '关于马德里丽池公园大池塘的一切：划船、开放时间、如何到达与周边看点。',
    touristAttractionDescription: '西班牙马德里丽池公园大池塘（Estanque Grande del Retiro）游客指南：划船、开放时间、位置与周边。',
    faq: [
      {
        question: 'Estanque Grande del Retiro 位于哪里？',
        answer: 'Estanque Grande del Retiro（丽池公园大池塘）位于西班牙马德里自治区马德里市丽池区哥伦比亚大道2号（P.º de Colombia, 2, Retiro, 28009 Madrid）。'
      },
      {
        question: '参观丽池公园大池塘是否免费？',
        answer: '是的，Estanque Grande del Retiro（丽池公园大池塘）是丽池公园内的公共空间，全年免费向公众开放。丽池公园开放时间：10 月至 3 月 06:00–22:00，4 月至 9 月 06:00–00:00；划船另有独立时段。'
      },
      {
        question: 'Estanque Grande del Retiro 附近有哪些著名地标？',
        answer: '丽池公园大池塘附近的核心地标包括其东侧的阿尔方索十二世纪念碑（Monumento a Alfonso XII）以及作为马德里最重要绿肺之一的丽池公园（Parque del Retiro）本身。'
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
