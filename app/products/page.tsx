import CTABanner from "../../components/site/CTABanner";
import HeroSection from "../../components/site/HeroSection";
import ProductCard from "../../components/site/ProductCard";
import SectionHeading from "../../components/site/SectionHeading";
import { products } from "../../lib/data/products";

export default function Products() {
  return (
    <div>
      <HeroSection
        image="https://media.base44.com/images/public/69e07a522085db6e8cab7d34/7c79d7742_generated_6c48e6ef.png"
        title="Productos"
        subtitle="Soluciones constructivas"
        description="Tecnología y materiales de última generación para cubiertas, fachadas y estructuras ligeras."
        minHeight="min-h-[60vh]"
        overlay="bg-gradient-to-r from-black/75 via-black/50 to-black/40"
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Catálogo"
            title="Nuestras Soluciones"
            description="Cada producto es diseñado y fabricado a medida, adaptado a las necesidades específicas de cada proyecto."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Necesita una solución personalizada?"
        description="Nuestro equipo técnico puede diseñar una solución a medida para su proyecto."
        buttonText="Solicitar presupuesto"
      />
    </div>
  );
}