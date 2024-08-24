import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import React from "react";
import { Button } from "./ui/button";
import { UpdateStepForm } from "./UpdateStepForm";
import { Step } from "@/types/types";

type UpdateStepModalProps = {
  onConfirm: () => Promise<void>;
  step: Step;
};

export default function UpdateStepModal({
  onConfirm,
  step,
}: UpdateStepModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"link"}>Editar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2">Actualizar Step</DialogTitle>
          <UpdateStepForm step={step} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
