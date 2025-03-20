export function procesarHistoriaAcademica(texto: string) {
  const lineas = texto.split("\n");
  const materias = [];

  for (let i = 0; i < lineas.length; i++) {
    const partes = lineas[i].split("\t");
    if (partes.length >= 5) {
      const nombreCompleto = partes[0].trim();
      const match = nombreCompleto.match(/(.+)\s\((\d{6,}-?[A-Za-z]?)\)/);
      const asignatura = match ? match[1].trim() : nombreCompleto;
      const codigoOrigen = match ? match[2].trim() : "N/A";
      console.log("Código de origen:", codigoOrigen); // ✅ Aquí extraemos el código original del texto pegado

      materias.push({
        asignatura,
        codigo: codigoOrigen,  // ← Este es el código que se usa en la comparación
        creditos: partes[1].trim(),
        tipo: partes[2].trim(),
        periodo: partes[3].trim(),
        calificacion: partes[4]?.trim() || "APROBADA",
      });
    }
  }
  console.log("Materia procesada en historiaOrigen:", materias);
  return materias;
}
