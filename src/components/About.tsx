
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section
      id="about"
      className="py-20"
      style={{ backgroundColor: "hsl(346, 56%, 86%)" }} // pink as background
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Above the City,<br />
              <span className="text-primary">Beyond Ordinary</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              High above the electric pulse of the Meatpacking District, Rory's Rooftop is an urban oasis. We blend stunning skyline views with an atmosphere of effortless sophistication, creating the perfect backdrop for unforgettable moments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our menu is a love letter to New York—a spirited mix of inventive cocktails and artfully crafted plates, all designed to be shared and savored. Join us where the city lights sparkle brightest.
            </p>
          </div>
          {/* Image */}
          <div className="relative">
            <img
              src="/lovable-uploads/99403d6d-9c27-480f-8bdd-fe1acbeaa5d9.png"
              alt="Rory's Rooftop Interior"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
