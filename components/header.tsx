'use client';
import { useState, useRef, useEffect } from "react";
import { Turn as Hamburger } from "hamburger-react";
import ValuationButton from "./valuation-button";
import Logo from "./logo";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/animations"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.header
      variants={slideUp}
      initial="hidden"
      animate="show" 
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 flex flex-row items-center justify-between border border-neutral-700 rounded-xl py-3 px-4 w-[90%] bg-black z-50 mx-auto right-0 mt-8 max-w-3xl"
    >
      <Logo />

      <ul className="hidden lg:flex flex-row items-center gap-6 text-sm text-neutral-400">
        {[
          // { name: "Process", id: "process" },
          // { name: "Case Studies", id: "case-studies" },
          { name: "Who we are", id: "about" },
          { name: "FAQs", id: "faqs" },
        ].map((item) => (
          <li
            key={item.id}
            onClick={() =>
              document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
            }
            className="text-center cursor-pointer hover:text-emerald-400 hover:scale-110 transition-all duration-200"
          >
            {item.name}
          </li>
        ))}
      </ul>

      <div className="gap-4 flex flex-row items-center">
        {/* Button */}
        <div className="hidden sm:block">
          <ValuationButton />
        </div>

        {/* Hamburger */}
        <div ref={buttonRef} className="cursor-pointer lg:hidden block">
          <Hamburger
            size={28}
            color="#00d492"
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </div>
      </div>

      {/* Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-28 left-0 w-full bg-black border border-neutral-700 rounded-3xl z-40 animate-slideDown px-4"
        >
          <ul className="flex flex-col justify-center items-center text-lg text-neutral-400">
            {[
              // { name: "Process", id: "process" },
              // { name: "Case Studies", id: "case-studies" },
              { name: "Who we are", id: "about" },
              { name: "FAQs", id: "faqs" },
            ].map((item) => (
              <li
                key={item.id}
                onClick={() =>
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full text-center py-4 cursor-pointer hover:text-emerald-400 hover:scale-110 transition-colors"
              >
                {item.name}
              </li>
            ))}

            <li className="w-full flex justify-center py-4">
              <ValuationButton fullWidth />
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  );
}
