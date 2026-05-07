import { CategoriaProducto, Producto, Slug } from "./data.types";

export const products: Producto[] = [
  {
    slug: "membranas-tensadas",
    title: "Membranas Tensadas",
    shortDescription: "Cubiertas ligeras de alta resistencia con diseño arquitectónico único.",
    description: "Nuestras membranas tensadas combinan ingeniería de precisión con estética arquitectónica. Fabricadas con materiales de última generación como PTFE y PVC, ofrecen soluciones duraderas para grandes luces con mínimo peso estructural.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/6a2712e3a_generated_1d140733.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/6a2712e3a_generated_1d140733.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/44a2c7753_generated_14d63257.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/02233302e_generated_85b4b0e1.png",
    ],
    category: "cubiertas",
    features: [
      "Luces de hasta 60 metros sin apoyos intermedios",
      "Resistencia UV y condiciones climáticas extremas",
      "Diseño paramétrico personalizado",
      "Vida útil superior a 25 años",
      "Translucidez controlada para iluminación natural",
      "Mantenimiento mínimo",
    ],
    relatedProjects: ["estadio-municipal", "plaza-comercial"],
  },
  {
    slug: "domos-geodesicos",
    title: "Domos Geodésicos",
    shortDescription: "Estructuras esféricas de alta eficiencia y diseño espectacular.",
    description: "Los domos geodésicos representan la máxima eficiencia estructural. Nuestra tecnología permite crear espacios cubiertos de gran escala con mínimo material, ideales para eventos, invernaderos y espacios comerciales.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/42e599c24_generated_de392810.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/42e599c24_generated_de392810.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/336446b68_generated_26be886d.png",
    ],
    category: "domos",
    features: [
      "Diámetros de 5 a 50 metros",
      "Montaje rápido y desmontable",
      "Estructura autoportante",
      "Múltiples opciones de cerramiento",
      "Diseño bioclimático",
      "Certificación estructural completa",
    ],
    relatedProjects: ["centro-eventos", "parque-tecnologico"],
  },
  {
    slug: "cubiertas-etfe",
    title: "Cubiertas ETFE",
    shortDescription: "Paneles neumáticos ultraligeros con máxima transparencia.",
    description: "El ETFE es el material del futuro en arquitectura. Nuestros sistemas de cojines neumáticos ofrecen transparencia superior al vidrio con una fracción del peso, permitiendo diseños imposibles con materiales tradicionales.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/1642277d3_generated_0f0edbb9.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/1642277d3_generated_0f0edbb9.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/336446b68_generated_26be886d.png",
    ],
    category: "cubiertas",
    features: [
      "99% de transparencia UV",
      "Peso 100 veces menor que el vidrio",
      "Autolimpiante",
      "Aislamiento térmico por cámaras de aire",
      "Vida útil superior a 30 años",
      "Reciclable al 100%",
    ],
    relatedProjects: ["centro-comercial-norte", "parque-tecnologico"],
  },
  {
    slug: "cubiertas-retractiles",
    title: "Cubiertas Retráctiles",
    shortDescription: "Sistemas móviles para espacios versátiles en cualquier clima.",
    description: "Nuestras cubiertas retráctiles permiten transformar espacios abiertos en cerrados con solo pulsar un botón. Ingeniería mecánica de precisión combinada con membranas de alto rendimiento.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/7c79d7742_generated_6c48e6ef.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/7c79d7742_generated_6c48e6ef.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/02233302e_generated_85b4b0e1.png",
    ],
    category: "cubiertas",
    features: [
      "Apertura motorizada en menos de 5 minutos",
      "Resistencia a vientos de hasta 120 km/h",
      "Integración con domótica",
      "Diseño a medida",
      "Bajo consumo energético",
      "Garantía estructural de 15 años",
    ],
    relatedProjects: ["estadio-municipal", "terraza-hotel"],
  },
  {
    slug: "fachadas-textiles",
    title: "Fachadas Textiles",
    shortDescription: "Pieles arquitectónicas que transforman la envolvente del edificio.",
    description: "Las fachadas textiles ofrecen una solución innovadora para la envolvente arquitectónica. Control solar, ventilación natural y una estética única que distingue cada proyecto.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/2d946aaf1_generated_8df23873.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/2d946aaf1_generated_8df23873.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/095c36494_generated_bc151458.png",
    ],
    category: "fachadas",
    features: [
      "Control solar pasivo hasta 85%",
      "Ventilación natural integrada",
      "Impresión digital personalizada",
      "Certificación LEED",
      "Instalación sin obra húmeda",
      "Mantenimiento mínimo",
    ],
    relatedProjects: ["centro-comercial-norte", "plaza-comercial"],
  },
  {
    slug: "pasarelas-cubiertas",
    title: "Pasarelas Cubiertas",
    shortDescription: "Conexiones cubiertas entre edificios con diseño ligero y elegante.",
    description: "Nuestras pasarelas cubiertas protegen los recorridos peatonales con estructuras ligeras que se integran perfectamente en el entorno arquitectónico existente.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/095c36494_generated_bc151458.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/095c36494_generated_bc151458.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/b1f19abac_generated_47c731c4.png",
    ],
    category: "cubiertas",
    features: [
      "Luces de hasta 30 metros",
      "Canalización de aguas pluviales integrada",
      "Iluminación LED incorporada",
      "Resistencia a cargas de nieve",
      "Diseño modular",
      "Fabricación industrializada",
    ],
    relatedProjects: ["parque-tecnologico", "centro-eventos"],
  },
  {
    slug: "velarias",
    title: "Velarias",
    shortDescription: "Velas arquitectónicas para espacios exteriores con sombra y protección.",
    description: "Las velarias son la solución más elegante para crear sombra en espacios exteriores. Diseñadas con geometría antiponding y fabricadas con tejidos de alta tenacidad.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/97b87b04e_generated_9d3694a5.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/97b87b04e_generated_9d3694a5.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/b1f19abac_generated_47c731c4.png",
    ],
    category: "cubiertas",
    features: [
      "Protección UV hasta 97%",
      "Geometría antiponding certificada",
      "Anclajes de acero inoxidable",
      "Tejidos ignífugos clase M1",
      "Colores personalizables",
      "Instalación en 48 horas",
    ],
    relatedProjects: ["terraza-hotel", "plaza-comercial"],
  },
  {
    slug: "parking-cubiertas",
    title: "Cubiertas para Parking",
    shortDescription: "Protección vehicular con diseño funcional y estético moderno.",
    description: "Soluciones de cubierta para aparcamientos que combinan funcionalidad, durabilidad y un diseño que mejora la imagen del conjunto arquitectónico.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/b22d1a917_generated_dea0d044.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/b22d1a917_generated_dea0d044.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/97b87b04e_generated_9d3694a5.png",
    ],
    category: "cubiertas",
    features: [
      "Módulos estándar y a medida",
      "Estructura galvanizada",
      "Canalones integrados",
      "Paneles fotovoltaicos opcionales",
      "Certificación CE",
      "Montaje sin soldadura en obra",
    ],
    relatedProjects: ["centro-comercial-norte", "parque-tecnologico"],
  },
];

export function getProductBySlug(slug: Slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category?: CategoriaProducto) {
  if (!category) return products;
  return products.filter((p) => p.category === category);
}