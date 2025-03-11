export function procesarHistoriaAcademica(texto: string) {
  const lineas = texto.split("\n");
  const materias = [];

  for (let i = 0; i < lineas.length; i++) {
    const partes = lineas[i].split("\t");
    if (partes.length >= 4) {
      materias.push({
        asignatura: partes[0].trim(),
        creditos: partes[1].trim(),
        tipo: partes[2].trim(),
        periodo: partes[3].trim(),
        calificacion: partes[4]?.trim() || "APROBADA", // Si no hay calificación, asignar "APROBADA"
      });
    }
  }

  return materias;
}
