
import Navigation from "@/components/Navigation";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need a reservation?",
    answer: "We highly recommend making a reservation, especially for weekend visits, to ensure your spot. We do save some space for walk-in guests, available on a first-come, first-served basis.",
  },
  {
    question: "Is there a dress code?",
    answer: "We encourage smart casual attire. Think date night, not gym day. Please, no beachwear or athletic wear.",
  },
  {
    question: "Are children allowed?",
    answer: "To maintain our lounge atmosphere, all guests must be 21 or older. Please have your valid government-issued ID ready.",
  },
  {
    question: "Do you host private events?",
    answer: "We love a good party! Our rooftop is the perfect venue for private events. Get in touch with our events team to start planning.",
  },
  {
    question: "Can I bring my own cake or outside food?",
    answer: "While we don't permit outside food or drinks, our team can help arrange special treats for your celebration. Let us know what you're celebrating when you book!",
  },
  {
    question: "Is the rooftop accessible for guests with disabilities?",
    answer: "Yes, our rooftop and facilities are fully accessible. If you have specific needs, please give us a call ahead of your visit so we can ensure your experience is seamless.",
  },
  {
    question: "How do I find the rooftop?",
    answer: "You'll find us on the roof of Puttery. Just enter, hop in the elevator, and come on up to the 6th floor. The views are worth it.",
  },
];

export default function FAQ() {
  return (
    <>
      <Navigation />
      <section className="min-h-screen bg-[hsl(346,56%,86%)] flex items-center justify-center py-12 md:py-20 pt-36 overflow-x-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto relative">
            <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -left-64 z-0">
              <img
                src="/lovable-uploads/717ae8bd-32a5-4dd0-b648-c6bfc76d8b4b.png"
                alt="Illustration of a person relaxing on a lemon-slice floatie"
                className="w-64 h-auto opacity-90"
                style={{ transform: "rotate(-15deg)" }}
              />
            </div>
            <div className="hidden lg:block absolute top-8 -right-52 z-0">
              <img
                src="/lovable-uploads/eaf50c27-a77f-4580-8706-d131c85608f1.png"
                alt="Illustration of a person relaxing in a cocktail"
                className="w-48 opacity-90"
                style={{ transform: "rotate(15deg)" }}
              />
            </div>

            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 text-foreground">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-center text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">
                Everything you need to know before you go. If your question isn't here, please feel free to{" "}
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
      </section>
    </>
  );
}
