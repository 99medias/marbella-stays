import Image from "next/image";
import { MapPin } from "lucide-react";

const neighborhoods = [
  {
    id: 1,
    name: "Puerto Banus",
    description: "Glamorous marina living with luxury boutiques and nightlife",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=500&fit=crop",
    properties: 48,
  },
  {
    id: 2,
    name: "Golden Mile",
    description:
      "Exclusive beachfront stretch between Marbella and Puerto Banus",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=500&fit=crop",
    properties: 35,
  },
  {
    id: 3,
    name: "Nueva Andalucia",
    description: "The golf valley surrounded by world-class courses",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=500&fit=crop",
    properties: 41,
  },
  {
    id: 4,
    name: "Old Town",
    description: "Charming cobblestone streets and authentic Andalusian culture",
    image:
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=500&fit=crop",
    properties: 18,
  },
  {
    id: 5,
    name: "San Pedro",
    description: "Family-friendly coastal village with local character",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=500&fit=crop",
    properties: 29,
  },
  {
    id: 6,
    name: "Estepona",
    description: "Flower-lined streets and an authentic seaside atmosphere",
    image:
      "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?w=600&h=500&fit=crop",
    properties: 22,
  },
];

export default function Neighborhoods() {
  return (
    <section className="section-padding bg-cream">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-golden">
            Explore Areas
          </p>
          <h2 className="mb-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-navy sm:text-4xl lg:text-5xl">
            Marbella&apos;s Finest Neighborhoods
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-navy/50">
            Each neighborhood tells its own story. Find the one that speaks to
            you.
          </p>
        </div>

        {/* Grid with first two cards larger */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {neighborhoods.map((hood, index) => (
            <div
              key={hood.id}
              className={`group cursor-pointer ${
                index < 2 ? "sm:col-span-1 lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden rounded-2xl ${
                  index < 2
                    ? "h-64 sm:h-72 lg:h-full lg:min-h-[420px]"
                    : "h-56 sm:h-64"
                }`}
              >
                <Image
                  src={hood.image}
                  alt={hood.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                  <div className="mb-1.5 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-golden" />
                    <span className="text-xs font-medium uppercase tracking-wider text-golden">
                      {hood.properties} properties
                    </span>
                  </div>
                  <h3
                    className={`font-[family-name:var(--font-heading)] font-bold text-white ${
                      index < 2 ? "text-2xl" : "text-xl"
                    }`}
                  >
                    {hood.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-white/70 line-clamp-1">
                    {hood.description}
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
