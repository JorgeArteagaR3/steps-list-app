import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
import { Button } from "./ui/button";
import AddStepForm from "./AddStepForm";

export default function AddStepModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="w-fit ml-auto">
          Añadir Step +
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2">
            Llena los datos para crear un step
          </DialogTitle>
          <AddStepForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
