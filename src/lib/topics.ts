export type TopicLocale = 'es' | 'en' | 'zh';

export interface TopicSection {
  id: string;
  title: string;
  content: string;
}

export interface TopicFaq {
  question: string;
  answer: string;
}

export interface TopicContent {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: TopicSection[];
  faq: TopicFaq[];
  related: string[];
}

export type TopicData = Partial<Record<TopicLocale, TopicContent>>;

export const TOPICS: Record<string, TopicData> = {
  'barcas-retiro': {
    es: {
      h1: 'Paseos en barca por el Estanque Grande del Retiro',
      metaTitle: 'Barcas del Retiro: precios, reservas y embarcadero',
      metaDescription:
        'Todo sobre las barcas del Estanque Grande del Retiro: precios (6 € entre semana, 8 € fin de semana), reserva por Madrid Móvil, duración y dónde embarcar.',
      intro:
        'Remar por el Estanque Grande es una de las experiencias más queridas de Madrid. Desde la orilla norte se contempla el Monumento a Alfonso XII y la copa de los árboles del parque mientras se desliza la barca.',
      sections: [
        {
          id: 'precios',
          title: 'Precios y duración',
          content:
            'La tarifa es de 6 € por barca entre semana y 8 € los fines de semana y festivos. Cada salida dura 45 minutos y cada barca admite hasta 4 personas. El pago se gestiona en el propio embarcadero.',
        },
        {
          id: 'reserva',
          title: 'Cómo reservar',
          content:
            'Puedes alquilar in situ en el embarcadero del Estanque Grande, o reservar a través de la app Madrid Móvil y del portal de reservas deportivas del Ayuntamiento de Madrid. Los fines de semana y festivos se recomienda reservar con antelación.',
        },
        {
          id: 'embarque',
          title: 'El embarcadero y la experiencia',
          content:
            'El embarcadero oficial está en el extremo noreste del estanque, junto al Paseo de Colombia. Las barcas son tradicionales de madera y remo; no hace falta experiencia previa.',
        },
      ],
      faq: [
        {
          question: '¿Se puede reservar la barca?',
          answer:
            'Sí, por la app Madrid Móvil o el portal municipal de reservas deportivas, además de la contratación presencial en el embarcadero.',
        },
        {
          question: '¿Cuánto dura el paseo?',
          answer:
            'Cada turno son 45 minutos, tiempo suficiente para dar varias vueltas frente al Monumento a Alfonso XII.',
        },
        {
          question: '¿Pueden ir niños?',
          answer:
            'Sí, las barcas admiten hasta 4 personas e infantes acompañados. Se recomienda la supervisión de los adultos responsables.',
        },
      ],
      related: ['horarios', 'como-llegar', 'monumento-alfonso-xii'],
    },
    en: {
      h1: 'Boat Rides on the Great Pond of Retiro',
      metaTitle: 'Retiro Park Boat Rental: Prices, Booking & Location',
      metaDescription:
        'Everything about boating on Retiro’s Great Pond: prices (€6 weekdays, €8 weekends), Madrid Móvil booking, duration and where to board.',
      intro:
        'Rowing across the Great Pond is one of Madrid’s most beloved experiences. From the north shore you admire the Monument to Alfonso XII and the park’s tree canopy as you glide along.',
      sections: [
        {
          id: 'precios',
          title: 'Prices & duration',
          content:
            'The rate is €6 per boat on weekdays and €8 at weekends and public holidays. Each session lasts 45 minutes and each boat holds up to 4 people. Payment is handled at the boarding point.',
        },
        {
          id: 'reserva',
          title: 'How to book',
          content:
            'You can hire on site at the Great Pond boarding point, or book through the Madrid Móvil app and the Madrid City Council sports-booking portal. At weekends and holidays booking ahead is recommended.',
        },
        {
          id: 'embarque',
          title: 'The boarding point & experience',
          content:
            'The official boarding point is at the northeast end of the pond, by Paseo de Colombia. The boats are traditional wooden rowing boats; no previous experience is needed.',
        },
      ],
      faq: [
        {
          question: 'Can I reserve a boat?',
          answer:
            'Yes, via the Madrid Móvil app or the municipal sports-booking portal, as well as in person at the boarding point.',
        },
        {
          question: 'How long is the ride?',
          answer:
            'Each turn is 45 minutes, enough for several laps in front of the Monument to Alfonso XII.',
        },
        {
          question: 'Are children allowed?',
          answer:
            'Yes, boats hold up to 4 people and accompanied children are welcome. Adult supervision is recommended.',
        },
      ],
      related: ['horarios', 'como-llegar', 'monumento-alfonso-xii'],
    },
  },

  horarios: {
    es: {
      h1: 'Horario del Estanque Grande y del Parque del Retiro',
      metaTitle: 'Horario del Estanque del Retiro: parque y barcas',
      metaDescription:
        'Cuándo abre el Parque del Retiro (06:00–22:00 oct–mar; 06:00–00:00 abr–sep) y el horario de las barcas del estanque.',
      intro:
        'El parque y la lámina de agua funcionan con horarios distintos. Conviene distinguirlos para planear bien la visita y el paseo en barca.',
      sections: [
        {
          id: 'parque',
          title: 'Horario del parque',
          content:
            'El Parque del Retiro abre de 06:00 a 22:00 entre octubre y marzo, y de 06:00 a 00:00 entre abril y septiembre.',
        },
        {
          id: 'barcas',
          title: 'Horario de las barcas',
          content:
            'El alquiler de barcas funciona aproximadamente de 10:00 a 18:30, con jornadas más largas en verano. La navegación suele estar activa de primavera a otoño.',
        },
        {
          id: 'cierres',
          title: 'Cierres por meteorología',
          content:
            'Por tormentas u otros fenómenos adversos, el parque o zonas concretas pueden cerrarse temporalmente por seguridad.',
        },
      ],
      faq: [
        {
          question: '¿A qué hora abre el parque?',
          answer: 'De 06:00 a 22:00 en invierno y de 06:00 a 00:00 en verano.',
        },
        {
          question: '¿Todo el año hay barcas?',
          answer:
            'La navegación depende de la estación y del tiempo; suele funcionar de primavera a otoño. Confirma en los canales oficiales.',
        },
        {
          question: '¿Puede cerrar el parque?',
          answer: 'Sí, de forma puntual y por seguridad ante meteorología adversa.',
        },
      ],
      related: ['barcas-retiro', 'mapa', 'como-llegar'],
    },
    en: {
      h1: 'Opening Hours of the Great Pond & Retiro Park',
      metaTitle: 'Retiro Pond Opening Hours: Park & Boats',
      metaDescription:
        'When Retiro Park opens (06:00–22:00 Oct–Mar; 06:00–00:00 Apr–Sep) and the Great Pond boat schedule.',
      intro:
        'The park and the water feature run on different schedules. It helps to tell them apart when planning your visit and boat ride.',
      sections: [
        {
          id: 'parque',
          title: 'Park hours',
          content:
            'Retiro Park opens 06:00–22:00 from October to March, and 06:00–00:00 from April to September.',
        },
        {
          id: 'barcas',
          title: 'Boat hours',
          content:
            'Boat hire runs roughly 10:00–18:30, with longer days in summer. Navigation is typically active from spring to autumn.',
        },
        {
          id: 'cierres',
          title: 'Weather closures',
          content:
            'During storms or other adverse conditions, the park or specific areas may close temporarily for safety.',
        },
      ],
      faq: [
        {
          question: 'What time does the park open?',
          answer: '06:00–22:00 in winter and 06:00–00:00 in summer.',
        },
        {
          question: 'Are boats available all year?',
          answer:
            'Navigation depends on season and weather; it usually runs spring to autumn. Check official channels.',
        },
        {
          question: 'Can the park close?',
          answer: 'Yes, occasionally and for safety during adverse weather.',
        },
      ],
      related: ['barcas-retiro', 'mapa', 'como-llegar'],
    },
  },

  'como-llegar': {
    es: {
      h1: 'Cómo llegar al Estanque Grande del Retiro',
      metaTitle: 'Cómo llegar al Estanque del Retiro: metro, autobús y a pie',
      metaDescription:
        'La mejor forma de llegar al Estanque Grande del Retiro: metro Retiro (L2) e Ibiza (L9), autobuses y paseo desde el centro.',
      intro:
        'El estanque se ubica en el lado este del Parque del Retiro. Dependiendo de la entrada que elijas, el paseo hasta el agua es de 5 a 15 minutos.',
      sections: [
        {
          id: 'metro',
          title: 'En metro',
          content:
            'Las estaciones más cercanas son Retiro (línea 2) e Ibiza (línea 9), ambas a unos 5–10 minutos a pie por el parque. Príncipe de Vergara (líneas 2 y 9) y Atocha (línea 1, cercanías) también sirven de acceso.',
        },
        {
          id: 'autobus',
          title: 'En autobús y a pie',
          content:
            'Varias líneas urbanas pasan por los bordes del parque. Desde el centro (Puerta del Sol) es una caminata agradable de unos 20–25 minutos por calles señalizadas.',
        },
        {
          id: 'coche',
          title: 'En coche y aparcamiento',
          content:
            'No hay parking dentro del parque. Existen aparcamientos de pago en las inmediaciones (calles de Alcalá, Menéndez Pelayo y alrededores de Atocha).',
        },
      ],
      faq: [
        {
          question: '¿Qué metro deja más cerca del estanque?',
          answer:
            'Retiro (línea 2) e Ibiza (línea 9) son las más cercanas; desde ambas se camina por el parque.',
        },
        {
          question: '¿Se puede ir andando desde el centro?',
          answer: 'Sí, desde Sol hay unos 20–25 minutos por un paseo señalizado.',
        },
      ],
      related: ['mapa', 'horarios', 'monumento-alfonso-xii'],
    },
    en: {
      h1: 'How to Get to the Great Pond of Retiro',
      metaTitle: 'How to Get to Retiro Pond: Metro, Bus & Walking',
      metaDescription:
        'The best ways to reach Retiro’s Great Pond: Retiro (L2) and Ibiza (L9) metro, buses and a walk from the centre.',
      intro:
        'The pond sits on the eastern side of Retiro Park. Depending on the gate you use, the walk to the water takes 5–15 minutes.',
      sections: [
        {
          id: 'metro',
          title: 'By metro',
          content:
            'The closest stations are Retiro (line 2) and Ibiza (line 9), each about 5–10 minutes on foot through the park. Príncipe de Vergara (lines 2 and 9) and Atocha (line 1, cercanías) also provide access.',
        },
        {
          id: 'autobus',
          title: 'By bus & on foot',
          content:
            'Several city bus lines run along the park edges. From the centre (Puerta del Sol) it is a pleasant walk of about 20–25 minutes along signposted streets.',
        },
        {
          id: 'coche',
          title: 'By car & parking',
          content:
            'There is no parking inside the park. Paid car parks are available nearby (Alcalá, Menéndez Pelayo and around Atocha).',
        },
      ],
      faq: [
        {
          question: 'Which metro is closest to the pond?',
          answer:
            'Retiro (line 2) and Ibiza (line 9) are closest; both involve a walk through the park.',
        },
        {
          question: 'Can I walk from the centre?',
          answer: 'Yes, from Sol it is about 20–25 minutes along a signposted route.',
        },
      ],
      related: ['mapa', 'horarios', 'monumento-alfonso-xii'],
    },
  },

  mapa: {
    es: {
      h1: 'Mapa del Estanque Grande y alrededores',
      metaTitle: 'Mapa del Estanque del Retiro: embarcadero, monumento y salidas',
      metaDescription:
        'Mapa práctico del Estanque Grande del Retiro: dónde está el embarcadero, el Monumento a Alfonso XII, los jardines y las salidas hacia la zona de restaurantes.',
      intro:
        'Un vistazo al plano ayuda a aprovechar la visita: el estanque es alargado de este a oeste, con el Monumento a Alfonso XII en la cabecera este y el embarcadero en la orilla noreste.',
      sections: [
        {
          id: 'claves',
          title: 'Puntos clave',
          content:
            'El Monumento a Alfonso XII ocupa la cabecera este. El embarcadero oficial está en la orilla noreste, junto al Paseo de Colombia. Al sur y oeste se abren paseos y jardines.',
        },
        {
          id: 'puertas',
          title: 'Puertas y accesos',
          content:
            'Las puertas de Retiro e Ibiza acercan al estanque por el este; la Puerta de Alcalá y la calle Alcalá dan acceso por el norte y oeste.',
        },
        {
          id: 'comer',
          title: 'Hacia la zona de restaurantes',
          content:
            'Para comer tras el paseo, la zona sureste del parque conduce al barrio de Ibiza y a las terrazas de la calle Alcalá.',
        },
      ],
      faq: [
        {
          question: '¿Dónde está el embarcadero?',
          answer: 'En la orilla noreste del estanque, junto al Paseo de Colombia.',
        },
        {
          question: '¿Por dónde salgo para ir a comer?',
          answer:
            'Las salidas sureste llevan al barrio de Ibiza y a la calle Alcalá, con buenas opciones de restauración.',
        },
      ],
      related: ['como-llegar', 'donde-comer', 'monumento-alfonso-xii'],
    },
    en: {
      h1: 'Map of the Great Pond & Surroundings',
      metaTitle: 'Retiro Pond Map: Boarding Point, Monument & Exits',
      metaDescription:
        'A practical map of Retiro’s Great Pond: where the boarding point, the Alfonso XII Monument, the gardens and the exits toward dining are.',
      intro:
        'A quick look at the layout helps you make the most of the visit: the pond runs east–west, with the Monument to Alfonso XII at its eastern head and the boarding point on the northeast shore.',
      sections: [
        {
          id: 'claves',
          title: 'Key points',
          content:
            'The Monument to Alfonso XII occupies the eastern head. The official boarding point is on the northeast shore, by Paseo de Colombia. Gardens and promenades open to the south and west.',
        },
        {
          id: 'puertas',
          title: 'Gates & access',
          content:
            'The Retiro and Ibiza gates bring you to the pond from the east; Puerta de Alcalá and Calle de Alcalá give access from the north and west.',
        },
        {
          id: 'comer',
          title: 'Toward the dining area',
          content:
            'For a meal after the visit, the southeast exits lead to the Ibiza neighbourhood and the terraces of Calle de Alcalá.',
        },
      ],
      faq: [
        {
          question: 'Where is the boarding point?',
          answer: 'On the northeast shore of the pond, by Paseo de Colombia.',
        },
        {
          question: 'Which exit do I use to go eat?',
          answer:
            'The southeast exits lead to the Ibiza neighbourhood and Calle de Alcalá, with good dining options.',
        },
      ],
      related: ['como-llegar', 'donde-comer', 'monumento-alfonso-xii'],
    },
  },

  'monumento-alfonso-xii': {
    es: {
      h1: 'Monumento a Alfonso XII en el Estanque del Retiro',
      metaTitle: 'Monumento a Alfonso XII: historia y vistas del estanque',
      metaDescription:
        'El Monumento a Alfonso XII en el Estanque del Retiro: quién lo diseñó, cuándo se inauguró y las mejores vistas del estanque.',
      intro:
        'Presidiendo la cabecera este del estanque, el Monumento a Alfonso XII es una de las imágenes más icónicas de Madrid. Su semicírculo de columnas enmarca el agua y el horizonte del parque.',
      sections: [
        {
          id: 'historia',
          title: 'Historia',
          content:
            'El monumento fue proyectado por José Grases Riera y se inauguró en 1922. La estatua ecuestre del rey es obra de Mariano Benlliure. Se levantó como homenaje póstumo al monarca que reinó entre 1874 y 1885.',
        },
        {
          id: 'arquitectura',
          title: 'Arquitectura',
          content:
            'Destaca una amplia exedra o semicolumnario de orden corintio, rematada por una cúpula y flanqueada por esculturas alegóricas. La balaustrada permite el paseo frente al estanque.',
        },
        {
          id: 'vistas',
          title: 'Las mejores vistas',
          content:
            'Desde la balaustrada se contempla el estanque en toda su longitud, ideal al amanecer y al atardecer. Es el punto de partida natural de las fotos del estanque.',
        },
      ],
      faq: [
        { question: '¿Cuándo se inauguró?', answer: 'En 1922.' },
        {
          question: '¿Quién lo diseñó?',
          answer:
            'Proyectado por José Grases Riera; la estatua ecuestre es de Mariano Benlliure.',
        },
        {
          question: '¿Dónde está respecto al agua?',
          answer:
            'En la cabecera este del estanque; de cara al Monumento se abre la lámina de agua.',
        },
      ],
      related: ['barcas-retiro', 'mapa', 'palacio-cristal'],
    },
    en: {
      h1: 'Monument to Alfonso XII at Retiro Pond',
      metaTitle: 'Alfonso XII Monument: History & Pond Views',
      metaDescription:
        'The Monument to Alfonso XII at Retiro Pond: who designed it, when it opened and the best pond views.',
      intro:
        'Crowning the eastern head of the pond, the Monument to Alfonso XII is one of Madrid’s most iconic images. Its semicircular colonnade frames the water and the park skyline.',
      sections: [
        {
          id: 'historia',
          title: 'History',
          content:
            'The monument was designed by José Grases Riera and inaugurated in 1922. The equestrian statue of the king is by Mariano Benlliure. It was raised as a posthumous tribute to the monarch who reigned from 1874 to 1885.',
        },
        {
          id: 'arquitectura',
          title: 'Architecture',
          content:
            'It features a broad exedra or semicircular colonnade in the Corinthian order, topped by a dome and flanked by allegorical sculptures. The balustrade invites a stroll facing the pond.',
        },
        {
          id: 'vistas',
          title: 'Best views',
          content:
            'From the balustrade you see the pond along its full length, ideal at sunrise and sunset. It is the natural starting point for pond photos.',
        },
      ],
      faq: [
        { question: 'When was it inaugurated?', answer: 'In 1922.' },
        {
          question: 'Who designed it?',
          answer:
            'Designed by José Grases Riera; the equestrian statue is by Mariano Benlliure.',
        },
        {
          question: 'Where is it relative to the water?',
          answer:
            'At the eastern head of the pond; the water opens out facing the monument.',
        },
      ],
      related: ['barcas-retiro', 'mapa', 'palacio-cristal'],
    },
  },

  'palacio-cristal': {
    es: {
      h1: 'Palacio de Cristal del Retiro',
      metaTitle: 'Palacio de Cristal: historia y estado actual',
      metaDescription:
        'El Palacio de Cristal del Retiro: cuándo se construyó, qué alberga hoy (exposiciones temporales) y cómo llegar desde el estanque.',
      intro:
        'El Palacio de Cristal es uno de los edificios más fotografiados del parque. Levantado en 1887, hoy forma parte del Museo Reina Sofía y acoge exposiciones temporales.',
      sections: [
        {
          id: 'historia',
          title: 'Historia',
          content:
            'Se construyó en 1887 por Ricardo Velázquez Bosco para la Exposición de las Islas Filipinas, con estructura de hierro y vidrio inspirada en la arquitectura de Inglaterra y Bélgica.',
        },
        {
          id: 'estado',
          title: 'Estado actual',
          content:
            'Gestionado por el Museo Reina Sofía, el palacio suele albergar exposiciones temporales de arte contemporáneo. El entorno y la fachada se pueden visitar; el acceso a las salas depende de la programación vigente. Conviene verificar fechas y horarios en la web del museo.',
        },
        {
          id: 'ruta',
          title: 'Desde el estanque',
          content:
            'Desde la orilla oeste del estanque, un paseo señalizado de unos 10–15 minutos por los jardines lleva al Palacio de Cristal y al estanque de su entorno.',
        },
      ],
      faq: [
        {
          question: '¿La entrada es gratuita?',
          answer:
            'El acceso a las exposiciones del Reina Sofía y al entorno suele ser gratuito, pero la programación puede variar; confirma en la web del museo.',
        },
        {
          question: '¿Está abierto por dentro?',
          answer:
            'Depende de la exposición en curso. El edificio y sus alrededores se pueden recorrer; verifica el horario antes de ir.',
        },
        {
          question: '¿Cómo llego desde el estanque?',
          answer: 'A pie por los jardines, unos 10–15 minutos hacia el oeste.',
        },
      ],
      related: ['mapa', 'ruta-una-hora', 'monumento-alfonso-xii'],
    },
    en: {
      h1: 'Crystal Palace of Retiro',
      metaTitle: 'Crystal Palace: History & Current Status',
      metaDescription:
        'Retiro’s Crystal Palace: when it was built, what it hosts today (temporary exhibitions) and how to reach it from the pond.',
      intro:
        'The Crystal Palace is one of the park’s most photographed buildings. Built in 1887, it is now part of the Reina Sofía Museum and hosts temporary exhibitions.',
      sections: [
        {
          id: 'historia',
          title: 'History',
          content:
            'It was built in 1887 by Ricardo Velázquez Bosco for the Philippine Islands Exhibition, with an iron-and-glass structure inspired by English and Belgian architecture.',
        },
        {
          id: 'estado',
          title: 'Current status',
          content:
            'Managed by the Reina Sofía Museum, the palace usually hosts temporary contemporary-art exhibitions. The surroundings and façade can be visited; access to the rooms depends on the current programme. Check dates and times on the museum website.',
        },
        {
          id: 'ruta',
          title: 'From the pond',
          content:
            'From the west shore of the pond, a signposted walk of about 10–15 minutes through the gardens leads to the Crystal Palace and its surrounding pond.',
        },
      ],
      faq: [
        {
          question: 'Is entry free?',
          answer:
            'Access to the Reina Sofía exhibitions and surroundings is usually free, but programming can vary; check the museum website.',
        },
        {
          question: 'Is it open inside?',
          answer:
            'It depends on the exhibition on show. The building and grounds can be explored; verify hours before going.',
        },
        {
          question: 'How do I get there from the pond?',
          answer: 'On foot through the gardens, about 10–15 minutes west.',
        },
      ],
      related: ['mapa', 'ruta-una-hora', 'monumento-alfonso-xii'],
    },
  },

  'donde-comer': {
    es: {
      h1: 'Dónde comer cerca del Estanque del Retiro',
      metaTitle: 'Dónde comer cerca del Estanque del Retiro: guía de opciones',
      metaDescription:
        'Dónde comer tras el estanque: Florida Park dentro del parque, tapas en el barrio de Ibiza y clásicos como La Castela o La Montería.',
      intro:
        'Tras el paseo en barca, el entorno del parque ofrece opciones para todos los bolsillos: desde el legendario Florida Park dentro del recinto hasta las calles de los barrios de Ibiza y Retiro.',
      sections: [
        {
          id: 'dentro',
          title: 'Dentro del parque',
          content:
            'Florida Park, en el interior del Parque del Retiro, combina salón, terraza y programación de ocio. Es la opción más cómoda si no quieres salir del recinto.',
        },
        {
          id: 'ibiza',
          title: 'Barrio de Ibiza',
          content:
            'Al sureste del parque, el barrio de Ibiza concentra tabernas y restaurantes de toda la vida. Aquí están, entre otros, La Castela (Calle Doctor Castelo), La Catapa (Calle Menorca) y Laredo (Calle Doctor Castelo).',
        },
        {
          id: 'clasicos',
          title: 'Clásicos y café',
          content:
            'Para una comida más formal, La Montería (Calle Lope de Rueda) es una opción de cocina española. Por la mañana, Magasand (cerca de la calle Columela) sirve desayunos y café ligero antes de entrar al parque.',
        },
      ],
      faq: [
        {
          question: '¿Dónde comer justo después de las barcas?',
          answer:
            'Florida Park dentro del parque, o salir por el sureste hacia el barrio de Ibiza.',
        },
        {
          question: '¿Hay opciones para familias?',
          answer:
            'Sí: terrazas amplias como Florida Park y tabernas de barrio con cocina tranquila.',
        },
      ],
      related: ['tapas-barrio-ibiza', 'planes-con-ninos', 'ruta-una-hora'],
    },
    en: {
      h1: 'Where to Eat Near Retiro Pond',
      metaTitle: 'Where to Eat Near Retiro Pond: Options Guide',
      metaDescription:
        'Where to eat after the pond: Florida Park inside the park, Ibiza-district tapas and classics like La Castela or La Montería.',
      intro:
        'After a boat ride, the area around the park offers options for every budget: from the legendary Florida Park inside the grounds to the streets of the Ibiza and Retiro neighbourhoods.',
      sections: [
        {
          id: 'dentro',
          title: 'Inside the park',
          content:
            'Florida Park, inside Retiro Park, combines a hall, terrace and entertainment programming. It is the most convenient option if you do not want to leave the grounds.',
        },
        {
          id: 'ibiza',
          title: 'Ibiza neighbourhood',
          content:
            'Southeast of the park, the Ibiza neighbourhood gathers long-standing taverns and restaurants. Among others, La Castela (Calle Doctor Castelo), La Catapa (Calle Menorca) and Laredo (Calle Doctor Castelo) are here.',
        },
        {
          id: 'clasicos',
          title: 'Classics & coffee',
          content:
            'For a more formal meal, La Montería (Calle Lope de Rueda) offers Spanish cuisine. In the morning, Magasand (near Calle Columela) serves breakfasts and light coffee before entering the park.',
        },
      ],
      faq: [
        {
          question: 'Where do I eat right after boating?',
          answer:
            'Florida Park inside the park, or exit southeast toward the Ibiza neighbourhood.',
        },
        {
          question: 'Are there family options?',
          answer:
            'Yes: spacious terraces like Florida Park and neighbourhood taverns with relaxed cooking.',
        },
      ],
      related: ['tapas-barrio-ibiza', 'planes-con-ninos', 'ruta-una-hora'],
    },
  },

  'tapas-barrio-ibiza': {
    es: {
      h1: 'Ruta de tapas por el barrio de Ibiza',
      metaTitle: 'Tapas en el barrio de Ibiza: guía de bares',
      metaDescription:
        'Tapas cerca del Retiro: el barrio de Ibiza y sus tabernas, con La Castela, La Catapa y Laredo, a un paseo del estanque.',
      intro:
        'El barrio de Ibiza, al sureste del Parque del Retiro, es un barrio de tabernas madrileñas auténticas. Es el complemento gastronómico natural tras una visita al estanque.',
      sections: [
        {
          id: 'zona',
          title: 'La zona',
          content:
            'Situado entre las calles Doctor Castelo, Menorca y Lope de Rueda, el barrio combina bares de toda la vida con locales renovados. Está a 10–15 minutos a pie desde la orilla sureste del estanque.',
        },
        {
          id: 'sitios',
          title: 'Algunos lugares',
          content:
            'La Castela (Calle Doctor Castelo) es conocida por sus tapas y ambiente de barrio. La Catapa (Calle Menorca) apuesta por vinos y tapas de autor. Laredo (Calle Doctor Castelo) ofrece cocina de mercado en un local clásico. La Montería (Calle Lope de Rueda) es una opción de comida más completa.',
        },
        {
          id: 'ruta',
          title: 'Cómo ir desde el estanque',
          content:
            'Sal por las puertas sureste del parque y baja por la calle de Ibiza o Alcalá; en pocos minutos estás en el barrio. Lleva calzado cómodo y reserva los fines de semana.',
        },
      ],
      faq: [
        {
          question: '¿Está lejos del estanque?',
          answer: 'No: a unos 10–15 minutos a pie por el sureste del parque.',
        },
        {
          question: '¿Hay que reservar?',
          answer:
            'En fines de semana y festivos, sí se recomienda reservar en los locales más conocidos.',
        },
      ],
      related: ['donde-comer', 'planes-con-ninos', 'ruta-una-hora'],
    },
    en: {
      h1: 'Tapas Route through the Ibiza District',
      metaTitle: 'Tapas in the Ibiza District: Bar Guide',
      metaDescription:
        'Tapas near Retiro: the Ibiza district and its taverns, with La Castela, La Catapa and Laredo, a walk from the pond.',
      intro:
        'The Ibiza district, southeast of Retiro Park, is a neighbourhood of authentic Madrid taverns. It is the natural foodie follow-up after a pond visit.',
      sections: [
        {
          id: 'zona',
          title: 'The area',
          content:
            'Between Calle Doctor Castelo, Calle Menorca and Calle Lope de Rueda, the district mixes old-school bars with newer venues. It is a 10–15 minute walk from the southeast shore of the pond.',
        },
        {
          id: 'sitios',
          title: 'Some spots',
          content:
            'La Castela (Calle Doctor Castelo) is known for its tapas and neighbourhood feel. La Catapa (Calle Menorca) focuses on wines and creative tapas. Laredo (Calle Doctor Castelo) serves market cuisine in a classic setting. La Montería (Calle Lope de Rueda) is a more complete meal option.',
        },
        {
          id: 'ruta',
          title: 'How to get there from the pond',
          content:
            'Exit through the southeast gates and walk down Calle de Ibiza or Alcalá; within minutes you are in the district. Wear comfortable shoes and book on weekends.',
        },
      ],
      faq: [
        {
          question: 'Is it far from the pond?',
          answer: 'No: about 10–15 minutes on foot from the park’s southeast side.',
        },
        {
          question: 'Should I book?',
          answer:
            'On weekends and holidays, booking at the better-known spots is recommended.',
        },
      ],
      related: ['donde-comer', 'planes-con-ninos', 'ruta-una-hora'],
    },
  },

  'ruta-una-hora': {
    es: {
      h1: 'Ruta de una hora por el Estanque del Retiro',
      metaTitle: 'Estanque del Retiro en una hora: ruta rápida',
      metaDescription:
        'Cómo ver lo esencial del Estanque del Retiro en una hora: monumento, barcas, jardines y salida.',
      intro:
        'Si dispones de poco tiempo, esta ruta concentra lo imprescindible: el Monumento a Alfonso XII, el paseo de orilla y, si hay disponibilidad, una vuelta en barca.',
      sections: [
        {
          id: 'pasos',
          title: 'La ruta',
          content:
            'Entra por la puerta de Retiro o Ibiza y dirígete a la cabecera este. Contempla el Monumento a Alfonso XII desde la balaustrada (10 min). Pasea por la orilla norte hasta el embarcadero (15 min). Si las barcas están activas, reserva 45 min; si no, continúa por los jardines (20 min) y sal por la puerta más cercana.',
        },
        {
          id: 'tiempo',
          title: 'Gestión del tiempo',
          content:
            'Sin barca, la ruta es de unos 45–60 minutos. Con barca, suma 45 minutos de navegación y llega 15 minutos antes para el embarque.',
        },
        {
          id: 'consejos',
          title: 'Consejos',
          content:
            'Ve temprano para luz buena y menos gente. Lleva agua en verano y consulta el horario de barcas antes de venir.',
        },
      ],
      faq: [
        {
          question: '¿Se puede hacer en menos de una hora?',
          answer:
            'Sí, la vuelta al monumento y la orilla norte cabe en unos 45 minutos sin barca.',
        },
        {
          question: '¿Merece la pena la barca?',
          answer:
            'Si el tiempo acompaña, es la experiencia más memorable; reserva 45 minutos y llégale con margen.',
        },
      ],
      related: ['como-llegar', 'mapa', 'planes-con-ninos'],
    },
    en: {
      h1: 'One-Hour Route around Retiro Pond',
      metaTitle: 'Retiro Pond in One Hour: Quick Route',
      metaDescription:
        'How to see the essentials of Retiro Pond in an hour: monument, boats, gardens and exit.',
      intro:
        'If you are short on time, this route concentrates the must-sees: the Monument to Alfonso XII, the shoreline walk and, if available, a boat ride.',
      sections: [
        {
          id: 'pasos',
          title: 'The route',
          content:
            'Enter by the Retiro or Ibiza gate and head to the eastern head. View the Monument to Alfonso XII from the balustrade (10 min). Walk the north shore to the boarding point (15 min). If boats are running, allow 45 min; if not, continue through the gardens (20 min) and exit by the nearest gate.',
        },
        {
          id: 'tiempo',
          title: 'Time management',
          content:
            'Without a boat, the route is about 45–60 minutes. With a boat, add 45 minutes of navigation and arrive 15 minutes early for boarding.',
        },
        {
          id: 'consejos',
          title: 'Tips',
          content:
            'Go early for good light and fewer crowds. Carry water in summer and check boat hours before coming.',
        },
      ],
      faq: [
        {
          question: 'Can it be done in under an hour?',
          answer:
            'Yes, the loop to the monument and north shore fits in about 45 minutes without a boat.',
        },
        {
          question: 'Is the boat worth it?',
          answer:
            'Weather permitting, it is the most memorable experience; allow 45 minutes and arrive with margin.',
        },
      ],
      related: ['como-llegar', 'mapa', 'planes-con-ninos'],
    },
  },

  'planes-con-ninos': {
    es: {
      h1: 'Visitar el Estanque del Retiro con niños',
      metaTitle: 'El Estanque del Retiro con niños: plan familiar',
      metaDescription:
        'Plan familiar en el Estanque del Retiro: barcas, teatro de títeres, aseos y rutas aptas para niños.',
      intro:
        'El estanque y el parque son ideales en familia. Combinan aire libre, una experiencia en barca y actividades pensadas para los más pequeños.',
      sections: [
        {
          id: 'barcas',
          title: 'Barcas en familia',
          content:
            'Las barcas admiten hasta 4 personas, así que una familia puede subir junta. Los adultos reman y los niños disfrutan del paseo frente al Monumento a Alfonso XII.',
        },
        {
          id: 'titeres',
          title: 'Teatro de títeres',
          content:
            'El Parque del Retiro cuenta con una tradición de teatro de títeres al aire libre. Las funciones suelen anunciarse en fines de semana y festivos; conviene consultar la programación municipal antes de la visita.',
        },
        {
          id: 'servicios',
          title: 'Aseos y descanso',
          content:
            'Hay aseos públicos y zonas de descanso señalizadas por el parque. Lleva agua, protector solar y un plan de sombra en los meses cálidos.',
        },
      ],
      faq: [
        {
          question: '¿Hay que llevar carrito?',
          answer:
            'Sí, los caminos principales son aptos para carritos; evita las zonas de césped en mal estado.',
        },
        {
          question: '¿Qué edad para las barcas?',
          answer:
            'No hay restricción de edad; los menores deben ir acompañados y supervisados por un adulto.',
        },
      ],
      related: ['barcas-retiro', 'ruta-una-hora', 'donde-comer'],
    },
    en: {
      h1: 'Visiting Retiro Pond with Children',
      metaTitle: 'Retiro Pond with Kids: Family Plan',
      metaDescription:
        'Family plan at Retiro Pond: boats, puppet theatre, restrooms and child-friendly routes.',
      intro:
        'The pond and park are ideal for families. They combine open air, a boat experience and activities designed for the little ones.',
      sections: [
        {
          id: 'barcas',
          title: 'Boats with family',
          content:
            'Boats hold up to 4 people, so a family can ride together. Adults row while children enjoy the ride in front of the Monument to Alfonso XII.',
        },
        {
          id: 'titeres',
          title: 'Puppet theatre',
          content:
            'Retiro Park has a tradition of open-air puppet theatre. Shows are typically announced on weekends and holidays; check the municipal programme before your visit.',
        },
        {
          id: 'servicios',
          title: 'Restrooms & rest',
          content:
            'Public restrooms and signposted rest areas are scattered around the park. Carry water, sunscreen and a shade plan in the warmer months.',
        },
      ],
      faq: [
        {
          question: 'Should I bring a stroller?',
          answer:
            'Yes, main paths are stroller-friendly; avoid rough grass areas.',
        },
        {
          question: 'What age for the boats?',
          answer:
            'No age restriction; minors must be accompanied and supervised by an adult.',
        },
      ],
      related: ['barcas-retiro', 'ruta-una-hora', 'donde-comer'],
    },
  },
};

export const TOPIC_SLUGS = Object.keys(TOPICS);

export function getTopic(slug: string): TopicData | undefined {
  return TOPICS[slug];
}

export const BUILT_TOPIC_LOCALES: TopicLocale[] = ['es', 'en'];
