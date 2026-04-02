"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "../ui";

export const Preloader = ({ loading }: { loading: boolean }) => {
  const [status, setStatus] = useState("Initializing Guild HUD...");

  useEffect(() => {
    const statuses = [
      "Connecting to Secure Vault...",
      "Syncing Mission Data...",
      "Fact: Gold is more stable than V-Bucks! 📈",
      "Loading Epic Loot...",
      "Tip: Level 20 unlocks the Diamond HUD! 💎",
      "Status: Legendary",
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < statuses.length) setStatus(statuses[i++]);
    }, 400); 
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[1000] bg-neo-yellow flex flex-col items-center justify-center p-10 overflow-hidden border-b-8 border-black"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1, rotate: [0, -5, 5, 0] }}
            transition={{ 
              scale: { duration: 0.5 }, 
              opacity: { duration: 0.5 },
              rotate: { duration: 0.4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-48 h-48 mb-12 relative flex items-center justify-center bg-white border-8 border-black shadow-brutal"
          >
            <Logo className="w-32 h-32" />
          </motion.div>

          <div className="w-96">
            <div className="text-sm font-black uppercase tracking-[0.2em] text-black mb-8 text-center bg-white border-4 border-black py-4 px-6 shadow-brutal-sm">
              {status}
            </div>
            <div className="w-full h-10 bg-black border-4 border-black shadow-brutal-sm overflow-hidden p-1">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "circIn" }}
                className="h-full bg-neo-blue border-2 border-white"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
