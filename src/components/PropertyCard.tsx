"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Star, MapPin, Bed, Bath, Users } from "lucide-react";
import type { Property } from "@/data/properties";

export default function PropertyCard({ property }: { property: Property }) {
  const [liked, setLiked] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const images = property.images;

  return (
    <div className="group cursor-pointer">
      {/* Image Container */}
      <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          src={images[imageIndex]}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Superhost badge */}
        {property.superhost && (
          <div className="absolute left-3 top-3 rounded-full bg-cream px-3 py-1 text-xs font-semibold text-navy">
            Superhost
          </div>
        )}

        {/* Heart button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="absolute right-3 top-3 rounded-full bg-black/20 p-2 transition-all duration-200 hover:scale-110"
        >
          <Heart
            size={18}
            className={liked ? "fill-red-500 text-red-500" : "text-white"}
          />
        </button>

        {/* Image dots navigation */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setImageIndex(i);
                }}
                className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                  i === imageIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        {/* Left/right arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setImageIndex((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                );
              }}
              className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-navy opacity-0 transition-all duration-200 hover:scale-105 hover:bg-white group-hover:opacity-100"
            >
              <span className="text-sm font-bold">&lsaquo;</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setImageIndex((prev) =>
                  prev === images.length - 1 ? 0 : prev + 1
                );
              }}
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-navy opacity-0 transition-all duration-200 hover:scale-105 hover:bg-white group-hover:opacity-100"
            >
              <span className="text-sm font-bold">&rsaquo;</span>
            </button>
          </>
        )}
      </div>

      {/* Details */}
      <div className="space-y-1">
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
  );
}
