import Hero from "@/features/home/Hero";
import CarruselProgramas from "@/features/home/CarruselProgramas";
import DesigualdadEducativa from "@/features/home/DesigualdadEducativa";
import FraseDestacada from "@/features/home/FraseDestacada";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <CarruselProgramas />
      </div>
      <DesigualdadEducativa />
      <FraseDestacada />
    </main>
  );
}
