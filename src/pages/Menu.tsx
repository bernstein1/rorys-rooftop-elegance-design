
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const menuCategories = [
  {
    name: "Signature Cocktails",
    items: [
      { name: "Rooftop Mule", description: "Premium vodka, house-made ginger beer, fresh lime, copper mug", price: "$16" },
      { name: "Manhattan Sunset", description: "Bourbon, sweet vermouth, maraschino cherry, orange twist", price: "$18" },
      { name: "Garden Gimlet", description: "Hendrick's gin, elderflower, cucumber, fresh basil", price: "$17" },
      { name: "Smoke & Mirrors", description: "Mezcal, yellow Chartreuse, lime, smoked salt rim", price: "$19" }
    ]
  },
  {
    name: "Classic Cocktails",
    items: [
      { name: "Old Fashioned", description: "Bourbon, simple syrup, Angostura bitters, orange peel", price: "$16" },
      { name: "Negroni", description: "Gin, Campari, sweet vermouth, orange twist", price: "$15" },
      { name: "Martini", description: "Gin or vodka, dry vermouth, lemon twist or olives", price: "$15" },
      { name: "Whiskey Sour", description: "Bourbon, fresh lemon, simple syrup, egg white", price: "$14" }
    ]
  },
  {
    name: "Small Plates",
    items: [
      { name: "Truffle Arancini", description: "Crispy risotto balls, truffle oil, parmesan, marinara", price: "$14" },
      { name: "Tuna Tartare", description: "Sesame-crusted tuna, avocado, cucumber, ponzu", price: "$19" },
      { name: "Charcuterie Board", description: "Selection of cured meats, artisan cheeses, accompaniments", price: "$24" },
      { name: "Burrata", description: "Fresh burrata, heirloom tomatoes, basil oil, sourdough", price: "$16" }
    ]
  },
  {
    name: "Main Dishes",
    items: [
      { name: "Grilled Branzino", description: "Mediterranean sea bass, lemon herb oil, roasted vegetables", price: "$28" },
      { name: "Dry-Aged Ribeye", description: "12oz ribeye, garlic mashed potatoes, seasonal vegetables", price: "$42" },
      { name: "Lobster Roll", description: "Maine lobster, brioche roll, celery, lemon aioli", price: "$32" },
      { name: "Roasted Chicken", description: "Half chicken, rosemary potatoes, market vegetables", price: "$26" }
    ]
  }
];

export default function Menu() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Our Menu
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertly crafted cocktails and elevated cuisine, designed to complement our stunning rooftop setting.
          </p>
        </header>

        <div className="space-y-12">
          {menuCategories.map((category, idx) => (
            <section key={idx}>
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                {category.name}
              </h2>
              <div className="grid gap-6">
                {category.items.map((item, itemIdx) => (
                  <Card key={itemIdx} className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {item.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                      <div className="ml-6">
                        <span className="text-2xl font-bold text-primary">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="text-center mt-16 p-8 bg-secondary rounded-lg">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Experience Rory's?
          </h2>
          <p className="text-muted-foreground mb-6">
            Make a reservation to secure your spot at NYC's premier rooftop destination.
          </p>
          <a 
            href="https://resy.com/rorysrooftop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Make Reservation
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
