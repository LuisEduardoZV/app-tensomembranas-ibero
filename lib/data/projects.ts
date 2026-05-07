import { CategoriaProyecto, CategoriasSelectProyecto, Proyecto, Slug } from "./data.types";

export const projects: Proyecto[] = [
  {
    slug: "estadio-municipal",
    title: "Estadio Municipal de Sevilla",
    shortDescription: "Cubierta tensada para 15.000 espectadores con diseño bioclimático.",
    description: "Proyecto emblemático de cubierta tensada para el Estadio Municipal de Sevilla. La estructura cubre una superficie de 8.000 m² utilizando membranas PTFE de alta translucidez que permiten la entrada de luz natural mientras protegen a los espectadores de la lluvia y el sol extremo.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/6a2712e3a_generated_1d140733.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/6a2712e3a_generated_1d140733.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/336446b68_generated_26be886d.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/7c79d7742_generated_6c48e6ef.png",
    ],
    location: "Sevilla, España",
    year: "2024",
    area: "8.000 m²",
    category: "deportivo",
    relatedProducts: ["membranas-tensadas", "cubiertas-retractiles"],
  },
  {
    slug: "plaza-comercial",
    title: "Plaza Comercial Las Ramblas",
    shortDescription: "Velarias y membranas para zona peatonal comercial.",
    description: "Intervención integral en la Plaza Comercial Las Ramblas con un sistema de velarias interconectadas que crean un microclima confortable para los visitantes. El proyecto incluye 12 módulos de membrana tensada con iluminación LED integrada.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/44a2c7753_generated_14d63257.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/44a2c7753_generated_14d63257.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/97b87b04e_generated_9d3694a5.png",
    ],
    location: "Barcelona, España",
    year: "2023",
    area: "3.500 m²",
    category: "comercial",
    relatedProducts: ["velarias", "membranas-tensadas"],
  },
  {
    slug: "centro-eventos",
    title: "Centro de Eventos Expo Norte",
    shortDescription: "Domo geodésico de 40 metros para eventos de gran formato.",
    description: "Diseño e instalación de un domo geodésico de 40 metros de diámetro para el Centro de Eventos Expo Norte. La estructura permite albergar hasta 2.000 personas y cuenta con un sistema de climatización integrado en la envolvente.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/42e599c24_generated_de392810.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/42e599c24_generated_de392810.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/336446b68_generated_26be886d.png",
    ],
    location: "Madrid, España",
    year: "2024",
    area: "1.260 m²",
    category: "eventos",
    relatedProducts: ["domos-geodesicos", "cubiertas-etfe"],
  },
  {
    slug: "parque-tecnologico",
    title: "Parque Tecnológico Iberia",
    shortDescription: "Pasarelas cubiertas y fachadas textiles para campus corporativo.",
    description: "Proyecto integral para el Parque Tecnológico Iberia que incluye 600 metros lineales de pasarelas cubiertas conectando los edificios del campus, además de fachadas textiles en dos de los edificios principales para control solar.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/095c36494_generated_bc151458.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/095c36494_generated_bc151458.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/2d946aaf1_generated_8df23873.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/b22d1a917_generated_dea0d044.png",
    ],
    location: "Valencia, España",
    year: "2023",
    area: "4.200 m²",
    category: "corporativo",
    relatedProducts: ["pasarelas-cubiertas", "fachadas-textiles"],
  },
  {
    slug: "centro-comercial-norte",
    title: "Centro Comercial Norte",
    shortDescription: "Cubierta ETFE para atrio central con luz natural.",
    description: "Instalación de un sistema de cojines ETFE para el atrio central del Centro Comercial Norte. La cubierta de 2.500 m² permite la entrada de luz natural al interior del edificio reduciendo el consumo energético en iluminación un 40%.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/1642277d3_generated_0f0edbb9.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/1642277d3_generated_0f0edbb9.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/42e599c24_generated_de392810.png",
    ],
    location: "Bilbao, España",
    year: "2022",
    area: "2.500 m²",
    category: "comercial",
    relatedProducts: ["cubiertas-etfe", "fachadas-textiles"],
  },
  {
    slug: "terraza-hotel",
    title: "Hotel Marina Bay Terraza",
    shortDescription: "Cubierta retráctil para terraza panorámica de hotel 5 estrellas.",
    description: "Diseño e instalación de una cubierta retráctil de 800 m² para la terraza panorámica del Hotel Marina Bay. El sistema permite abrir completamente la cubierta en menos de 4 minutos, ofreciendo versatilidad total.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/89f52ee06_generated_fbcc3052.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/89f52ee06_generated_fbcc3052.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/7c79d7742_generated_6c48e6ef.png",
    ],
    location: "Málaga, España",
    year: "2024",
    area: "800 m²",
    category: "hostelería",
    relatedProducts: ["cubiertas-retractiles", "velarias"],
  },
  {
    slug: "arena-deportiva",
    title: "Arena Deportiva Ibérica",
    shortDescription: "Cubierta integral para arena multideportiva de nueva generación.",
    description: "Proyecto de referencia en el ámbito deportivo. Cubierta tensada integral para una arena multideportiva con capacidad para 8.000 espectadores. El diseño optimiza la acústica y la ventilación natural.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/336446b68_generated_26be886d.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/336446b68_generated_26be886d.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/6a2712e3a_generated_1d140733.png",
    ],
    location: "Lisboa, Portugal",
    year: "2023",
    area: "6.500 m²",
    category: "deportivo",
    relatedProducts: ["membranas-tensadas", "cubiertas-etfe"],
  },
  {
    slug: "parking-aeropuerto",
    title: "Parking Aeropuerto Internacional",
    shortDescription: "Cubiertas modulares para 2.000 plazas de aparcamiento.",
    description: "Instalación de cubiertas modulares de membrana tensada para el aparcamiento del Aeropuerto Internacional. El proyecto cubre 2.000 plazas en una superficie total de 12.000 m² con un diseño que integra paneles fotovoltaicos.",
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/b1f19abac_generated_47c731c4.png",
    gallery: [
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/b1f19abac_generated_47c731c4.png",
      "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/b22d1a917_generated_dea0d044.png",
    ],
    location: "Porto, Portugal",
    year: "2022",
    area: "12.000 m²",
    category: "infraestructura",
    relatedProducts: ["parking-cubiertas", "membranas-tensadas"],
  },
];

export const projectCategories: CategoriasSelectProyecto[] = [
  { value: "todos", label: "Todos" },
  { value: "deportivo", label: "Deportivo" },
  { value: "comercial", label: "Comercial" },
  { value: "eventos", label: "Eventos" },
  { value: "corporativo", label: "Corporativo" },
  { value: "hostelería", label: "Hostelería" },
  { value: "infraestructura", label: "Infraestructura" },
];

export function getProjectBySlug(slug: Slug) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category?: CategoriaProyecto | 'todos') {
  if (!category) return projects;
  return projects.filter((p) => p.category === category);
}