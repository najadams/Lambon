"use client";

import { useView } from "@/context/ViewContext";
import { BottomNav } from "@/components/navigation/BottomNav";
import { ViewToggle } from "@/components/navigation/ViewToggle";
import { AboutExperience } from "@/components/views/AboutExperience";
import { AboutGrid } from "@/components/views/AboutGrid";
import { AnimatePresence, motion } from "framer-motion";

export default function AboutPage() {
  const { viewMode } = useView();

  return (
    <>
      <ViewToggle />
      <BottomNav />

      <main className="min-h-screen bg-off-white relative overflow-hidden">
        <AnimatePresence mode="wait">
          {viewMode === "experience" ? (
            <motion.div
              key="about-experience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AboutExperience />
            </motion.div>
          ) : (
            <motion.div
              key="about-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AboutGrid />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
