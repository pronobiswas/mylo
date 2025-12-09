import { ArrowRightIcon } from "@heroicons/react/20/solid";

type Props = {
  fullWidth?: boolean;
};

export default function ValuationButton({ fullWidth = false }: Props) {
  return (
    <button
      onClick={() => (window.location.href = "/valuation")}
      className={`flex flex-row items-center justify-center bg-white rounded-xl px-3 py-2 cursor-pointer hover:scale-105 transition-transform 
        ${fullWidth ? "w-full text-lg py-3" : "w-auto"}`}
    >
      <p className="font-semibold text-sm text-black">Get Free Valuation</p>
      <div className="ml-3 p-1 rounded-full bg-emerald-400">
        <ArrowRightIcon className="h-5 w-5 text-black" />
      </div>
    </button>
  );
}
