import { Brain, Zap, ShieldCheck } from "lucide-react";
import { LootItem, QuestItem } from "../types";

export const LOOT_DATA: LootItem[] = [
  { title: "Robux", icon: "💎", color: "bg-neo-blue", xp: "Level 10" },
  { title: "Fortnite V-Bucks", icon: "🎮", color: "bg-neo-green", xp: "Level 15" },
  { title: "Epic Cape", icon: "🧛", color: "bg-neo-pink", xp: "Level 25" },
  { title: "Gold Sword", icon: "⚔️", color: "bg-neo-yellow", xp: "Level 50" },
  { title: "Lava Wings", icon: "🔥", color: "bg-[#FF6B00]", xp: "Level 75" },
];

export const MISSION_TICKER_DATA: string[] = [
  "Alex completed 'Math Wizard' mission • +50 XP",
  "Sarah redeemed 'Roblox Gift Card' • Tier Up!",
  "Jordan saved $10 for 'New Headphones' • Master Saver Status",
  "Maya approved 'Cleaning Room' mission • Instant Payout",
  "Leo reached Level 15 • Ninja Rank Unlocked",
];

export const QUEST_LOG_DATA: QuestItem[] = [
  { label: "Math Wizard", color: "bg-neo-blue", icon: Brain, status: "Active" },
  { label: "Daily Login", color: "bg-neo-green", icon: Zap, status: "Claimed" },
  { label: "Room Sweep", color: "bg-neo-pink", icon: ShieldCheck, status: "Pending" }
];
