'use client'
import ImageGallery from "@/components/site/ImageGallery"
import { Proyecto } from "@/lib/data/data.types"
import { motion } from "framer-motion"
import { DetailsListType } from "../page"

const GridContent = ({ project, details }: { project: Proyecto, details: DetailsListType[] }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
                Sobre el proyecto
              </span>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Gallery */}
              <div className="mt-12">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-6">
                  Galería
                </h3>
                <ImageGallery images={project.gallery} title={project.title} />
              </div>
            </motion.div>

            {/* Details sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="sticky top-28 bg-muted/50 rounded-lg p-8 border border-border">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mb-6">
                  Datos del Proyecto
                </h3>
                <div className="space-y-5">
                  {details.map((d) => (
                    <div key={d.label}>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{d.label}</p>
                      <p className="mt-1 text-foreground font-medium">{d.value}</p>
                    </div>
                  ))}
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Categoría</p>
                    <p className="mt-1 text-foreground font-medium capitalize">{project.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
    )
}

export default GridContent