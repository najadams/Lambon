"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";

export const BottomNav = () => {
  const pathname = usePathname();

  const [isExpanded, setIsExpanded] = useState(false);

  const links = [
    { href: "/collections", label: "Collections" },
    { href: "/shop", label: "Shop" },
    { href: "/weavers", label: "Weavers" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex justify-center items-end">
      <motion.nav
        layout
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "bg-dark/90 backdrop-blur-md rounded-full border border-white/10 shadow-2xl transition-all duration-500 ease-out cursor-pointer overflow-hidden",
          isExpanded ? "px-8 py-4" : "px-6 py-3"
        )}
      >
        <motion.div layout className="flex items-center gap-8">
          {/* Collapsed State: "Menu" Label */}
          {!isExpanded && (
            <motion.span
              layoutId="menu-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-xs uppercase tracking-[0.2em] text-gold font-sans font-medium whitespace-nowrap"
            >
              Explore
            </motion.span>
          )}

          {/* Expanded State: Navigation Links */}
          <AnimatePresence mode="wait">
            {isExpanded && (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-8"
              >
                {/* Logo mark for the dock */}
                <li>
                   <Link href="/" className="font-display text-2xl font-bold text-gold hover:text-white transition-colors duration-300 select-none px-2">
                     L
                   </Link>
                </li>
                
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "relative text-xs tracking-widest uppercase transition-colors duration-300 font-sans block py-1",
                          isActive
                            ? "text-gold font-semibold"
                            : "text-white/60 hover:text-white"
                        )}
                      >
                        {link.label}
                        {isActive && (
                          <motion.div
                            layoutId="nav-indicator"
                            className="absolute -bottom-1 left-0 right-0 h-px bg-gold"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
          
          {/* Animated Indicator Pips (Functional decoration) */}
          <div className="flex gap-1 items-center">
             <motion.div 
               animate={{ height: isExpanded ? 4 : 2, width: isExpanded ? 4 : 2, opacity: isExpanded ? 0 : 1 }}
               className="bg-white/40 rounded-full"
             />
             <motion.div 
               animate={{ height: isExpanded ? 4 : 2, width: isExpanded ? 4 : 2, opacity: isExpanded ? 0 : 1 }}
               className="bg-white/40 rounded-full"
             />
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
};
