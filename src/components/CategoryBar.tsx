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

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
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
    <section
      className="sticky top-0 z-40 border-b border-[var(--color-golden)]/15 bg-[var(--color-cream)]/97"
      style={{ backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-1 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Home;
            const isActive = active === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActive(category.id)}
                className="flex flex-col items-center gap-1.5 px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-200 shrink-0"
                style={{
                  backgroundColor: isActive
                    ? "var(--color-navy)"
                    : "transparent",
                  color: isActive
                    ? "var(--color-golden)"
                    : "var(--color-navy)",
                }}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} />
                <span
                  className="text-xs font-medium"
                  style={{
                    color: isActive ? "white" : "var(--color-navy)",
                    opacity: isActive ? 1 : 0.7,
                  }}
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
