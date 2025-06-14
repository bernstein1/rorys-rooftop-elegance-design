
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
              Perched high above Manhattan's vibrant Meatpacking District, Rory's Rooftop 
              offers an unparalleled dining experience where exceptional cocktails meet 
              breathtaking city views.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our carefully curated menu celebrates both classic and innovative flavors, 
              while our atmosphere captures the energy and sophistication that defines 
              New York City's dining scene.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {/* Ensuring Cards use Beige */}
              <Card className="p-4 text-center bg-card">
                <h3 className="font-semibold text-primary mb-2">Rooftop Views</h3>
                <p className="text-sm text-muted-foreground">Stunning NYC skyline panoramas</p>
              </Card>
              <Card className="p-4 text-center bg-card">
                <h3 className="font-semibold text-primary mb-2">Craft Cocktails</h3>
                <p className="text-sm text-muted-foreground">Expertly crafted drinks</p>
              </Card>
            </div>
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
