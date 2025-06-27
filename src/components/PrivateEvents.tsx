
import { Button } from "@/components/ui/button";

const PrivateEvents = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/lovable-uploads/99403d6d-9c27-480f-8bdd-fe1acbeaa5d9.png"
              alt="Private event space at Rory's Rooftop with guests enjoying the ambiance"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>

          {/* Content */}
          <div className="bg-secondary p-8 md:p-12 rounded-lg">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              PRIVATE EVENTS
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Whether you're planning a birthday bash, corporate mixer, engagement celebration, or just a good excuse to gather your crew — Rory's Rooftop is the place to elevate the moment. With panoramic views, handcrafted cocktails, and customizable spaces, we make group events feel effortless and unforgettable.
            </p>
            
            <h3 className="text-2xl font-semibold text-primary mb-4">What We Offer:</h3>
            <ul className="space-y-3 text-foreground mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Semi-private and full rooftop buyouts
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Curated food & drink packages
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Dedicated event staff
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Rooftop vibes that seal the deal
              </li>
            </ul>

            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <a href="/contact">
                INQUIRE TODAY
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateEvents;
