"use client";

import { useState, useRef } from "react";
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
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -200 : 200,
      behavior: "smooth",
    });
  };

  return (
    <section className="glass sticky top-0 z-40 border-b border-golden/15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          {/* Left scroll arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-navy/10 bg-white transition-all duration-200 hover:border-golden/30 hover:shadow-sm active:scale-95 sm:flex"
            aria-label="Scroll categories left"
          >
            <ChevronLeft size={16} className="text-navy" />
          </button>

          {/* Scrollable categories */}
          <div
            ref={scrollRef}
            className="flex flex-1 items-center gap-1 overflow-x-auto py-3 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category) => {
              const Icon = iconMap[category.icon] || Home;
              const isActive = active === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActive(category.id)}
                  className={`flex shrink-0 flex-col items-center gap-1.5 rounded-xl px-4 py-3 whitespace-nowrap transition-all duration-300 active:scale-95 ${
                    isActive
                      ? "bg-navy text-golden shadow-sm"
                      : "text-navy/70 hover:bg-golden/5 hover:text-navy"
                  }`}
                >
                  <Icon
                    size={20}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    className={`transition-all duration-300 ${isActive ? "text-golden" : ""}`}
                  />
                  <span
                    className={`text-xs font-medium transition-colors duration-300 ${
                      isActive ? "text-white" : ""
                    }`}
                  >
                    {category.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right scroll arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-navy/10 bg-white transition-all duration-200 hover:border-golden/30 hover:shadow-sm active:scale-95 sm:flex"
            aria-label="Scroll categories right"
          >
            <ChevronRight size={16} className="text-navy" />
          </button>

          {/* Filters button */}
          <button className="flex h-11 flex-shrink-0 items-center gap-2 rounded-xl border border-navy/10 bg-white px-4 transition-all duration-200 hover:border-golden/30 hover:shadow-sm active:scale-[0.97]">
            <SlidersHorizontal size={16} className="text-navy" />
            <span className="hidden text-sm font-medium text-navy sm:inline">Filters</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
