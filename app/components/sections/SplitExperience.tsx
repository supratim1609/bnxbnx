"use client";

import React from "react";
import { FadeIn } from "../ui";

export const SplitExperience = () => {
  return (
    <section id="parents" className="relative flex flex-col md:flex-row min-h-[120vh] overflow-hidden border-b-8 border-black">
      <div className="flex-1 flex flex-col justify-start px-10 md:px-24 pt-80 pb-32 relative bg-neo-green group custom-cursor border-r-8 border-black overflow-hidden hover:bg-neo-green/95 transition-colors">
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        <div className="absolute bottom-12 left-12 bg-black text-white px-6 py-2 font-black text-xl uppercase rotate-3 shadow-brutal border-4 border-white italic z-20">PLAYER_HUD</div>
        <FadeIn>
          <h2 className="text-7xl md:text-[8rem] font-heading font-black text-black mb-10 tracking-tighter leading-[0.8] uppercase italic">
            DOMINATE<br />YOUR GAME.
          </h2>
          <p className="text-xl md:text-3xl text-black font-black max-w-xl mb-12 uppercase italic leading-tight">
            Earn. Improve. Win.
          </p>
          <button className="bg-white text-black border-8 border-black px-12 py-6 text-2xl font-black uppercase tracking-widest shadow-brutal hover:bg-black hover:text-white transition-all transform hover:-translate-y-2 italic flex items-center gap-4">
            ENTER BANXBANX <span className="text-4xl">→</span>
          </button>
        </FadeIn>
      </div>

      <div className="flex-1 flex flex-col justify-start px-10 md:px-24 pt-80 pb-32 relative bg-neo-pink group custom-cursor overflow-hidden hover:bg-neo-pink/95 transition-colors">
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        <div className="absolute bottom-12 right-12 bg-black text-white px-6 py-2 font-black text-xl uppercase -rotate-3 shadow-brutal border-4 border-white italic z-20">ADMIN_DECK</div>
        <FadeIn>
          <h2 className="text-7xl md:text-[8rem] font-heading font-black text-black mb-10 tracking-tighter leading-[0.8] uppercase text-right italic font-black">
            PARENT<br />CONTROL<br />CENTER.
          </h2>
          <p className="text-xl md:text-3xl text-black font-black max-w-xl mb-12 uppercase italic text-right ml-auto leading-tight">
            Track. Approve. Guide safely.
          </p>
          <div className="text-right">
            <button className="bg-black text-white border-8 border-neo-pink px-12 py-6 text-2xl font-black uppercase tracking-widest shadow-brutal hover:bg-white hover:text-black transition-all transform hover:-translate-y-2 italic">
              PARENT ACCESS 🔒
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
