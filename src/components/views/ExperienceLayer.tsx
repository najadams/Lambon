"use client";

import { products, type Product } from "@/lib/data";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const ProductSection = ({ product, index }: { product: Product; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <section className="h-screen w-full flex items-center justify-center relative snap-center">
      <div className={`flex w-full max-w-6xl items-center justify-between px-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
        
         {/* Text Content */}
        <div className="w-1/3 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
             <span className="text-sm font-sans tracking-widest uppercase text-primary mb-2 block">
               {product.collectionName}
             </span>
             <h2 className="text-display-section font-display text-dark">
               {product.name}
             </h2>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.2, duration: 0.8 }}
             className="space-y-4"
          >
            <p className="text-body-lg text-gray-medium font-body max-w-md">
              {product.description}
            </p>
            <div className="border-l-2 border-gold pl-4 py-1">
               <p className="text-sm text-stone-600 italic font-body">
                 &ldquo;{product.symbolism}&rdquo;
               </p>
            </div>
            
            <p className="text-xs uppercase tracking-wider text-stone-400">
               {product.construction}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
             <span className="inline-block border-b border-dark pb-1 text-sm uppercase tracking-widest cursor-pointer hover:text-primary hover:border-primary transition-colors">
               Explore {product.collectionName}
             </span>
          </motion.div>
        </div>

        {/* Product Image (LayoutId for transition) */}
        <div className="w-1/2 relative aspect-[3/4] flex items-center justify-center">
             <motion.div
               layoutId={`product-${product.id}`}
               className="relative w-full h-full flex items-center justify-center"
             >
               <Image 
                 src={product.image} 
                 alt={product.name}
                 fill
                 className="object-contain drop-shadow-2xl"
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
             </motion.div>
        </div>
      </div>
    </section>
  );
};

export const ExperienceLayer = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

  return (
    <div ref={containerRef} className="relative bg-off-white">
      {/* Scroll Progress Indicator */}
      <motion.div 
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gold z-50 origin-left"
      />

      <div className="pt-20 pb-20">
         <div className="h-[50vh] flex items-center justify-center text-center px-4">
            <div className="space-y-4">
                <span className="text-primary text-sm uppercase tracking-[0.2em]">The Lambon Collection</span>
                <h1 className="text-display-hero font-display text-dark max-w-4xl">
                  Woven Heritage. Worn with Purpose.
                </h1>
                <p className="text-lg text-gray-medium max-w-lg mx-auto font-body italic">
                   Discover authoritative wear for the modern African leader.
                </p>
            </div>
         </div>

        {products.map((product, index) => (
          <ProductSection key={product.id} product={product} index={index} />
        ))}
        
        <div className="h-[50vh] flex items-center justify-center">
            <p className="text-display-sub font-display text-gray-medium">Continue checking our collections.</p>
        </div>
      </div>
    </div>
  );
};
