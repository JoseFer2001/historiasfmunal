export function procesarHistoriaAcademica(texto: string) {
  const lineas = texto.split("\n");
  const materias = [];

  for (let i = 0; i < lineas.length; i++) {
    const partes = lineas[i].split("\t");
    if (partes.length >= 4) {
      const nombreCompleto = partes[0].trim();
      const match = nombreCompleto.match(/(.+)\s\((\d{6,}-?[A-Za-z]?)\)/);
      const asignatura = match ? match[1].trim() : nombreCompleto;
      const codigo = match ? match[2].trim() : "N/A"; // Si no encuentra código, poner "N/A"

      materias.push({
        asignatura,
        codigo,
        creditos: partes[1].trim(),
        tipo: partes[2].trim(),
        periodo: partes[3].trim(),
        calificacion: partes[4]?.trim() || "APROBADA",
      });
    }
  }

  return materias;
}
