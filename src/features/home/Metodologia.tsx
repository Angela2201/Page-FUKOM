import Image from "next/image";
import { home } from "@/content/home";

const { contexto, titulo, descripcion, etapas } = home.metodologia;

const ANCHO = 1360;
const ALTO = 156;

const trayectoria = [
    { src: "/images/metodologia/trayectoria-1.svg", x: -10, y: 3.5, w: 458, h: 61 },
    { src: "/images/metodologia/trayectoria-2.svg", x: 436, y: 3.5, w: 474, h: 61 },
    { src: "/images/metodologia/trayectoria-3.svg", x: 898, y: 3.5, w: 464, h: 61 },
    { src: "/images/metodologia/oruga.svg", x: -4, y: 64.5, w: 148, h: 88 },
    { src: "/images/metodologia/capullo.svg", x: 462, y: 30.5, w: 50, h: 88 },
    { src: "/images/metodologia/mariposa.svg", x: 931, y: 74.5, w: 91, h: 88 },
];

const estilos = {
    oruga: { fondo: "bg-green-10", texto: "text-green-200" },
    capullo: { fondo: "bg-yellow-alpha-10", texto: "text-secondary" },
    mariposa: { fondo: "bg-primary-10", texto: "text-primary-400" },
};

export default function Metodologia() {
    return (
        <section className="flex flex-col gap-10 p-10">
            <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <p className="text-2xl/8 font-medium text-neutral-800">
                        {contexto}
                    </p>
                    <h2 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
                        {titulo}
                    </h2>
                </div>
                <p className="text-[28px]/9 font-medium text-[#858585]">
                    {descripcion}
                </p>
            </div>

            <div className="relative aspect-[1360/156] w-full" aria-hidden="true">
                {trayectoria.map(({ src, x, y, w, h }) => (
                    <Image
                        key={src}
                        src={src}
                        alt=""
                        width={w}
                        height={h}
                        className="absolute max-w-none"
                        style={{
                            left: `${(x / ANCHO) * 100}%`,
                            top: `${(y / ALTO) * 100}%`,
                            width: `${(w / ANCHO) * 100}%`,
                            height: `${(h / ALTO) * 100}%`,
                        }}
                    />
                ))}
            </div>

            {<div className="flex items-center gap-10">
                {etapas.map(({ etapa, categoria, titulo, descripcion }, i) => (
                    <article
                        key={etapa}
                        className={`flex flex-1 overflow-clip rounded-24 bg-white shadow-[0px_1px_6px_1px_rgba(0,0,0,0.12),0px_0px_0px_1px_rgba(0,0,0,0.08)] ${i === 0 ? "self-stretch" : ""
                            }`}
                    >
                        <div className={`w-6 shrink-0 ${estilos[etapa].fondo}`} />
                        <div className="flex flex-1 flex-col gap-5 p-6">
                            <span
                                className={`w-fit rounded-full px-3 py-2 text-base/5 font-medium ${estilos[etapa].fondo} ${estilos[etapa].texto}`}
                            >
                                {categoria}
                            </span>
                            <div className="flex flex-col gap-3 text-neutral-1000">
                                <h3 className="font-heading text-[28px]/8 font-normal">{titulo}</h3>
                                <p className="text-xl/6 font-normal">{descripcion}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>}
        </section>
    );
}