"use client";

import { motion } from "framer-motion";
import { CollectionCard } from "@/components/ui/CollectionCard";
import { Button } from "@/components/ui/Button";
import type { Collection } from "@/lib/types";

interface FeaturedCollectionsProps {
  collections: Collection[];
}

export function FeaturedCollections({ collections }: FeaturedCollectionsProps) {
  return (
    <section className="section-padding bg-off-white">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-gray-medium">
            Our Collections
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-display-section font-semibold text-dark">
            Three Lines. One Heritage.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-body-lg text-gray-medium">
            From traditional ceremony to contemporary global fashion, each line
            honors Northern Ghanaian weaving traditions while serving distinct
            purposes.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button href="/shop" variant="outline" size="lg">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
