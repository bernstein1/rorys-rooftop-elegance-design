import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

type MenuItem = {
  name: string;
  description?: string;
  price?: string;
};

type MenuSection = {
  title: string;
  subtitle?: string;
  notes?: string[];
  items: MenuItem[];
};

const CORE_MENU_SECTIONS: MenuSection[] = [
  {
    title: "SHAREABLES",
    items: [
      {
        name: "WINGS",
        price: "$18",
        description: "BBQ GF | Buffalo GF | Garlic Parm GF | Sweet & Sour. Carrots, celery, choice of ranch or blue cheese.",
      },
      {
        name: "BBQ BRISKET SLIDERS",
        price: "$17",
        description: "House BBQ sauce, ranch slaw, pickles.",
      },
      {
        name: "ELOTE RIBS",
        price: "$15",
        description: "Black truffle aioli, cotija, lime.",
      },
      {
        name: "CHIPS & DIP",
        price: "$15",
        description: "House tortilla chips, salsa roja, guacamole.",
      },
      {
        name: "BRUSSELS SPROUTS",
        price: "$16",
        description: "Balsamic glaze, parmesan, pickled onions.",
      },
      {
        name: "LOADED CHEESE FRIES",
        price: "$18",
        description: "Thick cut fries, Monterey Jack, bacon, Red Dragon sauce, ranch, scallions.",
      },
      {
        name: "POTATO SKINS",
        price: "$19",
        description: "Monterey Jack, bacon, Red Dragon sauce, ranch, scallions.",
      },
      {
        name: "TUNA TATAKI",
        price: "$18",
        description: "Seared ahi tuna, chili ponzu, Fresno, togarashi, micro cilantro.",
      },
      {
        name: "FIRE SHRIMP",
        price: "$19",
        description: "Cajun butter, tomato, scallion, cilantro, toasted ciabatta.",
      },
    ],
  },
  {
    title: "SIGNATURE ENTREES",
    items: [
      {
        name: "HULI-HULI CHICKEN",
        price: "$26",
        description: "Grilled chicken, Huli-Huli sauce, pineapple fried rice, cucumber salad.",
      },
      {
        name: "PAN-SEARED SALMON",
        price: "$27",
        description: "Parmesan panko crust, truffle aioli, rice, broccolini.",
      },
      {
        name: "STEAK FRITES",
        price: "$32",
        description: "8oz flat iron steak, chimichurri, thick cut fries, broccolini.",
      },
      {
        name: "SURF & TURF",
        price: "$38",
        description: "8oz flat iron steak, fire shrimp, baked potato, broccolini.",
      },
      {
        name: "CAJUN PASTA",
        price: "$20",
        description: "Penne pasta, Cajun Alfredo, parmesan, toasted ciabatta. +Chicken 8, +Shrimp 9, +4oz Steak 11, +Salmon 12.",
      },
    ],
  },
  {
    title: "SALADS",
    notes: ["+Chicken 8, +Shrimp 9, +Salmon 12, +4oz Steak 11"],
    items: [
      {
        name: "GARDEN SALAD",
        price: "$19",
        description: "Mixed greens, roasted beets, orange slices, avocado, grape tomato, fresh mozzarella, pecans, Italian vinaigrette.",
      },
      {
        name: "CAESAR SALAD",
        price: "$17",
        description: "Romaine lettuce, parmesan cheese, croutons, Caesar dressing.",
      },
      {
        name: "CUCUMBER SALAD",
        price: "$19",
        description: "Cucumber, carrots, red onion, sundried tomato, sesame dressing.",
      },
    ],
  },
  {
    title: "BURGERS & SANDWICHES",
    notes: [
      "Served with fries, gluten-free buns available.",
      "+Cheese 2, +Bacon 3, +Avocado 3, Sub GF Bun 3, Sub Impossible Patty 7",
    ],
    items: [
      {
        name: "DOUBLE SMASH BURGER",
        price: "$25",
        description: "Double smash patty, American cheese, house sauce, lettuce, tomato, pickle.",
      },
      {
        name: "BARN YARD BURGER",
        price: "$27",
        description: "Double smash patty, cheddar cheese, bacon, egg, house sauce, lettuce, tomato, pickle.",
      },
      {
        name: "RODEO BURGER",
        price: "$27",
        description: "Double smash patty, pepperjack, bacon, BBQ sauce, fried onions, jalapeño.",
      },
      {
        name: "FRIED CHICKEN SANDWICH",
        price: "$23",
        description: "Fried chicken, ranch slaw, Red Dragon sauce.",
      },
      {
        name: "RORY'S LUCKY CHICKEN SANDWICH",
        price: "$23",
        description: "Grilled chicken, avocado, sundried tomato, Dijon aioli.",
      },
      {
        name: "BRISKET GRILLED CHEESE",
        price: "$25",
        description: "Sliced BBQ brisket, pepperjack, cheddar, lettuce, tomato, pickle.",
      },
    ],
  },
  {
    title: "DESSERTS",
    items: [
      {
        name: "BREAD PUDDING",
        price: "$14",
        description: "Bourbon glaze, vanilla ice cream, pecan crumble.",
      },
      {
        name: "BROWNIE",
        price: "$15",
        description: "Vanilla ice cream, brownie crumbles, fudge sauce.",
      },
      {
        name: "APPLE PIE DUMPLINGS",
        price: "$14",
        description: "Vanilla ice cream, caramel sauce.",
      },
    ],
  },
  {
    title: "SIGNATURE COCKTAILS",
    subtitle: "18",
    items: [
      { name: "TRANSFUSION", description: "Vodka, blackberry liqueur, lemon, ginger beer." },
      { name: "TEE TIME ESPRESSO", description: "Vanilla vodka, coffee liqueur, cold brew, simple syrup." },
      { name: "GREEN JACKET", description: "Gin, cucumber juice, basil, lime." },
      { name: "CLUBHOUSE COOLER", description: "Gin, watermelon syrup, lemon, seltzer." },
      { name: "SMOKY FAIRWAY", description: "Tequila, mezcal, pineapple, lime." },
      { name: "BIRDIE BREEZE", description: "Tequila, hibiscus syrup, lemon, seltzer." },
      { name: "TROPIC TIDES", description: "White rum, passion fruit, pineapple, coconut." },
      { name: "APPLE ALBATROSS", description: "Brandy, ginger liqueur, apple." },
    ],
  },
  {
    title: "23 COLLECTION",
    subtitle: "23",
    items: [
      {
        name: "CINCORO'S FAMOUS PALOMA",
        description: "Cincoro Tequila Blanco, grapefruit, lime, jalapeño, agave, seltzer.",
      },
      {
        name: "GOLDEN SUNRISE",
        description: "Cincoro Tequila Blanco, mango, lime, chili honey.",
      },
      {
        name: "THE CLOVER",
        description: "Cincoro Tequila Blanco, peach liqueur, lemon, simple syrup.",
      },
    ],
  },
  {
    title: "MOCKTAILS",
    subtitle: "14",
    items: [
      {
        name: "BERRY BASIL SMASH",
        description: "Mixed berries, basil, lemon, simple syrup, seltzer.",
      },
      {
        name: "TROPICAL GINGER COOLER",
        description: "Pineapple, coconut, lime, ginger beer.",
      },
      {
        name: "CHIP CRUSH",
        description: "Strawberry, passionfruit, orange, seltzer.",
      },
    ],
  },
  {
    title: "DRAFT BEER",
    subtitle: "10",
    items: [
      { name: "BROOKLYN LAGER" },
      { name: "CONEY ISLAND PILSNER" },
      { name: "MILLER LITE" },
      { name: "MODELO" },
      { name: "HEINEKEN" },
      { name: "MONTAUK WAVE CHASER IPA" },
      { name: "ROTATING IPA" },
    ],
  },
  {
    title: "WINE",
    subtitle: "14",
    items: [
      { name: "HOUSE CABERNET" },
      { name: "HOUSE PINOT NOIR" },
      { name: "HOUSE SAUVIGNON BLANC" },
      { name: "HOUSE CHARDONNAY" },
      { name: "HOUSE ROSE" },
      { name: "HOUSE PROSECCO" },
    ],
  },
  {
    title: "BOTTLED BEER",
    subtitle: "10",
    items: [
      { name: "MILLER LITE" },
      { name: "MODELO" },
      { name: "HEINEKEN" },
      { name: "HEINEKEN 00" },
      { name: "SURFSIDE" },
      { name: "SUNTORY -196" },
    ],
  },
  {
    title: "NON-ALCOHOLIC",
    items: [
      { name: "COKE PRODUCTS", price: "$4" },
      { name: "RED BULL", price: "$6" },
    ],
  },
  {
    title: "WATER",
    items: [
      { name: "ACQUA PANNA", price: "$7" },
      { name: "SAN PELLEGRINO", price: "$7" },
    ],
  },
];

