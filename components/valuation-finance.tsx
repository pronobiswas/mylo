"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";


type Props = {
  formData: {
    twelveMonthRevenue: string; 
    twelveMonthProfit: string;
    lastMonthRevenue: string;
    lastMonthProfit: string;
    allTimeRevenue: string;
    allTimeProfit: string;
  };
  setFormData: (data: Partial<Props["formData"]>) => void;
  next: () => void;
  back: () => void;
};

export default function Finance({ formData, setFormData, next, back }: Props) {
    const [errors, setErrors] = useState<Record<string, boolean>>({});
  
    const handleNext = () => {
      const newErrors: Record<string, boolean> = {};
      if (!formData.twelveMonthRevenue.trim()) newErrors.twelveMonthRevenue = true;
      if (!formData.twelveMonthProfit.trim()) newErrors.twelveMonthProfit = true;
      if (!formData.lastMonthRevenue.trim()) newErrors.lastMonthRevenue = true;
      if (!formData.lastMonthProfit.trim()) newErrors.lastMonthProfit = true;
      if (!formData.allTimeRevenue.trim()) newErrors.allTimeRevenue = true;
      if (!formData.allTimeProfit.trim()) newErrors.allTimeProfit = true;
  
      setErrors(newErrors);
  
      // only go next if no errors
      if (Object.keys(newErrors).length === 0) {
        next();
      }
    };

  return (
<div className="flex flex-col gap-4 w-full">
      <h2 className="text-2xl font-bold text-white">Finance</h2>


      <div className="flex flex-col gap-2">
        <p className={`text-md font-bold ${errors.twelveMonthRevenue ? "text-red-500" : "text-white"}`}>
          Last 12 months revenue
        </p>
        <Input
          id="twelveMonthRevenue"
          type="number"
          placeholder="$ 1,000.00"
          value={formData.twelveMonthRevenue}
          onChange={(e) => setFormData({ twelveMonthRevenue: e.target.value })}
          className={errors.twelveMonthRevenue ? "border-2 border-red-500 text-white" : "text-white"}
        />
      </div>


      <div className="flex flex-col gap-2">
        <p className={`text-md font-bold ${errors.twelveMonthProfit ? "text-red-500" : "text-white"}`}>
          Last 12 months profit
        </p>
        <Input
          id="twelveMonthProfit"
          type="number"
          placeholder="$ 1,000.00"
          value={formData.twelveMonthProfit}
          onChange={(e) => setFormData({ twelveMonthProfit: e.target.value })}
          className={errors.twelveMonthProfit ? "border-2 border-red-500 text-white" : "text-white"}
        />
      </div>

   
      <div className="flex flex-col gap-2">
        <p className={`text-md font-bold ${errors.lastMonthRevenue ? "text-red-500" : "text-white"}`}>
          Last month revenue
        </p>
        <Input
          id="lastMonthRevenue"
          type="number"
          placeholder="$ 1,000.00"
          value={formData.lastMonthRevenue}
          onChange={(e) => setFormData({ lastMonthRevenue: e.target.value })}
          className={errors.lastMonthRevenue ? "border-2 border-red-500 text-white" : "text-white"}
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className={`text-md font-bold ${errors.lastMonthProfit ? "text-red-500" : "text-white"}`}>
          Last month profit
        </p>
        <Input
          id="lastMonthProfit"
          type="number"
          placeholder="$ 1,000.00"
          value={formData.lastMonthProfit}
          onChange={(e) => setFormData({ lastMonthProfit: e.target.value })}
          className={errors.lastMonthProfit ? "border-2 border-red-500 text-white" : "text-white"}
        />
      </div>


      <div className="flex flex-col gap-2">
        <p className={`text-md font-bold ${errors.allTimeRevenue ? "text-red-500" : "text-white"}`}>
          All time revenue
        </p>
        <Input
          id="allTimeRevenue"
          type="number"
          placeholder="$ 1,000.00"
          value={formData.allTimeRevenue}
          onChange={(e) => setFormData({ allTimeRevenue: e.target.value })}
          className={errors.allTimeRevenue ? "border-2 border-red-500 text-white" : "text-white"}
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className={`text-md font-bold ${errors.allTimeProfit ? "text-red-500" : "text-white"}`}>
          All time profit
        </p>
        <Input
          id="allTimeProfit"
          type="number"
          placeholder="$ 1,000.00"
          value={formData.allTimeProfit}
          onChange={(e) => setFormData({ allTimeProfit: e.target.value })}
          className={errors.allTimeProfit ? "border-2 border-red-500 text-white" : "text-white"}
        />
      </div>

      <div className="flex justify-between gap-4">
        <button
          onClick={back}
          className="bg-neutral-700 px-6 py-2 rounded-lg text-white font-bold hover:bg-neutral-800 transition-colors duration-200"
        >
          Back
        </button>

        <button
          onClick={handleNext}
          className={`px-6 py-2 rounded-lg font-bold transition-colors duration-200 bg-emerald-500 text-white hover:bg-emerald-600`}
        >
          Next
        </button>
      </div>
    </div>
  );
}