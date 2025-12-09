"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {
  formData: {
    exitPlan: string; 
  };
  setFormData: (data: Partial<Props["formData"]>) => void;
  next: () => void;
  back: () => void;
};

export default function Exit({ formData, setFormData, next, back }: Props) {
  const canNext = !!formData.exitPlan;

  return (
    <div className="flex flex-col gap-6 w-full">
      <h2 className="text-2xl font-bold text-white">Exit Plan</h2>

      <RadioGroup
        value={formData.exitPlan ?? ""} // defensive fallback
        onValueChange={(val) => setFormData({ exitPlan: val })}
      >
        <label
          htmlFor="r1"
          className="flex items-center gap-3 border border-neutral-700 w-full rounded-lg p-4 cursor-pointer"
        >
          <RadioGroupItem value="immediate" id="r1" />
          <span className="text-white">Right now</span>
        </label>

        <label
          htmlFor="r2"
          className="flex items-center gap-3 border border-neutral-700 w-full rounded-lg p-4 cursor-pointer"
        >
          <RadioGroupItem value="valuation" id="r2" />
          <span className="text-white">Seeing my valuation</span>
        </label>

        <label
          htmlFor="r3"
          className="flex items-center gap-3 border border-neutral-700 w-full rounded-lg p-4 cursor-pointer"
        >
          <RadioGroupItem value="soon" id="r3" />
          <span className="text-white">Soon</span>
        </label>

        <label
          htmlFor="r4"
          className="flex items-center gap-3 border border-neutral-700 w-full rounded-lg p-4 cursor-pointer"
        >
          <RadioGroupItem value="unsure" id="r4" />
          <span className="text-white">I&apos;m not sure</span>
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
          Submit
        </button>
      </div>
    </div>
  );
}
