"use client";

import { motion } from "framer-motion";
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

const PROCESS_STEPS = [
  { step: "01", title: "Spinning", icon: "🧵" },
  { step: "02", title: "Dyeing", icon: "🎨" },
  { step: "03", title: "Weaving", icon: "🪡" },
  { step: "04", title: "Assembly", icon: "✂️" },
];

export const WeaversGrid = () => {
  const weavers = weaversData.weavers as Weaver[];
  const totalExperience = weavers.reduce((acc, w) => acc + w.yearsExperience, 0);

  return (
    <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <span className="text-primary text-sm uppercase tracking-[0.2em] block mb-4">
          The Hands Behind the Craft
        </span>
        <h1 className="text-display-sub font-display text-dark mb-4">
          Our Master Weavers
        </h1>
        <p className="text-gray-medium font-body max-w-xl mx-auto">
          Every JIMBA piece carries the story of its weaver. Meet the artisans
          preserving centuries of tradition.
        </p>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-3 gap-4 mb-12 max-w-lg mx-auto"
      >
        <div className="text-center p-4 bg-stone-50 rounded-lg">
          <p className="text-2xl font-display text-primary">{weavers.length}</p>
          <p className="text-xs uppercase tracking-wider text-gray-medium">
            Weavers
          </p>
        </div>
        <div className="text-center p-4 bg-stone-50 rounded-lg">
          <p className="text-2xl font-display text-primary">{totalExperience}+</p>
          <p className="text-xs uppercase tracking-wider text-gray-medium">
            Years Combined
          </p>
        </div>
        <div className="text-center p-4 bg-stone-50 rounded-lg">
          <p className="text-2xl font-display text-primary">100%</p>
          <p className="text-xs uppercase tracking-wider text-gray-medium">
            Handwoven
          </p>
        </div>
      </motion.div>

      {/* Weavers Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-2 gap-8 mb-16"
      >
        {weavers.map((weaver, index) => {
          const weaverProducts = products.filter((p) =>
            weaver.products?.includes(p.id)
          );

          return (
            <motion.div
              key={weaver.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="border border-stone-200 rounded-lg overflow-hidden hover:border-primary hover:shadow-medium transition-all">
                <div className="flex max-sm:flex-col">
                  {/* Portrait Placeholder */}
                  <div className="w-1/3 max-sm:w-full max-sm:h-48 bg-gradient-to-br from-stone-200 to-stone-300 relative">
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B4513' fill-opacity='0.3' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-6xl text-primary/20 group-hover:text-primary/30 transition-colors">
                        {weaver.name.charAt(0)}
                      </span>
                    </div>
                    {/* Experience badge */}
                    <div className="absolute bottom-2 left-2 bg-gold text-dark px-2 py-1 rounded text-xs font-medium">
                      {weaver.yearsExperience} yrs
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-display text-xl text-dark group-hover:text-primary transition-colors">
                          {weaver.name}
                        </h3>
                        <p className="text-xs text-gray-medium">
                          Age {weaver.age} · {weaver.region}
                        </p>
                      </div>
                    </div>

                    <div className="mb-3">
                      <p className="text-xs uppercase tracking-wider text-gold mb-1">
                        Specialization
                      </p>
                      <p className="text-sm text-stone-600">
                        {weaver.specialization}
                      </p>
                    </div>

                    <p className="text-sm text-gray-medium font-body line-clamp-2 mb-4">
                      {weaver.bio}
                    </p>

                    {/* Products preview */}
                    {weaverProducts.length > 0 && (
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-xs text-gray-medium">Pieces:</span>
                        <div className="flex -space-x-2">
                          {weaverProducts.slice(0, 3).map((product) => (
                            <div
                              key={product.id}
                              className="w-8 h-8 rounded-full bg-stone-100 border-2 border-white overflow-hidden"
                            >
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          ))}
                        </div>
                        <span className="text-xs text-gray-medium">
                          ({weaverProducts.length})
                        </span>
                      </div>
                    )}

                    <Link
                      href={`/weavers/${weaver.id}`}
                      className="inline-block text-xs uppercase tracking-widest text-primary hover:text-dark transition-colors"
                    >
                      View Profile →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Process Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-dark text-white rounded-lg p-8 mb-12"
      >
        <h3 className="font-display text-xl text-center mb-8">
          The Weaving Process
        </h3>
        <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-2">
          {PROCESS_STEPS.map((step, index) => (
            <div key={index} className="text-center">
              <span className="text-3xl mb-2 block">{step.icon}</span>
              <span className="text-gold text-lg font-display">{step.step}</span>
              <p className="text-sm text-gray-light mt-1">{step.title}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Craft Story */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <h3 className="font-display text-xl text-dark mb-4">
          500+ Years of Tradition
        </h3>
        <p className="text-gray-medium font-body leading-relaxed">
          Northern Ghanaian weaving is an ancient art passed down through
          generations. Each piece begins with raw cotton, spun into thread, dyed
          with natural pigments, and woven on traditional looms. The patterns
          carry meaning—symbols of protection, status, and community identity.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-primary text-white rounded-lg p-8 text-center"
      >
        <h3 className="font-display text-xl mb-3">Support the Craft</h3>
        <p className="text-white/80 text-sm mb-6 max-w-lg mx-auto">
          When you purchase a JIMBA piece, you directly support master weavers
          and help preserve a tradition that has survived for centuries.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/collections"
            className="bg-white text-primary px-6 py-3 text-sm uppercase tracking-widest hover:bg-gold transition-colors"
          >
            Shop Collections
          </Link>
          <Link
            href="/contact"
            className="border border-white text-white px-6 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-colors"
          >
            Commission a Piece
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
