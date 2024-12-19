import { LucideIcon } from 'lucide-react';

export interface APICategory {
  title: string;
  items: API[];
  icon: LucideIcon;
}

export interface API {
  name: string;
  url: string;
  description?: string;
  isOfficial?: boolean;
  tags?: string[];
}