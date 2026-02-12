"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import weaversData from "@/data/weavers.json";

interface Weaver {
  id: string;
  name: string;
  age: number;
  region: string;
  yearsExperience: number;
  specialization: string;
  bio: string;
}

const VALUES = [
  {
    title: "Preserve",
    description: "Protecting Northern weaving traditions economically.",
  },
  {
    title: "Elevate",
    description: "Placing African identity in modern power spaces.",
  },
  {
    title: "Connect",
    description: "Linking wearers to centuries of inherited knowledge.",
  },
  {
    title: "Build",
    description: "Creating a globally respected African heritage label.",
  },
];

const MILESTONES = [
  { number: "30+", label: "Years of Combined Weaving Experience" },
  { number: "4", label: "Master Weavers" },
  { number: "3", label: "Distinct Collections" },
  { number: "100%", label: "Handwoven in Ghana" },
];

export const AboutGrid = () => {
  const weavers = weaversData.weavers as Weaver[];

  return (
    <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto">
      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <span className="text-primary text-sm uppercase tracking-[0.2em] block mb-4">
          Our Story
        </span>
        <h1 className="text-display-sub font-display text-dark mb-6">
          The Custodian
        </h1>
        <p className="text-gray-medium font-body text-lg max-w-2xl mx-auto italic">
          Protecting Northern craftsmanship. Translating it to modern dignity.
        </p>
      </motion.div>

      {/* Mission Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-dark text-white rounded-lg p-8 md:p-12 mb-16"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display mb-6">
            Woven Heritage. Worn with Purpose.
          </h2>
          <p className="text-gray-light font-body leading-relaxed mb-6">
            For generations, master weavers of Northern Ghana have practiced an
            ancient art—transforming cotton into fabric that carries cultural
            meaning, spiritual protection, and social status. JIMBA exists to
            preserve this tradition economically, ensuring that weaving remains
            a viable livelihood while placing African identity inside modern
            power spaces.
          </p>
          <p className="text-gold font-body italic text-lg">
            &ldquo;I am modern, but I know where I come from.&rdquo;
          </p>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
      >
        {MILESTONES.map((milestone, index) => (
          <div
            key={index}
            className="text-center p-6 border border-stone-200 rounded-lg"
          >
            <p className="text-3xl md:text-4xl font-display text-primary">
              {milestone.number}
            </p>
            <p className="text-xs uppercase tracking-wider text-gray-medium mt-2">
              {milestone.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Values Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-16"
      >
        <h3 className="text-center font-display text-xl text-dark mb-8">
          What We Stand For
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          {VALUES.map((value, index) => (
            <div
              key={index}
              className="p-6 bg-stone-50 rounded-lg text-center hover:bg-stone-100 transition-colors"
            >
              <h4 className="font-display text-lg text-dark mb-2">
                {value.title}
              </h4>
              <p className="text-sm text-gray-medium font-body">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Weavers Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-16"
      >
        <div className="text-center mb-10">
          <span className="text-primary text-sm uppercase tracking-[0.2em] block mb-2">
            The Hands Behind the Craft
          </span>
          <h3 className="font-display text-xl text-dark">Our Master Weavers</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {weavers.map((weaver, index) => (
            <motion.div
              key={weaver.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="group"
            >
              <Link href={`/weavers/${weaver.id}`} className="block">
                {/* Weaver placeholder image */}
                <div className="aspect-[3/4] bg-gradient-to-br from-stone-200 to-stone-300 rounded-lg relative overflow-hidden mb-4">
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
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-xs font-sans text-dark">
                      {weaver.yearsExperience} yrs
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors" />
                </div>

                {/* Weaver info */}
                <h4 className="font-display text-lg text-dark group-hover:text-primary transition-colors">
                  {weaver.name}
                </h4>
                <p className="text-xs text-gray-medium mt-1">{weaver.region}</p>
                <p className="text-xs text-stone-500 mt-2 line-clamp-2">
                  {weaver.specialization}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/weavers"
            className="inline-block text-sm uppercase tracking-widest border-b border-dark pb-1 hover:text-primary hover:border-primary transition-colors"
          >
            View All Weaver Stories
          </Link>
        </div>
      </motion.div>

      {/* Brand Promise */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-primary text-white rounded-lg p-8 md:p-12 text-center"
      >
        <h3 className="text-2xl font-display mb-4">The JIMBA Promise</h3>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div>
            <p className="text-gold text-sm uppercase tracking-wider mb-2">
              Authenticity
            </p>
            <p className="text-white/80 text-sm font-body">
              Every piece handwoven by master artisans in Northern Ghana
            </p>
          </div>
          <div>
            <p className="text-gold text-sm uppercase tracking-wider mb-2">
              Attribution
            </p>
            <p className="text-white/80 text-sm font-body">
              Each garment includes the story of its weaver
            </p>
          </div>
          <div>
            <p className="text-gold text-sm uppercase tracking-wider mb-2">
              Impact
            </p>
            <p className="text-white/80 text-sm font-body">
              Direct economic support to weaving communities
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-medium font-body mb-6">
          Ready to wear your heritage?
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/collections"
            className="bg-dark text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-primary transition-colors"
          >
            Explore Collections
          </Link>
          <Link
            href="/contact"
            className="border border-dark text-dark px-8 py-4 text-sm uppercase tracking-widest hover:bg-dark hover:text-white transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
