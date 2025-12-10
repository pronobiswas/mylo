'use client'

import { motion, useScroll } from "framer-motion"
import localFont from "next/font/local"

const myFont = localFont({
  src: "../app/fonts/ESRebondGrotesque-Bold.otf",
  display: "swap",
});
const text = `EasyAds™ and all individuals affiliated with the company assume no responsibility for the outcome, results, or success of any services provided, and do not make any guarantees regarding your ability to achieve results or earn income using our ideas, information, programs, or strategies. While our services and systems are designed to guide you effectively, we cannot and do not provide any guarantees—whether express or implied—about results, income, or success based on the ideas, tools, or strategies taught. Your success depends heavily on the time you devote, the consistency of your actions, and how you implement the guidance, strategies, and support offered throughout the program. You are solely responsible for your decisions, actions, and results.
All strategies, lessons, examples, content, and resources shared by EasyAds™ are for educational purposes only and should not be interpreted as financial, legal, tax, or investment advice. Any testimonials or success stories are from real clients and reflect their personal experiences. These results are not typical and should not be interpreted as a promise or expectation of what you will achieve. Your results will vary depending on your actions and your circumstances.
 EasyAds™ is an independent educational program. We are not endorsed by, partnered with, or affiliated with Tiktok or Shopify, Inc. in any way. Tiktok & Shopify is a registered trademark of Tiktok & Shopify, Inc.
This site is not a part of the Facebook website or Meta Platforms, Inc. Additionally, this site is not endorsed by Facebook in any way. Facebook is a trademark of Meta Platforms, Inc.`
export default function Footer() {
  const { scrollYProgress } = useScroll();
  const characters = text.split("");

  return (
    <>
      <div className="w-full h-fit py-12 px-5">

        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          style={{ transformOrigin: "center center" }}
          className="w-full h-[2px] bg-emerald-400 mb-8">

        </motion.div>
        <div>

          {/* <div className="hidden">
          <motion.footer
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative  flex flex-col items-center justify-center w-full gap-30 mt-20 py-10"
          >

            <Image
              src="https://cdn.prod.website-files.com/68394bc47d96ecf045bbdc7f/6839b2415d21ae1d88c22e1b_5e7cb107286071c2e1128d4666a407aa_Frame%202147228153.avif"
              alt="Footer Background"
              fill
              priority
              className="absolute inset-0 object-cover z-0"
            />


            <motion.div
              variants={container}
              className="relative z-10 flex flex-col items-center gap-6 w-full px-5"
            >
              <motion.div variants={slideUp}>
                <Image
                  src={ShopifyIcon}
                  alt="Shopify"
                  width={200}
                  height={200}
                />
              </motion.div>

              <motion.h1
                variants={slideUp}
                className={`${myFont.className} text-white text-2xl sm:text-3xl text-center`}
              >
                Where Market Leaders Buy and Sell{" "}
                <span className="text-emerald-400">E-Commerce Brands</span>
              </motion.h1>

              <motion.p
                variants={slideUp}
                className="text-base sm:text-lg text-neutral-400 text-center"
              >
                Curious to see how much your store is worth?
              </motion.p>

              <motion.div variants={slideUp} className="w-full flex justify-center">
                <DomainButton />
              </motion.div>
            </motion.div>


            <motion.div
              variants={container}
              className="relative z-10 flex flex-col items-center gap-6 w-full"
            >
              <motion.ul
                variants={container}
                className="flex flex-row items-center gap-6 text-md sm:text-lg text-white font-bold"
              >
                {[
                  { name: "Process", id: "process" },
                  { name: "Case Studies", id: "case-studies" },
                  { name: "Who we are", id: "about" },
                  { name: "FAQs", id: "faqs" },
                ].map((item) => (
                  <motion.li
                    key={item.id}
                    variants={slideUp}
                    onClick={() =>
                      document.getElementById(item.id)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-center cursor-pointer hover:text-emerald-400 hover:scale-110 transition-all duration-200"
                  >
                    {item.name}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p
                variants={slideUp}
                className="text-sm text-neutral-400 text-center"
              >
                &copy; {new Date().getFullYear()} DTC. All rights reserved.
              </motion.p>
            </motion.div>
          </motion.footer>
        </div> */}
        </div>

        <div className="w-full h-fit">
          <div className="w-full max-w-5xl mx-auto">
            <motion.p
              
              style={{
                background: "linear-gradient(180deg ,#00D492 , white)",
                backgroundSize: "100% 100%",
                backgroundPosition:"100% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent"
              }}
              className=" text-center">
              EasyAds™ and all individuals affiliated with the company assume no responsibility for the outcome, results, or success of any services provided, and do not make any guarantees regarding your ability to achieve results or earn income using our ideas, information, programs, or strategies.
              <br />
              While our services and systems are designed to guide you effectively, we cannot and do not provide any guarantees—whether express or implied—about results, income, or success based on the ideas, tools, or strategies taught. Your success depends heavily on the time you devote, the consistency of your actions, and how you implement the guidance, strategies, and support offered throughout the program. You are solely responsible for your decisions, actions, and results.
              <br />
              <br />
              All strategies, lessons, examples, content, and resources shared by EasyAds™ are for educational purposes only and should not be interpreted as financial, legal, tax, or investment advice. Any testimonials or success stories are from real clients and reflect their personal experiences. These results are not typical and should not be interpreted as a promise or expectation of what you will achieve. Your results will vary depending on your actions and your circumstances.
              <br />
              <br />
              EasyAds™ is an independent educational program. We are not endorsed by, partnered with, or affiliated with Tiktok or Shopify, Inc. in any way. Tiktok & Shopify is a registered trademark of Tiktok & Shopify, Inc.
              <br />
              <br />
              This site is not a part of the Facebook website or Meta Platforms, Inc. Additionally, this site is not endorsed by Facebook in any way. Facebook is a trademark of Meta Platforms, Inc.
            </motion.p>


          </div>
        </div>
      </div>
    </>
  )
}
