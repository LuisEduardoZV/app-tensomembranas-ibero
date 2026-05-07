import CTABanner from "@/components/site/CTABanner";
import ProductCard from "@/components/site/ProductCard";
import { products } from "@/lib/data/products";
import { getProjectBySlug } from "@/lib/data/projects";
import { ArrowLeft, Calendar, MapPin, Maximize2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Slug } from "@/lib/data/data.types";
import { Suspense } from "react";
import GridContent from "./components/GridContent";
import TitleMotion from "./components/TitleMotion";

export interface PageProjectDetailParams{
    slug: Slug
}

export const iconsMap = {
    location: MapPin,
    year: Calendar,
    area: Maximize2
}

export type IconsMapsType = keyof typeof iconsMap

export interface DetailsListType {
    icon: IconsMapsType
    label: string
    value: string
}

export default async function ProjectDetail({ params }: { params: Promise<PageProjectDetailParams> }) {
  const {slug} = await params 
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Proyecto no encontrado</h1>
          <Link href="/projects" className="mt-4 inline-flex items-center gap-2 text-accent text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Volver a proyectos
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) =>
    project.relatedProducts?.includes(p.slug)
  );

  const details: DetailsListType[] = [
    { icon: "location", label: "Ubicación", value: project.location },
    { icon: "year", label: "Año", value: project.year },
    { icon: "area", label: "Superficie", value: project.area },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={project.image} alt={project.title} className="w-full h-full object-cover" fill sizes="100vw" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-12 pt-32">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Proyectos
          </Link>
          <Suspense>
          <TitleMotion title={project.title} />
          </Suspense>
          <div className="mt-4 flex flex-wrap gap-6">
            {details.map((d) => {
                const IconComponent = iconsMap[d.icon];
                return (
              <div key={d.label} className="flex items-center gap-2 text-white/60 text-sm">
                <IconComponent className="w-4 h-4" />
                <span>{d.value}</span>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Suspense>
          <GridContent project={project} details={details} />
          </Suspense>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-muted/30 border-t border-border py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Productos Utilizados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product, i) => (
                <ProductCard key={product.slug} product={product} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </div>
  );
}