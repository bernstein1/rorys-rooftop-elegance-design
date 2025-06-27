
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MenuPreview = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      category: "Signature Cocktails",
      items: [
        { name: "Rooftop Mule", description: "Premium vodka, ginger beer, lime", price: "$16" },
        { name: "Manhattan Sunset", description: "Bourbon, sweet vermouth, cherry", price: "$18" },
      ]
    },
    {
      category: "Small Plates", 
      items: [
        { name: "Truffle Arancini", description: "Crispy risotto balls with truffle oil", price: "$14" },
        { name: "Tuna Tartare", description: "Fresh tuna, avocado, sesame", price: "$19" },
      ]
    }
  ];

  return (
    <section id="menu-preview" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Taste the Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From craft cocktails to artisanal bites, every item is designed to elevate your rooftop experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {menuItems.map((category, idx) => (
            <Card key={idx} className="p-6 bg-background">
              <h3 className="text-2xl font-bold text-primary mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <span className="font-bold text-primary ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            onClick={() => navigate("/menu")}
            className="bg-primary text-primary-foreground px-8 py-3"
          >
            View Full Menu
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
