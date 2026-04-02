"use client";

import React from "react";
import { FadeIn } from "../ui";

export const MissionProtocol = () => {
  return (
    <section id="missions" className="py-40 px-6 relative z-10 bg-background border-b-8 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-3xl">
            <FadeIn y={40}>
              <div className="flex items-center gap-4 text-neo-blue font-black tracking-[0.4em] uppercase text-xl mb-10 italic">
                  CORE_LOOP_v2.1
              </div>
              <h2 className="text-7xl md:text-[8rem] font-heading font-black text-black mb-8 tracking-tighter leading-[0.8] uppercase italic">
                COMPLETE MISSIONS.<br /><span className="text-black opacity-10">LEVEL UP.</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <div className="bg-white border-4 border-black p-8 shadow-brutal max-w-sm rotate-2">
              <p className="text-lg text-black font-black uppercase leading-tight italic">
                Real-life actions become rewards. Complete tasks. Gain status. Unlock more.
              </p>
            </div>
          </FadeIn>
        </div>


      </div>
    </section>
  );
};
