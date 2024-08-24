import { Step } from "@/types/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Checkbox } from "./ui/checkbox";
import { deleteStep } from "@/services/steps";
import DeleteStepModal from "./DeleteStepModal";
import { toast } from "sonner";
import { useSteps } from "@/context/StepsContext";
import UpdateStepModal from "./UpdateStepModal";

type StepsListProps = {
  steps: Step[];
};

export default function StepsList({ steps }: StepsListProps) {
  const { fetchSteps, setSteps } = useSteps();

  const handleDelete = async (id: string) => {
    try {
      await deleteStep(id);
      await fetchSteps();
      toast("Step eliminado correctamente");
      setSteps((prevSteps) => {
        const filteredSteps = [...prevSteps].filter((step) => step.id !== id);
        return filteredSteps;
      });
    } catch (e) {
      console.error(e);
      toast("Error");
    }
  };

  return (
    <Table className="text-center">
      <TableCaption>Lista de pasos</TableCaption>
      <TableHeader>
        <TableRow className="text-center">
          <TableHead className="text-center">Code</TableHead>
          <TableHead className="text-center">ID</TableHead>
          <TableHead className="text-center">Step Name</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">Editar</TableHead>
          <TableHead className="text-center">Eliminar</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {steps?.map((step) => (
          <TableRow key={step.id} className="text-center">
            <TableCell>{step.brand.name}</TableCell>
            <TableCell>{step.id}</TableCell>
            <TableCell>{step.name}</TableCell>
            <TableCell>
              {<Checkbox checked={step.status.id === "A" ? true : false} />}
            </TableCell>
            <TableCell>
              <UpdateStepModal step={step} onConfirm={async () => {}} />
            </TableCell>
            <TableCell>
              <DeleteStepModal
                onDelete={async () => {
                  await handleDelete(step.id);
                }}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
