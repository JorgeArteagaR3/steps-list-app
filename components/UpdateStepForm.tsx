import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BRANDS } from "@/constantss/brands";
import { UpdateStepFormData, updateStepFormSchema } from "@/models/step";
import { updateStep } from "@/services/steps";
import { toast } from "sonner";
import { Step } from "@/types/types";
import { useSteps } from "@/context/StepsContext";

type UpdateStepFormProps = {
  step: Step;
};

export const UpdateStepForm = ({ step }: UpdateStepFormProps) => {
  const { fetchSteps } = useSteps();
  const form = useForm<UpdateStepFormData>({
    resolver: zodResolver(updateStepFormSchema),
    defaultValues: {
      brand: step.brand.id,
      Name: step.name,
      CommercialName: step.commercialName,
      CommercialDescription: step.commercialDescription,
      Status: step.status.id,
    },
  });

  const onSubmit = async (data: UpdateStepFormData) => {
    try {
      await updateStep(step.id, data);
      await fetchSteps();
      toast("Step actualizado correctamente");
    } catch (e) {
      if (e instanceof Error) {
        toast("Hubo un error al actualizar el step");
        console.error(e);
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Marca</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione una marca" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {BRANDS.map((brand) => (
                    <SelectItem key={brand.id} value={brand.id}>
                      {brand.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese el nombre" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="CommercialName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Comercial</FormLabel>
              <FormControl>
                <Input placeholder="Ingrese el nombre comercial" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="CommercialDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción Comercial</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ingrese la descripción comercial"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estado</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione un estado" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="A">Activo</SelectItem>
                  <SelectItem value="I">Inactivo</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="self-center">
          Actualizar
        </Button>
      </form>
    </Form>
  );
};

export default UpdateStepForm;
