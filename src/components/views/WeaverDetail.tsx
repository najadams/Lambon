"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data";
import { BRAND } from "@/lib/constants";
import weaversData from "@/data/weavers.json";

interface Weaver {
  id: string;
  name: string;
  age: number;
  region: string;
  yearsExperience: number;
  specialization: string;
  bio: string;
  story: string;
  products: string[];
}

interface WeaverDetailProps {
  weaver: Weaver;
}

const COLLECTION_COLORS = {
  heritage: "from-[#1a365d] to-[#2c5282]",
  statesman: "from-[#3D2914] to-[#5D4037]",
  future: "from-[#1A1815] to-[#37474F]",
};

export const WeaverDetail = ({ weaver }: WeaverDetailProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const portraitScale = useTransform(heroScrollProgress, [0, 1], [1, 1.2]);
  const portraitY = useTransform(heroScrollProgress, [0, 1], [0, 100]);
  const textY = useTransform(heroScrollProgress, [0, 1], [0, 50]);
  const opacity = useTransform(heroScrollProgress, [0, 0.8], [1, 0]);

  // Get weaver's products
  const weaverProducts = products.filter((p) =>
    weaver.products?.includes(p.id)
  );

  // Get other weavers
  const otherWeavers = (weaversData.weavers as Weaver[])
    .filter((w) => w.id !== weaver.id)
    .slice(0, 2);

  // Split the story into paragraphs
  const storyParagraphs = weaver.story.split(". ").reduce((acc, sentence, i, arr) => {
    const chunkSize = Math.ceil(arr.length / 3);
    const chunkIndex = Math.floor(i / chunkSize);
    if (!acc[chunkIndex]) acc[chunkIndex] = [];
    acc[chunkIndex].push(sentence);
    return acc;
  }, [] as string[][]).map(chunk => chunk.join(". ") + (chunk[chunk.length - 1].endsWith(".") ? "" : "."));

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
          href="/weavers"
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
          All Weavers
        </Link>
      </motion.div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen relative flex items-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2D1810] via-[#3D2914] to-[#1A1815]">
          {/* Woven pattern overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 30px,
                  rgba(212, 175, 55, 0.03) 30px,
                  rgba(212, 175, 55, 0.03) 31px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 30px,
                  rgba(212, 175, 55, 0.03) 30px,
                  rgba(212, 175, 55, 0.03) 31px
                )
              `,
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Portrait */}
            <motion.div
              style={{ scale: portraitScale, y: portraitY }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                {/* Portrait placeholder with animation */}
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden bg-gradient-to-br from-stone-400 to-stone-600">
                  {/* Pattern overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B4513' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
                      backgroundSize: "60px 60px",
                    }}
                  />

                  {/* Large initial */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="font-display text-[12rem] lg:text-[16rem] text-white/20"
                    >
                      {weaver.name.charAt(0)}
                    </motion.span>
                  </div>

                  {/* Gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-dark/60 to-transparent" />
                </div>

                {/* Experience badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-gold text-dark px-6 py-3 rounded-full shadow-lg"
                >
                  <span className="font-display text-2xl">{weaver.yearsExperience}</span>
                  <span className="text-xs uppercase tracking-wider ml-1">Years</span>
                </motion.div>

                {/* Region badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -top-4 -right-4 bg-white text-dark px-4 py-2 rounded-full shadow-lg text-sm"
                >
                  📍 {weaver.region.split(",")[0]}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Weaver Info */}
            <motion.div style={{ y: textY, opacity }} className="text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-gold text-sm uppercase tracking-[0.2em] block mb-4">
                  Master Weaver
                </span>
                <h1 className="text-display-hero font-display leading-tight mb-4">
                  {weaver.name}
                </h1>
                <p className="text-xl text-white/60">
                  Age {weaver.age} · {weaver.region}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8"
              >
                <div className="border-l-4 border-gold pl-6 py-2">
                  <p className="text-xs uppercase tracking-wider text-gold mb-2">
                    Specialization
                  </p>
                  <p className="text-xl text-white font-body">
                    {weaver.specialization}
                  </p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 text-lg text-white/80 font-body leading-relaxed"
              >
                {weaver.bio}
              </motion.p>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 grid grid-cols-3 gap-4"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-3xl font-display text-gold">
                    {weaver.yearsExperience}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-white/60 mt-1">
                    Years
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-3xl font-display text-gold">
                    {weaverProducts.length}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-white/60 mt-1">
                    Pieces
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <p className="text-3xl font-display text-gold">3rd</p>
                  <p className="text-xs uppercase tracking-wider text-white/60 mt-1">
                    Generation
                  </p>
                </div>
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
              Their Story
            </span>
            <div className="h-8 w-px bg-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm uppercase tracking-[0.2em] block mb-4">
              Their Journey
            </span>
            <h2 className="text-display-section font-display text-dark">
              The Story of {weaver.name.split(" ")[0]}
            </h2>
          </motion.div>

          <div className="space-y-8">
            {storyParagraphs.map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                {index === 0 ? (
                  <p className="text-2xl font-display text-dark leading-relaxed">
                    <span className="text-6xl font-display text-primary float-left mr-4 mt-2">
                      {paragraph.charAt(0)}
                    </span>
                    {paragraph.slice(1)}
                  </p>
                ) : (
                  <p className="text-lg text-gray-medium font-body leading-relaxed pl-4 border-l-2 border-stone-200">
                    {paragraph}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Quote highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-16 bg-dark text-white p-8 md:p-12 rounded-2xl text-center"
          >
            <p className="text-2xl md:text-3xl font-display italic leading-relaxed">
              &ldquo;Weaving is meditation. A way of slowing down in a fast world.&rdquo;
            </p>
            <p className="mt-4 text-gold text-sm uppercase tracking-wider">
              — {weaver.name}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Craft Process Section */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm uppercase tracking-[0.2em] block mb-4">
              The Craft
            </span>
            <h2 className="text-display-sub font-display text-dark">
              {weaver.name.split(" ")[0]}&apos;s Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Source",
                description: "Locally sourced cotton from Northern Ghana farms",
                icon: "🌱",
              },
              {
                step: "02",
                title: "Spin",
                description: "Hand-spun into strong, consistent threads",
                icon: "🧵",
              },
              {
                step: "03",
                title: "Dye",
                description: "Natural dyes for rich, lasting colors",
                icon: "🎨",
              },
              {
                step: "04",
                title: "Weave",
                description: "Traditional loom techniques passed down generations",
                icon: "🪡",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-white rounded-2xl shadow-subtle mx-auto flex items-center justify-center text-4xl mb-4"
                >
                  {item.icon}
                </motion.div>
                <span className="text-gold font-display text-lg">{item.step}</span>
                <h3 className="font-display text-dark text-lg mt-1">{item.title}</h3>
                <p className="text-sm text-gray-medium mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      {weaverProducts.length > 0 && (
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary text-sm uppercase tracking-[0.2em] block mb-4">
                Their Work
              </span>
              <h2 className="text-display-sub font-display text-dark">
                Pieces by {weaver.name.split(" ")[0]}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {weaverProducts.map((product, index) => {
                const colorGradient =
                  COLLECTION_COLORS[product.collection as keyof typeof COLLECTION_COLORS];

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/shop/${product.id}`} className="group block">
                      <div
                        className={`aspect-[3/4] bg-gradient-to-br ${colorGradient} rounded-lg overflow-hidden relative flex items-center justify-center p-6 mb-4`}
                      >
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                          }}
                        />
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="z-10 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />

                        {/* Collection badge */}
                        <div className="absolute top-3 left-3">
                          <span className="bg-gold text-dark px-2 py-1 text-[10px] font-sans uppercase tracking-wider rounded">
                            {product.collectionName.split(" ")[0]}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-display text-lg text-dark group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-medium mt-1">
                        {product.collectionName}
                      </p>
                      <p className="text-primary font-display mt-2">
                        GHS {product.price.toLocaleString()}
                      </p>
                    </Link>
                  </motion.div>
                );
              })}
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

      {/* Other Weavers */}
      <section className="py-24 px-6 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm uppercase tracking-[0.2em] block mb-4">
              The Community
            </span>
            <h2 className="text-display-sub font-display text-dark">
              Meet Other Weavers
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {otherWeavers.map((other, index) => (
              <motion.div
                key={other.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/weavers/${other.id}`} className="group block">
                  <div className="flex gap-6 p-6 bg-white rounded-xl hover:shadow-medium transition-shadow">
                    {/* Portrait placeholder */}
                    <div className="w-24 h-32 bg-gradient-to-br from-stone-300 to-stone-400 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <span className="font-display text-5xl text-primary/30 group-hover:text-primary/50 transition-colors">
                        {other.name.charAt(0)}
                      </span>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-display text-xl text-dark group-hover:text-primary transition-colors">
                        {other.name}
                      </h3>
                      <p className="text-sm text-gray-medium mt-1">
                        {other.region}
                      </p>
                      <p className="text-xs text-gold mt-1">
                        {other.yearsExperience} years experience
                      </p>
                      <p className="text-sm text-gray-medium mt-3 line-clamp-2">
                        {other.bio}
                      </p>
                      <span className="inline-block mt-3 text-xs uppercase tracking-widest text-primary">
                        View Profile →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-display-sub font-display">
            Commission a Piece from {weaver.name.split(" ")[0]}
          </h2>
          <p className="mt-4 text-white/80 font-body text-lg">
            Request a custom piece woven specifically for you by this master artisan.
            Direct support to the weaver and their family.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <a
              href={`https://wa.me/${BRAND.whatsapp.replace(/\+/g, "")}?text=Hi! I'd like to commission a piece from ${weaver.name}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 text-sm uppercase tracking-widest hover:bg-gold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Commission via WhatsApp
            </a>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
