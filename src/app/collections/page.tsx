"use client";

import { useView } from "@/context/ViewContext";
import { BottomNav } from "@/components/navigation/BottomNav";
import { ViewToggle } from "@/components/navigation/ViewToggle";
import { CollectionsExperience } from "@/components/views/CollectionsExperience";
import { CollectionsGrid } from "@/components/views/CollectionsGrid";
import { AnimatePresence, motion } from "framer-motion";

export default function CollectionsPage() {
  const { viewMode } = useView();

  return (
    <>
      <ViewToggle />
      <BottomNav />

      <main className="min-h-screen bg-off-white relative overflow-hidden">
        <AnimatePresence mode="wait">
          {viewMode === "experience" ? (
            <motion.div
              key="collections-experience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CollectionsExperience />
            </motion.div>
          ) : (
            <motion.div
              key="collections-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CollectionsGrid />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
