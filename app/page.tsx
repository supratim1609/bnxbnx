"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { 
  motion, 
  AnimatePresence,
  useScroll, 
  useTransform, 
  useSpring,
  useMotionValue
} from "framer-motion";

import { 
  Zap, 
  ShieldCheck, 
  Trophy, 
  TrendingUp, 
  Brain, 
  Hourglass, 
  Lock,
  Menu,
  Coins,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Gamepad2
} from "lucide-react";

const Noise = () => <div className="noise" />;

const FadeIn = ({ children, delay = 0, y = 20 }: { children: React.ReactNode; delay?: number; y?: number }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

const Logo = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      d="M30 20C15 20 15 45 30 45C15 45 15 70 30 70H50V20H30Z"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinecap="round"
    />
    <motion.path
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
      d="M70 30C85 30 85 55 70 55C85 55 85 80 70 80H50V30H70Z"
      stroke="#2563eb"
      strokeWidth="12"
      strokeLinecap="round"
    />
    <rect x="44" y="44" width="12" height="12" fill="currentColor" className="rotate-45" />
  </svg>
);

const InteractiveCard = ({ children, className = "", neonColor = "blue" }: { children: React.ReactNode; className?: string; neonColor?: "blue" | "green" | "purple" }) => {
  const bgColors = {
    blue: "bg-white",
    green: "bg-neo-green",
    purple: "bg-neo-pink",
  };

  return (
    <motion.div
      whileHover={{ 
        x: -12, 
        y: -12,
        scale: 1.02,
        boxShadow: "20px 20px 0px 0px #000000",
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      className={`brutal-card p-10 relative group transition-all duration-200 ${bgColors[neonColor]} ${className} text-black border-4 border-black`}
    >
      <div className="absolute top-4 right-4 text-[10px] font-black uppercase bg-black text-white px-2 py-1 rotate-3 translate-x-1 shadow-brutal-sm border-2 border-white">
        {neonColor === 'green' ? 'EPIC LOOT 💎' : neonColor === 'blue' ? 'MAIN QUEST ⚔️' : 'ULTRA SECURE 🛡️'}
      </div>
      {children}
    </motion.div>
  );
};

const AvatarComment = ({ avatar, text, delay = 0 }: { avatar: string, text: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8, x: -20 }}
    whileInView={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ duration: 0.8, delay }}
    className="flex items-center gap-4 border-4 border-black p-4 bg-white shadow-brutal-sm max-w-xs"
  >
    <div className="w-12 h-12 border-4 border-black overflow-hidden shrink-0 shadow-brutal-sm rotate-3">
      <Image src={avatar} alt="Avatar" width={48} height={48} className="object-cover" />
    </div>
    <div className="text-sm font-black text-black leading-tight italic uppercase tracking-tighter">"{text}"</div>
  </motion.div>
);

