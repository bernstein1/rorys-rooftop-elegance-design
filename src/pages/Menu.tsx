
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MENU_DATA = {
  "Signature Cocktails": [
    { name: "Manhattan Sunset", description: "Bourbon, sweet vermouth, cherry bitters, orange peel", price: "$16" },
    { name: "Rory's Rooftop G&T", description: "Hendrick's Gin, elderflower tonic, cucumber ribbon, juniper berries", price: "$15" },
    { name: "The High Line", description: "Vodka, St-Germain, grapefruit, lime, sparkling rosé", price: "$16" },
    { name: "Spicy Watermelon Margarita", description: "Blanco tequila, fresh watermelon, jalapeño, lime, agave nectar", price: "$15" },
    { name: "Espresso Martini", description: "Vodka, Kahlúa, fresh-brewed espresso, simple syrup", price: "$17" },
  ],
  "Small Plates & Sharables": [
    { name: "Truffle Fries", description: "Hand-cut fries, truffle oil, parmesan, fresh parsley, garlic aioli", price: "$12" },
    { name: "Whipped Ricotta", description: "Honey, black pepper, toasted sourdough", price: "$14" },
    { name: "Tuna Tartare Tacos", description: "Crispy wonton shells, ahi tuna, avocado, sriracha mayo", price: "$19" },
    { name: "Burrata & Prosciutto", description: "Heirloom tomatoes, balsamic glaze, fresh basil, grilled bread", price: "$21" },
    { name: "Short Rib Sliders", description: "Brioche buns, braised short rib, caramelized onions, horseradish cream", price: "$18" },
  ],
  "Wines by the Glass": [
    { name: "Sauvignon Blanc, Cloudy Bay", description: "Marlborough, New Zealand", price: "$16" },
    { name: "Rosé, Whispering Angel", description: "Provence, France", price: "$15" },
    { name: "Pinot Noir, Belle Glos", description: "Clark & Telephone Vineyard, California", price: "$20" },
    { name: "Cabernet Sauvignon, Caymus", description: "Napa Valley, California", price: "$28" },
    { name: "Prosecco, La Marca", description: "Veneto, Italy", price: "$14" },
  ],
  "Beer & Cider": [
    { name: "Peroni, Pale Lager", description: "Italy", price: "$9" },
    { name: "Brooklyn Lager, Amber Lager", description: "Brooklyn, NY", price: "$9" },
    { name: "Allagash White, Witbier", description: "Portland, ME", price: "$10" },
    { name: "Downeast Original, Unfiltered Cider", description: "Boston, MA", price: "$9" },
  ],
};

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground" style={{ backgroundColor: "hsl(46, 46%, 95%)" }}>
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Our Menu</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Crafted with passion and inspired by the city, our menu features locally-sourced ingredients and innovative flavors.
            </p>
          </div>

          <div className="space-y-16">
            {Object.entries(MENU_DATA).map(([category, items]) => (
              <section key={category}>
                <h2 className="text-3xl font-bold text-primary mb-6 pb-3 border-b-2 border-primary/20">{category}</h2>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                  {items.map((item) => (
                    <div key={item.name} className="flex justify-between items-start py-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                        <p className="text-sm text-muted-foreground italic">{item.description}</p>
                      </div>
                      <p className="text-lg font-semibold text-foreground shrink-0 pl-4">{item.price}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="text-center mt-20">
            <Button asChild size="lg">
              <a href="https://resy.com/rorysrooftop" target="_blank" rel="noopener noreferrer">
                Make a Reservation
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              A 20% gratuity will be added to parties of 6 or more.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;
