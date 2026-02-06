import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 px-5 md:px-8">
      {/* Decorative gradient blobs */}
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-golden opacity-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-terracotta opacity-10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-golden">
          Start Your Journey
        </p>
        <h2 className="mb-6 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Experience the{" "}
          <span className="text-golden">Magic of Marbella</span>?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60">
          Whether you&apos;re planning a family holiday, a romantic getaway, or
          an exclusive celebration, we&apos;ll help you find the perfect
          property.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="btn-primary group px-8 py-4 text-base">
            Browse Properties
            <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button className="btn-secondary border-golden/40 px-8 py-4 text-base text-golden hover:text-white">
            Contact Concierge
          </button>
        </div>

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 sm:gap-12">
          {[
            { label: "Verified Properties", value: "100%" },
            { label: "Guest Support", value: "24/7" },
            { label: "Free Cancellation", value: "48hr" },
            { label: "Best Price", value: "Guaranteed" },
          ].map((badge) => (
            <div key={badge.label} className="text-center">
              <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-golden">
                {badge.value}
              </p>
              <p className="mt-0.5 text-xs text-white/50">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
