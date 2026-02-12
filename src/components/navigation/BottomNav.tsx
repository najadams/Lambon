"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export const BottomNav = () => {
  const pathname = usePathname();

  const links = [
    { href: "/collections", label: "Collections" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-subtle border border-stone-200 pointer-events-auto">
        <ul className="flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm tracking-widest uppercase transition-colors duration-300 font-sans ${
                    isActive ? "text-dark font-medium" : "text-gray-medium hover:text-dark"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="h-px bg-dark mt-1"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
