"use client";
import { motion } from "framer-motion";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { container, slideUp } from "@/lib/animations";


export default function Months(){
    return(
        <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative isolate w-full flex flex-col items-center gap-5 overflow-hidden"
        >
        <motion.div
          variants={slideUp}
          className="flex items-center gap-2 border border-green-800/30 bg-green-900/30 rounded-full px-3 py-1"
        >
          <CurrencyDollarIcon className="h-5 w-5 text-emerald-400" />
          <p className="text-white md:text-base text-sm">
            97% of stores sold within the first <span className="text-emerald-400">30 days</span>
          </p>

        </motion.div>

            <motion.h1
                variants={slideUp}
                className="md:text-6xl lg:text-6xl sm:text-5xl text-4xl font-semibold text-white text-center sm:leading-[4.375rem] leading-[3rem] tracking-[-0.05em]"
            >
                Last Few Months Selling  <span className="bg-gradient-to-b from-emerald-400 to-emerald-800 bg-clip-text text-transparent">Ecommerce</span> Brands
            </motion.h1>

                <motion.div
                variants={slideUp}
                className="flex justify-center gap-3 md:gap-5 max-w-5xl mx-auto"
                >

                    <div className="flex-1 max-w-[120px] sm:max-w-[140px] md:max-w-[200px] flex flex-col items-center justify-center p-2 md:p-6 border border-emerald-400 rounded-xl gap-2">
                        <h2 className="text-neutral-500 text-sm sm:text-base md:text-lg text-center">Avg Sale Time</h2>
                        <p className="text-white text-base sm:text-lg md:text-xl">16 Days</p>
                    </div>

                    <div className="flex-1 max-w-[120px] sm:max-w-[140px] md:max-w-[200px] flex flex-col items-center justify-center p-2 md:p-6 border border-emerald-400 rounded-xl gap-2">
                        <h2 className="text-neutral-500 text-sm sm:text-base md:text-lg text-center">
                        Brand <br /> Acquisitions
                        </h2>
                        <p className="text-white text-base sm:text-lg md:text-xl">$4.5M+</p>
                    </div>

                    <div className="flex-1 max-w-[120px] sm:max-w-[140px] md:max-w-[200px] flex flex-col items-center justify-center p-2 md:p-6 border border-emerald-400 rounded-xl gap-2">
                        <h2 className="text-neutral-500 text-sm sm:text-base md:text-lg text-center">Client Satisfaction</h2>
                        <p className="text-white text-base sm:text-lg md:text-xl">100%</p>
                    </div>
              

                </motion.div>


        </motion.section>
    )
}