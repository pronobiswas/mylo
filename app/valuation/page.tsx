export const dynamic = "force-dynamic";

import MultiStepForm from "./MultiStepForm";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ domain?: string }>;
}) {
  const params = await searchParams; 
  return <MultiStepForm domainParam={params.domain ?? ""} />;
}
