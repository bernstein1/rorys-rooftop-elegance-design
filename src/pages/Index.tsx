
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import MenuPreview from "@/components/MenuPreview";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EmailSignup from "@/components/EmailSignup";
import RooftopFeatures from "@/components/RooftopFeatures";
import InstagramGallery from "@/components/InstagramGallery";
import PrivateEvents from "@/components/PrivateEvents";

const Index = () => {
  return (
    <div id="main" className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <RooftopFeatures />
      <EmailSignup />
      <MenuPreview />
      <PrivateEvents />
      <InstagramGallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
