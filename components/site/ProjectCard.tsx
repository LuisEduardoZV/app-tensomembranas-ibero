'use client'

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Proyecto } from "@/lib/data/data.types";

export default function ProjectCard({ project, index = 0 }: {project: Proyecto, index?: number}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block relative overflow-hidden rounded-lg"
      >
        <div className="aspect-4/3 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            fill
            sizes="100vw"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-2 text-white/60 text-xs mb-2">
            <MapPin className="w-3 h-3" />
            <span>{project.location}</span>
            <span className="ml-auto">{project.year}</span>
          </div>
          <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-white/50 line-clamp-1">
            {project.shortDescription}
          </p>
        </div>

        {/* Arrow */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </Link>
    </motion.div>
  );
}