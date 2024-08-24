"use client";
import AddStepForm from "@/components/AddStepForm";
import AddStepModal from "@/components/AddStepModal";
import StepsFilters from "@/components/StepsFilters";
import StepsList from "@/components/StepsList";
import { useSteps } from "@/context/StepsContext";

export default function Page() {
  const { getFilteredSteps } = useSteps();
  return (
    <div className="flex flex-col gap-2 w-full px-20 py-4">
      <AddStepModal />
      <StepsFilters />
      <StepsList steps={getFilteredSteps()} />
    </div>
  );
}
