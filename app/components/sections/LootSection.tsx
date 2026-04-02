"use client";

import React from "react";
import { motion } from "framer-motion";
import { LOOT_DATA } from "../../constants/data";
import { Sparkles } from "lucide-react";
import { FadeIn, FloatingCoin } from "../ui";

export const LootCarousel = () => {
  return (
    <div className="w-full py-20 overflow-hidden relative bg-white border-y-8 border-black">
      <div className="flex animate-scroll-left whitespace-nowrap">
        {[...LOOT_DATA, ...LOOT_DATA, ...LOOT_DATA, ...LOOT_DATA].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -15, rotate: i % 2 === 0 ? 3 : -3, boxShadow: "25px 25px 0px 0px #000000" }}
            className={`w-64 h-80 border-4 border-black p-8 flex flex-col items-center justify-between transition-all group cursor-pointer shadow-brutal mx-8 shrink-0 ${item.color}`}
          >
            <div className="w-24 h-24 bg-white border-4 border-black flex items-center justify-center text-5xl shadow-brutal-sm group-hover:scale-110 transition-transform -rotate-3">
              {item.icon}
            </div>
            <div className="text-center">
              <div className="text-lg font-black uppercase tracking-widest text-black mb-1">{item.title}</div>
              <div className="text-xs font-black uppercase text-black/60">{item.xp} REWARD</div>
            </div>
            <button className="w-full py-4 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black border-4 border-black transition-all shadow-brutal-sm">
              GET LOOT
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const RewardShowcase = () => {
  return (
    <section className="py-48 px-6 relative overflow-hidden bg-white border-b-8 border-black">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-24 relative">
            <div className="absolute -top-32 left-1/4"><FloatingCoin delay={0.1} /></div>
            
            <div className="inline-flex items-center gap-4 px-8 py-3 bg-neo-pink text-white text-sm font-black tracking-[0.3em] uppercase mb-12 border-4 border-black shadow-brutal-sm rotate-1">
              <Sparkles className="w-6 h-6" /> EPIC LOOT PIPELINE 🏆
            </div>
            <h2 className="text-7xl md:text-[8rem] font-heading font-black text-black tracking-tighter mb-12 uppercase italic leading-none">
              LOOT YOU&apos;LL <br /><span className="bg-neo-blue text-white px-10 shadow-brutal inline-block -rotate-2">ACTUALLY WANT.</span>
            </h2>
            <p className="text-2xl text-black font-black max-w-3xl mx-auto uppercase tracking-tight">
              No boring stickers here. Earn Robux, V-Bucks, and the gear you&apos;ve been eyeing in your favorite games. 🎮
            </p>
          </div>
        </FadeIn>
        
        <LootCarousel />
      </div>
    </section>
  );
};
