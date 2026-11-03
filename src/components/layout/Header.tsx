"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import MenuNavegacion from "@/components/layout/MenuNavegacion";
import TarjetaDonar from "@/components/layout/TarjetaDonar";

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    if (!abierto) return;

    const cerrarConEscape = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setAbierto(false);
    };

    document.addEventListener("keydown", cerrarConEscape);
    return () => document.removeEventListener("keydown", cerrarConEscape);
  }, [abierto]);

  return (
    <header className="relative z-50">
      {abierto && (
        <div
          className="fixed inset-0 backdrop-blur-[10px]"
          onClick={() => setAbierto(false)}
          aria-hidden="true"
        />
      )}

      <div className="relative flex items-center justify-between bg-white px-10 py-3">
        <Link href="/">
          <Image
            src="/images/logo-fukom.png"
            alt="FUKOM, ir al inicio"
            width={152}
            height={70}
          />
        </Link>

        <div className="flex items-center gap-2">
          <Button variant="terciario" href="/unete">
            Únete
          </Button>
          <Button
            variant="principal"
            href="/donaciones"
            icon={<Image src="/icons/corazon.svg" alt="" width={17} height={16} />}
          >
            Donar
          </Button>
          <Button
            variant="secundario"
            onClick={() => setAbierto(!abierto)}
            ariaExpanded={abierto}
            ariaControls="menu-principal"
          >
            {abierto ? "Cerrar" : "Menú"}
          </Button>
        </div>
      </div>

      {/* {abierto && (
        <div
          id="menu-principal"
          className="absolute left-0 top-full w-full rounded-b-24 bg-[url('/images/menu-fondo.png')] bg-cover bg-bottom px-24 py-12 shadow-[0px_2px_6px_0px_rgba(7,22,43,0.27)]"
        >
          <div className="absolute inset-0 rounded-b-24 bg-primary-100/15" />
          <MenuNavegacion alNavegar={() => setAbierto(false)} />
        </div>
      )} */}

      {abierto && (
        <div
        id="menu-principal"
        className="absolute left-0 top-full flex w-full items-center justify-between rounded-b-24 bg-[url('/images/menu-fondo.png')] bg-cover bg-bottom px-24 py-12 shadow-[0px_2px_6px_0px_rgba(7,22,43,0.27)]">
          <div className="absolute inset-0 rounded-b-24 bg-primary-100/15" />
            <MenuNavegacion alNavegar={() => setAbierto(false)} />
            <TarjetaDonar alNavegar={() => setAbierto(false)} />
        </div>
      )}
    </header>
  );
}
