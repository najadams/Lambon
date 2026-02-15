"use client";

import { motion, MotionConfig } from "framer-motion";
import { cn } from "@/lib/cn";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string; // Allow passing className for positioning/styling
}

export const HamburgerButton = ({
  isOpen,
  onClick,
  className,
}: HamburgerButtonProps) => {
  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
      <motion.button
        initial={false}
        animate={isOpen ? "open" : "closed"}
        onClick={onClick}
        className={cn("relative h-12 w-12 rounded-full transition-colors hover:bg-black/5", className)} // Added hover effect
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        <motion.span
          style={{
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-0.5 w-6 bg-current" // Changed to bg-current to inherit text color
          variants={{
            open: {
              rotate: ["0deg", "0deg", "45deg"],
              top: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "35%"],
            },
          }}
        />
        <motion.span
          style={{
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute h-0.5 w-6 bg-current"
          variants={{
            open: {
              width: ["1.5rem", "0rem", "0rem"],
              opacity: [1, 0, 0],
            },
            closed: {
              width: ["0rem", "0rem", "1.5rem"],
              opacity: [0, 0, 1],
            },
          }}
        />
        <motion.span
          style={{
            left: "50%",
            bottom: "35%",
            x: "-50%",
            y: "50%",
          }}
          className="absolute h-0.5 w-6 bg-current"
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
              bottom: ["35%", "50%", "50%"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
              bottom: ["50%", "50%", "35%"],
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};
