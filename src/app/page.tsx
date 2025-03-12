"use client";

import React, { useState } from "react";
import TablaPrueba from "@/components/componentsGeneral/TablaPrueba";
import Navbar from "@/components/componentsGeneral/NavBar";
import Link from "next/link";

export default function Page() {
  const [historia, setHistoria] = useState("");

  return (
    <div className="p-4">
      {/* Barra de navegación */}
      <Navbar />

      <h1 className="text-2xl font-bold mt-4">Historia Académica</h1>
      <textarea
        className="w-full h-40 border p-2 mt-2"
        placeholder="Pega aquí la historia académica..."
        value={historia}
        onChange={(e) => setHistoria(e.target.value)}
      />

      {/* Renderiza la tabla con los datos procesados */}
      <TablaPrueba texto={historia} />

      {/* Botón para ir a Doble Titulación */}
      <div className="flex justify-center mt-4">
        <Link href="/dobletitulacion">
          <button className="px-6 py-2 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700">
            Ir a Doble Titulación
          </button>
        </Link>
      </div>
    </div>
  );
}
