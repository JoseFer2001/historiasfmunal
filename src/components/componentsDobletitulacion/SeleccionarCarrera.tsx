"use client";

import React, { useState } from "react";
import { planIngAdministrativa } from "@/components/planesEstudio/IngAdministrativa";
import { planIngSistemas } from "@/components/planesEstudio/IngSistemas";
import { PlanIngCivil } from "@/components/planesEstudio/IngCivil";
import { planIngQuimica } from "@/components/planesEstudio/IngQuimica";
import { planIngControl } from "@/components/planesEstudio/IngControl";
import { planIngPetroleos } from "@/components/planesEstudio/IngPetroleos";
import { planIngMecanica } from "@/components/planesEstudio/IngMecanica";
import { PlanIngAmbiental } from "@/components/planesEstudio/IngAmbiental";
import { planIngElectrica } from "../planesEstudio/IngElectrica";

interface SeleccionarCarreraProps {
  setPlanSeleccionado: (plan: any) => void;
  setCarreraSeleccionada: (carrera: string) => void;
}

// Mapeo de carrera a su respectivo plan de estudios
const planesPorCarrera: Record<string, any> = {
  IngAdministrativa: planIngAdministrativa,
  IngSistemas: planIngSistemas,
  IngCivil: PlanIngCivil,
  IngQuimica: planIngQuimica,
  IngControl: planIngControl,
  IngPetroleos: planIngPetroleos,
  IngMecanica: planIngMecanica,
  IngAmbiental: PlanIngAmbiental,
  IngElectrica: planIngElectrica,
};

const carrerasDisponibles = Object.keys(planesPorCarrera);

export default function SeleccionarCarrera({ setPlanSeleccionado, setCarreraSeleccionada }: SeleccionarCarreraProps) {
  const [carrera, setCarrera] = useState("IngAdministrativa");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCareer = event.target.value;
    setCarrera(selectedCareer);
    setCarreraSeleccionada(selectedCareer);
    setPlanSeleccionado(planesPorCarrera[selectedCareer]); // Obtiene el plan directamente del objeto
  };

  return (
    <select className="border p-2" value={carrera} onChange={handleChange}>
      {carrerasDisponibles.map((c) => (
        <option key={c} value={c}>
          {c.replace("Ing", "Ingeniería ")}
        </option>
      ))}
    </select>
  );
}