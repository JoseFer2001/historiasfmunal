"use client";

import React from "react";

type EntradaHistoriaProps = {
  titulo: string;
  texto: string;
  setTexto: (value: string) => void;
};

export default function EntradaHistoria({ titulo, texto, setTexto }: EntradaHistoriaProps) {
  return (
    <div className="flex flex-col w-full max-w-2xl">
      <h3 className="text-lg font-semibold text-center">{titulo}</h3>
      <textarea
        className="border p-2 w-full h-48 mt-2 resize-none"
        placeholder={`Pega aquí la historia académica de ${titulo.toLowerCase()}`}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
    </div>
  );
}