import type { TopicLocale } from './topics';

export const guideLabels = {
  es: {
    intro: 'Descubre este lugar',
    highlights: 'Qué lo distingue',
    name: 'Nombre en español',
    type: 'Tipo de lugar',
    management: 'Entidad gestora',
    visitTime: 'Tiempo orientativo de visita',
    experience: 'Historia, arquitectura y cultura',
    notice: 'Antes de ir',
    stay: 'Dónde alojarse',
    directions: 'Dirección y mapa',
    reviews: 'Valoraciones en Google Maps',
  },
  en: {
    intro: 'Explore this place',
    highlights: 'What makes it distinctive',
    name: 'Spanish name',
    type: 'Attraction type',
    management: 'Managing organisation',
    visitTime: 'Suggested visit time',
    experience: 'History, architecture and culture',
    notice: 'Before you go',
    stay: 'Where to stay',
    directions: 'Address and map',
    reviews: 'Google Maps ratings',
  },
  zh: {
    intro: '探索景点',
    highlights: '景区特色',
    name: '西班牙语名称',
    type: '景点类型',
    management: '管理主体',
    visitTime: '建议停留时间',
    experience: '发现魅力',
    notice: '游览须知',
    stay: '住宿建议',
    directions: '交通指南与地图',
    reviews: 'Google 地图评分',
  },
};

export const placeKinds = {
  exhibition: { es: 'Espacio cultural o expositivo', en: 'Cultural or exhibition venue', zh: '文化或展览场馆', minutes: '30–60' },
  garden: { es: 'Jardín', en: 'Garden', zh: '花园', minutes: '25–45' },
  library: { es: 'Biblioteca pública', en: 'Public library', zh: '公共图书馆', minutes: '15–30' },
  pavilion: { es: 'Construcción histórica', en: 'Historic structure', zh: '历史建筑或构筑物', minutes: '15–30' },
  ruins: { es: 'Ruinas históricas', en: 'Historic ruins', zh: '历史遗址', minutes: '10–20' },
  tree: { es: 'Árbol singular', en: 'Notable tree', zh: '古树地标', minutes: '5–15' },
  fountain: { es: 'Fuente o estanque histórico', en: 'Historic fountain or pond', zh: '历史喷泉或水池', minutes: '10–20' },
  avenue: { es: 'Paseo histórico', en: 'Historic promenade', zh: '历史步道', minutes: '20–35' },
  memorial: { es: 'Monumento o memorial', en: 'Monument or memorial', zh: '纪念碑或纪念场所', minutes: '10–20' },
  gate: { es: 'Puerta monumental', en: 'Monumental gate', zh: '历史城门或园门', minutes: '10–20' },
  market: { es: 'Paseo de librerías', en: 'Booksellers’ street', zh: '书摊街', minutes: '20–40' },
  museum: { es: 'Museo', en: 'Museum', zh: '博物馆', minutes: '60–120' },
  church: { es: 'Iglesia histórica', en: 'Historic church', zh: '历史教堂', minutes: '15–30' },
};

export const nearbyStays = {
  east: {
    es: 'Busca alojamiento cerca del metro Ibiza o de la avenida de Menéndez Pelayo si tu itinerario empieza en la mitad oriental del Retiro. Compara en el mapa el camino del hotel a la puerta del parque que vas a usar.',
    en: 'Look near Ibiza metro or Avenida de Menéndez Pelayo if your itinerary starts on the eastern side of Retiro. Check the walking route from your accommodation to the park gate you plan to use.',
    zh: '如果行程从公园东侧开始，可在伊维萨地铁站或梅嫩德斯·佩拉约大道附近筛选住宿。订房前在地图上比较住宿地与计划使用的园门之间的步行路线。',
  },
  west: {
    es: 'Busca alojamiento en Jerónimos o junto a Banco de España si quieres combinar esta parada con el Prado y Cibeles. Comprueba la distancia a pie hasta la entrada concreta que vas a utilizar.',
    en: 'Look in Jerónimos or near Banco de España if you are combining this stop with the Prado and Cibeles. Compare the walking distance to the entrance you plan to use.',
    zh: '若打算连游普拉多和西贝莱斯，可在赫罗尼莫斯街区或西班牙银行站附近选住宿。订房前对照实际要用的入口，比较步行距离。',
  },
  south: {
    es: 'Atocha o Estación del Arte son bases prácticas si llegas en tren o vas a combinar esta parada con el Jardín Botánico. Compara el trayecto desde tu alojamiento al extremo sur del Retiro.',
    en: 'Atocha or Estación del Arte are practical bases if you arrive by train or plan to add the Botanical Garden. Compare the walk from your accommodation to the south end of Retiro.',
    zh: '若乘火车抵达，或计划顺游皇家植物园，可在阿托查或艺术站附近选住宿，并比较到丽池公园南侧的步行路线。',
  },
};

export function suggestedDuration(slug: string, kind: keyof typeof placeKinds, locale: TopicLocale) {
  const minutes = slug === 'museo-del-prado' ? '120–180' : slug === 'real-jardin-botanico' ? '60–90' : placeKinds[kind].minutes;
  return locale === 'zh' ? `${minutes} 分钟` : `${minutes} min`;
}
