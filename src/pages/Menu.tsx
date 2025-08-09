
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const MENU_DATA = {
  "APPETIZERS": [
    {
      name: "WINGS",
      description:
        "Choice of BBQ, Buffalo, Garlic Parm, Sweet & Sour. Served with carrots, celery, and ranch or blue cheese",
      price: "$18",
    },
    {
      name: "LOADED CHEESE FRIES",
      description:
        "Hot and crispy fries covered with cheese blend, bacon, red dragon sauce, ranch, green onion",
      price: "$18",
    },
    {
      name: "CHIPS & DIP",
      description: "Tortilla chips, served with salsa and guacamole",
      price: "$15",
    },
    {
      name: "FIRE SHRIMP",
      description:
        "Seared shrimp tossed in cajun butter, tomato, green onion, micro cilantro, served with toasted ciabatta bread",
      price: "$19",
    },
    {
      name: "TUNA TATAKI",
      description:
        "Seared tuna drizzled with chili ponzu and garlic oil, topped with fresno peppers, togarashi, and micro cilantro",
      price: "$18",
    },
    {
      name: "ELOTE RIBS",
      description:
        "Smothered corn on the cobb cut into ribs. Black truffle aioli, cotija cheese, fresh squeezed lime",
      price: "$15",
    },
    {
      name: "BRUSSEL SPROUTS",
      description:
        "Fried brussels tossed in balsamic glaze and parmesan cheese, topped with pickled onions",
      price: "$16",
    },
    {
      name: "STUFFED POTATO SKINS",
      description:
        "Fried potato skins stuffed with bacon and cheese blend, topped with signature red dragon sauce, ranch, green onions",
      price: "$19",
    },
    {
      name: "BBQ BRISKET SLIDERS",
      description:
        "Brisket seared and tossed in our signature BBQ sauce, topped with cabbage blend slaw tossed in ranch, pickles",
      price: "$17",
    },
  ],
  "SALADS": [
    {
      name: "GARDEN SALAD",
      description:
        "Lettuce mix, roasted beets, orange slices, avocado, grape tomato, mozzarella, pecans, tossed with Italian vinaigrette",
      price: "$19",
    },
    {
      name: "CAESAR SALAD",
      description:
        "Romaine lettuce, house made Caesar dressing, parmesan cheese, croutons",
      price: "$17",
    },
    {
      name: "CUCUMBER SALAD",
      description:
        "Cucumber, sesame oil, sesame seeds, carrots, red onions, sundried tomato",
      price: "$19",
    },
  ],
  "BURGERS & SANDWICHES": [
    {
      name: "DOUBLE SMASH BURGER",
      description:
        "Two 4oz smashed burger patties, american cheese, house sauce, lettuce, tomato, pickle",
      price: "$25",
    },
    {
      name: "BARN YARD BURGER",
      description:
        "Two 4oz smashed burger patties, egg, bacon, cheddar cheese, house sauce, lettuce, tomato, pickle",
      price: "$27",
    },
    {
      name: "RODEO BURGER",
      description:
        "Two 4oz smashed burger patties, pepperjack cheese, BBQ sauce, bacon, fried onions and jalapenos, house sauce, lettuce, tomato, pickle",
      price: "$27",
    },
    {
      name: "FRY CHICKEN",
      description:
        "Ranch, fried chicken breast topped with a cabbage blend slaw tossed in red dragon sauce",
      price: "$23",
    },
    {
      name: "RORY’S LUCKY CHICKEN SANDWICH",
      description:
        "Grilled chicken, dijon aioli, sundried tomato, avocado",
      price: "$23",
    },
    {
      name: "BRISKET GRILLED CHEESE",
      description:
        "Brisket seared and tossed in our signature BBQ sauce, pepperjack cheese, cheddar cheese",
      price: "$25",
    },
  ],
  "ENTREES": [
    {
      name: "HULI-HULI CHICKEN",
      description:
        "2 chicken breasts smothered with huli-huli marinade, served over pineapple fried rice and cucumber salad",
      price: "$26",
    },
    {
      name: "SALMON",
      description:
        "Garlic parmesan crusted salmon over rice and broccolini",
      price: "$27",
    },
    {
      name: "CHIMICHURRI STEAK FRITES",
      description:
        "8oz flat iron steak topped with chimichurri, fresno peppers, served with fries",
      price: "$32",
    },
    {
      name: "FIRE SURF & TURF",
      description:
        "8oz flat iron steak, topped with 6 seared shrimp, tossed in cajun butter, tomato, and green onion, served with a baked potato and broccolini",
      price: "$38",
    },
    {
      name: "CAJUN PASTA",
      description:
        "Cajun alfredo, penne, parmesan cheese, black pepper and toasted ciabatta. Add Chicken 8, Shrimp 9, 4oz Steak 11, Salmon 12",
      price: "$20",
    },
  ],
  "DESSERTS": [
    {
      name: "HOMEMADE BREAD PUDDING",
      description:
        "Bread pudding, vanilla ice cream, pecan crumble, bourbon glaze",
      price: "$14",
    },
    {
      name: "BROWNIE",
      description:
        "Fudge brownie, vanilla ice cream, brownie crumbles, whipped cream, chocolate syrup",
      price: "$15",
    },
    {
      name: "APPLE PIE",
      description:
        "Fried apple pie dumplings, ice cream, whipped cream, caramel sauce",
      price: "$14",
    },
  ],
  "Signature COCKTAILS": [
    { name: "TRANSFUSION", description: "Tito’s Vodka, Blackberry Liqueur, Fresh Lemon Juice, Ginger Beer" },
    { name: "TEE TIME ESPRESSO", description: "Freshly Brewed Iced Coffee, Vanilla Vodka, Coffee Liqueur, Simple Syrup" },
    { name: "GREEN JACKET", description: "Gin, Fresh Cucumber Juice, Fresh Lime Juice, Basil Syrup" },
    { name: "CLUBHOUSE COOLER", description: "Gin, Watermelon Syrup, Fresh Lemon Juice, Club Soda" },
    { name: "SMOKY FAIRWAY", description: "Tequila, Mezcal, Pineapple Juice, Fresh Lime Juice" },
    { name: "BIRDIE BREEZE", description: "Tequila, Hibiscus Syrup, Fresh Lemon Juice, Club Soda" },
    { name: "TROPIC TIDES", description: "White Rum, Passion Fruit Nectar, Pineapple Juice, Coconut Cream" },
    { name: "APPLE ALBATROSS", description: "Apple Jack, Apple Juice, Ginger Liqueur" },
  ],
  "THE 23 COLLECTION": [
    { name: "CINCORO’S FAMOUS PALOMA", description: "Cincoro Tequila Blanco, Fresh Grapefruit Juice, Fresh Lime Juice, Agave Syrup, Jalapeno, Club Soda" },
    { name: "THE CLOVER", description: "Cincoro Tequilla Blanco, Combier Peach, Lemon Juice, Simple Syrup" },
    { name: "GOLDEN SUNRISE", description: "Cincoro Tequila Blanco, Mango Nectar, Fresh Lime Juice, Chili Honey" },
  ],
  "MOCKTAILS": [
    { name: "BERRY BASIL SMASH", description: "Mixed Berries, Fresh Basil Leaves, Fresh Lemon Juice, Simple Syrup, Club Soda" },
    { name: "TROPICAL GINGER COOLER", description: "Pineapple Juice, Coconut Syrup, Fresh Lime Juice, Ginger Beer" },
    { name: "CHIP CRUSH", description: "Strawberry, Passionfruit, Orange Juice, Club Soda" },
  ],
  "DRAFT BEER": [
    { name: "BROOKLYN LAGER", description: "", price: "$10" },
    { name: "CONEY ISLAND PILSNER", description: "", price: "$10" },
    { name: "MILLER LITE", description: "", price: "$10" },
    { name: "MODELO", description: "", price: "$10" },
    { name: "HEINEKEN", description: "", price: "$10" },
    { name: "SIXPOINT BENGALI IPA", description: "", price: "$10" },
    { name: "ROTATING IPA", description: "", price: "$10" },
  ],
  "BOTTLED BEER": [
    { name: "MILLER LITE", description: "", price: "$10" },
    { name: "MODELO", description: "", price: "$10" },
    { name: "HEINEKEN", description: "", price: "$10" },
    { name: "HEINEKEN 00", description: "", price: "$10" },
    { name: "SURFSIDE", description: "", price: "$10" },
    { name: "SUNTORY -196", description: "", price: "$10" },
  ],
  "NON-ALCOHOLIC": [
    { name: "COKE PRODUCTS", description: "", price: "$4" },
    { name: "RED BULL", description: "", price: "$6" },
  ],
  "WATER": [
    { name: "AQUA PANNA", description: "", price: "$7" },
    { name: "SAN PELLEGRINO", description: "", price: "$7" },
  ],
  "WINE": [
    { name: "HOUSE CABERNET", description: "Glass", price: "$14" },
    { name: "HOUSE PINOT NOIR", description: "Glass", price: "$14" },
    { name: "HOUSE SAUVIGNON BLANC", description: "Glass", price: "$14" },
    { name: "HOUSE CHARDONNAY", description: "Glass", price: "$14" },
    { name: "HOUSE ROSE", description: "Glass", price: "$14" },
    { name: "HOUSE PROSECCO", description: "Glass", price: "$14" },
  ],
};

