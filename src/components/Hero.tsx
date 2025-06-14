
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/5ecc025f-806a-46fc-8570-aa25f4d60ea6.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-foreground/95">
          Rory's Rooftop
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-xl mx-auto leading-relaxed animate-fade-in text-foreground/80">
          Elevated dining above the city.<br className="hidden md:block" /> 
          Experience cocktails, cuisine, <br className="hidden md:block" /> and skyline views in the heart of NYC's Meatpacking District.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground px-12 py-3 shadow-lg"
          >
            Make Reservation
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary bg-background px-12 py-3"
          >
            View Menu
          </Button>
        </div>
        <p className="mt-10 text-sm text-foreground/70">21+ Only • Valid ID Required</p>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-7 h-7 text-white opacity-85" />
      </div>
    </section>
  );
};

export default Hero;
