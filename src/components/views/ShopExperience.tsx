"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { products, type Product } from "@/lib/data";

import { BRAND } from "@/lib/constants";

type CollectionFilter = "all" | "heritage" | "statesman" | "future";

const COLLECTION_INFO = {
  heritage: {
    name: "Heritage Line",
    color: "from-[#1a365d] to-[#2c5282]",
    priceRange: "550-600 GHS",
  },
  statesman: {
    name: "Statesman Line",
    color: "from-[#3D2914] to-[#5D4037]",
    priceRange: "700-850 GHS",
  },
  future: {
    name: "Future Line",
    color: "from-[#1A1815] to-[#37474F]",
    priceRange: "900-1,200 GHS",
  },
};

const HeroSection = () => (
  <section className="min-h-[70vh] flex items-center justify-center relative">
    <div className="absolute inset-0 bg-gradient-to-br from-[#1A1815] via-[#2D1810] to-[#1A1815]">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>

    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <span className="text-gold text-sm uppercase tracking-[0.3em] block">
          The Daji Collection
        </span>
        <h1 className="text-display-hero font-display text-white leading-tight">
          Shop Our Pieces
        </h1>
        <p className="text-xl text-off-white/80 font-body italic max-w-xl mx-auto">
          Each piece is handwoven by master artisans and carries the story of
          its creator.
        </p>

        {/* Quick stats */}
        <div className="flex items-center justify-center gap-8 pt-6">
          <div className="text-center">
            <p className="text-3xl font-display text-gold">{products.length}</p>
            <p className="text-xs uppercase tracking-wider text-off-white/60">
              Pieces
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-display text-gold">3</p>
            <p className="text-xs uppercase tracking-wider text-off-white/60">
              Collections
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-display text-gold">100%</p>
            <p className="text-xs uppercase tracking-wider text-off-white/60">
              Handwoven
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const ProductSection = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  const isEven = index % 2 === 0;
  const collectionInfo =
    COLLECTION_INFO[product.collection as keyof typeof COLLECTION_INFO];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6">
      <div
        className={`max-w-6xl mx-auto flex items-center gap-16 ${
          isEven ? "flex-row" : "flex-row-reverse"
        } max-lg:flex-col`}
      >
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-1/2 max-lg:w-full"
        >
          <div className="relative">
            <div
              className={`aspect-[3/4] bg-gradient-to-br ${collectionInfo.color} rounded-lg overflow-hidden flex items-center justify-center p-8`}
            >
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              <img
                src={product.image}
                alt={product.name}
                className="relative z-10 max-h-full object-contain drop-shadow-2xl"
              />

              {/* Collection badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-gold text-dark px-3 py-1.5 text-xs font-sans uppercase tracking-wider rounded-full">
                  {product.collectionName}
                </span>
              </div>
            </div>

            {/* Decorative frame */}
            <div
              className={`absolute -bottom-4 ${
                isEven ? "-right-4" : "-left-4"
              } w-24 h-24 border-2 border-gold/40 rounded-lg -z-10`}
            />
          </div>
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-1/2 max-lg:w-full space-y-6"
        >
          <div>
            <span className="text-primary text-sm uppercase tracking-[0.2em] block mb-2">
              {product.collectionName}
            </span>
            <h2 className="text-display-section font-display text-dark">
              {product.name}
            </h2>
          </div>

          <p className="text-gray-medium font-body text-body-lg leading-relaxed">
            {product.description}
          </p>

          <div className="border-l-2 border-gold pl-4 py-2">
            <p className="text-sm text-stone-600 italic font-body">
              &ldquo;{product.symbolism}&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-stone-50 p-4 rounded-lg">
              <p className="text-xs uppercase tracking-wider text-gray-medium mb-1">
                Construction
              </p>
              <p className="text-sm text-dark">{product.construction}</p>
            </div>
            <div className="bg-stone-50 p-4 rounded-lg">
              <p className="text-xs uppercase tracking-wider text-gray-medium mb-1">
                Price
              </p>
              <p className="text-xl font-display text-primary">
                GHS {product.price.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a
              href={`https://wa.me/${BRAND.whatsapp.replace(/\+/g, "")}?text=I'm interested in the ${product.name} (${product.id})`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-dark text-white py-4 text-center text-sm uppercase tracking-widest hover:bg-primary transition-colors"
            >
              Order via WhatsApp
            </a>
            <Link
              href="/contact"
              className="px-6 py-4 border border-dark text-dark text-sm uppercase tracking-widest hover:bg-dark hover:text-white transition-colors"
            >
              Inquire
            </Link>
          </div>

          <p className="text-xs text-gray-medium text-center">
            Delivery: 2-4 weeks · Custom sizing available
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const CollectionQuickNav = ({
  activeFilter,
  onFilterChange,
}: {
  activeFilter: CollectionFilter;
  onFilterChange: (filter: CollectionFilter) => void;
}) => (
  <div className="sticky top-0 z-40 bg-off-white/95 backdrop-blur-sm border-b border-stone-200 py-4">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {(["all", "heritage", "statesman", "future"] as CollectionFilter[]).map(
          (filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`px-4 py-2 text-xs uppercase tracking-widest rounded-full transition-colors ${
                activeFilter === filter
                  ? "bg-dark text-white"
                  : "bg-stone-100 text-gray-medium hover:bg-stone-200"
              }`}
            >
              {filter === "all" ? "All Pieces" : COLLECTION_INFO[filter].name}
            </button>
          )
        )}
      </div>
    </div>
  </div>
);

const ClosingSection = () => (
  <section className="py-24 px-6 bg-primary text-white">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-display-sub font-display leading-tight">
        Need Help Choosing?
      </h2>
      <p className="mt-4 text-white/80 font-body text-lg">
        Our team can help you find the perfect piece for your needs. Custom
        sizing and institutional orders available.
      </p>
      <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
        <a
          href={`https://wa.me/${BRAND.whatsapp.replace(/\+/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-primary px-8 py-4 text-sm uppercase tracking-widest hover:bg-gold transition-colors inline-flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat with Us
        </a>
        <Link
          href="/contact"
          className="border border-white text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-colors"
        >
          Contact Form
        </Link>
      </div>
    </motion.div>
  </section>
);

export const ShopExperience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const [filter, setFilter] = useState<CollectionFilter>("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.collection === filter);

  return (
    <div ref={containerRef} className="relative bg-off-white">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-50 origin-left"
      />

      <HeroSection />
      <CollectionQuickNav activeFilter={filter} onFilterChange={setFilter} />

      {filteredProducts.map((product, index) => (
        <ProductSection key={product.id} product={product} index={index} />
      ))}

      <ClosingSection />
    </div>
  );
};
