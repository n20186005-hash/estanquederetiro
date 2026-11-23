import type { TopicLocale } from './topics';

export const visitLabels = {
  es: {
    nearby: 'Lugares cerca del Estanque Grande',
    aboutPlace: (title: string) => `Sobre ${title}`,
    managedBy: (manager: string) => `La gestión de este lugar corresponde a ${manager}.`,
    walk: 'Ruta a pie', photoSpot: 'Dónde hacer fotos', faq: 'Preguntas frecuentes',
    approach: (station: string) => `Empieza el recorrido en la estación de metro ${station}.`,
    walkingMap: 'Ruta a pie desde el metro',
    subtitle: 'Jardines, monumentos y museos para continuar el paseo por el Retiro.',
    home: 'Volver al Estanque Grande', info: 'Información práctica', about: 'Gestión del lugar',
    address: 'Ubicación', hours: 'Horario', tickets: 'Entrada', transit: 'Cómo llegar',
    map: 'Abrir en Google Maps', reviews: 'Valoraciones de visitantes', readReviews: 'Ver en Google Maps',
    official: 'Información oficial', photo: 'Fotografía', next: 'Continúa el paseo', metro: 'Metro',
    plan: 'Consejos de visita y fotografía',
    reviewLink: 'Consulta la ficha del lugar para ver las valoraciones que estén disponibles.',
    archive: 'Fotografía de archivo, 1976', resized: 'Imagen redimensionada', venueReviews: 'Consulta las reseñas de cada establecimiento en el mapa de la zona.', related: 'Otros lugares para visitar',
  },
  en: {
    nearby: 'Places near the Great Pond',
    aboutPlace: (title: string) => `About ${title}`,
    managedBy: (manager: string) => `${manager} manages this site.`,
    walk: 'Walking route', photoSpot: 'Where to take photos', faq: 'Frequently asked questions',
    approach: (station: string) => `Start at ${station} metro station.`,
    walkingMap: 'Walking directions from the metro',
    subtitle: 'Gardens, monuments and museums to visit on your Retiro walk.',
    home: 'Back to the Great Pond', info: 'Visitor information', about: 'Who manages this site',
    address: 'Location', hours: 'Opening hours', tickets: 'Admission', transit: 'Getting there',
    map: 'Open in Google Maps', reviews: 'Visitor reviews', readReviews: 'View on Google Maps',
    official: 'Official visitor information', photo: 'Photo', next: 'Continue your walk', metro: 'Metro',
    plan: 'Visiting and photography tips',
    reviewLink: 'Open the place listing to see available visitor ratings and reviews.',
    archive: 'Archive photograph, 1976', resized: 'Image resized', venueReviews: 'Find reviews on individual restaurant listings in the area.', related: 'More places to visit',
  },
  zh: {
    nearby: '大池周边景点',
    aboutPlace: (title: string) => `关于${title}`,
    managedBy: (manager: string) => `这里由${manager}负责管理。`,
    walk: '步行路线', photoSpot: '拍摄机位', faq: '常见问答',
    approach: (station: string) => `从地铁 ${station} 站出发。`,
    walkingMap: '查看从地铁站出发的步行导航',
    subtitle: '从丽池公园的花园与纪念碑，走到周边的博物馆。',
    home: '返回大池首页', info: '基础信息', about: '管理主体',
    address: '位置', hours: '开放时间', tickets: '门票', transit: '交通方式',
    map: '打开 Google 地图', reviews: '游客评价', readReviews: '在 Google 地图查看',
    official: '官方游览资料', photo: '照片', next: '下一站', metro: '地铁',
    plan: '游览与拍照建议',
    reviewLink: '打开景点地图详情，查看该地点可用的评分与游客评价。',
    archive: '1976 年档案照片', resized: '图片已调整尺寸', venueReviews: '可从区域地图进入各餐厅的地点页查看评价。', related: '更多周边景点',
  },
} satisfies Record<TopicLocale, Record<string, string | ((value: string) => string)>>;

