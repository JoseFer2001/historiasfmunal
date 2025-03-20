"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/componentsGeneral/NavBar";
import SeleccionarCarrera from "@/components/componentsDobletitulacion/SeleccionarCarrera";
import { compararPlanes, Materia } from "@/components/componentsDobletitulacion/comparadorPlanes";
import TablaResultado from "@/components/componentsDobletitulacion/TablaResultado";

// Importamos los planes de estudio
import { planIngAdministrativa } from "@/components/planesEstudio/IngAdministrativa"; 
import { planIngSistemas } from "@/components/planesEstudio/IngSistemas";
import { PlanIngCivil } from "@/components/planesEstudio/IngCivil";
import { planIngQuimica } from "@/components/planesEstudio/IngQuimica";
import { planIngControl } from "@/components/planesEstudio/IngControl";
import { planIngPetroleos } from "@/components/planesEstudio/IngPetroleos";
import { planIngMecanica } from "@/components/planesEstudio/IngMecanica";
import { PlanIngAmbiental } from "@/components/planesEstudio/IngAmbiental";
import { planIngElectrica } from "@/components/planesEstudio/IngElectrica";

export default function DobleTitulacion() {
  const [historiaOrigen, setHistoriaOrigen] = useState("");
  const [historiaDoble, setHistoriaDoble] = useState("");
  const [planSeleccionado, setPlanSeleccionado] = useState<Materia[]>(planIngAdministrativa as Materia[]);
  const [resultado, setResultado] = useState<Materia[]>([]);
  const [carreraSeleccionada, setCarreraSeleccionada] = useState("IngAdministrativa"); // ✅ Ahora guardamos la carrera seleccionada

  useEffect(() => {
    console.log("Plan Seleccionado actualizado:", planSeleccionado);
  }, [planSeleccionado]);

  // ✅ Función para ejecutar la comparación con la carrera correcta
  const comparar = () => {
    if (!carreraSeleccionada) {
      console.error("No se ha seleccionado ninguna carrera.");
      return;
    }

    const asignaturasFaltantes = compararPlanes(historiaOrigen, historiaDoble, planSeleccionado, carreraSeleccionada);
    console.log("Asignaturas faltantes:", asignaturasFaltantes);
    setResultado(asignaturasFaltantes);
  };

  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-center">Comparador de Planes Curriculares</h1>

        {/* Seleccionar Carrera */}
        <div className="mt-4">
          <SeleccionarCarrera 
            setPlanSeleccionado={setPlanSeleccionado} 
            setCarreraSeleccionada={setCarreraSeleccionada} // ✅ Guardamos la carrera seleccionada
          />
        </div>

        {/* Contenedor con dos columnas */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          {/* Entrada Historia Plan Origen */}
          <div>
            <h2 className="text-lg font-semibold">Historia Académica - Primer Plan</h2>
            <textarea
              className="w-full h-40 border p-2 mt-2 rounded-md"
              placeholder="Pega aquí la historia académica del Plan #1..."
              value={historiaOrigen}
              onChange={(e) => setHistoriaOrigen(e.target.value)}
            />
          </div>

          {/* Entrada Historia Plan Doble Titulación */}
          <div>
            <h2 className="text-lg font-semibold">Historia Académica - Segundo Plan</h2>
            <textarea
              className="w-full h-40 border p-2 mt-2 rounded-md"
              placeholder="Pega aquí la historia académica del Plan #2..."
              value={historiaDoble}
              onChange={(e) => setHistoriaDoble(e.target.value)}
            />
          </div>
        </div>

        {/* Botón de Comparación */}
        <div className="flex justify-center mt-4">
          <button
            onClick={comparar}
            className="px-6 py-2 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700"
          >
            Comparar Planes
          </button>
        </div>

        {/* Tabla de Resultados */}
        <TablaResultado asignaturasFaltantes={resultado} />
      </div>
    </div>
  );
}
