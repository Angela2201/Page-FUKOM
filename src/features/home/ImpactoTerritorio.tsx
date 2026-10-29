import Image from "next/image";
import Button from "@/components/ui/Button";
import { home } from "@/content/home";

const { titulo, descripcion, accion } = home.impacto;

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

export default function ImpactoTerritorio() {
    return (
        <section className="flex items-start gap-6 overflow-clip bg-white px-10">
            <div className="flex flex-[684] flex-col items-start gap-5 p-8">
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
                </div>
            </div>
        </section>
    );
}