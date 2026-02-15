"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION, BRAND } from "@/lib/constants";
import { cn } from "@/lib/cn";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.05,
        delayChildren: 0.15,
      },
    },
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const footerVariants = {
    closed: { opacity: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, transition: { duration: 0.3, delay: 0.6 } }, // Delay footer appearance
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-[100] flex flex-col justify-between bg-dark p-8 md:p-12 overflow-hidden touch-none overscroll-none"
          style={{ height: '100dvh' }}
        >
          {/* Spacer for Header height */}
          <div className="h-20" /> 
           
          {/* Navigation Links */}
          <nav className="flex flex-col items-center justify-center space-y-6">
            {NAVIGATION.map((link) => (
              <motion.div key={link.href} variants={linkVariants}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-display text-4xl font-medium tracking-wide text-white transition-colors hover:text-gold md:text-5xl"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Footer / Branding */}
          <motion.div variants={footerVariants} className="text-center">
             <div className="mb-4 space-x-6 text-sm text-white/60">
                <a href={`mailto:${BRAND.email}`} className="hover:text-gold transition-colors">Email</a>
                <a href={`https://instagram.com/${BRAND.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a>
             </div>
            <p className="font-display text-lg italic text-gold/80">
              {BRAND.tagline}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
