'use client'

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/6a2712e3a_generated_1d140733.png",
    project: "Estadio Municipal de Sevilla",
    location: "Sevilla, España",
  },
  {
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/42e599c24_generated_de392810.png",
    project: "Centro de Eventos Expo Norte",
    location: "Madrid, España",
  },
  {
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/095c36494_generated_bc151458.png",
    project: "Parque Tecnológico Iberia",
    location: "Valencia, España",
  },
  {
    image: "https://media.base44.com/images/public/69e07a522085db6e8cab7d34/89f52ee06_generated_fbcc3052.png",
    project: "Hotel Marina Bay Terraza",
    location: "Málaga, España",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            width={768}
            height={1184}
            alt={slides[current].project}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/45 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-6">
            Tensomembranas Ibero
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
            Ingeniería que<br />transforma espacios
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
            Diseñamos, fabricamos e instalamos estructuras tensadas y cubiertas ligeras de alta ingeniería para los proyectos más exigentes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground text-sm font-medium rounded-md hover:bg-accent/90 transition-colors"
            >
              Ver proyectos <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-sm font-medium rounded-md hover:bg-white/10 transition-colors"
            >
              Contactar
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Slide indicators + project label */}
      <div className="absolute bottom-10 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-end justify-between">
          {/* Current project */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="text-white/50 text-sm"
            >
              <span className="text-white/30 text-xs uppercase tracking-widest block mb-1">Proyecto destacado</span>
              <span className="font-medium text-white/70">{slides[current].project}</span>
              <span className="text-white/40 ml-2">— {slides[current].location}</span>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === current
                    ? "w-8 h-1.5 bg-accent"
                    : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ChevronDown className="w-6 h-6 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}