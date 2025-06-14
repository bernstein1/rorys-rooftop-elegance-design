
import Navigation from "@/components/Navigation";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need a reservation?",
    answer: "Reservations are highly recommended, especially on weekends. Walk-ins are welcome based on availability.",
  },
  {
    question: "Is there a dress code?",
    answer: "Smart casual attire is encouraged. Please, no beachwear or athletic wear.",
  },
  {
    question: "Are children allowed?",
    answer: "Rory’s Rooftop is 21+ only. Valid government-issued ID is required for all guests.",
  },
  {
    question: "Do you host private events?",
    answer: "Absolutely! We welcome private events and group bookings. Please contact us for event packages and availability.",
  },
  {
    question: "Can I bring my own cake or outside food?",
    answer: "Outside food and beverages are not permitted, but we’re happy to assist with special arrangements for celebrations.",
  },
  {
    question: "Is the rooftop accessible for guests with disabilities?",
    answer: "Yes, our facilities are accessible and we’re happy to accommodate additional needs. Please let us know in advance.",
  },
  {
    question: "How do I find the rooftop?",
    answer: "We are located on the roof of Puttery. Take the elevator and press 6 to reach the rooftop.",
  },
];

export default function FAQ() {
  return (
    <>
      <Navigation />
      <section className="min-h-screen bg-[hsl(346,56%,86%)] flex items-center justify-center py-12 md:py-20 pt-36 overflow-x-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 items-center">
            <div className="hidden lg:flex justify-center">
              <img
                src="/lovable-uploads/717ae8bd-32a5-4dd0-b648-c6bfc76d8b4b.png"
                alt="Illustration of a person relaxing on a lemon-slice floatie"
                className="w-64 h-auto opacity-90"
                style={{ transform: "rotate(-15deg)" }}
              />
            </div>

            <div className="lg:col-span-2 relative">
              <img
                src="/lovable-uploads/eaf50c27-a77f-4580-8706-d131c85608f1.png"
                alt="Illustration of a person relaxing in a cocktail"
                className="absolute top-[-5rem] right-[-3rem] w-40 md:w-48 opacity-90 hidden md:block -z-0"
                style={{ transform: "rotate(15deg)" }}
              />
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-foreground">
                  Frequently Asked Questions
                </h1>
                <p className="text-lg text-center text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
                  Answers to our most common guest questions. For anything else, feel free to{" "}
                  <a href="/contact" className="underline text-primary">contact us</a>.
                </p>
                <div className="w-full">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full rounded-lg bg-[hsl(46,46%,95%)] shadow-xl border border-primary/10"
                  >
                    {faqs.map((faq, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`}>
                        <AccordionTrigger className="text-lg text-left px-8 py-5">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-left px-8 pb-6 pt-1">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

