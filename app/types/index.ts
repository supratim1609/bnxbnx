import { LucideIcon } from "lucide-react";

export interface LootItem {
  title: string;
  icon: string;
  color: string;
  xp: string;
}

export interface MissionItem {
  text: string;
}

export interface QuestItem {
  label: string;
  color: string;
  icon: LucideIcon;
  status: string;
}
