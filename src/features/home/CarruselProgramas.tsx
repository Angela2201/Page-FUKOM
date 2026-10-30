"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { home } from "@/content/home";

const { fotos } = home.carrusel;

const INTERVALO_MS = 5000;

export default function CarruselProgramas() {
    const [indice, setIndice] = useState(0);
    const total = fotos.length;

    const anterior = () => setIndice((i) => (i - 1 + total) % total);
    const siguiente = () => setIndice((i) => (i + 1) % total);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const temporizador = setTimeout(() => {
            setIndice((i) => (i + 1) % total);
        }, INTERVALO_MS);

        return () => clearTimeout(temporizador);
    }, [indice, total]);

    return (
        <section className="bg-primary-200 px-20 py-10">
            <div className="relative h-[680px] w-full overflow-clip">
                <div
                    className="flex h-full gap-10 transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(calc(${-indice} * (100% + 40px)))` }}
                >
                    {fotos.map((foto) => (
                        <div
                            key={foto.src}
                            className="relative h-full w-full shrink-0 overflow-clip rounded-24 shadow-[0px_1px_6px_1px_rgba(0,0,0,0.12),0px_0px_0px_1px_rgba(0,0,0,0.08)]"
                        >
                            <Image
                                src={foto.src}
                                alt={foto.alt}
                                fill
                                sizes="1280px"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute inset-x-6 bottom-6 flex items-start gap-2.5">
                    <div className="flex flex-1">
                        <div className="flex items-center gap-2.5 p-2">
                            {fotos.map((foto, i) =>
                                i === indice ? (
                                    <Image key={foto.src} src="/icons/punto-activo.svg" alt="" width={16} height={16} />
                                ) : (
                                    <Image key={foto.src} src="/icons/punto-inactivo.svg" alt="" width={12} height={12} />
                                )
                            )}
                        </div>
                    </div>
                    <Button variant="secundario" onClick={anterior}>
                        <Image
                            src="/icons/chevron.svg"
                            alt="Foto anterior"
                            width={10}
                            height={16}
                            className="-mx-[3px] -my-1 rotate-180"
                        />
                    </Button>
                    <Button variant="secundario" onClick={siguiente}>
                        <Image
                            src="/icons/chevron.svg"
                            alt="Foto siguiente"
                            width={10}
                            height={16}
                            className="-mx-[3px] -my-1"
                        />
                    </Button>
                </div>
            </div>
        </section>
    );
}
