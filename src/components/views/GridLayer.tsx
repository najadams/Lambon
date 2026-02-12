"use client";

import { products } from "@/lib/data";
import { motion } from "framer-motion";

export const GridLayer = () => {
  return (
    <div className="pt-32 pb-40 px-6 max-w-7xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-display-sub font-display mb-12 text-center"
      >
        All Collections
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
        {products.map((product) => (
          <motion.div
            key={product.id}
            layoutId={`product-${product.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="group cursor-pointer"
          >
            <div className={`aspect-[3/4] relative mb-4 rounded-lg overflow-hidden bg-stone-100 flex items-center justify-center p-4`}>
               <img 
                 src={product.image} 
                 alt={product.name}
                 className="object-contain w-full h-full hover:scale-105 transition-transform duration-500 drop-shadow-lg"
               />
            </div>
            
            <h3 className="text-body-lg font-display text-dark group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-gray-medium mt-1 uppercase tracking-wider text-xs">{product.collectionName}</p>
            <p className="text-sm font-medium mt-2 text-primary">GHS {product.price.toFixed(2)}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
