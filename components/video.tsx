"use client";

import ShopifyIcon from "@/public/shopify.svg";
import Image from "next/image";

export default function Video() {
  return (
    <div className="relative w-full mt-50">
      <div className="relative z-10 w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg px-5 -mt-60">
        <video
          controls
          playsInline
          className="w-full sm:h-120 h-60 rounded-3xl"
        >
          <source src="/demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10 w-full p-10">
        <Image
          src={ShopifyIcon}
          alt="Shopify Icon"
          className="h-14 w-auto"
        />
      </div>
    </div>
  );
}
