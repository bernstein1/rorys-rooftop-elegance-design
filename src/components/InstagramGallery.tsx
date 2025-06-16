
import { Button } from "@/components/ui/button";

const InstagramGallery = () => {
  // Using existing uploaded images in a masonry-style grid
  const instagramPosts = [
    "/lovable-uploads/6a6bcbe3-b86b-441d-a54c-3c7bd47ea431.png",
    "/lovable-uploads/97800ff3-e4bd-426e-974e-7ae6c3b68c9e.png",
    "/lovable-uploads/99403d6d-9c27-480f-8bdd-fe1acbeaa5d9.png",
    "/lovable-uploads/5ecc025f-806a-46fc-8570-aa25f4d60ea6.png",
    "/lovable-uploads/6a6bcbe3-b86b-441d-a54c-3c7bd47ea431.png",
    "/lovable-uploads/97800ff3-e4bd-426e-974e-7ae6c3b68c9e.png",
    "/lovable-uploads/99403d6d-9c27-480f-8bdd-fe1acbeaa5d9.png",
    "/lovable-uploads/5ecc025f-806a-46fc-8570-aa25f4d60ea6.png",
    "/lovable-uploads/6a6bcbe3-b86b-441d-a54c-3c7bd47ea431.png",
    "/lovable-uploads/97800ff3-e4bd-426e-974e-7ae6c3b68c9e.png",
    "/lovable-uploads/99403d6d-9c27-480f-8bdd-fe1acbeaa5d9.png",
    "/lovable-uploads/5ecc025f-806a-46fc-8570-aa25f4d60ea6.png"
  ];

  return (
    <section id="instagram" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Follow Us On <span className="text-primary">Instagram</span>
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mb-12">
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
            >
              FOLLOW US
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
