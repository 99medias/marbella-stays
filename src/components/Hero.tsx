"use client";

import { useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";

export default function Hero() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1920&h=1080&fit=crop)",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        {/* Tagline */}
        <p className="animate-fade-in-up mb-4 inline-block rounded-full border border-golden/40 bg-golden/10 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-golden">
          Luxury Vacation Rentals
        </p>

        {/* Heading */}
        <h1 className="animate-fade-in-up delay-100 mb-6 font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight text-white opacity-0 sm:text-5xl md:text-6xl lg:text-7xl">
          Your Dream Escape in{" "}
          <span className="text-golden">Marbella</span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up delay-200 mx-auto mb-10 max-w-2xl text-lg text-white/80 opacity-0 sm:text-xl">
          Discover handpicked luxury villas, beachfront apartments, and
          exclusive estates along the stunning Costa del Sol.
        </p>

        {/* Search Bar */}
        <div className="animate-fade-in-up delay-300 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/95 p-2 opacity-0 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {/* Location */}
            <div className="flex items-center gap-2 rounded-xl px-4 py-3 transition-colors hover:bg-gray-50 lg:col-span-1">
              <MapPin size={18} className="text-golden" />
              <div className="flex-1 text-left">
                <label className="block text-xs font-semibold uppercase tracking-wider text-navy">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Where to?"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent text-sm text-navy placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            {/* Check In */}
            <div className="flex items-center gap-2 rounded-xl border-gray-200 px-4 py-3 transition-colors hover:bg-gray-50 lg:border-l">
              <Calendar size={18} className="text-golden" />
              <div className="flex-1 text-left">
                <label className="block text-xs font-semibold uppercase tracking-wider text-navy">
                  Check In
                </label>
                <input
                  type="text"
                  placeholder="Add dates"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-transparent text-sm text-navy placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            {/* Check Out */}
            <div className="flex items-center gap-2 rounded-xl border-gray-200 px-4 py-3 transition-colors hover:bg-gray-50 lg:border-l">
              <Calendar size={18} className="text-golden" />
              <div className="flex-1 text-left">
                <label className="block text-xs font-semibold uppercase tracking-wider text-navy">
                  Check Out
                </label>
                <input
                  type="text"
                  placeholder="Add dates"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent text-sm text-navy placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="flex items-center gap-2 rounded-xl border-gray-200 px-4 py-3 transition-colors hover:bg-gray-50 lg:border-l">
              <Users size={18} className="text-golden" />
              <div className="flex-1 text-left">
                <label className="block text-xs font-semibold uppercase tracking-wider text-navy">
                  Guests
                </label>
                <input
                  type="text"
                  placeholder="How many?"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent text-sm text-navy placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-center justify-center p-1">
              <button className="btn-primary flex h-full w-full items-center justify-center gap-2 rounded-xl py-4 lg:py-0">
                <Search size={18} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up delay-400 mt-12 flex flex-wrap justify-center gap-8 opacity-0 sm:gap-12">
          {[
            { value: "200+", label: "Luxury Properties" },
            { value: "50K+", label: "Happy Guests" },
            { value: "4.9", label: "Average Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-[family-name:var(--font-heading)] text-2xl font-bold text-golden sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <div className="h-3 w-1.5 animate-pulse rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
