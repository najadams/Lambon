"use client";

import { useView } from "@/context/ViewContext";
import { motion } from "framer-motion";

export const ViewToggle = () => {
  const { viewMode, toggleView } = useView();

  return (
    <button
      onClick={toggleView}
      className="fixed bottom-8 right-8 z-[60] flex items-center gap-3 bg-dark/90 backdrop-blur-md px-4 py-2 rounded-full hover:bg-dark transition-all duration-300 border border-white/10 shadow-lg group"
    >
      <span className={`text-[10px] uppercase tracking-widest font-sans transition-colors duration-300 ${viewMode === 'experience' ? 'text-gold font-semibold' : 'text-white/40 group-hover:text-white/60'}`}>
        Experience
      </span>
      
      <div className="relative w-8 h-4 bg-white/10 rounded-full p-0.5 transition-colors group-hover:bg-white/20">
        <motion.div
          className="w-3 h-3 bg-gold rounded-full shadow-sm"
          animate={{
            x: viewMode === "grid" ? 16 : 0,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>

      <span className={`text-[10px] uppercase tracking-widest font-sans transition-colors duration-300 ${viewMode === 'grid' ? 'text-gold font-semibold' : 'text-white/40 group-hover:text-white/60'}`}>
        Grid
      </span>
    </button>
  );
};
