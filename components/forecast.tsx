import { container, slideUp } from "@/lib/animations";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Forecast() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative flex w-full min-h-[500px] -mt-90 sm:mt-0 mb-60 sm:mb-0" // give height so absolute items have space
    >
      {/* Video (Globe) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 w-full max-w-2xl h-auto rounded-2xl object-cover hue-rotate-250 hidden sm:block"
        poster="https://cdn.prod.website-files.com/6772f6967595d6cbfe299017/6783cca2f24526592fb1ed0b_WhatsApp%20Video%202025-01-11%20at%20175937-poster-00001.jpg"
      >
        <source
          src="https://cdn.prod.website-files.com/6772f6967595d6cbfe299017/6783cca2f24526592fb1ed0b_WhatsApp%20Video%202025-01-11%20at%20175937-transcode.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.prod.website-files.com/6772f6967595d6cbfe299017/6783cca2f24526592fb1ed0b_WhatsApp%20Video%202025-01-11%20at%20175937-transcode.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>


        {/* Static Globe image for mobile */}
        <div className="absolute inset-0 flex justify-center items-start sm:hidden pointer-events-none">
          <Image
            src="https://cdn.prod.website-files.com/6772f6967595d6cbfe299017/677fe1dba695ad9dd03e986b_Group%201437256335%20(1).png"
            alt="Globe"
            width={2500}
            height={2500}
            className="w-[140vw] max-w-none object-contain hue-rotate-250 mt-80"
          />
        </div>






      {/* Text content */}
      <motion.div
        variants={slideUp}
        className="absolute right-0 sm:top-1/2 top-150  -translate-y-1/2 flex flex-col gap-6 max-w-2xl z-10 p-6 sm:text-right text-left"
      >
        <motion.h1 className="text-base md:text-xl font-medium text-white">
          A Forecast into the Future
        </motion.h1>
        <motion.h1 className="text-3xl sm:text-4xl font-medium text-white">
          Projected Market Expansion To Reach <span className="bg-gradient-to-b from-emerald-400 to-emerald-800 bg-clip-text text-transparent">$57.22 Trillion by 2032</span>

        </motion.h1>
        <motion.p className="text-neutral-300 leading-relaxed">
        The global e-commerce market was valued at roughly $14.1 trillion in 2022 and is projected to expand rapidly in the coming decade. By 2032, analysts forecast it could surpass $57 trillion, reflecting a compound annual growth rate (CAGR) of around 15%.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
