"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "../ui";

export const WhyItWorks = () => {
  return (
    <section id="why-it-works" className="py-48 px-6 relative z-10 bg-white border-b-8 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-40 items-center">
          <FadeIn>
            <div className="inline-block bg-neo-pink text-white px-4 py-2 font-black uppercase text-xs tracking-[0.4em] mb-12 border-4 border-black rotate-2 shadow-brutal-sm">
              SMART LEARNING SYSTEM
            </div>
            <h2 className="text-8xl md:text-[10rem] font-heading font-black text-black mb-16 tracking-tighter leading-[0.75] uppercase italic">
              BUILT<br />FOR THE<br /><span className="text-neo-blue">FUTURE.</span>
            </h2>
            <p className="text-2xl md:text-3xl text-black font-black mb-24 leading-snug tracking-tight uppercase italic">
              We combine game mechanics with real-world learning. <span className="bg-neo-yellow px-4 border-4 border-black shadow-brutal-sm">Kids build discipline, patience and smart habits.</span>
            </p>
            
            <div className="space-y-24">
              <div className="relative pl-16 border-l-8 border-black">
                <div className="absolute left-[-50px] top-[-20px] text-10xl font-black text-black/10 select-none">01</div>
                <h4 className="text-5xl font-black mb-6 text-black tracking-tighter flex items-center gap-6 uppercase italic">
                  DOPAMINE BOOST
                </h4>
                <p className="text-xl text-black font-black leading-relaxed uppercase italic opacity-60">Healthy motivation loops. Achievement-based rewards.</p>
              </div>
              <div className="relative pl-16 border-l-8 border-neo-pink">
                <div className="absolute left-[-50px] top-[-20px] text-10xl font-black text-black/10 select-none">02</div>
                <h4 className="text-5xl font-black mb-6 text-black tracking-tighter flex items-center gap-6 uppercase italic">
                  REWARD STACKING
                </h4>
                <p className="text-xl text-black font-black leading-relaxed uppercase italic opacity-60">Learn to wait. Build bigger rewards over time.</p>
              </div>
            </div>
          </FadeIn>

          <motion.div 
            initial={{ rotate: 8, scale: 0.9, opacity: 0 }}
            whileInView={{ rotate: 4, scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] border-8 border-black bg-neo-blue shadow-brutal group overflow-hidden"
          >
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-0 transition-opacity" />
            <Image src="/avatar.png" alt="Kid Gamer Avatar" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            <div className="absolute top-8 left-8 bg-black text-white px-6 py-2 font-black uppercase text-xl border-4 border-white shadow-brutal-sm italic">
              PLAYER_RECORD_442
            </div>
            <div className="absolute bottom-12 left-12 right-12 bg-white border-4 border-black p-8 shadow-brutal transform translate-y-20 group-hover:translate-y-0 transition-transform">
              <div className="text-sm font-black uppercase tracking-widest text-neo-pink mb-2">Master Tier Status</div>
              <div className="text-6xl font-black text-black uppercase tracking-tighter italic">LEGEND RANK</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const WhyBanxBanx = () => {
  return (
    <section className="py-48 px-6 bg-white border-b-8 border-black z-10 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-7xl md:text-[8rem] font-heading font-black text-black mb-24 tracking-tighter leading-none uppercase italic text-center">
          WHY <span className="text-neo-pink">BANXBANX</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-16">
          <FadeIn delay={0.1}>
            <div className="relative pl-12 border-l-8 border-black">
              <div className="absolute left-[-40px] top-[-30px] text-8xl font-black text-black/10 select-none">01</div>
              <h3 className="text-4xl font-black mb-4 text-black uppercase italic">SAFE FOR KIDS</h3>
              <p className="text-xl text-black font-black uppercase italic opacity-60">No real money. Fully controlled.</p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="relative pl-12 border-l-8 border-neo-blue">
              <div className="absolute left-[-40px] top-[-30px] text-8xl font-black text-black/10 select-none">02</div>
              <h3 className="text-4xl font-black mb-4 text-black uppercase italic">EDUCATIONAL</h3>
              <p className="text-xl text-black font-black uppercase italic opacity-60">Learn effort and reward value.</p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="relative pl-12 border-l-8 border-neo-green">
              <div className="absolute left-[-40px] top-[-30px] text-8xl font-black text-black/10 select-none">03</div>
              <h3 className="text-4xl font-black mb-4 text-black uppercase italic">PARENT APPROVED</h3>
              <p className="text-xl text-black font-black uppercase italic opacity-60">Full validation required.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export const FinalCTA = () => {
  return (
    <section className="py-64 px-6 text-center relative overflow-hidden z-10 bg-neo-yellow border-b-8 border-black">
      <FadeIn y={50}>
        <div className="mb-20 inline-flex items-center gap-6 px-10 py-4 bg-black text-neo-green font-black tracking-[0.4em] uppercase text-xl -rotate-2 shadow-brutal border-4 border-white">
          <span className="w-6 h-6 bg-neo-green animate-ping inline-block" /> BETA ENROLLMENT OPEN
        </div>
        <h2 className="text-8xl md:text-[14rem] font-heading font-black text-black mb-24 tracking-tighter leading-none perspective-2000 uppercase italic">
          READY TO<br /><span className="bg-white border-8 border-black px-10 shadow-brutal inline-block rotate-2 mt-4 text-black">LEVEL UP?</span>
        </h2>
        <button className="bg-black text-white border-8 border-white px-24 py-12 text-5xl font-black uppercase tracking-widest shadow-brutal hover:bg-neo-pink hover:text-white transition-all transform hover:-translate-y-4 italic">
          RESERVE YOUR NAME 🚀
        </button>
        <p className="mt-20 text-black font-black uppercase tracking-[0.5em] text-xl opacity-60 italic">Early access. Limited spots.</p>
      </FadeIn>
    </section>
  );
};
