"use client";

import React from "react";
import { MISSION_TICKER_DATA } from "../../constants/data";

export const StatusTicker = () => {
  return (
    <div className="w-full bg-neo-green border-y-8 border-black py-6 overflow-hidden whitespace-nowrap relative z-20">
      <div className="flex animate-scroll-left">
        {[...MISSION_TICKER_DATA, ...MISSION_TICKER_DATA, ...MISSION_TICKER_DATA].map((text, i) => (
          <span key={i} className="text-xl font-black tracking-widest uppercase text-black flex items-center gap-10 mx-10">
            <span className="w-6 h-6 bg-black border-4 border-white rotate-45 shrink-0" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};
