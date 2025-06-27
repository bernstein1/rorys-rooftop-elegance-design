
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const MENU_DATA = {
  "Handhelds": [
    { 
      name: "Double Smash Burger", 
      description: "Double smash patty, house sauce, pickle, American cheese, lettuce, tomato. Add guacamole +$2, bacon +$2, caramelized onions +$2", 
      price: "$24",
      note: "Served with house cut fries"
    },
    { 
      name: "Fried Chicken Sandwich", 
      description: "Buttermilk fried chicken, slaw, garlic aioli. Add guacamole +$2, cheddar +$2", 
      price: "$24",
      note: "Served with house cut fries"
    },
    { 
      name: "Meatless Fried Chicken Sandwich", 
      description: "Meatless fried chicken, vegan cheese, lettuce, tomato, pickles, vegan house sauce, gluten free burger bun", 
      price: "$24" 
    },
    { 
      name: "Miso Salmon Roll", 
      description: "Toasted brioche bun, apple slaw, gochujang aioli. Choice of homemade Old Bay chips or fries", 
      price: "$23" 
    },
  ],
  "Salads": [
    { name: "Green Goddess Cobb Salad", description: "Chicken, bacon, avocado, tomato, hard-boiled egg, bleu cheese, green goddess dressing", price: "$22" },
    { name: "BBQ Chicken Salad", description: "Chicken, romaine, Monterey jack cheese, cheddar cheese, tomatoes, onions, roasted corn, BBQ ranch", price: "$22" },
    { name: "Garden Salad", description: "Beets, seasonal citrus, goat cheese, avocado, white balsamic vinaigrette, candied pecans. Add chicken +$7, shrimp +$9, flat iron steak +$10", price: "$19" },
  ],
  "Signature Entrees": [
    { name: "Steak Frites", description: "Pepper seared flat iron, cognac peppercorn sauce, fries", price: "$35" },
    { name: "Miso Salmon", description: "Marinated miso salmon, apple slaw, ginger rice, balsamic broccolini", price: "$26" },
    { name: "Creamy Cajun Alfredo", description: "Choice of chicken or shrimp, or steak +$5. Cajun alfredo, penne pasta, manchego, black pepper", price: "$24" },
    { name: "Huli Huli Chicken Skewers", description: "Chicken skewers, pineapple fried rice, coconut cream sauce", price: "$24" },
    { name: "Stuffed Chicken Marsala", description: "Sun dried tomato stuffed chicken, mozzarella, mashed potatoes, green bean, house marsala sauce", price: "$24" },
    { name: "Fire Surf and Turf", description: "6oz filet mignon, togarashi shrimp, zesty cajun butter, green beans. Choice of ginger rice or mashed potatoes", price: "$35" },
  ],
  "Tacos": [
    { name: "Salsa Macha Chicken Tacos", description: "Salsa macha, avocado, onion, cilantro, lime", price: "$19" },
    { name: "Carne Asada Tacos", description: "Salsa roja, avocado, onion, cilantro, lime", price: "$20" },
    { name: "Impossible™ Beef Tacos", description: "Nacho 'cheese' sauce, lettuce, pico de gallo", price: "$20" },
  ],
  "Taca-Nadas": [
    { 
      name: "Carne Asada Taca-Nadas", 
      description: "Pico de gallo, lettuce, poblano aioli, cotija, lime wedge", 
      price: "$18",
      note: "Deep fried & stuffed empanada shells"
    },
    { 
      name: "Ancho Chicken Taca-Nadas", 
      description: "Pico de gallo, lettuce, poblano aioli, cotija, lime wedge", 
      price: "$18",
      note: "Deep fried & stuffed empanada shells"
    },
    { 
      name: "Impossible™ Beef Taca-Nadas", 
      description: "Pico de gallo, lettuce, nacho 'cheese' sauce, lime wedge", 
      price: "$18",
      note: "Deep fried & stuffed empanada shells"
    },
  ],
  "Shareables": [
    { name: "Charcuterie Board", description: "Seasonal meats & cheeses, grilled asparagus, marinated olives, garlic jam, pecans, toasted bread", price: "$29" },
    { name: "Elote Ribs", description: "Smothered corn on the cob, cut into ribs, black truffle aioli, cotija cheese, fresh squeezed lime", price: "$16" },
    { name: "Tuna Tostadas", description: "Marinated ahi tuna, sriracha aioli, smashed avocado, mango cucumber pico de gallo, micro cilantro", price: "$18" },
    { name: "Veggie Tostadas", description: "Impossible meat, mushroom, pepper, onion, lettuce, salsa roja, pico de gallo, cotija, poblano chili aioli, fried wheat tortillas", price: "$16" },
    { name: "Chips & Dips", description: "Tortilla chips, served with salsa roja & guacamole", price: "$15" },
    { name: "Filet Mignon Sliders", description: "Beef tenderloin, caramelized onion, gruyere cheese, black pepper truffle aioli", price: "$23" },
    { name: "Poke Stack", description: "Choice of salmon or ahi tuna. Ginger soy glaze, avocado, edamame, cucumber, red onion, carrots, green onion, sesame seeds, fried wonton chips", price: "$22" },
    { name: "Beef Tataki", description: "Seared filet mignon, garlic oil, chili ponzu, fried onion, jalapeños", price: "$24" },
    { name: "Fire Shrimp", description: "Cajun butter, tomato, micro cilantro, toasted bread", price: "$22" },
    { name: "House Cut Fries", description: "Served with sriracha ketchup & horseradish mustard aioli", price: "$15" },
  ],
  "Sweet Treats": [
    { name: "Bourbon Bread Pudding", description: "Bread pudding, vanilla ice cream, pecan crumble, bourbon glaze", price: "$12" },
    { name: "Pecan Pie", description: "Personal caramelized pecan pie, served with ice cream", price: "$10" },
    { name: "Dulce de Leche Cake", description: "Vanilla sponge cake, ice cream, whipped cream", price: "$10" },
    { name: "Seasonal Crème Brûlée", description: "Mango crème brûlée, fresh fruit, mint", price: "$12" },
  ],
  "Cocktails": [
    { name: "Ranch Water", description: "Blanco tequila, lime, soda", price: "$17" },
    { name: "French 75", description: "Gin or vodka, lemon, cane sugar, topped with sparkling wine", price: "$17" },
    { name: "Trip to the Beach", description: "Aged rum, coconut, pineapple, orange", price: "$17" },
    { name: "Passion Fruit Shandy", description: "Blue Moon, passion fruit, lime", price: "$17" },
    { name: "Puttery Spritz", description: "Strawberry infused Aperol, sparkling wine, soda", price: "$17" },
    { name: "Mexican Candy", description: "Spicy blanco tequila, watermelon, lime", price: "$17" },
  ],
  "Zero-Proof Cocktails": [
    { name: "Margarita Compromise", description: "Ancho infused zero-proof tequila, pineapple, lime", price: "$12" },
    { name: "Eastside Sparkle", description: "Zero-proof gin, mint, cucumber, cane sugar, lime", price: "$12" },
    { name: "Zero-Proof Spritz", description: "Ritual zero-proof aperitif, soda", price: "$12" },
    { name: "Ginger Brew", description: "Ginger, cane sugar, lemon, soda", price: "$12" },
    { name: "Not So Dirty Shirley", description: "Pomegranate, cinnamon, cane sugar, lime", price: "$12" },
    { name: "Kinoko Lemonade", description: "Mushrooms, allspice, thyme, cane sugar, lemon, egg white", price: "$12" },
  ],
  "Bounties": [
    { name: "Sangria", description: "Red blend, apple brandy, house made grenadine, cinnamon, orange, mint"},
    { name: "Rooftop Margarita", description: "Blanco tequila, cucumber, lime, cane sugar"},
  ],
  "Wine": [
    { name: "House Red", description: "Glass or bottle", price: "$14 / $60" },
    { name: "House White", description: "Glass or bottle", price: "$14 / $60" },
    { name: "House Rosé", description: "Glass or bottle", price: "$14 / $60" },
    { name: "House Bubbly", description: "Glass or bottle", price: "$14 / $60" },
  ],
  "Draft Beer": [
    { name: "Brooklyn Brewery East IPA", description: "Crisp and hoppy East Coast IPA", price: "$10" },
    { name: "Coney Island Beach Beer", description: "Light and refreshing beach-style lager", price: "$10" },
    { name: "Bell's Hazy Hearted IPA", description: "Hazy New England style IPA", price: "$10" },
    { name: "Blue Moon Belgian White", description: "Classic Belgian-style wheat beer", price: "$10" },
    { name: "Yuengling Porter", description: "Rich and smooth American porter", price: "$10" },
    { name: "Rotating Tap", description: "Ask your server for details", price: "$10" },
  ],
  "Bottled Beer": [
    { name: "Rory's Beachside", description: "Signature bottled beer", price: "$10" },
    { name: "Heineken", description: "Classic European lager", price: "$10" },
    { name: "Shiner Bock", description: "Texas-style amber lager", price: "$10" },
    { name: "Miller Lite", description: "Light American lager", price: "$10" },
    { name: "Modelo", description: "Mexican lager", price: "$10" },
  ],
};

