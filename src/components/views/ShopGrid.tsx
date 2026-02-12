"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { products, type Product } from "@/lib/data";
import { BRAND } from "@/lib/constants";

type CollectionFilter = "all" | "heritage" | "statesman" | "future";
type SortOption = "featured" | "price-low" | "price-high" | "name";

const COLLECTION_INFO = {
  heritage: {
    name: "Heritage Line",
    color: "from-[#1a365d] to-[#2c5282]",
    badge: "bg-[#1a365d]",
  },
  statesman: {
    name: "Statesman Line",
    color: "from-[#3D2914] to-[#5D4037]",
    badge: "bg-[#5D4037]",
  },
  future: {
    name: "Future Line",
    color: "from-[#1A1815] to-[#37474F]",
    badge: "bg-[#37474F]",
  },
};

const ProductCard = ({ product }: { product: Product }) => {
  const collectionInfo =
    COLLECTION_INFO[product.collection as keyof typeof COLLECTION_INFO];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="group"
    >
      {/* Product Image */}
      <div
        className={`aspect-[3/4] bg-gradient-to-br ${collectionInfo.color} rounded-lg overflow-hidden relative flex items-center justify-center p-6 mb-4`}
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
          className="relative z-10 max-h-full object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
        />

        {/* Collection badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`${collectionInfo.badge} text-white px-2 py-1 text-[10px] font-sans uppercase tracking-wider rounded`}
          >
            {product.collectionName.split(" ")[0]}
          </span>
        </div>

        {/* Quick action overlay */}
        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <a
            href={`https://wa.me/${BRAND.whatsapp.replace(/\+/g, "")}?text=I'm interested in the ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-dark px-4 py-2 text-xs uppercase tracking-widest hover:bg-gold transition-colors"
          >
            Order Now
          </a>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-display text-lg text-dark group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-gray-medium uppercase tracking-wider">
          {product.collectionName}
        </p>
        <p className="text-sm text-gray-medium font-body line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <p className="text-lg font-display text-primary">
            GHS {product.price.toLocaleString()}
          </p>
          <a
            href={`https://wa.me/${BRAND.whatsapp.replace(/\+/g, "")}?text=I'm interested in the ${product.name} (${product.id})`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-dark hover:text-primary transition-colors"
          >
            Inquire →
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const ShopGrid = () => {
  const [filter, setFilter] = useState<CollectionFilter>("all");
  const [sort, setSort] = useState<SortOption>("featured");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.collection === filter);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const collectionCounts = {
    all: products.length,
    heritage: products.filter((p) => p.collection === "heritage").length,
    statesman: products.filter((p) => p.collection === "statesman").length,
    future: products.filter((p) => p.collection === "future").length,
  };

  return (
    <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <span className="text-primary text-sm uppercase tracking-[0.2em] block mb-4">
          The Daji Collection
        </span>
        <h1 className="text-display-sub font-display text-dark mb-4">
          Shop All Pieces
        </h1>
        <p className="text-gray-medium font-body max-w-lg mx-auto">
          Each piece is handwoven by master artisans. Orders fulfilled via
          WhatsApp.
        </p>
      </motion.div>

      {/* Filters & Sort */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-stone-200"
      >
        {/* Collection filters */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {(["all", "heritage", "statesman", "future"] as CollectionFilter[]).map(
            (f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 text-xs uppercase tracking-widest rounded-full transition-colors ${
                  filter === f
                    ? "bg-dark text-white"
                    : "bg-stone-100 text-gray-medium hover:bg-stone-200"
                }`}
              >
                {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)} (
                {collectionCounts[f]})
              </button>
            )
          )}
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-medium uppercase tracking-wider">
            Sort:
          </span>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="bg-stone-100 border-none rounded px-3 py-2 text-xs uppercase tracking-wider text-dark focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>
      </motion.div>

      {/* Results count */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sm text-gray-medium mb-6"
      >
        Showing {sortedProducts.length} piece
        {sortedProducts.length !== 1 ? "s" : ""}
      </motion.p>

      {/* Products Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>

      {/* Empty state */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-medium font-body">
            No pieces found in this collection.
          </p>
          <button
            onClick={() => setFilter("all")}
            className="mt-4 text-primary text-sm uppercase tracking-widest hover:underline"
          >
            View all pieces
          </button>
        </div>
      )}

      {/* Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid md:grid-cols-3 gap-6 mt-16"
      >
        <div className="bg-stone-50 p-6 rounded-lg text-center">
          <span className="text-2xl mb-2 block">🪡</span>
          <h3 className="font-display text-dark mb-1">100% Handwoven</h3>
          <p className="text-xs text-gray-medium">
            Every piece made on traditional looms
          </p>
        </div>
        <div className="bg-stone-50 p-6 rounded-lg text-center">
          <span className="text-2xl mb-2 block">📏</span>
          <h3 className="font-display text-dark mb-1">Custom Sizing</h3>
          <p className="text-xs text-gray-medium">
            Tailored to your measurements
          </p>
        </div>
        <div className="bg-stone-50 p-6 rounded-lg text-center">
          <span className="text-2xl mb-2 block">🚚</span>
          <h3 className="font-display text-dark mb-1">2-4 Week Delivery</h3>
          <p className="text-xs text-gray-medium">
            Worldwide shipping available
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 bg-dark text-white rounded-lg p-8 text-center"
      >
        <h3 className="font-display text-xl mb-3">Ready to Order?</h3>
        <p className="text-gray-light text-sm mb-6 max-w-lg mx-auto">
          All orders are placed via WhatsApp for personalized service. We&apos;ll
          help you choose the right size and answer any questions.
        </p>
        <a
          href={`https://wa.me/${BRAND.whatsapp.replace(/\+/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#128C7E] transition-colors rounded-full"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Start Order on WhatsApp
        </a>
      </motion.div>
    </div>
  );
};
