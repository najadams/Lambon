"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
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
  story: string;
}

const VALUES = [
  {
    title: "Preserve",
    description:
      "We protect Northern weaving traditions economically, ensuring master weavers can sustain their craft and pass it to future generations.",
    icon: "🪡",
  },
  {
    title: "Elevate",
    description:
      "We place African identity inside modern power spaces—boardrooms, institutions, and global stages—with dignity and authenticity.",
    icon: "🏛️",
  },
  {
    title: "Connect",
    description:
      "Every piece connects its wearer to centuries of inherited knowledge, to a specific artisan, and to a living cultural tradition.",
    icon: "🤝",
  },
  {
    title: "Build",
    description:
      "We are building a globally respected African heritage label, one piece at a time, one wearer at a time.",
    icon: "🌍",
  },
];

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#2D1810] via-[#4A2520] to-[#1A1815]">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
          Our Story
        </span>
        <h1 className="text-display-hero font-display text-white leading-tight">
          The Custodian
        </h1>
        <p className="text-xl text-off-white/80 font-body italic max-w-2xl mx-auto">
          Protecting Northern craftsmanship. Translating it to modern dignity.
        </p>
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

const MissionSection = () => (
  <section className="min-h-screen flex items-center justify-center py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square bg-gradient-to-br from-[#3D2914] via-[#5D4037] to-[#2D1810] rounded-lg overflow-hidden">
            {/* Woven pattern */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 12px,
                    rgba(212, 175, 55, 0.08) 12px,
                    rgba(212, 175, 55, 0.08) 13px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 12px,
                    rgba(212, 175, 55, 0.08) 12px,
                    rgba(212, 175, 55, 0.08) 13px
                  )
                `,
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
              <span className="font-display text-7xl text-gold/30">J</span>
              <p className="mt-6 text-off-white/70 font-body text-lg italic max-w-xs">
                &ldquo;I am modern, but I know where I come from.&rdquo;
              </p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/40 rounded-lg -z-10" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <span className="text-primary text-sm uppercase tracking-[0.2em] block mb-4">
              Our Mission
            </span>
            <h2 className="text-display-section font-display text-dark leading-tight">
              Woven Heritage.
              <br />
              Worn with Purpose.
            </h2>
          </div>

          <div className="space-y-4 text-gray-medium font-body text-body-lg leading-relaxed">
            <p>
              For generations, master weavers of Northern Ghana have practiced an
              ancient art—transforming cotton into fabric that carries cultural
              meaning, spiritual protection, and social status.
            </p>
            <p>
              JIMBA exists to preserve this tradition economically, ensuring that
              weaving remains a viable livelihood while placing African identity
              inside modern power spaces.
            </p>
            <p>
              Every smock tells the story of its weaver, their community, and
              centuries of inherited knowledge. When you wear JIMBA, you carry
              that story with you.
            </p>
          </div>

          <div className="border-l-2 border-gold pl-6 py-2">
            <p className="text-lg font-display text-dark">
              Premium cultural authority for working professionals
            </p>
            <p className="text-sm text-gray-medium mt-1">
              Not ultra-luxury. Accessible heritage.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ValuesSection = () => (
  <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-dark">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-gold text-sm uppercase tracking-[0.2em] block mb-4">
          What We Stand For
        </span>
        <h2 className="text-display-section font-display text-white">
          Our Values
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {VALUES.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8"
          >
            <span className="text-4xl mb-4 block">{value.icon}</span>
            <h3 className="text-xl font-display text-white mb-3">
              {value.title}
            </h3>
            <p className="text-gray-light font-body leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const WeaverSection = ({ weaver, index }: { weaver: Weaver; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6">
      <div
        className={`max-w-6xl mx-auto flex items-center gap-16 ${
          isEven ? "flex-row" : "flex-row-reverse"
        } max-lg:flex-col`}
      >
        {/* Weaver Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-1/2 max-lg:w-full"
        >
          <div className="aspect-[3/4] bg-gradient-to-br from-stone-200 to-stone-300 rounded-lg relative overflow-hidden">
            {/* Placeholder pattern */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B4513' fill-opacity='0.2' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <span className="font-display text-8xl text-primary/20">
                {weaver.name.charAt(0)}
              </span>
              <p className="mt-4 text-stone-500 font-body text-sm">
                Portrait of {weaver.name}
              </p>
            </div>

            {/* Experience badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-sm font-sans text-dark">
                {weaver.yearsExperience} years experience
              </span>
            </div>
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
            <h3 className="text-display-sub font-display text-dark">
              {weaver.name}
            </h3>
            <p className="text-sm text-gray-medium mt-1">{weaver.region}</p>
          </div>

          <p className="text-gray-medium font-body text-body-lg leading-relaxed">
            {weaver.bio}
          </p>

          <div className="border-l-2 border-gold pl-4 py-2">
            <p className="text-sm text-gray-medium uppercase tracking-wider mb-1">
              Specialization
            </p>
            <p className="text-dark font-body">{weaver.specialization}</p>
          </div>

          <p className="text-stone-600 font-body italic leading-relaxed">
            {weaver.story.substring(0, 200)}...
          </p>

          <Link
            href={`/weavers/${weaver.id}`}
            className="inline-block text-sm uppercase tracking-widest border-b border-dark pb-1 hover:text-primary hover:border-primary transition-colors"
          >
            Read Full Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ClosingSection = () => (
  <section className="min-h-[60vh] flex items-center justify-center py-20 px-6 bg-primary">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-3xl mx-auto"
    >
      <h2 className="text-display-section font-display text-white leading-tight">
        Ready to Wear Your Heritage?
      </h2>
      <p className="mt-6 text-white/80 font-body text-lg max-w-xl mx-auto">
        Join the professionals who carry African identity into modern leadership
        spaces with dignity and authenticity.
      </p>
      <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
        <Link
          href="/collections"
          className="bg-white text-primary px-8 py-4 text-sm uppercase tracking-widest hover:bg-off-white transition-colors"
        >
          Explore Collections
        </Link>
        <Link
          href="/contact"
          className="border border-white text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-primary transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </motion.div>
  </section>
);

export const AboutExperience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const weavers = weaversData.weavers as Weaver[];

  return (
    <div ref={containerRef} className="relative bg-off-white">
      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-50 origin-left"
      />

      <HeroSection />
      <MissionSection />
      <ValuesSection />

      {/* Weavers intro */}
      <div className="py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] block mb-4">
            The Hands Behind the Craft
          </span>
          <h2 className="text-display-section font-display text-dark">
            Meet Our Weavers
          </h2>
          <p className="mt-4 text-gray-medium font-body max-w-xl mx-auto">
            Every Daji piece is attributed to its weaver. These are the masters
            preserving centuries of tradition.
          </p>
        </motion.div>
      </div>

      {weavers.slice(0, 2).map((weaver, index) => (
        <WeaverSection key={weaver.id} weaver={weaver} index={index} />
      ))}

      {/* View all weavers CTA */}
      <div className="py-16 text-center">
        <Link
          href="/weavers"
          className="inline-block border border-dark text-dark px-8 py-4 text-sm uppercase tracking-widest hover:bg-dark hover:text-white transition-colors"
        >
          Meet All Weavers
        </Link>
      </div>

      <ClosingSection />
    </div>
  );
};