const parkSource = 'https://www.esmadrid.com/en/tourist-information/parque-del-retiro';
const parkPlan = 'https://www.madrid.es/UnidadesDescentralizadas/ZonasVerdes/TodoSobre/PlanesDirectoresParques/PDRetiro/PD%20Retiro%20diciembre%202024%20formato%20web.pdf';
const reinaSofia = 'https://www.museoreinasofia.es/visita/sedes-parque-retiro/';
const city = ['Ayuntamiento de Madrid', 'Madrid City Council', '马德里市政府'] as const;

type Localized = readonly [string, string, string];
const localeIndex = { es: 0, en: 1, zh: 2 } as const;

interface Access {
  manager: Localized;
  hours: Localized;
  admission: Localized;
  source: string;
}

const park: Access = {
  manager: city,
  hours: ['Parque: abr.–sep. 06:00–00:00; oct.–mar. 06:00–22:00. Sujeto a cierres por alertas meteorológicas.', 'Park: Apr–Sep 06:00–00:00; Oct–Mar 06:00–22:00. Weather closures may apply.', '公园 4–9 月 06:00–次日 00:00，10–3 月 06:00–22:00。恶劣天气可能临时闭园。'],
  admission: ['Acceso exterior gratuito.', 'Free outdoor access.', '室外区域免费。'],
  source: parkPlan,
};

