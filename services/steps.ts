import { AddFormSchemaData, UpdateStepFormData } from "@/models/step";
import { Step } from "@/types/types";

const BASE_URL = "https://apiqa.franquiciasperu.com/products/v1/steps";
const token = process.env.API_TOKEN;

const AUTH_HEADER = `Bearer ${token}`;

export const getSteps = async () => {
  const res = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH_HEADER,
    },
  });
  const data = await res.json();
  return data.data as Promise<Step[]>;
};

export const deleteStep = async (id: string) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH_HEADER,
    },
  });
  console.log(res);
};

export const getStepsByNameOrId = async (name: string) => {
  const res = await fetch(`${BASE_URL}/?filter=${name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH_HEADER,
    },
  });
  const data = await res.json();
  return data.data as Promise<Step[]>;
};

export const updateStep = async (id: string, formData: UpdateStepFormData) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH_HEADER,
    },
    body: JSON.stringify(formData),
  });
  console.log(res);
};

export const createStep = async (formData: AddFormSchemaData) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: AUTH_HEADER,
    },
    body: JSON.stringify(formData),
  });
  console.log(res);
};
