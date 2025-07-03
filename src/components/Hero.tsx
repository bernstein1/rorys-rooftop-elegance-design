
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Image with WebP optimization ready */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
        <picture>
          <source 
            srcSet="/lovable-uploads/Rorys_Footer_Image_2.webp" 
            type="image/webp" 
          />
          <img 
            src="/lovable-uploads/Rorys_Footer_Image_2.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 flex flex-col items-center">
        {/* LOGO ONLY */}
        <img
          src="/lovable-uploads/6ec2b153-5a0d-4d69-aa6d-d931b2fb9079.png"
          alt="Rory's Rooftop Bar Logo"
          className="h-32 md:h-40 w-auto mx-auto mb-6 drop-shadow-lg"
          style={{ maxHeight: "160px" }}
        />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-up drop-shadow-md">
          Elevate Your Evenings
          <span className="sr-only"> at Rory's Rooftop Bar, NYC</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
          <Button 
            asChild
            size="lg" 
            className="bg-primary text-primary-foreground px-12 py-3 shadow-lg"
          >
            <a
              href="http://resy.com/link?venue_id=91610"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Make Reservation (opens in a new tab)"
            >
              Make Reservation
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary px-12 py-3"
            onClick={() => navigate("/menu")}
          >
            View Menu
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-7 h-7 text-white opacity-85" aria-hidden="true" />
      </div>
    </section>
  );
};

export default Hero;