const BRUNCH_MENU_SECTIONS: MenuSection[] = [
  {
    title: "BRUNCH ENTREES",
    notes: ["Saturday & Sundays", "Served 12PM-4PM"],
    items: [
      {
        name: "THICK CUT FRENCH TOAST",
        price: "$18",
        description: "Battered thick-cut bread, topped with fresh fruit, berry coulis, served with syrup.",
      },
      {
        name: "SHORT STACK",
        price: "$16",
        description: "3 classic buttermilk pancakes, served with syrup and butter.",
      },
      {
        name: "AVOCADO TOAST",
        price: "$18",
        description: "Artisan bread, poached egg, grape tomatoes, hot honey, everything bagel season, chili flakes.",
      },
      {
        name: "STEAK & EGGS",
        price: "$32",
        description: "8oz marinated skirt steak, 2 eggs, breakfast potatoes, salsa verde.",
      },
      {
        name: "BRISKET BREAKFAST BOWL",
        price: "$24",
        description: "Brisket, potatoes, salsa verde, peppers, onions, pepper jack cheese, egg, topped with Red Dragon sauce and green onions.",
      },
      {
        name: "CHILAQUILES",
        price: "$18",
        description: "Salsa roja, corn tortillas, over easy egg, jalapeños, avocado, lime crema and green onions.",
      },
    ],
  },
  {
    title: "BRUNCH SANDWICHES",
    notes: ["Choice of side: fresh fruit, breakfast potatoes, french fries."],
    items: [
      {
        name: "SUNRISE SANDWICH",
        price: "$20",
        description: "Artisan bread, egg whites, cheddar cheese, spinach, avocado, house sauce.",
      },
      {
        name: "BREAKFAST SMASHBURGER",
        price: "$25",
        description: "Two smash patties, bacon, egg, cheese, lettuce, tomato, pickle.",
      },
      {
        name: "CHICKEN & BISCUITS",
        price: "$20",
        description: "Fried chicken, buttermilk biscuit, pepper jack cheese, hot honey butter.",
      },
      {
        name: "THE CLASSIC",
        price: "$19",
        description: "Bacon, egg, and cheese.",
      },
      {
        name: "THE SANCTUARY SANDWICH",
        price: "$19",
        description: "Artisan bread, over easy eggs, lettuce, tomato, pickle, Dijon aioli.",
      },
      {
        name: "BREAKFAST BURRITO",
        price: "$20",
        description: "Scrambled eggs, bacon, sausage, pepper jack and Monterey cheese blend, potatoes, pico de gallo, served with salsa.",
      },
    ],
  },
  {
    title: "BRUNCH SIDES",
    items: [
      { name: "EGGS", price: "$6" },
      { name: "BACON", price: "$6" },
      { name: "SAUSAGE", price: "$6" },
      { name: "TOAST", price: "$5" },
      { name: "BREAKFAST POTATOES", price: "$5" },
      { name: "FRESH FRUIT", price: "$5" },
      { name: "AVOCADO", price: "$5" },
    ],
  },
  {
    title: "BRUNCH COCKTAILS",
    items: [
      {
        name: "BOTTOMLESS BLOODY MARYS, MIMOSAS & DRAFT MILLER LITE",
        price: "$25",
        description: "90 minute time limit, does not extend into mini golf courses.",
      },
      { name: "ESPRESSO MARTINI", price: "$16" },
      { name: "APEROL SPRITZ", price: "$16" },
      { name: "HUGO SPRITZ", price: "$16" },
    ],
  },
];

