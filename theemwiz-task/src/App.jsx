import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import PortfolioSection from "./sections/PortfolioSection";
import PricingSection from "./sections/PricingSection";
import FaqSection from "./sections/FaqSection";
import ContactSection from "./sections/ContactSection";

function App() {

  return (
    <>
    <Navbar />
    <HeroSection />  
    <AboutSection />
    <PortfolioSection />
    <PricingSection />
    <FaqSection />
    <ContactSection />
    </>
  )
}

export default App
