
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About Our Rooftop Bar
              <br />
              <span className="text-primary">in the Meatpacking District</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              High above the electric pulse of the Meatpacking District, Rory's Rooftop is an urban oasis. We blend stunning skyline views with an atmosphere of effortless sophistication, creating the perfect backdrop for unforgettable moments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our menu is a love letter to New York—a spirited mix of inventive cocktails and artfully crafted plates, all designed to be shared and savored. Join us where the city lights sparkle brightest.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Located above
              <a
                href="https://www.puttery.com/locations/new-york-city/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
                aria-label="Puttery NYC (opens in a new tab)"
              >
                Puttery NYC
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              , our rooftop offers the perfect continuation of your entertainment
              experience—start with mini golf downstairs, then elevate your night
              with us.
            </p>
          </div>
          {/* Image */}
          <div className="relative">
            <img
              src="/lovable-uploads/comp-1.jpg"
              alt="Chic interior of Rory's Rooftop Bar with guests enjoying the ambiance"
              className="w-full h-96 object-cover object-[50%_30%] rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
