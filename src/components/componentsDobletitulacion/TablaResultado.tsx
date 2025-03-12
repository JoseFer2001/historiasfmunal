"use client";

import React from "react";
import { Materia } from "@/components/componentsDobletitulacion/comparadorPlanes";

interface TablaResultadoProps {
  asignaturasFaltantes: Materia[];
}

export default function TablaResultado({ asignaturasFaltantes }: TablaResultadoProps) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-center">Asignaturas Faltantes</h2>
      <table className="w-full border-collapse border border-gray-300 mt-2">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Código</th>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Tipología</th>
          </tr>
        </thead>
        <tbody>
          {asignaturasFaltantes.length > 0 ? (
            asignaturasFaltantes.map((materia) => (
              <tr key={materia.codigo}>
                <td className="border p-2">{materia.codigo}</td>
                <td className="border p-2">{materia.nombre}</td>
                <td className="border p-2">{materia.tipologia}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="border p-2 text-center">
                No hay asignaturas faltantes
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
