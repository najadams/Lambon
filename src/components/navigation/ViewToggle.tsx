"use client";

import { useView } from "@/context/ViewContext";
import { motion } from "framer-motion";

export const ViewToggle = () => {
  const { viewMode, toggleView } = useView();

  return (
    <button
      onClick={toggleView}
      className="fixed top-8 right-8 z-50 flex items-center gap-3 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/80 transition-all duration-300 border border-transparent hover:border-stone-200"
    >
      <span className={`text-xs uppercase tracking-widest font-sans ${viewMode === 'experience' ? 'text-dark font-medium' : 'text-gray-medium'}`}>
        Experience
      </span>
      
      <div className="relative w-10 h-5 bg-stone-200 rounded-full p-1 transition-colors">
        <motion.div
          className="w-3 h-3 bg-dark rounded-full shadow-sm"
          animate={{
            x: viewMode === "grid" ? 20 : 0,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>

      <span className={`text-xs uppercase tracking-widest font-sans ${viewMode === 'grid' ? 'text-dark font-medium' : 'text-gray-medium'}`}>
        Grid
      </span>
    </button>
  );
};
