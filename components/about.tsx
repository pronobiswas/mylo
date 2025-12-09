"use client";

import Image from "next/image";
import TitleSpan from "./title-span";
import { motion } from "framer-motion";
import { container, slideUp } from "@/lib/animations";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../app/fonts/ESRebondGrotesque-Bold.otf",
  display: "swap",
});

export default function About() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative flex flex-col md:flex-row items-center gap-10 w-[90%] lg:w-full mx-auto"
    >


      
      {/* Text section */}
      <motion.div
        variants={slideUp}
        className="flex flex-col gap-10 w-full md:w-1/2 text-left z-10"
      >
        <h1 className={`${myFont.className} text-white text-3xl sm:text-4xl`}>
          <TitleSpan>Meet Your #1-Founder</TitleSpan>
        </h1>
        <p className="text-lg sm:text-xl text-white">
          Founded by Mylo Wynter who has spent the past 6 years building and
          selling his own brands.
          <br />
          <br />
          Having previously scaled brands in our past we understand that the
          exiting part can often be difficult to find buyers who are ready to
          pay the price your brand is actually worth. At DTC Brokers we ensure
          bringing you the right fit buyers and keeping the process smooth &
          simple.
        </p>
      </motion.div>

            {/* Image section */}
      <motion.div
        variants={slideUp}
        className="flex flex-col items-center gap-2 mt-8 md:mt-0 w-full md:w-1/2 z-10"
      >
        <Image
          src="/founder.jpg"
          alt="Mylo Wynter"
          width={200}
          height={200}
          className="rounded-full"
        />
        <p className="text-lg text-white">Mylo Wynter</p>
        <p className="text-md text-neutral-500">Founder</p>
      </motion.div>


    </motion.div>
  );
}
