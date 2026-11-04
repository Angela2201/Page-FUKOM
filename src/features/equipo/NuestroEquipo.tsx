import Image from "next/image";
import { equipo } from "@/content/equipo";

const { titulo, miembros } = equipo.nuestroEquipo;

export default function NuestroEquipo() {
  return (
    <section className="flex flex-col gap-8 px-10">
      <h2 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
        {titulo}
      </h2>

      <div className="flex gap-6">
        {miembros.map(({ nombre, cargo, foto }) => (
          <article
            key={nombre}
            tabIndex={0}
            className="group relative flex h-97.25 flex-1 flex-col justify-end overflow-clip rounded-24 shadow-[0px_2px_6px_-2px_rgba(0,0,0,0.19),0px_0px_0px_1px_rgba(0,0,0,0.08)] outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          >
            <Image
              src={foto}
              alt=""
              fill
              sizes="253px"
              className="object-cover"
            />

            <div className="relative px-4 pb-4">
              <h3 className="font-heading text-[28px]/8 text-neutral-1000">
                {nombre}
              </h3>
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] motion-reduce:transition-none">
                <p className="overflow-hidden text-xl/6 font-medium text-neutral-1000">
                  {cargo}
                </p>
              </div>
            </div>

            <div className="relative h-6 rounded-b-16 bg-secondary-200 transition-colors duration-300 group-hover:bg-secondary group-focus-visible:bg-secondary motion-reduce:transition-none" />
          </article>
        ))}
      </div>
    </section>
  );
}