const venues: Record<string, Access> = {
  'palacio-velazquez': {
    manager: ['Museo Reina Sofía', 'Reina Sofía Museum', '索菲亚王后国家艺术中心'],
    hours: ['Abr.–sep. 10:00–21:00; oct.–mar. 10:00–18:00. Consulta cierres y montaje.', 'Apr–Sep 10:00–21:00; Oct–Mar 10:00–18:00. Check closures and exhibition changeovers.', '4–9 月 10:00–21:00，10–3 月 10:00–18:00。节日及换展期间请查馆方公告。'],
    admission: ['Entrada gratuita.', 'Free admission.', '免费入场。'],
    source: reinaSofia,
  },
  'palacio-cristal': {
    manager: ['Museo Reina Sofía', 'Reina Sofía Museum', '索菲亚王后国家艺术中心'],
    hours: ['Interior cerrado temporalmente por obras. Consulta el museo para el acceso exterior.', 'Interior temporarily closed for restoration. Check the museum for exterior access.', '室内因修缮暂闭。室外参观请核对馆方公告。'],
    admission: ['Consulta la sede antes de salir.', 'Check the venue update before leaving.', '出发前查看馆方最新公告。'],
    source: reinaSofia,
  },
  'jardines-cecilio-rodriguez': {
    ...park,
    hours: ['Abr.–sep. 10:00–20:00. Oct.–mar. 10:00–18:00.', 'Apr–Sep 10:00–20:00. Oct–Mar 10:00–18:00.', '4–9 月 10:00–20:00，10–3 月 10:00–18:00。'],
    source: 'https://sede.madrid.es/UnidadesDescentralizadas/Educacion_Ambiental/ContenidosBasicos/Ficheros/RetiroPlano.pdf',
  },
  'rosaleda-retiro': {
    ...park,
    hours: ['Abr.–sep. 10:00–20:00. Oct.–mar. 10:00–18:00.', 'Apr–Sep 10:00–20:00. Oct–Mar 10:00–18:00.', '4–9 月 10:00–20:00，10–3 月 10:00–18:00。'],
    source: 'https://sede.madrid.es/UnidadesDescentralizadas/Educacion_Ambiental/ContenidosBasicos/Ficheros/RetiroPlano.pdf',
  },
  'fuente-de-las-campanillas': {
    ...park,
    source: 'https://patrimonioypaisaje.madrid.es/portales/monumenta/es/Monumentos-y-Edificios-Singulares/Monumentos/Estanque-de-las-Campanillas/?vgnextoid=2958091d1b9c4510091d1b9c45102e085a0aRCRD',
  },
  'fuente-egipcia': {
    ...park,
    source: 'https://patrimonioypaisaje.madrid.es/portales/monumenta/es/Monumentos-y-Edificios-Singulares/Monumentos/Fuente-Egipcia/?vgnextoid=c958091d1b9c4510091d1b9c45102e085a0aRCRD',
  },
  'montana-artificial': {
    ...park,
    hours: ['El acceso interior tiene horario propio; consulta al Ayuntamiento.', 'Check the city listing for separate interior hours.', '内部有独立开放时间，请查市府公告。'],
  },
  'biblioteca-eugenio-trias': {
    ...park,
    hours: ['Consulta el horario de la biblioteca antes de entrar.', 'Check library hours before going inside.', '入内前查图书馆开放时间。'],
    admission: ['Acceso gratuito; algunos servicios requieren carné.', 'Free entry. Some library services require a card.', '入馆免费，部分服务需图书馆证。'],
    source: 'https://www.madrid.es/portales/munimadrid/es/Inicio/Vivienda-urbanismo-y-obras/Vivienda/Oficina-verde/Biblioteca-Publica-Municipal-Eugenio-Trias-Casa-de-Fieras-de-El-Retiro-Retiro-/?vgnextoid=e791bed05ceed310VgnVCM1000000b205a0aRCRD',
  },
  'casa-de-vacas': {
    ...park,
    hours: ['Consulta la agenda municipal y el horario de cada actividad.', 'Check the city calendar for activity and exhibition hours.', '展览和活动时间以市府日程为准。'],
    admission: ['Consulta el acceso de cada actividad.', 'Check admission for the specific event.', '入场条件随活动而异。'],
    source: 'https://www.esmadrid.com/informacion-turistica/centro-cultural-casa-de-vacas',
  },
  'puerta-de-alcala': {
    ...park,
    hours: ['Vista exterior desde las aceras de la plaza.', 'Exterior view from the pavements around the square.', '从广场外围人行道看外观。'],
    source: 'https://www.esmadrid.com/informacion-turistica/puerta-de-alcala',
  },
  'cuesta-de-moyano': {
    ...park,
    manager: ['Ayuntamiento de Madrid y libreros de las casetas', 'Madrid City Council and individual booksellers', '马德里市政府与各书摊经营者'],
    hours: ['El horario depende de cada librero.', 'Stall hours vary by seller.', '各书摊营业时间不同。'],
    source: 'https://www.esmadrid.com/informacion-turistica/cuesta-de-moyano',
  },
  'real-jardin-botanico': {
    manager: ['Real Jardín Botánico (CSIC)', 'Royal Botanical Garden (CSIC)', '西班牙国家研究委员会皇家植物园'],
    hours: ['Abre a las 10:00. Cierra a las 18:00 de noviembre a febrero, a las 19:00 en marzo y octubre, a las 20:00 en abril y septiembre, y a las 21:00 de mayo a agosto. Consulta los cierres especiales.', 'Opens at 10:00. Closes at 18:00 November–February, 19:00 in March and October, 20:00 in April and September, and 21:00 May–August. Check special closures.', '每日通常 10:00 开园。11–2 月 18:00 闭园，3 月和 10 月 19:00，4 月和 9 月 20:00，5–8 月 21:00。特殊闭园日请查园方日历。'],
    admission: ['Entrada general al jardín: 4 €. Algunas exposiciones llevan suplemento. Consulta reducciones y gratuidades.', 'Standard garden admission: €4. Some exhibitions carry a surcharge. Check reduced and free admission.', '花园普通票 €4，部分展览另收费。优惠票和免费入场条件请查园方说明。'],
    source: 'https://rjb.csic.es/',
  },
  'museo-del-prado': {
    manager: ['Museo Nacional del Prado', 'Museo Nacional del Prado', '普拉多国家博物馆'],
    hours: ['Lunes a sábado 10:00–20:00. Domingos y festivos 10:00–19:00. Consulta cierres y horarios especiales.', 'Monday–Saturday 10:00–20:00. Sundays and public holidays 10:00–19:00. Check closures and special hours.', '周一至周六 10:00–20:00，周日及公共假日通常为 10:00–19:00。闭馆日及缩短开放日请查馆方日历。'],
    admission: ['Entrada general: 15 €. El museo publica tarifas reducidas y franjas gratuitas.', 'Standard admission: €15. The museum lists reduced prices and free time slots.', '普通票 €15。优惠票与免费入场时段由馆方公布。'],
    source: 'https://www.museodelprado.es/visita-el-museo',
  },
  'san-jeronimo-el-real': {
    manager: ['Parroquia de San Jerónimo el Real', 'Parish of San Jerónimo el Real', '圣赫罗尼莫皇家教堂堂区'],
    hours: ['Acceso interior sujeto al culto y al horario parroquial.', 'Interior access depends on services and parish hours.', '内部参观以礼拜和堂区开放安排为准。'],
    admission: ['Exterior visible desde la vía pública.', 'Exterior visible from the public street.', '可从公共街道观赏外观。'],
    source: 'https://www.esmadrid.com/informacion-turistica/iglesia-san-jeronimo-real',
  },
  'cason-del-buen-retiro': {
    manager: ['Museo Nacional del Prado', 'Museo Nacional del Prado', '普拉多国家博物馆'],
    hours: ['Consulta al Prado para visitas guiadas y servicios de biblioteca.', 'Check the Prado for guided visits and library services.', '导览和图书馆服务请查普拉多博物馆安排。'],
    admission: ['Exterior visible desde la vía pública.', 'Exterior visible from the public street.', '可从公共街道观赏外观。'],
    source: 'https://www.esmadrid.com/informacion-turistica/cason-del-buen-retiro',
  },
  'museo-de-artes-decorativas': {
    manager: ['Ministerio de Cultura · Museo Nacional de Artes Decorativas', 'Ministry of Culture · National Museum of Decorative Arts', '西班牙文化部国家装饰艺术博物馆'],
    hours: ['Martes a sábado 09:30–15:00. Domingos y festivos de apertura 10:00–15:00. Algunos jueves 17:00–20:00. Consulta cierres y salas abiertas.', 'Tuesday–Saturday 09:30–15:00. Sundays and public holidays when open 10:00–15:00. Selected Thursdays 17:00–20:00. Check closures and galleries.', '周二至周六 09:30–15:00，周日及开放的节假日 10:00–15:00，部分周四加开 17:00–20:00。参观前请核对闭馆日及开放展厅。'],
    admission: ['Consulta tarifas, gratuidades y exposiciones en el museo.', 'Check museum ticket prices, exemptions and exhibitions.', '票价、免费安排与展览以馆方公布为准。'],
    source: 'https://www.cultura.gob.es/mnartesdecorativas/visita/horario-tarifas.html',
  },
  'palacio-de-cibeles': {
    manager: ['Ayuntamiento de Madrid · CentroCentro', 'Madrid City Council · CentroCentro', '马德里市政府与 CentroCentro 文化中心'],
    hours: ['Consulta los horarios de CentroCentro y del mirador por separado.', 'Check CentroCentro and lookout hours separately.', '文化中心与观景台的开放时间需分别核对。'],
    admission: ['El mirador y algunas actividades tienen condiciones propias.', 'The lookout and some events have separate admission conditions.', '观景台及部分活动各有入场规定。'],
    source: 'https://www.centrocentro.org/',
  },
  'donde-comer': { ...park, source: parkSource },
  'tapas-barrio-ibiza': { ...park, source: parkSource },
  'barcas-retiro': {
    ...park,
    hours: ['Comprueba los turnos en la reserva municipal.', 'Check operating slots in the city booking system.', '营业班次以市府预约系统为准。'],
    admission: ['Alquiler de pago por barca.', 'Paid hire per boat.', '按船收费。'],
    source: 'https://www.esmadrid.com/informacion-turistica/estanque-grande-de-el-retiro',
  },
};

export function getAccess(slug: string, locale: TopicLocale) {
  const entry = venues[slug] ?? park;
  const index = localeIndex[locale];
  return {
    manager: entry.manager[index],
    hours: entry.hours[index],
    admission: entry.admission[index],
    source: entry.source,
  };
}

export function mapsLink(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const pondMap = 'https://maps.app.goo.gl/UiQJMWAmzD3pyw6aA';
