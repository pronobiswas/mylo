import Image from "next/image";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../app/fonts/ESRebondGrotesque-Bold.otf",
  display: "swap",
});

type CaseCardProps = {
  title: string;
  icon: string;
  isActive?: boolean;
  onClick: () => void;
};

export default function CaseCard({ title, icon, isActive, onClick }: CaseCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-5 flex flex-row items-center gap-3 border rounded-xl transition-all duration-200
        ${isActive ? "border-emerald-500 bg-emerald-900/20 shadow-[0_0_10px_2px_rgba(52,211,153,0.5)]" : "border-neutral-700 hover:scale-103 cursor-pointer"}
      `}
    >
      <Image
        src={icon}
        alt={title}
        width={48}
        height={48}
        className="object-contain rounded-full"
      />
      <p className={`${myFont.className} text-lg text-white text-center`}>{title}</p>
    </button>
  );
}
