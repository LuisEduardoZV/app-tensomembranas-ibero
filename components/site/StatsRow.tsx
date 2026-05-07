'use client'

import { motion } from "framer-motion";

const stats = [
  { value: "350+", label: "Proyectos realizados" },
  { value: "25", label: "Años de experiencia" },
  { value: "12", label: "Países" },
  { value: "98%", label: "Satisfacción del cliente" },
];

export default function StatsRow({ light = false }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-center"
        >
          <div className={`text-3xl md:text-4xl font-bold ${light ? "text-white" : "text-foreground"}`}>
            {stat.value}
          </div>
          <div className={`mt-1 text-sm ${light ? "text-white/50" : "text-muted-foreground"}`}>
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}