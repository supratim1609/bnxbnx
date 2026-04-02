"use client";

import React from "react";
import { FadeIn } from "../ui";

export const ModesSection = () => {
  return (
    <section className="py-32 px-6 bg-neo-yellow border-y-8 border-black z-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { title: "NOOB", subtitle: "START YOUR JOURNEY", desc: "Earn your first coins", color: "bg-white" },
            { title: "DAILY GRIND", subtitle: "STAY CONSISTENT", desc: "Build habits. Earn more", color: "bg-neo-blue" },
            { title: "HARD MODE", subtitle: "TAKE THE CHALLENGE", desc: "Push your limits", color: "bg-neo-green text-black" },
            { title: "EPIC MODE", subtitle: "ELITE STATUS", desc: "Top players only", color: "bg-neo-pink text-white" },
          ].map((mode, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={`${mode.color} border-4 border-black p-8 flex flex-col justify-between h-96 shadow-brutal hover:-translate-y-4 transition-transform cursor-pointer`}>
                <div>
                  <h3 className="text-5xl font-black uppercase italic mb-4 tracking-tighter leading-none">{mode.title}</h3>
                  <div className={`inline-block ${i === 3 ? "bg-white text-black" : "bg-black text-white"} text-xs font-black px-4 py-2 uppercase tracking-widest mb-6 border-2 border-black shadow-brutal-sm -rotate-2`}>
                    {mode.subtitle}
                  </div>
                  <p className="font-black uppercase text-sm tracking-widest opacity-90 leading-tight">{mode.desc}</p>
                </div>
                <button className={`w-full ${i === 3 ? "bg-white text-black" : "bg-black text-white"} font-black py-4 uppercase border-4 border-black hover:bg-neo-yellow hover:text-black transition-colors shadow-brutal-sm mt-8`}>
                  START MISSION
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
