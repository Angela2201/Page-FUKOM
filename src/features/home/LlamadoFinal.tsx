import Image from "next/image";
import Button from "@/components/ui/Button";
import { home } from "@/content/home";

const { titulo, accion } = home.final;

export default function LlamadoFinal() {
    return (
        <section data-fondo-footer="amarillo" className="bg-yellow-100 p-10">
            <div className="relative flex h-[636px] flex-col justify-end overflow-clip rounded-24 p-6">
                <Image
                    src="/images/cta-final.png"
                    alt=""
                    fill
                    sizes="1360px"
                    className="object-cover"
                />
                <div className="relative flex flex-col items-start gap-5">
                    <h2 className="font-heading text-[72px]/[86px] font-extrabold text-neutral-1000">
                        {titulo}
                    </h2>
                    <Button
                        variant="principal"
                        href={accion.href}
                        icon={<Image src="/icons/corazon.svg" alt="" width={17} height={16} />}
                    >
                        {accion.texto}
                    </Button>
                </div>
            </div>
        </section>
    );
}