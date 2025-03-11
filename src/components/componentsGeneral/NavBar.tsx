"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  const linkClass = (path: string) =>
    `px-4 py-2 rounded-md transition-colors duration-300 ${
      pathname === path ? "bg-emerald-700 text-white" : "text-emerald-900 hover:bg-emerald-500 hover:text-white"
    }`;

  return (
    <nav className="bg-emerald-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-center gap-6">
        <Link href="/reingreso" className={linkClass("/reingreso")}>
          Reingreso
        </Link>
        <Link href="/dobletitulacion" className={linkClass("/dobletitulacion")}>
          Doble Titulación
        </Link>
      </div>
    </nav>
  );
}
