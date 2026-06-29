import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MENU_DATA: Record<string, { name: string; description?: string; price: string; addons?: string }[]> = {
  "Shareable PLATES": [
    { name: "Smoked Chicken Nachos", description: "smoked pulled chicken, jack cheese, sweet corn chow chow, poblano crema, fresno chiles, cilantro, house salsa roja", price: "$22", addons: "add guacamole 3" },
    { name: "House Cut Fries", description: "served with all the sauces", price: "$16" },
    { name: "Spicy Tuna Crispy Rice", description: "ahi tuna, gochujang aioli, avocado, sliced fresno, togarashi", price: "$16" },
    { name: "Shrimp Toast", description: "seasoned shrimp, crispy brioche, gochujang aioli, charred scallion aioli, micro cilantro", price: "$15" },
    { name: "Grilled Wings", description: "basil-pecorino ranch, house fresno hot sauce", price: "$18" },
  ],
  "Stacked HANDHELDS": [
    { name: "Ahi Tuna Burger", description: "seared ahi burger, smashed avocado, shredded romaine, pickled red onion, lemon-wasabi mayo, house-baked sesame seed bun", price: "$24" },
    { name: "Smash Burger", description: "double smash patty, cooper's sharp, house pickles, shredded lettuce, tomato, dijonnaise, house-baked sesame seed bun", price: "$25" },
    { name: "Rory's Chicken Club", description: "grilled chicken cutlet, applewood bacon, provolone, avocado, tomato, pickled red onions, arugula, pepperoncini aioli, toasted ciabatta", price: "$26" },
    { name: "Hot Chicken Sandwich", description: "crispy chicken thigh, sichuan peppercorn rub, green cabbage, sriracha pickles, charred scallion mayo, house-baked sesame seed bun", price: "$24" },
  ],
  "Signature ENTRÉES": [
    { name: "Pipette alla Vodka", description: "vodka sauce, fresno, pecorino, basil", price: "$25", addons: "add crispy or grilled chicken 8" },
    { name: "Miso Salmon", description: "miso glaze, broccolini, ginger rice, micro cilantro", price: "$27" },
    { name: "Steak Frites", description: "american wagyu flat iron steak, red chimichurri, house cut fries, charred scallion aioli", price: "$48" },
  ],
  "Fresh SALADS": [
    { name: "Kale Caesar", description: "massaged kale, miso caesar dressing, pecorino, panko breadcrumbs", price: "$18", addons: "add crispy or grilled chicken 8, or salmon 12" },
    { name: "Panzanella", description: "arugula, heirloom cherry tomatoes, pickled red onion, capers, grilled ciabatta, lemon-chili vinaigrette, whipped tahini", price: "$18", addons: "add crispy or grilled chicken 8, or salmon 12" },
  ],
  "Sweet FINISHES": [
    { name: "Skillet Cookie", description: "brown butter chocolate chip cookie, vanilla ice cream, sprinkles", price: "$18" },
  ],
  "Signature COCKTAILS": [
    { name: "Transfusion", description: "Vodka, Blackberry Liqueur, Lemon, Ginger Beer", price: "$18" },
    { name: "Tee Time Espresso", description: "Vanilla Vodka, Coffee Liqueur, Cold Brew, Sugarcane", price: "$18" },
    { name: "Green Jacket", description: "Gin, Cucumber Juice, Basil, Lime, Sugarcane", price: "$18" },
    { name: "Clubhouse Cooler", description: "Gin, Watermelon Syrup, Lemon, Seltzer", price: "$18" },
    { name: "Water Hazard", description: "Vodka, Blue Curacao, Lemon, Sugarcane, Saline, Seltzer", price: "$18" },
    { name: "Smoky Fairway", description: "Tequila, Mezcal, Pineapple, Lime", price: "$18" },
    { name: "Birdie Breeze", description: "Tequila, Hibiscus Syrup, Lemon, Seltzer", price: "$18" },
    { name: "Tropic Tides", description: "White Rum, Passion Fruit, Pineapple, Coconut", price: "$18" },
  ],
  "MOCKTAILS": [
    { name: "Berry Basil Smash", description: "Mixed Berries, Basil, Lemon, Simple Syrup, Seltzer", price: "$14" },
    { name: "Tropical Ginger Cooler", description: "Pineapple, Coconut, Lime, Ginger Beer", price: "$14" },
    { name: "Chip Crush", description: "Strawberry, Passionfruit, Orange, Seltzer", price: "$14" },
  ],
  "DRAFT BEER": [
    { name: "Michelob Ultra", price: "$10" },
    { name: "Miller Lite", price: "$10" },
    { name: "Modelo", price: "$10" },
    { name: "Heineken", price: "$10" },
    { name: "Coney Island Mermaid Pilsner", price: "$10" },
    { name: "Kona Big Wave", price: "$10" },
    { name: "Brooklyn Brewery Lager", price: "$10" },
    { name: "Dogfish Head 60-Minute IPA", price: "$10" },
    { name: "Bells Hazy Hearted IPA", price: "$10" },
    { name: "Sam Adam's Rotating", price: "$10" },
  ],
  "BOTTLES & CANS": [
    { name: "Sun Cruiser", price: "$10" },
    { name: "High Noon", price: "$10" },
    { name: "Budweiser", price: "$10" },
    { name: "Bud Light", price: "$10" },
    { name: "Athletic N/A Golden", price: "$10" },
    { name: "Athletic N/A IPA", price: "$10" },
  ],
  "WINE": [
    { name: "House Cabernet", price: "$14" },
    { name: "House Pinot Noir", price: "$14" },
    { name: "House Sauvignon Blanc", price: "$14" },
    { name: "House Chardonnay", price: "$14" },
    { name: "House Rosé", price: "$14" },
    { name: "House Prosecco", price: "$14" },
  ],
  "NON-ALCOHOLIC": [
    { name: "Icelandic Glacial Sparkling", price: "$9" },
    { name: "Icelandic Glacial Still", price: "$9" },
    { name: "Redbull", price: "$7" },
    { name: "Coca Cola", price: "$4" },
  ],
};

export default function Menu() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <h1 className="font-hero text-4xl md:text-6xl text-center mb-4">Menu</h1>
        <p className="font-body text-center text-muted-foreground mb-10 italic text-sm">
          Please notify your server of any food allergies or dietary restrictions. Gluten-friendly options available.
        </p>
        {Object.entries(MENU_DATA).map(([category, items]) => (
          <section key={category} className="mb-12">
            <h2 className="font-section-header text-2xl border-b-2 border-primary/20 pb-2 mb-6">{category}</h2>
            <div className="grid gap-6">
              {items.map((item) => (
                <div key={item.name} className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    {item.description && (
                      <p className="text-sm text-muted-foreground italic">{item.description}</p>
                    )}
                    {item.addons && (
                      <p className="text-xs text-muted-foreground mt-1">{item.addons}</p>
                    )}
                  </div>
                  <span className="font-bold text-lg text-primary whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="text-center mt-16 p-8 bg-secondary/30 rounded-2xl">
          <h2 className="font-section-header text-2xl mb-4">Ready to Experience Rory's?</h2>
          <p className="font-body text-muted-foreground mb-8">
            Join us for an unforgettable rooftop experience in the heart of the Meatpacking District.
          </p>
          <a
            href="https://resy.com/rorysrooftop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full font-medium hover:bg-primary/90 transition-all transform hover:scale-105"
          >
            Make a Reservation
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
