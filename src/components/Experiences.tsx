"use client";

import Image from "next/image";
import { Star, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    id: 1,
    title: "Private Yacht Sunset Cruise",
    description: "Sail along the Golden Mile with champagne and tapas",
    image:
      "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=600&h=400&fit=crop",
    price: 350,
    duration: "3 hours",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Andalusian Wine Tasting",
    description: "Explore boutique wineries in the Ronda mountains",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&h=400&fit=crop",
    price: 120,
    duration: "5 hours",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Golf at Valderrama",
    description:
      "Play at one of Europe's finest courses with stunning views",
    image:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=600&h=400&fit=crop",
    price: 280,
    duration: "Full day",
    rating: 4.9,
  },
  {
    id: 4,
    title: "Beach Club Access",
    description:
      "VIP day pass to Marbella's most exclusive beachfront clubs",
    image:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=400&fit=crop",
    price: 95,
    duration: "Full day",
    rating: 5.0,
  },
];

export default function Experiences() {
  const scrollRef = useScrollAnimation();

  return (
    <section id="experiences" className="section-padding bg-cream" ref={scrollRef}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="animate-on-scroll mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-golden">
            Curated For You
          </p>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Unforgettable Experiences
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-navy/50">
            Go beyond accommodation with handpicked experiences that capture
            the essence of the Marbella lifestyle.
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-x-visible md:pb-0">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={`animate-on-scroll delay-${i + 1} group min-w-[280px] shrink-0 snap-start cursor-pointer md:min-w-0`}
            >
              <div className="card-luxury card-hover-lift overflow-hidden">
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-golden/90 px-3 py-1 text-xs font-semibold text-white">
                    <Clock className="h-3 w-3" />
                    {exp.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="mb-1 flex items-center justify-between">
                    <h3 className="text-sm font-semibold leading-snug text-navy line-clamp-1">
                      {exp.title}
                    </h3>
                    <div className="flex shrink-0 items-center gap-1">
                      <Star className="h-3 w-3 fill-golden text-golden" />
                      <span className="text-xs font-medium text-navy">
                        {exp.rating}
                      </span>
                    </div>
                  </div>
                  <p className="mb-3 text-xs text-navy/50 line-clamp-2">
                    {exp.description}
                  </p>
                  <p>
                    <span className="text-sm font-bold text-navy">
                      &euro;{exp.price}
                    </span>
                    <span className="text-xs text-navy/40"> / person</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
