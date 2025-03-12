"use client";

import { procesarHistoriaAcademica } from "../componentsGeneral/procesarHistoria";

export type Materia = {
  codigo: string;
  nombre: string;
  tipologia: string;
};

/**
 * Compara los planes de estudio y devuelve las asignaturas del primer plan 
 * que pertenecen al plan de doble titulación pero no han sido cursadas en este último.
 *
 * @param historiaOrigen - Historia académica del plan de origen en formato de texto.
 * @param historiaDoble - Historia académica del plan de doble titulación en formato de texto.
 * @param planSeleccionado - Lista de asignaturas del plan de doble titulación.
 * @returns Lista de asignaturas que ya se vieron en el primer plan pero no en el segundo.
 */
export function compararPlanes(
  historiaOrigen: string,
  historiaDoble: string,
  planSeleccionado: Materia[]
): Materia[] {
  const historiaOrigenProcesada = procesarHistoriaAcademica(historiaOrigen);
  const historiaDobleProcesada = procesarHistoriaAcademica(historiaDoble);

  return planSeleccionado.filter(asignatura =>
    historiaOrigenProcesada.some(h => h.codigo === asignatura.codigo) &&
    !historiaDobleProcesada.some(h => h.codigo === asignatura.codigo)
  );
}
