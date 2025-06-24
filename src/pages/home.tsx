import Footer from "@/components/footer";
import Header from "@/components/header";
import ContactSection from "@/components/home/contact-section";
import EngagementSection from "@/components/home/engagement-section";
import HeroSection from "@/components/home/hero-section";
import MapSection from "@/components/home/map-section";
import MenuSection from "@/components/home/menu-section";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <EngagementSection />
      <MenuSection />
      <ContactSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Home;
