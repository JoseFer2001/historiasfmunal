"use client";

import React from "react";
import { procesarHistoriaAcademica } from "@/components/componentsGeneral/procesarHistoria";

type TablaPruebaProps = {
  texto: string;
};

export default function TablaPrueba({ texto }: TablaPruebaProps) {
  const datos = procesarHistoriaAcademica(texto);

  return (
    <div className="mt-4">
      <h2 className="text-lg font-bold text-center">Vista Previa de la Historia Académica</h2>
      <table className="w-full border-collapse border border-gray-300 mt-2">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-2 py-1">Asignatura</th>
            <th className="border border-gray-400 px-2 py-1">Código</th>
            <th className="border border-gray-400 px-2 py-1">Créditos</th>
            <th className="border border-gray-400 px-2 py-1">Tipo</th>
            <th className="border border-gray-400 px-2 py-1">Periodo</th>
            <th className="border border-gray-400 px-2 py-1">Calificación</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((materia, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-400 px-2 py-1">{materia.asignatura}</td>
              <td className="border border-gray-400 px-2 py-1">{materia.codigo}</td>
              <td className="border border-gray-400 px-2 py-1">{materia.creditos}</td>
              <td className="border border-gray-400 px-2 py-1">{materia.tipo}</td>
              <td className="border border-gray-400 px-2 py-1">{materia.periodo}</td>
              <td className="border border-gray-400 px-2 py-1">{materia.calificacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}