
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

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 flex flex-col items-center">
        {/* LOGO ONLY */}
        <img
          src="/lovable-uploads/6ec2b153-5a0d-4d69-aa6d-d931b2fb9079.png"
          alt="Rory's Rooftop Bar Logo"
          className="h-32 md:h-40 w-auto mx-auto mb-10 drop-shadow-lg"
          style={{ maxHeight: "160px" }}
        />
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
            className="border-primary text-primary px-12 py-3"
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

