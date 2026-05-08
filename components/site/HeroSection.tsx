'use client'

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CTATypes = {
    href: string,
    label: string
}

export default function HeroSection({
  image,
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  showScroll = false,
  overlay = "bg-gradient-to-r from-black/70 via-black/50 to-black/30",
  minHeight = "min-h-screen",
}: {
    image: string,
    title: string,
    subtitle: string,
    description: string,
    primaryCTA?: CTATypes,
    secondaryCTA?: CTATypes,
    showScroll?: boolean,
    overlay?: string,
    minHeight?: string
}) {
  return (
    <section className={`relative ${minHeight} flex items-center overflow-hidden`}>
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          className="w-full h-full object-cover"
          fill
          sizes="100vw"
          loading="eager"
        />
        <div className={`absolute inset-0 ${overlay}`} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          {subtitle && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-accent mb-6"
            >
              {subtitle}
            </motion.span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
              {description}
            </p>
          )}
          {(primaryCTA || secondaryCTA) && (
            <div className="mt-10 flex flex-wrap gap-4">
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground text-sm font-medium rounded-md hover:bg-accent/90 transition-colors"
                >
                  {primaryCTA.label} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-sm font-medium rounded-md hover:bg-white/10 transition-colors"
                >
                  {secondaryCTA.label}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {showScroll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-6 h-6 text-white/40" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}