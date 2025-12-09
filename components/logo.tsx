import Image from "next/image"

export default function Logo(){
    return(
        <div className="flex flex-row items-center gap-5">
            <Image
                src={"/Logo.png"}
                alt="Logo"
                width={30}
                height={30}
                className="rounded-full"
            />
            <div className="flex flex-col items-start">
                <h2 className="font-semibold text-2xl text-white mb-0 leading-tight">DTC</h2>
                <h2 className="font-normal text-lg text-white mt-0 leading-tight">Brokers</h2>
            </div>


        </div>
    )
}