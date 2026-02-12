"use client";

import { useView } from "@/context/ViewContext";
import { BottomNav } from "@/components/navigation/BottomNav";
import { ViewToggle } from "@/components/navigation/ViewToggle";
import { WeaversExperience } from "@/components/views/WeaversExperience";
import { WeaversGrid } from "@/components/views/WeaversGrid";
import { AnimatePresence, motion } from "framer-motion";

export default function WeaversPage() {
  const { viewMode } = useView();

  return (
    <>
      <ViewToggle />
      <BottomNav />

      <main className="min-h-screen bg-off-white relative overflow-hidden">
        <AnimatePresence mode="wait">
          {viewMode === "experience" ? (
            <motion.div
              key="weavers-experience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <WeaversExperience />
            </motion.div>
          ) : (
            <motion.div
              key="weavers-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <WeaversGrid />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
