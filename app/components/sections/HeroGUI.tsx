"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coins, Trophy } from "lucide-react";
import { QUEST_LOG_DATA } from "../../constants/data";

export const HeroGUI = () => {
  return (
    <div className="relative w-full aspect-[16/9] flex items-center justify-center perspective-1000 p-10 md:p-20 group">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neo-blue/5 blur-[150px] rounded-full animate-pulse" />
      
      {/* Main Dashboard Card */}
      <motion.div 
        initial={{ rotateY: -5, rotateX: 10, y: 50, opacity: 0 }}
        animate={{ rotateY: -2, rotateX: 5, y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-full bg-white border-8 border-black shadow-brutal p-8 md:p-16 flex flex-col justify-between overflow-hidden"
      >
        <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 font-black text-xs uppercase rotate-2 shadow-brutal-sm border-2 border-white z-20">WARRIOR_HUD_v4.0</div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
        <div className="scanline" />
        
        {/* Top Header Bar */}
        <div className="flex justify-between items-center relative z-10">
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 bg-black border-4 border-neo-blue flex items-center justify-center shadow-brutal-sm">
              <div className="w-10 h-10 bg-neo-blue border-2 border-black" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-black tracking-widest text-black/40">Warrior Class</div>
              <div className="text-xl font-black text-black">PLAYER_ONE</div>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <div className="flex flex-col items-end">
              <div className="text-[10px] uppercase font-black tracking-widest text-black/40 text-right">Balance</div>
              <div className="text-3xl font-black text-black flex items-center gap-2 bg-neo-yellow px-4 py-2 border-4 border-black shadow-brutal-sm">
                <Coins className="text-black w-7 h-7" /> 5,450
              </div>
            </div>
          </div>
        </div>

        {/* Center Level Up System */}
        <div className="relative z-10 py-10">
          <div className="text-center mb-6">
            <motion.div 
              animate={{ rotate: [-1, 1, -1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="text-black font-black tracking-[0.4em] uppercase text-sm mb-6 bg-neo-green border-4 border-black py-2 inline-block px-10 shadow-brutal-sm"
            >
              LEVEL 14 // XP 85%
            </motion.div>
            <div className="w-full h-10 bg-white border-4 border-black shadow-brutal-sm overflow-hidden flex">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "85%" }}
                transition={{ duration: 2, delay: 1, ease: "circOut" }}
                className="h-full bg-neo-blue border-r-4 border-black"
              />
            </div>
          </div>
          <div className="flex justify-between text-[12px] font-black uppercase tracking-widest text-black bg-white/40 px-2 border-x-4 border-black">
            <span>8,900 XP Collected</span>
            <span className="text-neo-pink">1,100 XP TO NEXT TIER</span>
          </div>
        </div>

        {/* Bottom Quests Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
          {QUEST_LOG_DATA.map((quest, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: -4, y: -4, boxShadow: "10px 10px 0px 0px #000000" }}
              className={`${quest.color} border-4 border-black p-6 flex flex-col justify-between transition-all cursor-pointer shadow-brutal-sm text-black`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center shadow-brutal-sm">
                  {React.createElement(quest.icon, { className: "w-5 h-5 text-black" })}
                </div>
                <div className="text-[8px] uppercase font-black tracking-widest bg-black text-white px-2 py-0.5 border border-white">{quest.status}</div>
              </div>
              <div className="text-[10px] font-black uppercase tracking-tight">{quest.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Ambient Decorative Lines */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-neo-blue/5 blur-[80px] rounded-full pointer-events-none" />
      </motion.div>

      {/* Pop-out Card Simulation */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 -right-10 w-64 bg-white/10 backdrop-blur-3xl p-6 border-4 border-black shadow-brutal z-20 hidden md:block"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 bg-neo-pink/20 border-4 border-black flex items-center justify-center">
            <Trophy className="text-neo-pink w-6 h-6" />
          </div>
          <div className="text-xs font-black uppercase text-black tracking-widest">New Goal!</div>
        </div>
        <div className="text-[10px] text-black/60 mb-3 font-medium uppercase italic">Nintendo Switch OLED</div>
        <div className="w-full h-4 bg-black border-2 border-black shadow-brutal-sm overflow-hidden">
          <div className="w-[45%] h-full bg-neo-pink" />
        </div>
      </motion.div>
    </div>
  );
};