const LootCarousel = () => {
  const loot = [
    { title: "Robux", icon: "💎", color: "bg-neo-blue", xp: "Level 10" },
    { title: "Fortnite V-Bucks", icon: "🎮", color: "bg-neo-green", xp: "Level 15" },
    { title: "Epic Cape", icon: "🧛", color: "bg-neo-pink", xp: "Level 25" },
    { title: "Gold Sword", icon: "⚔️", color: "bg-neo-yellow", xp: "Level 50" },
    { title: "Lava Wings", icon: "🔥", color: "bg-[#FF6B00]", xp: "Level 75" },
  ];

  return (
    <div className="w-full py-20 overflow-hidden relative bg-white border-y-8 border-black">
      <div className="flex animate-scroll-left whitespace-nowrap">
        {[...loot, ...loot, ...loot, ...loot].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -15, rotate: i % 2 === 0 ? 3 : -3, boxShadow: "25px 25px 0px 0px #000000" }}
            className={`w-64 h-80 border-4 border-black p-8 flex flex-col items-center justify-between transition-all group cursor-pointer shadow-brutal mx-8 shrink-0 ${item.color}`}
          >
            <div className="w-24 h-24 bg-white border-4 border-black flex items-center justify-center text-5xl shadow-brutal-sm group-hover:scale-110 transition-transform -rotate-3">
              {item.icon}
            </div>
            <div className="text-center">
              <div className="text-lg font-black uppercase tracking-widest text-black mb-1">{item.title}</div>
              <div className="text-xs font-black uppercase text-black/60">{item.xp} REWARD</div>
            </div>
            <button className="w-full py-4 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black border-4 border-black transition-all shadow-brutal-sm">
              GET LOOT
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Preloader = ({ loading }: { loading: boolean }) => {
  const [status, setStatus] = useState("Initializing Guild HUD...");

  useEffect(() => {
    const statuses = [
      "Connecting to Secure Vault...",
      "Syncing Mission Data...",
      "Fact: Gold is more stable than V-Bucks! 📈",
      "Loading Epic Loot...",
      "Tip: Level 20 unlocks the Diamond HUD! 💎",
      "Status: Legendary",
    ];
    let i = 0;
    const interval = setInterval(() => {
      if (i < statuses.length) setStatus(statuses[i++]);
    }, 400); 
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[1000] bg-neo-yellow flex flex-col items-center justify-center p-10 overflow-hidden border-b-8 border-black"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1, rotate: [0, -5, 5, 0] }}
            transition={{ 
              scale: { duration: 0.5 }, 
              opacity: { duration: 0.5 },
              rotate: { duration: 0.4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="w-48 h-48 mb-12 relative flex items-center justify-center bg-white border-8 border-black shadow-brutal"
          >
            <Logo className="w-32 h-32" />
          </motion.div>

          <div className="w-96">
            <div className="text-sm font-black uppercase tracking-[0.2em] text-black mb-8 text-center bg-white border-4 border-black py-4 px-6 shadow-brutal-sm">
              {status}
            </div>
            <div className="w-full h-10 bg-black border-4 border-black shadow-brutal-sm overflow-hidden p-1">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "circIn" }}
                className="h-full bg-neo-blue border-2 border-white"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const StatusTicker = () => {
  const missions = [
    "Alex completed 'Math Wizard' mission • +50 XP",
    "Sarah redeemed 'Roblox Gift Card' • Tier Up!",
    "Jordan saved $10 for 'New Headphones' • Master Saver Status",
    "Maya approved 'Cleaning Room' mission • Instant Payout",
    "Leo reached Level 15 • Ninja Rank Unlocked",
  ];

  return (
    <div className="w-full bg-neo-green border-y-8 border-black py-6 overflow-hidden whitespace-nowrap relative z-20">
      <div className="flex animate-scroll-left">
        {[...missions, ...missions, ...missions].map((text, i) => (
          <span key={i} className="text-xl font-black tracking-widest uppercase text-black flex items-center gap-10 mx-10">
            <span className="w-6 h-6 bg-black border-4 border-white rotate-45 shrink-0" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

const FloatingCoin = ({ delay = 0 }: { delay?: number }) => {
  const [collected, setCollected] = useState(false);
  
  if (collected) return null;

  return (
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: [0, -40, 0], rotate: [0, 360] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      whileHover={{ scale: 1.5, rotate: 15 }}
      onMouseEnter={() => {
        setTimeout(() => setCollected(true), 150);
      }}
      className="absolute cursor-pointer z-50 group"
    >
      <div className="w-16 h-16 bg-neo-yellow border-4 border-black flex items-center justify-center shadow-brutal-sm">
        <span className="text-black font-black text-xl group-hover:block hidden">+10</span>
        <Coins className="text-black w-8 h-8 group-hover:hidden" />
      </div>
      <AnimatePresence>
        {collected && (
          <motion.div 
            initial={{ scale: 1, opacity: 1 }}
            animate={{ scale: 4, opacity: 0 }}
            className="absolute inset-0 bg-neo-yellow border-4 border-black"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};



const HeroGUI = () => {
  return (
    <div className="relative w-full aspect-[16/9] flex items-center justify-center perspective-1000 p-10 md:p-20 group">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-blue/5 blur-[150px] rounded-full animate-pulse" />
      
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
          {[
            { label: "Math Wizard", color: "bg-neo-blue", icon: Brain, status: "Active" },
            { label: "Daily Login", color: "bg-neo-green", icon: Zap, status: "Claimed" },
            { label: "Room Sweep", color: "bg-neo-pink", icon: ShieldCheck, status: "Pending" }
          ].map((quest, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: -4, y: -4, boxShadow: "10px 10px 0px 0px #000000" }}
              className={`${quest.color} border-4 border-black p-6 flex flex-col justify-between transition-all cursor-pointer shadow-brutal-sm text-black`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center shadow-brutal-sm">
                  <quest.icon className="w-5 h-5 text-black" />
                </div>
                <div className="text-[8px] uppercase font-black tracking-widest bg-black text-white px-2 py-0.5 border border-white">{quest.status}</div>
              </div>
              <div className="text-[10px] font-black uppercase tracking-tight">{quest.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Ambient Decorative Lines */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent-blue/5 blur-[80px] rounded-full pointer-events-none" />
      </motion.div>

      {/* Pop-out Card Simulation */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 -right-10 w-64 glass p-6 rounded-[2.5rem] border-accent-pink/30 shadow-2xl backdrop-blur-3xl z-20 hidden md:block"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-full bg-accent-pink/20 flex items-center justify-center">
            <Trophy className="text-accent-pink w-6 h-6" />
          </div>
          <div className="text-xs font-black uppercase text-white tracking-widest">New Goal!</div>
        </div>
        <div className="text-[10px] text-white/40 mb-3 font-medium">Nintendo Switch OLED</div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <div className="w-[45%] h-full bg-accent-pink shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
        </div>
      </motion.div>
    </div>
  );
};

export default function LandingPage() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const headerY = useTransform(scrollYProgress, [0, 0.05], [0, -20]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative w-full overflow-x-hidden selection:bg-neo-blue selection:text-white bg-background custom-cursor">
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

      {/* Header */}
      <motion.nav 
        style={{ y: headerY, opacity: headerOpacity }}
        className="fixed top-4 w-full z-50 px-6 md:px-20 flex items-center justify-between pointer-events-none"
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto pointer-events-auto">
          <motion.div 
            className="text-2xl font-heading font-black tracking-tighter text-white flex gap-1 items-center bg-black border-4 border-black p-4 rotate-1 shadow-brutal-sm"
          >
            <Logo className="w-10 h-10" />
            <span className="flex uppercase text-lg tracking-widest italic">Banx<span className="text-neo-blue">Banx</span></span>
          </motion.div>
          
          <div className="hidden lg:flex items-center gap-2 bg-white border-4 border-black p-2 shadow-brutal rotate-[-0.5deg]">
            {["Missions", "Parents", "Safety", "Why It Works"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} 
                className="px-8 py-3 text-xs font-black uppercase tracking-widest text-black hover:bg-black hover:text-white transition-all italic hover:rotate-3"
              >
                {item}
              </a>
            ))}
          </div>

          <motion.button 
            whileHover={{ x: -4, y: -4, boxShadow: "12px 12px 0px 0px #000000" }}
            whileTap={{ x: 4, y: 4, boxShadow: "0px 0px 0px 0px #000000" }}
            className="brutal-btn text-sm"
          >
            GET EARLY ACCESS
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 md:pt-64 md:pb-40 px-6 z-10 border-b-8 border-black overflow-hidden bg-background">
        <div className="absolute inset-0 bg-white/5 mix-blend-overlay pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          
          <AnimatePresence>
            {!loading && (
              <>
                <motion.h1 
                  initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="text-7xl md:text-[14rem] font-heading font-black tracking-tight text-black mb-16 max-w-7xl leading-[0.75] perspective-2000 uppercase italic"
                >
                  NOT JUST <span className="bg-neo-pink text-white px-10 shadow-brutal -rotate-3 inline-block">SPENDING.</span><br />
                  <span className="text-neo-blue underline decoration-[12px] underline-offset-[12px]">EARNING.</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-2xl md:text-4xl text-black font-black max-w-4xl mb-24 leading-tight tracking-tight uppercase"
                >
                  The world's first <span className="bg-white border-4 border-black px-4 rotate-1 inline-block shadow-brutal-sm">Social Banking RPG</span>.<br />
                  <span className="bg-neo-green text-black px-6 -rotate-1 inline-block border-4 border-black shadow-brutal mt-4">Real money. Real loot.</span>
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="flex flex-col sm:flex-row gap-8 mb-40 relative z-20"
                >
                  <motion.button 
                    whileHover={{ x: -8, y: -8, boxShadow: "20px 20px 0px 0px #000000" }}
                    whileTap={{ x: 8, y: 8, boxShadow: "0px 0px 0px 0px #000000" }}
                    className="bg-black text-neo-blue px-16 py-8 border-4 border-black font-black text-2xl uppercase tracking-widest shadow-brutal transition-all italic"
                  >
                    JOIN THE GUILD 🚀
                  </motion.button>
                  <button className="bg-white text-black px-16 py-8 border-4 border-black font-black text-2xl uppercase tracking-widest shadow-brutal hover:bg-neo-pink hover:text-white transition-all italic">
                    THE MANIFESTO 📖
                  </button>
                  
                  <div className="absolute -top-32 -left-20 rotate-12"><FloatingCoin delay={0.5} /></div>
                  <div className="absolute -bottom-20 -right-40 -rotate-12"><FloatingCoin delay={1.2} /></div>
                </motion.div>

                <div className="relative w-full border-8 border-black shadow-brutal bg-white overflow-hidden p-4 md:p-12">
                  <div className="absolute top-0 left-0 bg-black text-neo-yellow px-8 py-4 font-black text-xl uppercase z-30 -rotate-3 shadow-brutal-sm border-r-4 border-b-4 border-black italic">
                    ⚠️ HIGH_REWARDS_DETECTED
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

      <StatusTicker />

      {/* Epic Reward Showcase */}
      <section className="py-48 px-6 relative overflow-hidden bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-24 relative">
              <div className="absolute -top-32 left-1/4"><FloatingCoin delay={0.1} /></div>
              
              <div className="inline-flex items-center gap-4 px-8 py-3 bg-neo-pink text-white text-sm font-black tracking-[0.3em] uppercase mb-12 border-4 border-black shadow-brutal-sm rotate-1">
                <Sparkles className="w-6 h-6" /> EPIC LOOT PIPELINE 🏆
              </div>
              <h2 className="text-7xl md:text-[11rem] font-heading font-black text-black tracking-tighter mb-12 uppercase italic leading-none">
                LOOT YOU'LL <br /><span className="bg-neo-blue text-white px-10 shadow-brutal inline-block -rotate-2">ACTUALLY WANT.</span>
              </h2>
              <p className="text-2xl text-black font-black max-w-3xl mx-auto uppercase tracking-tight">
                No boring stickers here. Earn Robux, V-Bucks, and the gear you've been eyeing in your favorite games. 🎮
              </p>
            </div>
          </FadeIn>
          
          <LootCarousel />
        </div>
      </section>

      {/* Mission Protocol Section */}
      <section id="missions" className="py-40 px-6 relative z-10 bg-background border-b-8 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <div className="max-w-3xl">
              <FadeIn y={40}>
                <div className="flex items-center gap-4 text-neo-blue font-black tracking-[0.4em] uppercase text-xl mb-10 italic">
                   CORE_LOOP_v2.1
                </div>
                <h2 className="text-7xl md:text-[10rem] font-heading font-black text-black mb-8 tracking-tighter leading-[0.8] uppercase italic">
                  COMPLETE QUESTS.<br /><span className="text-black opacity-10">RANK UP.</span>
                </h2>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div className="bg-white border-4 border-black p-8 shadow-brutal max-w-sm rotate-2">
                <p className="text-lg text-black font-black uppercase leading-tight italic">
                  Real world actions are your primary objectives. Level up by being epic at home.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <FadeIn delay={0.1}>
              <InteractiveCard neonColor="blue" className="h-[500px] flex flex-col justify-between group/card">
                <div>
                  <div className="w-20 h-20 bg-black border-4 border-white flex items-center justify-center shadow-brutal-sm mb-12 group-hover/card:scale-110 transition-transform -rotate-6">
                    <Zap className="text-neo-blue w-10 h-10" />
                  </div>
                  <h3 className="text-5xl font-black text-black mb-8 uppercase italic leading-none">Main Quests</h3>
                  <p className="text-sm text-black font-black leading-relaxed uppercase tracking-widest text-black/60">
                    Daily objectives sent straight to your HUD. Math missions, chore challenges, and learning streaks that pay out BIG.
                  </p>
                </div>
                <div className="text-black font-black flex items-center gap-4 group-hover:gap-6 transition-all uppercase text-sm tracking-widest border-t-8 border-black pt-8">
                  Active Quest Log <ArrowRight className="w-8 h-8" />
                </div>
              </InteractiveCard>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <InteractiveCard neonColor="green" className="h-[500px] flex flex-col justify-between group/card">
                <div>
                  <div className="w-20 h-20 bg-black border-4 border-white flex items-center justify-center shadow-brutal-sm mb-12 group-hover/card:scale-110 transition-transform rotate-6">
                    <TrendingUp className="text-neo-green w-10 h-10" />
                  </div>
                  <h3 className="text-5xl font-black text-black mb-8 uppercase italic leading-none">Status Tiers</h3>
                  <p className="text-sm text-black font-black leading-relaxed uppercase tracking-widest text-black/60">
                    From 'Newbie' to 'Grandmaster'. High rank unlocks better loot, custom avatars, and massive allowance perks.
                  </p>
                </div>
                <div className="text-black font-black flex items-center gap-4 group-hover:gap-6 transition-all uppercase text-sm tracking-widest border-t-8 border-black pt-8">
                  View Rankings <ArrowRight className="w-8 h-8" />
                </div>
              </InteractiveCard>
            </FadeIn>

            <InteractiveCard neonColor="purple" className="h-[500px] flex flex-col justify-between group/card">
              <div>
                <div className="w-20 h-20 bg-black border-4 border-white flex items-center justify-center shadow-brutal-sm mb-12 group-hover/card:scale-110 transition-transform">
                  <Trophy className="text-neo-pink w-10 h-10" />
                </div>
                <h3 className="text-5xl font-black text-black mb-8 uppercase italic leading-none">Epic Loot</h3>
                <p className="text-sm text-black font-black leading-relaxed uppercase tracking-widest text-black/60">
                  Trade in your hard-earned gold for the real deal. From gift cards to new gaming gear—you earn it, you own it.
                </p>
              </div>
              <div className="text-black font-black flex items-center gap-4 group-hover:gap-6 transition-all uppercase text-sm tracking-widest border-t-8 border-black pt-8">
                The Vault <ArrowRight className="w-8 h-8" />
              </div>
            </InteractiveCard>
          </div>
        </div>
      </section>

      {/* Split Experience */}
      <section id="parents" className="relative flex flex-col md:flex-row min-h-[120vh] overflow-hidden border-b-8 border-black">
        <div className="flex-1 flex flex-col justify-start px-10 md:px-24 pt-80 pb-32 relative bg-neo-green group custom-cursor border-r-8 border-black overflow-hidden hover:bg-neo-green/95 transition-colors">
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div className="absolute bottom-12 left-12 bg-black text-white px-6 py-2 font-black text-xl uppercase rotate-3 shadow-brutal border-4 border-white italic z-20">PLAYER_HUD</div>
          <FadeIn>
            <h2 className="text-7xl md:text-[8rem] font-heading font-black text-black mb-10 tracking-tighter leading-[0.8] uppercase italic">
              DOMINATE<br />THE GAME.
            </h2>
            <p className="text-xl md:text-3xl text-black font-black max-w-xl mb-12 uppercase italic leading-tight">
              Unlimited potential. Professional status. Real money rewards.
            </p>
            <button className="bg-white text-black border-8 border-black px-12 py-6 text-2xl font-black uppercase tracking-widest shadow-brutal hover:bg-black hover:text-white transition-all transform hover:-translate-y-2 italic">
              ENTER WORLD 🚀
            </button>
          </FadeIn>
        </div>

        <div className="flex-1 flex flex-col justify-start px-10 md:px-24 pt-80 pb-32 relative bg-neo-pink group custom-cursor overflow-hidden hover:bg-neo-pink/95 transition-colors">
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <div className="absolute bottom-12 right-12 bg-black text-white px-6 py-2 font-black text-xl uppercase -rotate-3 shadow-brutal border-4 border-white italic z-20">ADMIN_DECK</div>
          <FadeIn>
            <h2 className="text-7xl md:text-[8rem] font-heading font-black text-black mb-10 tracking-tighter leading-[0.8] uppercase text-right italic font-black">
              GUIDE<br />GROWTH.
            </h2>
            <p className="text-xl md:text-3xl text-black font-black max-w-xl mb-12 uppercase italic text-right ml-auto leading-tight">
              Absolute safety. Hyper-secure parent control center.
            </p>
            <div className="text-right">
              <button className="bg-black text-white border-8 border-neo-pink px-12 py-6 text-2xl font-black uppercase tracking-widest shadow-brutal hover:bg-white hover:text-black transition-all transform hover:-translate-y-2 italic">
                PARENT PORTAL 🛡️
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Safety Section */}
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
              <h2 className="text-6xl md:text-[8rem] font-heading font-black text-black mb-10 tracking-tighter uppercase italic leading-[0.85]">ZERO RISK. <br /><span className="bg-neo-pink text-white px-8 shadow-brutal inline-block rotate-2 mt-4">TOTAL_REWARD.</span></h2>
              <p className="text-xl md:text-2xl text-black font-black max-w-4xl mx-auto mb-24 uppercase italic leading-tight">
                Closed-loop economy. No hidden fees. No scammers. Just pure growth.
              </p>
              
              <div className="grid md:grid-cols-2 gap-24 text-left">
                <div className="flex gap-12 group p-10 border-4 border-black bg-background shadow-brutal-sm transform hover:-rotate-1 transition-transform">
                  <div className="w-20 h-20 bg-black flex items-center justify-center shrink-0 border-4 border-white shadow-brutal-sm">
                    <Lock className="text-white w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="text-4xl font-black mb-4 text-black uppercase tracking-tight italic">Isolated Economy</h4>
                    <p className="text-lg text-black font-black leading-relaxed uppercase tracking-tight">Your child's digital wallet is invisible to the outside world.</p>
                  </div>
                </div>
                <div className="flex gap-12 group p-10 border-4 border-black bg-neo-blue shadow-brutal-sm transform hover:rotate-1 transition-transform">
                  <div className="w-20 h-20 bg-white flex items-center justify-center shrink-0 border-4 border-black shadow-brutal-sm">
                    <ShieldCheck className="text-black w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="text-4xl font-black mb-4 text-black uppercase tracking-tight italic">Parent Guard</h4>
                    <p className="text-lg text-black font-black leading-relaxed uppercase tracking-tight">Set weekly limits. Block categories. You're always the admin.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section id="why-it-works" className="py-48 px-6 relative z-10 bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-40 items-center">
            <FadeIn>
              <div className="inline-block bg-neo-pink text-white px-4 py-2 font-black uppercase text-xs tracking-[0.4em] mb-12 border-4 border-black rotate-2 shadow-brutal-sm">
                BRAIN_MAPPING_PROTOCOL_v0.9
              </div>
              <h2 className="text-8xl md:text-[13rem] font-heading font-black text-black mb-16 tracking-tighter leading-[0.75] uppercase italic">
                BUILT<br />FOR THE<br /><span className="text-neo-blue">FUTURE.</span>
              </h2>
              <p className="text-2xl md:text-3xl text-black font-black mb-24 leading-snug tracking-tight uppercase italic">
                We've combined behavioral economics with modern game mechanics to create a system that kids actually <span className="bg-neo-yellow px-4 border-4 border-black shadow-brutal-sm">love to use.</span>
              </p>
              
              <div className="space-y-24">
                <div className="relative pl-16 border-l-8 border-black">
                  <div className="absolute left-[-50px] top-[-20px] text-10xl font-black text-black/10 select-none">01</div>
                  <h4 className="text-5xl font-black mb-6 text-black tracking-tighter flex items-center gap-6 uppercase italic">
                    DOPAMINE BOOSTER
                  </h4>
                  <p className="text-xl text-black font-black leading-relaxed uppercase italic opacity-60">Replacing random scrolling with the satisfaction of real-world accomplishment and financial growth.</p>
                </div>
                <div className="relative pl-16 border-l-8 border-neo-pink">
                  <div className="absolute left-[-50px] top-[-20px] text-10xl font-black text-black/10 select-none">02</div>
                  <h4 className="text-5xl font-black mb-6 text-black tracking-tighter flex items-center gap-6 uppercase italic">
                    REWARD STACKING
                  </h4>
                  <p className="text-xl text-black font-black leading-relaxed uppercase italic opacity-60">Teaching critical financial skills: we make the waiting part of the game loop. Delayed gratification wins.</p>
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

      {/* Final CTA */}
      <section className="py-64 px-6 text-center relative overflow-hidden z-10 bg-neo-yellow border-b-8 border-black">
        <FadeIn y={50}>
          <div className="mb-20 inline-flex items-center gap-6 px-10 py-4 bg-black text-neo-green font-black tracking-[0.4em] uppercase text-xl -rotate-2 shadow-brutal border-4 border-white">
            <span className="w-6 h-6 bg-neo-green animate-ping inline-block" /> BETA ENROLLMENT OPEN
          </div>
          <h2 className="text-8xl md:text-[18rem] font-heading font-black text-black mb-24 tracking-tighter leading-none perspective-2000 uppercase italic">
            READY TO<br /><span className="bg-white border-8 border-black px-10 shadow-brutal inline-block rotate-2 mt-4 text-black">LEVEL UP?</span>
          </h2>
          <button className="bg-black text-white border-8 border-white px-24 py-12 text-5xl font-black uppercase tracking-widest shadow-brutal hover:bg-neo-pink hover:text-white transition-all transform hover:-translate-y-4 italic">
            RESERVE YOUR TAG 🚀
          </button>
          <p className="mt-20 text-black font-black uppercase tracking-[0.5em] text-xl opacity-60 italic">NO CREDIT CARD REQUIRED. INVITE ONLY ACCESS.</p>
        </FadeIn>
      </section>

      {/* Footer */}
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
              We're rewriting the rules of money for the next generation. One mission at a time.
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
            <span className="text-2xl font-black uppercase bg-black text-white px-4 py-2 self-start transform -rotate-3 border-4 border-black italic shadow-brutal-sm">Protocol</span>
            <div className="flex flex-col gap-6">
              {["Missions", "Economy", "Security", "Rewards"].map(link => (
                <a key={link} href="#" className="text-2xl font-black uppercase hover:text-neo-blue transition-colors italic">{link}</a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <span className="text-2xl font-black uppercase bg-neo-pink text-white px-4 py-2 self-start transform rotate-3 border-4 border-black italic shadow-brutal-sm">Guild</span>
            <div className="flex flex-col gap-6">
              {["Manifesto", "Parent Portal", "Help Center", "Status"].map(link => (
                <a key={link} href="#" className="text-2xl font-black uppercase hover:text-neo-pink transition-colors italic">{link}</a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-60 pt-20 border-t-8 border-black flex flex-col md:flex-row justify-between text-black text-xl font-black uppercase tracking-[0.5em] italic">
          <p>© 2026 BANXBANX INC // BATTING FOR THE FUTURE</p>
          <div className="flex gap-16 mt-12 md:mt-0">
            <a href="#" className="hover:text-neo-blue">Privacy</a>
            <a href="#" className="hover:text-neo-pink">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
