"use client";

import TitleSpan from "./title-span";
import ProcessCard from "./process-card";
import DomainButton from "./domain-button";
import { motion } from "framer-motion";
import { container, slideUp } from "@/lib/animations";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../app/fonts/ESRebondGrotesque-Bold.otf",
  display: "swap",
});

const steps = [
  {
    step: 1,
    title: "Get a free valuation",
    description: "Fill out the form to know your store’s potential worth.",
    icon: '/thumb-up.svg',
    badge: "Under 24h",
  },
  {
    step: 2,
    title: "Agree on a selling price",
    description: "We will dive deeper into various aspects of your store and propose your desired selling point.",
    icon: '/price.svg',
    badge: "Under 24h",
  },
  {
    step: 3,
    title: "Store listing",
    description: "Your store will be listed on various marketplaces, including our private networks which total up to 10,000 + eyes.",
    icon: '/store.svg',
    badge: "Under 2 Days",
  },
  {
    step: 4,
    title: "Find a buyer & get paid",
    description: "We’ll filter through dozens of interested buyers, making sure your store will be in the right hands. Moving forward through a smooth sales process using Escrow.",
    icon: '/paid.svg',
    badge: "Within 7 Days",
  },
];

export default function Process() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center gap-6 w-[90%] lg:w-full"
    >

      <motion.h1 variants={slideUp} className={`${myFont.className} text-white text-3xl sm:text-4xl font-bold`}>
        <TitleSpan>Process</TitleSpan>
      </motion.h1>

      <motion.p
        variants={slideUp}
        className="text-lg sm:text-xl text-neutral-400 text-center"
      >
        Our simple 4-step sale process with proven track records.
      </motion.p>

      <motion.div
        variants={container}
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-4 
          w-full border border-neutral-700 rounded-xl overflow-hidden 
          divide-y divide-neutral-700 md:divide-y md:divide-x
        "
      >
        {steps.map((step) => (
          <motion.div key={step.step} variants={slideUp}>
            <ProcessCard
              step={step.step}
              title={step.title}
              description={step.description}
              icon={step.icon}
              badge={step.badge}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={slideUp}  className="w-full flex justify-center items-center">
        <DomainButton />
      </motion.div>
    </motion.div>
  );
}
