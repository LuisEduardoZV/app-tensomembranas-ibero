'use client'

import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description, align = "left", light = false }: {label: string, title: string, description: string, align?: 'center' | 'left', light?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 lg:mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      {label && (
        <span className={`text-xs font-semibold tracking-[0.2em] uppercase ${
          light ? "text-accent" : "text-accent"
        }`}>
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3 ${
        light ? "text-white" : "text-foreground"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base lg:text-lg max-w-2xl leading-relaxed ${
          align === "center" ? "mx-auto" : ""
        } ${light ? "text-white/60" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}