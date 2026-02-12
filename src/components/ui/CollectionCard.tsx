"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Collection } from "@/lib/types";

interface CollectionCardProps {
  collection: Collection;
  index?: number;
}

const COLLECTION_COLORS = {
  heritage: "from-[#1a365d] via-[#2c5282] to-[#1a365d]",
  statesman: "from-[#5D4037] via-[#795548] to-[#4E342E]",
  future: "from-[#37474F] via-[#546E7A] to-[#263238]",
} as const;

export function CollectionCard({ collection, index = 0 }: CollectionCardProps) {
  const gradientClass =
    COLLECTION_COLORS[collection.id as keyof typeof COLLECTION_COLORS] ||
    "from-gray-600 to-gray-800";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        href={`/collections/${collection.id}`}
        className="group block"
        aria-label={`View ${collection.name}`}
      >
        {/* Image Container with gradient placeholder */}
        <div className="img-hover-zoom relative aspect-[4/5] overflow-hidden">
          {/* Gradient background as placeholder */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradientClass} transition-transform duration-700 group-hover:scale-105`}
          >
            {/* Textile pattern overlay */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.15' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            {/* Centered collection initial */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-6xl font-bold text-white/20 md:text-7xl lg:text-8xl">
                {collection.name.charAt(0)}
              </span>
            </div>
          </div>

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-dark/0 transition-all duration-500 group-hover:bg-dark/10" />

          {/* Price tier badge */}
          <div className="absolute right-4 top-4">
            <span className="bg-off-white/90 px-3 py-1.5 font-sans text-xs font-medium uppercase tracking-wider text-dark backdrop-blur-sm">
              {collection.priceTier}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-gray-medium">
            {collection.subtitle}
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold text-dark md:text-2xl">
            {collection.name}
          </h3>
          <p className="mt-2 line-clamp-2 font-body text-base leading-relaxed text-gray-medium">
            {collection.description_short}
          </p>
          <p className="mt-3 font-sans text-sm font-medium text-primary">
            {collection.priceRange.min}–{collection.priceRange.max}{" "}
            {collection.priceRange.currency}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
