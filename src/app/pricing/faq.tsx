"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useTranslation } from "@/lib/language-context";

export default function PricingFAQ() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("pricing.faqItems.q1.question"),
      answer: t("pricing.faqItems.q1.answer"),
    },
    {
      question: t("pricing.faqItems.q2.question"),
      answer: t("pricing.faqItems.q2.answer"),
    },
    {
      question: t("pricing.faqItems.q3.question"),
      answer: t("pricing.faqItems.q3.answer"),
    },
    {
      question: t("pricing.faqItems.q4.question"),
      answer: t("pricing.faqItems.q4.answer"),
    },
  ];

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
