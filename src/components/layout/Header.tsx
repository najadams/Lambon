"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { BRAND } from "@/lib/constants";
import { HamburgerButton } from "@/components/ui/HamburgerButton";
import { MobileMenu } from "@/components/navigation/MobileMenu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobileMenuOpen) {
        setIsScrolled(window.scrollY > 50);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-[101] transition-all duration-500",
          isScrolled
            ? "bg-off-white/95 py-4 shadow-subtle backdrop-blur-sm"
            : "bg-transparent py-4 md:py-6", // Kept mobile padding constant (py-4) to prevent moving
          isMobileMenuOpen && "bg-transparent text-white delay-0" // Ensure text becomes white when menu opens
        )}
      >
        <nav className="container-wide flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              "font-display text-2xl font-semibold tracking-wide transition-colors duration-300 md:text-3xl",
               isMobileMenuOpen ? "text-white hover:text-gold" : "text-dark hover:text-primary"
            )}
          >
            {BRAND.name}
          </Link>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
             <HamburgerButton 
               isOpen={isMobileMenuOpen} 
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             />
          </div>
        </nav>
      </header>
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
