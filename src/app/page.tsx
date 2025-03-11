"use client"

import React, { useState } from "react";
import { procesarHistoriaAcademica } from "@/components/componentsGeneral/procesarHistoria";

export default function Page() {
  const [historia, setHistoria] = useState("");

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Historia Académica</h1>
      <textarea
        className="w-full h-40 border p-2 mt-2"
        placeholder="Pega aquí la historia académica..."
        value={historia}
        onChange={(e) => setHistoria(e.target.value)}
      />
      <pre className="mt-4 p-4 bg-gray-100">
        {JSON.stringify(procesarHistoriaAcademica(historia), null, 2)}
      </pre>
    </div>
  );
}
