import Image from "next/image";
import Button from "@/components/ui/Button";
import OlaPersonajes from "./OlaPersonajes";

export default function Hero() {
  return (
    <section className="flex flex-col items-center gap-10 overflow-x-clip pb-10 pt-[46px]">
      <div className="flex flex-col items-center gap-5 text-center">
        <p className="whitespace-pre-wrap text-2xl/8 font-semibold text-neutral-800">
          ¡HOLA! SOMOS MAYA, SANTI, LUNA Y  LEO.
        </p>

        <h1 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
          ¡BIENVENID
          <Image
            src="/icons/corazon-titulo.svg"
            alt="O"
            width={35}
            height={40}
            className="inline-block -translate-y-1.5 align-middle"
          />
          S a la
          <br />
          <span className="text-secondary">Fundación Kids de Oruga a Mariposa!</span>
        </h1>

        <p className="text-2xl/8 font-medium text-neutral-800">
          Un espacio donde acompañamos a niños, niñas, jóvenes y familias a transformar sus
          <br />
          vidas a través de experiencias educativas que potencian su desarrollo integral.
        </p>
      </div>

      <div className="flex items-start justify-center gap-3">
        <Button variant="secundario" href="#">
          Cómo lo hacemos posible
          <Image src="/icons/flecha.svg" alt="" width={11} height={10} className="ml-0.5" />
        </Button>
        <Button
          variant="principal"
          href="/donaciones"
          icon={<Image src="/icons/corazon.svg" alt="" width={17} height={16} />}
        >
          Donar
        </Button>
      </div>
      <OlaPersonajes />
    </section>
  );
}
