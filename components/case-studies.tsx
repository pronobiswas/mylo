"use client";

import Image from "next/image";
import { useState } from "react";
import TitleSpan from "./title-span";
import CaseCard from "./cases";
import { motion, AnimatePresence } from "framer-motion";
import { container, slideUp } from "@/lib/animations";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../app/fonts/ESRebondGrotesque-Bold.otf",
  display: "swap",
});


const cases = [
  {
    title: "Outdoor Gear Hub",
    icon: "/og.png",
    description:
      "We started Glowball in 2022 selling premium LED lighting. The Brandex Brokers team made the sale quick and straightforward — valuation was clear, the buyer was a great fit, and we closed above our asking price. Highly recommend.",
    sales: "$450,000",
    revenue: "$3,100,000",
    established: "18",
    niche: "Home & Lifestyle",
  },
  {
    title: "Eco Kitchenware",
    icon: "/eco.png",
    description:
      "Seemless experience with ‘Dtc brokers’ . Based my previous valuation of a large marketplace calculator but was totally wrong, used the tool on the website relisted my store with Dtc brokers and got 3 offers in the first 2 weeks",
    sales: "$90,000",
    revenue: "$870,000",
    established: "36",
    niche: "Kitchenware",
  },
  {
    title: "Comfort Pet Beds",
    icon: "/pet.png",
    description:
      "We started our brand in 2020 selling comfort pet beds, we had a slight decrease in sales but it didn't affect our asking price which we were really pleased about. The ‘DTC brokers’ team was straightforward and helpful to work with, valuation was fast and post sale easy to work with. Overall Good experience.",
    sales: "$275,000",
    revenue: "$1,900,000",
    established: "18",
    niche: "Home & Lifestyle",
  },
  {
    title: "Luxury Home Decor",
    icon: "/home.png",
    description:
      "Choosing ‘Dtc brokers’ to sell my store Shinemop was the right one, fast team working 7 days a week. Dtc brokers especially helped me a lot through the process to achieve a speedy exit.",
    sales: "$60,000",
    revenue: "$600,000",
    established: "18",
    niche: "Home Decor",
  },
];

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(cases[0]); // default first case

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center gap-6 w-[90%] lg:w-full"
    >
      <motion.h1
        variants={slideUp}
        className={`${myFont.className} text-white text-3xl sm:text-4xl`}
      >
        <TitleSpan>Case Studies</TitleSpan>
      </motion.h1>

      <motion.p
        variants={slideUp}
        className="text-lg sm:text-xl text-neutral-400 text-center"
      >
        See what people who were in the same place as you say
      </motion.p>

      {/* All case cards */}
      <motion.div
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl gap-4"
      >
        {cases.map((c, index) => (
          <motion.div key={index} variants={slideUp} className="w-full">
            <CaseCard
              title={c.title}
              icon={c.icon}
              isActive={activeCase.title === c.title}
              onClick={() => setActiveCase(c)}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Active case details */}
      <AnimatePresence mode="wait">
        {activeCase && (
          <motion.div
            key={activeCase.title} // animate on change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative w-full p-6 bg-neutral-900/60 rounded-xl overflow-hidden"
          >
            <Image
              src={"/stars.svg"}
              alt="Stars"
              width={128}
              height={128}
              className="mb-5"
            />
            <p className="text-neutral-300 mb-5 text-lg">
              {activeCase.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="border border-neutral-600 px-3 py-5 rounded-lg bg-neutral-900">
                <p className="text-sm text-neutral-400">Sale price</p>
                <p className="text-emerald-400 font-semibold text-xl">
                  {activeCase.sales}
                </p>
              </div>

              <div className="border border-neutral-600 px-3 py-5 rounded-lg bg-neutral-900">
                <p className="text-sm text-neutral-400">Brand Revenue</p>
                <p className="text-emerald-400 font-semibold text-xl">
                  {activeCase.revenue}
                </p>
              </div>

              <div className="border border-neutral-600 px-3 py-5 rounded-lg bg-neutral-900">
                <p className="text-sm text-neutral-400">
                  Months since establishment
                </p>
                <p className="text-emerald-400 font-semibold text-xl">
                  {activeCase.established}
                </p>
              </div>

              <div className="border border-neutral-600 px-3 py-5 rounded-lg bg-neutral-900">
                <p className="text-sm text-neutral-400">Brand Niche</p>
                <p className="text-emerald-400 font-semibold text-xl">
                  {activeCase.niche}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center z-0">
              <div className="absolute w-[100px] h-[100px] bg-neutral-500/40 rounded-full blur-[30px]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
