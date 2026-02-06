"use client";

import { useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";

export default function Hero() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1920&h=1080&fit=crop)",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B2A4A]/60 via-[#1B2A4A]/40 to-[#1B2A4A]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <p
          className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium tracking-widest uppercase border"
          style={{
            color: "#D4A853",
            borderColor: "rgba(212, 168, 83, 0.4)",
            backgroundColor: "rgba(212, 168, 83, 0.1)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Luxury Vacation Rentals
        </p>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your Dream Escape in{" "}
          <span style={{ color: "#D4A853" }}>Marbella</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Discover handpicked luxury villas, beachfront apartments, and
          exclusive estates along the stunning Costa del Sol.
        </p>

        {/* Search Bar */}
        <div
          className="max-w-4xl mx-auto rounded-2xl p-2 shadow-2xl backdrop-blur-md border border-white/10"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
            {/* Location */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors lg:col-span-1">
              <MapPin size={18} style={{ color: "#D4A853" }} />
              <div className="flex-1 text-left">
                <label
                  className="block text-xs font-semibold uppercase tracking-wider"
                  style={{
                    color: "#1B2A4A",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Where to?"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full text-sm bg-transparent outline-none placeholder-gray-400"
                  style={{
                    color: "#1B2A4A",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                />
              </div>
            </div>

            {/* Check In */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors lg:border-l border-gray-200">
              <Calendar size={18} style={{ color: "#D4A853" }} />
              <div className="flex-1 text-left">
                <label
                  className="block text-xs font-semibold uppercase tracking-wider"
                  style={{
                    color: "#1B2A4A",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Check In
                </label>
                <input
                  type="text"
                  placeholder="Add dates"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full text-sm bg-transparent outline-none placeholder-gray-400"
                  style={{
                    color: "#1B2A4A",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                />
              </div>
            </div>

            {/* Check Out */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors lg:border-l border-gray-200">
              <Calendar size={18} style={{ color: "#D4A853" }} />
              <div className="flex-1 text-left">
                <label
                  className="block text-xs font-semibold uppercase tracking-wider"
                  style={{
                    color: "#1B2A4A",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Check Out
                </label>
                <input
                  type="text"
                  placeholder="Add dates"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full text-sm bg-transparent outline-none placeholder-gray-400"
                  style={{
                    color: "#1B2A4A",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                />
              </div>
            </div>

            {/* Guests */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors lg:border-l border-gray-200">
              <Users size={18} style={{ color: "#D4A853" }} />
              <div className="flex-1 text-left">
                <label
                  className="block text-xs font-semibold uppercase tracking-wider"
                  style={{
                    color: "#1B2A4A",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Guests
                </label>
                <input
                  type="text"
                  placeholder="How many?"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full text-sm bg-transparent outline-none placeholder-gray-400"
                  style={{
                    color: "#1B2A4A",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-center justify-center p-1">
              <button
                className="w-full h-full flex items-center justify-center gap-2 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] py-4 lg:py-0"
                style={{
                  backgroundColor: "#D4A853",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <Search size={18} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-12">
          {[
            { value: "200+", label: "Luxury Properties" },
            { value: "50K+", label: "Happy Guests" },
            { value: "4.9", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-2xl sm:text-3xl font-bold"
                style={{
                  color: "#D4A853",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {stat.value}
              </p>
              <p
                className="text-sm text-white/70 mt-1"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-white/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
