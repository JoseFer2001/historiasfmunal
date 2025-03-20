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
            <th className="border p-2">Nombre de Origen</th> {/* ✅ Nueva columna */}
            <th className="border p-2">Código</th>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Créditos</th>
            <th className="border p-2">Calificación</th>
            <th className="border p-2">Tipología</th>
          </tr>
        </thead>
        <tbody>
          {asignaturasFaltantes.length > 0 ? (
            asignaturasFaltantes.map((materia, index) => {
              console.log("🔎 Materia en iteración:", materia);
              return (
                <tr key={index}> {/* 🔹 Usa `index` como clave única */}
                  <td className="border p-2">{materia.periodo || "N/A"}</td>
                  <td className="border p-2">{materia.codigoOrigen || "N/A"}</td>
                  <td className="border p-2">{materia.nombreOrigen || "N/A"}</td>
                  <td className="border p-2">{materia.codigo || "N/A"}</td>
                  <td className="border p-2">{materia.nombre || "N/A"}</td>
                  <td className="border p-2">{materia.creditos ?? "N/A"}</td> {/* 🔹 Manejo de números con `??` */}
                  <td className="border p-2">{materia.calificacion || "N/A"}</td>
                  <td className="border p-2">{materia.tipologia || "N/A"}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={8} className="border p-2 text-center">
                No hay asignaturas faltantes
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
