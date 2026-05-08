import { CategoriaProducto, Producto, Slug } from "./data.types";

export const products: Producto[] = [
  {
    slug: "cubierta-fija",
    title: "Cubierta fija para Cancha de Pádel",
    shortDescription: "Cubierta fija para canchas de pádel con diseño moderno y eficiente, adaptable a una o varias canchas, optimizada para brindar comodidad y un drenaje eficiente.",
    description: "Diseño simple y eficiente, con estilizada cubierta a dos aguas, la mayor altura al centro de la cancha según conveniencia de los jugadores, pendientes importantes para maximizar el drenaje del agua,nieve o granizo. Alturas variables según definición del cliente. \n\nSi bien el diseño modular está pensado para cubrir un área de 11 x 21 m, este diseño se puede escalar según la necesidad del cliente, también podemos presentar diseños que cubren varias canchas a la vez y otras geometrías a pedido.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/6a2712e3a_generated_1d140733.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/6a2712e3a_generated_1d140733.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/44a2c7753_generated_14d63257.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/02233302e_generated_85b4b0e1.png",
    ],
    category: "deportivo",
    features: [
      "Diseño moderno a dos aguas",
      "Drenaje eficiente para agua, nieve y granizo",
      "Altura central optimizada para mayor comodidad de juego",
      "Estructura modular y escalable",
      "Adaptable para una o varias canchas",
      "Dimensiones personalizables según el cliente",
    ],
    relatedProjects: [],
  },
  {
    slug: "cubierta-retactil",
    title: "Kit retráctil para convertir el techo fijo de la cancha de Pádel en Retráctil",
    shortDescription: "Kit retráctil con accionamiento eléctrico que permite transformar una cubierta fija para cancha de pádel en una solución retráctil de forma práctica y adaptable.",
    description: "El diseño antes citado, puede convertirse fácilmente en una cubierta retráctil con accionamiento eléctrico, mediante un conjunto de elementos (Kit Retráctil) específicamente creadopara este diseño. Este conjunto puede incorporarse al inicio del montaje o en cualquier momento posterior que el cliente defina.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/42e599c24_generated_de392810.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/42e599c24_generated_de392810.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/336446b68_generated_26be886d.png",
    ],
    category: "deportivo",
    features: [
      "Sistema retráctil con accionamiento eléctrico",
      "Compatible con cubiertas fijas de pádel",
      "Instalación desde el inicio o posteriormente",
      "Diseño específicamente desarrollado para este tipo de estructura",
      "Mayor versatilidad y funcionalidad del espacio",
      "Operación práctica y eficiente"
    ],
    relatedProjects: [],
  },
  {
    slug: "cubierta-pared-padel",
    title: "Cobertura de paredes fijas o retractiles",
    shortDescription: "Cobertura textil para paredes laterales de canchas de pádel, diseñada para reducir reflejos de luz y adaptarse a diferentes configuraciones fijas o retráctiles.",
    description: "Nuestros diseños, también contemplan la posibilidad de que todas o algunas de las paredes laterales de la cancha lleven también cobertura textil, para evitar los reflejos de luz en el vidrio. Estas pueden tener distintos tamaños, alturas, colores, materiales (solidos o semi translucidos).pueden ser fijas o retractiles con accionamiento manual o eléctrico, según la conveniencia en cada cancha.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/1642277d3_generated_0f0edbb9.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/1642277d3_generated_0f0edbb9.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/336446b68_generated_26be886d.png",
    ],
    category: "deportivo",
    features: [
      "Reduce reflejos de luz en los vidrios",
      "Disponible en versiones fijas o retráctiles",
      "Accionamiento manual o eléctrico",
      "Diferentes tamaños y alturas disponibles",
      "Opciones sólidas o semi translúcidas"
    ],
    relatedProjects: [],
  },
  {
    slug: "cubiertas-deportivas",
    title: "Cubiertas para Canchas Deportivas y para Colegios",
    shortDescription: "Cubiertas textiles para canchas deportivas y espacios escolares, diseñadas para brindar protección, sombra y funcionalidad en diferentes tipos de instalaciones..",
    description: "Tensomembranas Iberia, se beneficia del portafolio de diseños y Canchas Deportivas ejecutadas por su empresa hermana Preysi. Cubiertas para todo tipo de canchas: Pádel, Tenis, football, básquet, juegos infantiles, canchas de uso múltiple y espacios de sombra en colegios. (Ver presentación respectiva).",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/7c79d7742_generated_6c48e6ef.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/7c79d7742_generated_6c48e6ef.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/02233302e_generated_85b4b0e1.png",
    ],
    category: "deportivo",
    features: [
      "Cobertura para múltiples disciplinas deportivas",
      "Aplicable en colegios y áreas recreativas",
      "Diseños adaptables a distintos espacios",
      "Protección contra sol y condiciones climáticas",
      "Espacios de sombra para juegos infantiles y áreas comunes"
    ],
    relatedProjects: [],
  },
  {
    slug: "tensomembranas",
    title: "Tensomembranas",
    shortDescription: "Estructuras ligeras de arquitectura textil diseñadas para cubrir grandes espacios con alta resistencia, estética moderna y aprovechamiento de luz natural. Gracias a su flexibilidad, rapidez de instalación y eficiencia energética, se utilizan en cubiertas, fachadas y espacios deportivos, comerciales e industriales.",
    description: "Las tensomembranas son una rama de la arquitectura textil. Por lo general se trata de estructuras ligeras tensadas que solo tienen rigidez a tracción y que generalmente son pretensadas. \n\n Las estructuras textiles proporcionan amplios cerramientos de gran variedad e interés espacial, requieren mínimos elementos de soporte de estructura 'rígida' y proporcionan niveles generales de luz diurna natural muy buenos. Desde el punto de vista de la ingeniería, las estructuras textiles son membranas de espesor constante que en virtud de su forma superficial y de la gran deformidad, son capaces de soportar las cargas que se requieren en el Código Técnico de la Edificación. A la hora de realizar un proyecto de arquitectura textil hay que tener en cuenta tres factores estructurales fundamentales: la elección de la forma superficial, los niveles de pretensado y la deformidad de la superficie, pues las superficies textiles difieren mucho de las estructuras convencionales. \n\n La arquitectura textil puede cubrir las mismas funciones que un edificio convencional, con algunas ventajas que nos permiten augurar un futuro notable a este tipo de estructuras: ofrece una gran imagen estética que se adapta perfectamente a la estructura del edificio, es rápida de fabricar e instalar y se beneficia de los progresos realizados en materiales en los últimos años. Actualmente se instalan principalmente en edificios singulares, aunque poco a poco se va apreciando como una estructura tensada puede conseguir ahorros energéticos considerables, con una estructura muy estética. \n\n La arquitectura textil se puede fabricar tensada o neumática. Las cubiertas neumáticas son las soportadas por aire, ya que el esfuerzo perpendicular se consigue con una sobre presión de aire. Las cubiertas tensadas son las que emplean mástiles, tensores y cables para tensar la tela por sus extremos en direcciones y sentidos opuestos, incluso fuera de plano.\n\nAlgunas de las razones de principales que favorecen el empleo de las cubiertas textiles son las siguientes: \n\nEl peso propio inferior a 1 kp/m2 que, junto con la resistencia y flexibilidad del material, permite obtener cubiertas completas extraordinariamente ligeras, sin correas intermedias, de entre 5 y 10 kp/m2 \n\ El coeficiente de transmisión de la luz permite el aprovechamiento de la iluminación natural sin necesidad de recurrir al vidrio, cuya rigidez requiere sobredimensionado \n\n La puesta en obra es un montaje de elementos prefabricados que se podrán desmontar y reciclar \n\n Hoy en día, las estructuras textiles se encuentran en casi todas las zonas climáticas del mundo y sirven para una gran variedad de funciones. Los materiales que se usan para fabricar estas membranas han cambiado mucho desde sus comienzos, ya ya se pueden encontrar tejidos altamente tecnológicos. \n\n Los materiales comúnmente utilizados en la confección de las membranas reflejan más del 75% de la energía solar incidente, (absorben el 17% y transmiten el 13% de la luz solar incidente), lo cual hace que sean muy eficaces como cubiertas en las zonas templadas, tropicales y áridas. Pero también tienen un buen funcionamiento en zonas templadas, combinados con otros sistemas constructivos. Actualmente, la arquitectura textil ya no se usa exclusivamente para la realización de cubiertas tensadas, sino que comienza a usarse también para cubrir las fachadas de los edificios, cubiertas neumáticas mediante cojines de ETFE. Además, ha llegado al mercado industrial, para la realización de grandes espacios cubiertos, silos de almacenaje, depósitos de gas, etc.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/2d946aaf1_generated_8df23873.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/2d946aaf1_generated_8df23873.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/095c36494_generated_bc151458.png",
    ],
    category: "tensomembranas",
    features: [
      "Arquitectura Ilimitada",
      "Vanguardista",
      "Durable (vida útil de mas de 30 años)",
      "Refleja el color de la iluminación",
      "Es un elemento estructural",
      "Elegante y exclusivo",
      "Liviana",
      "Traslúcida",
      "Desmontable",
      "Protección UV"
    ],
    relatedProjects: [],
  },
  {
    slug: "campamentos",
    title: "Campamentos",
    shortDescription: "Estos campamentos temporales se diseñan específicamente para cumplir las necesidades de cada proyecto. Los diseños toman en cuenta cargas de viento, lluvia, y nieve según la situación geológica.",
    description: "Campamentos / Refugios / Albergues desmontables de excelente calidad. \n\n Estos campamentos temporales se diseñan específicamente para cumplir las necesidades de cada proyecto. Los diseños toman en cuenta cargas de viento, lluvia, y nieve según la situación geológica. \n\n Este tipo de campamento le ofrece la posibilidad de tener sin numero de opciones en cuanto a dimensiones, accesos y conexiones. \n\n La estructura modular, liviana y la cubierta de tela le ofrece una construcción con poco impacto al medio ambiente y la posibilidad de movilizar el campamento a diferentes localidades. \n\n La vida útil de este tipo de campamentos es de aproximadamente 10 a 12 años y ofrecemos una garantía de 7 años.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/095c36494_generated_bc151458.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/095c36494_generated_bc151458.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/b1f19abac_generated_47c731c4.png",
    ],
    category: "campamentos",
    features: [
      "Elegante",
      "Arquitectura limpia",
      "Liviano y moderno",
      "Desmontable",
      "Protección UV",
      "Vanguardista",
      "Refleja el color de la iluminación"
    ],
    relatedProjects: [],
  },
  {
    slug: "domos",
    title: "Domos",
    shortDescription: "Los Domos Geodésicos consisten en una estructura semiesférica compuesta por un complejo grupo de triángulos. ",
    description: "Domos desarmables de varios tamaños \n\n Los Domos Geodésicos consisten en una estructura semiesférica compuesta por un complejo grupo de triángulos. Usando esta estructura cubierta con un textil de características especiales, surge el mejor sistema para cubrir pequeñas y grandes superficies que pueden ser usadas temporalmente o de manera permanente. \n\n Alquiler o Venta \n\ Alquiler o venta de Domos, Plops, o Inflables para eventos de diferentes formas y tamaños. Podemos construirlos acorde a sus requisitos. \n\n Estructuras tipo Plop \n\n Las estructuras tipo Plop representan una excelente alternativa a las clásicas carpas para eventos. Con áreas útiles de a partir de 20 metros cuadrados estas estructuras llaman la atención por su original y practico diseño. Podemos hacer estructuras Plops de diferentes tamaños y colores según su necesidad. También contamos con Plops de diferentes colores para alquiler.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/97b87b04e_generated_9d3694a5.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/97b87b04e_generated_9d3694a5.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/b1f19abac_generated_47c731c4.png",
    ],
    category: "domos",
    features: [
      "Elegante",
      "Durable (vida útil mas de 30 años)",
      "Arquitectura limpia",
      "Liviano y moderno",
      "Desmontable",
      "Protección UV",
      "Vanguardista",
      "Refleja el color de la iluminación"
    ],
    relatedProjects: [],
  }
];

export function getProductBySlug(slug: Slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category?: CategoriaProducto) {
  if (!category) return products;
  return products.filter((p) => p.category === category);
}