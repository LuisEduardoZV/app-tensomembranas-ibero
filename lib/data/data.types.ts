/* =========================
   SHARED TYPES
========================= */

export type Slug = string;
export type ImageUrl = string;

/* =========================
   PRODUCTO
========================= */

export interface Producto {
  slug: Slug;
  title: string;
  shortDescription: string;
  description: string;
  image: ImageUrl;
  gallery: ImageUrl[];
  category: CategoriaProducto;
  features: string[];
  relatedProjects: Slug[]; // referencia a Proyecto.slug
}

/* =========================
   PROYECTO
========================= */

export interface Proyecto {
  slug: Slug;
  title: string;
  shortDescription: string;
  description: string;
  image: ImageUrl;
  gallery: ImageUrl[];
  location: string;
  year: string; // puedes cambiar a number si lo necesitas
  area: string; // o number si quieres normalizar (ej: 8000)
  category: CategoriaProyecto;
  relatedProducts: Slug[]; // referencia a Producto.slug
}

/* =========================
   CATEGORÍAS
========================= */

export type CategoriaProducto =
  | "cubiertas"
  | "estructuras"
  | "domos"
  | "fachadas"
  | "arquitectura-textil"; 

export type CategoriaProyecto =
  | "deportivo"
  | "comercial"
  | "eventos"
  | "corporativo"
  | "hostelería"
  | "infraestructura"

export type CatProyectoForSelect = CategoriaProyecto | 'todos'
export type CategoriasSelectProyecto = {
   value: CatProyectoForSelect,
   label: string
}