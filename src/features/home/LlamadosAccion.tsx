import Image from "next/image";
import Button from "@/components/ui/Button";
import { home } from "@/content/home";

const { contexto, tituloSeccion, items } = home.llamados;

const fondos = {
    amarillo: "bg-yellow-100",
    azul: "bg-primary",
    naranja: "bg-secondary",
};

export default function LlamadosAccion() {
    return (
        <div className="flex flex-col gap-16">
            <div className="flex flex-col items-start gap-3 px-10">
                <p className="text-[28px]/9 font-medium text-neutral-800">{contexto}</p>
                <h2 className="font-heading text-[56px]/16 font-extrabold text-neutral-1000">
                    {tituloSeccion}
                </h2>
            </div>
            <section className="flex items-start gap-6 bg-white px-10">
                <div className="flex flex-[674] flex-col gap-6">
                    {items.map(({ color, titulo, descripcion, boton, href }) => (
                        <article
                            key={titulo}
                            className={`flex h-[640px] flex-col justify-end rounded-24 p-8 shadow-[0px_1px_6px_1px_rgba(0,0,0,0.12),0px_0px_0px_1px_rgba(0,0,0,0.08)] ${fondos[color]}`}
                        >
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

                <div className="flex-[662] self-stretch">
                    <div className="sticky top-10 h-[640px] overflow-hidden rounded-24">
                        <Image
                            src="/images/amigos-fukom.png"
                            alt="amigos-fukom"
                            fill
                            sizes="662px"
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}