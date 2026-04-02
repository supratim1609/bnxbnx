"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// MVC: View Imports (Components)
import { Noise } from "./components/ui";
import { Preloader } from "./components/sections/Preloader";
import { Navbar } from "./components/sections/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { StatusTicker } from "./components/sections/StatusTicker";
import { RewardShowcase } from "./components/sections/LootSection";
import { MissionProtocol } from "./components/sections/MissionProtocol";
import { ModesSection } from "./components/sections/ModesSection";
import { SplitExperience } from "./components/sections/SplitExperience";
import { SafetySection } from "./components/sections/SafetySection";
import { WhyItWorks, WhyBanxBanx, FinalCTA } from "./components/sections/WhyItWorksSection";
import { Footer } from "./components/sections/Footer";

// MVC: Controller Imports (Hooks)
import { useLoading } from "./hooks/useLoading";

export default function LandingPage() {
  // Controller Logic: Handle Loading State
  const loading = useLoading(2500);

  // Controller Logic: Handle Scroll Progress
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative w-full overflow-x-hidden selection:bg-neo-blue selection:text-white bg-background custom-cursor">
      {/* View Layer: Preloader & HUD Elements */}
      <Preloader loading={loading} />
      <Noise />
      
      {/* Background HUD Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-4 bg-neo-pink z-[100] origin-left border-b-4 border-black"
        style={{ scaleX: smoothProgress }}
      />

      {/* Main Sections (The "View" Orchestration) */}
      <Navbar scrollYProgress={scrollYProgress} />
      
      <main>
        <HeroSection loading={loading} />
        <StatusTicker />
        <RewardShowcase />
        <MissionProtocol />
        <ModesSection />
        <SplitExperience />
        <SafetySection />
        <WhyItWorks />
        <WhyBanxBanx />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
