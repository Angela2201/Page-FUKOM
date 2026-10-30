"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
    /** Valor final con su sufijo, por ejemplo "71%". */
    valor: string;
    /** Duración del conteo en milisegundos. */
    duracionMs?: number;
};

// Separa "71%" en el número (71) y lo que lo rodea (prefijo y sufijo)
function separar(valor: string) {
    const coincidencia = valor.match(/^(\D*)(\d+)(.*)$/);
    if (!coincidencia) return null;
    return {
        prefijo: coincidencia[1],
        numero: Number(coincidencia[2]),
        sufijo: coincidencia[3],
    };
}

export default function ContadorAnimado({ valor, duracionMs = 2000 }: Props) {
    const partes = separar(valor);
    const ref = useRef<HTMLSpanElement>(null);
    const [actual, setActual] = useState(0);

    useEffect(() => {
        const elemento = ref.current;
        if (!elemento || !partes) return;

        const { numero } = partes;
        const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let animacion = 0;

        const observador = new IntersectionObserver(
            ([entrada]) => {
                cancelAnimationFrame(animacion);

                if (!entrada.isIntersecting) {
                    setActual(0);
                    return;
                }

                if (sinMovimiento) {
                    setActual(numero);
                    return;
                }

                const inicio = performance.now();
                const paso = (ahora: number) => {
                    const progreso = Math.min((ahora - inicio) / duracionMs, 1);
                    // Frena suave al llegar al número final
                    const suavizado = 1 - Math.pow(1 - progreso, 3);
                    setActual(Math.round(numero * suavizado));
                    if (progreso < 1) animacion = requestAnimationFrame(paso);
                };
                animacion = requestAnimationFrame(paso);
            },
            { threshold: 0.4 }
        );
        observador.observe(elemento);

        return () => {
            observador.disconnect();
            cancelAnimationFrame(animacion);
        };
    }, [valor, duracionMs]);

    if (!partes) return <span>{valor}</span>;

    return (
        <span ref={ref}>
            <span className="sr-only">{valor}</span>
            <span aria-hidden="true">
                {partes.prefijo}
                {actual}
                {partes.sufijo}
            </span>
        </span>
    );
}
