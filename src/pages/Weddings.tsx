import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/contactInfo";

const OFFERINGS = [
  {
    title: "Ceremonies Above the City",
    desc: "Say your vows beneath an open sky with the Meatpacking skyline as your backdrop — floral arch, petal-lined aisle, and seating for your closest people.",
  },
  {
    title: "Cocktail Hour & Receptions",
    desc: "Handcrafted cocktails, passed bites, and an all-glass atrium that keeps the celebration going rain or shine.",
  },
  {
    title: "Rehearsal Dinners & Showers",
    desc: "Semi-private spaces for engagement parties, bridal showers, and rehearsal dinners with curated food and drink packages.",
  },
  {
    title: "Full Rooftop Buyouts",
    desc: "Take the entire rooftop for the day, with dedicated event staff handling every detail from setup to last toast.",
  },
];

const Weddings = () => {
  return (
    <div id="main" className="min-h-screen bg-background">
      <SEO
        title={"Rooftop Weddings NYC | Rory's Rooftop"}
        description={"Host your wedding ceremony, reception, or rehearsal dinner on Rory's Rooftop in NYC's Meatpacking District."}
        path="/weddings"
      />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-20">
        <img
          src="/lovable-uploads/wedding-aerial.jpg"
          alt="Aerial view of Rory's Rooftop set for a wedding ceremony with rows of wooden chairs and a glass-covered atrium"
          className="w-full h-[60vh] md:h-[70vh] object-cover"
        />
        <div className="absolute inset-0 top-20 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 top-20 p-8 md:p-16 max-w-7xl mx-auto">
          <h1 className="font-hero text-4xl md:text-6xl text-primary-foreground mb-4">
            Weddings at Rory's Rooftop
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            An open-air ceremony, a glass-covered reception, and the New York skyline standing witness.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pt-20 pb-10 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Your Day, Elevated
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            Perched above 14th Street, Rory's Rooftop pairs downtown skyline views with warm, considered
            hospitality. Whether you're planning an intimate ceremony for thirty or a full rooftop
            celebration, our team shapes the space — and the evening — around you.
          </p>
        </div>
      </section>

      {/* Offerings + ceremony image */}
      <section className="pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/lovable-uploads/wedding-ceremony.jpg"
              alt="Rooftop wedding ceremony at Rory's Rooftop with a floral arch, draped fabric, and petal-lined aisle overlooking the Meatpacking District"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
          <div className="bg-secondary p-8 md:p-12 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              What We Host
            </h2>
            <ul className="space-y-6">
              {OFFERINGS.map((item) => (
                <li key={item.title}>
                  <h3 className="text-xl font-semibold text-primary mb-1">{item.title}</h3>
                  <p className="text-foreground/80">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Start Planning
          </h2>
          <p className="text-lg text-foreground mb-8">
            Tell us about your date and guest count — our events team will walk you through spaces,
            packages, and availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <a href="/contact">INQUIRE TODAY</a>
            </Button>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-primary underline hover:opacity-80"
            >
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Weddings;
