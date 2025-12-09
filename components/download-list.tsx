"use client";
import { motion } from "framer-motion";
import { container, slideUp } from "@/lib/animations";


export default function DownloadList(){
    return(
        <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center gap-10 w-[90%] lg:w-full"
        >

            <motion.h1
            variants={slideUp}
            className={` text-white text-4xl sm:text-6xl text-center`}
            >
                View Exclusive Deals <span className="text-emerald-400">Before</span> Anyone Else
            </motion.h1>

            <motion.p
            variants={slideUp}
            className="text-base sm:text-lg text-neutral-400 text-center"
            >
                Subscribe to our free newsletter
            </motion.p>


            <motion.div
            variants={slideUp}
            className="relative w-full max-w-xl mx-auto border border-emerald-400 rounded-xl p-6 space-y-6 pb-15"
            >
            <div className="flex flex-row items-center justify-between sm:justify-around">
                <div className="relative w-5 h-5">
                    <div className="absolute inset-0 rounded-full bg-emerald-400" />

                    <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping [animation-duration:1.5s]" />
                </div>


                <h1 className="text-white text-xl sm:text-3xl text-left">
                    Download our current list of <br /> Brands available right now.
                </h1>
            </div>


            <form className="relative space-y-5 flex-col">
            <input
                type="text"
                placeholder="Name"
                required
                className="w-full rounded-md bg-black/60 border border-neutral-700 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
                type="tel"
                placeholder="Phone"
                required
                className="w-full rounded-md bg-black/60 border border-neutral-700 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
                type="email"
                placeholder="Email"
                required
                className="w-full rounded-md bg-black/60 border border-neutral-700 px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />

            <button
                type="submit"
                className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[calc(100%+3px)] px-6 py-3 sm:py-6 sm:px-0 rounded-full bg-gradient-to-r from-purple-500 to-emerald-400 text-white font-semibold transition transform hover:scale-105 shadow-[0_0_50px_rgba(16,185,129,0.7)]"
            >
                DOWNLOAD A LIST OF BUSINESSES STARTING AT $25K
            </button>
            </form>

            </motion.div>


        </motion.section>
    )
}