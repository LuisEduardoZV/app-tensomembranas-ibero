'use client'

import ImageGallery from "@/components/site/ImageGallery"
import { Producto } from "@/lib/data/data.types"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

const GridContent = ({ product }: { product: Producto }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                Descripción
              </span>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Gallery */}
              <div className="mt-12">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-6">
                  Galería
                </h3>
                <ImageGallery images={product.gallery} title={product.title} />
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-28">
                <div className="bg-muted/50 rounded-lg p-8 border border-border">
                  <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-6">
                    Características
                  </h3>
                  <ul className="space-y-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-sm text-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-accent-foreground text-sm font-medium rounded-md hover:bg-accent/90 transition-colors"
                >
                  Solicitar presupuesto <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
    )
}

export default GridContent;