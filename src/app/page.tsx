"use client";

import { useView } from "@/context/ViewContext";
import { BottomNav } from "@/components/navigation/BottomNav";
import { ViewToggle } from "@/components/navigation/ViewToggle";
import { ExperienceLayer } from "@/components/views/ExperienceLayer";
import { GridLayer } from "@/components/views/GridLayer";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const { viewMode } = useView();

  return (
    <>
      <ViewToggle />
      <BottomNav />
      
      <main className="min-h-screen bg-off-white relative overflow-hidden">
        <AnimatePresence mode="wait">
          {viewMode === "experience" ? (
            <motion.div
              key="experience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ExperienceLayer />
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GridLayer />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
