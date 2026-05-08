'use client'

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Producto } from "@/lib/data/data.types";

export default function ProductCard({ product, index = 0 }: { product: Producto, index: number}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/products/${product.slug}`}
        className="group block bg-card rounded-lg overflow-hidden border border-border hover:border-accent/30 transition-all duration-500 hover:shadow-lg"
      >
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 45vw, 30vw"
            loading="eager"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
            {product.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
            Ver más <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}