"use client";

export type Materia = {
  codigo: string;
  nombre: string;
  creditos: number;
  tipologia: string;
  periodo?: string;
  calificacion?: string;
  codigoOrigen: string; // ✅ Código de origen
  nombreOrigen: string;  // ✅ Nombre de origen
};

import { procesarHistoriaAcademica } from "../componentsGeneral/procesarHistoria";
import { codigoAntiguoANuevo } from "../planesEstudio/codigoAntiguoANuevo";

/**
 * Compara los planes de estudio y devuelve las asignaturas del primer plan
 * que pertenecen al plan de doble titulación pero no han sido cursadas en este último.
 *
 * @param historiaOrigen - Historia académica del plan de origen en formato de texto.
 * @param historiaDoble - Historia académica del plan de doble titulación en formato de texto.
 * @param planSeleccionado - Lista de asignaturas del plan de doble titulación.
 * @param carrera - Carrera seleccionada para obtener equivalencias de código.
 * @returns Lista de asignaturas que ya se vieron en el primer plan pero no en el segundo.
 */
export function compararPlanes(
  historiaOrigen: string,
  historiaDoble: string,
  planSeleccionado: Materia[],
  carrera: string
): Materia[] {
  const historiaOrigenProcesada = procesarHistoriaAcademica(historiaOrigen);
  const historiaDobleProcesada = procesarHistoriaAcademica(historiaDoble);

  // Obtener equivalencias de la carrera seleccionada
  const equivalencias = codigoAntiguoANuevo[carrera] || {};

  // 🔹 Convertimos los códigos antiguos a nuevos y guardamos el código original
  const historiaOrigenConvertida = historiaOrigenProcesada.map((materia) => {
    const codigoNuevo = equivalencias[materia.codigo] || materia.codigo;

    const materiaTransformada = {
      ...materia,
      codigo: Array.isArray(codigoNuevo) ? codigoNuevo[0] : codigoNuevo, // El código nuevo
      codigoOrigen: materia.codigo, // ✅ Guardamos el código original
      nombreOrigen: materia.nombreOrigen, // ✅ Guardamos el nombre original
    };

    console.log("🔍 Materia procesada en historiaOrigenConvertida:", materiaTransformada); // 👀 Log para verificar la conversión

    return materiaTransformada;
  });

  // 🔹 Comparamos con el plan de doble titulación
  return planSeleccionado
    .map((asignatura) => {
      // 🔎 Buscamos si la materia está en la historia convertida
      const materiaEncontrada = historiaOrigenConvertida.find(
        (h) => h.codigo === asignatura.codigo
      );

      console.log(
        "🔍 Buscando código de origen para:",
        asignatura.codigo,
        "Resultado:",
        materiaEncontrada
      ); // 👀 Log para verificar la búsqueda

      if (
        materiaEncontrada &&
        !historiaDobleProcesada.some((h) => h.codigo === asignatura.codigo)
      ) {
        const resultado = {
          ...asignatura,
          codigoOrigen: materiaEncontrada.codigoOrigen || "N/A", // ✅ Guardamos el código original
          nombreOrigen: materiaEncontrada.nombreOrigen || "N/A", // ✅ Guardamos el nombre original
          codigo: asignatura.codigo, // Código actual del plan de doble titulación
          periodo: materiaEncontrada.periodo || "N/A",
          calificacion: materiaEncontrada.calificacion || "N/A",
        };

        console.log("✅ Resultado Final con código y nombre de origen:", resultado); // 👀 Log final antes de regresar la lista de asignaturas

        return resultado;
      }
      return null;
    })
    .filter(Boolean) as Materia[];
}
