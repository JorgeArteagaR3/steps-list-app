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
import { TrashIcon } from "@heroicons/react/24/outline";

type DeleteStepModalProps = {
  onDelete: () => Promise<void>;
};

export default function DeleteStepModal({ onDelete }: DeleteStepModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>
          <TrashIcon className="h-6 w-6 text-red-400 mx-auto" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2">
            Estas seguro que deseas eliminar?
          </DialogTitle>
          <DialogDescription className="flex justify-center gap-2">
            <DialogClose asChild>
              <Button>No</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                variant={"destructive"}
                onClick={async () => {
                  onDelete();
                }}
              >
                Si
              </Button>
            </DialogClose>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
