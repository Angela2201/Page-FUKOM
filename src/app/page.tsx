import Hero from "@/features/home/Hero";
import CarruselProgramas from "@/features/home/CarruselProgramas";
import DesigualdadEducativa from "@/features/home/DesigualdadEducativa";
import FraseDestacada from "@/features/home/FraseDestacada";
import ImpactoTerritorio from "@/features/home/ImpactoTerritorio";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <CarruselProgramas />
      </div>
      <DesigualdadEducativa />
      <FraseDestacada />
      <ImpactoTerritorio />
    </main>
  );
}
