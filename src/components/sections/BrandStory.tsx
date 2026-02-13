"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function BrandStory() {
  return (
    <section className="section-padding bg-dark text-off-white">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] overflow-hidden lg:aspect-square"
          >
            {/* Gradient placeholder representing weaving */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3D2914] via-[#5D4037] to-[#2D1810]">
              {/* Woven pattern overlay */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 8px,
                      rgba(212, 175, 55, 0.1) 8px,
                      rgba(212, 175, 55, 0.1) 9px
                    ),
                    repeating-linear-gradient(
                      90deg,
                      transparent,
                      transparent 8px,
                      rgba(212, 175, 55, 0.1) 8px,
                      rgba(212, 175, 55, 0.1) 9px
                    )
                  `,
                }}
              />
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="mb-4 h-px w-16 bg-gold/50" />
                <span className="font-display text-4xl font-light italic text-gold/70 md:text-5xl">
                  The Loom
                </span>
                <p className="mt-4 max-w-xs font-body text-sm text-off-white/60">
                  Where tradition meets thread, and heritage becomes wearable
                </p>
                <div className="mt-4 h-px w-16 bg-gold/50" />
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 border-2 border-gold md:h-32 md:w-32 lg:-bottom-6 lg:-right-6" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
          >
            <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-gold">
              The Custodian
            </p>

            <h2 className="mt-4 font-display text-display-section font-semibold leading-tight text-white">
              The Royal Forest.
              <br />
              The Living Story.
            </h2>

            <div className="mt-6 space-y-4 font-body text-body-lg leading-relaxed text-gray-light">
              <p>
                In the heart of Northern Ghana, beyond the bustling towns, lies
                the <span className="text-white font-medium">Lambon</span> — the
                royal forest, where nature teaches patience, rhythm, and
                resilience.
              </p>
              <p>
                Long before fast fashion, Northern weavers worked with the same
                patience that the trees take to grow, threading history into every
                strand of fugu. Lambon is born from this legacy: each handwoven
                smock carries the rhythm of the loom, the story of a village, and
                the dignity of a forest that preserves life across generations.
              </p>
              <p className="font-semibold text-white">
                &ldquo;Wearing Lambon is stepping into a living story.&rdquo;
              </p>
            </div>

            <div className="mt-8">
              <Button
                href="/weavers"
                variant="outline"
                size="lg"
                className="border-off-white text-off-white hover:bg-off-white hover:text-dark"
              >
                Meet Our Weavers
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
