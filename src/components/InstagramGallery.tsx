
import { Button } from "@/components/ui/button";

const InstagramGallery = () => {
  // Using existing uploaded images in a masonry-style grid
  const instagramPosts = [
    { src: "/lovable-uploads/cocktail.png", alt: "Signature craft cocktail served at Rory's Rooftop" },
    { src: "/lovable-uploads/aperol.png", alt: "Aperol spritz on the rooftop bar with skyline in the background" },
    { src: "/lovable-uploads/comp-1.jpg", alt: "Guests enjoying drinks and sunset views on the rooftop" },
    { src: "/lovable-uploads/meal.png", alt: "Plated dish from Rory's Rooftop kitchen" },
  ];

  return (
    <section id="instagram" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Follow Us On <span className="text-primary">Instagram</span>
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-12">
          {instagramPosts.map((post, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer group"
            >
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            asChild
          >
            <a
              href="https://www.instagram.com/rorysrooftop/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram (opens in a new tab)"
            >
              FOLLOW US
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
