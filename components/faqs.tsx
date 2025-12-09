"use client";

import { useState } from "react";
import TitleSpan from "./title-span";
import { motion } from "framer-motion";
import { container, slideUp } from "@/lib/animations";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../app/fonts/ESRebondGrotesque-Bold.otf",
  display: "swap",
});

const faqs = [
  {
    question: "How much do you charge?",
    answer:
      "We don’t charge any upfront fees, and we also don’t use the standard broker model of taking a fixed commission based only on the selling price. Our commission depends on several factors, like the buyer, how long the sale takes, and how involved we are in the process. On the valuation call, we’ll give you an estimate of your net proceeds after fees. We keep things transparent by sharing exactly what we earn from each deal. The main aim is to make sure you’re satisfied with the offer.",
  },
  {
    question: "What do I need to do?",
    answer:
      "All we need from you is accurate, up-to-date information about your store. We take care of the entire sales process, so you won’t have to deal with interruptions or constant back-and-forth with buyers. Our team handles all Zoom calls, inquiries, and negotiations on your behalf—you’ll only hear from us when there’s an offer to review or if we need clarification",
  },
  {
    question: "How safe is the process?",
    answer:
      "Our entire process is secured and backed by contracts to ensure the safety of all parties involved.",
  },
  {
    question: "How do I get paid?",
    answer:
      "Your payment is securely processed through Escrow and released to you in full once the transaction is successfully completed, guaranteeing a safe and reliable transfer of funds.",
  },
  {
    question: "How much commission do you take?",
    answer:
      "We’re not traditional brokers—there are no upfront fees. Our commission is tied to the final selling price. For smaller stores seeking a quick exit, a minimal cash fee applies after the deal is closed.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative flex flex-col-reverse md:flex-row items-start gap-10 w-[90%] lg:w-full mx-auto"
    >


      <motion.div
        variants={container}
        className="flex flex-col gap-4 w-full md:w-1/2 z-10"
      >
        {faqs.map((faq, index) => (
          <motion.div key={index} variants={slideUp}>
            <FAQButton
              question={faq.question}
              answer={faq.answer}
              isActive={activeIndex === index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          </motion.div>
        ))}
      </motion.div>

            
      <motion.div
        variants={slideUp}
        className="flex flex-col items-start gap-5 w-full md:w-1/2 z-10"
      >
        <h1 className={`${myFont.className} text-white text-3xl sm:text-4xl`}>
          <TitleSpan>Got Questions?</TitleSpan>
        </h1>
        <p className="text-lg sm:text-xl text-neutral-400 text-left">
          Your question not answered here? <br /> Send us an email at
          team@dtcbrokers.com
        </p>
      </motion.div>
    </motion.div>
  );
}

type FAQProps = {
  question: string;
  answer: string;
  isActive?: boolean;
  onClick: () => void;
};

function FAQButton({ question, answer, isActive, onClick }: FAQProps) {
  return (
    <div
      className={`w-full border rounded-xl transition-all duration-400 overflow-hidden 
        ${isActive ? "border-emerald-500 bg-emerald-900/20 shadow-[0_0_10px_2px_rgba(52,211,153,0.5)]" : "border-neutral-700 hover:scale-103"}
      `}
    >
      {/* Question header */}
      <button
        onClick={onClick}
        className={`w-full p-5 flex justify-between items-center text-left ${isActive ? "" : "hover:bg-neutral-800"} transition-colors duration-200 cursor-pointer`}
      >
        <p className={`${myFont.className} text-lg text-white`}>{question}</p>
        <span className="text-neutral-400">{isActive ? "−" : "+"}</span>
      </button>

      {/* Answer content inside same box */}
      {isActive && (
        <div className="px-5 py-5 text-neutral-300 ">{answer}</div>
      )}
    </div>
  );
}
