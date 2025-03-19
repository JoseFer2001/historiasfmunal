"use client";

import React, { useState } from "react";
import { planIngAdministrativa } from "@/components/planesEstudio/IngAdministrativa";
import { planIngSistemas } from "@/components/planesEstudio/IngSistemas";
import { PlanIngCivil } from "@/components/planesEstudio/IngCivil";
import { planIngQuimica} from "@/components/planesEstudio/IngQuimica";
import { planIngControl } from "@/components/planesEstudio/IngControl";
import { planIngPetroleos } from "@/components/planesEstudio/IngPetroleos";
import { planIngMecanica } from "@/components/planesEstudio/IngMecanica";
import { PlanIngAmbiental } from "@/components/planesEstudio/IngAmbiental";

interface SeleccionarCarreraProps {
  setPlanSeleccionado: (plan: any) => void;
}

export default function SeleccionarCarrera({ setPlanSeleccionado }: SeleccionarCarreraProps) {
  const [carrera, setCarrera] = useState("IngAdministrativa");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCareer = event.target.value;
    setCarrera(selectedCareer);

    // Asignamos el plan correspondiente
    if (selectedCareer === "IngAdministrativa") {
      setPlanSeleccionado(planIngAdministrativa);
    } else if (selectedCareer === "IngSistemas") {
      setPlanSeleccionado(planIngSistemas);
    } else if (selectedCareer === "IngCivil") {
      setPlanSeleccionado(PlanIngCivil);
    } else if (selectedCareer === "IngQuimica") {
      setPlanSeleccionado(planIngQuimica);
    } else if (selectedCareer === "IngControl") {
      setPlanSeleccionado(planIngControl);
    } else if (selectedCareer === "IngPetroleos") {
      setPlanSeleccionado(planIngPetroleos);
    } else if (selectedCareer === "IngMecanica") {
      setPlanSeleccionado(planIngMecanica);
    } else if (selectedCareer === "IngAmbiental") {
      setPlanSeleccionado(PlanIngAmbiental);
    }
  };

  return (
    <select className="border p-2" value={carrera} onChange={handleChange}>
      <option value="IngAdministrativa">Ingeniería Administrativa</option>
      <option value="IngSistemas">Ingeniería de Sistemas</option>
      <option value="IngCivil">Ingeniería Civil</option>
      <option value="IngMecanica">Ingeniería Mecánica</option>
      <option value="IngQuimica">Ingeniería Química</option>
      <option value="IngControl">Ingeniería de Control</option> 
      <option value="IngPetroleos">Ingeniería de Petróleos</option>
      <option value="IngAmbiental">Ingeniería Ambiental</option>
    </select>
  );
}
