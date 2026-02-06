"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star, MapPin, Bed, Bath, Users, ChevronLeft, ChevronRight } from "lucide-react";
import type { Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  const [liked, setLiked] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const images = property.images;

  return (
    <Link href={`/property/${property.id}`} className="block group">
      <div className="card-luxury card-hover-lift">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
          {/* Image slider */}
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${imageIndex * 100}%)` }}
          >
            {images.map((src, i) => (
              <div key={i} className="relative h-full w-full flex-shrink-0">
                <Image
                  src={src}
                  alt={`${property.title} - Photo ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

          {/* Superhost badge */}
          {property.superhost && (
            <div className="absolute left-3 top-3 rounded-full bg-cream px-3 py-1 text-xs font-semibold text-navy shadow-sm">
              Superhost
            </div>
          )}

          {/* Heart button — 44px touch target */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setLiked(!liked);
            }}
            className="absolute right-2.5 top-2.5 flex h-11 w-11 items-center justify-center rounded-full bg-black/20 backdrop-blur-sm transition-all duration-200 hover:bg-black/40 hover:scale-110 active:scale-95"
            aria-label={liked ? "Remove from wishlist" : "Save to wishlist"}
          >
            <Heart
              size={20}
              className={`transition-all duration-300 ${liked ? "fill-red-500 text-red-500 scale-110" : "text-white"}`}
            />
          </button>

          {/* Navigation arrows — 44px touch targets */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setImageIndex((prev) =>
                    prev === 0 ? images.length - 1 : prev - 1
                  );
                }}
                className="absolute left-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-md opacity-0 transition-all duration-300 hover:bg-white hover:scale-110 active:scale-95 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <ChevronLeft size={16} strokeWidth={2.5} />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setImageIndex((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                  );
                }}
                className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy shadow-md opacity-0 transition-all duration-300 hover:bg-white hover:scale-110 active:scale-95 group-hover:opacity-100"
                aria-label="Next image"
              >
                <ChevronRight size={16} strokeWidth={2.5} />
              </button>
            </>
          )}

          {/* Dot indicators — larger touch targets */}
          {images.length > 1 && (
            <div className="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setImageIndex(i);
                  }}
                  className="flex h-5 w-5 items-center justify-center"
                  aria-label={`Go to image ${i + 1}`}
                >
                  <div
                    className={`rounded-full transition-all duration-300 ${
                      i === imageIndex
                        ? "h-2 w-2 bg-white shadow-sm"
                        : "h-1.5 w-1.5 bg-white/60"
                    }`}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="space-y-1 p-4">
          {/* Title & Rating */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-semibold leading-snug text-navy line-clamp-1">
              {property.title}
            </h3>
            <div className="flex shrink-0 items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-golden text-golden" />
              <span className="text-sm font-medium text-navy">
                {property.rating}
              </span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-navy/40" />
            <p className="text-sm text-navy/50 line-clamp-1">
              {property.location}
            </p>
          </div>

          {/* Amenities summary */}
          <div className="flex items-center gap-3 pt-1 text-navy/40">
            <div className="flex items-center gap-1">
              <Bed className="h-3.5 w-3.5" />
              <span className="text-xs">{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-3.5 w-3.5" />
              <span className="text-xs">{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              <span className="text-xs">{property.guests}</span>
            </div>
          </div>

          {/* Price */}
          <p className="pt-1">
            <span className="text-base font-bold text-navy">
              &euro;{property.price.toLocaleString()}
            </span>
            <span className="text-sm text-navy/40"> / night</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
