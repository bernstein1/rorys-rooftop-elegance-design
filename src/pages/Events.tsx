
import * as React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import EmailSignup from "@/components/EmailSignup";
import { Calendar } from "@/components/ui/calendar";

const EVENTS = [
  {
    title: "Sunset Cocktails & Live DJ",
    date: "Friday, June 21, 8:00 PM",
    location: "Rory's Rooftop",
    image: "/lovable-uploads/6a6bcbe3-b86b-441d-a54c-3c7bd47ea431.png",
    desc: "Celebrate the solstice with signature cocktails and skyline views. RSVP recommended.",
  },
  {
    title: "Rosé All Day – Summer Brunch",
    date: "Sunday, June 23, 12:00 PM",
    location: "Rory's Rooftop",
    image: "/lovable-uploads/97800ff3-e4bd-426e-974e-7ae6c3b68c9e.png",
    desc: "A seasonal brunch series featuring curated small plates and endless rosé.",
  },
];

const Events = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen pt-0 pb-16" style={{ backgroundColor: "hsl(346, 56%, 86%)" }}>
      <Navigation />
      <section className="max-w-6xl mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-10 text-center">
          Events at Rory's Rooftop
        </h1>
        <p className="text-lg md:text-xl mb-10 text-muted-foreground text-center max-w-2xl mx-auto">
          Discover upcoming social events, themed nights, and special experiences overlooking NYC.
        </p>
        <div className="relative">
          <div className="overflow-x-scroll overflow-y-hidden pb-4 custom-scrollbar">
            <div className="flex gap-8 w-max">
              {EVENTS.map((event, i) => (
                <div
                  key={i}
                  className="w-80 sm:w-96 flex-shrink-0 rounded-2xl shadow-lg hover-scale transition-all group"
                  style={{ backgroundColor: "hsl(46, 46%, 95%)" }} // beige for event cards
                >
                  <div className="overflow-hidden rounded-t-2xl">
                    <img src={event.image} alt={event.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <h2 className="text-2xl font-semibold text-primary mb-2">{event.title}</h2>
                    <div className="flex gap-4 text-muted-foreground text-sm items-center">
                      <CalendarDays className="w-5 h-5" />
                      <span>{event.date}</span>
                      <MapPin className="w-4 h-4 ml-4" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-base text-foreground/80">{event.desc}</p>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="inline-block rounded-full bg-[hsl(46,46%,95%)] text-primary px-8 py-3 font-medium hover:bg-[hsl(46,46%,90%)] transition-colors"
                      >
                        RSVP
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-base">
            More events launching soon. <a href="#contact" className="underline text-primary">Contact us</a> for private bookings.
          </p>
        </div>
        {/* Calendar Section */}
        <div className="mt-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Event Calendar
          </h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border bg-[hsl(46,46%,95%)]"
          />
        </div>
      </section>
      <div className="mt-16">
        <EmailSignup />
      </div>
    </div>
  );
};

export default Events;
