"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroGUI } from "./HeroGUI";
import { FloatingCoin, AvatarComment } from "../ui";

export const HeroSection = ({ loading }: { loading: boolean }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-6 z-10 border-b-8 border-black overflow-hidden bg-background">
      <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <AnimatePresence>
          {!loading && (
            <>
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="text-7xl md:text-[7.5rem] lg:text-[8.5rem] font-heading font-black tracking-tight text-black mb-12 max-w-7xl leading-[0.9] perspective-2000 uppercase italic"
              >
                BANKS FOR THE <span className="bg-neo-pink text-white px-10 shadow-brutal -rotate-3 inline-block">WINNING</span><br />
                <span className="text-neo-blue underline decoration-[12px] underline-offset-[12px]">KIDS.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-[#2F3A4B] font-bold max-w-4xl mb-16 leading-relaxed"
              >
                Complete missions. Earn coins. Unlock real rewards.<br />
                A game kids love. A system parents trust.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="flex flex-col sm:flex-row gap-8 mb-12 relative z-20"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-white px-8 py-5 md:px-12 md:py-6 font-black text-lg md:text-xl uppercase tracking-wider transition-all"
                >
                  JOIN THE WAITLIST 🚀
                </motion.button>
                <button className="bg-white text-black px-8 py-5 md:px-12 md:py-6 border-4 border-black font-black text-lg md:text-xl uppercase tracking-wider hover:bg-gray-50 transition-all">
                  DISCOVER HOW
                </button>
                <p className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full text-center text-[#4A5568] font-bold uppercase tracking-widest text-sm">
                  NO REAL MONEY. 100% PARENT CONTROLLED.
                </p>
                
                <div className="absolute -top-32 -left-20 rotate-12"><FloatingCoin delay={0.5} /></div>
                <div className="absolute -bottom-20 -right-40 -rotate-12"><FloatingCoin delay={1.2} /></div>
              </motion.div>

              <div className="relative w-full border-8 border-black shadow-brutal bg-white overflow-hidden p-4 md:p-12">
                <div className="absolute top-0 left-0 bg-black text-neo-yellow px-8 py-4 font-black text-xl uppercase z-30 -rotate-3 shadow-brutal-sm border-r-4 border-b-4 border-black italic">
                  SAFE. EDUCATIONAL. PARENT APPROVED.
                </div>
                <HeroGUI />
                
                <div className="absolute top-1/4 -right-10 transform translate-x-full">
                  <FloatingCoin delay={2} />
                </div>
                
                <div className="absolute -top-10 -left-10 hidden xl:block rotate-6">
                  <AvatarComment avatar="/avatar.png" text="I just got the Gold Sword! ⚔️" delay={1} />
                </div>
                <div className="absolute top-1/2 -right-10 hidden xl:block -rotate-6">
                  <AvatarComment avatar="/avatar.png" text="Rank: Grandmaster achieved! 💎" delay={1.5} />
                </div>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
