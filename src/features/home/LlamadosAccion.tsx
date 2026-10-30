import { home } from "@/content/home";
import LlamadosCarrusel from "./LlamadosCarrusel";

const { contexto, tituloSeccion } = home.llamados;

export default function LlamadosAccion() {
    return (
        <div className="flex flex-col gap-16">
            <div className="flex flex-col items-start gap-3 px-10">
                <p className="text-[28px]/9 font-medium text-neutral-800">{contexto}</p>
                <h2 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
                    {tituloSeccion}
                </h2>
            </div>
            <LlamadosCarrusel />
        </div>
    );
}