const MenuPage = () => {
  return (
    <div id="main-content" className="min-h-screen bg-secondary text-foreground">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Rory's Rooftop Bar Menu</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated collection of vibrant cocktails, fresh plates, and rooftop favorites, crafted with the finest ingredients and served with stunning views.
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(MENU_DATA).map(([category, items]) => (
              <section key={category}>
                <h2 className="text-3xl font-bold text-primary mb-6 pb-3 border-b-2 border-primary/20">{category}</h2>
                {/* Show section note if exists */}
                {(category === "Handhelds" || category === "Taca-Nadas") && (
                  <p className="text-sm text-muted-foreground italic mb-4">
                    {category === "Handhelds" ? "Served with house cut fries" : "Deep fried & stuffed empanada shells"}
                  </p>
                )}
                {category === "Bounties" && (
                  <p className="text-sm text-muted-foreground italic mb-4">
                    Glass $19 / Carafe (serves 2) $32 / Bowl (serves 4) $64
                  </p>
                )}
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col md:flex-row justify-between items-start gap-2 py-3 border-b border-muted/20 last:border-b-0"
                    >
                      <div className="flex-1 pr-4">
                        <h3 className="text-lg font-semibold text-foreground mb-1">{item.name}</h3>
                        <p className="text-sm text-muted-foreground italic leading-relaxed">{item.description}</p>
                      </div>
                      <p className="text-lg font-semibold text-foreground">{item.price}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg">
              <a href="https://resy.com/rorysrooftop" target="_blank" rel="noopener noreferrer">
                Make a Reservation
              </a>
            </Button>
            <div className="mt-6 text-sm text-muted-foreground space-y-2">
              <p>Please notify your server of food allergies or dietary restrictions.</p>
              <p>Consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;
