"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import collectionsData from "@/data/collections.json";
import { products } from "@/lib/data";

interface Collection {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  priceRange: { min: number; max: number; currency: string };
  priceTier: string;
  keyBenefits: string[];
  occasion: string[];
}

const COLLECTION_GRADIENTS = {
  heritage: "from-[#1a365d] via-[#2c5282] to-[#1a365d]",
  statesman: "from-[#3D2914] via-[#5D4037] to-[#2D1810]",
  future: "from-[#1A1815] via-[#37474F] to-[#1A1815]",
} as const;

export const CollectionsGrid = () => {
  const collections = collectionsData.collections as Collection[];

  return (
    <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm uppercase tracking-[0.2em] block mb-4">
          Three Lines. One Heritage.
        </span>
        <h1 className="text-display-sub font-display text-dark">
          All Collections
        </h1>
      </motion.div>

      {/* Collections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {collections.map((collection, index) => {
          const collectionProducts = products.filter(
            (p) => p.collection === collection.id
          );
          const gradient =
            COLLECTION_GRADIENTS[
              collection.id as keyof typeof COLLECTION_GRADIENTS
            ] || "from-stone-600 to-stone-800";

          return (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <Link href={`/shop?collection=${collection.id}`} className="block">
                {/* Collection Card */}
                <div
                  className={`aspect-[3/4] relative rounded-lg overflow-hidden bg-gradient-to-br ${gradient} mb-6 transition-transform duration-500 group-hover:scale-[1.02]`}
                >
                  {/* Pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Collection initial */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-[8rem] font-bold text-white/10 group-hover:text-white/15 transition-colors duration-500">
                      {collection.name.charAt(0)}
                    </span>
                  </div>

                  {/* Floating product image */}
                  {collectionProducts[0] && (
                    <div className="absolute inset-x-8 bottom-8 top-1/3 flex items-center justify-center">
                      <img
                        src={collectionProducts[0].image}
                        alt={collectionProducts[0].name}
                        className="max-h-full object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Price tier badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold/90 text-dark px-3 py-1.5 text-xs font-sans uppercase tracking-wider rounded-full">
                      {collection.priceTier}
                    </span>
                  </div>

                  {/* Product count */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 text-xs font-sans uppercase tracking-wider rounded-full">
                      {collectionProducts.length} pieces
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors duration-500" />
                </div>

                {/* Collection Info */}
                <div className="space-y-3">
                  <p className="text-xs font-sans uppercase tracking-widest text-gray-medium">
                    {collection.subtitle}
                  </p>
                  <h2 className="text-xl font-display text-dark group-hover:text-primary transition-colors duration-300">
                    {collection.name}
                  </h2>
                  <p className="text-sm text-gray-medium line-clamp-2 font-body">
                    {collection.description}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {collection.priceRange.min} – {collection.priceRange.max}{" "}
                    {collection.priceRange.currency}
                  </p>
                </div>
              </Link>

              {/* Quick occasion tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {collection.occasion.slice(0, 3).map((occ, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[10px] uppercase tracking-wider border border-stone-200 rounded-full text-stone-400"
                  >
                    {occ}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-20 text-center"
      >
        <p className="text-gray-medium font-body mb-4">
          Not sure which collection is right for you?
        </p>
        <Link
          href="/contact"
          className="inline-block border border-dark text-dark px-8 py-3 text-sm uppercase tracking-widest hover:bg-dark hover:text-white transition-colors duration-300"
        >
          Get Personalized Advice
        </Link>
      </motion.div>
    </div>
  );
};
