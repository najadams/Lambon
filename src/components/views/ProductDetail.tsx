"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { type Product, products } from "@/lib/data";
import { BRAND } from "@/lib/constants";
import weaversData from "@/data/weavers.json";

interface ProductDetailProps {
  product: Product;
}

const COLLECTION_COLORS = {
  heritage: {
    gradient: "from-[#1a365d] via-[#2c5282] to-[#1a365d]",
    accent: "#1a365d",
  },
  statesman: {
    gradient: "from-[#3D2914] via-[#5D4037] to-[#2D1810]",
    accent: "#5D4037",
  },
  future: {
    gradient: "from-[#1A1815] via-[#37474F] to-[#263238]",
    accent: "#37474F",
  },
};

const SIZE_GUIDE = ["XS", "S", "M", "L", "XL", "XXL"];

export const ProductDetail = ({ product }: ProductDetailProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const imageY = useTransform(heroScrollProgress, [0, 1], [0, 100]);
  const imageScale = useTransform(heroScrollProgress, [0, 0.5], [1, 1.1]);
  const textY = useTransform(heroScrollProgress, [0, 1], [0, 50]);
  const opacity = useTransform(heroScrollProgress, [0, 0.8], [1, 0]);

  const collectionColors =
    COLLECTION_COLORS[product.collection as keyof typeof COLLECTION_COLORS];

  // Find weaver info
  const weaver = weaversData.weavers.find((w) =>
    w.products?.includes(product.id)
  );

  // Related products
  const relatedProducts = products
    .filter((p) => p.collection === product.collection && p.id !== product.id)
    .slice(0, 2);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <div ref={containerRef} className="bg-off-white">
      {/* Progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-50 origin-left"
      />

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed top-8 left-8 z-40"
      >
        <Link
          href="/shop"
          className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-dark hover:bg-white transition-colors shadow-subtle"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </Link>
      </motion.div>

      {/* Hero Section - Full viewport with parallax */}
      <section
        ref={heroRef}
        className="min-h-screen relative flex items-center overflow-hidden"
      >
        {/* Background gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${collectionColors.gradient}`}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image with Zoom */}
            <motion.div
              style={{ y: imageY, scale: imageScale }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`aspect-[3/4] relative rounded-2xl overflow-hidden cursor-zoom-in ${
                  isZoomed ? "cursor-zoom-out" : ""
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setIsZoomed(false)}
              >
                {/* Main image */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-8"
                  animate={{
                    scale: isZoomed ? 2.5 : 1,
                    x: isZoomed ? `${(0.5 - mousePosition.x) * 50}%` : 0,
                    y: isZoomed ? `${(0.5 - mousePosition.y) * 50}%` : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-2xl"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>

                {/* Zoom hint */}
                <AnimatePresence>
                  {!isZoomed && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full text-xs text-dark flex items-center gap-2"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                      Click to zoom
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-gold text-dark px-4 py-2 rounded-full font-sans text-sm uppercase tracking-wider shadow-lg"
              >
                {product.collectionName}
              </motion.div>
            </motion.div>

            {/* Product Info */}
            <motion.div style={{ y: textY, opacity }} className="text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-gold text-sm uppercase tracking-[0.2em] block mb-4">
                  {product.collectionName}
                </span>
                <h1 className="text-display-hero font-display leading-tight mb-6">
                  {product.name}
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-white/80 font-body leading-relaxed mb-8"
              >
                {product.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-end gap-4 mb-8"
              >
                <span className="text-5xl font-display">
                  GHS {product.price.toLocaleString()}
                </span>
                <span className="text-white/60 text-sm pb-2">
                  Includes weaver attribution
                </span>
              </motion.div>

              {/* Size selector */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-8"
              >
                <p className="text-sm uppercase tracking-wider text-white/60 mb-3">
                  Select Size
                </p>
                <div className="flex gap-2 flex-wrap">
                  {SIZE_GUIDE.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-lg text-sm font-medium transition-all ${
                        selectedSize === size
                          ? "bg-gold text-dark"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-white/40 mt-2">
                  Custom sizing available on request
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-4"
              >
                <a
                  href={`https://wa.me/${BRAND.whatsapp.replace(/\+/g, "")}?text=Hi! I'd like to order the ${product.name} (${product.id}) in size ${selectedSize}. Price: GHS ${product.price}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-dark py-4 text-center text-sm uppercase tracking-widest hover:bg-gold transition-colors flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Order on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-dark transition-colors"
                >
                  Inquire
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/60 text-xs uppercase tracking-widest">
              Scroll for details
            </span>
            <div className="h-8 w-px bg-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* Details Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Symbolism & Construction */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-display-sub font-display text-dark mb-8">
                The Story Behind
              </h2>

              <div className="space-y-8">
                <div className="border-l-4 border-gold pl-6">
                  <h3 className="font-display text-lg text-dark mb-2">
                    Symbolism
                  </h3>
                  <p className="text-gray-medium font-body leading-relaxed italic">
                    &ldquo;{product.symbolism}&rdquo;
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-lg text-dark mb-2">
                    Construction
                  </h3>
                  <p className="text-gray-medium font-body leading-relaxed">
                    {product.construction}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <p className="text-xs uppercase tracking-wider text-gray-medium mb-1">
                      Material
                    </p>
                    <p className="text-dark font-body">100% Handwoven Cotton</p>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <p className="text-xs uppercase tracking-wider text-gray-medium mb-1">
                      Origin
                    </p>
                    <p className="text-dark font-body">Northern Ghana</p>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <p className="text-xs uppercase tracking-wider text-gray-medium mb-1">
                      Delivery
                    </p>
                    <p className="text-dark font-body">2-4 Weeks</p>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-lg">
                    <p className="text-xs uppercase tracking-wider text-gray-medium mb-1">
                      Care
                    </p>
                    <p className="text-dark font-body">Hand Wash, Air Dry</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Weaver Attribution */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {weaver && (
                <div className="bg-dark text-white rounded-2xl p-8">
                  <h2 className="text-gold text-sm uppercase tracking-[0.2em] mb-6">
                    Crafted By
                  </h2>

                  <div className="flex items-start gap-6">
                    {/* Weaver portrait placeholder */}
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-stone-600 to-stone-700 flex-shrink-0 flex items-center justify-center">
                      <span className="font-display text-4xl text-white/30">
                        {weaver.name.charAt(0)}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-2xl text-white">
                        {weaver.name}
                      </h3>
                      <p className="text-gray-light text-sm mt-1">
                        {weaver.region}
                      </p>
                      <p className="text-gold text-sm mt-1">
                        {weaver.yearsExperience} years experience
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-light font-body mt-6 leading-relaxed">
                    {weaver.bio}
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-xs text-gray-medium uppercase tracking-wider mb-2">
                      Specialization
                    </p>
                    <p className="text-white">{weaver.specialization}</p>
                  </div>

                  <Link
                    href={`/weavers/${weaver.id}`}
                    className="inline-block mt-6 text-gold text-sm uppercase tracking-widest hover:text-white transition-colors"
                  >
                    View Full Profile →
                  </Link>
                </div>
              )}

              {/* Trust badges */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center p-4 border border-stone-200 rounded-lg">
                  <span className="text-2xl mb-2 block">🪡</span>
                  <p className="text-xs text-gray-medium">100% Handwoven</p>
                </div>
                <div className="text-center p-4 border border-stone-200 rounded-lg">
                  <span className="text-2xl mb-2 block">🇬🇭</span>
                  <p className="text-xs text-gray-medium">Made in Ghana</p>
                </div>
                <div className="text-center p-4 border border-stone-200 rounded-lg">
                  <span className="text-2xl mb-2 block">📜</span>
                  <p className="text-xs text-gray-medium">Weaver Attributed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zoom Gallery Section */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-display-sub font-display text-dark">
              Examine the Details
            </h2>
            <p className="text-gray-medium font-body mt-2">
              Hover to explore the craftsmanship up close
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Weave Pattern", zoom: "2x" },
              { label: "Neckline Detail", zoom: "2.5x" },
              { label: "Color Texture", zoom: "3x" },
            ].map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-square bg-gradient-to-br from-stone-200 to-stone-300 rounded-lg overflow-hidden cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-8"
                  whileHover={{ scale: 2 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <Image
                    src={product.image}
                    alt={detail.label}
                    fill
                    className="object-contain drop-shadow-lg"
                    sizes="33vw"
                  />
                </motion.div>

                {/* Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center justify-between">
                  <span className="text-sm text-dark">{detail.label}</span>
                  <span className="text-xs text-gray-medium">
                    Hover for {detail.zoom}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-display-sub font-display text-dark">
                More from {product.collectionName}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedProducts.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/shop/${related.id}`} className="group block">
                    <div
                      className={`aspect-[4/3] bg-gradient-to-br ${collectionColors.gradient} rounded-lg overflow-hidden relative flex items-center justify-center p-8 mb-4`}
                    >
                      <Image
                        src={related.image}
                        alt={related.name}
                        fill
                        className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <h3 className="font-display text-xl text-dark group-hover:text-primary transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-primary font-display mt-1">
                      GHS {related.price.toLocaleString()}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/shop"
                className="inline-block border border-dark text-dark px-8 py-4 text-sm uppercase tracking-widest hover:bg-dark hover:text-white transition-colors"
              >
                View All Pieces
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-24 px-6 bg-primary text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-display-sub font-display">
            Ready to Own This Piece?
          </h2>
          <p className="mt-4 text-white/80 font-body text-lg">
            Size: {selectedSize} · Price: GHS {product.price.toLocaleString()} ·
            Delivery: 2-4 weeks
          </p>
          <div className="mt-8">
            <a
              href={`https://wa.me/${BRAND.whatsapp.replace(/\+/g, "")}?text=Hi! I'd like to order the ${product.name} (${product.id}) in size ${selectedSize}. Price: GHS ${product.price}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 text-sm uppercase tracking-widest hover:bg-gold transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Complete Order on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
