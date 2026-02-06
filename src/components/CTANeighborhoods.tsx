"use client";

import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

const neighborhoods = [
  {
    id: 1,
    name: "Puerto Banus",
    description: "Glamorous marina living with luxury boutiques and nightlife",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=500&fit=crop",
    properties: 48,
  },
  {
    id: 2,
    name: "Golden Mile",
    description: "Exclusive beachfront stretch between Marbella and Puerto Banus",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=500&fit=crop",
    properties: 35,
  },
  {
    id: 3,
    name: "Sierra Blanca",
    description: "Hillside estates with panoramic Mediterranean views",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=500&fit=crop",
    properties: 22,
  },
  {
    id: 4,
    name: "Old Town",
    description: "Charming cobblestone streets and authentic Andalusian culture",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=500&fit=crop",
    properties: 18,
  },
  {
    id: 5,
    name: "Nueva Andalucia",
    description: "The golf valley surrounded by world-class courses",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=500&fit=crop",
    properties: 41,
  },
];

export default function CTANeighborhoods() {
  return (
    <>
      {/* Neighborhoods Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#FFF8F0" }}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <p
              className="text-sm font-medium tracking-widest uppercase mb-3"
              style={{ color: "#D4A853", fontFamily: "'DM Sans', sans-serif" }}
            >
              Explore Areas
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: "#1B2A4A", fontFamily: "'Playfair Display', serif" }}
            >
              Marbella&apos;s Finest Neighborhoods
            </h2>
            <p
              className="text-gray-500 max-w-2xl mx-auto text-lg"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Each neighborhood tells its own story. Find the one that speaks to you.
            </p>
          </div>

          {/* Neighborhoods Grid - Masonry-like layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First large card */}
            <div className="lg:row-span-2 group cursor-pointer">
              <div className="relative h-full min-h-[300px] lg:min-h-full rounded-2xl overflow-hidden">
                <Image
                  src={neighborhoods[0].image}
                  alt={neighborhoods[0].name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/80 via-[#1B2A4A]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-1.5 mb-2">
                    <MapPin size={14} style={{ color: "#D4A853" }} />
                    <span
                      className="text-xs font-medium uppercase tracking-wider"
                      style={{ color: "#D4A853", fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {neighborhoods[0].properties} properties
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {neighborhoods[0].name}
                  </h3>
                  <p
                    className="text-white/70 text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {neighborhoods[0].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Remaining cards */}
            {neighborhoods.slice(1).map((hood) => (
              <div key={hood.id} className="group cursor-pointer">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src={hood.image}
                    alt={hood.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/80 via-[#1B2A4A]/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-1.5 mb-1">
                      <MapPin size={12} style={{ color: "#D4A853" }} />
                      <span
                        className="text-xs font-medium"
                        style={{ color: "#D4A853", fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {hood.properties} properties
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold text-white mb-0.5"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {hood.name}
                    </h3>
                    <p
                      className="text-white/70 text-xs line-clamp-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {hood.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: "#1B2A4A" }}
      >
        {/* Decorative elements */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#D4A853" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#C67B5C" }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <p
            className="text-sm font-medium tracking-widest uppercase mb-4"
            style={{ color: "#D4A853", fontFamily: "'DM Sans', sans-serif" }}
          >
            Start Your Journey
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Experience the{" "}
            <span style={{ color: "#D4A853" }}>Magic of Marbella</span>?
          </h2>
          <p
            className="text-white/60 max-w-2xl mx-auto text-lg mb-10"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Whether you&apos;re planning a family holiday, a romantic getaway, or an
            exclusive celebration, we&apos;ll help you find the perfect property.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="group px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
              style={{
                backgroundColor: "#D4A853",
                color: "white",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Browse Properties
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
            <button
              className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 border"
              style={{
                borderColor: "rgba(212, 168, 83, 0.4)",
                color: "#D4A853",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Contact Concierge
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-14 flex flex-wrap justify-center gap-8 sm:gap-12">
            {[
              { label: "Verified Properties", value: "100%" },
              { label: "Guest Support", value: "24/7" },
              { label: "Free Cancellation", value: "48hr" },
              { label: "Best Price", value: "Guaranteed" },
            ].map((badge) => (
              <div key={badge.label} className="text-center">
                <p
                  className="text-xl font-bold"
                  style={{
                    color: "#D4A853",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {badge.value}
                </p>
                <p
                  className="text-xs text-white/50 mt-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {badge.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
