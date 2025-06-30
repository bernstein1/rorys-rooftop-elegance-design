
import * as React from "react";
import { CalendarDays } from "lucide-react";
import Navigation from "@/components/Navigation";
import EmailSignup from "@/components/EmailSignup";

const EVENTS = [
  {
    title: "Pride Party – Celebrate Love & Unity",
    date: "Sunday, June 29, 12:00 PM – 10:00 PM",
    image: "/lovable-uploads/pride.png",
    desc: "The perfect post-parade destination! Join us for an unforgettable Pride celebration with rainbow cocktails, DJ sets, and panoramic city views. Love wins here.",
  },
  {
    title: "4th of July Party",
    date: "Friday, July 4, 8:00 PM",
    image: "/lovable-uploads/4th.png",
    desc: "Celebrate Independence Day at Rory’s Rooftop! Sip red-white-and-blue cocktails under the stars, mingle with friends old and new, and make July 4th in NYC unforgettable.",
  },
  {
    title: "Rosé All Day – Summer Brunch",
    date: "Sunday, June 23, 12:00 PM",
    image: "/lovable-uploads/aperol.png",
    desc: "Our weekend brunch, perfected. Enjoy a curated menu of brunch favorites and, of course, free-flowing rosé.",
  },
  {
    title: "Rooftop Movie Night",
    date: "Wednesday, June 26, 9:00 PM",
    image: "/lovable-uploads/cheers.png",
    desc: "Your favorite films have never looked this good. Join us for cinema under the stars, complete with themed cocktails and gourmet popcorn.",
  },
  {
    title: "Acoustic Sessions: Unplugged",
    date: "Thursday, June 27, 7:00 PM",
    image: "/lovable-uploads/meal.png",
    desc: "Experience the magic of live, unplugged music in an intimate setting. A truly special night.",
  },
  {
    title: "Weekend Yoga & Mimosas",
    date: "Saturday, June 29, 10:00 AM",
    image: "/lovable-uploads/meal-cheers.png",
    desc: "Salute the sun (and the skyline) with a morning yoga class, then reward yourself with well-deserved mimosas.",
  },
];

const Events = () => {
  return (
    <div id="main" className="min-h-screen pt-0 pb-16 bg-background">
      <Navigation />
      <section className="max-w-6xl mx-auto px-4 pt-32">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-10 text-center">
          Happenings at The Rooftop
        </h1>
        <p className="text-lg md:text-xl mb-10 text-muted-foreground text-center max-w-2xl mx-auto">
          From sunset DJ sets to exclusive tasting menus, there's always something happening at Rory's. See what's on.
        </p>
        <div className="relative">
          <div className="overflow-x-scroll overflow-y-hidden pb-4 custom-scrollbar">
            <div className="flex gap-8 w-max">
              {EVENTS.map((event, i) => (
                <div
                  key={i}
                  className="w-80 sm:w-96 flex-shrink-0 rounded-2xl shadow-xl hover-scale transition-all group bg-secondary flex flex-col"
                >
                  <div className="overflow-hidden rounded-t-2xl">
                    <img src={event.image} alt={event.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <h2 className="text-2xl font-semibold text-primary mb-2">{event.title}</h2>
                    <div className="flex gap-4 text-muted-foreground text-sm items-center">
                      <CalendarDays className="w-5 h-5" />
                      <span>{event.date}</span>
                    </div>
                    <p className="text-base text-foreground/80">{event.desc}</p>
                    <div className="mt-auto">
                      <a
                        href="https://resy.com/rorysrooftop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full bg-secondary text-primary px-8 py-3 font-medium hover:bg-[hsl(46,46%,90%)] transition-colors"
                        aria-label="RSVP (opens in a new tab)"
                      >
                        RSVP
                        <span className="sr-only">(opens in a new tab)</span>
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
      </section>
      <div className="mt-16">
        <EmailSignup />
      </div>
    </div>
  );
};

export default Events;
