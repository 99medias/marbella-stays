import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryBar from "@/components/CategoryBar";
import PropertyGrid from "@/components/PropertyGrid";
import CTANeighborhoods from "@/components/CTANeighborhoods";
import Experiences from "@/components/Experiences";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryBar />
        <PropertyGrid />
        <CTANeighborhoods />
        <Experiences />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
