import Image from "next/image"
import { CheckCircleIcon } from "@heroicons/react/24/solid"

export default function Submit(){
    return(
        <div className="flex flex-col gap-6 w-full">
            <Image
            src="/bg-dtc.svg"
            alt="Background Pattern"
            width={1000}
            height={1000}
            className="absolute top-0 left-0 z-10 w-full"
            />
            <div className="relative flex items-center justify-center">
                <div className="absolute w-20 h-20 rounded-full bg-emerald-500/30" />
                <div className="absolute w-10 h-10 rounded-full bg-white" />
                <CheckCircleIcon className="h-16 w-16 text-emerald-500 relative z-10" />
            </div>
<           h2 className="text-4xl font-bold text-white text-center">Thank you for the Submission, we will be in touch via Whatsapp or Book a call</h2>
        </div>
    )
}