"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {
  formData: {
    reason: string; 
  };
  setFormData: (data: Partial<Props["formData"]>) => void;
  next: () => void;
  back: () => void;
};

export default function Selling({ formData, setFormData, next, back }: Props) {
  const canNext = !!formData.reason;

  return (
    <div className="flex flex-col gap-6 w-full">
      <h2 className="text-2xl font-bold text-white">Selling Reason</h2>

      <RadioGroup
        value={formData.reason ?? ""} // defensive fallback
        onValueChange={(val) => setFormData({ reason: val })}
      >
        <label
          htmlFor="r1"
          className="flex items-center gap-3 border border-neutral-700 w-full rounded-lg p-4 cursor-pointer"
        >
          <RadioGroupItem value="profits" id="r1" />
          <span className="text-white">Not profitable enough</span>
        </label>

        <label
          htmlFor="r2"
          className="flex items-center gap-3 border border-neutral-700 w-full rounded-lg p-4 cursor-pointer"
        >
          <RadioGroupItem value="projects" id="r2" />
          <span className="text-white">I have other projects in mind</span>
        </label>

        <label
          htmlFor="r3"
          className="flex items-center gap-3 border border-neutral-700 w-full rounded-lg p-4 cursor-pointer"
        >
          <RadioGroupItem value="time" id="r3" />
          <span className="text-white">Too time-consuming</span>
        </label>

        <label
          htmlFor="r4"
          className="flex items-center gap-3 border border-neutral-700 w-full rounded-lg p-4 cursor-pointer"
        >
          <RadioGroupItem value="cash" id="r4" />
          <span className="text-white">Want quick cash</span>
        </label>

        <label
          htmlFor="r5"
          className="flex items-center gap-3 border border-neutral-700 w-full rounded-lg p-4 cursor-pointer"
        >
          <RadioGroupItem value="other" id="r5" />
          <span className="text-white">Other</span>
        </label>
      </RadioGroup>

      <div className="flex justify-between gap-4">
        <button
          onClick={back}
          className="bg-neutral-700 px-6 py-2 rounded-lg text-white font-bold hover:bg-neutral-800 transition-colors duration-200"
        >
          Back
        </button>

        <button
          onClick={next}
          disabled={!canNext}
          className={`px-6 py-2 rounded-lg font-bold transition-colors duration-200 ${
            canNext
              ? "bg-emerald-500 text-white hover:bg-emerald-600"
              : "bg-emerald-500/40 text-white/60 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
