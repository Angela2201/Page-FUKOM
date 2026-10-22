import Image from "next/image";
import Button from "@/components/ui/Button";

export default function FraseDestacada() {
    return (
        <section>
            <div className="flex items-center bg-primary-10 py-5 pl-10 pr-24">
                <div className="flex flex-1 flex-col items-start justify-center gap-10 p-2.5">
                    <div className="w-full text-primary-400">
                        <p aria-hidden="true" className="text-[128px]/[135px] font-bold">
                            ”
                        </p>
                        <p className="text-[40px]/[50px] font-bold">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                        </p>
                    </div>
                    <Button variant="secundario" href="#">
                        Conoce cómo lo hacemos
                        <Image src="/icons/chevron.svg" alt="" width={6} height={10} className="-mr-px ml-px" />
                    </Button>
                </div>
            </div>
            <Image
                src="/images/onda-seccion.svg"
                alt=""
                width={1440}
                height={60}
                className="block h-auto w-full"
            />
        </section>
    );
}