"use client";

import React from "react";
import { Materia } from "@/components/componentsDobletitulacion/comparadorPlanes";

interface TablaResultadoProps {
  asignaturasFaltantes: Materia[];
}

export default function TablaResultado({ asignaturasFaltantes }: TablaResultadoProps) {
  console.log("📌 Datos recibidos en TablaResultado:", asignaturasFaltantes);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-center">Asignaturas Faltantes</h2>
      <table className="w-full border-collapse border border-gray-300 mt-2">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Periodo</th>
            <th className="border p-2">Código de Origen</th>
            <th className="border p-2">Código</th>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Créditos</th>
            <th className="border p-2">Calificación</th>
            <th className="border p-2">Tipología</th>
          </tr>
        </thead>
        <tbody>
          {asignaturasFaltantes.length > 0 ? (
            asignaturasFaltantes.map((materia) => {
              console.log("🔎 Materia en iteración:", materia);
              return (
                <tr key={materia.codigo}>
                  <td className="border p-2">{materia.periodo || "N/A"}</td>
                  <td className="border p-2">{materia.codigoOrigen || "N/A"}</td> {/* Código de origen agregado */}
                  <td className="border p-2">{materia.codigo}</td>
                  <td className="border p-2">{materia.nombre}</td>
                  <td className="border p-2">{materia.creditos}</td>
                  <td className="border p-2">{materia.calificacion || "N/A"}</td>
                  <td className="border p-2">{materia.tipologia}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={7} className="border p-2 text-center">
                No hay asignaturas faltantes
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
