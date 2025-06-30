
import { Button } from "@/components/ui/button";

const InstagramGallery = () => {
  // Using existing uploaded images in a masonry-style grid
  const instagramPosts = [
    "/lovable-uploads/cocktail.png",
    "/lovable-uploads/aperol.png",
    "/lovable-uploads/comp-1.jpg",
    "/lovable-uploads/meal.png",
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
                src={post}
                alt={`Instagram post ${index + 1} from Rory's Rooftop`}
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
