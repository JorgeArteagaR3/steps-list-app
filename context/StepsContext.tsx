"use client";

import { getSteps, getStepsByNameOrId } from "@/services/steps";
import { Step } from "@/types/types";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export type StepsContextProps = {
  steps: Step[];
  getFilteredSteps: () => Step[];
  setSteps: Dispatch<SetStateAction<Step[]>>;
  fetchSteps: () => Promise<void>;
  filterStepsByName: (name: string) => Promise<void>;
  setActiveStatus: Dispatch<SetStateAction<string>>;
};

const StepsContext = createContext<StepsContextProps>({} as StepsContextProps);

export function StepsProvider({ children }: PropsWithChildren) {
  const [steps, setSteps] = useState<Step[]>([]);
  const [activeStatus, setActiveStatus] = useState("");

  const getFilteredSteps = () => {
    if (!activeStatus) return steps;
    if (activeStatus === "All") return steps;
    return steps.filter((step) => step.status.id === activeStatus);
  };
  const fetchSteps = async () => {
    const data = await getSteps();
    setSteps(data);
  };

  const filterStepsByName = async (name: string) => {
    try {
      const data = await getStepsByNameOrId(name);
      setSteps(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchSteps();
  }, []);

  return (
    <StepsContext.Provider
      value={{
        steps,
        setSteps,
        fetchSteps,
        filterStepsByName,
        getFilteredSteps,
        setActiveStatus,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
}

export const useSteps = () => useContext(StepsContext);
