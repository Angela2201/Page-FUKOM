import Image from "next/image";
import Button from "@/components/ui/Button";

type TarjetaDonarProps = {
  alNavegar: () => void;
};

export default function TarjetaDonar({ alNavegar }: TarjetaDonarProps) {
  return (
    <div className="relative flex w-[358px] shrink-0 flex-col items-center gap-4 rounded-24 bg-primary-200 px-6 py-14">
      <Image
        src="/images/oruga-manos.png"
        alt=""
        width={123}
        height={64}
        className="pointer-events-none absolute -top-[42px] left-1/2 -translate-x-1/2"
      />

      <p className="text-center font-heading text-[28px]/8 font-extrabold text-neutral-1000">
        ¡AYÚDALOS A
        <br />
        ABRIR SUS ALAS!
      </p>

      <p className="text-center text-base/5 text-neutral-1000">
        Cada donación se convierte en educación, herramientas y oportunidadesreales para nuestra comunidad
      </p>

      <Button
        href="/donaciones"
        onClick={alNavegar}
        icon={<Image src="/icons/corazon.svg" alt="" width={17} height={16} />}
      >
        Donar
      </Button>
    </div>
  );
}