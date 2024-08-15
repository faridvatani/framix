"use client";
import { FAQItems } from "@/data/data";
import Accordion from "@/components/Accordion";

export const FAQs = () => {
  return (
    <section className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter sm:max-w-[648px] mx-auto">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {FAQItems.map((items, index) => (
            <Accordion
              key={index}
              question={items.question}
              answer={items.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
