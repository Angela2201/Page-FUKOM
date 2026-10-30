import Image from "next/image";
import Button from "@/components/ui/Button";
import { home } from "@/content/home";

const { titulo, descripcion, accion, zonas } = home.impacto;

// Capas del mapa, con las medidas de Figma dentro de un lienzo de 499 x 800
const capasMapa = [
    { src: "/images/mapa/bogota.svg", x: 128.01, y: 0.45, w: 370.52, h: 799.1 },
    { src: "/images/mapa/ciudad-bolivar.svg", x: 148.7, y: 372.43, w: 145.2, h: 339.7 },
    { src: "/images/mapa/soacha.svg", x: 0.47, y: 317.7, w: 213.2, h: 397.9 },
    { src: "/images/mapa/etiqueta-soacha.svg", x: 59.03, y: 560.72, w: 98.4, h: 18.78 },
    { src: "/images/mapa/etiqueta-bogota.svg", x: 288.6, y: 214.8, w: 138.9, h: 24 },
    { src: "/images/mapa/marcador.svg", x: 98.5, y: 438.5, w: 36, h: 44.86 },
    { src: "/images/mapa/marcador.svg", x: 228.5, y: 486.5, w: 36, h: 44.86 },
];

const zonasActivas = [
    { zona: "soacha", x: 98.5, y: 438.5, w: 36, h: 44.86 },
    { zona: "soacha", x: 59.03, y: 560.72, w: 98.4, h: 18.78 },
    { zona: "alpes", x: 228.5, y: 486.5, w: 36, h: 44.86 },
] as const;

const estilosZona = {
    soacha: {
        fondo: "bg-secondary-100",
        pin: "text-secondary",
        visible:
            "group-has-[[data-zona=soacha]:is(:hover,:focus-visible)]/mapa:translate-y-0 group-has-[[data-zona=soacha]:is(:hover,:focus-visible)]/mapa:opacity-100",
    },
    alpes: {
        fondo: "bg-primary-100",
        pin: "text-primary",
        visible:
            "group-has-[[data-zona=alpes]:is(:hover,:focus-visible)]/mapa:translate-y-0 group-has-[[data-zona=alpes]:is(:hover,:focus-visible)]/mapa:opacity-100",
    },
};

export default function ImpactoTerritorio() {
    return (
        <section className="group/mapa flex items-start gap-6 overflow-clip bg-white px-10">
            <div className="relative flex flex-[684] flex-col items-start gap-5 p-8">
                <div className="flex flex-col gap-5">
                    <h2 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
                        {titulo}
                    </h2>
                    <p className="text-[28px]/9 font-medium text-[#858585]">
                        {descripcion}
                    </p>
                </div>
                <Button variant="secundario" href={accion.href}>
                    {accion.texto}
                    <Image src="/icons/chevron.svg" alt="" width={6} height={10} className="-mr-px ml-px" />
                </Button>

                <div className="pointer-events-none absolute inset-x-8 top-full">
                    {zonas.map(({ id, titulo: tituloZona, cifras }) => (
                        <div
                            key={id}
                            className={`absolute inset-x-0 top-0 translate-y-2 rounded-24 p-6 opacity-0 transition duration-300 motion-reduce:transition-none ${estilosZona[id].fondo} ${estilosZona[id].visible}`}
                        >
                            <p className="flex items-center gap-2 text-base/5 font-semibold uppercase text-neutral-1000">
                                <svg
                                    viewBox="0 0 24 32"
                                    className={`h-5 w-4 shrink-0 ${estilosZona[id].pin}`}
                                    aria-hidden="true"
                                >
                                    <path
                                        fill="currentColor"
                                        fillRule="evenodd"
                                        d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20C24 5.4 18.6 0 12 0Zm0 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"
                                    />
                                </svg>
                                {tituloZona}
                            </p>
                            <div className="mt-4 flex items-start gap-6">
                                {cifras.map(({ valor, descripcion: descripcionCifra }) => (
                                    <div key={valor} className="flex flex-1 flex-col gap-3">
                                        <p className="font-heading text-5xl/none font-extrabold text-neutral-1000">
                                            {valor}
                                        </p>
                                        <p className="text-base/5 font-medium text-neutral-800">
                                            {descripcionCifra}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-[652] items-center justify-center rounded-24 p-4">
                <div
                    role="img"
                    aria-label="Mapa de Bogotá D.C., Ciudad Bolívar y Soacha"
                    className="relative h-[800px] w-[499px] shrink-0 overflow-clip"
                >
                    {capasMapa.map(({ src, x, y, w, h }, i) => (
                        <Image
                            key={i}
                            src={src}
                            alt=""
                            width={w}
                            height={h}
                            className="absolute max-w-none"
                            style={{ left: x, top: y, width: w, height: h }}
                        />
                    ))}

                    {zonasActivas.map(({ zona, x, y, w, h }, i) => (
                        <button
                            key={i}
                            type="button"
                            data-zona={zona}
                            aria-label={zonas.find((z) => z.id === zona)?.etiquetaAccesible}
                            className="absolute cursor-pointer rounded-12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-1000"
                            style={{ left: x, top: y, width: w, height: h }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}