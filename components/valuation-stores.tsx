"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {
  formData: {
    otherStores: string; 
  };
  setFormData: (data: Partial<Props["formData"]>) => void;
  next: () => void;
  back: () => void;
};

export default function Stores({ formData, setFormData, next, back }: Props) {
  const canNext = !!formData.otherStores;

  return (
    <div className="flex flex-col gap-6 w-full">
      <h2 className="text-2xl font-bold text-white">Do you run other stores?</h2>

      <RadioGroup
        value={formData.otherStores ?? ""} // defensive fallback
        onValueChange={(val) => setFormData({ otherStores: val })}
      >
        <label
          htmlFor="r1"
          className="flex items-center gap-3 border border-neutral-700 w-full rounded-lg p-4 cursor-pointer"
        >
          <RadioGroupItem value="yes" id="r1" />
          <span className="text-white">Yes</span>
        </label>

        <label
          htmlFor="r2"
          className="flex items-center gap-3 border border-neutral-700 w-full rounded-lg p-4 cursor-pointer"
        >
          <RadioGroupItem value="no" id="r2" />
          <span className="text-white">No</span>
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
