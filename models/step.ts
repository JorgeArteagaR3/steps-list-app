import { z } from "zod";

export const updateStepFormSchema = z.object({
  brand: z.string().min(1, "La marca es requerida"),
  Name: z.string().min(1, "El nombre es requerido"),
  CommercialName: z.string().min(1, "El nombre comercial es requerido"),
  CommercialDescription: z
    .string()
    .min(1, "La descripción comercial es requerida"),
  Status: z.string(),
});

export type UpdateStepFormData = z.infer<typeof updateStepFormSchema>;

export const addStepFormSchema = z.object({
  brand: z.string().min(1, "La marca es requerida"),
  Name: z.string().min(1, "El nombre es requerido"),
  CommercialName: z.string().min(1, "El nombre comercial es requerido"),
  CommercialDescription: z
    .string()
    .min(1, "La descripción comercial es requerida"),
  Status: z.enum(["A", "I"]),
});
export type AddFormSchemaData = z.infer<typeof addStepFormSchema>;
