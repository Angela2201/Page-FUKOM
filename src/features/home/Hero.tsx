import Image from "next/image";
import Button from "@/components/ui/Button";
import OlaPersonajes from "./OlaPersonajes";
import { home } from "@/content/home";

const { saludo, titulo, descripcion, acciones } = home.hero;

export default function Hero() {
  return (
    <section className="pt-1.5">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-5 text-center">
          <p className="whitespace-pre-wrap text-2xl/8 font-semibold text-neutral-800">
            {saludo}
          </p>

          <h1 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
            {titulo.antesDelCorazon}
            <Image
              src="/icons/corazon-titulo.svg"
              alt="O"
              width={35}
              height={40}
              className="inline-block -translate-y-1.5 align-middle"
            />
            {titulo.despuesDelCorazon}
            <br />
            <span className="text-secondary">{titulo.resaltado}</span>
          </h1>

          <p className="text-2xl/8 font-medium text-neutral-800">
            {descripcion}
          </p>
        </div>

        <div className="flex items-start justify-center gap-3">
          {acciones.map((accion) => (
            <Button
              key={accion.texto}
              variant={accion.variante}
              href={accion.href}
              icon={
                accion.variante === "principal" ? (
                  <Image src="/icons/corazon.svg" alt="" width={17} height={16} />
                ) : undefined
              }
            >
              {accion.texto}
              {accion.variante === "secundario" && (
                <Image
                  src="/icons/chevron.svg"
                  alt=""
                  width={6}
                  height={10}
                  className="-mr-px ml-px"
                />
              )}
            </Button>
          ))}
        </div>
      </div>

      <OlaPersonajes />
    </section>
  );
}
