export function procesarHistoriaAcademica(texto: string) {
  const lineas = texto.split("\n");
  const materias = [];

  for (let i = 0; i < lineas.length; i++) {
    const partes = lineas[i].split("\t");
    if (partes.length >= 5) {
      const nombreCompleto = partes[0].trim();
      const match = nombreCompleto.match(/(.+)\s\((\d{6,}-?[A-Za-z]?)\)/);
      const nombreOrigen = match ? match[1].trim() : nombreCompleto; // ✅ Extraemos el nombre original
      const codigoOrigen = match ? match[2].trim() : "N/A"; // ✅ Extraemos el código original

      console.log("Código de origen:", codigoOrigen); // ✅ Log para verificar
      console.log("Nombre de origen:", nombreOrigen); // ✅ Log para verificar

      materias.push({
        asignatura: nombreOrigen, // Mantiene el nombre original
        codigo: codigoOrigen,  // ← Código para la comparación
        nombreOrigen, // ✅ Guardamos el nombre original aquí
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
