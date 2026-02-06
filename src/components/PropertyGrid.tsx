"use client";

import { useState } from "react";
import PropertyCard from "./PropertyCard";
import { properties } from "@/data/properties";

export default function PropertyGrid() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? properties : properties.slice(0, 8);

  return (
    <section className="section-padding">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{
                fontFamily: "var(--font-heading)",
                color: "#1B2A4A",
              }}
            >
              Stays in Marbella
            </h2>
            <p
              className="text-base"
              style={{ color: "#6B7280", fontFamily: "var(--font-body)" }}
            >
              {properties.length} handpicked luxury properties
            </p>
          </div>
        </div>

        {/* Property grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayed.map((property, i) => (
            <div
              key={property.id}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${i * 0.08}s`, animationFillMode: "forwards" }}
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        {/* Show more button */}
        {!showAll && properties.length > 8 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="btn-secondary text-base px-8 py-3"
            >
              Show all {properties.length} properties
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
