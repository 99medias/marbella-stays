"use client";

import { useState } from "react";
import {
  Home,
  Castle,
  Building2,
  Building,
  Waves,
  Droplets,
  Gem,
  Users,
  Flag,
} from "lucide-react";
import { categories } from "@/data/properties";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
> = {
  Home,
  Castle,
  Building2,
  Building,
  Waves,
  Droplets,
  Gem,
  Users,
  Flag,
};

export default function CategoryBar() {
  const [active, setActive] = useState("all");

  return (
    <section className="glass sticky top-0 z-40 border-b border-golden/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 overflow-x-auto py-4 scrollbar-hide">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Home;
            const isActive = active === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActive(category.id)}
                className={`flex shrink-0 flex-col items-center gap-1.5 rounded-xl px-4 py-2 whitespace-nowrap transition-all duration-200 ${
                  isActive ? "bg-navy text-golden" : "text-navy hover:bg-golden/5"
                }`}
              >
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.5 : 1.5}
                  className={isActive ? "text-golden" : "text-navy/70"}
                />
                <span
                  className={`text-xs font-medium ${
                    isActive ? "text-white" : "text-navy/70"
                  }`}
                >
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
