"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Logo } from "../ui";

interface NavbarProps {
  scrollYProgress: MotionValue<number>;
}

export const Navbar = ({ scrollYProgress }: NavbarProps) => {
  const headerY = useTransform(scrollYProgress, [0, 0.05], [0, -20]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.95]);

  return (
    <motion.nav 
      style={{ y: headerY, opacity: headerOpacity }}
      className="fixed top-4 w-full z-50 px-6 md:px-20 flex items-center justify-between pointer-events-none"
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto pointer-events-auto">
        <motion.div 
          className="text-2xl font-heading font-black tracking-tighter text-white flex gap-1 items-center bg-black border-4 border-black p-4 rotate-1 shadow-brutal-sm"
        >
          <Logo className="w-10 h-10" />
          <span className="flex uppercase text-lg tracking-widest italic">Banx<span className="text-neo-blue">Banx</span></span>
        </motion.div>
        
        <div className="hidden lg:flex items-center gap-2 bg-white border-4 border-black p-2 shadow-brutal rotate-[-0.5deg]">
          {["Missions", "Parents", "Safety", "Why It Works"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} 
              className="px-8 py-3 text-xs font-black uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all italic hover:rotate-3"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.button 
          whileHover={{ x: -4, y: -4, boxShadow: "12px 12px 0px 0px #000000" }}
          whileTap={{ x: 4, y: 4, boxShadow: "0px 0px 0px 0px #000000" }}
          className="brutal-btn text-sm"
        >
          GET EARLY ACCESS
        </motion.button>
      </div>
    </motion.nav>
  );
};
