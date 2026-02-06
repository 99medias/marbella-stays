"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Share2,
  Heart,
  Star,
  MapPin,
  Users,
  BedDouble,
  Bath,
  Shield,
  Award,
  ChevronDown,
  ChevronUp,
  Wifi,
  Car,
  Waves,
  Wind,
  Dumbbell,
  UtensilsCrossed,
  Tv,
  Snowflake,
  Grape,
  Flame,
  Sparkles,
  Check,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";

const amenityIcons: Record<string, React.ReactNode> = {
  "High-Speed WiFi": <Wifi className="h-5 w-5" />,
  "Parking": <Car className="h-5 w-5" />,
  "Underground Parking": <Car className="h-5 w-5" />,
  "Garage": <Car className="h-5 w-5" />,
  "Garage for 4 Cars": <Car className="h-5 w-5" />,
  "Communal Pool": <Waves className="h-5 w-5" />,
  "Private Pool": <Waves className="h-5 w-5" />,
  "Infinity Pool": <Waves className="h-5 w-5" />,
  "Heated Pool": <Waves className="h-5 w-5" />,
  "Rooftop Pool": <Waves className="h-5 w-5" />,
  "Air Conditioning": <Snowflake className="h-5 w-5" />,
  "Underfloor Heating": <Flame className="h-5 w-5" />,
  "Gym": <Dumbbell className="h-5 w-5" />,
  "Home Gym": <Dumbbell className="h-5 w-5" />,
  "Fully Equipped Kitchen": <UtensilsCrossed className="h-5 w-5" />,
  "Outdoor Kitchen": <UtensilsCrossed className="h-5 w-5" />,
  "Home Cinema": <Tv className="h-5 w-5" />,
  "Wine Cellar": <Grape className="h-5 w-5" />,
  "Sauna": <Wind className="h-5 w-5" />,
  "Concierge Service": <Sparkles className="h-5 w-5" />,
};

const reviews = [
  {
    id: 1,
    name: "Sophie & James",
    avatar: "S",
    date: "January 2026",
    rating: 5,
    text: "Absolutely stunning property! The photos don't do it justice. Everything was immaculate and the host was incredibly responsive. The views from the terrace were breathtaking, especially at sunset. We'll definitely be coming back.",
  },
  {
    id: 2,
    name: "Marcus T.",
    avatar: "M",
    date: "December 2025",
    rating: 5,
    text: "Perfect holiday stay. The location is ideal — close to restaurants and the beach but still peaceful and private. The kitchen was well-equipped and the beds were extremely comfortable. Highly recommend for families.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    avatar: "E",
    date: "November 2025",
    rating: 5,
    text: "We celebrated a special birthday here and it exceeded all expectations. The host arranged a private chef for us which was an unforgettable experience. The property is luxurious without feeling pretentious. Pure class.",
  },
  {
    id: 4,
    name: "David & Anna",
    avatar: "D",
    date: "October 2025",
    rating: 4,
    text: "Beautiful property with amazing amenities. The pool area is gorgeous and the interiors are very tastefully decorated. Only small note — the WiFi could be faster for remote work. Otherwise, flawless!",
  },
];

