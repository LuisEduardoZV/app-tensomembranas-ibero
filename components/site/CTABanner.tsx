'use client'

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTABanner({
  title = "¿Tiene un proyecto en mente?",
  description = "Contáctenos para una consulta sin compromiso. Nuestro equipo de ingenieros le asesorará en cada paso.",
  buttonText = "Contactar ahora",
  buttonHref = "/contact",
}) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          <p className="mt-6 text-lg opacity-60 leading-relaxed max-w-xl">
            {description}
          </p>
          <Link
            href={buttonHref}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-md hover:bg-accent/90 transition-colors"
          >
            {buttonText} <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}