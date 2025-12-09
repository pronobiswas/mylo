"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

type Props = {
  formData: {
    name: string;
    email: string;
    phone: string;
    website: string;
  };
  setFormData: (data: Partial<Props["formData"]>) => void;
  next: () => void;
};

export default function ValuationInfo({ formData, setFormData, next }: Props) {
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleNext = () => {
    const newErrors: Record<string, boolean> = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.website.trim()) newErrors.website = true;

    setErrors(newErrors);

    // only go next if no errors
    if (Object.keys(newErrors).length === 0) {
      next();
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <h2 className="text-2xl font-bold text-white">Contact Info</h2>

      {/* Name */}
      <div className="flex flex-col gap-2">
        <p className={`text-md font-bold ${errors.name ? "text-red-500" : "text-white"}`}>
          Name
        </p>
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={(e) => setFormData({ name: e.target.value })}
          className={errors.name ? "border-2 border-red-500" : "text-white"}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <p className={`text-md font-bold ${errors.email ? "text-red-500" : "text-white"}`}>
          Email
        </p>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => setFormData({ email: e.target.value })}
          className={errors.email ? "border-2 border-red-500" : "text-white"}
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-2">
        <p className={`text-md font-bold ${errors.phone ? "text-red-500" : "text-white"}`}>
          Phone
        </p>
        <Input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={(e) => setFormData({ phone: e.target.value })}
          className={errors.phone ? "border-2 border-red-500" : "text-white"}
        />
      </div>

      {/* Website */}
      <div className="flex flex-col gap-2">
        <p className={`text-md font-bold ${errors.website ? "text-red-500" : "text-white"}`}>
          Website
        </p>
        <Input
          id="website"
          type="url"
          placeholder="Enter your website"
          value={formData.website}
          onChange={(e) => setFormData({ website: e.target.value })}
          className={errors.website ? "border-2 border-red-500" : "text-white"}
        />
      </div>

      <button
        onClick={handleNext}
        className="bg-emerald-500 px-4 py-2 rounded-lg mt-4 text-white text-md font-bold hover:bg-emerald-600 transition-colors duration-200 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}
