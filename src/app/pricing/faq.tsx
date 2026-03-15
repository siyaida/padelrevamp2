"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in the membership?",
    answer:
      "Every membership includes court access, our online booking system, and community features. Higher tiers unlock priority booking, match organization, performance tracking, group training sessions, and video analysis — depending on the plan you choose.",
  },
  {
    question: "Can I cancel my membership?",
    answer:
      "Yes, you can cancel your membership at any time. Refunds are pro-rated for any unused months remaining in your subscription period.",
  },
  {
    question: "How do I book a court?",
    answer:
      "Simply log in to your account, navigate to the Reservations page, and pick your preferred date, time, and court. Confirmation is instant.",
  },
  {
    question: "Are there any joining fees?",
    answer:
      "No joining fees at all. Just pick your plan and start playing right away. Your membership begins the day you sign up.",
  },
];

export default function PricingFAQ() {
  return (
    <Accordion>
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={index}>
          <AccordionTrigger className="text-base font-medium text-slate-900">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-slate-600">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
