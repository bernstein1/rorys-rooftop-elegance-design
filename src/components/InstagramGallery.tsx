
import { Card } from "@/components/ui/card";
import { Instagram } from "lucide-react";

const InstagramGallery = () => {
  const instagramImages = [
    { url: "/lovable-uploads/cocktail.png", alt: "Signature cocktail at Rory's" },
    { url: "/lovable-uploads/manhattan-sunset.png", alt: "Manhattan sunset view" },
    { url: "/lovable-uploads/meal.png", alt: "Artisanal dishes" },
    { url: "/lovable-uploads/cheers.png", alt: "Celebrating at Rory's" },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Instagram className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Follow the Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            See what's happening at Rory's through the eyes of our guests.
          </p>
          <a 
            href="https://instagram.com/rorysrooftop" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            @rorysrooftop
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramImages.map((image, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
