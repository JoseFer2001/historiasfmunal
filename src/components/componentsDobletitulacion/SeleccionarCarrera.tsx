"use client";

import React, { useState } from "react";
import { planIngAdministrativa } from "@/components/planesEstudio/IngAdministrativa";
import { planIngSistemas } from "@/components/planesEstudio/IngSistemas"; // Importamos Ingeniería de Sistemas

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
    }
  };

  return (
    <select className="border p-2" value={carrera} onChange={handleChange}>
      <option value="IngAdministrativa">Ingeniería Administrativa</option>
      <option value="IngSistemas">Ingeniería de Sistemas</option>
      <option value="IngCivil" disabled>Ingeniería Civil (próximamente)</option>
      <option value="IngMecanica" disabled>Ingeniería Mecánica (próximamente)</option>
      {/* Se pueden agregar más carreras aquí */}
    </select>
  );
}
