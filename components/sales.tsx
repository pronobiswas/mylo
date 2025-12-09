"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const results = [
  {
    id: 1,
    image: "/sale-1.png",
    smallImage: '/small-sale-1.png',
    sales: "$80,113",
    days: "31 days",
    increase: "83%",
  },
  {
    id: 2,
    image: "/sale-2.png",
    smallImage: '/small-sale-2.png',
    sales: "$52,340",
    days: "28 days",
    increase: "64%",
  },
  {
    id: 3,
    image: "/sale-3.png",
    smallImage: '/small-sale-3.png',
    sales: "$101,222",
    days: "35 days",
    increase: "92%",
  },
  {
    id: 4,
    image: "/sale-4.png",
    smallImage: '/small-sale-4.png',
    sales: "$75,000",
    days: "32 days",
    increase: "71%",
  },
];

export default function Sales() {
  const [index, setIndex] = useState(0);
  const active = results[index];


  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const pausedRef = useRef(false);
  const duration = 4000; // ms

  const start = () => {
    if (intervalRef.current || pausedRef.current) return;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % results.length);
    }, duration);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };


  useEffect(() => {
    start();
    return stop;
  }, []);

  const bump = (fn: () => void) => () => {
    fn();
    stop();
    start();
  };

  const next = bump(() => setIndex((i) => (i + 1) % results.length));
  const prev = bump(() => setIndex((i) => (i - 1 + results.length) % results.length));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full mx-auto flex flex-col gap-5 items-center p-5"
      onMouseEnter={() => { pausedRef.current = true; stop(); }}
      onMouseLeave={() => { pausedRef.current = false; start(); }}
    >
      <h2 className="text-3xl md:text-4xl font-medium text-left sm:text-center text-white">
        <span className="bg-gradient-to-b from-emerald-400 to-emerald-800 bg-clip-text text-transparent">
          30-Day Results
        </span>{" "}
        of Sold Stores After Acquisition
      </h2>

      <div className="relative w-full flex items-center justify-center">
        <button onClick={prev} className="hidden xl:block absolute left-[-4rem] md:left-[-5rem] p-3 bg-neutral-800 rounded-full hover:bg-neutral-700 transition" aria-label="Previous">
          <ChevronLeftIcon height={20} width={20} className="text-white" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <div className="relative w-full h-100">
              <Image src={active.smallImage} alt={active.sales} fill priority className="object-contain sm:hidden" />
              <Image src={active.image} alt={active.sales} fill priority className="object-contain hidden sm:block" />
            </div>
          </motion.div>
        </AnimatePresence>

        <button onClick={next} className="hidden xl:block absolute right-[-4rem] md:right-[-5rem] p-3 bg-neutral-800 rounded-full hover:bg-neutral-700 transition" aria-label="Next">
          <ChevronRightIcon height={20} width={20} className="text-white" />
        </button>
      </div>

      <div className="flex flex-row gap-5">
        <button onClick={prev} className="block xl:hidden p-3 bg-neutral-800 rounded-full hover:bg-neutral-700 transition" aria-label="Previous">
          <ChevronLeftIcon height={20} width={20} className="text-white" />
        </button>
        <button onClick={next} className="block xl:hidden p-3 bg-neutral-800 rounded-full hover:bg-neutral-700 transition" aria-label="Next">
          <ChevronRightIcon height={20} width={20} className="text-white" />
        </button>
      </div>

      <div className="flex gap-3 mt-4">
        {results.map((_, i) => (
          <button
            key={i}
            onClick={bump(() => setIndex(i))}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition ${i === index ? "bg-emerald-400 scale-110" : "bg-neutral-600 hover:bg-neutral-500"}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