const MenuPage = () => {
  return (
    <div id="main" className="min-h-screen bg-secondary text-foreground">
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
                {category === "SALADS" && (
                  <p className="text-sm text-muted-foreground italic mb-4">
                    Add Chicken $8, Shrimp $9, Salmon $12, 4oz Steak $11, Burger Patty $6, Impossible Patty $7
                  </p>
                )}
                {category === "BURGERS & SANDWICHES" && (
                  <div className="text-sm text-muted-foreground italic mb-4 space-y-1">
                    <p>Served with fries and sriracha ketchup, gluten-free buns available</p>
                    <p>Add Cheese $2, Extra Patty $6, Bacon $3, Avocado $3, Caramelized Onion $2, Sub Impossible Patty $7</p>
                  </div>
                )}
                {category === "Signature COCKTAILS" && (
                  <p className="text-sm text-muted-foreground italic mb-4">All Signature Cocktails $18</p>
                )}
                {category === "THE 23 COLLECTION" && (
                  <p className="text-sm text-muted-foreground italic mb-4">All '23 Collection' cocktails $23</p>
                )}
                {category === "MOCKTAILS" && (
                  <p className="text-sm text-muted-foreground italic mb-4">All Mocktails $14</p>
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
              <a href="http://resy.com/link?venue_id=91610" target="_blank" rel="noopener noreferrer">
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
