import { PageProjectDetailParams } from "@/app/projects/[slug]/page";
import CTABanner from "@/components/site/CTABanner";
import ProjectCard from "@/components/site/ProjectCard";
import { getProductBySlug } from "@/lib/data/products";
import { projects } from "@/lib/data/projects";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GridContent from "./components/GridContent";
import MotionTitle from "./components/MotionTitle";

export default async function ProductDetail({ params }: { params: Promise<PageProjectDetailParams> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Producto no encontrado</h1>
          <Link href="/products" className="mt-4 inline-flex items-center gap-2 text-accent text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Volver a productos
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects.filter((p) =>
    product.relatedProjects?.includes(p.slug)
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image src={product.image} alt={product.title} className=" object-cover" fill sizes="(max-width: 768px) 50vw, 20vw" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pb-12 pt-32">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Productos
          </Link>
          <MotionTitle title={product.title} />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <GridContent product={product} />
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="bg-muted/30 border-t border-border py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Proyectos Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </div>
  );
}