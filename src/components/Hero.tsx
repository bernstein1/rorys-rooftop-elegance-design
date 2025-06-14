
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/5ecc025f-806a-46fc-8570-aa25f4d60ea6.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Rory's Rooftop
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Elevated dining above the city. Experience cocktails, cuisine, and skyline views 
          in the heart of NYC's Meatpacking District.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
            Make Reservation
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg">
            View Menu
          </Button>
        </div>

        {/* Age Requirement Notice */}
        <p className="mt-8 text-sm opacity-90">
          21+ Only • Valid ID Required
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};

export default Hero;
