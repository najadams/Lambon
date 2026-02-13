"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import weaversData from "@/data/weavers.json";
import { products } from "@/lib/data";

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

const WEAVING_FACTS = [
  {
    number: "500+",
    label: "Years of Tradition",
    description: "Northern Ghanaian weaving dates back centuries",
  },
  {
    number: "4",
    label: "Master Weavers",
    description: "Each with decades of experience",
  },
  {
    number: "100%",
    label: "Handwoven",
    description: "Every piece made on traditional looms",
  },
  {
    number: "3-4",
    label: "Weeks Per Piece",
    description: "The time it takes to weave one smock",
  },
];

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative">
    <div className="absolute inset-0 bg-gradient-to-br from-[#2D1810] via-[#3D2914] to-[#1A1815]">
      {/* Woven pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 20px,
              rgba(212, 175, 55, 0.05) 20px,
              rgba(212, 175, 55, 0.05) 21px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 20px,
              rgba(212, 175, 55, 0.05) 20px,
              rgba(212, 175, 55, 0.05) 21px
            )
          `,
        }}
      />
    </div>

    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <span className="text-gold text-sm uppercase tracking-[0.3em] block">
          The Hands Behind the Craft
        </span>
        <h1 className="text-display-hero font-display text-white leading-tight">
          Our Master Weavers
        </h1>
        <p className="text-xl text-off-white/80 font-body italic max-w-2xl mx-auto">
          Every Lambon piece carries the story of its weaver. Meet the artisans
          preserving centuries of Northern Ghanaian tradition.
        </p>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-8 md:gap-16 pt-8 flex-wrap"
        >
          {weaversData.weavers.reduce(
            (acc, w) => acc + w.yearsExperience,
            0
          ) && (
            <div className="text-center">
              <p className="text-4xl font-display text-gold">
                {weaversData.weavers.reduce(
                  (acc, w) => acc + w.yearsExperience,
                  0
                )}+
              </p>
              <p className="text-xs uppercase tracking-wider text-off-white/60 mt-1">
                Combined Years
              </p>
            </div>
          )}
          <div className="text-center">
            <p className="text-4xl font-display text-gold">
              {weaversData.weavers.length}
            </p>
            <p className="text-xs uppercase tracking-wider text-off-white/60 mt-1">
              Master Weavers
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-display text-gold">3</p>
            <p className="text-xs uppercase tracking-wider text-off-white/60 mt-1">
              Regions
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-8"
        >
          <div className="h-16 w-px bg-gold/50 mx-auto" />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const CraftSection = () => (
  <section className="py-24 px-6 bg-off-white">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm uppercase tracking-[0.2em] block mb-4">
          Ancient Art, Living Tradition
        </span>
        <h2 className="text-display-section font-display text-dark max-w-2xl mx-auto">
          The Craft of Northern Ghanaian Weaving
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {WEAVING_FACTS.map((fact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-6 border border-stone-200 rounded-lg"
          >
            <p className="text-4xl font-display text-primary">{fact.number}</p>
            <p className="text-sm font-display text-dark mt-2">{fact.label}</p>
            <p className="text-xs text-gray-medium mt-2">{fact.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 max-w-3xl mx-auto text-center"
      >
        <p className="text-gray-medium font-body text-lg leading-relaxed">
          Each piece begins with raw cotton, spun into thread, dyed with natural
          pigments, and woven on wooden looms using techniques passed down
          through generations. The patterns carry meaning—symbols of protection,
          status, and community identity.
        </p>
      </motion.div>
    </div>
  </section>
);

const WeaverSection = ({
  weaver,
  index,
}: {
  weaver: Weaver;
  index: number;
}) => {
  const isEven = index % 2 === 0;
  const weaverProducts = products.filter((p) =>
    weaver.products?.includes(p.id)
  );

  return (
    <section
      className={`min-h-screen flex items-center justify-center py-20 px-6 ${
        isEven ? "bg-off-white" : "bg-stone-100"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto flex items-center gap-16 ${
          isEven ? "flex-row" : "flex-row-reverse"
        } max-lg:flex-col`}
      >
        {/* Weaver Portrait Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-1/2 max-lg:w-full"
        >
          <div className="relative">
            <div className="aspect-[3/4] bg-gradient-to-br from-stone-300 to-stone-400 rounded-lg overflow-hidden">
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B4513' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              {/* Weaver initial */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display text-[10rem] text-primary/20">
                  {weaver.name.charAt(0)}
                </span>
              </div>

              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 to-transparent p-6">
                <p className="text-gold text-sm uppercase tracking-wider">
                  {weaver.yearsExperience} Years Experience
                </p>
                <p className="text-white/80 text-xs mt-1">{weaver.region}</p>
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

        {/* Weaver Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-1/2 max-lg:w-full space-y-6"
        >
          <div>
            <span className="text-primary text-sm uppercase tracking-[0.2em] block mb-2">
              Master Weaver
            </span>
            <h2 className="text-display-section font-display text-dark">
              {weaver.name}
            </h2>
            <p className="text-gray-medium mt-1">
              Age {weaver.age} · {weaver.region}
            </p>
          </div>

          <div className="border-l-2 border-gold pl-4 py-2">
            <p className="text-xs text-gray-medium uppercase tracking-wider mb-1">
              Specialization
            </p>
            <p className="text-dark font-body">{weaver.specialization}</p>
          </div>

          <p className="text-gray-medium font-body text-body-lg leading-relaxed">
            {weaver.bio}
          </p>

          <div className="bg-stone-50 p-6 rounded-lg border-l-4 border-gold">
            <p className="text-stone-600 font-body italic leading-relaxed">
              &ldquo;{weaver.story.substring(0, 250)}...&rdquo;
            </p>
          </div>

          {/* Products by this weaver */}
          {weaverProducts.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-medium mb-3">
                Pieces by {weaver.name.split(" ")[0]}
              </p>
              <div className="flex gap-3">
                {weaverProducts.slice(0, 2).map((product) => (
                  <div
                    key={product.id}
                    className="bg-stone-100 rounded-lg p-3 flex items-center gap-3"
                  >
                    <div className="w-12 h-12 bg-stone-200 rounded overflow-hidden flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-display text-dark">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-medium">
                        {product.collectionName}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Link
            href={`/weavers/${weaver.id}`}
            className="inline-block text-sm uppercase tracking-widest border-b border-dark pb-1 hover:text-primary hover:border-primary transition-colors"
          >
            View Full Profile
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ProcessSection = () => (
  <section className="py-24 px-6 bg-dark text-white">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-gold text-sm uppercase tracking-[0.2em] block mb-4">
          From Thread to Garment
        </span>
        <h2 className="text-display-section font-display text-white">
          The Weaving Process
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8">
        {[
          {
            step: "01",
            title: "Spinning",
            description:
              "Raw cotton is hand-spun into strong threads ready for dyeing.",
          },
          {
            step: "02",
            title: "Dyeing",
            description:
              "Natural and traditional dyes create the signature colors.",
          },
          {
            step: "03",
            title: "Weaving",
            description:
              "Threads are woven on traditional wooden looms into narrow strips.",
          },
          {
            step: "04",
            title: "Assembly",
            description:
              "Strips are sewn together and the garment is finished by hand.",
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
            <span className="text-gold text-5xl font-display">{item.step}</span>
            <h3 className="text-lg font-display text-white mt-4 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-light text-sm font-body">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ClosingSection = () => (
  <section className="py-24 px-6 bg-primary text-white">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto text-center"
    >
      <h2 className="text-display-section font-display leading-tight">
        Support the Craft
      </h2>
      <p className="mt-6 text-white/80 font-body text-lg">
        When you purchase a JIMBA piece, you directly support master weavers and
        their families. You help preserve a tradition that has survived for
        centuries.
      </p>
      <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
        <Link
          href="/collections"
          className="bg-white text-primary px-8 py-4 text-sm uppercase tracking-widest hover:bg-gold transition-colors"
        >
          Shop Collections
        </Link>
        <Link
          href="/contact"
          className="border border-white text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-colors"
        >
          Commission a Piece
        </Link>
      </div>
    </motion.div>
  </section>
);

export const WeaversExperience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const weavers = weaversData.weavers as Weaver[];

  return (
    <div ref={containerRef} className="relative bg-off-white">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-50 origin-left"
      />

      <HeroSection />
      <CraftSection />

      {weavers.map((weaver, index) => (
        <WeaverSection key={weaver.id} weaver={weaver} index={index} />
      ))}

      <ProcessSection />
      <ClosingSection />
    </div>
  );
};
