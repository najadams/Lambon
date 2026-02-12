"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import collectionsData from "@/data/collections.json";
import { products } from "@/lib/data";

interface Collection {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  priceRange: { min: number; max: number; currency: string };
  priceTier: string;
  keyBenefits: string[];
  colors: string[];
  occasion: string[];
}

const COLLECTION_GRADIENTS = {
  heritage: "from-[#1a365d] via-[#2c5282] to-[#1a365d]",
  statesman: "from-[#3D2914] via-[#5D4037] to-[#2D1810]",
  future: "from-[#1A1815] via-[#37474F] to-[#1A1815]",
} as const;

const CollectionSection = ({
  collection,
  index,
}: {
  collection: Collection;
  index: number;
}) => {
  const isEven = index % 2 === 0;
  const collectionProducts = products.filter(
    (p) => p.collection === collection.id
  );
  const gradient =
    COLLECTION_GRADIENTS[collection.id as keyof typeof COLLECTION_GRADIENTS] ||
    "from-stone-600 to-stone-800";

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative py-20">
      <div
        className={`flex w-full max-w-7xl items-center justify-between px-8 gap-16 ${
          isEven ? "flex-row" : "flex-row-reverse"
        } max-lg:flex-col max-lg:gap-12`}
      >
        {/* Visual/Image Area */}
        <div className="w-1/2 max-lg:w-full relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main collection visual */}
            <div
              className={`aspect-[4/5] relative rounded-lg overflow-hidden bg-gradient-to-br ${gradient}`}
            >
              {/* Textile pattern overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              {/* Large collection initial */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[12rem] max-lg:text-[8rem] font-bold text-white/10">
                  {collection.name.charAt(0)}
                </span>
              </div>

              {/* Floating product previews */}
              {collectionProducts.slice(0, 2).map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + idx * 0.15, duration: 0.6 }}
                  className={`absolute ${
                    idx === 0
                      ? "top-8 right-8 w-32 h-40"
                      : "bottom-8 left-8 w-28 h-36"
                  } bg-white/10 backdrop-blur-sm rounded-lg p-2 shadow-lg`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </motion.div>
              ))}

              {/* Price tier badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-gold/90 text-dark px-4 py-2 text-xs font-sans uppercase tracking-widest rounded-full">
                  {collection.priceTier}
                </span>
              </div>
            </div>

            {/* Decorative accent */}
            <div
              className={`absolute -bottom-4 ${
                isEven ? "-right-4" : "-left-4"
              } h-24 w-24 border-2 border-gold/50 rounded-lg -z-10`}
            />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="w-1/2 max-lg:w-full space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-sm font-sans tracking-[0.2em] uppercase text-primary mb-3 block">
              {collection.subtitle}
            </span>
            <h2 className="text-display-section font-display text-dark leading-tight">
              {collection.name}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-body-lg text-gray-medium font-body leading-relaxed">
              {collection.description}
            </p>

            {/* Price Range */}
            <div className="border-l-2 border-gold pl-4 py-2">
              <p className="text-sm text-gray-medium uppercase tracking-wider">
                Price Range
              </p>
              <p className="text-xl font-display text-dark">
                {collection.priceRange.min} – {collection.priceRange.max}{" "}
                <span className="text-sm text-gray-medium">
                  {collection.priceRange.currency}
                </span>
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-gray-medium">
                Key Features
              </p>
              <ul className="grid grid-cols-2 gap-2 max-sm:grid-cols-1">
                {collection.keyBenefits.slice(0, 4).map((benefit, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-stone-600 flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Occasions */}
            <div className="flex flex-wrap gap-2">
              {collection.occasion.slice(0, 4).map((occ, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs uppercase tracking-wider border border-stone-300 rounded-full text-stone-500"
                >
                  {occ}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-6"
          >
            <Link
              href={`/shop?collection=${collection.id}`}
              className="inline-block bg-dark text-white px-6 py-3 text-sm uppercase tracking-widest hover:bg-primary transition-colors duration-300"
            >
              Shop {collection.name.split(" ")[0]}
            </Link>
            <span className="text-sm text-gray-medium">
              {collectionProducts.length} pieces available
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const CollectionsExperience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const collections = collectionsData.collections as Collection[];

  return (
    <div ref={containerRef} className="relative bg-off-white">
      {/* Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-50 origin-left"
      />

      <div className="pt-20 pb-20">
        {/* Hero Section */}
        <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-primary text-sm uppercase tracking-[0.2em] block">
              Three Lines. One Heritage.
            </span>
            <h1 className="text-display-hero font-display text-dark max-w-4xl leading-tight">
              Our Collections
            </h1>
            <p className="text-lg text-gray-medium max-w-xl mx-auto font-body italic">
              From ancestral ceremony to contemporary boardroom. Discover the
              full JIMBA universe.
            </p>

            {/* Quick stats */}
            <div className="flex items-center justify-center gap-12 mt-8 pt-8 border-t border-stone-200 max-w-md mx-auto">
              <div className="text-center">
                <p className="text-3xl font-display text-dark">3</p>
                <p className="text-xs uppercase tracking-wider text-gray-medium mt-1">
                  Collections
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display text-dark">
                  {products.length}
                </p>
                <p className="text-xs uppercase tracking-wider text-gray-medium mt-1">
                  Pieces
                </p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display text-dark">4</p>
                <p className="text-xs uppercase tracking-wider text-gray-medium mt-1">
                  Master Weavers
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Collection Sections */}
        {collections.map((collection, index) => (
          <CollectionSection
            key={collection.id}
            collection={collection}
            index={index}
          />
        ))}

        {/* Closing CTA */}
        <div className="min-h-[50vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center space-y-6"
          >
            <p className="text-display-sub font-display text-gray-medium">
              Can&apos;t decide?
            </p>
            <Link
              href="/contact"
              className="inline-block border-b-2 border-dark pb-2 text-sm uppercase tracking-widest hover:text-primary hover:border-primary transition-colors"
            >
              Speak with our stylist
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
