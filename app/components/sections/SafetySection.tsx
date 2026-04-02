"use client";

import React from "react";
import { ShieldAlert, ShieldCheck, Lock } from "lucide-react";
import { FadeIn } from "../ui";

export const SafetySection = () => {
  return (
    <section id="safety" className="pt-80 pb-64 px-6 relative z-10 bg-background border-b-8 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border-8 border-black pt-48 pb-32 px-12 md:px-32 text-center relative overflow-hidden shadow-brutal">
          <div className="absolute top-0 right-0 p-10 rotate-12 opacity-10"><ShieldAlert className="w-80 h-80 text-black" /></div>
          <FadeIn>
            <div className="flex justify-center mb-12">
              <div className="w-24 h-24 bg-neo-yellow border-8 border-black flex items-center justify-center shadow-brutal -rotate-6">
                <ShieldAlert className="text-black w-12 h-12" />
              </div>
            </div>
            <h2 className="text-6xl md:text-[8rem] font-heading font-black text-black mb-10 tracking-tighter uppercase italic leading-[0.85]">ZERO RISK. <br /><span className="bg-neo-pink text-white px-8 shadow-brutal inline-block rotate-2 mt-4">REAL REWARDS.</span></h2>
            <p className="text-xl md:text-2xl text-black font-black max-w-4xl mx-auto mb-24 uppercase italic leading-tight">
              Closed system. No payments. No scams. Only fun, learning and progression.
            </p>
            
            <div className="grid md:grid-cols-2 gap-24 text-left">
              <div className="flex gap-12 group p-10 border-4 border-black bg-background shadow-brutal-sm transform hover:-rotate-1 transition-transform">
                <div className="w-20 h-20 bg-black flex items-center justify-center shrink-0 border-4 border-white shadow-brutal-sm">
                  <Lock className="text-white w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-4xl font-black mb-4 text-black uppercase tracking-tight italic">Isolated Economy</h4>
                  <p className="text-lg text-black font-black leading-relaxed uppercase tracking-tight">Private system. Friends only. No external access.</p>
                </div>
              </div>
              <div className="flex gap-12 group p-10 border-4 border-black bg-neo-blue shadow-brutal-sm transform hover:rotate-1 transition-transform">
                <div className="w-20 h-20 bg-white flex items-center justify-center shrink-0 border-4 border-black shadow-brutal-sm">
                  <ShieldCheck className="text-black w-10 h-10" />
                </div>
                <div>
                  <h4 className="text-4xl font-black mb-4 text-black uppercase tracking-tight italic">Privacy Guard</h4>
                  <p className="text-lg text-black font-black leading-relaxed uppercase tracking-tight">Child-safe data. Fully compliant. We never sell data.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
