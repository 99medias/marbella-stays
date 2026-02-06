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
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-3">
        <Image
          src={images[imageIndex]}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Superhost badge */}
        {property.superhost && (
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-cream)] text-[var(--color-navy)]">
            Superhost
          </div>
        )}

        {/* Heart button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="absolute top-3 right-3 p-2 rounded-full transition-all duration-200 hover:scale-110"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        >
          <Heart
            size={18}
            className={liked ? "fill-red-500 text-red-500" : "text-white"}
          />
        </button>

        {/* Image dots navigation */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setImageIndex(i);
                }}
                className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                style={{
                  backgroundColor:
                    i === imageIndex ? "white" : "rgba(255, 255, 255, 0.5)",
                }}
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
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white hover:scale-105 text-[var(--color-navy)]"
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
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-white hover:scale-105 text-[var(--color-navy)]"
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
          <h3 className="font-semibold text-base leading-snug line-clamp-1 text-[var(--color-navy)]">
            {property.title}
          </h3>
          <div className="flex items-center gap-1 shrink-0">
            <Star size={14} className="fill-[var(--color-golden)] text-[var(--color-golden)]" />
            <span className="text-sm font-medium text-[var(--color-navy)]">
              {property.rating}
            </span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1">
          <MapPin size={13} className="text-gray-400" />
          <p className="text-sm text-gray-500 line-clamp-1">
            {property.location}
          </p>
        </div>

        {/* Amenities summary */}
        <div className="flex items-center gap-3 pt-1">
          <div className="flex items-center gap-1 text-gray-400">
            <Bed size={14} />
            <span className="text-xs">{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <Bath size={14} />
            <span className="text-xs">{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <Users size={14} />
            <span className="text-xs">{property.guests}</span>
          </div>
        </div>

        {/* Price */}
        <p className="pt-1">
          <span className="font-bold text-base text-[var(--color-navy)]">
            &euro;{property.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-400"> / night</span>
        </p>
      </div>
    </div>
  );
}
