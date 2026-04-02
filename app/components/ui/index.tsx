"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Coins } from "lucide-react";

export const Noise = () => <div className="noise" />;

export const FadeIn = ({ children, delay = 0, y = 20 }: { children: React.ReactNode; delay?: number; y?: number }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const Logo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      d="M30 20C15 20 15 45 30 45C15 45 15 70 30 70H50V20H30Z"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinecap="round"
    />
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
      d="M70 30C85 30 85 55 70 55C85 55 85 80 70 80H50V30H70Z"
      stroke="#2563eb"
      strokeWidth="12"
      strokeLinecap="round"
    />
    <rect x="44" y="44" width="12" height="12" fill="currentColor" className="rotate-45" />
  </svg>
);

export const InteractiveCard = ({ children, className = "", neonColor = "blue" }: { children: React.ReactNode; className?: string; neonColor?: "blue" | "green" | "purple" }) => {
  const bgColors = {
    blue: "bg-white",
    green: "bg-neo-green",
    purple: "bg-neo-pink",
  };

  return (
    <motion.div
      whileHover={{ 
        x: -12, 
        y: -12,
        scale: 1.02,
        boxShadow: "20px 20px 0px 0px #000000",
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      className={`brutal-card p-10 relative group transition-all duration-200 ${bgColors[neonColor]} ${className} text-black`}
    >
      <div className="absolute top-4 right-4 text-[10px] font-black uppercase bg-black text-white px-2 py-1 rotate-3 translate-x-1 shadow-brutal-sm border-2 border-white z-20">
        {neonColor === 'green' ? 'EPIC LOOT 💎' : neonColor === 'blue' ? 'MAIN QUEST ⚔️' : 'ULTRA SECURE 🛡️'}
      </div>
      {children}
    </motion.div>
  );
};

export const AvatarComment = ({ avatar, text, delay = 0 }: { avatar: string, text: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8, x: -20 }}
    whileInView={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ duration: 0.8, delay }}
    className="flex items-center gap-4 border-4 border-black p-4 bg-white shadow-brutal-sm max-w-xs rotate-[-1deg] hover:rotate-1 transition-transform"
  >
    <div className="w-12 h-12 border-4 border-black overflow-hidden shrink-0 shadow-brutal-sm rotate-3">
      <Image src={avatar} alt="Avatar" width={48} height={48} className="object-cover" />
    </div>
    <div className="text-sm font-black text-black leading-tight italic uppercase tracking-tighter">&quot;{text}&quot;</div>
  </motion.div>
);

export const FloatingCoin = ({ delay = 0 }: { delay?: number }) => {
  const [collected, setCollected] = useState(false);
  
  if (collected) return null;

  return (
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: [0, -40, 0], rotate: [0, 360] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      whileHover={{ scale: 1.5, rotate: 15 }}
      onMouseEnter={() => {
        setTimeout(() => setCollected(true), 150);
      }}
      className="absolute cursor-pointer z-50 group"
    >
      <div className="w-16 h-16 bg-neo-yellow border-4 border-black flex items-center justify-center shadow-brutal-sm">
        <span className="text-black font-black text-xl group-hover:block hidden">+10</span>
        <Coins className="text-black w-8 h-8 group-hover:hidden" />
      </div>
      <AnimatePresence>
        {collected && (
          <motion.div 
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            className="absolute inset-0 bg-neo-yellow border-4 border-black"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};
