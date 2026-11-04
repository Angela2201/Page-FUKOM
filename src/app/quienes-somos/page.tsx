import Hero from "@/features/quienes-somos/Hero";
import Valores from "@/features/quienes-somos/Valores";
import MisionVision from "@/features/quienes-somos/MisionVision";
import Promesa from "@/features/quienes-somos/Promesa";

export default function QuienesSomos() {
    return (
        <main className="flex flex-col gap-16">
            <Hero />
            <Valores />
            <MisionVision />
            <Promesa />
        </main>
    );
}
