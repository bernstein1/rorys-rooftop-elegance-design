
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MENU_DATA = {
  "Signature Cocktails": [
    { name: "Manhattan Sunset", description: "A classic, reimagined. Rich bourbon, sweet vermouth, and a whisper of cherry bitters.", price: "$16" },
    { name: "Rory's Rooftop G&T", description: "Our signature serve. Crisp Hendrick's Gin, floral elderflower tonic, and a refreshing cucumber ribbon.", price: "$15" },
    { name: "The High Line", description: "An effervescent blend of vodka, St-Germain, grapefruit, and lime, topped with sparkling rosé.", price: "$16" },
    { name: "Spicy Watermelon Margarita", description: "Summer in a glass. Blanco tequila, fresh watermelon, a kick of jalapeño, and lime.", price: "$15" },
    { name: "Espresso Martini", description: "The ultimate pick-me-up. Vodka, Kahlúa, and fresh-brewed espresso, shaken to velvety perfection.", price: "$17" },
  ],
  "Small Plates & Sharables": [
    { name: "Truffle Fries", description: "Perfectly crisp, tossed in truffle oil and parmesan, served with garlic aioli. Irresistible.", price: "$12" },
    { name: "Whipped Ricotta", description: "Creamy, dreamy ricotta topped with honey and black pepper. Served with toasted sourdough for dipping.", price: "$14" },
    { name: "Tuna Tartare Tacos", description: "Two crispy wonton shells filled with fresh ahi tuna, creamy avocado, and a zesty sriracha mayo.", price: "$19" },
    { name: "Burrata & Prosciutto", description: "The perfect pairing. Creamy burrata, salty prosciutto, heirloom tomatoes, and a balsamic glaze.", price: "$21" },
    { name: "Short Rib Sliders", description: "Tender, braised short rib on brioche buns with sweet caramelized onions and a horseradish kick.", price: "$18" },
  ],
  "Wines by the Glass": [
    { name: "Sauvignon Blanc, Cloudy Bay", description: "A vibrant and crisp classic from Marlborough, New Zealand.", price: "$16" },
    { name: "Rosé, Whispering Angel", description: "The quintessential Provence rosé. Dry, elegant, and endlessly drinkable.", price: "$15" },
    { name: "Pinot Noir, Belle Glos", description: "A rich and expressive Pinot Noir from California's coast.", price: "$20" },
    { name: "Cabernet Sauvignon, Caymus", description: "Bold and iconic. A signature Cabernet from Napa Valley.", price: "$28" },
    { name: "Prosecco, La Marca", description: "Bright, bubbly, and beautifully Italian. Perfect for any celebration.", price: "$14" },
  ],
  "Beer & Cider": [
    { name: "Peroni, Pale Lager", description: "A crisp and refreshing Italian lager. A timeless choice.", price: "$9" },
    { name: "Brooklyn Lager, Amber Lager", description: "A taste of our home borough. Smooth, flavorful, and versatile.", price: "$9" },
    { name: "Allagash White, Witbier", description: "A refreshing Belgian-style wheat beer with notes of citrus and spice.", price: "$10" },
    { name: "Downeast Original, Unfiltered Cider", description: "Juicy, fresh, and unfiltered. A modern American cider.", price: "$9" },
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
              A curated collection of vibrant cocktails and shareable plates, inspired by the spirit of New York and crafted with the finest ingredients. Dive in.
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
