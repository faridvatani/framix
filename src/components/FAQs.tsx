"use client";
import { FAQItems } from "@/data/data";
import PlusIcon from "@/assets/icons/plus.svg";
import MinusIcon from "@/assets/icons/minus.svg";
import { useState } from "react";
import clsx from "clsx";

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className="py-7 border-b border-white/70"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>
      <div className={clsx("mt-4", { hidden: !isOpen, "": isOpen === true })}>
        {answer}
      </div>
    </div>
  );
};

export const FAQs = () => {
  return (
    <section className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter sm:max-w-[648px] mx-auto">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {FAQItems.map((items, index) => (
            <AccordionItem
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