export default function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const property = properties.find((p) => p.id === id);

  const [saved, setSaved] = useState(false);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guestCount, setGuestCount] = useState(2);

  if (!property) {
    return (
      <>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-center px-4 pt-24">
          <h1
            className="mb-4 text-3xl font-bold text-navy"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Property Not Found
          </h1>
          <p className="mb-8 text-navy/60">
            The property you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const nights = 5;
  const subtotal = property.price * nights;
  const cleaningFee = Math.round(property.price * 0.12);
  const serviceFee = Math.round(subtotal * 0.08);
  const total = subtotal + cleaningFee + serviceFee;

  const displayedAmenities = showAllAmenities
    ? property.amenities
    : property.amenities.slice(0, 6);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-warm-white pt-20">
        {/* Back Navigation */}
        <div className="mx-auto max-w-7xl px-5 py-4 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-navy/60 transition-all duration-200 hover:text-golden hover:bg-golden/5 active:scale-[0.97]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Back to listings
          </Link>
        </div>

        {/* Photo Gallery */}
        <section className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-2 overflow-hidden rounded-2xl md:grid-cols-4 md:grid-rows-2 md:gap-2">
            {/* Main large image */}
            <div className="relative col-span-1 row-span-2 aspect-[4/3] md:col-span-2 md:aspect-auto">
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* 4 smaller images */}
            {property.images.slice(1, 5).map((img, i) => (
              <div
                key={i}
                className={`relative hidden aspect-[4/3] md:block ${
                  i === 1 ? "rounded-tr-none" : ""
                } ${i === 3 ? "rounded-br-none" : ""}`}
              >
                <Image
                  src={img}
                  alt={`${property.title} - Photo ${i + 2}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="25vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Property Content */}
        <section className="mx-auto max-w-7xl px-5 pb-20 pt-8 md:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Left Column - Property Info */}
            <div className="lg:col-span-2">
              {/* Title & Actions */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded-full bg-golden/10 px-3 py-1 text-xs font-semibold text-golden">
                      {property.type}
                    </span>
                    {property.superhost && (
                      <span className="flex items-center gap-1 rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy">
                        <Award className="h-3 w-3" />
                        Superhost
                      </span>
                    )}
                  </div>
                  <h1
                    className="text-2xl font-bold text-navy md:text-3xl lg:text-4xl"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {property.title}
                  </h1>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-navy/60">
                    <span className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-golden text-golden" />
                      <span className="font-semibold text-navy">
                        {property.rating}
                      </span>
                      <span>({property.reviewCount} reviews)</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-terracotta" />
                      {property.location}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 transition-all duration-200 hover:border-golden/30 hover:bg-golden/5 hover:scale-110 active:scale-95">
                    <Share2 className="h-[18px] w-[18px] text-navy/60" />
                  </button>
                  <button
                    onClick={() => setSaved(!saved)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-navy/10 transition-all duration-200 hover:border-golden/30 hover:bg-golden/5 hover:scale-110 active:scale-95"
                  >
                    <Heart
                      className={`h-4 w-4 ${
                        saved
                          ? "fill-terracotta text-terracotta"
                          : "text-navy/60"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Key Stats */}
              <div className="golden-divider my-8" />
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="flex items-center gap-3 rounded-xl bg-cream/50 p-4">
                  <Users className="h-5 w-5 text-golden" />
                  <div>
                    <p className="text-sm font-semibold text-navy">
                      {property.guests} guests
                    </p>
                    <p className="text-xs text-navy/50">Max capacity</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-cream/50 p-4">
                  <BedDouble className="h-5 w-5 text-golden" />
                  <div>
                    <p className="text-sm font-semibold text-navy">
                      {property.bedrooms} bedrooms
                    </p>
                    <p className="text-xs text-navy/50">Sleeping areas</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-cream/50 p-4">
                  <Bath className="h-5 w-5 text-golden" />
                  <div>
                    <p className="text-sm font-semibold text-navy">
                      {property.bathrooms} bathrooms
                    </p>
                    <p className="text-xs text-navy/50">Full baths</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-cream/50 p-4">
                  <Shield className="h-5 w-5 text-golden" />
                  <div>
                    <p className="text-sm font-semibold text-navy">
                      Self check-in
                    </p>
                    <p className="text-xs text-navy/50">Smart lock</p>
                  </div>
                </div>
              </div>

              {/* Host Section */}
              <div className="golden-divider my-8" />
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-golden to-golden-dark text-lg font-bold text-white">
                  M
                </div>
                <div>
                  <p className="font-semibold text-navy">
                    Hosted by Maria
                    {property.superhost && (
                      <span className="ml-2 inline-flex items-center gap-1 text-xs font-medium text-golden">
                        <Award className="h-3 w-3" /> Superhost
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-navy/50">
                    3 years hosting &middot; 98% response rate &middot; Responds
                    within 1 hour
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="golden-divider my-8" />
              <div>
                <h2
                  className="mb-4 text-xl font-bold text-navy"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  About this property
                </h2>
                <p className="leading-relaxed text-navy/70">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              <div className="golden-divider my-8" />
              <div>
                <h2
                  className="mb-6 text-xl font-bold text-navy"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  What this place offers
                </h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {displayedAmenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-3 rounded-lg border border-navy/5 bg-white p-3 transition-all duration-200 hover:border-golden/20 hover:shadow-sm hover:translate-x-1"
                    >
                      <span className="text-golden">
                        {amenityIcons[amenity] || (
                          <Check className="h-5 w-5" />
                        )}
                      </span>
                      <span className="text-sm text-navy/80">{amenity}</span>
                    </div>
                  ))}
                </div>
                {property.amenities.length > 6 && (
                  <button
                    onClick={() => setShowAllAmenities(!showAllAmenities)}
                    className="mt-4 flex h-11 items-center gap-2 rounded-full border border-navy/15 px-6 text-sm font-medium text-navy transition-all duration-200 hover:border-golden hover:text-golden hover:shadow-sm active:scale-[0.97]"
                  >
                    {showAllAmenities
                      ? "Show less"
                      : `Show all ${property.amenities.length} amenities`}
                    {showAllAmenities ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                )}
              </div>

              {/* Reviews */}
              <div className="golden-divider my-8" />
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <h2
                    className="text-xl font-bold text-navy"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Guest Reviews
                  </h2>
                  <span className="flex items-center gap-1 rounded-full bg-golden/10 px-3 py-1 text-sm font-semibold text-golden">
                    <Star className="h-3.5 w-3.5 fill-golden" />
                    {property.rating}
                  </span>
                  <span className="text-sm text-navy/50">
                    {property.reviewCount} reviews
                  </span>
                </div>

                {/* Rating Bars */}
                <div className="mb-8 grid grid-cols-1 gap-x-12 gap-y-2 sm:grid-cols-2">
                  {[
                    { label: "Cleanliness", score: 4.9 },
                    { label: "Accuracy", score: 5.0 },
                    { label: "Check-in", score: 4.9 },
                    { label: "Communication", score: 5.0 },
                    { label: "Location", score: 4.8 },
                    { label: "Value", score: 4.7 },
                  ].map((cat) => (
                    <div key={cat.label} className="flex items-center gap-3">
                      <span className="w-28 text-sm text-navy/70">
                        {cat.label}
                      </span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-navy/10">
                        <div
                          className="h-full rounded-full bg-golden animate-bar"
                          style={{ width: `${(cat.score / 5) * 100}%` }}
                        />
                      </div>
                      <span className="w-8 text-right text-sm font-semibold text-navy">
                        {cat.score}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Review Cards */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="rounded-xl border border-navy/5 bg-white p-5 transition-all duration-300 hover:border-golden/15 hover:shadow-sm"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-sm font-semibold text-navy">
                            {review.avatar}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-navy">
                              {review.name}
                            </p>
                            <p className="text-xs text-navy/40">
                              {review.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-3.5 w-3.5 fill-golden text-golden"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-navy/60">
                        {review.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 rounded-2xl border border-navy/8 bg-white p-6 shadow-lg">
                {/* Price */}
                <div className="mb-5 flex items-baseline gap-2">
                  <span
                    className="text-2xl font-bold text-navy"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    &euro;{property.price}
                  </span>
                  <span className="text-sm text-navy/50">/ night</span>
                </div>

                {/* Date Inputs */}
                <div className="mb-4 overflow-hidden rounded-xl border border-navy/10">
                  <div className="grid grid-cols-2 divide-x divide-navy/10">
                    <div className="p-3">
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-navy/50">
                        Check-in
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full text-sm text-navy outline-none transition-colors duration-200 focus:text-golden"
                      />
                    </div>
                    <div className="p-3">
                      <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-navy/50">
                        Check-out
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full text-sm text-navy outline-none transition-colors duration-200 focus:text-golden"
                      />
                    </div>
                  </div>
                  <div className="border-t border-navy/10 p-3">
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-navy/50">
                      Guests
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="w-full text-sm text-navy outline-none transition-colors duration-200 focus:text-golden"
                    >
                      {Array.from({ length: property.guests }).map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} guest{i > 0 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Reserve Button */}
                <button className="btn-primary mb-4 w-full py-3.5 text-base">
                  Reserve
                </button>
                <p className="mb-5 text-center text-xs text-navy/40">
                  You won&apos;t be charged yet
                </p>

                {/* Fee Breakdown */}
                <div className="space-y-3 border-t border-navy/8 pt-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-navy/60">
                      &euro;{property.price} &times; {nights} nights
                    </span>
                    <span className="text-navy">&euro;{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-navy/60">Cleaning fee</span>
                    <span className="text-navy">&euro;{cleaningFee}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-navy/60">Service fee</span>
                    <span className="text-navy">&euro;{serviceFee}</span>
                  </div>
                  <div className="golden-divider my-2" />
                  <div className="flex justify-between">
                    <span className="font-semibold text-navy">Total</span>
                    <span
                      className="font-bold text-navy"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      &euro;{total}
                    </span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 flex items-center justify-center gap-4 border-t border-navy/8 pt-5">
                  <div className="flex items-center gap-1.5 text-xs text-navy/40">
                    <Shield className="h-4 w-4 text-sage" />
                    Secure booking
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-navy/40">
                    <Award className="h-4 w-4 text-golden" />
                    Best price guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