const ALL_MENU_SECTIONS = [...CORE_MENU_SECTIONS, ...BRUNCH_MENU_SECTIONS];

const MenuPage = () => {
  return (
    <div id="main" className="min-h-screen bg-secondary text-foreground">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Rory's Rooftop Bar Menu</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated collection of vibrant cocktails, fresh plates, rooftop favorites, and weekend brunch.
            </p>
          </div>

          <div className="space-y-12">
            {ALL_MENU_SECTIONS.map((section) => (
              <section key={section.title}>
                <div className="mb-6 border-b-2 border-primary/20 pb-3">
                  <h2 className="text-3xl font-bold text-primary">
                    {section.title}
                    {section.subtitle ? <span className="ml-3 text-2xl text-foreground">{section.subtitle}</span> : null}
                  </h2>
                  {section.notes?.map((note) => (
                    <p key={note} className="mt-2 text-sm text-muted-foreground italic">
                      {note}
                    </p>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {section.items.map((item) => (
                    <div
                      key={`${section.title}-${item.name}`}
                      className="flex flex-row justify-between items-start gap-4 py-3 border-b border-muted/20 last:border-b-0"
                    >
                      <div className="flex-1 pr-4">
                        <h3 className="text-lg font-semibold text-foreground mb-1">{item.name}</h3>
                        {item.description ? (
                          <p className="text-sm text-muted-foreground italic leading-relaxed">{item.description}</p>
                        ) : null}
                      </div>
                      {item.price ? <p className="text-lg font-semibold text-foreground whitespace-nowrap">{item.price}</p> : null}
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
              <p>Certain menu items can be made vegan. Please ask your server for details.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;