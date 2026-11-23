import type { nearbyStays, placeKinds } from './nearby-guide';
import rawPlaces from './nearby-places.json';
import type { TopicLocale } from './topics';
import { getAccess, mapsLink, pondMap } from './visit';

type Localized = Record<TopicLocale, string>;

export interface PlacePhoto {
  source: string;
  author: string;
  license: string;
  licenseUrl: string;
}

interface Place {
  slug: string;
  title: Localized;
  kind: keyof typeof placeKinds;
  stay: keyof typeof nearbyStays;
  tagline: Localized;
  discovery: Localized;
  notice: Localized;
  history: Localized;
  tips: Localized;
  features: Localized;
  walk: Localized;
  photoSpot: Localized;
  question: Localized;
  answer: Localized;
  address: string;
  station: string;
  next: string;
  photo: PlacePhoto;
  walkPhoto?: PlacePhoto & { src: string };
}

export const nearbyPlaces = rawPlaces as Place[];

const stations: Record<string, string> = {
  Retiro: 'Retiro (L2)',
  Ibiza: 'Ibiza (L9)',
  'Banco de España': 'Banco de España (L2)',
  'Estación del Arte': 'Estación del Arte (L1)',
};

export function getNearby(slug: string) {
  return nearbyPlaces.find((place) => place.slug === slug);
}

const pond = ['Estanque Grande del Retiro', 'Paseo de Colombia, Parque del Retiro', 'Retiro'] as const;

const legacyLocations: Record<string, readonly [string, string, string]> = {
  'barcas-retiro': ['Embarcadero del Estanque Grande del Retiro', 'Paseo de Colombia, Parque del Retiro', 'Retiro'],
  'monumento-alfonso-xii': ['Monumento a Alfonso XII', 'Paseo de Colombia, Parque del Retiro', 'Retiro'],
  'palacio-cristal': ['Palacio de Cristal', 'Paseo de Cuba, Parque del Retiro', 'Ibiza'],
  'donde-comer': ['Avenida de Menéndez Pelayo', 'Avenida de Menéndez Pelayo, Madrid', 'Ibiza'],
  'tapas-barrio-ibiza': ['Calle de Ibiza', 'Calle de Ibiza, Madrid', 'Ibiza'],
  'como-llegar': ['Puerta de la Independencia', 'Plaza de la Independencia, Parque del Retiro', 'Retiro'],
};

const areaGuides = ['donde-comer', 'tapas-barrio-ibiza'];
const pondGuides = ['horarios', 'mapa', 'ruta-una-hora', 'planes-con-ninos', 'como-llegar', 'barcas-retiro'];

const areaAccess: Record<TopicLocale, Pick<ReturnType<typeof getAccess>, 'manager' | 'hours' | 'admission'>> = {
  es: { manager: 'Cada establecimiento gestiona su propio local.', hours: 'Varía según el establecimiento.', admission: 'Cada local fija sus precios.' },
  en: { manager: 'Each venue manages its own premises.', hours: 'Hours vary by venue.', admission: 'Each venue sets its own prices.' },
  zh: { manager: '各餐饮场所由各自商家经营。', hours: '营业时间由各商家公布。', admission: '价格以各商家菜单为准。' },
};

export function getVisitInfo(slug: string, locale: TopicLocale) {
  const place = getNearby(slug);
  const [name, address, station] = place
    ? [place.title.es, place.address, place.station]
    : legacyLocations[slug] ?? pond;
  const access = getAccess(slug, locale);
  const destination = `${name}, ${address.endsWith(', Madrid') ? address : address + ', Madrid'}`;

  return {
    ...access,
    ...(areaGuides.includes(slug) ? areaAccess[locale] : {}),
    address: `${address.endsWith(', Madrid') ? address : address + ', Madrid'}`,
    station: stations[station],
    map: name === pond[0] ? pondMap : mapsLink(destination),
    reviewMap: pondGuides.includes(slug) ? pondMap : mapsLink(destination),
    walkingMap: `https://www.google.com/maps/dir/?${new URLSearchParams({
      api: '1',
      origin: `Metro ${station}, Madrid`,
      destination,
      travelmode: 'walking',
    })}`,
    pondRating: pondGuides.includes(slug),
    areaGuide: areaGuides.includes(slug),
  };
}
