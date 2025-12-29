"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import DomainButton from "./domain-button";
import localFont from "next/font/local";
import { container, slideUp } from "@/lib/animations";
import Image from "next/image";
import ShopifyIcon from "@/public/shopify.svg";
const MotionImage = motion(Image);



const instrumentSerif = localFont({
  src: "../app/fonts/InstrumentSerif-Italic.ttf", // adjust path if needed
  weight: "400",
  style: "normal",
  display: "swap",
});

const words = ["£5-10k+", " Per month"];


export default function HeroSection() {

  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 100 : 150;

    const handleTyping = () => {
      setDisplayText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 3000); // pause before deleting
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, loopNum]);

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative isolate w-full flex flex-col items-center gap-5 overflow-hidden pt-12 lg:pt-20 pb-20"
    >

      <MotionImage
        src={'https://cdn.prod.website-files.com/669a02598d461cec73e64fc5/669a977656b8b90ec5857973_bg%20pattern.svg'}
        alt="bg-pattern"
        className="absolute top-10 max-w-7xl w-full z-10"
        width={250}
        height={250}
        variants={slideUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      />


      {/* Revenue Icon */}
      <MotionImage
        src={'/revenueIcon.png'}
        alt="Revenue Icon"
        className="absolute lg:top-110 md:top-150 top-160 left-10 z-1 w-40 sm:w-55 -rotate-6"
        width={250}
        height={250}
        variants={slideUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      />

      {/* Profit Icon */}
      <MotionImage
        src={'/profitIcon.png'}
        alt="Profit Icon"
        className="absolute lg:top-80 md:top-155 top-158 right-10 z-1 w-40 sm:w-55 rotate-4"
        width={250}
        height={250}
        variants={slideUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      />


      {/* Background (confined to hero only) */}
      <Image
        src="https://cdn.prod.website-files.com/669a02598d461cec73e64fc5/669a97e66e55236bb7141574_Home%20Page.svg"
        alt="Background"
        fill
        priority
        className="object-cover object-center -z-10 pointer-events-none select-none"
        // optional: sizes so Next can pick correct asset
        sizes="100vw"
      />

      {/* Content wrapper – constrain inner width */}
      <div className="w-full px-5 max-w-5xl mx-auto flex flex-col items-center gap-5 z-10">
        {/* Top banner */}
        <motion.div
          variants={slideUp}
          className="flex items-center gap-2 border border-green-800/30 bg-green-900/30 rounded-full px-3 py-1"
        >
          <CurrencyDollarIcon className="h-5 w-5 text-emerald-400" />
          <p className="text-white md:text-base text-sm">
            99% client success rate within the first <span className="text-emerald-400">60 days</span>
          </p>

        </motion.div>

        {/* Title */}
        <motion.h1
          variants={slideUp}
          className="md:text-6xl lg:text-6xl sm:text-5xl text-4xl font-semibold text-white text-center sm:leading-[4.375rem] leading-[3rem] tracking-[-0.05em]"
        >
          Replace your income and earn{" "}
          <span className={`${instrumentSerif.className} font-normal text-emerald-400`}>
            {displayText}
          </span>{" "}
          by Dropshipping with TikTok Ads within the next 60 days <br /> GUARANTEED
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={slideUp} className="text-base sm:text-lg text-neutral-400 text-center">
          The Proven, Zero-Risk Method to Make $5–10k+/month Online — With Absolutely No Experience Needed.
        </motion.p>

        {/* Button */}
        {/* <motion.div variants={slideUp} className="w-full flex justify-center ">
          <DomainButton />
        </motion.div> */}
      </div>

      <div className="w-full">
        {/* Video + logo */}
        <motion.div
          variants={slideUp}
          className="z-10 w-full max-w-[1660px] border-amber-600 mx-auto rounded-3xl overflow-hidden flex flex-col items-center gap-5"
        >
          <div className="w-full h-full aspect-[1660/728] py-10 rounded-3xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-full min-h-80 object-cover rounded-3xl"
            >
              <source src="/videos/kai.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <Image src={ShopifyIcon} alt="Shopify Icon" className="h-14 w-auto" />
        </motion.div>
      </div>

      {/* optional: fade bottom edge so transition to next section feels clean */}
      {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black/90" /> */}
    </motion.section>
  );
}
