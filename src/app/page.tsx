import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryBar from "@/components/CategoryBar";
import PropertyGrid from "@/components/PropertyGrid";
import Neighborhoods from "@/components/Neighborhoods";
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
        <Neighborhoods />
        <Experiences />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
