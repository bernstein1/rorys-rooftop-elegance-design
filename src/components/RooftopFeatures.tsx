
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const RooftopFeatures = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "SUNSET LIBATIONS",
      description: "Sunset in a glass. From freshly pressed citrus cocktails to island-inspired creations with rum, tequila, and house infusions, our signature cocktails bring tropical energy to the city skyline. Sip slow, unwind, and let's embrace island time.",
      cta: "DRINK MENU",
      image: "/lovable-uploads/6a6bcbe3-b86b-441d-a54c-3c7bd47ea431.png",
      onClick: () => navigate("/menu")
    },
    {
      title: "ROOFTOP VIBES",
      description: "Sky-high and sunkissed, Rory's Rooftop is where laid-back lounge meets elevated atmosphere. Cozy up in plush seating, catch golden hour with friends, and enjoy a full menu of vibrant food and beach-y cocktails.",
      cta: "VIEW GALLERY",
      image: "/lovable-uploads/99403d6d-9c27-480f-8bdd-fe1acbeaa5d9.png",
      onClick: () => window.scrollTo({ top: document.getElementById('instagram')?.offsetTop || 0, behavior: 'smooth' })
    },
    {
      title: "FOOD TO MATCH THE VIEW",
      description: "Our plates are designed for rooftop grazing — fresh, bold, and full of flavor. From citrusy ceviche to crispy bites and global street food twists, every dish is made to pair perfectly with your drink… and the view.",
      cta: "FOOD MENU",
      image: "/lovable-uploads/97800ff3-e4bd-426e-974e-7ae6c3b68c9e.png",
      onClick: () => navigate("/menu")
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-secondary border-0 shadow-lg overflow-hidden text-center flex flex-col"
            >
              <div className="aspect-[3/4] mb-6">
                <img
                  src={feature.image}
                  alt={`${feature.title} at Rory's Rooftop`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="p-6 pt-0 flex flex-col flex-1">
                <h3 className="text-primary mb-4 font-didot text-2xl">
                  {feature.title}
                </h3>
                <p className="font-body text-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <Button
                  variant="outline"
                  onClick={feature.onClick}
                  className="w-full mt-auto"
                >
                  {feature.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RooftopFeatures;
