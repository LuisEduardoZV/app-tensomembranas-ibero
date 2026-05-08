'use client'

import { useState } from "react";
import CTABanner from "../../components/site/CTABanner";
import HeroSection from "../../components/site/HeroSection";
import ProjectCard from "../../components/site/ProjectCard";
import SectionHeading from "../../components/site/SectionHeading";
import { CategoriaProyecto } from '../../lib/data/data.types';
import { getProjectsByCategory, projectCategories } from "../../lib/data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoriaProyecto | undefined>(undefined);
  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <div>
      <HeroSection
        image="https://media.base44.com/images/public/69e07a522085db6e8cab7d34/336446b68_generated_26be886d.png"
        title="Proyectos"
        subtitle="Portfolio"
        description="Más de 350 proyectos ejecutados con los más altos estándares de calidad e ingeniería."
        minHeight="min-h-[60vh]"
        overlay="bg-gradient-to-r from-black/75 via-black/50 to-black/40"
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Portfolio"
            title="Nuestros Proyectos"
            description="Cada proyecto refleja nuestro compromiso con la excelencia técnica y la innovación arquitectónica."
          />

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value !== 'todos' ? cat.value : undefined)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  activeCategory === cat.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}