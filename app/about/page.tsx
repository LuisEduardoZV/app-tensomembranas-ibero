'use client'

import { motion } from "framer-motion";
import { Eye, Lightbulb, Shield, Target } from "lucide-react";
import Image from "next/image";
import CTABanner from "../../components/site/CTABanner";
import HeroSection from "../../components/site/HeroSection";
import StatsRow from "../../components/site/StatsRow";

const values = [
  {
    icon: Target,
    title: "Precisión Ingenieril",
    description: "Cada proyecto se diseña con cálculos estructurales rigurosos y software de análisis paramétrico de última generación.",
  },
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description: "Investigamos y desarrollamos nuevas soluciones constructivas, materiales y procesos para estar a la vanguardia del sector.",
  },
  {
    icon: Shield,
    title: "Calidad Certificada",
    description: "Todos nuestros procesos cumplen con las normativas europeas más exigentes, con certificaciones ISO 9001 e ISO 14001.",
  },
  {
    icon: Eye,
    title: "Visión Arquitectónica",
    description: "Trabajamos codo a codo con arquitectos para que cada estructura no solo funcione, sino que inspire y emocione.",
  },
];

export default function About() {
  return (
    <div>
      <HeroSection
        image="https://media.base44.com/images/public/69e07a522085db6e8cab7d34/8807dbc10_generated_901ede60.png"
        title="Nosotros"
        subtitle="Sobre Tensomembranas Ibero"
        description="25 años transformando espacios con ingeniería de precisión y visión arquitectónica."
        minHeight="min-h-[60vh]"
        overlay="bg-gradient-to-r from-black/75 via-black/50 to-black/40"
      />

      {/* Company Overview */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                Nuestra historia
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 text-foreground">
                Pioneros en construcción ligera en la Península Ibérica
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fundada en 2001 en Madrid, Tensomembranas Ibero nació con la misión de traer las técnicas
                  más avanzadas de construcción tensada al mercado ibérico. Desde entonces, hemos ejecutado
                  más de 350 proyectos en 12 países.
                </p>
                <p>
                  Nuestro equipo multidisciplinar de ingenieros estructurales, arquitectos y técnicos
                  especializados trabaja con los materiales más avanzados del mercado: PTFE, ETFE, PVC
                  de alta tenacidad y aceros especiales.
                </p>
                <p>
                  Cada proyecto que emprendemos pasa por un riguroso proceso de diseño paramétrico,
                  análisis estructural mediante elementos finitos y control de calidad en fábrica,
                  garantizando resultados excepcionales.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-4/3 rounded-lg overflow-hidden"
            >
              <Image
                src="https://media.base44.com/images/public/69e07a522085db6e8cab7d34/095c36494_generated_bc151458.png"
                alt="Tensomembranas Ibero instalación"
                className="w-full h-full object-cover"
                fill
                sizes="100vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StatsRow light />
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              Valores
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 text-foreground">
              Lo que nos define
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <value.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Quiere ser parte de nuestro equipo?"
        description="Siempre buscamos talento apasionado por la ingeniería y la arquitectura."
        buttonText="Contactar"
      />
    </div>
  );
}