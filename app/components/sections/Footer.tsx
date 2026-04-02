"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Logo } from "../ui";

export const Footer = () => {
  return (
    <footer className="py-48 px-6 md:px-20 border-t-8 border-black bg-white relative z-10 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-32">
        <div className="md:col-span-2">
          <motion.div 
             className="text-6xl font-heading font-black mb-12 text-black tracking-tighter flex items-center gap-6 italic"
          >
            <Logo className="w-20 h-20" />
            <span>Banx<span className="text-neo-blue">Banx</span></span>
          </motion.div>
          <p className="text-3xl text-black font-black leading-tight mb-16 max-w-md uppercase italic">
            Built for kids. Controlled by parents.
          </p>
          <div className="flex gap-8">
            {[1, 2, 3, 4].map(i => (
              <motion.div 
                key={i} 
                whileHover={{ x: -4, y: -4, boxShadow: "10px 10px 0px 0px #000" }}
                className="w-20 h-20 bg-neo-yellow border-4 border-black flex items-center justify-center text-black shadow-brutal-sm cursor-pointer transform rotate-6"
              >
                <Sparkles className="w-10 h-10" />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-10">
          <span className="text-2xl font-black uppercase bg-black text-white px-4 py-2 self-start transform -rotate-3 border-4 border-black italic shadow-brutal-sm">Trust & Safety</span>
          <div className="flex flex-col gap-6">
            <span className="text-xl font-black uppercase italic text-black/80">✓ Parental approval required</span>
            <span className="text-xl font-black uppercase italic text-black/80">✓ 100% safe environment</span>
            <span className="text-xl font-black uppercase italic text-black/80">✓ No real money involved</span>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <span className="text-2xl font-black uppercase bg-neo-pink text-white px-4 py-2 self-start transform rotate-3 border-4 border-black italic shadow-brutal-sm">Quick Links</span>
          <div className="flex flex-col gap-6">
            {["How it works", "For Parents", "For Kids", "FAQs", "Legal"].map(link => (
              <a key={link} href="#" className="text-2xl font-black uppercase hover:text-neo-blue transition-colors italic">{link}</a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-40 pt-20 border-t-4 border-black flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-sm font-black uppercase tracking-widest opacity-40 italic">© 2026 BANXBANX NEURAL_NETWORKS. ALL RIGHTS RESERVED.</div>
        <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-12 text-sm font-black uppercase opacity-40 tracking-widest italic">
          <a href="#" className="hover:opacity-100 transition-opacity whitespace-nowrap">Privacy Policy</a>
          <a href="#" className="hover:opacity-100 transition-opacity whitespace-nowrap">Terms of Service</a>
          <a href="#" className="hover:opacity-100 transition-opacity whitespace-nowrap">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};
