"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";

export function CTA() {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-wide text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-sans text-xs font-medium uppercase tracking-[0.3em] text-white/70">
            Begin Your Journey
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-display text-display-section font-semibold leading-tight">
            Ready to Wear Your Heritage?
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-body text-body-lg text-white/90">
            Connect with us to explore our collections, commission a custom piece,
            or learn more about the weavers behind each smock.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button
              href={`https://wa.me/${BRAND.whatsapp.replace(/\+/g, "")}`}
              variant="primary"
              size="lg"
              external
              className="bg-white text-primary hover:bg-white/90"
            >
              Chat on WhatsApp
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Us
            </Button>
          </div>

          <p className="mt-8 font-body text-sm italic text-white/60">
            Orders fulfilled within 2-4 weeks. Custom sizes available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
