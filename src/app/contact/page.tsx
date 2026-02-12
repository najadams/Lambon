"use client";

import { useView } from "@/context/ViewContext";
import { BottomNav } from "@/components/navigation/BottomNav";
import { ViewToggle } from "@/components/navigation/ViewToggle";
import { ContactExperience } from "@/components/views/ContactExperience";
import { ContactGrid } from "@/components/views/ContactGrid";
import { AnimatePresence, motion } from "framer-motion";

export default function ContactPage() {
  const { viewMode } = useView();

  return (
    <>
      <ViewToggle />
      <BottomNav />

      <main className="min-h-screen bg-off-white relative overflow-hidden">
        <AnimatePresence mode="wait">
          {viewMode === "experience" ? (
            <motion.div
              key="contact-experience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactExperience />
            </motion.div>
          ) : (
            <motion.div
              key="contact-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactGrid />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
