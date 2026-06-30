import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import DesignProcess from "@/components/DesignProcess";
import YouTubeSection from "@/components/YouTubeSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">

      <Navbar />

      <Hero />

      <FeaturedProjects />

      <About />

      <WhyChooseUs />

      <Services />

      <DesignProcess />

      <YouTubeSection />

      <ContactCTA />

      <Footer />

      <FloatingWhatsApp />

    </main>
  );
}