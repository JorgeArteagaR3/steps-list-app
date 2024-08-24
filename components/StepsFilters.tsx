"use client";

import { BRANDS } from "@/constantss/brands";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { useSteps } from "@/context/StepsContext";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export default function StepsFilters() {
  const { filterStepsByName, setActiveStatus, fetchSteps } = useSteps();
  const [query, setQuery] = useState("");
  const [value] = useDebounce(query, 1000);

  useEffect(() => {
    filterStepsByName(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div className="flex  gap-4 flex-col">
      <p className="font-bold">Filtrar Steps</p>
      <div className="flex justify-between gap-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Marca" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Marcas</SelectLabel>
              {BRANDS.map((brand) => (
                <SelectItem value={brand.name} key={brand.id}>
                  {brand.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          placeholder="Buscar step"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <Select
          onValueChange={(value) => {
            setActiveStatus(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="All">Todos</SelectItem>
              <SelectItem value="A">Activo</SelectItem>
              <SelectItem value="I">Inactivo</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
