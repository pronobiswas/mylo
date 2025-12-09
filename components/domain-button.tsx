"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export default function DomainButton() {
  const [domain, setDomain] = useState("");

  const handleClick = () => {
    window.location.href = `/valuation?domain=${encodeURIComponent(domain)}`;
  };

  return (
    <div className="w-full max-w-lg flex flex-col sm:flex-row sm:gap-0 gap-3">
      {/* Input */}
      <input
        type="text"
        placeholder="Your domain"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        className="flex-1 px-4 py-2.5 rounded-xl sm:rounded-r-none bg-neutral-800 text-white placeholder-neutral-500 
                  border border-neutral-700 sm:border-r-0 
                  focus:border-emerald-400 focus:outline-none transition-colors w-full"
      />


      {/* Button */}
      <div className="w-full sm:w-auto">
        <button
          onClick={handleClick}
          className="flex flex-row items-center justify-center bg-white rounded-xl sm:rounded-l-none px-4 py-2 cursor-pointer hover:scale-105 transition-transform w-full sm:w-auto border border-neutral-700"
        >
          <p className="font-semibold text-md text-black">Get Free Valuation</p>
          <div className="ml-3 p-1 rounded-full bg-emerald-400">
            <ArrowRightIcon className="h-5 w-5 text-black" />
          </div>
        </button>
      </div>
    </div>
  );
}
