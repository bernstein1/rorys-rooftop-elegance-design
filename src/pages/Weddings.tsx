import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/contactInfo";

const OFFERINGS = [
  {
    title: "Rooftop Wedding Ceremonies Above the City",
    desc: "Say your vows beneath an open sky with the Manhattan skyline as your backdrop — floral arch, petal-lined aisle, and seating for your closest people.",
  },
  {
    title: "Cocktail Hour & Wedding Receptions",
    desc: "Handcrafted cocktails, passed bites, and an all-glass atrium that keeps the celebration going rain or shine.",
  },
  {
    title: "Rehearsal Dinners, Showers & Engagement Parties",
    desc: "Semi-private spaces for engagement parties, bridal showers, and rehearsal dinners with curated food and drink packages.",
  },
  {
    title: "Micro Weddings & Full Rooftop Buyouts",
    desc: "From intimate NYC elopements for thirty to a full rooftop buyout, our events team handles every detail from setup to last toast.",
  },
];

const FAQS = [
  {
    q: "How many guests can your NYC rooftop wedding venue hold?",
    a: "Rory's Rooftop hosts intimate ceremonies of around 30 guests up to full rooftop buyouts for larger wedding receptions. Our events team will confirm exact capacity for your date and setup.",
  },
  {
    q: "Where is the rooftop located in New York City?",
    a: `We're at ${CONTACT_INFO.addressLines.join(", ")}, in the Meatpacking District on Manhattan's West Side, steps from the High Line and Chelsea Market.`,
  },
  {
    q: "What happens if it rains on our wedding day?",
    a: "The rooftop includes an all-glass covered atrium, so your ceremony and reception continue with skyline views regardless of the weather.",
  },
  {
    q: "Do you offer wedding food and drink packages?",
    a: "Yes. We build custom packages around passed hors d'oeuvres, plated or family-style dinner, and craft cocktail bar service. Share your date and guest count and we'll send options.",
  },
  {
    q: "How do we book a rooftop wedding at Rory's Rooftop?",
    a: `Send an inquiry through our contact page or email ${CONTACT_INFO.email} with your preferred date, guest count, and event type, and our events team will follow up with availability and pricing.`,
  },
];

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    name: "Rory's Rooftop — Rooftop Wedding Venue",
    description:
      "Rooftop wedding venue in NYC's Meatpacking District hosting ceremonies, receptions, and rehearsal dinners with Manhattan skyline views.",
    url: "https://rorysrooftop.com/weddings",
    image: "https://rorysrooftop.com/lovable-uploads/wedding-aerial.jpg",
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.addressLines[0],
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10014",
      addressCountry: "US",
    },
    areaServed: "New York City",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rorysrooftop.com/" },
      { "@type": "ListItem", position: 2, name: "Weddings", item: "https://rorysrooftop.com/weddings" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

const Weddings = () => {
  return (
    <div id="main" className="min-h-screen bg-background">
      <SEO
        title={"Rooftop Weddings NYC | Rory's Rooftop Wedding Venue"}
        description={
          "Rooftop wedding venue in New York City. Host your ceremony, reception, or rehearsal dinner above the Meatpacking District with skyline views."
        }
        path="/weddings"
        image="/lovable-uploads/wedding-aerial.jpg"
        jsonLd={JSON_LD}
      />
      <Navigation />

      {/* Hero */}
      <section className="relative pt-20">
        <img
          src="/lovable-uploads/wedding-aerial.jpg"
          alt="Aerial view of a rooftop wedding venue in New York City set with rows of wooden chairs beside a glass-covered atrium at Rory's Rooftop"
          className="w-full h-[60vh] md:h-[70vh] object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 top-20 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 top-20 p-8 md:p-16 max-w-7xl mx-auto">
          <h1 className="font-hero text-4xl md:text-6xl text-primary-foreground mb-4">
            Rooftop Weddings in New York City
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            An open-air ceremony, a glass-covered reception, and the Manhattan skyline standing witness
            at Rory's Rooftop in the Meatpacking District.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pt-20 pb-10 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            A Rooftop Wedding Venue in the Meatpacking District
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            Perched above 14th Street, Rory's Rooftop pairs downtown Manhattan skyline views with warm,
            considered hospitality. Whether you're planning an intimate NYC ceremony for thirty or a full
            rooftop wedding reception, our events team shapes the space — and the evening — around you.
            We're minutes from the High Line, Chelsea Market, and the West Village, with hotels and
            transit close by for out-of-town guests.
          </p>
        </div>
      </section>

      {/* Offerings + ceremony image */}
      <section className="pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/lovable-uploads/wedding-ceremony.jpg"
              alt="Rooftop wedding ceremony in NYC with a white floral arch, draped fabric, and petal-lined aisle overlooking the Meatpacking District skyline"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
              loading="lazy"
            />
          </div>
          <div className="bg-secondary p-8 md:p-12 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Weddings & Celebrations We Host
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

      {/* Planning details */}
      <section className="pb-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Planning Your NYC Rooftop Wedding
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">The Space</h3>
              <p className="text-foreground/80">
                Open-air rooftop for ceremonies, plus an all-glass atrium for dinner and dancing — a
                rain-or-shine venue with skyline views in every direction.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Food & Drink</h3>
              <p className="text-foreground/80">
                Custom wedding packages built from our{" "}
                <a href="/menu" className="text-primary underline hover:opacity-80">
                  seasonal menu
                </a>{" "}
                and craft cocktail program, from passed bites to full bar service.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Getting Here</h3>
              <p className="text-foreground/80">
                {CONTACT_INFO.addressLines.join(", ")} — in the Meatpacking District, steps from the High
                Line and the A/C/E and L trains at 14th Street.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
            Rooftop Wedding FAQs
          </h2>
          <dl className="space-y-6">
            {FAQS.map((f) => (
              <div key={f.q}>
                <dt className="text-xl font-semibold text-primary mb-1">{f.q}</dt>
                <dd className="text-foreground/80">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Start Planning Your Rooftop Wedding
          </h2>
          <p className="text-lg text-foreground mb-8">
            Tell us about your date and guest count — our events team will walk you through spaces,
            packages, and availability. You can also browse our{" "}
            <a href="/events" className="text-primary underline hover:opacity-80">
              private events
            </a>{" "}
            offerings.
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
