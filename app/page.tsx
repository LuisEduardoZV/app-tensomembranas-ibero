'use client'

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import BrandsCarousel from "../components/site/BrandsCarousel";
import CTABanner from "../components/site/CTABanner";
import HeroSlider from "../components/site/HeroSlider";
import ProductCard from "../components/site/ProductCard";
import ProjectCard from "../components/site/ProjectCard";
import SectionHeading from "../components/site/SectionHeading";
import { products } from "../lib/data/products";
import { projects } from "../lib/data/projects";

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const featuredProjects = projects.slice(0, 4);

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Products */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between gap-8 mb-12 lg:mb-16">
            <SectionHeading
              label="Soluciones"
              title="Nuestros Productos"
              description="Soluciones constructivas de última generación para cubiertas, fachadas y estructuras ligeras."
            />
            <Link
              href="/products"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors shrink-0 pb-1"
            >
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
          <div className="mt-8 md:hidden text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent"
            >
              Ver todos los productos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                Sobre nosotros
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 text-white">
                20 años creando estructuras que desafían lo convencional
              </h2>
              <p className="mt-6 text-white/60 leading-relaxed">
                En Tensomembranas Iberia combinamos ingeniería de precisión con visión arquitectónica.
                Cada proyecto es una oportunidad para explorar los límites de la construcción ligera,
                creando espacios que inspiran y perduran.
              </p>
              <p className="mt-4 text-white/60 leading-relaxed">
                Desde nuestra sede en Murcia, operamos en toda la Península Ibérica y Latinoamérica
                con un equipo de ingenieros, arquitectos y técnicos especializados.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                Conocer más <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-4/3 rounded-lg overflow-hidden"
            >
              <Image
                src="https://media.base44.com/images/public/69e07a522085db6e8cab7d34/8807dbc10_generated_901ede60.png"
                alt="Tensomembranas Iberia - Equipo y proyectos"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
          {/* <div className="flex items-end justify-between gap-8 mb-12 lg:mb-16">
            <SectionHeading
              label="Portfolio"
              title="Proyectos Destacados"
              description="Más de 350 proyectos ejecutados en toda la Península Ibérica y Latinoamérica."
              light
            />
            <Link
              href="/projects"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors shrink-0 pb-1"
            >
              Ver todos <ArrowRight className="w-4 h-4" />
            </Link>
          </div> */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div> */}
        </div>
      </section>

      {/* About Preview */}
      {/* <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                Sobre nosotros
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 text-foreground">
                20 años creando estructuras que desafían lo convencional
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                En Tensomembranas Iberia combinamos ingeniería de precisión con visión arquitectónica.
                Cada proyecto es una oportunidad para explorar los límites de la construcción ligera,
                creando espacios que inspiran y perduran.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Desde nuestra sede en Murcia, operamos en toda la Península Ibérica y Latinoamérica
                con un equipo de ingenieros, arquitectos y técnicos especializados.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                Conocer más <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-4/3 rounded-lg overflow-hidden"
            >
              <Image
                src="https://media.base44.com/images/public/69e07a522085db6e8cab7d34/8807dbc10_generated_901ede60.png"
                alt="Tensomembranas Iberia - Equipo y proyectos"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Brands Carousel */}
      <BrandsCarousel />

      {/* CTA */}
      <CTABanner />
    </div>
  );
}
