"use client";

import React from "react";
import { procesarHistoriaAcademica } from "@/components/componentsGeneral/procesarHistoria";

type TablaPruebaProps = {
  texto: string;
};

export default function TablaPrueba({ texto }: TablaPruebaProps) {
  const datos = procesarHistoriaAcademica(texto);

  return (
    <div className="w-full max-w-4xl mx-auto mt-4">
      <h2 className="text-lg font-bold text-center">Vista Previa de la Historia Académica</h2>
      <table className="w-full border-collapse border border-gray-300 mt-2">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-2 py-1">Asignatura</th>
            <th className="border border-gray-400 px-2 py-1">Créditos</th>
            <th className="border border-gray-400 px-2 py-1">Tipo</th>
            <th className="border border-gray-400 px-2 py-1">Periodo</th>
            <th className="border border-gray-400 px-2 py-1">Calificación</th>
          </tr>
        </thead>
        <tbody>
          {datos.asignaturas.length > 0 ? (
            datos.asignaturas.map((asignatura, index) => (
              <tr key={index} className="border border-gray-300 text-center">
                <td className="border border-gray-400 px-2 py-1">{asignatura.nombre}</td>
                <td className="border border-gray-400 px-2 py-1">{asignatura.creditos}</td>
                <td className="border border-gray-400 px-2 py-1">{asignatura.tipo}</td>
                <td className="border border-gray-400 px-2 py-1">{asignatura.periodo}</td>
                <td className="border border-gray-400 px-2 py-1">{asignatura.calificacion}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center text-gray-500 py-2">
                No hay datos disponibles
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
