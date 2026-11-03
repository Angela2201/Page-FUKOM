"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { home } from "@/content/home";

const { items, imagenes } = home.llamados;

const INTERVALO_MS = 5000;

const ALTO = 640;
const SEPARACION = 24;

const fondos = {
    amarillo: "bg-yellow-100",
    azul: "bg-primary",
    naranja: "bg-secondary",
};

const cajasIcono = {
    amarillo: "bg-yellow-200",
    azul: "bg-primary-200",
    naranja: "bg-secondary-200",
};

function suscribirMovimiento(avisar: () => void) {
    const consulta = window.matchMedia("(prefers-reduced-motion: reduce)");
    consulta.addEventListener("change", avisar);
    return () => consulta.removeEventListener("change", avisar);
}

export default function LlamadosCarrusel() {
    const seccion = useRef<HTMLElement>(null);
    const [indice, setIndice] = useState(0);
    const [visible, setVisible] = useState(false);
    const total = items.length;

    const sinMovimiento = useSyncExternalStore(
        suscribirMovimiento,
        () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        () => false
    );

    useEffect(() => {
        const elemento = seccion.current;
        if (!elemento) return;
        const observador = new IntersectionObserver(([entrada]) => setVisible(entrada.isIntersecting), {
            threshold: 0.6,
        });
        observador.observe(elemento);
        return () => observador.disconnect();
    }, []);

    useEffect(() => {
        if (!visible || sinMovimiento) return;
        const temporizador = setTimeout(() => {
            setIndice((i) => (i + 1) % total);
        }, INTERVALO_MS);
        return () => clearTimeout(temporizador);
    }, [indice, visible, sinMovimiento, total]);

    return (
        <section ref={seccion} className="flex items-start gap-6 bg-white px-10">
            <div className={`flex-[674] ${sinMovimiento ? "" : "overflow-clip"}`} style={sinMovimiento ? undefined : { height: ALTO }}>
                <div
                    className={`flex flex-col transition-transform duration-700 ease-in-out motion-reduce:transition-none`}
                    style={{
                        gap: SEPARACION,
                        transform: sinMovimiento ? undefined : `translateY(${-indice * (ALTO + SEPARACION)}px)`,
                    }}
                >
                    {items.map(({ color, icono, titulo, descripcion, boton, href }, i) => (
                        <article
                            key={titulo}
                            inert={!sinMovimiento && i !== indice}
                            className={`flex shrink-0 flex-col justify-between rounded-24 shadow-[0px_1px_6px_1px_rgba(0,0,0,0.2),0px_0px_0px_1px_rgba(0,0,0,0.08)] ${
                                color === "amarillo" ? "p-10" : "p-8"
                            } ${fondos[color]}`}
                            style={{ height: ALTO }}
                        >
                            <div
                                className={`flex items-center justify-center rounded-20 ${cajasIcono[color]}`}
                                style={{ width: icono.cajaAncho, height: icono.cajaAlto }}
                            >
                                <Image src={icono.src} alt="" width={icono.ancho} height={icono.alto} />
                            </div>

                            <div className="flex flex-col items-start gap-8">
                                <div className="flex flex-col gap-3 text-neutral-1000">
                                    <h2 className="font-heading text-[64px]/[76px] font-extrabold">{titulo}</h2>
                                    <p className="text-[28px]/9 font-medium">{descripcion}</p>
                                </div>
                                <Button variant="secundario" href={href}>
                                    {boton}
                                    <Image
                                        src="/icons/chevron.svg"
                                        alt=""
                                        width={6}
                                        height={10}
                                        className="-mr-px ml-px"
                                    />
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div className="relative flex-[662] overflow-hidden rounded-24" style={{ height: ALTO }}>
                {imagenes.map((imagen, i) => (
                    <Image
                        key={imagen.src}
                        src={imagen.src}
                        alt={i === indice ? imagen.alt : ""}
                        aria-hidden={i !== indice}
                        fill
                        sizes="662px"
                        className={`object-cover transition-opacity duration-700 motion-reduce:transition-none ${
                            i === indice ? "opacity-100" : "opacity-0"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
