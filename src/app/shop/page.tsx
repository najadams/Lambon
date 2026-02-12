"use client";

import { useView } from "@/context/ViewContext";
import { BottomNav } from "@/components/navigation/BottomNav";
import { ViewToggle } from "@/components/navigation/ViewToggle";
import { ShopExperience } from "@/components/views/ShopExperience";
import { ShopGrid } from "@/components/views/ShopGrid";
import { AnimatePresence, motion } from "framer-motion";

export default function ShopPage() {
  const { viewMode } = useView();

  return (
    <>
      <ViewToggle />
      <BottomNav />

      <main className="min-h-screen bg-off-white relative overflow-hidden">
        <AnimatePresence mode="wait">
          {viewMode === "experience" ? (
            <motion.div
              key="shop-experience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ShopExperience />
            </motion.div>
          ) : (
            <motion.div
              key="shop-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ShopGrid />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
