'use client'

import { motion } from "framer-motion";

const brands = [
  { name: "Ferrovial", abbr: "FRV" },
  { name: "ACS Grupo", abbr: "ACS" },
  { name: "Acciona", abbr: "ACC" },
  { name: "OHLA", abbr: "OHL" },
  { name: "Sacyr", abbr: "SCR" },
  { name: "FCC Construcción", abbr: "FCC" },
  { name: "Vinci", abbr: "VCI" },
  { name: "Aena", abbr: "AEN" },
  { name: "Inditex", abbr: "ITX" },
  { name: "El Corte Inglés", abbr: "ECI" },
];

// Duplicate for seamless loop
const allBrands = [...brands, ...brands];

export default function BrandsCarousel() {
  return (
    <section className="py-16 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground text-center">
          Empresas y clientes con los que hemos colaborado
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {allBrands.map((brand, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-44 h-16 rounded-lg border border-border bg-card hover:border-accent/30 transition-colors shrink-0 px-6 group"
            >
              <div className="text-center">
                <div className="text-xs font-bold tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
                  {brand.abbr}
                </div>
                <div className="text-[10px] text-muted-foreground/50 mt-0.5 group-hover:text-muted-foreground transition-colors">
                  {brand.name}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}