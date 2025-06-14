
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Do I need a reservation to visit Rory’s Rooftop Bar?",
    answer: "Reservations are highly encouraged to guarantee your spot, especially on weekends or for large groups. Walk-ins are welcome as space allows."
  },
  {
    question: "Is there a dress code?",
    answer: "Smart casual attire is recommended. We want guests to feel relaxed but request no sportswear, tank tops, or flip-flops in the evening."
  },
  {
    question: "Are children allowed?",
    answer: "Guests must be 21+ after 5 PM. Children are welcome during brunch hours (Saturdays & Sundays, 12–4 PM) with adult supervision."
  },
  {
    question: "Can I host a private event or party?",
    answer: "Absolutely! We love celebrations. Please use the contact form to discuss your event, and our team will help plan your perfect rooftop gathering."
  },
  {
    question: "Are pets allowed?",
    answer: "Leashed, well-mannered dogs are allowed on our outdoor terrace (weather permitting). Please notify us with your reservation."
  },
  {
    question: "Is the rooftop weatherproof?",
    answer: "Our main dining area is enclosed and climate-controlled year-round, while the outdoor terrace is open in fair weather."
  },
];

const About = () => (
  <section
    id="about"
    className="py-20"
    style={{ backgroundColor: "hsl(346, 56%, 86%)" }}
  >
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3 text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-muted-foreground text-lg text-center max-w-xl mx-auto mb-10">
        Find quick answers about visiting Rory’s Rooftop Bar. For other questions, feel free to reach out through our contact page!
      </p>
      <Accordion type="single" collapsible className="space-y-4">
        {FAQS.map((faq, idx) => (
          <AccordionItem key={faq.question} value={`faq-${idx}`} className="rounded-lg border bg-[hsl(46,46%,95%)] px-4">
            <AccordionTrigger className="text-lg font-medium text-primary py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-muted-foreground pb-6">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default About;

