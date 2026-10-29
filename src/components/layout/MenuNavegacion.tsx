import Image from "next/image";
import Link from "next/link";
import { columnasMenu } from "@/content/navegacion";

type MenuNavegacionProps = {
  alNavegar: () => void;
};

export default function MenuNavegacion({ alNavegar }: MenuNavegacionProps) {
  return (
    <nav aria-label="Principal" className="relative flex gap-18">
      {columnasMenu.map((columna, indice) => (
        <div key={indice} className="flex w-60 flex-col gap-10">
          {columna.map((seccion) => (
            <div key={seccion.titulo} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Image
                  src={seccion.icono}
                  alt=""
                  width={seccion.anchoIcono}
                  height={32}
                />
                <p className={`text-2xl/8 font-semibold ${seccion.color}`}>
                  {seccion.href ? (
                    <Link href={seccion.href} onClick={alNavegar}>
                      {seccion.titulo}
                    </Link>
                  ) : (
                    seccion.titulo
                  )}
                </p>
              </div>

              <ul className="flex flex-col gap-2">
                {seccion.enlaces.map((enlace) => (
                  <li key={enlace.texto}>
                    <Link
                      href={enlace.href}
                      onClick={alNavegar}
                      className="block text-base/5 font-medium text-neutral-1000 hover:font-bold hover:underline hover:decoration-from-font hover:[text-underline-position:from-font]"
                    >
                      {enlace.texto}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </nav>
  );
}
