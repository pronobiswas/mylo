"use client";

import { useState, useEffect } from "react";
import ValuationInfo from "@/components/valuation-info";
import Selling from "@/components/valuation-selling";
import Finance from "@/components/valuation-finance";
import Stores from "@/components/valuation-stores";
import Exit from "@/components/valuation-exit";
import Submit from "@/components/valuation-submit";

export default function MultiStepForm({ domainParam }: { domainParam: string }) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: domainParam || "",
    reason: "",
    twelveMonthProfit: "",
    twelveMonthRevenue: "",
    lastMonthRevenue: "",
    lastMonthProfit: "",
    allTimeRevenue: "",
    allTimeProfit: "",
    otherStores: "",
    exitPlan: "",
  });

  // Pre-fill website if domain param exists
  useEffect(() => {
    if (domainParam) {
      setFormData((prev) => ({ ...prev, website: domainParam }));
    }
  }, [domainParam]);

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);

  const submit = async () => {
    setStep((s) => s + 1);
    console.log("Form submitted with data:", formData);

    await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  };

  const updateFormData = (data: Partial<typeof formData>) =>
    setFormData((prev) => ({ ...prev, ...data }));

  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-black">
      <div className="flex flex-col items-center w-full max-w-xl p-6 rounded-2xl">
        {step === 0 && (
          <ValuationInfo formData={formData} setFormData={updateFormData} next={next} />
        )}
        {step === 1 && (
          <Selling formData={formData} setFormData={updateFormData} next={next} back={prev} />
        )}
        {step === 2 && (
          <Finance formData={formData} setFormData={updateFormData} next={next} back={prev} />
        )}
        {step === 3 && (
          <Stores formData={formData} setFormData={updateFormData} next={next} back={prev} />
        )}
        {step === 4 && (
          <Exit formData={formData} setFormData={updateFormData} next={submit} back={prev} />
        )}
        {step === 5 && <Submit />}
      </div>
    </div>
  );
}
