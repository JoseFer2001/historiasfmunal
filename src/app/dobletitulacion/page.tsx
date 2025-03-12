"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/componentsGeneral/NavBar";
import SeleccionarCarrera from "@/components/componentsDobletitulacion/SeleccionarCarrera";
import { planIngAdministrativa } from "@/components/planesEstudio/IngAdministrativa"; 
import { planIngSistemas } from "@/components/planesEstudio/IngSistemas";
import { compararPlanes, Materia } from "@/components/componentsDobletitulacion/comparadorPlanes";
import TablaResultado from "@/components/componentsDobletitulacion/TablaResultado";

export default function DobleTitulacion() {
  const [historiaOrigen, setHistoriaOrigen] = useState("");
  const [historiaDoble, setHistoriaDoble] = useState("");
  const [planSeleccionado, setPlanSeleccionado] = useState<Materia[]>(planIngAdministrativa);
  const [resultado, setResultado] = useState<Materia[]>([]);

  useEffect(() => {
    console.log("Plan Seleccionado actualizado:", planSeleccionado);
  }, [planSeleccionado]);

  // Función para ejecutar la comparación
  const comparar = () => {
    const asignaturasFaltantes = compararPlanes(historiaOrigen, historiaDoble, planSeleccionado);
    console.log("Asignaturas faltantes:", asignaturasFaltantes);
    setResultado(asignaturasFaltantes);
  };

  return (
    <div>
      {/* Barra de navegación */}
      <Navbar />

      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-center">Comparador de Doble Titulación</h1>

        {/* Seleccionar Carrera */}
        <div className="mt-4">
          <SeleccionarCarrera setPlanSeleccionado={setPlanSeleccionado} />
        </div>

        {/* Contenedor con dos columnas */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          {/* Entrada Historia Plan Origen */}
          <div>
            <h2 className="text-lg font-semibold">Historia Académica - Plan Origen</h2>
            <textarea
              className="w-full h-40 border p-2 mt-2 rounded-md"
              placeholder="Pega aquí la historia académica del Plan de Origen..."
              value={historiaOrigen}
              onChange={(e) => setHistoriaOrigen(e.target.value)}
            />
          </div>

          {/* Entrada Historia Plan Doble Titulación */}
          <div>
            <h2 className="text-lg font-semibold">Historia Académica - Doble Titulación</h2>
            <textarea
              className="w-full h-40 border p-2 mt-2 rounded-md"
              placeholder="Pega aquí la historia académica del Plan de Doble Titulación..."
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
