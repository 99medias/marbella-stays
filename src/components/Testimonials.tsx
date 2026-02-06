"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    id: 1,
    name: "Charlotte & James",
    location: "London, UK",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    text: "An absolutely magical stay. The villa exceeded every expectation -- infinity pool overlooking the sea, impeccable service, and the most beautiful sunsets we've ever witnessed.",
    rating: 5,
    property: "Villa Sol y Mar",
  },
  {
    id: 2,
    name: "Marcus & Sophie",
    location: "Munich, Germany",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    text: "From the moment we arrived, everything was perfect. The concierge arranged the most incredible private dining experience. We are already planning our return.",
    rating: 5,
    property: "Penthouse Azure",
  },
  {
    id: 3,
    name: "Isabella Rossi",
    location: "Milan, Italy",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    text: "This was our third stay through Marbella Stays and they continue to outdo themselves. The attention to detail and genuine warmth is what keeps us coming back.",
    rating: 5,
    property: "Casa Elegante",
  },
];

export default function Testimonials() {
  const scrollRef = useScrollAnimation();

  return (
    <section className="section-padding bg-navy" ref={scrollRef}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="animate-on-scroll mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-golden">
            Guest Stories
          </p>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            What Our Guests Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60">
            Hear from travellers who have experienced the Marbella Stays
            difference.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              className={`animate-on-scroll delay-${i + 1} rounded-2xl border border-golden/15 bg-white/5 p-8 transition-all duration-400 hover:-translate-y-2 hover:border-golden/30 hover:bg-white/8`}
            >
              {/* Quote icon */}
              <Quote className="mb-4 h-8 w-8 text-golden/30" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5 fill-golden text-golden"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="mb-6 text-sm leading-relaxed text-white/80">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-golden/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    unoptimized
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-golden/70">
                    {testimonial.location} &mdash; {testimonial.property}
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
