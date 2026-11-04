import Hero from "@/features/equipo/Hero";
import NuestroEquipo from "@/features/equipo/NuestroEquipo";

export default function Equipo() {
  return (
    <main className="flex flex-col gap-16 pb-16">
      <Hero />
      <NuestroEquipo />
    </main>
  );
}
