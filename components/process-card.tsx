import Image from "next/image";
import localFont from "next/font/local";
import { ClockIcon } from "@heroicons/react/24/outline";

const myFont = localFont({
  src: "../app/fonts/ESRebondGrotesque-Bold.otf",
  display: "swap",
});

type ProcessCardProps = {
    step: number | string;
    title: string;
    description: string;
    icon: string;
    badge: string;
  };


  
  export default function ProcessCard({ step, title, description, icon, badge }: ProcessCardProps) {
    return (
      <div className="p-5 flex flex-col gap-6 h-full"> {/* make card full height */}
        
        {/* Icon */}
       <Image src={icon} alt={title} width={35} height={35} />
    
  
        {/* Step + Title */}
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 font-bold text-xl lg:text-base">{step}.</span>
          <h3 className={`${myFont.className} text-xl lg:text-base text-white`}>{title}</h3>
        </div>
  
        {/* Description */}
        <p className="text-neutral-400 text-md lg:text-base">{description}</p>
  
        {/* Badge (always bottom) */}
        <span className="mt-auto self-start inline-flex font-semibold items-center justify-start text-sm px-2 py-1 rounded-full bg-emerald-900/40 text-white border border-emerald-800">
          <ClockIcon className="h-5 w-5 mr-2" />
          {badge}
        </span>
      </div>
    );
  }
  
  