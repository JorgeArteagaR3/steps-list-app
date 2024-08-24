import { BRANDS } from "@/constantss/brands";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddFormSchemaData, addStepFormSchema } from "@/models/step";
import { toast } from "sonner";
import { createStep } from "@/services/steps";
import { useSteps } from "@/context/StepsContext";

export default function AddStepForm() {
  const { fetchSteps } = useSteps();
  const form = useForm<AddFormSchemaData>({
    resolver: zodResolver(addStepFormSchema),
    defaultValues: {
      brand: "",
      Name: "",
      CommercialName: "",
      CommercialDescription: "",
      Status: "A",
    },
  });
  const onSubmit = async (data: AddFormSchemaData) => {
    try {
      console.log(data);
      await createStep(data);
      toast.success("Step creado correctamente");
      fetchSteps();
      form.reset();
    } catch (e) {
      console.error(e);
      toast.error("Error");
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

        <Button type="submit">Crear Step</Button>
      </form>
    </Form>
  );
}
