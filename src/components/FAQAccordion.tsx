import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type FAQ } from "@/data/faqs";

interface FAQAccordionProps {
  faqs: FAQ[];
  title?: string;
}

const FAQAccordion = ({ faqs, title }: FAQAccordionProps) => {
  return (
    <div>
      {title && (
        <h3 className="font-serif text-heading text-foreground mb-8">{title}</h3>
      )}
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="border border-border rounded-lg px-5 data-[state=open]:bg-muted/30"
          >
            <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordion;
