import Hero from "@/features/home/Hero";
import CarruselProgramas from "@/features/home/CarruselProgramas";
import DesigualdadEducativa from "@/features/home/DesigualdadEducativa";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <CarruselProgramas />
      </div>
      <DesigualdadEducativa />
    </main>
  );
}
